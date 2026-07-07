import slugify from "slugify";
import { randomUUID } from "crypto";
import { sql } from "./db.js";

const LOCALES = ["ar", "en"];

function normalizeSlug(input) {
  return slugify(String(input || ""), { lower: true, strict: true, trim: true }) || `article-${Date.now()}`;
}

async function insertRevision(articleId, locale, localized) {
  await sql()`
    INSERT INTO article_revisions (id, article_id, locale, title, excerpt, content)
    VALUES (${randomUUID()}, ${articleId}, ${locale}, ${localized.title}, ${localized.excerpt}, ${localized.content})
  `;
}

export async function listArticlesAdmin() {
  const rows = await sql()`
    SELECT
      a.id, a.slug, a.cover_image_url, a.read_minutes, a.status, a.published_at, a.updated_at,
      l.locale, l.title, l.excerpt, l.content
    FROM articles a
    LEFT JOIN article_localizations l ON l.article_id = a.id
    ORDER BY a.updated_at DESC
  `;
  const byId = new Map();
  for (const row of rows) {
    if (!byId.has(row.id)) {
      byId.set(row.id, {
        id: row.id,
        slug: row.slug,
        coverImageUrl: row.cover_image_url || "",
        readMinutes: row.read_minutes,
        status: row.status,
        publishedAt: row.published_at,
        updatedAt: row.updated_at,
        locales: {},
      });
    }
    if (row.locale) {
      byId.get(row.id).locales[row.locale] = {
        title: row.title,
        excerpt: row.excerpt,
        content: row.content,
      };
    }
  }
  return Array.from(byId.values());
}

export async function getArticleAdmin(id) {
  const rows = await sql()`
    SELECT
      a.id, a.slug, a.cover_image_url, a.read_minutes, a.status, a.published_at, a.updated_at,
      l.locale, l.title, l.excerpt, l.content
    FROM articles a
    LEFT JOIN article_localizations l ON l.article_id = a.id
    WHERE a.id = ${id}
  `;
  if (!rows.length) return null;

  const row = rows[0];
  const article = {
    id: row.id,
    slug: row.slug,
    coverImageUrl: row.cover_image_url || "",
    readMinutes: row.read_minutes,
    status: row.status,
    publishedAt: row.published_at,
    updatedAt: row.updated_at,
    locales: {},
  };

  for (const item of rows) {
    if (item.locale) {
      article.locales[item.locale] = {
        title: item.title,
        excerpt: item.excerpt,
        content: item.content,
      };
    }
  }

  return article;
}

export async function listPublishedArticles(locale, limit) {
  const rows = limit
    ? await sql()`
        SELECT
          a.id, a.slug, a.cover_image_url, a.read_minutes, a.published_at,
          l.title, l.excerpt, l.content
        FROM articles a
        JOIN article_localizations l ON l.article_id = a.id
        WHERE a.status = 'published' AND l.locale = ${locale}
        ORDER BY a.published_at DESC NULLS LAST, a.updated_at DESC
        LIMIT ${limit}
      `
    : await sql()`
        SELECT
          a.id, a.slug, a.cover_image_url, a.read_minutes, a.published_at,
          l.title, l.excerpt, l.content
        FROM articles a
        JOIN article_localizations l ON l.article_id = a.id
        WHERE a.status = 'published' AND l.locale = ${locale}
        ORDER BY a.published_at DESC NULLS LAST, a.updated_at DESC
      `;
  return rows.map((row) => ({
    id: row.id,
    slug: row.slug,
    img: row.cover_image_url || "",
    read: locale === "ar" ? `${row.read_minutes} دقائق قراءة` : `${row.read_minutes} min read`,
    readMinutes: row.read_minutes,
    title: row.title,
    excerpt: row.excerpt,
    content: row.content,
    publishedAt: row.published_at,
  }));
}

export async function getPublishedArticleBySlug(slug, locale) {
  const rows = await sql()`
    SELECT
      a.id, a.slug, a.cover_image_url, a.read_minutes, a.published_at,
      l.title, l.excerpt, l.content
    FROM articles a
    JOIN article_localizations l ON l.article_id = a.id
    WHERE a.status = 'published' AND a.slug = ${slug} AND l.locale = ${locale}
    LIMIT 1
  `;

  if (rows.length) {
    const row = rows[0];
    return {
      id: row.id,
      slug: row.slug,
      img: row.cover_image_url || "",
      read: locale === "ar" ? `${row.read_minutes} دقائق قراءة` : `${row.read_minutes} min read`,
      readMinutes: row.read_minutes,
      title: row.title,
      excerpt: row.excerpt,
      content: row.content,
      publishedAt: row.published_at,
    };
  }

  const history = await sql()`
    SELECT a.slug
    FROM article_slug_history h
    JOIN articles a ON a.id = h.article_id
    WHERE h.old_slug = ${slug} AND a.status = 'published'
    ORDER BY h.created_at DESC
    LIMIT 1
  `;

  if (history.length) {
    return getPublishedArticleBySlug(history[0].slug, locale);
  }

  return null;
}

export async function createArticle(input) {
  const id = randomUUID();
  const slug = normalizeSlug(input.slug || input.locales?.en?.title || input.locales?.ar?.title);
  const status = input.status || "draft";
  if (status === "published") {
    await sql()`
      INSERT INTO articles (id, slug, category, cover_image_url, read_minutes, status, published_at)
      VALUES (${id}, ${slug}, ${"general"}, ${input.coverImageUrl || ""}, ${Number(input.readMinutes || 5)}, ${status}, NOW())
    `;
  } else {
    await sql()`
      INSERT INTO articles (id, slug, category, cover_image_url, read_minutes, status)
      VALUES (${id}, ${slug}, ${"general"}, ${input.coverImageUrl || ""}, ${Number(input.readMinutes || 5)}, ${status})
    `;
  }

  for (const locale of LOCALES) {
    const localized = input.locales?.[locale];
    if (!localized) continue;
    await sql()`
      INSERT INTO article_localizations (article_id, locale, title, excerpt, content)
      VALUES (${id}, ${locale}, ${localized.title}, ${localized.excerpt}, ${localized.content})
    `;
    await insertRevision(id, locale, localized);
  }
  return id;
}

export async function updateArticle(id, input) {
  const existing = await sql()`SELECT slug FROM articles WHERE id = ${id}`;
  if (!existing.length) return false;
  const nextSlug = normalizeSlug(input.slug || existing[0].slug);
  if (nextSlug !== existing[0].slug) {
    await sql()`
      INSERT INTO article_slug_history (id, article_id, old_slug)
      VALUES (${randomUUID()}, ${id}, ${existing[0].slug})
    `;
  }
  const status = input.status || "draft";
  if (status === "published") {
    await sql()`
      UPDATE articles
      SET slug = ${nextSlug},
          cover_image_url = ${input.coverImageUrl || ""},
          read_minutes = ${Number(input.readMinutes || 5)},
          status = ${status},
          published_at = COALESCE(published_at, NOW()),
          updated_at = NOW()
      WHERE id = ${id}
    `;
  } else {
    await sql()`
      UPDATE articles
      SET slug = ${nextSlug},
          cover_image_url = ${input.coverImageUrl || ""},
          read_minutes = ${Number(input.readMinutes || 5)},
          status = ${status},
          updated_at = NOW()
      WHERE id = ${id}
    `;
  }

  for (const locale of LOCALES) {
    const localized = input.locales?.[locale];
    if (!localized) continue;
    await sql()`
      INSERT INTO article_localizations (article_id, locale, title, excerpt, content)
      VALUES (${id}, ${locale}, ${localized.title}, ${localized.excerpt}, ${localized.content})
      ON CONFLICT (article_id, locale)
      DO UPDATE SET title = EXCLUDED.title, excerpt = EXCLUDED.excerpt, content = EXCLUDED.content
    `;
    await insertRevision(id, locale, localized);
  }
  return true;
}

export async function publishArticle(id) {
  await sql()`
    UPDATE articles
    SET status = 'published', published_at = NOW(), updated_at = NOW()
    WHERE id = ${id}
  `;
}

export async function deleteArticle(id) {
  await sql()`DELETE FROM articles WHERE id = ${id}`;
}

import slugify from "slugify";
import { randomUUID } from "crypto";
import { sql } from "./db.js";
import { upsertResearchFromCatalog } from "./researchRepository.js";

const LOCALES = ["ar", "en"];

/**
 * @param {import("../experts/catalog.js").Expert} expert
 */
async function upsertExpert(expert) {
  const existing = await sql()`
    SELECT id FROM experts WHERE slug = ${expert.slug} LIMIT 1
  `;

  const id = existing[0]?.id ?? randomUUID();
  const imageUrl = expert.img || null;

  if (existing.length) {
    await sql()`
      UPDATE experts
      SET
        image_url = ${imageUrl},
        status = 'published',
        featured_on_landing = TRUE,
        sort_order = 0,
        updated_at = NOW()
      WHERE id = ${id}
    `;
  } else {
    await sql()`
      INSERT INTO experts (id, slug, image_url, status, featured_on_landing, sort_order)
      VALUES (${id}, ${expert.slug}, ${imageUrl}, 'published', TRUE, 0)
    `;
  }

  for (const locale of LOCALES) {
    await sql()`
      INSERT INTO expert_localizations (expert_id, locale, name, specialty, affiliation)
      VALUES (
        ${id},
        ${locale},
        ${expert.name[locale] ?? expert.name.en},
        ${expert.specialty[locale] ?? expert.specialty.en},
        ${expert.affiliation[locale] ?? expert.affiliation.en}
      )
      ON CONFLICT (expert_id, locale) DO UPDATE SET
        name = EXCLUDED.name,
        specialty = EXCLUDED.specialty,
        affiliation = EXCLUDED.affiliation
    `;
  }

  return id;
}

/**
 * Import all entries from lib/experts/catalog.js into the database.
 * Safe to re-run: upserts by slug and refreshes team members.
 */
export async function seedExpertsAndResearchFromCatalog() {
  const { EXPERTS, RESEARCH_PUBLICATIONS } = await import("../experts/catalog.js");

  const expertIdsBySlug = new Map();

  for (const expert of Object.values(EXPERTS)) {
    const id = await upsertExpert(expert);
    expertIdsBySlug.set(expert.slug, id);
    console.log(`Expert seeded: ${expert.slug}`);
  }

  for (const research of Object.values(RESEARCH_PUBLICATIONS)) {
    const expertId = expertIdsBySlug.get(research.expertSlug);
    if (!expertId) {
      throw new Error(`Missing expert "${research.expertSlug}" for research "${research.slug}"`);
    }
    await upsertResearchFromCatalog(research, expertId);
    console.log(
      `Research seeded: ${research.slug} (${research.researchers.length} team members)`
    );
  }

  const [counts] = await sql()`
    SELECT
      (SELECT COUNT(*)::int FROM experts) AS experts,
      (SELECT COUNT(*)::int FROM expert_localizations) AS expert_locales,
      (SELECT COUNT(*)::int FROM research_publications) AS research,
      (SELECT COUNT(*)::int FROM research_team_members) AS team_members
  `;

  return counts;
}

function normalizeSlug(input) {
  return slugify(String(input || ""), { lower: true, strict: true, trim: true }) || `expert-${Date.now()}`;
}

function mapAdminExpert(rows) {
  if (!rows.length) return null;
  const row = rows[0];
  const expert = {
    id: row.id,
    slug: row.slug,
    imageUrl: row.image_url || "",
    status: row.status,
    featuredOnLanding: row.featured_on_landing,
    sortOrder: row.sort_order,
    researchCount: row.research_count ?? 0,
    updatedAt: row.updated_at,
    locales: {},
  };
  for (const item of rows) {
    if (item.locale) {
      expert.locales[item.locale] = {
        name: item.name,
        specialty: item.specialty,
        affiliation: item.affiliation,
      };
    }
  }
  return expert;
}

export async function listExpertsAdmin() {
  const rows = await sql()`
    SELECT
      e.id, e.slug, e.image_url, e.status, e.featured_on_landing, e.sort_order, e.updated_at,
      l.locale, l.name, l.specialty, l.affiliation,
      (SELECT COUNT(*)::int FROM research_publications r WHERE r.expert_id = e.id) AS research_count
    FROM experts e
    LEFT JOIN expert_localizations l ON l.expert_id = e.id
    ORDER BY e.sort_order ASC, e.updated_at DESC
  `;
  const byId = new Map();
  for (const row of rows) {
    if (!byId.has(row.id)) {
      byId.set(row.id, {
        id: row.id,
        slug: row.slug,
        imageUrl: row.image_url || "",
        status: row.status,
        featuredOnLanding: row.featured_on_landing,
        sortOrder: row.sort_order,
        researchCount: row.research_count ?? 0,
        updatedAt: row.updated_at,
        locales: {},
      });
    }
    if (row.locale) {
      byId.get(row.id).locales[row.locale] = {
        name: row.name,
        specialty: row.specialty,
        affiliation: row.affiliation,
      };
    }
  }
  return Array.from(byId.values());
}

export async function getExpertAdmin(id) {
  const rows = await sql()`
    SELECT
      e.id, e.slug, e.image_url, e.status, e.featured_on_landing, e.sort_order, e.updated_at,
      l.locale, l.name, l.specialty, l.affiliation,
      (SELECT COUNT(*)::int FROM research_publications r WHERE r.expert_id = e.id) AS research_count
    FROM experts e
    LEFT JOIN expert_localizations l ON l.expert_id = e.id
    WHERE e.id = ${id}
  `;
  return mapAdminExpert(rows);
}

export async function createExpert(input) {
  const id = randomUUID();
  const slug = normalizeSlug(input.slug || input.locales?.en?.name || input.locales?.ar?.name);
  const status = input.status === "published" ? "published" : "draft";

  await sql()`
    INSERT INTO experts (id, slug, image_url, status, featured_on_landing, sort_order)
    VALUES (
      ${id},
      ${slug},
      ${input.imageUrl || ""},
      ${status},
      ${Boolean(input.featuredOnLanding)},
      ${Number(input.sortOrder ?? 0)}
    )
  `;

  for (const locale of LOCALES) {
    const localized = input.locales?.[locale];
    if (!localized) continue;
    await sql()`
      INSERT INTO expert_localizations (expert_id, locale, name, specialty, affiliation)
      VALUES (${id}, ${locale}, ${localized.name}, ${localized.specialty}, ${localized.affiliation})
    `;
  }

  return id;
}

export async function updateExpert(id, input) {
  const existing = await sql()`SELECT slug FROM experts WHERE id = ${id}`;
  if (!existing.length) return false;

  const nextSlug = normalizeSlug(input.slug || existing[0].slug);
  if (nextSlug !== existing[0].slug) {
    await sql()`
      INSERT INTO expert_slug_history (id, expert_id, old_slug)
      VALUES (${randomUUID()}, ${id}, ${existing[0].slug})
    `;
  }

  const status = input.status === "published" ? "published" : "draft";

  await sql()`
    UPDATE experts
    SET slug = ${nextSlug},
        image_url = ${input.imageUrl || ""},
        status = ${status},
        featured_on_landing = ${Boolean(input.featuredOnLanding)},
        sort_order = ${Number(input.sortOrder ?? 0)},
        updated_at = NOW()
    WHERE id = ${id}
  `;

  for (const locale of LOCALES) {
    const localized = input.locales?.[locale];
    if (!localized) continue;
    await sql()`
      INSERT INTO expert_localizations (expert_id, locale, name, specialty, affiliation)
      VALUES (${id}, ${locale}, ${localized.name}, ${localized.specialty}, ${localized.affiliation})
      ON CONFLICT (expert_id, locale)
      DO UPDATE SET name = EXCLUDED.name, specialty = EXCLUDED.specialty, affiliation = EXCLUDED.affiliation
    `;
  }

  return true;
}

export async function publishExpert(id) {
  await sql()`
    UPDATE experts
    SET status = 'published', updated_at = NOW()
    WHERE id = ${id}
  `;
}

export async function deleteExpert(id) {
  const linked = await sql()`
    SELECT COUNT(*)::int AS count FROM research_publications WHERE expert_id = ${id}
  `;
  if (linked[0]?.count > 0) {
    throw new Error("EXPERT_HAS_RESEARCH");
  }
  await sql()`DELETE FROM experts WHERE id = ${id}`;
}

function mapPublicExpert(rows) {
  if (!rows.length) return null;
  const expert = {
    slug: rows[0].slug,
    img: rows[0].image_url || "",
    name: {},
    specialty: {},
    affiliation: {},
  };
  for (const row of rows) {
    if (row.locale) {
      expert.name[row.locale] = row.name;
      expert.specialty[row.locale] = row.specialty;
      expert.affiliation[row.locale] = row.affiliation;
    }
  }
  return expert;
}

export async function listFeaturedExpertsForLanding(locale) {
  const rows = await sql()`
    SELECT e.slug, e.image_url, l.name, l.specialty, l.affiliation
    FROM experts e
    JOIN expert_localizations l ON l.expert_id = e.id AND l.locale = ${locale}
    WHERE e.status = 'published' AND e.featured_on_landing = TRUE
    ORDER BY e.sort_order ASC, e.updated_at DESC
  `;
  return rows.map((row) => ({
    slug: row.slug,
    title: row.name,
    body: row.specialty,
    affiliation: row.affiliation,
    img: row.image_url || "",
  }));
}

export async function listPublishedExperts(locale) {
  const rows = await sql()`
    SELECT
      e.slug, e.image_url, l.name, l.specialty, l.affiliation,
      (
        SELECT COUNT(*)::int
        FROM research_publications r
        WHERE r.expert_id = e.id AND r.status = 'published'
      ) AS research_count
    FROM experts e
    JOIN expert_localizations l ON l.expert_id = e.id AND l.locale = ${locale}
    WHERE e.status = 'published'
    ORDER BY e.sort_order ASC, e.updated_at DESC
  `;
  return rows.map((row) => ({
    slug: row.slug,
    title: row.name,
    body: row.specialty,
    affiliation: row.affiliation,
    img: row.image_url || "",
    researchCount: row.research_count ?? 0,
  }));
}

export async function getPublishedExpertBySlug(slug) {
  const rows = await sql()`
    SELECT e.slug, e.image_url, l.locale, l.name, l.specialty, l.affiliation
    FROM experts e
    LEFT JOIN expert_localizations l ON l.expert_id = e.id
    WHERE e.status = 'published' AND e.slug = ${slug}
  `;

  if (rows.length) {
    return mapPublicExpert(rows);
  }

  const history = await sql()`
    SELECT e.slug
    FROM expert_slug_history h
    JOIN experts e ON e.id = h.expert_id
    WHERE h.old_slug = ${slug} AND e.status = 'published'
    ORDER BY h.created_at DESC
    LIMIT 1
  `;

  if (history.length) {
    return getPublishedExpertBySlug(history[0].slug);
  }

  return null;
}

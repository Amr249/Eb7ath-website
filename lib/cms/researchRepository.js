import slugify from "slugify";
import { randomUUID } from "crypto";
import { sql } from "./db.js";

function normalizeSlug(input) {
  return slugify(String(input || ""), { lower: true, strict: true, trim: true }) || `research-${Date.now()}`;
}

function toDateOrNull(value) {
  if (!value) return null;
  if (typeof value === "string" && /^\d{4}-\d{2}-\d{2}/.test(value)) {
    return value.slice(0, 10);
  }
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return null;
  return date.toISOString().slice(0, 10);
}

async function replaceTeamMembers(researchId, teamMembers = []) {
  await sql()`DELETE FROM research_team_members WHERE research_id = ${researchId}`;

  for (let i = 0; i < teamMembers.length; i++) {
    const member = teamMembers[i];
    await sql()`
      INSERT INTO research_team_members (
        id, research_id, sort_order, role, name_en, name_ar,
        affiliation_en, affiliation_ar, email, is_corresponding
      )
      VALUES (
        ${randomUUID()},
        ${researchId},
        ${i},
        'researcher',
        ${member.nameEn},
        ${member.nameAr || member.nameEn},
        ${member.affiliationEn},
        ${member.affiliationAr || member.affiliationEn},
        ${member.email || null},
        ${Boolean(member.isCorresponding)}
      )
    `;
  }
}

function mapTeamMember(row) {
  return {
    id: row.id,
    nameEn: row.name_en,
    nameAr: row.name_ar,
    affiliationEn: row.affiliation_en,
    affiliationAr: row.affiliation_ar,
    email: row.email || "",
    isCorresponding: row.is_corresponding,
  };
}

function mapAdminResearch(row, teamMembers = []) {
  return {
    id: row.id,
    slug: row.slug,
    expertId: row.expert_id,
    expertName: row.expert_name || "",
    title: row.title,
    journal: row.journal,
    doi: row.doi || "",
    volume: row.volume ?? "",
    articleNumber: row.article_number ?? "",
    year: row.year ?? "",
    publishedAt: row.published_at ? String(row.published_at).slice(0, 10) : "",
    externalUrl: row.external_url || "",
    telegramUrl: row.telegram_url || "",
    status: row.status,
    teamCount: row.team_count ?? teamMembers.length,
    updatedAt: row.updated_at,
    teamMembers,
  };
}

export async function listResearchAdmin() {
  const rows = await sql()`
    SELECT
      r.id, r.slug, r.expert_id, r.title, r.journal, r.doi, r.volume, r.article_number,
      r.year, r.published_at, r.external_url, r.telegram_url, r.status, r.updated_at,
      el.name AS expert_name,
      (SELECT COUNT(*)::int FROM research_team_members t WHERE t.research_id = r.id) AS team_count
    FROM research_publications r
    LEFT JOIN expert_localizations el ON el.expert_id = r.expert_id AND el.locale = 'ar'
    ORDER BY r.published_at DESC NULLS LAST, r.updated_at DESC
  `;
  return rows.map((row) => mapAdminResearch(row));
}

export async function getResearchAdmin(id) {
  const rows = await sql()`
    SELECT
      r.id, r.slug, r.expert_id, r.title, r.journal, r.doi, r.volume, r.article_number,
      r.year, r.published_at, r.external_url, r.telegram_url, r.status, r.updated_at,
      el.name AS expert_name
    FROM research_publications r
    LEFT JOIN expert_localizations el ON el.expert_id = r.expert_id AND el.locale = 'ar'
    WHERE r.id = ${id}
    LIMIT 1
  `;
  if (!rows.length) return null;

  const teamRows = await sql()`
    SELECT id, name_en, name_ar, affiliation_en, affiliation_ar, email, is_corresponding
    FROM research_team_members
    WHERE research_id = ${id}
    ORDER BY sort_order ASC
  `;

  return mapAdminResearch(rows[0], teamRows.map(mapTeamMember));
}

export async function createResearch(input) {
  const id = randomUUID();
  const slug = normalizeSlug(input.slug || input.title);
  const status = input.status === "published" ? "published" : "draft";
  const publishedAt = toDateOrNull(input.publishedAt);
  const year = input.year ? Number(input.year) : publishedAt ? Number(publishedAt.slice(0, 4)) : null;

  await sql()`
    INSERT INTO research_publications (
      id, slug, expert_id, title, journal, doi, volume, article_number, year,
      published_at, external_url, telegram_url, status
    )
    VALUES (
      ${id},
      ${slug},
      ${input.expertId},
      ${input.title},
      ${input.journal},
      ${input.doi || null},
      ${input.volume != null && input.volume !== "" ? Number(input.volume) : null},
      ${input.articleNumber != null && input.articleNumber !== "" ? Number(input.articleNumber) : null},
      ${year},
      ${publishedAt},
      ${input.externalUrl || null},
      ${input.telegramUrl || null},
      ${status}
    )
  `;

  await replaceTeamMembers(id, input.teamMembers || []);
  return id;
}

export async function updateResearch(id, input) {
  const existing = await sql()`SELECT slug FROM research_publications WHERE id = ${id}`;
  if (!existing.length) return false;

  const nextSlug = normalizeSlug(input.slug || existing[0].slug);
  if (nextSlug !== existing[0].slug) {
    await sql()`
      INSERT INTO research_slug_history (id, research_id, old_slug)
      VALUES (${randomUUID()}, ${id}, ${existing[0].slug})
    `;
  }

  const status = input.status === "published" ? "published" : "draft";
  const publishedAt = toDateOrNull(input.publishedAt);
  const year = input.year ? Number(input.year) : publishedAt ? Number(publishedAt.slice(0, 4)) : null;

  await sql()`
    UPDATE research_publications
    SET slug = ${nextSlug},
        expert_id = ${input.expertId},
        title = ${input.title},
        journal = ${input.journal},
        doi = ${input.doi || null},
        volume = ${input.volume != null && input.volume !== "" ? Number(input.volume) : null},
        article_number = ${input.articleNumber != null && input.articleNumber !== "" ? Number(input.articleNumber) : null},
        year = ${year},
        published_at = ${publishedAt},
        external_url = ${input.externalUrl || null},
        telegram_url = ${input.telegramUrl || null},
        status = ${status},
        updated_at = NOW()
    WHERE id = ${id}
  `;

  await replaceTeamMembers(id, input.teamMembers || []);
  return true;
}

export async function publishResearch(id) {
  await sql()`
    UPDATE research_publications
    SET status = 'published', updated_at = NOW()
    WHERE id = ${id}
  `;
}

export async function deleteResearch(id) {
  await sql()`DELETE FROM research_publications WHERE id = ${id}`;
}

/**
 * @param {import("../experts/catalog.js").ResearchPublication} research
 * @param {string} expertId
 */
export async function upsertResearchFromCatalog(research, expertId) {
  const existing = await sql()`
    SELECT id FROM research_publications WHERE slug = ${research.slug} LIMIT 1
  `;

  const id = existing[0]?.id ?? randomUUID();
  const publishedAt = research.publishedAt || null;

  if (existing.length) {
    await sql()`
      UPDATE research_publications
      SET
        expert_id = ${expertId},
        title = ${research.title},
        journal = ${research.journal},
        doi = ${research.doi ?? null},
        volume = ${research.volume ?? null},
        article_number = ${research.articleNumber ?? null},
        year = ${research.year ?? null},
        published_at = ${publishedAt},
        external_url = ${research.externalUrl ?? null},
        telegram_url = ${research.telegramUrl ?? null},
        status = 'published',
        updated_at = NOW()
      WHERE id = ${id}
    `;
  } else {
    await sql()`
      INSERT INTO research_publications (
        id, slug, expert_id, title, journal, doi, volume, article_number, year,
        published_at, external_url, telegram_url, status
      )
      VALUES (
        ${id},
        ${research.slug},
        ${expertId},
        ${research.title},
        ${research.journal},
        ${research.doi ?? null},
        ${research.volume ?? null},
        ${research.articleNumber ?? null},
        ${research.year ?? null},
        ${publishedAt},
        ${research.externalUrl ?? null},
        ${research.telegramUrl ?? null},
        'published'
      )
    `;
  }

  const correspondingEn = research.correspondingAuthor?.name?.en ?? null;
  const teamMembers = research.researchers.map((person) => ({
    nameEn: person.name.en,
    nameAr: person.name.ar ?? person.name.en,
    affiliationEn: person.affiliation.en,
    affiliationAr: person.affiliation.ar ?? person.affiliation.en,
    email: person.email ?? "",
    isCorresponding: correspondingEn === person.name.en,
  }));

  await replaceTeamMembers(id, teamMembers);
  return id;
}

function mapPublicResearch(row, expertRows, teamRows) {
  const consultant = { name: {}, affiliation: {} };
  for (const expertRow of expertRows) {
    if (expertRow.locale) {
      consultant.name[expertRow.locale] = expertRow.name;
      consultant.affiliation[expertRow.locale] = expertRow.affiliation;
    }
  }

  const corresponding = teamRows.find((member) => member.is_corresponding);

  return {
    slug: row.slug,
    expertSlug: row.expert_slug,
    title: row.title,
    journal: row.journal,
    doi: row.doi || "",
    volume: row.volume ?? "",
    articleNumber: row.article_number ?? "",
    year: row.year ?? "",
    publishedAt: row.published_at ? String(row.published_at).slice(0, 10) : "",
    externalUrl: row.external_url || "",
    telegramUrl: row.telegram_url || "",
    consultant,
    correspondingAuthor: corresponding
      ? {
          name: { en: corresponding.name_en, ar: corresponding.name_ar },
          email: corresponding.email || undefined,
        }
      : undefined,
    researchers: teamRows.map((member) => ({
      name: { en: member.name_en, ar: member.name_ar },
      affiliation: { en: member.affiliation_en, ar: member.affiliation_ar },
      email: member.email || undefined,
    })),
  };
}

export async function listPublishedResearchForExpertSlug(expertSlug) {
  const expert = await sql()`
    SELECT id FROM experts WHERE slug = ${expertSlug} AND status = 'published' LIMIT 1
  `;
  if (!expert.length) return [];

  const rows = await sql()`
    SELECT slug, title, journal, year, published_at
    FROM research_publications
    WHERE expert_id = ${expert[0].id} AND status = 'published'
    ORDER BY published_at DESC NULLS LAST, updated_at DESC
  `;

  return rows.map((row) => ({
    slug: row.slug,
    title: row.title,
    journal: row.journal,
    year: row.year,
    publishedAt: row.published_at ? String(row.published_at).slice(0, 10) : "",
  }));
}

export async function getPublishedResearchBySlug(slug) {
  const rows = await sql()`
    SELECT
      r.id, r.slug, r.title, r.journal, r.doi, r.volume, r.article_number, r.year,
      r.published_at, r.external_url, r.telegram_url,
      e.slug AS expert_slug,
      el.locale, el.name, el.specialty, el.affiliation
    FROM research_publications r
    JOIN experts e ON e.id = r.expert_id
    LEFT JOIN expert_localizations el ON el.expert_id = e.id
    WHERE r.status = 'published' AND r.slug = ${slug}
  `;

  if (!rows.length) {
    const history = await sql()`
      SELECT r.slug
      FROM research_slug_history h
      JOIN research_publications r ON r.id = h.research_id
      WHERE h.old_slug = ${slug} AND r.status = 'published'
      ORDER BY h.created_at DESC
      LIMIT 1
    `;
    if (history.length) {
      return getPublishedResearchBySlug(history[0].slug);
    }
    return null;
  }

  const teamRows = await sql()`
    SELECT name_en, name_ar, affiliation_en, affiliation_ar, email, is_corresponding
    FROM research_team_members
    WHERE research_id = ${rows[0].id}
    ORDER BY sort_order ASC
  `;

  const expertRows = rows.map((row) => ({
    locale: row.locale,
    name: row.name,
    specialty: row.specialty,
    affiliation: row.affiliation,
  }));

  return mapPublicResearch(rows[0], expertRows, teamRows);
}

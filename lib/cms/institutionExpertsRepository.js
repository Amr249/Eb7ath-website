import slugify from "slugify";
import { randomUUID } from "crypto";
import { sql } from "./db.js";

const LOCALES = ["ar", "en"];

function normalizeSlug(input) {
  return (
    slugify(String(input || ""), { lower: true, strict: true, trim: true }) ||
    `institution-expert-${Date.now()}`
  );
}

function mapAdminInstitutionExpert(rows) {
  if (!rows.length) return null;
  const row = rows[0];
  const expert = {
    id: row.id,
    slug: row.slug,
    researchgateUrl: row.researchgate_url || "",
    status: row.status,
    sortOrder: row.sort_order,
    researchCount: row.research_count ?? 0,
    updatedAt: row.updated_at,
    locales: {},
  };
  for (const item of rows) {
    if (item.locale) {
      expert.locales[item.locale] = {
        name: item.name,
        affiliation: item.affiliation,
      };
    }
  }
  return expert;
}

export async function listInstitutionExpertsAdmin() {
  const rows = await sql()`
    SELECT
      ie.id, ie.slug, ie.researchgate_url, ie.status, ie.sort_order, ie.updated_at,
      l.locale, l.name, l.affiliation,
      (
        SELECT COUNT(*)::int
        FROM research_team_members t
        WHERE t.institution_expert_id = ie.id
      ) AS research_count
    FROM institution_experts ie
    LEFT JOIN institution_expert_localizations l ON l.institution_expert_id = ie.id
    ORDER BY ie.sort_order ASC, ie.updated_at DESC
  `;

  const byId = new Map();
  for (const row of rows) {
    if (!byId.has(row.id)) {
      byId.set(row.id, {
        id: row.id,
        slug: row.slug,
        researchgateUrl: row.researchgate_url || "",
        status: row.status,
        sortOrder: row.sort_order,
        researchCount: row.research_count ?? 0,
        updatedAt: row.updated_at,
        locales: {},
      });
    }
    if (row.locale) {
      byId.get(row.id).locales[row.locale] = {
        name: row.name,
        affiliation: row.affiliation,
      };
    }
  }
  return Array.from(byId.values());
}

export async function listPublishedInstitutionExpertsAdmin() {
  const items = await listInstitutionExpertsAdmin();
  return items.filter((item) => item.status === "published");
}

export async function getInstitutionExpertAdmin(id) {
  const rows = await sql()`
    SELECT
      ie.id, ie.slug, ie.researchgate_url, ie.status, ie.sort_order, ie.updated_at,
      l.locale, l.name, l.affiliation,
      (
        SELECT COUNT(*)::int
        FROM research_team_members t
        WHERE t.institution_expert_id = ie.id
      ) AS research_count
    FROM institution_experts ie
    LEFT JOIN institution_expert_localizations l ON l.institution_expert_id = ie.id
    WHERE ie.id = ${id}
  `;
  return mapAdminInstitutionExpert(rows);
}

export async function createInstitutionExpert(input) {
  const id = randomUUID();
  const slug = normalizeSlug(input.slug || input.locales?.en?.name || input.locales?.ar?.name);
  const status = input.status === "published" ? "published" : "draft";

  await sql()`
    INSERT INTO institution_experts (id, slug, researchgate_url, status, sort_order)
    VALUES (
      ${id},
      ${slug},
      ${input.researchgateUrl || ""},
      ${status},
      ${Number(input.sortOrder ?? 0)}
    )
  `;

  for (const locale of LOCALES) {
    const localized = input.locales?.[locale];
    if (!localized) continue;
    await sql()`
      INSERT INTO institution_expert_localizations (institution_expert_id, locale, name, affiliation)
      VALUES (${id}, ${locale}, ${localized.name}, ${localized.affiliation})
    `;
  }

  return id;
}

export async function updateInstitutionExpert(id, input) {
  const existing = await sql()`SELECT slug FROM institution_experts WHERE id = ${id}`;
  if (!existing.length) return false;

  const nextSlug = normalizeSlug(input.slug || existing[0].slug);
  const status = input.status === "published" ? "published" : "draft";

  await sql()`
    UPDATE institution_experts
    SET slug = ${nextSlug},
        researchgate_url = ${input.researchgateUrl || ""},
        status = ${status},
        sort_order = ${Number(input.sortOrder ?? 0)},
        updated_at = NOW()
    WHERE id = ${id}
  `;

  for (const locale of LOCALES) {
    const localized = input.locales?.[locale];
    if (!localized) continue;
    await sql()`
      INSERT INTO institution_expert_localizations (institution_expert_id, locale, name, affiliation)
      VALUES (${id}, ${locale}, ${localized.name}, ${localized.affiliation})
      ON CONFLICT (institution_expert_id, locale)
      DO UPDATE SET name = EXCLUDED.name, affiliation = EXCLUDED.affiliation
    `;
  }

  return true;
}

export async function publishInstitutionExpert(id) {
  await sql()`
    UPDATE institution_experts
    SET status = 'published', updated_at = NOW()
    WHERE id = ${id}
  `;
}

export async function deleteInstitutionExpert(id) {
  const linked = await sql()`
    SELECT COUNT(*)::int AS count
    FROM research_team_members
    WHERE institution_expert_id = ${id}
  `;
  if (linked[0]?.count > 0) {
    throw new Error("INSTITUTION_EXPERT_HAS_RESEARCH");
  }
  await sql()`DELETE FROM institution_experts WHERE id = ${id}`;
}

import { unstable_cache } from "next/cache";
import {
  listFeaturedExpertsForLanding,
  listPublishedExperts,
  getPublishedExpertBySlug,
} from "./expertsRepository";
import {
  getPublishedResearchBySlug,
  listPublishedResearchForExpertSlug,
} from "./researchRepository";

export const EXPERTS_TAG = "experts-content";
export const RESEARCH_TAG = "research-content";

async function fetchFeaturedExpertsByLocale() {
  try {
    const [ar, en] = await Promise.all([
      listFeaturedExpertsForLanding("ar"),
      listFeaturedExpertsForLanding("en"),
    ]);
    return { ar, en };
  } catch {
    return { ar: [], en: [] };
  }
}

/** Featured experts for landing page (cached 60s). */
export async function getFeaturedExpertsByLocale(limit) {
  const getCached = unstable_cache(fetchFeaturedExpertsByLocale, ["featured-experts-by-locale"], {
    revalidate: 60,
    tags: [EXPERTS_TAG],
  });
  const byLocale = await getCached();
  if (!limit) return byLocale;
  return { ar: byLocale.ar.slice(0, limit), en: byLocale.en.slice(0, limit) };
}

async function fetchAllExpertsByLocale() {
  try {
    const [ar, en] = await Promise.all([listPublishedExperts("ar"), listPublishedExperts("en")]);
    return { ar, en };
  } catch {
    return { ar: [], en: [] };
  }
}

/** Every published expert, for the consultants listing page (cached 60s). */
export async function getAllExpertsByLocale() {
  const getCached = unstable_cache(fetchAllExpertsByLocale, ["all-experts-by-locale"], {
    revalidate: 60,
    tags: [EXPERTS_TAG, RESEARCH_TAG],
  });
  return getCached();
}

async function fetchExpertProfile(slug) {
  try {
    const [expert, publications] = await Promise.all([
      getPublishedExpertBySlug(slug),
      listPublishedResearchForExpertSlug(slug),
    ]);
    return { expert, publications };
  } catch {
    return { expert: null, publications: [] };
  }
}

/** Expert profile + publications for public page (cached 60s). */
export async function getExpertProfileData(slug) {
  const getCached = unstable_cache(
    () => fetchExpertProfile(slug),
    ["expert-profile", slug],
    { revalidate: 60, tags: [EXPERTS_TAG, RESEARCH_TAG, `expert-${slug}`] }
  );
  return getCached();
}

async function fetchResearchPublication(slug) {
  try {
    const research = await getPublishedResearchBySlug(slug);
    if (!research) return { research: null, expert: null };
    const expert = await getPublishedExpertBySlug(research.expertSlug);
    return { research, expert };
  } catch {
    return { research: null, expert: null };
  }
}

/** Research publication + linked expert for public page (cached 60s). */
export async function getResearchPublicationData(slug) {
  const getCached = unstable_cache(
    () => fetchResearchPublication(slug),
    ["research-publication", slug],
    { revalidate: 60, tags: [RESEARCH_TAG, EXPERTS_TAG, `research-${slug}`] }
  );
  return getCached();
}

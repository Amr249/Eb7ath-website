import { unstable_cache } from "next/cache";
import { listPublishedArticles } from "./blogRepository";

async function fetchPostsByLocale(limit) {
  try {
    const [ar, en] = await Promise.all([
      listPublishedArticles("ar", limit),
      listPublishedArticles("en", limit),
    ]);
    return { ar, en };
  } catch {
    return { ar: [], en: [] };
  }
}

/** Server-side blog list for both locales (cached 60s). */
export async function getBlogPostsByLocale(limit) {
  const cacheKey = limit ?? "all";
  const getCached = unstable_cache(
    () => fetchPostsByLocale(limit),
    ["blog-posts-by-locale", cacheKey],
    { revalidate: 60 }
  );
  return getCached();
}

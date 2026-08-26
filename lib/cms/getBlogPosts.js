import { unstable_cache } from "next/cache";
import { getPublishedArticleBySlug, listPublishedArticles } from "./blogRepository";

const BLOG_TAG = "blog-posts";

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
    { revalidate: 60, tags: [BLOG_TAG] }
  );
  return getCached();
}

async function fetchArticleBySlug(slug) {
  try {
    const [ar, en] = await Promise.all([
      getPublishedArticleBySlug(slug, "ar"),
      getPublishedArticleBySlug(slug, "en"),
    ]);
    return { ar, en };
  } catch {
    return { ar: null, en: null };
  }
}

/** Server-side single post for both locales (cached 60s). */
export async function getBlogPostBySlug(slug) {
  const getCached = unstable_cache(
    () => fetchArticleBySlug(slug),
    ["blog-post-by-slug", slug],
    { revalidate: 60, tags: [BLOG_TAG, `blog-post-${slug}`] }
  );
  return getCached();
}

export { BLOG_TAG };

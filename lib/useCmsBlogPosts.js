"use client";

import { useEffect, useState } from "react";

/**
 * @param {"ar"|"en"} locale
 * @param {{ limit?: number, initialPostsByLocale?: { ar?: unknown[], en?: unknown[] } }} options
 */
export function useCmsBlogPosts(locale, { limit, initialPostsByLocale } = {}) {
  const hasServerData = initialPostsByLocale !== undefined;
  const serverPosts = hasServerData ? initialPostsByLocale[locale] ?? [] : undefined;

  const [posts, setPosts] = useState(() => (Array.isArray(serverPosts) ? serverPosts : []));
  const [loading, setLoading] = useState(!hasServerData);

  useEffect(() => {
    let active = true;

    const params = new URLSearchParams({ locale });
    if (limit) params.set("limit", String(limit));

    fetch(`/api/public/blog?${params}`)
      .then((res) => (res.ok ? res.json() : { items: [] }))
      .then((data) => {
        if (!active) return;
        const items = Array.isArray(data.items) ? data.items : [];
        if (items.length || !hasServerData) {
          setPosts(items);
        }
      })
      .catch(() => {
        /* keep server/cached posts on failure */
      })
      .finally(() => {
        if (active) setLoading(false);
      });

    return () => {
      active = false;
    };
  }, [locale, limit, hasServerData]);

  return { posts, loading };
}

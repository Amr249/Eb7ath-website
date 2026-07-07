"use client";

import { useEffect, useState } from "react";

export function useCmsBlogPosts(locale, { limit } = {}) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    setLoading(true);

    const params = new URLSearchParams({ locale });
    if (limit) params.set("limit", String(limit));

    fetch(`/api/public/blog?${params}`)
      .then((res) => (res.ok ? res.json() : { items: [] }))
      .then((data) => {
        if (!active) return;
        setPosts(Array.isArray(data.items) ? data.items : []);
      })
      .catch(() => {
        if (active) setPosts([]);
      })
      .finally(() => {
        if (active) setLoading(false);
      });

    return () => {
      active = false;
    };
  }, [locale, limit]);

  return { posts, loading };
}

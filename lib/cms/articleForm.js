export const emptyArticleForm = {
  id: "",
  slug: "",
  coverImageUrl: "",
  readMinutes: 5,
  status: "draft",
  title: "",
  excerpt: "",
  content: "",
};

export const statusLabels = {
  draft: "مسودة",
  published: "منشور",
};

export function statusVariant(status) {
  if (status === "published") return "success";
  return "warning";
}

export function articleToForm(item) {
  const ar = item?.locales?.ar || {};
  return {
    id: item.id,
    slug: item.slug || "",
    coverImageUrl: item.coverImageUrl || "",
    readMinutes: item.readMinutes || 5,
    status: item.status || "draft",
    title: ar.title || "",
    excerpt: ar.excerpt || "",
    content: ar.content || "",
  };
}

export function toArticlePayload(form) {
  const localized = {
    title: form.title,
    excerpt: form.excerpt,
    content: form.content,
  };

  return {
    slug: form.slug,
    coverImageUrl: form.coverImageUrl,
    readMinutes: form.readMinutes,
    status: form.status,
    locales: {
      ar: localized,
      en: localized,
    },
  };
}

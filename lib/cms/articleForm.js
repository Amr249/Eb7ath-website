export const emptyArticleForm = {
  id: "",
  slug: "",
  coverImageUrl: "",
  readMinutes: 5,
  status: "draft",
  scheduledAt: "",
  title: "",
  excerpt: "",
  content: "",
};

export const statusLabels = {
  draft: "مسودة",
  scheduled: "مجدول",
  published: "منشور",
};

export function statusVariant(status) {
  if (status === "published") return "success";
  if (status === "scheduled") return "info";
  return "warning";
}

export function toDatetimeLocalValue(iso) {
  if (!iso) return "";
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return "";
  const pad = (n) => String(n).padStart(2, "0");
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}T${pad(date.getHours())}:${pad(date.getMinutes())}`;
}

export function fromDatetimeLocalValue(value) {
  if (!value) return null;
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return null;
  return date.toISOString();
}

export function formatScheduleLabel(iso, locale = "ar") {
  if (!iso) return "";
  try {
    return new Intl.DateTimeFormat(locale === "ar" ? "ar-SA" : "en-US", {
      dateStyle: "medium",
      timeStyle: "short",
    }).format(new Date(iso));
  } catch {
    return "";
  }
}

export function articleToForm(item) {
  const ar = item?.locales?.ar || {};
  return {
    id: item.id,
    slug: item.slug || "",
    coverImageUrl: item.coverImageUrl || "",
    readMinutes: item.readMinutes || 5,
    status: item.status || "draft",
    scheduledAt: toDatetimeLocalValue(item.publishedAt),
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
    scheduledAt: form.status === "scheduled" || form.status === "published"
      ? fromDatetimeLocalValue(form.scheduledAt)
      : null,
    locales: {
      ar: localized,
      en: localized,
    },
  };
}

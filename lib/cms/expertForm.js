export const emptyExpertForm = {
  id: "",
  slug: "",
  imageUrl: "",
  status: "draft",
  featuredOnLanding: false,
  sortOrder: 0,
  nameAr: "",
  nameEn: "",
  specialtyAr: "",
  specialtyEn: "",
  affiliationAr: "",
  affiliationEn: "",
};

export const expertStatusLabels = {
  draft: "مسودة",
  published: "منشور",
};

export function expertStatusVariant(status) {
  if (status === "published") return "success";
  return "warning";
}

export function expertToForm(item) {
  const ar = item?.locales?.ar || {};
  const en = item?.locales?.en || {};
  return {
    id: item.id,
    slug: item.slug || "",
    imageUrl: item.imageUrl || "",
    status: item.status || "draft",
    featuredOnLanding: Boolean(item.featuredOnLanding),
    sortOrder: item.sortOrder ?? 0,
    nameAr: ar.name || "",
    nameEn: en.name || "",
    specialtyAr: ar.specialty || "",
    specialtyEn: en.specialty || "",
    affiliationAr: ar.affiliation || "",
    affiliationEn: en.affiliation || "",
  };
}

export function toExpertPayload(form) {
  return {
    slug: form.slug,
    imageUrl: form.imageUrl,
    status: form.status,
    featuredOnLanding: form.featuredOnLanding,
    sortOrder: form.sortOrder,
    locales: {
      ar: {
        name: form.nameAr,
        specialty: form.specialtyAr,
        affiliation: form.affiliationAr,
      },
      en: {
        name: form.nameEn,
        specialty: form.specialtyEn,
        affiliation: form.affiliationEn,
      },
    },
  };
}

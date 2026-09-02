export const emptyInstitutionExpertForm = {
  id: "",
  slug: "",
  researchgateUrl: "",
  status: "draft",
  sortOrder: 0,
  nameAr: "",
  nameEn: "",
  affiliationAr: "",
  affiliationEn: "",
};

export const institutionExpertStatusLabels = {
  draft: "مسودة",
  published: "منشور",
};

export function institutionExpertStatusVariant(status) {
  if (status === "published") return "success";
  return "warning";
}

export function institutionExpertToForm(item) {
  const ar = item?.locales?.ar || {};
  const en = item?.locales?.en || {};
  return {
    id: item.id,
    slug: item.slug || "",
    researchgateUrl: item.researchgateUrl || "",
    status: item.status || "draft",
    sortOrder: item.sortOrder ?? 0,
    nameAr: ar.name || "",
    nameEn: en.name || "",
    affiliationAr: ar.affiliation || "",
    affiliationEn: en.affiliation || "",
  };
}

export function toInstitutionExpertPayload(form) {
  return {
    slug: form.slug,
    researchgateUrl: form.researchgateUrl,
    status: form.status,
    sortOrder: form.sortOrder,
    locales: {
      ar: {
        name: form.nameAr,
        affiliation: form.affiliationAr,
      },
      en: {
        name: form.nameEn,
        affiliation: form.affiliationEn,
      },
    },
  };
}

export const emptyTeamMember = {
  nameEn: "",
  nameAr: "",
  affiliationEn: "",
  affiliationAr: "",
  email: "",
  isCorresponding: false,
};

export const emptyResearchForm = {
  id: "",
  slug: "",
  expertId: "",
  title: "",
  journal: "",
  doi: "",
  volume: "",
  articleNumber: "",
  year: "",
  publishedAt: "",
  externalUrl: "",
  telegramUrl: "",
  status: "draft",
  teamMembers: [],
};

export const researchStatusLabels = {
  draft: "مسودة",
  published: "منشور",
};

export function researchStatusVariant(status) {
  if (status === "published") return "success";
  return "warning";
}

export function researchToForm(item) {
  return {
    id: item.id,
    slug: item.slug || "",
    expertId: item.expertId || "",
    title: item.title || "",
    journal: item.journal || "",
    doi: item.doi || "",
    volume: item.volume ?? "",
    articleNumber: item.articleNumber ?? "",
    year: item.year ?? "",
    publishedAt: item.publishedAt || "",
    externalUrl: item.externalUrl || "",
    telegramUrl: item.telegramUrl || "",
    status: item.status || "draft",
    teamMembers: (item.teamMembers || []).map((member) => ({
      nameEn: member.nameEn || "",
      nameAr: member.nameAr || "",
      affiliationEn: member.affiliationEn || "",
      affiliationAr: member.affiliationAr || "",
      email: member.email || "",
      isCorresponding: Boolean(member.isCorresponding),
    })),
  };
}

export function toResearchPayload(form) {
  return {
    slug: form.slug,
    expertId: form.expertId,
    title: form.title,
    journal: form.journal,
    doi: form.doi,
    volume: form.volume === "" ? null : Number(form.volume),
    articleNumber: form.articleNumber === "" ? null : Number(form.articleNumber),
    year: form.year === "" ? null : Number(form.year),
    publishedAt: form.publishedAt || null,
    externalUrl: form.externalUrl,
    telegramUrl: form.telegramUrl,
    status: form.status,
    teamMembers: form.teamMembers.map((member) => ({
      nameEn: member.nameEn,
      nameAr: member.nameAr,
      affiliationEn: member.affiliationEn,
      affiliationAr: member.affiliationAr,
      email: member.email,
      isCorresponding: member.isCorresponding,
    })),
  };
}

export function setCorrespondingMember(members, index) {
  return members.map((member, i) => ({
    ...member,
    isCorresponding: i === index,
  }));
}

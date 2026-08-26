export function expertsDict(lang) {
  const en = {
    nav: { home: "Home", about: "About us", blog: "Blog", faq: "FAQ", start: "Start" },
    footer: {
      copyright: "© 2025 Eb7ath. All rights reserved.",
      privacy: "Privacy policy",
      terms: "Terms of service",
      cookies: "Cookies settings",
    },
    profile: {
      back: "Back to home",
      nameLabel: "Name",
      affiliationLabel: "Hospital / Institution",
      specialtyLabel: "Specialty",
      publicationsTitle: "Research publications",
      publicationsLead: "Published research supervised or co-authored by this expert.",
      viewResearch: "View research",
      notFound: "Expert not found",
    },
    research: {
      back: "Back to expert profile",
      breadcrumbHome: "Home",
      breadcrumbResearch: "Research",
      typeResearch: "Research",
      openAccess: "Open access",
      published: "Published",
      volume: "Volume",
      article: "Article no.",
      consultantTitle: "Supervising consultant",
      researchersTitle: "Researchers & students",
      correspondingAuthor: "Corresponding author",
      correspondingBadge: "Corresponding",
      journalLabel: "Journal",
      doiLabel: "DOI",
      teamCount: "researchers",
      viewArticle: "View on Springer",
      joinTelegram: "Join research group on Telegram",
      viewExpertProfile: "View expert profile",
      notFound: "Research not found",
    },
  };

  const ar = {
    nav: { home: "الرئيسية", about: "من نحن", blog: "المدونة", faq: "الأسئلة الشائعة", start: "ابدأ" },
    footer: {
      copyright: "© 2025 إِبحَث. جميع الحقوق محفوظة.",
      privacy: "سياسة الخصوصية",
      terms: "شروط الخدمة",
      cookies: "إعدادات الكوكيز",
    },
    profile: {
      back: "العودة للرئيسية",
      nameLabel: "الاسم",
      affiliationLabel: "الجامعة / المستشفى",
      specialtyLabel: "التخصص",
      publicationsTitle: "الأبحاث المنشورة",
      publicationsLead: "أبحاث منشورة أشرف عليها هذا الخبير أو شارك في تأليفها.",
      viewResearch: "عرض البحث",
      notFound: "الخبير غير موجود",
    },
    research: {
      back: "العودة لملف الخبير",
      breadcrumbHome: "الرئيسية",
      breadcrumbResearch: "البحث",
      typeResearch: "بحث",
      openAccess: "وصول مفتوح",
      published: "تاريخ النشر",
      volume: "المجلد",
      article: "رقم المقال",
      consultantTitle: "الاستشاري المشرف",
      researchersTitle: "الباحثون والطلاب",
      correspondingAuthor: "الباحث المراسِل",
      correspondingBadge: "مراسِل",
      journalLabel: "المجلة",
      doiLabel: "المعرّف الرقمي",
      teamCount: "باحثاً",
      viewArticle: "عرض على Springer",
      joinTelegram: "انضم لمجموعة البحث على تيليجرام",
      viewExpertProfile: "عرض ملف الخبير",
      notFound: "البحث غير موجود",
    },
  };

  return lang === "ar" ? ar : en;
}

export function formatPublicationDate(value, lang) {
  if (!value) return "";
  try {
    return new Intl.DateTimeFormat(lang === "ar" ? "ar-EG" : "en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(new Date(value));
  } catch {
    return value;
  }
}

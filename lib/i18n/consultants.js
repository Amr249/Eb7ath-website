export function consultantsDict(lang) {
  const en = {
    nav: {
      home: "Home",
      about: "About us",
      consultants: "Consultants",
      blog: "Blog",
      faq: "FAQ",
      start: "Start",
    },
    footer: {
      copyright: "© 2025 Eb7ath. All rights reserved.",
      privacy: "Privacy policy",
      terms: "Terms of service",
      cookies: "Cookies settings",
    },
    hero: {
      eyebrow: "Our consultants",
      h1: "Consultants and university professors\nsupervising your research",
      sub: "A select group of practising consultants in the Saudi health system who supervise research methodology and support publication in peer-reviewed journals.",
    },
    list: {
      eyebrow: "The team",
      h2: "Meet the supervising consultants",
      lead: "Browse each consultant's profile to see their specialty, institution, and published research.",
      view: "View profile",
      research: "published research",
      researchOne: "published research",
      empty: "No consultants published yet.",
    },
    cta: {
      h2: "Want your research supervised\nby one of our consultants?",
      lead: "Send a request to join a research team and we will match you with the consultant closest to your specialty.",
      button: "Submit a join request",
    },
  };

  const ar = {
    nav: {
      home: "الرئيسية",
      about: "من نحن",
      consultants: "الاستشاريين",
      blog: "المدونة",
      faq: "الأسئلة الشائعة",
      start: "ابدأ",
    },
    footer: {
      copyright: "© 2025 اِبْحَثْ. جميع الحقوق محفوظة.",
      privacy: "سياسة الخصوصية",
      terms: "شروط الخدمة",
      cookies: "إعدادات الكوكيز",
    },
    hero: {
      eyebrow: "استشاريونا",
      h1: "استشاريون وأساتذة جامعيون\nيشرفون على أبحاثك",
      sub: "نخبة من الاستشاريين الممارسين في المنظومة الصحية السعودية، يشرفون على منهجية البحث ويدعمون النشر في المجلات المحكّمة.",
    },
    list: {
      eyebrow: "الفريق",
      h2: "تعرّف على الاستشاريين المشرفين",
      lead: "استعرض ملف كل استشاري لمعرفة تخصصه وجهة عمله وأبحاثه المنشورة.",
      view: "عرض الملف",
      research: "أبحاث منشورة",
      researchOne: "بحث منشور",
      empty: "لا يوجد استشاريون منشورون حالياً.",
    },
    cta: {
      h2: "تريد إشراف أحد استشاريينا\nعلى بحثك؟",
      lead: "أرسل طلب الانضمام لفريق بحثي وسنوجهك للاستشاري الأقرب لتخصصك.",
      button: "أرسل طلب انضمام",
    },
  };

  return lang === "ar" ? ar : en;
}

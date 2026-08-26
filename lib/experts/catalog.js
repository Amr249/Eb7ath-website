import { IMAGES } from "../assets";

/** @typedef {{ slug: string, name: { en: string, ar: string }, specialty: { en: string, ar: string }, affiliation: { en: string, ar: string }, img: string, researchSlugs: string[] }} Expert */

/** @typedef {{ slug: string, expertSlug: string, externalUrl: string, telegramUrl: string, doi: string, publishedAt: string, journal: string, volume: number, articleNumber: number, year: number, title: string, consultant: { name: { en: string, ar: string }, affiliation: { en: string, ar: string } }, correspondingAuthor?: { name: { en: string, ar: string }, email?: string }, researchers: { name: { en: string, ar: string }, affiliation: { en: string, ar: string }, email?: string }[] }} ResearchPublication */

/** @type {Record<string, ResearchPublication>} */
export const RESEARCH_PUBLICATIONS = {
  "visual-impairment-conflict-displaced": {
    slug: "visual-impairment-conflict-displaced",
    expertSlug: "tragi-elshaigi",
    externalUrl: "https://link.springer.com/article/10.1186/s13031-026-00765-6",
    telegramUrl: "https://t.me/+BhToIiZzIO9iZDg0",
    doi: "10.1186/s13031-026-00765-6",
    publishedAt: "2026-02-19",
    journal: "Conflict and Health",
    volume: 20,
    articleNumber: 31,
    year: 2026,
    title:
      "Prevalence of visual impairment, ocular trauma, and ocular disorders among conflict-affected and displaced populations: a systematic review and meta-analysis",
    consultant: {
      name: {
        en: "Dr. Tragi Ahmed Ali Elshaigi",
        ar: "د. تراجي أحمد علي الشائقي",
      },
      affiliation: {
        en: "Qatif Central Hospital, Qatif, Saudi Arabia",
        ar: "مستشفى القطيف المركزي، القطيف، المملكة العربية السعودية",
      },
    },
    correspondingAuthor: {
      name: {
        en: "Fatima Elbasri Abuelgasim Mohammed",
        ar: "فاطمة البصري أبو القاسم محمد",
      },
      email: "Fatima.abuelgasim12@gmail.com",
    },
    researchers: [
      {
        name: { en: "Fatima Elbasri Abuelgasim Mohammed", ar: "فاطمة البصري أبو القاسم محمد" },
        affiliation: {
          en: "Faculty of Medicine, University of Khartoum, Khartoum, Sudan",
          ar: "كلية الطب، جامعة الخرطوم، الخرطوم، السودان",
        },
        email: "Fatima.abuelgasim12@gmail.com",
      },
      {
        name: { en: "Anas Alamoudi", ar: "أنس العمودي" },
        affiliation: {
          en: "Jeddah Eye Hospital & King Saud Bin Abdulaziz University for Health Sciences, Jeddah, Saudi Arabia",
          ar: "مستشفى جدة للعيون وجامعة الملك سعود بن عبدالعزيز للعلوم الصحية، جدة، المملكة العربية السعودية",
        },
      },
      {
        name: { en: "Jana Mahmoud Alyousef", ar: "جنى محمود آل يوسف" },
        affiliation: {
          en: "College of Medicine, Princess Nourah Bint Abdulrahman University, Riyadh, Saudi Arabia",
          ar: "كلية الطب، جامعة الأميرة نورة بنت عبدالرحمن، الرياض، المملكة العربية السعودية",
        },
      },
      {
        name: { en: "Rana Mulfi Al Jasser", ar: "رنا ملفي آل جاسر" },
        affiliation: {
          en: "College of Medicine, Alfaisal University, Riyadh, Saudi Arabia",
          ar: "كلية الطب، جامعة الفيصل، الرياض، المملكة العربية السعودية",
        },
      },
      {
        name: { en: "Ahmed Ghazi Alasmari", ar: "أحمد غازي الأسمري" },
        affiliation: {
          en: "College of Medicine, Tabuk University, Tabuk, Saudi Arabia",
          ar: "كلية الطب، جامعة تبوك، تبوك، المملكة العربية السعودية",
        },
      },
      {
        name: { en: "Abdulaziz Othman Al Khaldi", ar: "عبدالعزيز عثمان آل خلدي" },
        affiliation: {
          en: "Dammam Medical Complex, Dammam, Saudi Arabia",
          ar: "مجمع الدمام الطبي، الدمام، المملكة العربية السعودية",
        },
      },
      {
        name: { en: "Shaden Mohammed Alhazmi", ar: "شادن محمد الحازمي" },
        affiliation: {
          en: "College of Medicine, Taibah University, Madinah, Saudi Arabia",
          ar: "كلية الطب، جامعة طيبة، المدينة المنورة، المملكة العربية السعودية",
        },
      },
      {
        name: { en: "Khadija Tariq Habib", ar: "خديجة طارق حبيب" },
        affiliation: {
          en: "Faculty of Medicine, Umm Al-Qura University, Makkah, Saudi Arabia",
          ar: "كلية الطب، جامعة أم القرى، مكة المكرمة، المملكة العربية السعودية",
        },
      },
      {
        name: { en: "Abdullah AlHajraf", ar: "عبدالله الحجراف" },
        affiliation: {
          en: "Jaber Alahmad Hospital, Kuwait, Kuwait",
          ar: "مستشفى جابر الأحمد، الكويت",
        },
      },
      {
        name: { en: "Abdalwahab Alenezy", ar: "عبدالوهاب العنزي" },
        affiliation: {
          en: "Kuwait Institute for Medical Specializations, Kuwait, Kuwait",
          ar: "معهد الكويت للتخصصات الطبية، الكويت",
        },
      },
      {
        name: { en: "Batool Mohammed Alhashidi", ar: "بتول محمد الهاشدي" },
        affiliation: {
          en: "College of Medicine, King Abdulaziz University, Jeddah, Saudi Arabia",
          ar: "كلية الطب، جامعة الملك عبدالعزيز، جدة، المملكة العربية السعودية",
        },
      },
      {
        name: { en: "Amal Saeed A. Althagafi", ar: "آمل سعيد آل ثقافي" },
        affiliation: {
          en: "King Abdulaziz Specialist Hospital, Taif, Saudi Arabia",
          ar: "مستشفى الملك عبدالعزيز التخصصي، الطائف، المملكة العربية السعودية",
        },
      },
      {
        name: { en: "Sara Almesfer", ar: "سارة آل مسفر" },
        affiliation: {
          en: "College of Medicine, Dar Al-Uloom University, Riyadh, Saudi Arabia",
          ar: "كلية الطب، جامعة دار العلوم، الرياض، المملكة العربية السعودية",
        },
      },
      {
        name: { en: "Shaima ShamsEldeen KhalfAllah Ahmed", ar: "شيما شمس الدين خلف الله أحمد" },
        affiliation: {
          en: "Faculty of Medicine, University of Khartoum, Khartoum, Sudan",
          ar: "كلية الطب، جامعة الخرطوم، الخرطوم، السودان",
        },
      },
    ],
  },
};

/** @type {Record<string, Expert>} */
export const EXPERTS = {
  "tragi-elshaigi": {
    slug: "tragi-elshaigi",
    name: {
      en: "Dr. Tragi Ahmed Ali Elshaigi",
      ar: "د. تراجي أحمد علي الشائقي",
    },
    specialty: {
      en: "Ophthalmology Consultant",
      ar: "استشاري، طب العيون",
    },
    affiliation: {
      en: "Ministry of Health, Qatif Central Hospital, Eastern Province",
      ar: "وزارة الصحة، مستشفى القطيف المركزي، المنطقة الشرقية",
    },
    img: IMAGES.mentorDefault,
    researchSlugs: ["visual-impairment-conflict-displaced"],
  },
};

export function getExpert(slug) {
  return EXPERTS[slug] ?? null;
}

export function getResearch(slug) {
  return RESEARCH_PUBLICATIONS[slug] ?? null;
}

export function getExpertsForLanding(lang) {
  return Object.values(EXPERTS).map((expert) => ({
    slug: expert.slug,
    title: expert.name[lang] ?? expert.name.en,
    body: expert.specialty[lang] ?? expert.specialty.en,
    affiliation: expert.affiliation[lang] ?? expert.affiliation.en,
    img: expert.img,
  }));
}

export function getResearchForExpert(expertSlug) {
  const expert = getExpert(expertSlug);
  if (!expert) return [];

  const bySlug = new Map();

  for (const slug of expert.researchSlugs ?? []) {
    const item = getResearch(slug);
    if (item) bySlug.set(item.slug, item);
  }

  for (const item of Object.values(RESEARCH_PUBLICATIONS)) {
    if (item.expertSlug === expertSlug) bySlug.set(item.slug, item);
  }

  return [...bySlug.values()]
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .map((item) => ({
      slug: item.slug,
      title: item.title,
      journal: item.journal,
      year: item.year,
      publishedAt: item.publishedAt,
    }));
}

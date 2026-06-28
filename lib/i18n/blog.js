import { IMAGES } from "../assets";

export function blogDict(lang) {
  const en = {
    nav: { home: "Home", about: "About us", blog: "Blog", login: "Login", start: "Start" },
    hero: { eyebrow: "Insights", h1: "Research and advancement", sub: "Discover strategies, case studies, and guidance for building your academic profile.", read: "Read", subscribe: "Subscribe" },
    feat: { eyebrow: "Featured", h2: "What matters now", lead: "Essential reading for your research journey", readMore: "Read more", empty: "No posts in this category yet. Check back soon." },
    news: { h2: "Stay informed", lead: "Get new insights delivered to your inbox each week.", placeholder: "Enter email", join: "Join us", note: "We respect your inbox and won't send spam." },
    tabs: [
      { value: "all", label: "All posts" },
      { value: "publishing", label: "Publishing" },
      { value: "research", label: "Research" },
      { value: "career", label: "Career" },
      { value: "statistics", label: "Statistics" },
    ],
    posts: [
      { cat: "publishing", category: "Publishing", read: "8 min read", title: "Getting your work into indexed journals", excerpt: "Learn the practical steps to navigate peer review and secure publication in reputable journals.", img: IMAGES.homeResearch0 },
      { cat: "research", category: "Research", read: "6 min read", title: "Building your research profile as a resident", excerpt: "Strategic approaches to accumulating research points while managing clinical responsibilities.", img: IMAGES.homeResearch1 },
      { cat: "career", category: "Career", read: "7 min read", title: "SCFHS requirements and your academic future", excerpt: "Understanding the standards that shape your path to advancement in Saudi medicine.", img: IMAGES.homeResearch2 },
      { cat: "publishing", category: "Publishing", read: "9 min read", title: "Peer review strategies that strengthen your manuscript", excerpt: "Master the revision process and address reviewer feedback with confidence.", img: IMAGES.homeFeatures0 },
      { cat: "statistics", category: "Statistics", read: "5 min read", title: "Choosing the right statistical test for your study", excerpt: "A plain-language guide to matching your research question with the correct analysis in SPSS and R.", img: IMAGES.homeFeatures1 },
      { cat: "research", category: "Research", read: "8 min read", title: "Designing a prospective cohort study", excerpt: "From defining your population to managing follow-up: the building blocks of robust observational research.", img: IMAGES.homeStats0 },
    ],
    footer: { copyright: "© 2025 Eb7ath. All rights reserved.", privacy: "Privacy policy", terms: "Terms of service", cookies: "Cookies settings" },
  };

  const ar = {
    nav: { home: "الرئيسية", about: "من نحن", blog: "المدونة", login: "تسجيل الدخول", start: "ابدأ" },
    hero: { eyebrow: "رؤى", h1: "البحث والتقدّم", sub: "اكتشف الاستراتيجيات ودراسات الحالة والإرشادات لبناء ملفك الأكاديمي.", read: "اقرأ", subscribe: "اشترك" },
    feat: { eyebrow: "مميّز", h2: "ما يهمّ الآن", lead: "قراءات أساسية لرحلتك البحثية", readMore: "اقرأ المزيد", empty: "لا توجد مقالات في هذا التصنيف بعد. عُد قريبًا." },
    news: { h2: "ابقَ على اطلاع", lead: "احصل على رؤى جديدة في بريدك كل أسبوع.", placeholder: "أدخل بريدك", join: "انضم إلينا", note: "نحترم بريدك ولن نرسل رسائل مزعجة." },
    tabs: [
      { value: "all", label: "كل المقالات" },
      { value: "publishing", label: "النشر" },
      { value: "research", label: "البحث" },
      { value: "career", label: "المسار المهني" },
      { value: "statistics", label: "الإحصاء" },
    ],
    posts: [
      { cat: "publishing", category: "النشر", read: "٨ دقائق قراءة", title: "كيف تُدرج عملك في المجلات المفهرسة", excerpt: "تعلّم الخطوات العملية لاجتياز مراجعة الأقران وتأمين النشر في مجلات موثوقة.", img: IMAGES.homeResearch0 },
      { cat: "research", category: "البحث", read: "٦ دقائق قراءة", title: "بناء ملفك البحثي خلال فترة الإقامة", excerpt: "أساليب استراتيجية لجمع نقاط البحث مع إدارة المسؤوليات السريرية.", img: IMAGES.homeResearch1 },
      { cat: "career", category: "المسار المهني", read: "٧ دقائق قراءة", title: "متطلبات الهيئة ومستقبلك الأكاديمي", excerpt: "فهم المعايير التي تشكّل طريقك نحو التقدّم في الطب السعودي.", img: IMAGES.homeResearch2 },
      { cat: "publishing", category: "النشر", read: "٩ دقائق قراءة", title: "استراتيجيات مراجعة الأقران التي تقوّي مخطوطتك", excerpt: "أتقن عملية التعديل وتعامل مع ملاحظات المحكّمين بثقة.", img: IMAGES.homeFeatures0 },
      { cat: "statistics", category: "الإحصاء", read: "٥ دقائق قراءة", title: "اختيار الاختبار الإحصائي المناسب لدراستك", excerpt: "دليل ميسّر لمطابقة سؤال بحثك بالتحليل الصحيح في SPSS وR.", img: IMAGES.homeFeatures1 },
      { cat: "research", category: "البحث", read: "٨ دقائق قراءة", title: "تصميم دراسة أترابية مستقبلية", excerpt: "من تحديد المجتمع إلى إدارة المتابعة: لبنات البحث الرصدي المتين.", img: IMAGES.homeStats0 },
    ],
    footer: { copyright: "© 2025 إِبحَث. جميع الحقوق محفوظة.", privacy: "سياسة الخصوصية", terms: "شروط الخدمة", cookies: "إعدادات الكوكيز" },
  };

  return lang === "ar" ? ar : en;
}

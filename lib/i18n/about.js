import { IMAGES } from "../assets";

export function aboutDict(lang) {
  const en = {
    nav: { home: "Home", about: "About us", blog: "Blog", faq: "FAQ", login: "Login", start: "Start" },
    hero: {
      eyebrow: "About",
      h1: "Real research, real impact",
      sub: "Eb7ath exists because Saudi doctors deserve better. No shortcuts, no predatory journals, no anonymous writers.",
      explore: "Explore",
      learn: "Learn more",
    },
    vmv: {
      tagline: "About",
      heading: "Vision,\u00A0mission\u00A0&\u00A0values",
      description:
        "The principles that guide every research partnership we build with Saudi doctors.",
      cardBig: {
        tagline: "Our Values",
        image: IMAGES.vmvSection,
        heading: "Integrity, accuracy, partnership & transparency",
        items: [
          { title: "Integrity", body: "Knowledge is a trust, and we are guardians of that trust." },
          { title: "Accuracy", body: "Statistical and linguistic methodology is our compass." },
          { title: "Partnership", body: "The success and acceptance of your research is our personal measure of success." },
          { title: "Transparency", body: "Complete clarity on pathways, costs, and requirements from day one." },
        ],
      },
      sections: [
        {
          icon: "book-open",
          heading: "Our Mission",
          description:
            "Removing methodological and time barriers facing national medical talent, by providing a collaborative research environment that combines scientific rigor with flexible digital solutions, with absolute commitment to the highest standards of academic integrity.",
        },
        {
          icon: "globe",
          heading: "Our Vision",
          description:
            "To be the primary reference and trusted catalyst for the medical research renaissance in Saudi Arabia, enabling every healthcare practitioner to leave a global scientific mark.",
        },
      ],
    },
    why: {
      eyebrow: "Advantage",
      h2: "Why doctors choose Eb7ath",
      lead: "Strong points that speak to what Saudi doctors need and set us apart from any competitor.",
    },
    whyCards: [
      {
        eyebrow: "Local context",
        title: "Deep understanding of the local context",
        body: "Precise knowledge of SCFHS standards and residency program requirements across the Kingdom.",
        learn: "Learn",
        img: IMAGES.localContext,
      },
      {
        eyebrow: "Elite mentors",
        title: "Practicing consultant mentors",
        body: "Research supervised by consultants and university professors active in major Saudi hospitals and universities.",
        learn: "Learn",
        img: IMAGES.eliteMentors,
      },
      {
        eyebrow: "Quality filter",
        title: "Strict filtering against predatory journals",
        body: "We protect your professional reputation by targeting ISI/Scopus indexed journals only, with full research ethics.",
        learn: "Learn",
        img: IMAGES.qualityFilter,
      },
      {
        eyebrow: "Empowerment",
        title: "Empowerment, not replacement",
        body: "We don't write your research for you. You join the team, build skills, and earn your place as a co-author on your promotion file.",
        learn: "Learn",
        img: IMAGES.empowerment,
      },
      {
        eyebrow: "Smart efficiency",
        title: "Smart time-saving",
        body: "We know how valuable a doctor's time is. Agile pathways and focused statistical and methodological support let you focus on clinical insight.",
        learn: "Learn",
        img: IMAGES.homeStats0,
      },
      {
        eyebrow: "Vision 2030",
        title: "Aligned with Vision 2030",
        body: "A direct contribution to national goals by supporting health innovation and developing Saudi talent in research and development.",
        learn: "Learn",
        img: IMAGES.vision2030,
      },
    ],
    cta: { h2: "Start your research journey", lead: "Connect with Eb7ath and build the academic profile your career demands.", btn: "Start your research journey now" },
    footer: { copyright: "© 2025 Eb7ath. All rights reserved.", privacy: "Privacy policy", terms: "Terms of service", cookies: "Cookies settings" },
  };

  const ar = {
    nav: { home: "الرئيسية", about: "من نحن", blog: "المدونة", faq: "الأسئلة الشائعة", login: "تسجيل الدخول", start: "ابدأ" },
    hero: {
      eyebrow: "من نحن",
      h1: "بحث حقيقي، أثر حقيقي",
      sub: "وُجد «إِبحَث» لأن الأطباء السعوديين يستحقون الأفضل. لا اختصارات، ولا مجلات مفترسة، ولا كُتّاب مجهولون.",
      explore: "استكشف",
      learn: "اعرف المزيد",
    },
    vmv: {
      tagline: "من نحن",
      heading: "رؤيتنا\u00A0ورسالتنا\u00A0وقيمنا",
      description: "المبادئ التي تقود كل شراكة بحثية نبنيها مع الأطباء السعوديين.",
      cardBig: {
        tagline: "قيمنا",
        image: IMAGES.vmvSection,
        heading: "النزاهة والدقة والشراكة والشفافية",
        items: [
          { title: "النزاهة", body: "العلم أمانة، ونحن حراس هذه الأمانة." },
          { title: "الدقة", body: "المنهجية الإحصائية واللغوية هي بوصلتنا." },
          { title: "الشراكة", body: "نجاح بحثك وقبوله هو معيار نجاحنا الشخصي." },
          { title: "الشفافية", body: "وضوح تام في التكاليف و المتطلبات، المسؤليات و الاخلاقيات منذ اليوم الاول" },
        ],
      },
      sections: [
        {
          icon: "book-open",
          heading: "رسالتنا",
          description:
            "تذليل العقبات المنهجية والزمنية أمام الكفاءات الطبية الوطنية، عبر توفير بيئة بحثية تعاونية تجمع بين صرامة البحث العلمي ومرونة الحلول الرقمية، مع الالتزام المطلق بأعلى معايير النزاهة الأخلاقية الأكاديمية.",
        },
        {
          icon: "globe",
          heading: "رؤيتنا",
          description:
            "أن نكون المرجع الأول والمحرك الموثوق للنهضة البحثية الطبية في المملكة العربية السعودية، لتمكين كل ممارس صحي من ترك بصمة علمية عالمية.",
        },
      ],
    },
    why: {
      eyebrow: "الميزة",
      h2: "لماذا يختار الأطباء «إِبحَث»",
    },
    whyCards: [
      {
        eyebrow: "السياق المحلي",
        title: "فهمنا عميق للسياق المحلي",
        body: "معرفة دقيقة بمعايير الهيئة السعودية للتخصصات الصحية (SCFHS) ومتطلبات برامج الإقامة في المملكة.",
        learn: "تعرّف",
        img: IMAGES.localContext,
      },
      {
        eyebrow: "الخبراء",
        title: "نخبة من المستشارين الممارسين",
        body: "إشراف أكاديمي من استشاريين وأساتذة جامعيين ممارسين في كبرى المستشفيات والجامعات السعودية.",
        learn: "تعرّف",
        img: IMAGES.eliteMentors,
      },
      {
        eyebrow: "الجودة",
        title: "فلترة صارمة ضد «المجلات المفترسة»",
        body: "حماية سمعتك المهنية عبر استهداف مجلات مفهرسة في ISI/Scopus فقط، والالتزام الكامل بأخلاقيات البحث العلمي.",
        learn: "تعرّف",
        img: IMAGES.qualityFilter,
      },
      {
        eyebrow: "التمكين",
        title: "منهجية «التمكين لا الاستبدال»",
        body: "لا نكتب عنك البحث، بل نشاركك في الفريق لتكتسب المهارة وتستحق مكانك كمؤلف مشارك في ملفك الترقي.",
        learn: "تعرّف",
        img: IMAGES.empowerment,
      },
      {
        eyebrow: "الوقت",
        title: "توفير الوقت بذكاء",
        body: "نعلم قيمة وقت الطبيب، لذا نعتمد مسارات مرنة ونركز على الدعم الإحصائي والمنهجي المعقد، لتركّز أنت على الإبداع السريري.",
        learn: "تعرّف",
        img: IMAGES.homeStats0,
      },
      {
        eyebrow: "رؤية 2030",
        title: "التوافق مع رؤية 2030",
        body: "مساهمة مباشرة في أهداف الرؤية عبر دعم ابتكار القطاع الصحي وتطوير الكفاءات الوطنية في البحث والتطوير.",
        learn: "تعرّف",
        img: IMAGES.vision2030,
      },
    ],
    cta: { h2: "ابدأ رحلتك البحثية", lead: "تواصل مع «إِبحَث» وابنِ الملف الأكاديمي الذي تتطلبه مسيرتك.", btn: "ابدأ رحلتك البحثية الآن" },
    footer: { copyright: "© 2025 إِبحَث. جميع الحقوق محفوظة.", privacy: "سياسة الخصوصية", terms: "شروط الخدمة", cookies: "إعدادات الكوكيز" },
  };

  return lang === "ar" ? ar : en;
}

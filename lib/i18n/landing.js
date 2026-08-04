import { IMAGES } from "../assets";

const VOICE_PHOTOS = {
  FA: IMAGES.testiWomen2,
  NS: IMAGES.testiWomen4,
  LM: IMAGES.testiWomen1,
  AH: IMAGES.testiWomen3,
  MH: IMAGES.testiMan3,
  KE: IMAGES.testiMan1,
  AR: IMAGES.testiMan5,
  SD: IMAGES.testiMan2,
  HQ: IMAGES.testiMan4,
};

function withVoicePhotos(dict) {
  dict.voicesLeft = dict.voicesLeft.map((v) => ({ ...v, img: VOICE_PHOTOS[v.initials] }));
  dict.voicesRight = dict.voicesRight.map((v) => ({ ...v, img: VOICE_PHOTOS[v.initials] }));
  return dict;
}

export function landingDict(lang) {
  const en = {
    nav: { home: "Home", about: "About us", blog: "Blog", faq: "FAQ", login: "Login", start: "Start" },
    hero: {
      title: "Build your research career with purpose",
      start: "Start",
      learn: "Learn more",
      sub: "Baheth connects Saudi doctors with active research teams and provides the academic support you need to advance your career. Earn your SCFHS points through genuine collaboration, not shortcuts.",
    },
    stats: {
      h3: "Numbers that speak to our commitment",
      p: "We build trust through real numbers, and partners who demonstrate the quality of our service and the integrity of our academic path.",
      v1: "12+",
      l1: "Partner consultants and academics",
      v2: "500+",
      l2: "Doctors who earned SCFHS points through our platform",
      v3: "15+",
      l3: "Research papers published through our experts on the platform",
    },
    path: {
      eyebrow: "Pathways",
      h2: "Researchers' tracks",
      lead: "Whether you're looking for a ready research opportunity or need support to bring your own idea to publication, choose the path that fits you today.",
      c1title: "Join active research teams.",
      c1body: "Ready research projects under direct supervision. Contribute to data collection, analysis, or writing, and earn co-authorship that supports your profile and preference points.",
      c1cta: "Browse projects",
      c2title: "Focus on your studies and patient care. We handle the academic empowerment.",
      c2body: "Clinic time comes first. Baheth turns your idea into a solid paper through methodology review, statistical analysis, and guidance to publish in prestigious journals.",
      c2cta: "Research services",
    },
    steps: {
      eyebrow: "From start to publication",
      h2: "From choosing your specialty to publication: four simple steps stand between you and your next research.",
      cta: "Submit your team join request",
      items: [
        { title: "Define your path", body: "Register your details and choose the medical specialty you're targeting." },
        { title: "Team formation", body: "We connect you with colleagues in the same specialty under a consultant who shapes the strongest research idea." },
        { title: "Final approval", body: "Once the plan is complete, we contact you to confirm your seat and finalize payment." },
        { title: "Research launch", body: "Your systematic journey begins with the team to achieve your scientific milestone and earn your authorship." },
      ],
    },
    story: {
      eyebrow: "Story",
      h2: "Eb7ath was built by doctors for doctors",
      lead: "We started because we saw talented physicians held back by the gap between clinical work and research. We built a bridge. Now we help others cross it.",
      learn: "Learn",
      about: "About",
    },
    svcHead: {
      eyebrow: "Services",
      h2: "Integrated academic solutions for your own research",
      lead: "Focused support for doctors with their own research projects. Every service is built around the outcome you need, not just the task.",
    },
    services: [
      { eyebrow: "Analysis", title: "Medical statistical analysis", body: "Accurate results with advanced software (SPSS/R) that fully meets international journal requirements.", learn: "Learn", explore: "Explore", img: IMAGES.ssrService },
      { eyebrow: "Review", title: "Methodological and linguistic review", body: "Solid academic phrasing that elevates your research quality and meets the strict standards of peer-reviewed journals.", learn: "Learn", explore: "Explore", img: IMAGES.methodologicalReview },
      { eyebrow: "Consultation", title: "Research consultations", body: "One-on-one guidance sessions with experts to map your research from idea to publication.", learn: "Learn", explore: "Explore", img: IMAGES.researchConsultations },
      { eyebrow: "Publishing", title: "Scientific publishing assistance", body: "Strategic guidance to choose the right journals and manage correspondence professionally, smoothing your publishing journey.", learn: "Learn", explore: "Explore", img: IMAGES.homeResearch1 },
      { eyebrow: "Support", title: "Open research support", body: "Stuck mid-research and unsure of your next step or exactly what kind of help you need? Leave the assessment to us. Reach out so we can understand the obstacles you face and recommend the methodological solutions that close the gap in your research, whatever it may be.", learn: "Learn", explore: "Explore", img: IMAGES.homeResearch2 },
    ],
    oppsHead: {
      eyebrow: "Our mentors",
      h2: "A select group of academics at your service",
      lead: "Place your research under the supervision of consultants and practicing university professors in the Saudi health system, experts who understand local and international admission standards.",
      view: "View profile",
      viewAll: "Meet our experts",
    },
    projects: [
      { title: "Dr. Fatima Al-Otaibi", body: "Consultant, Pediatrics", img: IMAGES.mentorFatima },
      { title: "Dr. Mohammed Al-Harbi", body: "Consultant, Cardiology", img: IMAGES.mentorMohammed },
      { title: "Dr. Khalid Al-Enezi", body: "Consultant, Gastroenterology", img: IMAGES.mentorKhalid },
    ],
    blogHome: {
      eyebrow: "Blog",
      h2: "Insights that support your research journey",
      lead: "Practical articles to help doctors navigate methodology, publication, and research strategy with confidence.",
      cta: "View all articles",
      readMore: "Read article",
      loading: "Loading articles...",
    },
    blogCards: [
      {
        slug: "statistical-test-guide",
        read: "5 min read",
        title: "Choosing the right statistical test for your study",
        excerpt: "A plain-language guide to matching your research question with the correct analysis in SPSS and R.",
        img: IMAGES.homeFeatures1,
        readMore: "Read article",
      },
      {
        slug: "publishable-research-design",
        read: "7 min read",
        title: "How to build a publishable research design",
        excerpt: "Core decisions that raise your paper quality before data collection even starts.",
        img: IMAGES.servicesFeature,
        readMore: "Read article",
      },
      {
        slug: "journal-rejection-mistakes",
        read: "6 min read",
        title: "Avoiding common reasons journals reject medical papers",
        excerpt: "A practical checklist to reduce desk rejection and strengthen your submission.",
        img: IMAGES.blogNewsletter,
        readMore: "Read article",
      },
    ],
    testi: { h2: "Real voices", sub: "Doctors who found their way", explore: "Explore", connect: "Connect" },
    voicesLeft: [
      { quote: '"They understood exactly what SCFHS needed. No guessing, no wasted effort."', name: "Dr. Fatima Al-Otaibi", role: "Consultant, Pediatrics", initials: "FA" },
      { quote: '"I had the research idea but not the time. Eb7ath handled the statistics and writing review. I earned my co-authorship."', name: "Dr. Mohammed Al-Harbi", role: "Fellow, Cardiology", initials: "MH" },
      { quote: '"My research idea was solid but I had no idea how to get it published. They guided every step."', name: "Dr. Noor Al-Shammari", role: "Resident, Obstetrics", initials: "NS" },
      { quote: '"The writing review feedback was specific and practical. My manuscript went from rough to ready."', name: "Dr. Khalid Al-Enezi", role: "Consultant, Gastroenterology", initials: "KE" },
    ],
    voicesRight: [
      { quote: '"Eb7ath made it possible to publish while managing my residency. The support was real, not just templates."', name: "Dr. Ahmed Al-Rashid", role: "Resident, Internal Medicine", initials: "AR" },
      { quote: '"The statistical analysis alone saved me months. I could focus on the clinical insight while they handled SPSS."', name: "Dr. Layla Al-Mutairi", role: "Fellow, Orthopedic Surgery", initials: "LM" },
      { quote: '"I needed publications for my promotion, but research felt impossible during residency. Eb7ath made it real."', name: "Dr. Samir Al-Dosari", role: "Resident, Emergency Medicine", initials: "SD" },
      { quote: '"They understand SCFHS requirements better than anyone. No wasted submissions to the wrong journals."', name: "Dr. Amira Al-Harbi", role: "Fellow, Rheumatology", initials: "AH" },
      { quote: '"They matched me with a team doing work I actually cared about. The co-authorship felt earned, not given."', name: "Dr. Hassan Al-Qahtani", role: "Consultant, Neurology", initials: "HQ" },
    ],
    cta: { h2: "Advance your career through rigorous scientific research.", lead: "Join today more than 500+ healthcare practitioners who trust Eb7ath to grow their careers.", signup: "Start your research journey now" },
    faqHead: { h2: "FAQ", lead: "Find answers to questions about joining research teams, earning co-authorship, and meeting SCFHS requirements.", more: "Have more questions?", contact: "Read more" },
    faqItems: [
      { title: "How does co-authorship work?", content: "You join an active research team or develop your own project with our support. We provide statistical analysis, writing review, and publication guidance. Your name appears on the paper because you contributed genuine research work." },
      { title: "Will this help my SCFHS points?", content: "Yes. Every publication in a Scopus or ISI indexed journal counts toward your SCFHS requirements. We understand the exact standards and timeline you're working within." },
      { title: "What if I have no research experience?", content: "That's where we start. Our consultants guide you through methodology, statistical analysis, and manuscript preparation. You'll learn as you go, earning your co-authorship genuinely." },
      { title: "How long does publication take?", content: "Timeline varies by journal and research complexity. We target indexed journals with reasonable review periods and help navigate the submission and revision process efficiently." },
      { title: "Can I work while doing this?", content: "Absolutely. Most of our doctors are in residency or clinical practice. We structure support around your schedule, not the other way around." },
    ],
    footer: { copyright: "© 2025 Eb7ath. All rights reserved.", privacy: "Privacy policy", terms: "Terms of service", cookies: "Cookies settings" },
  };

  const ar = {
    nav: { home: "الرئيسية", about: "من نحن", blog: "المدونة", faq: "الأسئلة الشائعة", login: "تسجيل الدخول", start: "ابدأ" },
    hero: {
      title: "مسارك العلمي الأوثق لتعزيز ملفك المهني والبحثي",
      start: "استكشف الفرص البحثية",
      learn: "انضم لفريق بحثي",
      sub: "بين ضغط المناوبات السريرية ومعايير الهيئة السعودية للتخصصات الصحية، تقف «إِبحَث» كشريكك الأكاديمي الموثوق؛ لتُمكّنك منهجياً وتُجنّبك خطر مسارات النشر غير المعتمدة.",
    },
    stats: {
      h3: "أرقام تعبّر عن التزامنا",
      p: "نبني الثقة من خلال أرقام حقيقية، وشركاء يبرهنون على جودة خدمتنا والتزام راسخ بأخلاقيات البحث وسلامة المسار الأكاديمي.",
      v1: "١٢+",
      l1: "استشاري وأكاديمي شريك",
      v2: "500+",
      l2: "طبيب حققوا نقاط الهيئة عبر منصتنا",
      v3: "١٥+",
      l3: "بحث منشور عبر خبرائنا في المنصة",
    },
    path: {
      eyebrow: "المسارات",
      h2: "مسارات الباحثين",
      lead: "سواء كنت تبحث عن فرصة بحثية جاهزة أو تحتاج دعماً لإنجاز بحثك الخاص، اختر المسار الذي يناسب احتياجك اليوم.",
      c1title: "انضم لفرق البحث النشطة.",
      c1body: "مشاريع بحثية جاهزة تحت إشراف مباشر. ساهم في جمع البيانات أو التحليل أو الكتابة، واستحق مكانك كمؤلف مشارك يدعم ملفك ونقاط المفاضلة.",
      c1cta: "تصفح المشاريع",
      c2title: "ركز على دراستك الأكاديمية ورعاية مرضاك .. ودع التمكين الأكاديمي لنا",
      c2body: "امتحاناتك الجامعية ووقت العيادة أولوية، \"ابحث\" تُحول فكرتك إلى ورقة علمية عبر التدقيق والمراجعة المنهجية والتحليل الإحصائي، سنصحبك بالتوجيه الاستراتيجي لجميع مراحل النشر حتى ترى اسمك موثّقاً في المجلات العالمية.",
      c2cta: "خدماتنا البحثية",
    },
    steps: {
      eyebrow: "من البداية إلى النشر",
      h2: "من اختيار التخصص إلى النشر.. ٤ خطوات بسيطة تفصلك عن بحثك القادم.",
      cta: "قدّم طلب الانضمام للفريق",
      items: [
        { title: "حدد مسارك", body: "سجل بياناتك واختر التخصص الطبي الذي تستهدفه." },
        { title: "تشكيل الفريق", body: "نجمعك مع زملاء من نفس التخصص تحت إشراف استشاري يحدد الفكرة البحثية الأقوى." },
        { title: "الاعتماد النهائي", body: "بمجرد اكتمال الخطة، نتواصل معك لتأكيد مقعدك وإتمام اجراءات التسجيل." },
        { title: "انطلاق البحث", body: "تبدأ رحلتك المنهجية بالعمل ضمن الفريق البحثي، لتحقيق إنجازك العلمي و استحقاقك كمؤلف (co-author)" },
      ],
    },
    story: {
      eyebrow: "قصتنا",
      h2: "بُني «إِبحَث» بأيدي أطباء ولأجل الأطباء",
      lead: "بدأنا لأننا رأينا أطباء موهوبين تعيقهم الفجوة بين العمل السريري والبحث. بنينا جسرًا، والآن نساعد غيرنا على عبوره.",
      learn: "تعرّف",
      about: "عن «إِبحَث»",
    },
    svcHead: {
      eyebrow: "خدماتنا",
      h2: "حلول أكاديمية متكاملة لأبحاثك الخاصة",
    },
    services: [
      { eyebrow: "التحليل", title: "التحليل الإحصائي الطبي", body: "نتائج دقيقة ببرامج متقدمة (SPSS/R) تتوافق تماماً مع اشتراطات المجلات العالمية.", learn: "تعرّف", explore: "استكشف", img: IMAGES.ssrService },
      { eyebrow: "المراجعة", title: "المراجعة المنهجية واللغوية", body: "صياغة أكاديمية رصينة ترفع جودة بحثك وتلبي المعايير الصارمة للمجلات المحكمة.", learn: "تعرّف", explore: "استكشف", img: IMAGES.methodologicalReview },
      { eyebrow: "الاستشارة", title: "الاستشارات البحثية", body: "جلسات توجيهية «واحد لواحد» مع خبراء لرسم خارطة طريق لبحثك من الفكرة حتى النشر.", learn: "تعرّف", explore: "استكشف", img: IMAGES.researchConsultations },
      { eyebrow: "النشر", title: "المساعدة في النشر العلمي", body: "توجيه استراتيجي لاختيار المجلات المناسبة وإدارة المراسلات مع المجلة باحترافية لتسهيل رحلة النشر.", learn: "تعرّف", explore: "استكشف", img: IMAGES.homeResearch1 },
      { eyebrow: "الدعم", title: "الدعم البحثي المفتوح", body: "عالق في منتصف البحث ولا تعرف الخطوة القادمة أو نوع المساعدة التي تحتاجها تحديداً؟ اترك عبء التقييم لنا، تواصل معنا لنفهم العقبات التي تواجهك بشكل خاص، ونقترح لك الحلول المنهجية التي تسد الفجوة في بحثك أياً كانت.", learn: "تعرّف", explore: "استكشف", img: IMAGES.homeResearch2 },
    ],
    oppsHead: {
      eyebrow: "خبراؤنا",
      h2: "نخبة من الأكاديميين في خدمتك",
      lead: "ضع أبحاثك بإشراف استشاريين وأساتذة جامعيين ممارسين في المنظومة الصحية السعودية، يدركون تماماً معايير القبول المحلية والدولية.",
      view: "عرض الملف",
      viewAll: "تعرف على خبرائنا",
    },
    projects: [
      { title: "د. فاطمة العتيبي", body: "استشارية، طب الأطفال", img: IMAGES.mentorFatima },
      { title: "د. محمد الحربي", body: "استشاري، طب القلب", img: IMAGES.mentorMohammed },
      { title: "د. خالد العنزي", body: "استشاري، الجهاز الهضمي", img: IMAGES.mentorKhalid },
    ],
    blogHome: {
      eyebrow: "المدونة",
      h2: "مقالات تدعم رحلتك البحثية",
      lead: "محتوى عملي يساعد الأطباء على فهم المنهجية والنشر والاستراتيجيات البحثية بثقة أكبر.",
      cta: "عرض جميع المقالات",
      readMore: "اقرأ المقال",
      loading: "جارٍ تحميل المقالات...",
    },
    blogCards: [
      {
        slug: "statistical-test-guide",
        read: "٥ دقائق قراءة",
        title: "كيف تختار الاختبار الإحصائي المناسب لدراستك",
        excerpt: "دليل مبسّط لربط سؤالك البحثي بالتحليل الصحيح في SPSS وR.",
        img: IMAGES.homeFeatures1,
        readMore: "اقرأ المقال",
      },
      {
        slug: "publishable-research-design",
        read: "٧ دقائق قراءة",
        title: "كيف تبني تصميمًا بحثيًا قابلًا للنشر",
        excerpt: "قرارات أساسية ترفع جودة بحثك قبل مرحلة جمع البيانات.",
        img: IMAGES.servicesFeature,
        readMore: "اقرأ المقال",
      },
      {
        slug: "journal-rejection-mistakes",
        read: "٦ دقائق قراءة",
        title: "أخطاء شائعة تؤدي إلى رفض البحث من المجلات",
        excerpt: "قائمة عملية لتقليل الرفض الأولي وتقوية ملف التقديم.",
        img: IMAGES.blogNewsletter,
        readMore: "اقرأ المقال",
      },
    ],
    testi: { h2: "أصوات حقيقية", sub: "أطباء وجدوا طريقهم", explore: "استكشف", connect: "تواصل" },
    voicesLeft: [
      { quote: '"ساعدتني الأبحاث المنشورة على جمع نقاط الترقية، وتمت ترقيتي من أستاذ مساعد إلى أستاذ مشارك."', name: "عضو هيئة تدريس", role: "عضو هيئة تدريس جامعي", initials: "FA" },
      { quote: '"لضيق وقتي مع العيادات والعمليات لم أكن قادراً على إنجاز بحث كامل رغم كثرة الأفكار البحثية من العمل. بعد التعرف على «إِبحَث» تم دمجي مع فرق بحثية وتقديم الدعم اللازم حتى نُشر نصف أفكاري، والنصف الآخر في مرحلة النشر بالمجلات."', name: "استشاري", role: "استشاري", initials: "MH" },
      { quote: '"طالب استطاع ينشر بحثه الذي عمله مع المؤسسة في مؤتمر عالمي."', name: "طالب", role: "طالب", initials: "NS" },
      { quote: '"كانت ملاحظات مراجعة الكتابة محددة وعملية. تحوّلت مخطوطتي من مسودة إلى جاهزة."', name: "د. خالد العنزي", role: "استشاري، الجهاز الهضمي", initials: "KE" },
    ],
    voicesRight: [
      { quote: '"جعل «إِبحَث» النشر ممكنًا أثناء فترة إقامتي. كان الدعم حقيقيًا، لا مجرد قوالب."', name: "د. أحمد الرشيد", role: "طبيب مقيم، الباطنة", initials: "AR" },
      { quote: '"وفّر عليّ التحليل الإحصائي وحده أشهرًا. ركّزت على الرؤية السريرية بينما تولّوا SPSS."', name: "د. ليلى المطيري", role: "زميلة، جراحة العظام", initials: "LM" },
      { quote: '"احتجت أبحاثًا للترقية، لكن البحث بدا مستحيلًا أثناء الإقامة. حقّقه «إِبحَث»."', name: "د. سامر الدوسري", role: "طبيب، طب الطوارئ", initials: "SD" },
      { quote: '"يفهمون متطلبات الهيئة أفضل من الجميع. لا تقديمات ضائعة لمجلات خاطئة."', name: "د. أميرة الحربي", role: "زميلة، الروماتيزم", initials: "AH" },
      { quote: '"طابقوني مع فريق يعمل على ما يهمني فعلًا. شعرت أن التأليف المشترك مُستحق لا ممنوح."', name: "د. حسن القحطاني", role: "استشاري، طب الأعصاب", initials: "HQ" },
    ],
    cta: { h2: "ارتقِ بمسيرتك المهنية عبر أبحاث علمية رصينة.", lead: "انضم اليوم لأكثر من 5000+ ممارس صحي يثقون في «إِبحَث» لتطوير مسيرتهم المهنية.", signup: "ابدأ رحلتك البحثية الآن" },
    faqHead: { h2: "الأسئلة الشائعة", lead: "اعثر على إجابات حول الانضمام إلى الفرق البحثية، والحصول على التأليف المشترك، واستيفاء متطلبات الهيئة.", more: "لديك المزيد من الأسئلة؟", contact: "اقرأ المزيد" },
    faqItems: [
      { title: "كيف يعمل التأليف المشترك؟", content: "تنضم إلى فريق بحثي نشط أو تطوّر مشروعك الخاص بدعمنا. نقدّم التحليل الإحصائي ومراجعة الكتابة وإرشاد النشر. يظهر اسمك في البحث لأنك قدّمت عملًا بحثيًا حقيقيًا." },
      { title: "هل يساعد هذا في نقاط الهيئة؟", content: "نعم. كل بحث منشور في مجلة مفهرسة ضمن Scopus أو ISI يُحتسب ضمن متطلبات الهيئة. نفهم المعايير والجدول الزمني الذي تعمل ضمنه بدقة." },
      { title: "ماذا لو لم تكن لديّ خبرة بحثية؟", content: "من هنا نبدأ. يرشدك استشاريونا عبر المنهجية والتحليل الإحصائي وإعداد المخطوطة. ستتعلّم أثناء العمل، وتستحق تأليفك المشترك بصدق." },
      { title: "كم يستغرق النشر؟", content: "تختلف المدة حسب المجلة وتعقيد البحث. نستهدف مجلات مفهرسة بفترات مراجعة معقولة ونساعد في إدارة التقديم والتعديل بكفاءة." },
      { title: "هل يمكنني العمل أثناء ذلك؟", content: "بالتأكيد. معظم أطبائنا في فترة الإقامة أو الممارسة السريرية. ننظّم الدعم حول جدولك، لا العكس." },
    ],
    footer: { copyright: "© 2025 إِبحَث. جميع الحقوق محفوظة.", privacy: "سياسة الخصوصية", terms: "شروط الخدمة", cookies: "إعدادات الكوكيز" },
  };

  return withVoicePhotos(lang === "ar" ? ar : en);
}

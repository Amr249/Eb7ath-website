import { IMAGES } from "../assets";

export function blogDict(lang) {
  const en = {
    nav: { home: "Home", about: "About us", consultants: "Consultants", blog: "Blog", faq: "FAQ", login: "Login", start: "Start" },
    hero: { eyebrow: "Insights", h1: "Research and advancement", sub: "Discover strategies, case studies, and guidance for building your academic profile.", read: "Read", subscribe: "Subscribe" },
    feat: { eyebrow: "Featured", h2: "What matters now", lead: "Essential reading for your research journey", readMore: "Read more", empty: "No posts yet. Check back soon.", loading: "Loading articles..." },
    post: { back: "Back to blog", notFound: "This article could not be found." },
    news: { h2: "Stay informed", lead: "Get new insights delivered to your inbox each week.", placeholder: "Enter email", join: "Join us", note: "We respect your inbox and won't send spam." },
    posts: [
      {
        slug: "indexed-journals",
        read: "8 min read",
        title: "Getting your work into indexed journals",
        excerpt: "Learn the practical steps to navigate peer review and secure publication in reputable journals.",
        content: "Getting published in indexed journals is one of the most important milestones in a medical research career. Start by defining a clear research question, then match your manuscript to journals that fit your topic and methodology.\n\nPrepare a strong cover letter, follow author guidelines precisely, and respond to reviewer comments with a structured revision plan. Persistence and methodological rigor are what turn a good draft into an accepted paper.",
        img: IMAGES.homeResearch0,
      },
      {
        slug: "research-profile-resident",
        read: "6 min read",
        title: "Building your research profile as a resident",
        excerpt: "Strategic approaches to accumulating research points while managing clinical responsibilities.",
        content: "Residents can build a credible research profile without sacrificing clinical duties by choosing focused projects with realistic timelines. Look for co-authorship opportunities, journal clubs, and supervised analyses that produce publishable output.\n\nDocument every contribution, track deadlines carefully, and prioritize projects aligned with promotion requirements. Small, completed studies are more valuable than ambitious projects that never reach submission.",
        img: IMAGES.homeResearch1,
      },
      {
        slug: "scfhs-requirements",
        read: "7 min read",
        title: "SCFHS requirements and your academic future",
        excerpt: "Understanding the standards that shape your path to advancement in Saudi medicine.",
        content: "SCFHS promotion pathways reward consistent scholarly output, not occasional effort. Understand the point system, publication tiers, and authorship rules early so every project supports your long-term plan.\n\nWork with mentors who know local requirements and international standards. A clear roadmap helps you choose the right journals, roles, and timelines before you invest months in a study.",
        img: IMAGES.homeResearch2,
      },
      {
        slug: "peer-review-strategies",
        read: "9 min read",
        title: "Peer review strategies that strengthen your manuscript",
        excerpt: "Master the revision process and address reviewer feedback with confidence.",
        content: "Reviewer comments are not rejection by default—they are a blueprint for improvement. Read every comment twice, group them by theme, and draft a point-by-point response before editing the manuscript.\n\nBe respectful, specific, and evidence-based in your replies. Revisions that directly address concerns while improving clarity and methods dramatically increase acceptance rates.",
        img: IMAGES.homeFeatures0,
      },
      {
        slug: "statistical-test-guide",
        read: "5 min read",
        title: "Choosing the right statistical test for your study",
        excerpt: "A plain-language guide to matching your research question with the correct analysis in SPSS and R.",
        content: "The right statistical test depends on your study design, variable types, and research question. Start by identifying whether your outcome is categorical or continuous, then check whether groups are independent or paired.\n\nUse descriptive tables first, confirm assumptions, and consult a statistician before data collection when possible. Correct analysis protects your conclusions and shortens the review cycle.",
        img: IMAGES.homeFeatures1,
      },
      {
        slug: "prospective-cohort-study",
        read: "8 min read",
        title: "Designing a prospective cohort study",
        excerpt: "From defining your population to managing follow-up: the building blocks of robust observational research.",
        content: "Prospective cohort studies depend on clear inclusion criteria, standardized follow-up, and minimal loss to follow-up. Define exposure and outcomes before recruitment and register your protocol when feasible.\n\nStrong data management and ethical approvals are as important as the research question itself. A well-run cohort produces evidence that journals and reviewers trust.",
        img: IMAGES.homeStats0,
      },
      {
        slug: "publishable-research-design",
        read: "7 min read",
        title: "How to build a publishable research design",
        excerpt: "Core decisions that raise your paper quality before data collection even starts.",
        content: "Publishable research begins with a focused question, a feasible sample, and an analysis plan written before data collection. Weak design cannot be fixed in discussion sections.\n\nDefine primary outcomes, control confounding early, and align your methods with the journal tier you are targeting. Good design saves months of rework after reviewers respond.",
        img: IMAGES.servicesFeature,
      },
      {
        slug: "journal-rejection-mistakes",
        read: "6 min read",
        title: "Avoiding common reasons journals reject medical papers",
        excerpt: "A practical checklist to reduce first-round rejection and strengthen your submission package.",
        content: "Many rejections come from mismatched journal scope, incomplete ethics documentation, weak methodology, or unclear writing—not from unimportant findings. Review the author guidelines line by line before submission.\n\nAsk a colleague outside your team to read the abstract and methods. Fresh eyes often catch gaps that cost weeks in unnecessary revision cycles.",
        img: IMAGES.blogNewsletter,
      },
    ],
    footer: { copyright: "© 2025 Eb7ath. All rights reserved.", privacy: "Privacy policy", terms: "Terms of service", cookies: "Cookies settings" },
  };

  const ar = {
    nav: { home: "الرئيسية", about: "من نحن", consultants: "الاستشاريين", blog: "المدونة", faq: "الأسئلة الشائعة", login: "تسجيل الدخول", start: "ابدأ" },
    hero: { eyebrow: "رؤى", h1: "البحث والتقدّم", sub: "اكتشف الاستراتيجيات ودراسات الحالة والإرشادات لبناء ملفك الأكاديمي.", read: "اقرأ", subscribe: "اشترك" },
    feat: { eyebrow: "مميّز", h2: "ما يهمّ الآن", lead: "قراءات أساسية لرحلتك البحثية", readMore: "اقرأ المزيد", empty: "لا توجد مقالات بعد. عُد قريبًا.", loading: "جارٍ تحميل المقالات..." },
    post: { back: "العودة إلى المدونة", notFound: "تعذّر العثور على هذا المقال." },
    news: { h2: "ابقَ على اطلاع", lead: "احصل على رؤى جديدة في بريدك كل أسبوع.", placeholder: "أدخل بريدك", join: "انضم إلينا", note: "نحترم بريدك ولن نرسل رسائل مزعجة." },
    posts: [
      {
        slug: "indexed-journals",
        read: "٨ دقائق قراءة",
        title: "كيف تُدرج عملك في المجلات المفهرسة",
        excerpt: "تعلّم الخطوات العملية لاجتياز مراجعة الأقران وتأمين النشر في مجلات موثوقة.",
        content: "النشر في المجلات المفهرسة من أهم محطات المسار البحثي للطبيب. ابدأ بسؤال بحثي واضح، ثم اختر مجلة تناسب موضوع دراستك ومنهجيتها.\n\nجهّز رسالة تغطية قوية، التزم بتعليمات المؤلفين بدقة، وردّ على ملاحظات المحكّمين بخطة تعديل منظمة. المثابرة والدقة المنهجية هما ما يحوّلان المسودة الجيدة إلى ورقة مقبولة.",
        img: IMAGES.homeResearch0,
      },
      {
        slug: "research-profile-resident",
        read: "٦ دقائق قراءة",
        title: "بناء ملفك البحثي خلال فترة الإقامة",
        excerpt: "أساليب استراتيجية لجمع نقاط البحث مع إدارة المسؤوليات السريرية.",
        content: "يمكن للمقيم بناء ملف بحثي قوي دون إهمال المهام السريرية عبر اختيار مشاريع مركّزة بجدول زمني واقعي. ابحث عن فرص تأليف مشترك، ونوادي الجournals، وتحليلات بإشراف تنتج مخرجات قابلة للنشر.\n\nوثّق كل مساهمة، وتابع المواعيد بدقة، وأعطِ أولوية للمشاريع المتوافقة مع متطلبات الترقية. الدراسات المكتملة أهم من مشاريع كبيرة لا تصل إلى مرحلة التقديم.",
        img: IMAGES.homeResearch1,
      },
      {
        slug: "scfhs-requirements",
        read: "٧ دقائق قراءة",
        title: "متطلبات الهيئة ومستقبلك الأكاديمي",
        excerpt: "فهم المعايير التي تشكّل طريقك نحو التقدّم في الطب السعودي.",
        content: "مسارات الترقية في الهيئة تكافئ الإنتاج العلمي المستمر لا الجهد العرضي. افهم نظام النقاط، وفئات المجلات، وقواعد التأليف مبكرًا حتى يدعم كل مشروع خطتك طويلة المدى.\n\nاعمل مع مرشدين يفهمون المتطلبات المحلية والمعايير الدولية. خارطة طريق واضحة تساعدك على اختيار المجلات والأدوار والجداول الزمنية قبل استثمار أشهر في الدراسة.",
        img: IMAGES.homeResearch2,
      },
      {
        slug: "peer-review-strategies",
        read: "٩ دقائق قراءة",
        title: "استراتيجيات مراجعة الأقران التي تقوّي مخطوطتك",
        excerpt: "أتقن عملية التعديل وتعامل مع ملاحظات المحكّمين بثقة.",
        content: "ملاحظات المحكّمين ليست رفضًا بالضرورة، بل خريطة لتحسين الورقة. اقرأ كل ملاحظة مرتين، وصنّفها حسب المحور، ثم اكتب ردًا نقطة بنقطة قبل تعديل المخطوطة.\n\nكن محترمًا ودقيقًا ومدعومًا بالأدلة في ردودك. التعديلات التي تعالج الملاحظات مباشرة وتحسّن الوضوح والمنهجية ترفع فرص القبول بشكل كبير.",
        img: IMAGES.homeFeatures0,
      },
      {
        slug: "statistical-test-guide",
        read: "٥ دقائق قراءة",
        title: "اختيار الاختبار الإحصائي المناسب لدراستك",
        excerpt: "دليل ميسّر لمطابقة سؤال بحثك بالتحليل الصحيح في SPSS وR.",
        content: "يعتمد الاختبار الإحصائي الصحيح على تصميم الدراسة ونوع المتغيرات وسؤال البحث. حدّد أولًا إن كانت النتيجة فئوية أم عددية، ثم تحقق مما إذا كانت المجموعات مستقلة أم مترابطة.\n\nابدأ بجداول وصفية، وتحقق من افتراضات الاختبار، واستشر مختصًا إحصائيًا قبل جمع البيانات متى أمكن. التحليل الصحيح يحمي استنتاجاتك ويختصر دورة المراجعة.",
        img: IMAGES.homeFeatures1,
      },
      {
        slug: "prospective-cohort-study",
        read: "٨ دقائق قراءة",
        title: "تصميم دراسة أترابية مستقبلية",
        excerpt: "من تحديد المجتمع إلى إدارة المتابعة: لبنات البحث الرصدي المتين.",
        content: "تعتمد الدراسات الأترابية المستقبلية على معايير شمول واضحة ومتابعة موحّدة وحد أدنى من فقدان المتابعة. عرّف التعرض والنتائج قبل الاستقطاب وسجّل بروتوكول الدراسة متى أمكن.\n\nإدارة البيانات القوية والموافقات الأخلاقية مهمة بقدر أهمية سؤال البحث. الدراسة الأترابية المنظمة تنتج أدلة يثق بها الناشرون والمحكّمون.",
        img: IMAGES.homeStats0,
      },
      {
        slug: "publishable-research-design",
        read: "٧ دقائق قراءة",
        title: "كيف تبني تصميمًا بحثيًا قابلًا للنشر",
        excerpt: "قرارات أساسية ترفع جودة بحثك قبل مرحلة جمع البيانات.",
        content: "يبدأ البحث القابل للنشر بسؤال مركّز وعينة واقعية وخطة تحليل مكتوبة قبل جمع البيانات. التصميم الضعيف لا يُعوَّض في قسم المناقشة.\n\nحدّد النتائج الأولية، وعالج العوامل المُربكة مبكرًا، ووائم منهجيتك مع مستوى المجلة المستهدفة. التصميم الجيد يوفر شهورًا من إعادة العمل بعد ردّ المحكّمين.",
        img: IMAGES.servicesFeature,
      },
      {
        slug: "journal-rejection-mistakes",
        read: "٦ دقائق قراءة",
        title: "أخطاء شائعة تؤدي إلى رفض البحث من المجلات",
        excerpt: "قائمة عملية لتقليل الرفض الأولي وتقوية ملف التقديم.",
        content: "كثير من حالات الرفض سببها عدم ملاءمة المجلة، أو نقص وثائق الأخلاقيات، أو ضعف المنهجية، أو غموض الأسلوب—not بالضرورة ضعف الفكرة. راجع تعليمات المؤلفين سطرًا بسطر قبل التقديم.\n\nاطلب من زميل خارج الفريق قراءة الملخص والمنهجية. العين الجديدة غالبًا تكتشف فجوات تكلف أسابيع من التأخير.",
        img: IMAGES.blogNewsletter,
      },
    ],
    footer: { copyright: "© 2025 اِبْحَثْ. جميع الحقوق محفوظة.", privacy: "سياسة الخصوصية", terms: "شروط الخدمة", cookies: "إعدادات الكوكيز" },
  };

  return lang === "ar" ? ar : en;
}

export function getStaticBlogPost(lang, slug) {
  const dict = blogDict(lang);
  return dict.posts.find((post) => post.slug === slug) || null;
}

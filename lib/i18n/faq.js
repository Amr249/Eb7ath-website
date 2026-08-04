function p(...paras) {
  return paras.map((text) => `<p>${text}</p>`).join("");
}

function h(text) {
  return `<h4>${text}</h4>`;
}

function ul(items) {
  return `<ul>${items.map((item) => `<li>${item}</li>`).join("")}</ul>`;
}

function ol(items) {
  return `<ol>${items.map((item) => `<li>${item}</li>`).join("")}</ol>`;
}

const arItems = [
  {
    title: "كم يستغرق نشر البحث العلمي في المجلات المحكمة؟",
    content:
      p(
        "إذا ألقيت سنارة ممتازة بطريقة صحيحة، وطعم مناسب في بحر مليء بالأسماك؛ هل تستطيع أن تحدد بدقة بعد كم ثانية ستمسك أول سمكة؟",
        "مدة نشر البحث العلمي تشبه هذه الوضعية تماماً؛ فلا يمكن تحديدها برقم قاطع مسبقاً. لكن لتوضيح الصورة، تمر عملية إعداد ونشر الأبحاث بثلاثِ مراحلَ أساسية:"
      ) +
      ul([
        "مرحلة الإعداد المنهجي",
        "مرحلة التقديم والقرار المبدئي",
        "مرحلة المراجعة والاعتماد من قبل المجلة.",
      ]) +
      h("◇ المرحلة الأولى: إعداد وكتابة البحث (تستغرق 5 إلى 6 أسابيع)") +
      p(
        "في منصة [ابحث]، نلتزم بإنجاز مسودة البحث (Manuscript) باحترافية عالية خلال فترة تتراوح بين 5 إلى 6 أسابيع. يرجع هذا الإنجاز السريع والمتقن إلى اعتمادنا على فريق عمل متكامل يضم 15 متخصصاً، بالإضافة إلى إشراف مباشر من استشاري (Consultant) لضمان دقة المنهجية (Study design) وجودة تحليل البيانات (Data Analysis)."
      ) +
      h("◇ المرحلة الثانية: التقديم والقرار المبدئي (تستغرق بضعة أيام)") +
      p(
        "بعد الانتهاء من إعداد البحث، نقوم باختيار المجلات العلمية المحكمة (Peer-reviewed Journals) بعناية فائقة لضمان توافقها مع معايير الهيئة السعودية للتخصصات الصحية (SCFHS).",
        "استراتيجيتنا تعتمد على استهداف المجلات التي تتميز بسرعة الرد المبدئي أو ما يُعرف بالـ (Desk Review)، ليتضح لنا خلال أيام معدودة ما إذا كان البحث يتوافق مع النطاق العلمي للمجلة (Scope) أم لا، مما يوفر الكثير من وقت الباحث ويجنبه فترات الانتظار غير المبررة."
      ) +
      h("◇ المرحلة الثالثة: المراجعة العلمية والقبول النهائي (تعتمد على سياسة المجلة)") +
      p(
        "بمجرد اجتياز الفرز المبدئي، يدخل البحث في مرحلة المراجعة من قبل الأقران (Peer Review). هذه الخطوة تستغرق وقتاً متفاوتاً يمتد عادةً من 30 إلى 45 يوماً، وقد تطول المدة بناءً على سرعة استجابة المراجعين (Reviewers) والتعديلات المطلوبة. هذه المدة الزمنية تعتبر خارج سيطرة أي جهة بحثية وتخضع كلياً لسياسات المجلة المستهدفة.",
        "رغم أن هذه المرحلة تخضع كلياً لسياسات المجلات ولا تملك أي جهة سيطرة على توقيتها، إلا أن جودة إعداد البحث منهجيًا في المرحلتين السابقتين هي ما يضمن تقليل التعديلات المطلوبة وتخطي هذه المراجعة بأسرع وقت ممكن."
      ),
  },
  {
    title: "متى يبدأ العمل في المجموعة البحثية؟ وكيف يمكنني المشاركة في ظل ضغط العمل وقرب الاختبارات؟",
    content:
      p(
        "حياة الطبيب، منذ أيامه الجامعية، هي سلسلة لا تنتهي من الاختبارات؛ فأنت إما تستعد لامتحان قادم، أو تجلس بالفعل أمام ورقة الامتحان. لذا؛ نحن نفهمك تماماً، وصممنا نظامنا خصيصاً ليتوافق مع التزاماتك."
      ) +
      h("◇ موعد بدء العمل في المجموعة البحثية") +
      p(
        "ينطلق العمل الفعلي والمباشر في المشاريع البحثية بمجرد إتمام إجراءات التسجيل لكافة المشاركين في المجموعة. وعادةً ما يتم البدء رسمياً خلال 3 إلى 4 أيام كحد أقصى من إغلاق باب التسجيل، لضمان انطلاقة منظمة وموحدة لجميع الأعضاء."
      ) +
      h("◇ عندي امتحانات بعد شهر والمجموعات تبدأ غداً مثلاً ماذا أفعل؟!") +
      p(
        "سهلة",
        "يتميز نظام العمل في منصة [ابحث] بدرجة عالية من التنظيم المؤسسي والمرونة، حيث نعتمد على جدول زمني تفصيلي (Timeline) يضع بين يديك خريطة طريق واضحة.",
        "هذا الجدول يوضح لك كافة الخطوات المنهجية للبحث بتواريخ دقيقة ومحددة مسبقاً، مما يتيح لك الآتي:"
      ) +
      ol([
        "الوضوح التام: ستعرف بوضوح، على سبيل المثال، أن مرحلة جمع البيانات (Data Collection) ستبدأ وتنتهي في تواريخ محددة ومعلنة سلفاً.",
        "المرونة في الإنجاز: إذا كنت تمر بضغط عمل أو فترة اختبارات، يمكنك اختيار مهمة بحثية واحدة تتزامن مع أوقات فراغك وتنجزها خلال إطارها الزمني.",
      ]) +
      p("الخلاصة: تنجز مهمتك المحددة، تسلمها، وتتفرغ لاختباراتك بينما يكمل فريقنا باقي المراحل بثقة تامة.") +
      h("◇ هل يلزم المشاركة في كل الخطوات لأستحق لقب مؤلف (Authorship)؟!") +
      p(
        "المعلومة الجوهرية التي يجب إدراكها هنا هي معيار الاستحقاق في البحث العلمي. لكي يتم إدراج اسمك كمؤلف مشارك (Co-author) في الورقة العلمية، لا يُطلب منك الانخراط في كل تفاصيل البحث من الألف إلى الياء.",
        "العُرف الأكاديمي والبحثي ينص على أن إنجاز خطوة بحثية واحدة بشكل فعال وصحيح، يكفي تماماً لاعتبارك مؤلفاً معتمداً.",
        "نصيحتنا لك -إذا كنت متفرغاً- استثمار فرصة التواجد مع خبراء واستشاريين بالعمل في أكبر قدر ممكن من المهام لضمان مركز متقدم في ترتيب المؤلفين (Authors Order) عند النشر، ولحصد أكبر قدر من الخبرة المنهجية."
      ),
  },
  {
    title: "ما هي المهام المطلوبة مني عند المشاركة في المشاريع البحثية؟",
    content:
      p(
        "إذا أصلحت سياج حديقتك بمحض إرادتك ستشعر بالإنجاز، لكن إن فعلت نفس الشيء مجبراً سيتملكك التذمر؛ الإنسان أكثر إنتاجية حين يختار ما يعمل!",
        "لذا؛ نُملّكك هنا كامل الحرية في اختيار المهمة التي تتناسب مع التزاماتك الأكاديمية والمهنية. بمجرد إتمام إجراءات التسجيل والانضمام إلى المجموعة البحثية، يتم تنظيم العمل وفق المنهجية التالية:"
      ) +
      h("١. التوجيه والجدول الزمني (Mentorship & Timeline)") +
      p(
        "بمجرد بدء المشروع، يتولى إدارة المجموعة البحثية مشرف أكاديمي مختص (Mentor). يقوم المشرف في البداية بعرض خطة العمل بالكامل، مصحوبة بجدول زمني (Timeline) واضح ومحدد التواريخ. كما يتولى الشرح الدقيق لكافة الخطوات المنهجية المطلوبة لإنجاز كل مهمة بحثية باحترافية، لضمان وضوح الرؤية لجميع المشاركين."
      ) +
      h("٢. حرية اختيار المهام (Task Selection)") +
      p(
        "نحن نؤمن بأن الجهد الأساسي يعود للطبيب، ولذلك لا يتم إجبارك على مهام عشوائية؛ بل المُتقدم هو من يختار مهمته. تُعرض المهام بوضوح، ويُترك لك المجال لانتقاء ما يتوافق مع اهتماماتك البحثية وتطلعاتك لتطوير مهارات معينة (مثل Literature Review أو Data Collection)."
      ) +
      h("٣. المرونة في حجم المشاركة") +
      p(
        "تمنحك هذه الآلية حرية مطلقة في تحديد حجم مساهمتك. يمكنك اختيار المشاركة في كافة المهام إذا كان دافعك هو التعلم الشامل وإتقان منهجية البحث (Study design) من الألف إلى الياء. وفي المقابل، يمكنك الاكتفاء بمهمة أو مهمتين فقط بما يتناسب مع وقتك وجدول مناوباتك وامتحاناتك."
      ) +
      h("◇ اختيار مهمة لا يعني أنك ستقاتل فيها وحدك!") +
      p(
        "مع هذه المرونة العالية، دور المشرف (Mentor) لن يقتصر على الإدارة وتنسيق العمل؛ بل سيكون متواجداً معك خطوة بخطوة أثناء مراحل التنفيذ الفعلي للمهام؛ فإذا واجهت أي تحديات أو احتجت إلى مساعدة وشرح تفصيلي حول كيفية إنجاز الجزء الخاص بك بالشكل العلمي الصحيح، سيوفر لك الدعم والتوجيه اللازمين.",
        "إلى جانب ذلك، يتولى المشرف تنسيق هذه المهام المُختارة ومتابعة سير العمل بدقة؛ ليضمن تغطية كافة أجزاء البحث دون أي تأخير؛ لنصل معاً إلى اكتمال البحث في وقته المحدد، ونعبر بثقة نحو مرحلة النشر."
      ),
  },
  {
    title: "هل حضور الدورة التدريبية البحثية إلزامي عند التسجيل في برامج المجموعات البحثية؟",
    content:
      p(
        "يقول معاوية بن أبي سفيان: «لو أن بيني وبين الناس شعرة ما انقطعت؛ إن مدوها خلّيتها، وإن خلّوها مددتها». وفي عالم البحث العلمي، يجب أن نتحلى جميعاً بمرونة مشابهة؛ لضمان أعلى إنتاجية بأقل وقت ومجهود.",
        "لذا؛ صُممت برامجنا بمرونة تامة، لتتشكل بيدك وتناسب وقتك، رغبتك، وحاجتك."
      ) +
      h("◇ من البدايات وحتى النشر.. رحلة متكاملة لا مجرد مجموعة عمل!") +
      p(
        "التسجيل في برامجنا لا يقتصر على الانضمام إلى مجموعة بحثية فحسب، بل يمثل حزمة متكاملة بخطوات واضحة تبدأ بالتأهيل العلمي (Research Training)، مروراً بالعمل الفعلي على المشروع البحثي، وصولاً إلى مرحلة النشر العلمي (Peer-reviewed publication). تُقدم هذه الحزمة المتكاملة برسوم موحدة وثابتة لجميع المشاركين، وتُعد الدورة البحثية التدريبية ميزة إضافية ذات قيمة عالية (Added Value) تهدف إلى صقل مهاراتك العلمية."
      ) +
      h("◇ مرونة الحضور بناءً على الخبرة (Flexible Attendance)") +
      p(
        "لأننا ندرك تفاوت الخبرات السابقة بين الأطباء والممارسين، فإن حضور الدورة التدريبية ليس إلزامياً. إذا كنت تمتلك المعرفة الأساسية والخبرة اللازمة في المنهجية البحثية (Research Methodology)، يمكنك تجاوز هذه الخطوة والبدء المباشر في العمل على مهامك ضمن المشروع.",
        "وفقاً لهذه الآلية، يمتلك المشارك الحرية المطلقة في إدارة تدريبه:"
      ) +
      ul([
        "<strong>حضور انتقائي:</strong> يمكنك اختيار حضور جلسات محددة (Sessions) تشعر أنك بحاجة للاستفادة منها أو مراجعتها (على سبيل المثال: جلسات الـ Data Analysis أو الـ Study design)، وتخطي الجلسات الأخرى.",
        "<strong>الوصول المستمر للمحتوى:</strong> كافة المحاضرات التدريبية تكون مسجلة ومتاحة لك دائماً، مما يتيح لك العودة إليها ومراجعتها في أي وقت يتناسب مع جدول مناوباتك وضغوط عملك.",
      ]) +
      p("هذا النظام يضمن لك بناء ترسانتك البحثية بالوتيرة التي تناسبك، ويمنحك الحرية المطلقة في اختيار ماذا تتعلم ومتى تتعلمه."),
  },
  {
    title: "في أي مجلة يتم نشر البحث، وما هي معايير اختياركم للمجلات؟",
    content:
      p(
        "إذا حددت وجهة خاطئة؛ فلن تصل أبداً. وإن حددت وجهة صحيحة وسلكت طريقاً خاطئاً؛ فستصل متأخراً. هنا في [ابحث]، بوصلتنا مبرمجة لتصل بك إلى الوجهة الصحيحة، عبر أقصر الطرق وأكثرها موثوقية.",
        "لذا؛ فإن اختيار المجلة العلمية يتم بمنهجية دقيقة وصارمة لضمان تحقيق الهدف الأساسي: نشر علمي رصين يعزز سيرتك الذاتية ويضمن لك نقاط الهيئة دون هدر للوقت.",
        "تعتمد منهجيتنا في اختيار المجلات على المعايير الثلاثة التالية:"
      ) +
      h("١. التوافق التام مع اشتراطات الهيئة (SCFHS Compliance)") +
      p(
        "المعيار الأول والأساسي هو ضمان حصولك على النقاط المخصصة للبحث العلمي. لذلك، نحرص تماماً على استهداف المجلات المحكمة (Peer-reviewed Journals) التي تنطبق عليها شروط الهيئة السعودية للتخصصات الصحية بدقة، وتنحصر خياراتنا في:"
      ) +
      ul([
        "المجلات المدرجة ضمن قواعد البيانات العالمية المعتمدة وتحديداً (PubMed index) أو (Web of Science index).",
        "المجلات الصحية السعودية الرسمية والمعتمدة.",
      ]) +
      h("٢. سرعة الاستجابة المبدئية (Time for First Decision)") +
      p(
        "نحن ندرك أهمية عامل الوقت وحساسيته للمتقدمين. لذلك، من أهم معاييرنا العملية هو تصفية واختيار المجلات التي تتميز بسرعة الرد الأولي.",
        "نستهدف المجلات التي لا تستغرق سوى أيام معدودة لإصدار قرارها المبدئي (Time for first decision)، مما يتيح لنا معرفة ما إذا كان البحث متوافقاً مع نطاق المجلة (Scope) بشكل سريع، ويجنبنا فترات الانتظار الطويلة في قيد المراجعة."
      ) +
      h("٣. الرأي الأكاديمي للاستشاري (Consultant's Endorsement)") +
      p(
        "تكتمل حلقة الاختيار بالرجوع إلى التوجيه الأكاديمي. بعد تحديد قائمة المجلات التي تلبي شرطي الاعتماد والسرعة، يتم أخذ رأي الاستشاري المشرف (Consultant) بعين الاعتبار. تدخله يضمن اختيار المجلة الأنسب التي تتوافق مع قوة الدراسة، والتخصص الدقيق، ومنهجية البحث (Study design)."
      ),
  },
  {
    title: "هل يمكنني معرفة عنوان البحث التفصيلي عند الانضمام للمجموعة البحثية؟",
    content:
      p(
        "تخيل سفينة أوشكت على الرسو، وفي اللحظة الأخيرة قام الطاقم بإغراقها بأيديهم! يبدو جنوناً، أليس كذلك؟ هكذا هو حال الأبحاث العلمية عندما تتسرب أفكارها قبل أوانها.",
        "لذا نود هنا توضيح سياسة منصة [ابحث] الصارمة فيما يخص حماية الملكية الفكرية وضمان عدم إهدار الجهد العلمي للفريق البحثي."
      ) +
      h("◇ طبيعة الدراسات وحساسية الفكرة (Study Design & Sensitivity)") +
      p(
        "نحن في منصة [ابحث] نركز بشكل كبير على إنجاز دراسات متقدمة وذات قيمة علمية عالية، وتحديداً المراجعات المنهجية والتحليل التلوي (Systematic Review & Meta-analysis). هذا النوع الدقيق من الأبحاث يعتمد كلياً على حداثة الفكرة وقوتها.",
        "مشاركة العنوان التفصيلي الدقيق علناً في المراحل الأولى يفتح باباً لمخاطر تسريب الفكرة، مما قد يؤدي إلى قيام جهات أخرى باستنساخها ونشرها قبلنا، وهو ما يعني ضياع مجهودك ومجهود الفريق بأكمله هباءً."
      ) +
      h("◇ سياسة السرية لحماية المجهود (Confidentiality Policy)") +
      p(
        "حرصاً منا على حماية حقوقك وصولاً لمرحلة النشر المحكم (Peer-reviewed publication)، فإن العنوان التفصيلي للبحث يُحفظ بسرية تامة، ويكون متاحاً فقط للاستشاري المشرف (Consultant) وقادة المشروع (Mentors). هذه الخطوة الاحترازية هي الدرع الحامي لجهدك ولضمان استمرارية العمل بأمان تام."
      ) +
      h("◇ هل يعني هذا أنني سأعمل في نطاق مجهول؟") +
      p(
        "عدم الإفصاح عن العنوان التفصيلي لا يعني أبداً أنك ستعمل في بيئة مبهمة. بمجرد انضمامك للمجموعة، سيتم إطلاعك بوضوح على الموضوع العام للبحث والاتجاه العلمي الذي تدور حوله الدراسة.",
        "ستكون على دراية تامة بطبيعة المادة العلمية، والمجال الطبي المستهدف، وماهية المتغيرات التي سيتم العمل عليها لتتمكن من إنجاز مهامك باحترافية وشغف، ولكن دون الكشف عن تفاصيل العنوان الدقيقة التي قد تُعرّض البحث للخطر وتكشف خصوصية فكرته."
      ),
  },
  {
    title: "كيف يتم تحديد ترتيب الباحثين (Authorship Order) عند النشر العلمي؟",
    content:
      p(
        "ترتيب الأسماء في الورقة العلمية يعتبر من أكثر القضايا حساسية؛ لأنه يمثل حفظاً للجهود، ونسبةً للفضل لأهله. لذلك، فإن هذه المسألة في منصة [ابحث] لا تخضع للعشوائية أو الاجتهادات الشخصية إطلاقاً، بل تستند إلى منهجية علمية شفافة وعادلة، تضمن حصول كل طبيب وباحث على التقدير الذي يوازي حجم مساهمته الفعلية بدقة.",
        'نستند في تقييمنا لمشاركات الفريق البحثي إلى معيار أكاديمي عالمي يُعرف بـ "بطاقة تقييم استحقاق التأليف" (Authorship Determination Scorecard)، والتي تعمل وفق الآلية التالية:'
      ) +
      h("● نظام النقاط الموزون (Weighted Scoring System)") +
      p(
        "تعتمد منهجية الترتيب على نظام تفصيلي؛ حيث تحمل كل خطوة من خطوات البحث وزناً رقمياً (Points) يعكس مدى تعقيدها وأهميتها المحورية لنجاح المشروع. وفي نهاية العمل، يُحسب المجموع الكلي (Total Score) لكل مشارك، وبناءً عليه يُحدد الترتيب في قائمة المؤلفين تنازلياً؛ فالأعلى نقاطاً هو المتقدم في الترتيب."
      ) +
      h("● توزيع النقاط على المهام البحثية (Task Evaluation & Scoring)") +
      p("تشمل بطاقة التقييم كافة تفاصيل العمل البحثي، وتتوزع النقاط على أقسام رئيسية تتيح للجميع فرصة حصدها، ومن أبرزها:") +
      ul([
        "<strong>التأسيس والمنهجية:</strong> وتتضمن ابتكار الفكرة البحثية (Conceptualizing a research idea)، وتطويرها، إلى جانب بناء وتصميم الدراسة (Study design).",
        "<strong>التحليل الإحصائي:</strong> ويشمل اختيار الاختبارات المناسبة، تنفيذ تحليل البيانات (Data Analysis)، والخطوة الأهم وهي التفسير العلمي للنتائج (Interpretation of statistical analyses).",
        "<strong>كتابة المسودة (Manuscript Writing):</strong> تُقسّم النقاط هنا بشكل دقيق على كل قسم من أقسام الورقة العلمية؛ حيث يختلف وزن كتابة المقدمة (Introduction) والمنهجية (Methods) عن وزن كتابة قسم المناقشة (Discussion) الذي يحمل عادة التقييم الأعلى، وكذلك صياغة المحددات والتوصيات المستقبلية.",
        "<strong>إدارة التقديم للمجلة:</strong> وتشمل المهام الحاسمة مثل الاستجابة لملاحظات المراجعين (Responding to reviewers' feedback) وإجراء التعديلات اللازمة.",
      ]) +
      h("◇ ماذا ستستفيد من هذا النظام؟") +
      p(
        "يضمن لك هذا النظام أعلى درجات الشفافية. فمنذ لحظة انضمامك للمجموعة البحثية واختيارك لمهامك، ستكون على دراية تامة بوزن كل خطوة. هذه الآلية تضع زمام المبادرة بين يديك؛ فإذا كنت تطمح لترتيب متقدم بين الباحثين، يمكنك تحقيق ذلك ببساطة من خلال تولي مهام ذات وزن أكاديمي أعلى أو المشاركة في عدة مهام."
      ),
  },
  {
    title: "ما هي الإجراءات المتخذة في حال مخالفة أحد أعضاء الفريق البحثي للأخلاقيات العلمية أو إساءة استخدام الذكاء الاصطناعي؟",
    content:
      p(
        "البحث العلمي الرصين لا يقبل المساومة على جودته. التزامنا المشترك بالنزاهة العلمية يهدف لغاية واحدة: تأمين الجهد الذي تبذله أنت وفريقك، وضمان خروج الورقة العلمية بمعايير تضمن قبولها الأكاديمي دون أي تأخير."
      ) +
      h("◇ الالتزام بالمعايير الأخلاقية (Adherence to Research Ethics)") +
      p(
        "يُشترط على جميع أعضاء المجموعة البحثية الالتزام التام بأخلاقيات البحث العلمي المتعارف عليها عالمياً، بالإضافة إلى الامتثال الكامل للوائح والضوابط المعتمدة لدى الجهات المختصة في المملكة العربية السعودية.",
        "يشمل ذلك الاستخدام المسؤول والواعي لأدوات الذكاء الاصطناعي (AI Tools)؛ بحيث تُستخدم كأدوات مساعدة لرفع الكفاءة، وليس كبديل عن الجهد الفكري والأكاديمي للطبيب، وبما يضمن الخلو التام من أي شكل من أشكال الانتحال العلمي (Plagiarism)."
      ) +
      h("◇ آلية التعامل مع التجاوزات (Breach of Ethics Protocol)") +
      p(
        "لأننا نضع أنفسنا في موضع الشريك والموجه (Mentor) في رحلتك البحثية، فإننا نتعامل مع أي خروج عن المسار الأخلاقي بمنهجية تهدف إلى التقويم قبل الإقصاء، وذلك وفق الآلية التالية:"
      ) +
      ul([
        "<strong>التوجيه والتنبيه:</strong> في حال رصد أي تجاوز أخلاقي، يقوم المشرف الأكاديمي بتنبيه الباحث وتوضيح الخلل لضمان فهمه الدقيق للخطأ.",
        "<strong>فرص تصحيح المسار:</strong> يُمنح الباحث فرصة حقيقية لتصحيح المخالفة والرجوع إلى المسار الأخلاقي السليم، وذلك بحد أقصى (3 تنبيهات) رسمية.",
        "<strong>الإجراء النهائي:</strong> في حال عدم الاستجابة واستنفاد التنبيهات الثلاثة دون تصحيح المخالفة، سيتم اتخاذ قرار مباشر وصارم بإزالة العضو من الفريق البحثي (Exclusion from the research team).",
      ]) +
      p(
        "هذا الإجراء ضروري لحماية نزاهة المشروع (Study integrity)، وحفظ مجهود بقية الأطباء المشاركين لضمان وصول البحث إلى مرحلة النشر."
      ),
  },
];

const enItems = [
  {
    title: "How long does it take to publish a scientific paper in peer-reviewed journals?",
    content:
      p(
        "If you cast an excellent fishing line correctly, with the right bait, in a sea full of fish — can you precisely say after how many seconds you will catch the first one?",
        "Publishing timelines are similar: there is no fixed number in advance. To clarify, preparing and publishing research usually passes through three main stages:"
      ) +
      ul([
        "Methodological preparation",
        "Submission and initial decision",
        "Journal peer review and final acceptance",
      ]) +
      h("◇ Stage 1: Preparing and writing the paper (5–6 weeks)") +
      p(
        "At Eb7ath, we commit to completing a professional manuscript draft within 5–6 weeks. This speed and quality come from an integrated team of 15 specialists, plus direct consultant supervision to ensure study design accuracy and data analysis quality."
      ) +
      h("◇ Stage 2: Submission and initial decision (a few days)") +
      p(
        "After the manuscript is ready, we carefully select peer-reviewed journals that meet SCFHS requirements.",
        "Our strategy targets journals with a fast initial response (desk review), so within a few days we know whether the paper fits the journal’s scope — saving researchers from unnecessary waiting."
      ) +
      h("◇ Stage 3: Peer review and final acceptance (depends on journal policy)") +
      p(
        "Once the paper passes the initial screen, it enters peer review. This usually takes about 30–45 days and may take longer depending on reviewers and required revisions. This timeline is outside any research body’s control and depends entirely on the target journal’s policies.",
        "Although this stage is fully journal-controlled, strong methodological preparation in the earlier stages is what reduces revision rounds and helps clear review as quickly as possible."
      ),
  },
  {
    title: "When does work start in a research group, and how can I join with work pressure and exams?",
    content:
      p(
        "A physician’s life, from university days onward, is an endless series of exams — you are either preparing for one or sitting one. We understand that fully, and we designed our system around your commitments."
      ) +
      h("◇ When group work starts") +
      p(
        "Active work on research projects begins once registration is completed for all group participants. We usually start formally within 3–4 days of closing registration, to ensure an organized, unified launch."
      ) +
      h("◇ What if I have exams in a month and groups start tomorrow?") +
      p(
        "Simple.",
        "Eb7ath runs with strong institutional organization and flexibility: a detailed timeline gives you a clear roadmap.",
        "That timeline shows every methodological step with precise dates, which gives you:"
      ) +
      ol([
        "Full clarity: for example, you will know exactly when data collection starts and ends.",
        "Flexible delivery: under work pressure or exam periods, you can choose one research task that fits your free time and complete it within its window.",
      ]) +
      p("In short: finish your assigned task, submit it, then focus on exams while our team continues the remaining stages confidently.") +
      h("◇ Do I need to join every step to earn authorship?") +
      p(
        "The key point is the academic standard for authorship. To be listed as a co-author, you are not required to do every detail of the project from start to finish.",
        "Academic practice holds that completing one research step effectively and correctly is enough to qualify as an author.",
        "Our advice — if you have time — is to take on as many tasks as you can with consultants and mentors, to secure a stronger authorship position and gain deeper methodological experience."
      ),
  },
  {
    title: "What tasks am I expected to do when joining research projects?",
    content:
      p(
        "If you fix your garden fence by choice, you feel accomplishment; if forced, you resent it. People are more productive when they choose what they do.",
        "So we give you full freedom to choose tasks that fit your academic and professional commitments. After registration and joining the research group, work is organized as follows:"
      ) +
      h("1. Mentorship & Timeline") +
      p(
        "Once the project starts, an academic mentor leads the group. The mentor presents the full work plan with a clear dated timeline, and explains the methodological steps needed to complete each research task professionally."
      ) +
      h("2. Task Selection") +
      p(
        "We believe the physician owns the core effort, so tasks are not assigned randomly — you choose. Tasks are listed clearly, and you select what matches your research interests and skill goals (for example Literature Review or Data Collection)."
      ) +
      h("3. Flexible contribution volume") +
      p(
        "You decide how much to contribute. You can join all tasks if you want full methodological mastery, or take one or two tasks that fit your shifts and exams."
      ) +
      h("◇ Choosing a task does not mean you work alone") +
      p(
        "With this flexibility, the mentor’s role is not only management — they stay with you step by step during execution, providing support and detailed guidance when needed.",
        "The mentor also coordinates selected tasks and tracks progress carefully so every part of the study is covered on time, and the team moves confidently toward publication."
      ),
  },
  {
    title: "Is attending the research training course mandatory when joining research group programs?",
    content:
      p(
        "Flexibility is essential in research productivity. Our programs are designed to adapt to your time, goals, and needs."
      ) +
      h("◇ From foundations to publication — a complete journey") +
      p(
        "Registration is not only joining a research group. It is an integrated package: research training, active project work, then peer-reviewed publication — with a fixed fee for all participants. The training course is high-value added support to strengthen your scientific skills."
      ) +
      h("◇ Flexible attendance based on experience") +
      p(
        "Because physicians’ prior experience varies, training attendance is not mandatory. If you already have solid research methodology knowledge, you can skip training and start project tasks directly.",
        "Participants manage their own learning path:"
      ) +
      ul([
        "<strong>Selective attendance:</strong> join only the sessions you need (for example Data Analysis or Study Design) and skip others.",
        "<strong>Ongoing access:</strong> all training lectures are recorded and always available, so you can revisit them around your shift schedule.",
      ]) +
      p("This system lets you build your research toolkit at your own pace — choosing what to learn and when."),
  },
  {
    title: "Which journal will the paper be published in, and how do you choose journals?",
    content:
      p(
        "If you pick the wrong destination, you never arrive. If you pick the right destination but the wrong path, you arrive late. At Eb7ath, our compass is set for the right destination through the shortest reliable routes.",
        "Journal selection follows a strict method so you get rigorous publication that strengthens your CV and SCFHS points without wasting time.",
        "We use three criteria:"
      ) +
      h("1. Full SCFHS compliance") +
      p(
        "First priority: securing research points. We target peer-reviewed journals that meet Saudi Commission for Health Specialties requirements, limited to:"
      ) +
      ul([
        "Journals indexed in recognized global databases — specifically PubMed or Web of Science.",
        "Official accredited Saudi health journals.",
      ]) +
      h("2. Fast time to first decision") +
      p(
        "Time matters. We prioritize journals with a fast initial response.",
        "We target journals that issue a first decision within a few days, so we quickly know whether the paper fits the journal scope and avoid long waiting queues."
      ) +
      h("3. Consultant academic endorsement") +
      p(
        "After shortlisting journals that meet accreditation and speed criteria, the supervising consultant’s academic judgment guides the final choice — matching the study’s strength, specialty, and design."
      ),
  },
  {
    title: "Can I know the detailed research title when joining a research group?",
    content:
      p(
        "Imagine a ship about to dock — then the crew sinks it themselves at the last moment. That is what happens when research ideas leak too early.",
        "Here is Eb7ath’s strict policy on protecting intellectual property and the team’s scientific effort."
      ) +
      h("◇ Study design and idea sensitivity") +
      p(
        "We focus on advanced, high-value studies — especially systematic reviews and meta-analyses. These depend heavily on idea novelty and strength.",
        "Sharing the exact detailed title early risks idea leakage and others publishing first — which can waste your effort and the whole team’s work."
      ) +
      h("◇ Confidentiality policy") +
      p(
        "To protect your rights through peer-reviewed publication, the detailed title is kept confidential and available only to the supervising consultant and project mentors."
      ) +
      h("◇ Does that mean I work in the dark?") +
      p(
        "No. Once you join, you are clearly briefed on the general topic and scientific direction of the study.",
        "You will know the scientific material, target medical field, and variables involved — enough to work with professionalism and passion — without revealing the exact title details that could put the idea at risk."
      ),
  },
  {
    title: "How is authorship order determined at publication?",
    content:
      p(
        "Name order on a paper is highly sensitive — it preserves effort and credits contribution fairly. At Eb7ath this is never random or personal; it follows a transparent academic method so every physician gets recognition matching their real contribution.",
        "We use a global academic standard known as the Authorship Determination Scorecard:"
      ) +
      h("● Weighted scoring system") +
      p(
        "Each research step carries points reflecting its complexity and importance. At the end, each participant’s total score determines descending authorship order — highest score first."
      ) +
      h("● Task evaluation & scoring") +
      p("The scorecard covers the full research workflow, including:") +
      ul([
        "<strong>Foundation & methodology:</strong> conceptualizing and developing the idea, plus study design.",
        "<strong>Statistical analysis:</strong> choosing tests, running data analysis, and interpreting results.",
        "<strong>Manuscript writing:</strong> points are split across sections — Introduction and Methods differ in weight from Discussion (usually highest), plus limitations and future recommendations.",
        "<strong>Journal submission management:</strong> responding to reviewer feedback and completing revisions.",
      ]) +
      h("◇ What do you gain?") +
      p(
        "Maximum transparency. From the moment you join and choose tasks, you know each step’s weight. If you aim for a stronger authorship position, take higher-weight tasks or multiple tasks."
      ),
  },
  {
    title: "What happens if a team member breaches research ethics or misuses AI?",
    content:
      p(
        "Rigorous research does not compromise on quality. Shared commitment to scientific integrity protects your effort and the team’s — and helps the paper meet acceptance standards without delay."
      ) +
      h("◇ Adherence to research ethics") +
      p(
        "All group members must fully follow internationally recognized research ethics and Saudi regulatory requirements.",
        "This includes responsible AI use: tools may support efficiency, never replace the physician’s intellectual effort, and must remain free of plagiarism."
      ) +
      h("◇ Breach of ethics protocol") +
      p(
        "As a partner and mentor, we aim to correct before excluding, through this process:"
      ) +
      ul([
        "<strong>Guidance and warning:</strong> if a breach is found, the academic mentor alerts the researcher and clarifies the issue.",
        "<strong>Correction chances:</strong> the researcher gets a real chance to correct course, with a maximum of 3 formal warnings.",
        "<strong>Final action:</strong> if there is no response after three warnings, the member is removed from the research team.",
      ]) +
      p(
        "This protects study integrity and the effort of remaining physicians so the paper can reach publication."
      ),
  },
];

export function faqDict(lang) {
  const en = {
    nav: { home: "Home", about: "About us", blog: "Blog", faq: "FAQ", login: "Login", start: "Start" },
    hero: {
      eyebrow: "FAQ",
      h1: "Frequently asked questions",
      sub: "Clear answers about research groups, publication timelines, authorship, and how Eb7ath works with you.",
    },
    items: enItems.map((item) => ({ ...item, rich: true })),
    more: {
      h2: "Still have questions?",
      lead: "Reach out and we will help you choose the right research path.",
      contact: "Contact us",
    },
    footer: {
      copyright: "© 2025 Eb7ath. All rights reserved.",
      privacy: "Privacy policy",
      terms: "Terms of service",
      cookies: "Cookies settings",
    },
  };

  const ar = {
    nav: { home: "الرئيسية", about: "من نحن", blog: "المدونة", faq: "الأسئلة الشائعة", login: "تسجيل الدخول", start: "ابدأ" },
    hero: {
      eyebrow: "الأسئلة الشائعة",
      h1: "إجابات واضحة لأسئلتك",
      sub: "كل ما تحتاج معرفته عن المجموعات البحثية، مدة النشر، التأليف، وكيفية العمل مع «إِبحَث».",
    },
    items: arItems.map((item) => ({ ...item, rich: true })),
    more: {
      h2: "ما زال لديك سؤال؟",
      lead: "تواصل معنا وسنساعدك على اختيار المسار البحثي الأنسب لك.",
      contact: "تواصل معنا",
    },
    footer: {
      copyright: "© 2025 إِبحَث. جميع الحقوق محفوظة.",
      privacy: "سياسة الخصوصية",
      terms: "شروط الخدمة",
      cookies: "إعدادات الكوكيز",
    },
  };

  return lang === "ar" ? ar : en;
}

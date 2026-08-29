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
        en: "Ministry of Health, Qatif Central Hospital, Eastern Province, Saudi Arabia",
        ar: "وزارة الصحة، مستشفى القطيف المركزي، المنطقة الشرقية، المملكة العربية السعودية",
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
      {
        name: { en: "Tragi Ahmed Ali Elshaigi", ar: "تراجي أحمد علي الشائقي" },
        affiliation: {
          en: "Qatif Central Hospital, Qatif, Saudi Arabia",
          ar: "مستشفى القطيف المركزي، القطيف، المملكة العربية السعودية",
        },
      },
    ],
  },
  "perioperative-carbohydrate-orthopedic-surgeries": {
    slug: "perioperative-carbohydrate-orthopedic-surgeries",
    expertSlug: "ahmed-hamed-amin-ahmed",
    externalUrl: "https://link.springer.com/article/10.1186/s13018-026-06809-0",
    telegramUrl: "https://t.me/+mc0xvr5Z2RpmMmY8",
    doi: "10.1186/s13018-026-06809-0",
    publishedAt: "2026-03-24",
    journal: "Journal of Orthopaedic Surgery and Research",
    volume: 21,
    articleNumber: 291,
    year: 2026,
    title:
      "The effect of perioperative oral carbohydrate loading on postoperative outcomes in patients undergoing orthopedic surgeries: a systematic review and meta-analysis",
    consultant: {
      name: {
        en: "Dr. Ahmed Hamed Amin Ahmed",
        ar: "د. أحمد حامد أمين أحمد",
      },
      affiliation: {
        en: "Almana Group of Hospitals, Dammam, Saudi Arabia",
        ar: "مجموعة المانع للمستشفيات، الدمام، المملكة العربية السعودية",
      },
    },
    correspondingAuthor: {
      name: {
        en: "Nihal Elmubarak A. Hussein",
        ar: "نهال المبارك عبد الله حسين",
      },
      email: "nihalmobark123@gmail.com",
    },
    researchers: [
      {
        name: { en: "Nihal Elmubarak A. Hussein", ar: "نهال المبارك عبد الله حسين" },
        affiliation: {
          en: "Faculty of Medicine, University of Khartoum, Khartoum, Sudan",
          ar: "كلية الطب، جامعة الخرطوم، الخرطوم، السودان",
        },
        email: "nihalmobark123@gmail.com",
      },
      {
        name: { en: "Norah Alenezi", ar: "نورة العنزي" },
        affiliation: {
          en: "Al Sabah Hospital, Kuwait City, Capital Governorate, Kuwait",
          ar: "مستشفى الصباح، مدينة الكويت، محافظة العاصمة، الكويت",
        },
      },
      {
        name: { en: "Khaled AlTamimi", ar: "خالد التميمي" },
        affiliation: {
          en: "Mubarak Al-Kabeer Hospital, Jabriya, Kuwait",
          ar: "مستشفى مبارك الكبير، الجابرية، الكويت",
        },
      },
      {
        name: { en: "Mona Al-Rashidi", ar: "منى الرشيدي" },
        affiliation: {
          en: "Ministry of Health, Kuwait City, Capital Governorate, Kuwait",
          ar: "وزارة الصحة، مدينة الكويت، محافظة العاصمة، الكويت",
        },
      },
      {
        name: { en: "Dhay Alghamdi", ar: "ضي الغامدي" },
        affiliation: {
          en: "University of Jeddah, Jeddah, Saudi Arabia",
          ar: "جامعة جدة، جدة، المملكة العربية السعودية",
        },
      },
      {
        name: { en: "Ali Ibrahim M. Alghamdi", ar: "علي إبراهيم محمد الغامدي" },
        affiliation: {
          en: "Faculty of Medicine, Albaha University, Albaha, Saudi Arabia",
          ar: "كلية الطب، جامعة الباحة، الباحة، المملكة العربية السعودية",
        },
      },
      {
        name: { en: "Hussein Ahmed", ar: "حسين أحمد" },
        affiliation: {
          en: "Faculty of Medicine, University of Khartoum, Khartoum, Sudan",
          ar: "كلية الطب، جامعة الخرطوم، الخرطوم، السودان",
        },
      },
      {
        name: { en: "Esmail A. Bahlol", ar: "إسماعيل عبد الله بحلول" },
        affiliation: {
          en: "Faculty of Medicine and Health Sciences, Sana'a University, Sana'a, Yemen",
          ar: "كلية الطب والعلوم الصحية، جامعة صنعاء، صنعاء، اليمن",
        },
      },
      {
        name: { en: "Jawad Majdi Alabbasi", ar: "جواد مجدي العباسي" },
        affiliation: {
          en: "King Saud bin Abdulaziz University for Health Sciences, Riyadh, Saudi Arabia",
          ar: "جامعة الملك سعود بن عبدالعزيز للعلوم الصحية، الرياض، المملكة العربية السعودية",
        },
      },
    ],
  },
  "azithromycin-sinusitis-systematic-review": {
    slug: "azithromycin-sinusitis-systematic-review",
    expertSlug: "wafa-elnaseeh",
    externalUrl:
      "https://journals.lww.com/annals-of-medicine-and-surgery/fulltext/2025/04000/efficacy_and_safety_of_azithromycin_in_treating.63.aspx",
    telegramUrl: "https://t.me/+8Rj3SXv1dTRiMTU0",
    doi: "10.1097/MS9.0000000000003182",
    publishedAt: "2025-03-20",
    journal: "Annals of Medicine & Surgery",
    volume: 87,
    articleNumber: 4,
    year: 2025,
    title:
      "Efficacy and safety of azithromycin in treating sinusitis patients: a systematic review and meta-analysis of randomized controlled trails",
    consultant: {
      name: {
        en: "Dr. Wafa Elnaseeh",
        ar: "د. وفاء النسيه",
      },
      affiliation: {
        en: "King Faisal University, Hofuf, Saudi Arabia",
        ar: "جامعة الملك فيصل، الهفوف، المملكة العربية السعودية",
      },
    },
    correspondingAuthor: {
      name: {
        en: "Mohamed Yousif Elamin",
        ar: "محمد يوسف الأمين",
      },
      email: "mohamedyousif621@gmail.com",
    },
    researchers: [
      {
        name: { en: "Mohamed Yousif Elamin", ar: "محمد يوسف الأمين" },
        affiliation: {
          en: "Faculty of Medicine, University of Khartoum, Khartoum, Sudan",
          ar: "كلية الطب، جامعة الخرطوم، الخرطوم، السودان",
        },
        email: "mohamedyousif621@gmail.com",
      },
      {
        name: { en: "Rahaf Bandar Alsliham", ar: "رهف بندر السليحم" },
        affiliation: {
          en: "College of Medicine, Princess Nourah Bint Abdulrahman University, Riyadh, Saudi Arabia",
          ar: "كلية الطب، جامعة الأميرة نورة بنت عبدالرحمن، الرياض، المملكة العربية السعودية",
        },
      },
      {
        name: { en: "Lujain Bandar Alotaibi", ar: "لجين بندر العتيبي" },
        affiliation: {
          en: "Aldiriyah Hospital, Riyadh, Saudi Arabia",
          ar: "مستشفى الدرعية، الرياض، المملكة العربية السعودية",
        },
      },
      {
        name: { en: "Hissa Abdulaziz Alaiban", ar: "حصة عبدالعزيز العيبان" },
        affiliation: {
          en: "Aldiriyah Hospital, Riyadh, Saudi Arabia",
          ar: "مستشفى الدرعية، الرياض، المملكة العربية السعودية",
        },
      },
      {
        name: { en: "Mawadah Fouzy Kattan", ar: "مودة فوزي كتان" },
        affiliation: {
          en: "College of Medicine, King Abdulaziz University Hospital, Jeddah, Saudi Arabia",
          ar: "كلية الطب، مستشفى جامعة الملك عبدالعزيز، جدة، المملكة العربية السعودية",
        },
      },
      {
        name: { en: "Sadeem Khalid Alquraini", ar: "سديم خالد القريني" },
        affiliation: {
          en: "College of Medicine, Imam Mohammad Ibn Saud Islamic University, Riyadh, Saudi Arabia",
          ar: "كلية الطب، جامعة الإمام محمد بن سعود الإسلامية، الرياض، المملكة العربية السعودية",
        },
      },
      {
        name: { en: "Ahmed Khalid Alkhateeb", ar: "أحمد خالد الخطيب" },
        affiliation: {
          en: "College of Medicine, King Faisal University, Hofuf, Saudi Arabia",
          ar: "كلية الطب، جامعة الملك فيصل، الهفوف، المملكة العربية السعودية",
        },
      },
      {
        name: { en: "Shaima ShamsEldeen KhalfAllah Ahmed", ar: "شيما شمس الدين خلف الله أحمد" },
        affiliation: {
          en: "Faculty of Medicine, University of Khartoum, Khartoum, Sudan",
          ar: "كلية الطب، جامعة الخرطوم، الخرطوم، السودان",
        },
      },
      {
        name: { en: "Ziyad Jamal Alamer", ar: "زياد جمال العامر" },
        affiliation: {
          en: "College of Medicine, King Faisal University, Hofuf, Saudi Arabia",
          ar: "كلية الطب، جامعة الملك فيصل، الهفوف، المملكة العربية السعودية",
        },
      },
      {
        name: { en: "Ahmed Mohammed Alawdah", ar: "أحمد محمد العودة" },
        affiliation: {
          en: "College of Medicine, King Faisal University, Hofuf, Saudi Arabia",
          ar: "كلية الطب، جامعة الملك فيصل، الهفوف، المملكة العربية السعودية",
        },
      },
      {
        name: { en: "Mohammed Hamad Alhushayyish", ar: "محمد حمد الهشيش" },
        affiliation: {
          en: "Saudi Board Residency Program, Saudi Arabia",
          ar: "برنامج الزمالة السعودي، المملكة العربية السعودية",
        },
      },
      {
        name: { en: "Muhanna Jubayr Mohammed Altalhi", ar: "مهنا جبير محمد الطلحي" },
        affiliation: {
          en: "College of Medicine, University of Taif, Taif, Saudi Arabia",
          ar: "كلية الطب، جامعة الطائف، الطائف، المملكة العربية السعودية",
        },
      },
      {
        name: { en: "Nojuod Fares Abdullah Alhadidi", ar: "نجود فارس عبدالله الحديدي" },
        affiliation: {
          en: "College of Medicine, Vision College, Riyadh, Saudi Arabia",
          ar: "كلية الطب، كلية الرؤية، الرياض، المملكة العربية السعودية",
        },
      },
      {
        name: { en: "Albatul Omar Alghamdi", ar: "البتول عمر الغامدي" },
        affiliation: {
          en: "College of Medicine, Jeddah University, Jeddah, Saudi Arabia",
          ar: "كلية الطب، جامعة جدة، جدة، المملكة العربية السعودية",
        },
      },
    ],
  },
  "ultrasonic-bipolar-tonsillectomy-pediatric-meta-analysis": {
    slug: "ultrasonic-bipolar-tonsillectomy-pediatric-meta-analysis",
    expertSlug: "wafa-elnaseeh",
    externalUrl: "https://link.springer.com/article/10.1007/s12070-025-06231-8",
    telegramUrl: "https://t.me/+Vmk08cd6GwRkZDI8",
    doi: "10.1007/s12070-025-06231-8",
    publishedAt: "2025-11-28",
    journal: "Indian Journal of Otolaryngology and Head & Neck Surgery",
    volume: 78,
    articleNumber: 587,
    year: 2026,
    title:
      "Comparative Efficacy and Safety of Ultrasonic Device Versus Bipolar Diathermy Tonsillectomy in Pediatric Patients: A Systematic Review and Meta-analysis",
    consultant: {
      name: {
        en: "Dr. Wafa Elnaseeh",
        ar: "د. وفاء النسيه",
      },
      affiliation: {
        en: "ENT Head and Neck Surgery Department, King Faisal University, Hofuf, Saudi Arabia",
        ar: "قسم الأنف والأذن والحنجرة وجراحة الرأس والعنق، جامعة الملك فيصل، الهفوف، المملكة العربية السعودية",
      },
    },
    correspondingAuthor: {
      name: {
        en: "Mohammad Al Diab Al Azzawi",
        ar: "محمد الذياب العزاوي",
      },
      email: "moh.fares69@gmail.com",
    },
    researchers: [
      {
        name: { en: "Mohammad Al Diab Al Azzawi", ar: "محمد الذياب العزاوي" },
        affiliation: {
          en: "Faculty of Medicine, The National Ribat University, Khartoum, Sudan",
          ar: "كلية الطب، جامعة الرباط الوطنية، الخرطوم، السودان",
        },
        email: "moh.fares69@gmail.com",
      },
      {
        name: { en: "Haya Z. Albalawi", ar: "هيا البلوي" },
        affiliation: {
          en: "College of Medicine, Al-Rayan College, Medina, Saudi Arabia",
          ar: "كلية الطب، كلية الريان، المدينة المنورة، المملكة العربية السعودية",
        },
      },
      {
        name: { en: "Rehaf Abdulrhman Areeshi", ar: "رهف عبدالرحمن عريشي" },
        affiliation: {
          en: "College of Medicine, Jazan University, Jazan, Saudi Arabia",
          ar: "كلية الطب، جامعة جازان، جازان، المملكة العربية السعودية",
        },
      },
      {
        name: { en: "Nesrin H. Eshaq", ar: "نسرين إسحق" },
        affiliation: {
          en: "Faculty of Medicine, Jazan University, Jazan, Saudi Arabia",
          ar: "كلية الطب، جامعة جازان، جازان، المملكة العربية السعودية",
        },
      },
      {
        name: { en: "Ibhar S. Idris", ar: "إبهار إدريس" },
        affiliation: {
          en: "College of Medicine, King Khalid University, Abha, Saudi Arabia",
          ar: "كلية الطب، جامعة الملك خالد، أبها، المملكة العربية السعودية",
        },
      },
      {
        name: { en: "Ahmed Ibrahim Alnajjad", ar: "أحمد إبراهيم النجاد" },
        affiliation: {
          en: "College of Medicine, King Faisal University, Al Ahsa, Saudi Arabia",
          ar: "كلية الطب، جامعة الملك فيصل، الأحساء، المملكة العربية السعودية",
        },
      },
      {
        name: { en: "Omer Bader Aldayhani", ar: "عمر بدر الديحاني" },
        affiliation: {
          en: "College of Medicine, King Saud Bin Abdulaziz University for Health Sciences, Riyadh, Saudi Arabia",
          ar: "كلية الطب، جامعة الملك سعود بن عبدالعزيز للعلوم الصحية، الرياض، المملكة العربية السعودية",
        },
      },
      {
        name: { en: "Razan M. Althumali", ar: "رزان الثمالي" },
        affiliation: {
          en: "College of Medicine, Taif University, Taif, Saudi Arabia",
          ar: "كلية الطب، جامعة الطائف، الطائف، المملكة العربية السعودية",
        },
      },
    ],
  },
  "psychosocial-stress-stroke-meta-analysis": {
    slug: "psychosocial-stress-stroke-meta-analysis",
    expertSlug: "dalia-abdalla-mohamed",
    externalUrl: "https://www.frontiersin.org/journals/neurology/articles/10.3389/fneur.2025.1669925/full",
    telegramUrl: "https://t.me/+IVel-QkIbLQ0MGI0",
    doi: "10.3389/fneur.2025.1669925",
    publishedAt: "2025-11-06",
    journal: "Frontiers in Neurology",
    volume: 16,
    articleNumber: 1669925,
    year: 2025,
    title: "Psychosocial stress and stroke risk: meta-analysis of observational studies",
    consultant: {
      name: {
        en: "Dr. Dalia Abdalla Mohamed",
        ar: "د. داليا عبدالله محمد",
      },
      affiliation: {
        en: "Almana General Hospital, Dammam, Saudi Arabia",
        ar: "مستشفى المانع العام، الدمام، المملكة العربية السعودية",
      },
    },
    correspondingAuthor: {
      name: {
        en: "Mostafa A. Khalifa",
        ar: "مصطفى خليفة",
      },
      email: "mostafakhalifa282@gmail.com",
    },
    researchers: [
      {
        name: { en: "Mostafa A. Khalifa", ar: "مصطفى خليفة" },
        affiliation: {
          en: "Faculty of Medicine, Cairo University, Cairo, Egypt",
          ar: "كلية الطب، جامعة القاهرة، القاهرة، مصر",
        },
        email: "mostafakhalifa282@gmail.com",
      },
      {
        name: { en: "Albandari Sultan Alardhi", ar: "البندري سلطان العارضي" },
        affiliation: {
          en: "Al Jahra Hospital, Al Jahra, Kuwait",
          ar: "مستشفى الجهراء، الجهراء، الكويت",
        },
      },
      {
        name: { en: "Ghadah Faleh S. Alharbi", ar: "غادة فالح الحربي" },
        affiliation: {
          en: "Department of Public Health, Al-Qassim Health Cluster, Buraydah, Saudi Arabia",
          ar: "إدارة الصحة العامة، تجمع القصيم الصحي، بريدة، المملكة العربية السعودية",
        },
      },
      {
        name: { en: "Abdulmajeed Mousa M. Alzahrani", ar: "عبدالمجيد موسى الزهراني" },
        affiliation: {
          en: "King Abdulaziz Medical City, Riyadh, Saudi Arabia",
          ar: "مدينة الملك عبدالعزيز الطبية، الرياض، المملكة العربية السعودية",
        },
      },
      {
        name: { en: "Batoul Ali Taqi", ar: "بتول علي تقي" },
        affiliation: {
          en: "Internal Medicine Department, Mubarak Al-kabeer Hospital, Jabriyah, Kuwait",
          ar: "قسم الباطنة، مستشفى مبارك الكبير، الجابرية، الكويت",
        },
      },
      {
        name: { en: "Falwah Sami Alsalman", ar: "فلوة سامي السلمان" },
        affiliation: {
          en: "College of Medicine, Alfaisal University, Riyadh, Saudi Arabia",
          ar: "كلية الطب، جامعة الفيصل، الرياض، المملكة العربية السعودية",
        },
      },
      {
        name: { en: "Mohand Basher G. Albalawi", ar: "مهند باشر البلوي" },
        affiliation: {
          en: "Riyadh Second Health Cluster, Riyadh, Saudi Arabia",
          ar: "تجمع الرياض الثاني الصحي، الرياض، المملكة العربية السعودية",
        },
      },
      {
        name: { en: "Saleh Ahmed Alzahrani", ar: "صالح أحمد الزهراني" },
        affiliation: {
          en: "King Salman Specialist Hospital, Hail Health Cluster, Hail, Saudi Arabia",
          ar: "مستشفى الملك سلمان التخصصي، تجمع حائل الصحي، حائل، المملكة العربية السعودية",
        },
      },
      {
        name: { en: "Hessah Haji Abul", ar: "حصة حاجي أبل" },
        affiliation: {
          en: "Sheikh Jaber Al-Ahmad Al-Sabah Hospital, Kuwait City, Kuwait",
          ar: "مستشفى الشيخ جابر الأحمد الصباح، مدينة الكويت، الكويت",
        },
      },
      {
        name: { en: "Hayat Safwat Hassan", ar: "حياة صفوت حسن" },
        affiliation: {
          en: "University of Jeddah, Jeddah, Saudi Arabia",
          ar: "جامعة جدة، جدة، المملكة العربية السعودية",
        },
      },
      {
        name: { en: "Ashwaq Dhafer N. Alqarni", ar: "أشواق ظافر القرني" },
        affiliation: {
          en: "Faculty of Medicine, Tabuk University, Tabuk, Saudi Arabia",
          ar: "كلية الطب، جامعة تبوك، تبوك، المملكة العربية السعودية",
        },
      },
      {
        name: { en: "Shaima ShamsEldeen KhalfAllah Ahmed", ar: "شيما شمس الدين خلف الله أحمد" },
        affiliation: {
          en: "Faculty of Medicine, University of Khartoum, Khartoum, Sudan",
          ar: "كلية الطب، جامعة الخرطوم، الخرطوم، السودان",
        },
      },
      {
        name: { en: "Sarah M. Hegazy", ar: "سارة حجازي" },
        affiliation: {
          en: "Faculty of Pharmacy, Umm Al-Qura University, Makkah, Saudi Arabia",
          ar: "كلية الصيدلة، جامعة أم القرى، مكة المكرمة، المملكة العربية السعودية",
        },
      },
      {
        name: { en: "Omer Hussein Alwi Bin-Sahel", ar: "عمر حسين علوي بن سهل" },
        affiliation: {
          en: "Faculty of Medicine and Health Sciences, Seiyun University, Seiyun, Yemen",
          ar: "كلية الطب والعلوم الصحية، جامعة سيئون، سيئون، اليمن",
        },
      },
    ],
  },
  "rezafungin-caspofungin-invasive-candidiasis-meta-analysis": {
    slug: "rezafungin-caspofungin-invasive-candidiasis-meta-analysis",
    expertSlug: "abdalla-osman-eltayeb",
    externalUrl: "https://pubmed.ncbi.nlm.nih.gov/40651396/",
    telegramUrl: "https://t.me/+3wklH3i6nHFhYzg0",
    doi: "10.1016/j.diagmicrobio.2025.116994",
    publishedAt: "2025-07-05",
    journal: "Diagnostic Microbiology and Infectious Disease",
    volume: 113,
    articleNumber: 116994,
    year: 2025,
    title:
      "Rezafungin vs caspofungin for the treatment of invasive candidiasis: A systematic review and meta-analysis",
    consultant: {
      name: {
        en: "Dr. Abdalla Osman Eltayeb",
        ar: "د. عبدالله عثمان الطيب",
      },
      affiliation: {
        en: "Head of Cath Lab and Cardiology, Almana General Hospitals, Dammam, Saudi Arabia",
        ar: "رئيس قسم القسطرة والقلب، مستشفيات المانع العامة، الدمام، المملكة العربية السعودية",
      },
    },
    correspondingAuthor: {
      name: {
        en: "Mohammad Al Diab Al Azzawi",
        ar: "محمد الذياب العزاوي",
      },
      email: "moh.fares69@gmail.com",
    },
    researchers: [
      {
        name: { en: "Mohammad Al Diab Al Azzawi", ar: "محمد الذياب العزاوي" },
        affiliation: {
          en: "Faculty of Medicine, The National Ribat University, Khartoum, Sudan",
          ar: "كلية الطب، جامعة الرباط الوطنية، الخرطوم، السودان",
        },
        email: "moh.fares69@gmail.com",
      },
      {
        name: { en: "Wejdan Abdat", ar: "وجدان عبدات" },
        affiliation: {
          en: "King Fahd Medical City, Riyadh, Saudi Arabia",
          ar: "مدينة الملك فهد الطبية، الرياض، المملكة العربية السعودية",
        },
      },
      {
        name: { en: "Arina Alhamed", ar: "أرينا الحامد" },
        affiliation: {
          en: "College of Medicine, Qassim University, Buraydah, Saudi Arabia",
          ar: "كلية الطب، جامعة القصيم، بريدة، المملكة العربية السعودية",
        },
      },
      {
        name: { en: "Amjad Salman A. Alhothali", ar: "أمجد سلمان الحوثلي" },
        affiliation: {
          en: "College of Medicine, University of Tabuk, Tabuk, Saudi Arabia",
          ar: "كلية الطب، جامعة تبوك، تبوك، المملكة العربية السعودية",
        },
      },
      {
        name: { en: "Razan Shukr Alsheikh", ar: "رزان شكر الشيخ" },
        affiliation: {
          en: "College of Medicine, King Abdulaziz University, Jeddah, Saudi Arabia",
          ar: "كلية الطب، جامعة الملك عبدالعزيز، جدة، المملكة العربية السعودية",
        },
      },
      {
        name: { en: "Hind Mohammed Almajed", ar: "هند محمد الماجد" },
        affiliation: {
          en: "King Saud bin Abdulaziz University for Health Sciences, Riyadh, Saudi Arabia",
          ar: "جامعة الملك سعود بن عبدالعزيز للعلوم الصحية، الرياض، المملكة العربية السعودية",
        },
      },
      {
        name: { en: "Sultan Ibrahim S. Alhamdi", ar: "سلطان إبراهيم الحامدي" },
        affiliation: {
          en: "College of Medicine, University of Tabuk, Tabuk, Saudi Arabia",
          ar: "كلية الطب، جامعة تبوك، تبوك، المملكة العربية السعودية",
        },
      },
      {
        name: { en: "Norah Nasser A. Alshahrani", ar: "نورة ناصر الشهراني" },
        affiliation: {
          en: "College of Medicine, University of Bisha, Bisha, Saudi Arabia",
          ar: "كلية الطب، جامعة بيشة، بيشة، المملكة العربية السعودية",
        },
      },
    ],
  },
  "pfa-cryoballoon-af-meta-analysis": {
    slug: "pfa-cryoballoon-af-meta-analysis",
    expertSlug: "abdalla-osman-eltayeb",
    externalUrl: "https://link.springer.com/article/10.1186/s12872-026-05839-0",
    telegramUrl: "https://t.me/+vhSiVrb1FdVjZTVk",
    doi: "10.1186/s12872-026-05839-0",
    publishedAt: "2026-04-13",
    journal: "BMC Cardiovascular Disorders",
    volume: 26,
    articleNumber: 447,
    year: 2026,
    title:
      "Pulsed field ablation versus cryoballoon ablation for pulmonary vein isolation in atrial fibrillation: a systematic review and meta-analysis with subgroup analyses by AF type",
    consultant: {
      name: {
        en: "Dr. Abdalla Osman Eltayeb",
        ar: "د. عبدالله عثمان الطيب",
      },
      affiliation: {
        en: "Head of Cath Lab and Cardiology, Almana General Hospitals, Dammam, Saudi Arabia",
        ar: "رئيس قسم القسطرة والقلب، مستشفيات المانع العامة، الدمام، المملكة العربية السعودية",
      },
    },
    correspondingAuthor: {
      name: {
        en: "Mohammad Al Diab Al Azzawi",
        ar: "محمد الذياب العزاوي",
      },
      email: "moh.fares69@gmail.com",
    },
    researchers: [
      {
        name: { en: "Mohammad Al Diab Al Azzawi", ar: "محمد الذياب العزاوي" },
        affiliation: {
          en: "Faculty of Medicine, The National Ribat University, Khartoum, Sudan",
          ar: "كلية الطب، جامعة الرباط الوطنية، الخرطوم، السودان",
        },
        email: "moh.fares69@gmail.com",
      },
      {
        name: { en: "Abdallah Gamal Gouda", ar: "عبدالله جمال جودة" },
        affiliation: {
          en: "Physician, Ministry of Health of Kuwait, Kuwait City, Kuwait",
          ar: "طبيب، وزارة الصحة الكويتية، مدينة الكويت، الكويت",
        },
      },
      {
        name: { en: "Hassan Alharthi", ar: "حسن الحارثي" },
        affiliation: {
          en: "College of Medicine, Umm Al-Qura University, Makkah, Saudi Arabia",
          ar: "كلية الطب، جامعة أم القرى، مكة المكرمة، المملكة العربية السعودية",
        },
      },
      {
        name: { en: "Abdullah Handoom", ar: "عبدالله حندوم" },
        affiliation: {
          en: "College of Medicine, Batterjee Medical College, Jeddah, Saudi Arabia",
          ar: "كلية الطب، كلية البترجي الطبية، جدة، المملكة العربية السعودية",
        },
      },
      {
        name: { en: "Sara Alsulami", ar: "سارة السلمي" },
        affiliation: {
          en: "College of Medicine, University of Jeddah, Jeddah, Saudi Arabia",
          ar: "كلية الطب، جامعة جدة، جدة، المملكة العربية السعودية",
        },
      },
      {
        name: { en: "Wajed Fattani", ar: "واجد فتاني" },
        affiliation: {
          en: "Ibn Sina National College for Medical Studies, Jeddah, Saudi Arabia",
          ar: "كلية ابن سينا الأهلية للعلوم الطبية، جدة، المملكة العربية السعودية",
        },
      },
      {
        name: { en: "Mohammed Alazraqi", ar: "محمد الأزرقي" },
        affiliation: {
          en: "Faculty of Medicine, King Abdulaziz University, Jeddah, Saudi Arabia",
          ar: "كلية الطب، جامعة الملك عبدالعزيز، جدة، المملكة العربية السعودية",
        },
      },
      {
        name: { en: "Rayan Almughyir", ar: "ريان المغير" },
        affiliation: {
          en: "College of Medicine, Almaarefa University, Riyadh, Saudi Arabia",
          ar: "كلية الطب، جامعة المعرفة، الرياض، المملكة العربية السعودية",
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
      en: "Ministry of Health, Qatif Central Hospital, Eastern Province, Saudi Arabia",
      ar: "وزارة الصحة، مستشفى القطيف المركزي، المنطقة الشرقية، المملكة العربية السعودية",
    },
    img: `/assets/${encodeURI("doctors/doctor 1 .png")}`,
    researchSlugs: ["visual-impairment-conflict-displaced"],
  },
  "ahmed-hamed-amin-ahmed": {
    slug: "ahmed-hamed-amin-ahmed",
    name: {
      en: "Dr. Ahmed Hamed Amin Ahmed",
      ar: "د. أحمد حامد أمين أحمد",
    },
    specialty: {
      en: "Orthopedic Surgeon",
      ar: "جراح عظام",
    },
    affiliation: {
      en: "Almana Group of Hospitals, Dammam, Saudi Arabia",
      ar: "مجموعة المانع للمستشفيات، الدمام، المملكة العربية السعودية",
    },
    img: `/assets/${encodeURI("doctors/doctor 1 .png")}`,
    researchSlugs: ["perioperative-carbohydrate-orthopedic-surgeries"],
  },
  "azhar-abbas-ahmed": {
    slug: "azhar-abbas-ahmed",
    name: {
      en: "Dr. Azhar Abbas Ahmed",
      ar: "د. أزهر عباس أحمد",
    },
    specialty: {
      en: "Dermatology Consultant",
      ar: "استشاري، الأمراض الجلدية",
    },
    affiliation: {
      en: "King Faisal Specialist Hospital and Research Center, Madinah, Saudi Arabia",
      ar: "مستشفى الملك فيصل التخصصي ومركز الأبحاث، المدينة المنورة، المملكة العربية السعودية",
    },
    img: `/assets/${encodeURI("doctors/doctor 1 .png")}`,
    researchSlugs: [],
  },
  "wafa-elnaseeh": {
    slug: "wafa-elnaseeh",
    name: {
      en: "Dr. Wafa Elnaseeh",
      ar: "د. وفاء النسيه",
    },
    specialty: {
      en: "ENT Consultant",
      ar: "استشاري، الأنف والأذن والحنجرة",
    },
    affiliation: {
      en: "King Faisal University, Hofuf, Saudi Arabia",
      ar: "جامعة الملك فيصل، الهفوف، المملكة العربية السعودية",
    },
    img: `/assets/${encodeURI("doctors/doctor 1 .png")}`,
    researchSlugs: [
      "azithromycin-sinusitis-systematic-review",
      "ultrasonic-bipolar-tonsillectomy-pediatric-meta-analysis",
    ],
  },
  "dalia-abdalla-mohamed": {
    slug: "dalia-abdalla-mohamed",
    name: {
      en: "Dr. Dalia Abdalla Mohamed",
      ar: "د. داليا عبدالله محمد",
    },
    specialty: {
      en: "Psychiatrist",
      ar: "استشاري، الطب النفسي",
    },
    affiliation: {
      en: "Almana General Hospital, Dammam, Saudi Arabia",
      ar: "مستشفى المانع العام، الدمام، المملكة العربية السعودية",
    },
    img: `/assets/${encodeURI("doctors/doctor 1 .png")}`,
    researchSlugs: ["psychosocial-stress-stroke-meta-analysis"],
  },
  "abdalla-osman-eltayeb": {
    slug: "abdalla-osman-eltayeb",
    name: {
      en: "Dr. Abdalla Osman Eltayeb",
      ar: "د. عبدالله عثمان الطيب",
    },
    specialty: {
      en: "Head of Cath Lab and Cardiology, Cardiologist",
      ar: "استشاري القلب، رئيس قسم القسطرة والقلب",
    },
    affiliation: {
      en: "Almana General Hospitals, Dammam, Saudi Arabia",
      ar: "مستشفيات المانع العامة، الدمام، المملكة العربية السعودية",
    },
    img: `/assets/${encodeURI("doctors/doctor 1 .png")}`,
    researchSlugs: [
      "pfa-cryoballoon-af-meta-analysis",
      "rezafungin-caspofungin-invasive-candidiasis-meta-analysis",
    ],
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

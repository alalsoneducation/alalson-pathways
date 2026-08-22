/**
 * بيانات الأقسام والبرامج التعليمية.
 *
 * ── كيف تضيف صورة لبرنامج؟
 * 1) ضع الصورة داخل المجلد: /public/images/programs/
 * 2) اكتب اسم الملف بالإنجليزية، مثل: english-diploma.jpg
 * 3) أضف الحقل image للبرنامج: image: "/images/programs/english-diploma.jpg"
 * إذا لم تُضف صورة، يظهر تصميم بديل احترافي تلقائياً (بدون صور مكسورة).
 *
 * ── كيف تضيف برنامجاً جديداً؟
 * أضف كائناً جديداً إلى مصفوفة programs بنفس الشكل أدناه.
 */

export type ProgramType = "دبلوم" | "دورة" | "برنامج";

export type DepartmentId =
  | "languages"
  | "english-skills"
  | "computer"
  | "business"
  | "accounting"
  | "medical"
  | "maintenance"
  | "graphics"
  | "international"
  | "school-support"
  | "development";

export type Department = {
  id: DepartmentId;
  name: string;
  icon: string;
  description: string;
};

export const departments: Department[] = [
  {
    id: "languages",
    name: "قسم اللغات",
    icon: "languages",
    description: "دبلومات ودورات في اللغة الإنجليزية والفرنسية والتركية وبرامج الأطفال.",
  },
  {
    id: "computer",
    name: "قسم الحاسوب",
    icon: "monitor",
    description: "الرخصة الدولية لقيادة الحاسوب، السكرتارية، وأساسيات الحاسب والإنترنت.",
  },
  {
    id: "business",
    name: "قسم إدارة الأعمال",
    icon: "briefcase",
    description: "دبلوم إدارة الأعمال وبرامج ريادة الأعمال.",
  },
  {
    id: "accounting",
    name: "قسم المحاسبة المالية",
    icon: "calculator",
    description: "دبلوم المحاسبة المالية وأنظمة المحاسبة الإلكترونية.",
  },
  {
    id: "medical",
    name: "قسم العلوم الطبية",
    icon: "stethoscope",
    description: "التمريض والإسعافات الأولية والمصطلحات الطبية.",
  },
  {
    id: "maintenance",
    name: "قسم الصيانة والبرمجة",
    icon: "smartphone",
    description: "صيانة وبرمجة الهاتف المحمول بشرح نظري وتطبيق عملي.",
  },
  {
    id: "graphics",
    name: "قسم الجرافيكس والملتميديا",
    icon: "palette",
    description: "التصميم الإعلاني والفوتوشوب والتصوير والمونتاج.",
  },
  {
    id: "international",
    name: "قسم البرامج الدولية",
    icon: "globe",
    description: "التحضير لاختبارات IELTS و TOEFL.",
  },
  {
    id: "school-support",
    name: "قسم التقوية للمواد العلمية",
    icon: "book-open",
    description: "تقوية طلاب الصف الثالث الثانوي في المواد الأساسية.",
  },
  {
    id: "development",
    name: "قسم التنمية البشرية",
    icon: "sparkles",
    description: "برامج القيادة والإدارة والمهارات الشخصية والمهنية.",
  },
  {
    id: "english-skills",
    name: "دبلومات التقوية في مهارات اللغة الإنجليزية",
    icon: "mic",
    description: "الاستماع والمحادثة والصوتيات والكتابة الأكاديمية والقواعد والترجمة.",
  },
];

export const departmentName = (id: DepartmentId) =>
  departments.find((d) => d.id === id)?.name ?? "";

export type ProgramSection = { title: string; items: string[] };

export type Program = {
  slug: string;
  name: string;
  nameEn?: string;
  department: DepartmentId;
  type: ProgramType;
  /** صورة الخدمة: "/images/programs/xxx.jpg" — اتركها فارغة حتى ترفع الصورة */
  image?: string;
  /** طريقة عرض الصورة: cover (افتراضي) أو contain للشعارات */
  imageFit?: "cover" | "contain";
  summary?: string;
  goal?: string;
  duration?: string;
  price?: string;
  firstInstallment?: string;
  schedule?: string[];
  requirements?: string[];
  accreditations?: string[];
  features?: string[];
  seats?: string;
  audience?: string[];
  partnerships?: string[];
  sections?: ProgramSection[];
  branches?: string[];
  featured?: boolean;
};

const sanaaShumaila = "صنعاء – جولة شميلة – مجمع الكليبي التجاري";
const sanaaArtel = "صنعاء – آرتل – بجانب مدارس صنعاء الجديدة";
const amran = "عمران – جولة البشيري – أمام محطة الطبيب";

const stdSchedule = ["8:00 – 10:00", "10:00 – 12:00", "2:00 – 4:00", "4:00 – 6:00"];

const govAccred = [
  "معهد الألسن الدولي",
  "وزارة الخارجية",
  "وزارة التعليم الفني والتدريب المهني",
];

export const programs: Program[] = [
  // ───────── قسم اللغات
  {
    slug: "english-diploma",
    name: "دبلوم اللغة الإنجليزية",
    nameEn: "English Diploma",
    department: "languages",
    type: "دبلوم",
    featured: true,
    image: "/images/programs/english-diploma.jpg",
    summary:
      "برنامج متكامل لتطوير مهارات اللغة الإنجليزية والتحدث بثقة وطلاقة، وتأهيل المتدرب لمتطلبات سوق العمل.",
    duration: "750 ساعة تدريبية",
    price: "الدبلوم المبتدئ: 50,000 ريال — الدبلوم المتوسط: 50,000 ريال — الدبلوم المتقدم: 50,000 ريال",
    firstInstallment: "القسط الأول: 10,000 ريال",
    schedule: stdSchedule,
    accreditations: govAccred,
    sections: [
      {
        title: "الدبلوم المبتدئ",
        items: [
          "Starter – 50 Hours",
          "Intro A – 50 Hours",
          "Intro B – 50 Hours",
          "Conversation A – 50 Hours",
          "Academic Writing A – 50 Hours",
        ],
      },
      {
        title: "الدبلوم المتوسط",
        items: [
          "Basic A – 50 Hours",
          "Basic B – 50 Hours",
          "Inter A – 50 Hours",
          "Inter B – 50 Hours",
          "Conversation B – 50 Hours",
        ],
      },
      {
        title: "الدبلوم المتقدم",
        items: [
          "Academic Writing B – 50 Hours",
          "Advanced A – 50 Hours",
          "Advanced B – 50 Hours",
          "Passages A – 50 Hours",
          "Passages B – 50 Hours",
        ],
      },
    ],
    branches: [sanaaShumaila, amran],
  },
  {
    slug: "french-diploma",
    name: "دبلوم اللغة الفرنسية",
    department: "languages",
    type: "دبلوم",
  },
  {
    slug: "turkish-diploma",
    name: "دبلوم اللغة التركية",
    department: "languages",
    type: "دبلوم",
  },
  {
    slug: "english-for-kids",
    name: "دورات تعليم اللغة الإنجليزية للأطفال",
    department: "languages",
    type: "دورة",
  },

  // ───────── دبلومات التقوية في مهارات اللغة الإنجليزية
  { slug: "listening-diploma", name: "دبلوم الاستماع", department: "english-skills", type: "دبلوم" },
  { slug: "conversation-diploma", name: "دبلوم المحادثة", department: "english-skills", type: "دبلوم" },
  { slug: "phonetics-diploma", name: "دبلوم الصوتيات", department: "english-skills", type: "دبلوم" },
  {
    slug: "academic-writing-diploma",
    name: "دبلوم الكتابة الأكاديمية",
    department: "english-skills",
    type: "دبلوم",
  },
  {
    slug: "grammar-translation-course",
    name: "دورة قواعد وترجمة",
    department: "english-skills",
    type: "دورة",
  },

  // ───────── قسم الحاسوب
  {
    slug: "computer-diploma",
    name: "دبلوم البرامج التطبيقية – نظام الرخصة الدولية",
    nameEn: "ICDL – Version 6",
    department: "computer",
    type: "دبلوم",
    featured: true,
    image: "/images/programs/computer-diploma.jpg",
    summary:
      "دبلوم الحاسوب وفق نظام الرخصة الدولية – الإصدار السادس، ويحصل الطالب على دبلوم البرامج التطبيقية ودبلوم السكرتارية.",
    duration: "120 ساعة تدريبية خلال 60 يوماً",
    price: "50,000 ريال",
    firstInstallment: "القسط الأول: 10,000 ريال",
    schedule: stdSchedule,
    features: [
      "شهادة دولية ICDL.",
      "معامل وأجهزة حديثة.",
      "حقيبة إلكترونية مجانية.",
      "التأهيل لاجتياز الاختبار الدولي.",
      "تسجيل الدروس.",
      "Windows وOffice بأحدث الإصدارات.",
      "يحصل الطالب على دبلوم البرامج التطبيقية ودبلوم السكرتارية.",
    ],
    accreditations: [...govAccred, "مركز طلال أبو غزالة – الأردن"],
    sections: [
      {
        title: "المقررات",
        items: [
          "IT – 10 Hours",
          "Windows – 15 Hours",
          "Word – 20 Hours",
          "Excel – 20 Hours",
          "Access – 15 Hours",
          "PowerPoint – 10 Hours",
          "Internet – 10 Hours",
          "Arabic Typing – 15 Hours",
          "English Typing – 15 Hours",
        ],
      },
    ],
    branches: [sanaaShumaila, sanaaArtel, amran],
  },
  { slug: "secretarial-diploma", name: "دبلوم السكرتارية", department: "computer", type: "دبلوم" },
  {
    slug: "computer-basics-course",
    name: "دورة أساسيات استخدام الحاسب الآلي",
    department: "computer",
    type: "دورة",
  },
  {
    slug: "internet-basics-course",
    name: "دورة أساسيات استخدام الإنترنت",
    department: "computer",
    type: "دورة",
  },

  // ───────── إدارة الأعمال
  {
    slug: "business-administration-diploma",
    name: "دبلوم إدارة أعمال",
    department: "business",
    type: "دبلوم",
    image: "/images/programs/business-diploma.jpg",
  },
  {
    slug: "entrepreneurship-program",
    name: "برنامج ريادة الأعمال",
    department: "business",
    type: "برنامج",
  },

  // ───────── المحاسبة المالية
  {
    slug: "financial-accounting-diploma",
    name: "دبلوم المحاسبة المالية",
    department: "accounting",
    type: "دبلوم",
    featured: true,
    image: "/images/programs/accounting-diploma.jpg",
    goal: "منح المتدربين المعرفة المحاسبية الكافية والمهارات اللازمة التي تؤهلهم لممارسة مهنة المحاسبة بما يلبي احتياجات سوق العمل.",
    summary:
      "دبلوم مهني شامل في المحاسبة المالية مع تدريب على أشهر الأنظمة المحاسبية المستخدمة في سوق العمل.",
    duration: "280 ساعة تدريبية خلال ثلاثة أشهر، بمعدل ساعتين يومياً",
    price: "80,000 ريال",
    firstInstallment: "القسط الأول: 20,000 ريال",
    schedule: ["9:00 – 11:00", "3:00 – 5:00"],
    partnerships: ["شركة يمن سوفت", "شركة إبداع سوفت", "شركة سما سوفت"],
    audience: [
      "أمين مستودعات",
      "أمين صناديق",
      "صرافات",
      "مأمور زكاة",
      "مسؤول حسابات",
      "مساعد محاسب",
    ],
    sections: [
      {
        title: "محتويات الدبلوم",
        items: [
          "محاسبة أ – 40 ساعة",
          "محاسبة ب – 40 ساعة",
          "محاسبة ضريبية – 40 ساعة",
          "محاسبة شركات أموال – 40 ساعة",
          "محاسبة شركات أشخاص – 40 ساعة",
          "أساسيات محاسبة تكاليف – 40 ساعة",
          "أساسيات استخدام الحاسب الآلي – 10 ساعات",
          "النظام المحاسبي Yemensoft – 10 ساعات",
          "النظام المحاسبي إبداع سوفت – 10 ساعات",
          "النظام المحاسبي سما سوفت – 10 ساعات",
          "التقييم النهائي",
        ],
      },
    ],
    branches: [sanaaShumaila, sanaaArtel, amran],
  },
  {
    slug: "yemensoft-plus-course",
    name: "دورة النظام المحاسبي المتكامل بلس – شركة يمن سوفت",
    department: "accounting",
    type: "دورة",
  },
  {
    slug: "onyx-pro-course",
    name: "دورة النظام المحاسبي الأونكس برو – شركة يمن سوفت",
    department: "accounting",
    type: "دورة",
  },

  // ───────── العلوم الطبية
  {
    slug: "nursing-diploma",
    name: "دبلوم التمريض",
    department: "medical",
    type: "دبلوم",
    image: "/images/programs/nursing-diploma.jpg",
  },
  { slug: "first-aid-diploma", name: "دبلوم الإسعافات الأولية", department: "medical", type: "دبلوم" },
  {
    slug: "medical-terminology-course",
    name: "دورة المصطلحات الطبية",
    department: "medical",
    type: "دورة",
  },

  // ───────── الصيانة والبرمجة
  {
    slug: "mobile-maintenance-diploma",
    name: "دبلوم صيانة وبرمجة الهاتف المحمول",
    department: "maintenance",
    type: "دبلوم",
    featured: true,
    image: "/images/programs/mobile-maintenance-diploma.jpg",
    summary:
      "دبلوم عملي يؤهل المتدرب كمهندس للأجهزة الإلكترونية بشكل عام والهواتف بشكل خاص، بشرح نظري وتطبيق عملي.",
    duration: "80 ساعة Hardware + 40 ساعة Software (شرح نظري + تطبيق عملي) — الإجمالي: 120 ساعة تدريبية",
    price: "80,000 ريال",
    firstInstallment: "القسط الأول: 20,000 ريال",
    seats: "48 مقعداً — كل دفعة 12 مقعداً",
    schedule: stdSchedule,
    features: [
      "نخبة من المدربين والمهندسين ذوي الخبرات والكفاءات العالية.",
      "تأسيس المتدرب كمهندس للأجهزة الإلكترونية بشكل عام والهواتف بشكل خاص.",
      "تطبيق عملي حر كل نهاية أسبوع.",
      "صيانة أجهزة المتدربين بأنفسهم تحت إشراف المدربين.",
      "حقيبة إلكترونية تعليمية مجانية.",
      "توفير فرص عمل عند الطلب للطلاب المتميزين.",
      "دورتان مجانيتان في الحاسوب والإنترنت للطالب المسجل.",
      "ورشة عمل تحتوي على أدوات الصيانة.",
      "تنفيذ مشاريع تخرج.",
    ],
    accreditations: [
      "وزارة الخارجية",
      "وزارة التعليم الفني والتدريب المهني",
      "معهد الألسن الدولي",
    ],
    branches: [sanaaShumaila, amran],
  },

  // ───────── الجرافيكس والملتميديا
  {
    slug: "photoshop-diploma",
    name: "دبلوم الفوتوشوب",
    nameEn: "Photoshop Diploma",
    department: "graphics",
    type: "دبلوم",
    featured: true,
    image: "/images/programs/photoshop-diploma.jpg",
    summary:
      "دبلوم متخصص للراغبين في احتراف التصميم الإعلاني واكتساب مهارات عملية في مجال الدعاية والإعلان.",
    duration: "20 ساعة تدريبية خلال شهر، بمعدل ساعتين في اليوم",
    price: "10,000 ريال",
    schedule: ["الصباحية: 9:00 – 11:00", "المسائية: 3:00 – 5:00"],
    features: [
      "نخبة من المصممين المتخصصين والحاصلين على الخبرة العلمية والعملية الواسعة في مجال التصميم الإعلاني.",
      "مناسب لجميع التخصصات وللأشخاص الذين يطمحون لاحتراف العمل في مجال التصميم الإعلاني.",
      "يحصل الطالب بعد الانتهاء من دراسة الدبلوم واجتياز الاختبار النهائي بنسبة قبول 70% على شهادة معتمدة من الجهات الحكومية.",
    ],
    branches: [sanaaShumaila, amran],
  },
  {
    slug: "graphics-advertising-diploma",
    name: "دبلوم تصميم الجرافيك والإعلان التجاري",
    department: "graphics",
    type: "دبلوم",
    featured: true,
    image: "/images/programs/graphics-diploma.jpg",
    summary:
      "دبلوم شامل في تصميم الجرافيك والإعلان التجاري على أحدث البرامج، مع تدريب عملي في معامل مجهزة.",
    duration: "145 ساعة تدريبية خلال ثلاثة أشهر",
    price: "60,000 ريال",
    firstInstallment: "القسط الأول: 10,000 ريال",
    schedule: stdSchedule,
    features: [
      "نخبة من مصممي الجرافيك المتخصصين.",
      "معامل وأجهزة حديثة ومتطورة.",
      "تسجيل الدروس أثناء الشرح.",
      "حقيبة إلكترونية مجانية.",
      "دورة مجانية في أساسيات التصوير والمونتاج والإخراج التلفزيوني بعد التخرج.",
      "شهادة معتمدة من الجهات الحكومية بعد اجتياز الدبلوم بنسبة قبول لا تقل عن 80%.",
    ],
    requirements: [
      "معرفة أساسية باستخدام الحاسوب.",
      "جهاز كمبيوتر واتصال بالإنترنت.",
      "لا يشترط المؤهل الجامعي أو الثانوي.",
      "لا يتطلب خبرات سابقة.",
    ],
    accreditations: [
      "وزارة الخارجية",
      "وزارة التعليم الفني والتدريب المهني",
      "معهد الألسن الدولي",
    ],
    sections: [
      {
        title: "المقررات",
        items: [
          "Windows – 15 Hours",
          "Photoshop – 20 Hours",
          "Illustrator – 20 Hours",
          "InDesign – 40 Hours",
          "Premiere – 20 Hours",
          "After Effects – 20 Hours",
          "Photography – 20 Hours",
        ],
      },
    ],
  },
  {
    slug: "photography-montage-course",
    name: "دورة فن التصوير والمونتاج والإخراج التلفزيوني",
    department: "graphics",
    type: "دورة",
  },

  // ───────── البرامج الدولية
  { slug: "ielts-preparation", name: "تحضير IELTS", department: "international", type: "برنامج" },
  { slug: "toefl-preparation", name: "تحضير TOEFL", department: "international", type: "برنامج" },

  // ───────── التقوية للمواد العلمية
  {
    slug: "grade12-math",
    name: "الصف الثالث الثانوي – الرياضيات",
    department: "school-support",
    type: "دورة",
  },
  {
    slug: "grade12-physics",
    name: "الصف الثالث الثانوي – الفيزياء",
    department: "school-support",
    type: "دورة",
  },
  {
    slug: "grade12-chemistry",
    name: "الصف الثالث الثانوي – الكيمياء",
    department: "school-support",
    type: "دورة",
  },
  {
    slug: "grade12-biology",
    name: "الصف الثالث الثانوي – الأحياء",
    department: "school-support",
    type: "دورة",
  },
  {
    slug: "grade12-arabic",
    name: "الصف الثالث الثانوي – اللغة العربية",
    department: "school-support",
    type: "دورة",
  },
  {
    slug: "grade12-english",
    name: "الصف الثالث الثانوي – اللغة الإنجليزية",
    department: "school-support",
    type: "دورة",
  },

  // ───────── التنمية البشرية
  {
    slug: "human-development-diploma",
    name: "دبلوم التنمية البشرية",
    department: "development",
    type: "دبلوم",
    image: "/images/programs/human-development-diploma.jpg",
  },
  { slug: "tot-diploma", name: "دبلوم إعداد وتدريب المدربين TOT", department: "development", type: "دبلوم" },
  { slug: "arabic-calligraphy", name: "برنامج فن الخط العربي", department: "development", type: "برنامج" },
  {
    slug: "presentation-skills",
    name: "برنامج مهارات العرض والإلقاء",
    department: "development",
    type: "برنامج",
  },
  {
    slug: "youth-leadership",
    name: "برنامج صناعة القيادات الشبابية",
    department: "development",
    type: "برنامج",
  },
  {
    slug: "small-projects-management",
    name: "برنامج إدارة المشاريع الصغيرة",
    department: "development",
    type: "برنامج",
  },
  {
    slug: "classroom-management",
    name: "برنامج مهارات التخطيط والإدارة الصفية",
    department: "development",
    type: "برنامج",
  },
  {
    slug: "operational-planning",
    name: "برنامج التخطيط التشغيلي",
    department: "development",
    type: "برنامج",
  },
  {
    slug: "problem-solving",
    name: "برنامج فن تحليل وحل المشكلات",
    department: "development",
    type: "برنامج",
  },
  { slug: "professional-teacher", name: "برنامج المعلم المحترف", department: "development", type: "برنامج" },
  {
    slug: "modern-secretarial-skills",
    name: "برنامج مهارات السكرتارية الحديثة",
    department: "development",
    type: "برنامج",
  },
  {
    slug: "personality-analysis",
    name: "برنامج مهارات تحليل الشخصية",
    department: "development",
    type: "برنامج",
  },
  {
    slug: "business-correspondence",
    name: "برنامج المراسلات التجارية والإدارية",
    department: "development",
    type: "برنامج",
  },
  { slug: "cv-preparation", name: "برنامج إعداد السيرة الذاتية", department: "development", type: "برنامج" },
  {
    slug: "job-grants-application",
    name: "برنامج التقديم للمنح الوظيفية",
    department: "development",
    type: "برنامج",
  },
  {
    slug: "procurement-warehouses",
    name: "برنامج إدارة المشتريات والمخازن",
    department: "development",
    type: "برنامج",
  },
  {
    slug: "modern-management-skills",
    name: "برنامج مهارات الإدارة الحديثة",
    department: "development",
    type: "برنامج",
  },
  {
    slug: "mind-development",
    name: "برنامج مهارات تنمية العقول",
    department: "development",
    type: "برنامج",
  },
  {
    slug: "public-relations",
    name: "برنامج مهارات العلاقات العامة",
    department: "development",
    type: "برنامج",
  },
  {
    slug: "women-economic-empowerment",
    name: "برنامج التمكين الاقتصادي للمرأة",
    department: "development",
    type: "برنامج",
  },
  {
    slug: "perfume-incense-making",
    name: "برنامج مهارات صناعة العطور والبخور",
    department: "development",
    type: "برنامج",
  },
];

export const programTypes: ProgramType[] = ["دبلوم", "دورة", "برنامج"];

export const getProgram = (slug: string) => programs.find((p) => p.slug === slug);

export const relatedPrograms = (program: Program, limit = 3) =>
  programs
    .filter((p) => p.department === program.department && p.slug !== program.slug)
    .slice(0, limit);

export const featuredPrograms = programs.filter((p) => p.featured);

export const programsByDepartment = (id: DepartmentId) =>
  programs.filter((p) => p.department === id);

export const hasDetails = (p: Program) =>
  Boolean(p.summary || p.duration || p.price || p.features?.length || p.sections?.length);

/**
 * بيانات المعهد العامة — عدّل هذا الملف لتحديث معلومات التواصل والفروع والروابط.
 */

export const site = {
  nameAr: "معهد الألسن الدولي",
  nameEn: "Alalson International Institute",
  shortName: "A.I.I",
  tagline: "طريقك لاكتساب المهارات والمعارف اللازمة لمواكبة سوق العمل",
  description:
    "معهد الألسن الدولي مؤسسة تعليمية وتدريبية في اليمن تقدم الدبلومات والبرامج والدورات في اللغات والحاسب وإدارة الأعمال والمحاسبة والعلوم الطبية والجرافيكس والصيانة والبرمجة والتنمية البشرية وغيرها.",
  foundedYear: 2016,
  whatsappNumber: "967777770598",
  whatsappUrl: "https://wa.me/967777770598",
};

export const whatsappLink = (message?: string) =>
  message ? `${site.whatsappUrl}?text=${encodeURIComponent(message)}` : site.whatsappUrl;

export const contactGroups = [
  { label: "السكرتارية", numbers: ["01601841", "07605070"] },
  { label: "الشؤون الأكاديمية", numbers: ["07603975", "01639493"] },
  { label: "إدارة المعهد", numbers: ["777770598"], note: "واتساب" },
];

export type Branch = {
  id: string;
  city: string;
  area: string;
  landmark: string;
};

export const branches: Branch[] = [
  {
    id: "sanaa-shumaila",
    city: "صنعاء",
    area: "جولة شميلة",
    landmark: "مجمع الكليبي التجاري",
  },
  {
    id: "sanaa-artel",
    city: "صنعاء",
    area: "آرتل",
    landmark: "بجانب مدارس صنعاء الجديدة",
  },
  {
    id: "amran-bashiri",
    city: "عمران",
    area: "جولة البشيري",
    landmark: "أمام محطة الطبيب",
  },
];

export const branchLabel = (b: Branch) => `${b.city} – ${b.area} – ${b.landmark}`;

export type SocialLink = { name: string; url: string; icon: string };

export const socialLinks: SocialLink[] = [
  { name: "الموقع الرسمي", url: "https://alalsoneducation.godaddysites.com", icon: "globe" },
  { name: "فيسبوك", url: "https://www.facebook.com/ALALSONCenter", icon: "facebook" },
  { name: "مجموعة فيسبوك", url: "https://www.facebook.com/share/g/1AtzjSSdc1", icon: "users" },
  { name: "X", url: "https://x.com/ALALSONCENTERS", icon: "twitter" },
  { name: "يوتيوب", url: "https://www.youtube.com/c/ALALSONEducation", icon: "youtube" },
  { name: "واتساب", url: "https://wa.me/967777770598", icon: "whatsapp" },
  {
    name: "قناة واتساب",
    url: "https://whatsapp.com/channel/0029VatPBfCATRShjIK13f3H",
    icon: "whatsapp",
  },
  { name: "تيليجرام", url: "https://t.me/ALALSONCENTER", icon: "send" },
  { name: "إنستغرام", url: "https://www.instagram.com/alalsoncenter", icon: "instagram" },
  { name: "لايكي", url: "https://l.likee.video/p/89PNii", icon: "video" },
  { name: "تيك توك", url: "https://www.tiktok.com/@alalsoneducation", icon: "music" },
  { name: "بينترست", url: "https://pin.it/35Broc07R", icon: "image" },
  { name: "تمبلر", url: "https://alalsoneducation.tumblr.com", icon: "type" },
  { name: "لينكدإن", url: "https://www.linkedin.com/in/alalsoneducation", icon: "linkedin" },
  { name: "سناب شات", url: "https://www.snapchat.com/add/alsoneducation", icon: "ghost" },
  { name: "كواي", url: "https://k.kwai.com/u/@ALALSONEducation", icon: "video" },
  { name: "بلوجر", url: "https://alalsoneducation.blogspot.com", icon: "rss" },
];

export const aboutParagraphs = [
  "تأسس معهد الألسن الدولي في مطلع العام 2016، ليُصبح أحد أبرز المؤسسات التعليمية الرائدة في الجمهورية اليمنية، مستنداً إلى رؤية واضحة تهدف إلى تمكين جميع أفراد المجتمع من اكتساب المهارات والمعارف الحديثة، وتقديم تعليم عالي الجودة وفق أحدث الأساليب التعليمية.",
  "وقد حرص المعهد منذ انطلاقته الأولى على توفير فرصة التعليم للجميع، من خلال منح عضوية الألسن لكل من يسعى إلى اكتساب مهارة جديدة تمكنه من الالتحاق في وظائف سوق العمل، بدون طلب المؤهل الثانوي أو الجامعي في معظم الدبلومات والبرامج والدورات والتخصصات التي يقدمها.",
  "كما تم تجهيز المعهد بأحدث التجهيزات والوسائل التعليمية الحديثة، وتوفير بيئة تعليمية ملائمة تسهم في نجاح سير العملية التعليمية من أجل بناء جيل مؤهل قادر على مواكبة متطلبات سوق العمل المحلي والإقليمي.",
  "ومنذ تأسيس صرحنا العلمي، قدمت مؤسسة الألسن التعليمية نخبة من الكوادر المؤهلة علمياً ومهنياً في العديد من المجالات، من خلال تقديم برامج أكاديمية متخصصة تمكن الخريجين من الالتحاق بوظائف مرموقة في قطاعات الدولة والمؤسسات الحكومية والخاصة.",
  "كما يقدم المعهد اهتماماً خاصاً ببرامج القيادة والتطوير الإداري، حيث يقدم دورات تدريبية احترافية في مجال الإدارة والتأهيل، تحت إشراف نخبة من الخبراء والدكاترة والمدربين الدوليين.",
  "ويتميز المعهد بترخيص رسمي من الجهات الحكومية والخاصة، والتعاقد مع العديد من المؤسسات والشركات المحلية والدولية، مما يجعل شهاداته معتمدة وموثوقة لدى العديد من القطاعات الرسمية والخاصة في اليمن وخارجها.",
  "يقدم معهد الألسن الدولي مجموعة متنوعة من البرامج التعليمية والتدريبية في العديد من المجالات، منها: اللغات الأجنبية، إدارة الأعمال، الحاسب الآلي، الصيانة والبرمجة، المحاسبة المالية، التمريض، الإسعافات الأولية، التنمية البشرية، بما يلبي احتياجات سوق العمل المحلي والدولي.",
  "كما يعمل المعهد على تعزيز مهارات الطلاب من خلال أساليب تعليم حديثة، تشمل التعليم التفاعلي، والتدريب العملي، والأنشطة اللاصفية.",
  "يضم المعهد هيئة تدريسية ذات كفاءة عالية، ومرافق تعليمية متطورة تشمل قاعات ذكية، ومعامل حاسوب، ومكتبة حديثة، بالإضافة إلى بيئة تعليمية تشجع على الإبداع والانضباط والتميز الأكاديمي.",
  "ويحرص المعهد على بناء شراكات فعالة مع مؤسسات تعليمية ومهنية محلية ودولية، بهدف فتح آفاق أوسع أمام طلابه وتمكينهم من تحقيق طموحاتهم الأكاديمية والمهنية.",
];

export const pillars = [
  {
    title: "التأسيس",
    body: "تأسس معهد الألسن الدولي في بداية عام 2016.",
    icon: "landmark",
  },
  {
    title: "الرؤية",
    body: "أن يصبح من المؤسسات التعليمية الرائدة في اليمن، ويسعى ليكون الأفضل والأوسع انتشاراً في أغلب محافظات الجمهورية اليمنية.",
    icon: "eye",
  },
  {
    title: "الرسالة",
    body: "توفير فرصة التعليم للجميع بمنح عضوية الألسن لكل من يرغب في اكتساب مهارة جديدة، بدون طلب المؤهل الثانوي أو الجامعي في أغلب المجالات التي تقدمها مؤسسة الألسن التعليمية.",
    icon: "target",
  },
  {
    title: "الأهداف",
    body: "خدمة المجتمع بإعداد أجيال مؤهلة قادرة على تلبية احتياجات سوق العمل، بأعلى المهارات والمعارف العلمية اللازمة للرقي بالعملية التعليمية.",
    icon: "flag",
  },
];

export const highlights = [
  { title: "منذ 2016", body: "سنوات من الخبرة", icon: "calendar" },
  { title: "برامج ودبلومات متنوعة", body: "في العديد من المجالات", icon: "layers" },
  { title: "كوادر مؤهلة", body: "علمياً ومهنياً", icon: "user-check" },
  { title: "بيئة تعليمية متطورة", body: "ومناهج حديثة", icon: "building-2" },
];

import { Link } from "@tanstack/react-router";
import { MapPin, Phone } from "lucide-react";

import { Logo } from "@/components/Logo";
import { SocialLinks } from "@/components/SocialLinks";
import { branchLabel, branches, contactGroups, site } from "@/data/site";

const quickLinks = [
  { label: "الرئيسية", to: "/" },
  { label: "عن المعهد", to: "/about" },
  { label: "البرامج", to: "/store" },
  { label: "المتجر", to: "/store" },
  { label: "التسجيل", to: "/register" },
  { label: "الفروع", to: "/branches" },
  { label: "تواصل معنا", to: "/contact" },
];

const footerDepartments = [
  "اللغات",
  "الحاسوب",
  "إدارة الأعمال",
  "المحاسبة",
  "العلوم الطبية",
  "الصيانة والبرمجة",
  "الجرافيكس والملتميديا",
  "التنمية البشرية",
];

export function Footer() {
  return (
    <footer className="mt-16 bg-brand-gradient text-primary-foreground">
      <div className="container-page grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <Logo size={56} className="size-14 rounded-xl bg-primary-foreground/10 p-1" />
            <div className="min-w-0">
              <p className="truncate text-lg font-extrabold">{site.nameAr}</p>
              <p className="truncate text-xs text-primary-foreground/75">{site.nameEn}</p>
            </div>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-primary-foreground/80">
            مؤسسة تعليمية وتدريبية تأسست عام {site.foundedYear} في الجمهورية اليمنية، تقدم
            الدبلومات والبرامج والدورات في مجالات متعددة وفق أحدث الأساليب التعليمية.
          </p>
        </div>

        <nav aria-label="روابط سريعة">
          <h2 className="text-base font-bold">روابط سريعة</h2>
          <ul className="mt-4 grid gap-2 text-sm text-primary-foreground/80">
            {quickLinks.map((l) => (
              <li key={l.label}>
                <Link to={l.to} className="transition-colors hover:text-primary-foreground">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-base font-bold">الأقسام</h2>
          <ul className="mt-4 grid gap-2 text-sm text-primary-foreground/80">
            {footerDepartments.map((d) => (
              <li key={d}>
                <Link to="/departments" className="transition-colors hover:text-primary-foreground">
                  {d}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-base font-bold">تواصل معنا</h2>
          <ul className="mt-4 grid gap-3 text-sm text-primary-foreground/80">
            {contactGroups.map((g) => (
              <li key={g.label} className="flex items-start gap-2">
                <Phone className="mt-0.5 size-4 shrink-0" aria-hidden />
                <span>
                  <span className="font-semibold text-primary-foreground">{g.label}:</span>{" "}
                  <span dir="ltr">{g.numbers.join(" – ")}</span>
                  {g.note ? ` (${g.note})` : ""}
                </span>
              </li>
            ))}
            {branches.map((b) => (
              <li key={b.id} className="flex items-start gap-2">
                <MapPin className="mt-0.5 size-4 shrink-0" aria-hidden />
                <span>{branchLabel(b)}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="container-page border-t border-primary-foreground/15 py-6">
        <SocialLinks variant="compact" />
        <p className="mt-5 text-center text-xs text-primary-foreground/70">
          © {new Date().getFullYear()} {site.nameAr} — {site.nameEn} ({site.shortName}). جميع
          الحقوق محفوظة.
        </p>
      </div>
    </footer>
  );
}

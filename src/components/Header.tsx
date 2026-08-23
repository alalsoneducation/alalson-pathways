import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, Phone } from "lucide-react";

import { Logo } from "@/components/Logo";
import { WhatsAppLink } from "@/components/WhatsAppButton";
import { site } from "@/data/site";

type NavItem = { label: string; to: string; search?: Record<string, string> };

export const navItems: NavItem[] = [
  { label: "الرئيسية", to: "/" },
  { label: "عن المعهد", to: "/about" },
  { label: "الأقسام التعليمية", to: "/departments" },
  { label: "المتجر", to: "/store" },
  { label: "الدبلومات والبرامج", to: "/store", search: { type: "دبلوم" } },
  { label: "الدورات", to: "/store", search: { type: "دورة" } },
  { label: "الفروع", to: "/branches" },
  { label: "التسجيل", to: "/register" },
  { label: "تواصل معنا", to: "/contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-surface/90 backdrop-blur-md">
      <div className="container-page grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 py-3">
        <Link to="/" className="flex min-w-0 items-center gap-3" aria-label={site.nameAr}>
          <Logo size={48} priority className="size-11 sm:size-12" />
          <span className="min-w-0">
            <span className="block truncate text-base font-extrabold text-navy sm:text-lg">
              {site.nameAr}
            </span>
            <span className="block truncate text-[11px] font-medium text-muted-foreground sm:text-xs">
              {site.nameEn}
            </span>
          </span>
        </Link>

        <div className="flex items-center gap-2">
          <div className="hidden items-center gap-2 xl:flex">
            <WhatsAppLink message="مرحباً، أرغب بالاستفسار عن البرامج." variant="outline">
              تواصل عبر WhatsApp
            </WhatsAppLink>
            <Link
              to="/register"
              className="inline-flex items-center rounded-xl bg-brand-gradient px-5 py-2.5 text-sm font-bold text-primary-foreground shadow-card transition-transform hover:-translate-y-0.5"
            >
              سجل الآن
            </Link>
          </div>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "إغلاق القائمة" : "فتح القائمة"}
            aria-expanded={open}
            className="flex size-11 items-center justify-center rounded-xl border border-border text-navy lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* سطح المكتب */}
      <nav aria-label="التنقل الرئيسي" className="hidden border-t border-border/70 lg:block">
        <ul className="container-page flex flex-wrap items-center gap-1 py-1.5">
          {navItems.map((item) => (
            <li key={item.label}>
              <Link
                to={item.to}
                search={item.search as never}
                activeOptions={{ exact: item.to === "/", includeSearch: Boolean(item.search) }}
                activeProps={{ className: "bg-accent text-accent-foreground" }}
                className="inline-flex rounded-lg px-3 py-2 text-sm font-semibold text-foreground/80 transition-colors hover:bg-muted"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* الجوال */}
      {open ? (
        <nav aria-label="قائمة الجوال" className="border-t border-border bg-surface lg:hidden">
          <ul className="container-page grid gap-1 py-3">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.to}
                  search={item.search as never}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-3 text-sm font-semibold text-foreground/85 hover:bg-muted"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="mt-2 grid gap-2">
              <Link
                to="/register"
                onClick={() => setOpen(false)}
                className="rounded-xl bg-brand-gradient px-4 py-3 text-center text-sm font-bold text-primary-foreground"
              >
                سجل الآن
              </Link>
              <WhatsAppLink message="مرحباً، أرغب بالاستفسار عن البرامج." className="py-3">
                تواصل معنا عبر WhatsApp
              </WhatsAppLink>
              <a
                href="tel:01601841"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-border px-4 py-3 text-sm font-bold text-navy"
              >
                <Phone className="size-4" aria-hidden />
                اتصل بالسكرتارية
              </a>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}

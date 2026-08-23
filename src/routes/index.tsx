import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  BookOpenCheck,
  Building2,
  CalendarRange,
  GraduationCap,
  Handshake,
  Layers,
  Laptop,
  ShieldCheck,
  UserCheck,
  Users,
} from "lucide-react";

import { Hero } from "@/components/Hero";
import { DepartmentCard } from "@/components/DepartmentCard";
import { ProgramCard } from "@/components/ProgramCard";
import { departments, featuredPrograms } from "@/data/programs";
import { aboutParagraphs, pillars, site } from "@/data/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${site.nameAr} | ${site.nameEn}` },
      { name: "description", content: site.description },
      { property: "og:title", content: `${site.nameAr} | ${site.nameEn}` },
      { property: "og:description", content: site.description },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const highlightItems = [
  { icon: CalendarRange, title: "منذ 2016", body: "سنوات من الخبرة" },
  { icon: Layers, title: "برامج ودبلومات متنوعة", body: "في العديد من المجالات" },
  { icon: UserCheck, title: "كوادر مؤهلة", body: "علمياً ومهنياً" },
  { icon: Building2, title: "بيئة تعليمية متطورة", body: "ومناهج حديثة" },
];

const whyItems = [
  { icon: BookOpenCheck, title: "برامج تعليمية وتدريبية متنوعة" },
  { icon: GraduationCap, title: "تأهيل كوادر علمياً وعملياً" },
  { icon: Users, title: "مدربون وخبراء متخصصون" },
  { icon: ShieldCheck, title: "تراخيص واعتمادات" },
  { icon: Laptop, title: "مرافق وتجهيزات تعليمية" },
  { icon: Handshake, title: "شراكات تعليمية ومهنية" },
];

function HomePage() {
  return (
    <>
      <Hero />

      <section className="container-page -mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {highlightItems.map((h) => {
          const Icon = h.icon;
          return (
            <article key={h.title} className="card-elevated flex items-start gap-3 p-5">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                <Icon className="size-5" aria-hidden />
              </span>
              <div className="min-w-0">
                <p className="text-sm font-extrabold text-navy">{h.title}</p>
                <p className="text-xs text-muted-foreground">{h.body}</p>
              </div>
            </article>
          );
        })}
      </section>

      <section className="section-y">
        <div className="container-page grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-extrabold text-navy sm:text-3xl">عن المعهد</h2>
            <div className="mt-4 grid gap-4 text-sm leading-loose text-muted-foreground sm:text-base">
              <p>{aboutParagraphs[0]}</p>
              <p>{aboutParagraphs[1]}</p>
            </div>
            <Link
              to="/about"
              className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-primary hover:underline"
            >
              اقرأ المزيد عن المعهد
              <ArrowLeft className="size-4" aria-hidden />
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {pillars.map((p) => (
              <article key={p.title} className="card-elevated p-6">
                <h3 className="text-base font-extrabold text-navy">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-soft-gradient section-y">
        <div className="container-page">
          <h2 className="text-2xl font-extrabold text-navy sm:text-3xl">لماذا الألسن؟</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {whyItems.map((w) => (
              <article key={w.title} className="card-elevated flex items-center gap-4 p-6">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-brand-gradient text-primary-foreground">
                  <w.icon className="size-5" aria-hidden />
                </span>
                <h3 className="text-sm font-extrabold text-navy sm:text-base">{w.title}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="container-page">
          <div className="grid grid-cols-[minmax(0,1fr)_auto] items-end gap-4">
            <div className="min-w-0">
              <h2 className="text-2xl font-extrabold text-navy sm:text-3xl">الأقسام التعليمية</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                أقسام متخصصة تغطي مجالات متنوعة تلبي احتياجات سوق العمل.
              </p>
            </div>
            <Link
              to="/departments"
              className="shrink-0 text-sm font-bold text-primary hover:underline"
            >
              كل الأقسام
            </Link>
          </div>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {departments.slice(0, 6).map((d) => (
              <DepartmentCard key={d.id} department={d} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-soft-gradient section-y">
        <div className="container-page">
          <div className="grid grid-cols-[minmax(0,1fr)_auto] items-end gap-4">
            <div className="min-w-0">
              <h2 className="text-2xl font-extrabold text-navy sm:text-3xl">برامج مميزة</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                نخبة من الدبلومات التي تتوفر تفاصيلها الكاملة حالياً.
              </p>
            </div>
            <Link to="/store" className="shrink-0 text-sm font-bold text-primary hover:underline">
              زيارة المتجر
            </Link>
          </div>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featuredPrograms.map((p) => (
              <ProgramCard key={p.slug} program={p} />
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-12">
        <div className="rounded-3xl bg-brand-gradient p-8 text-center text-primary-foreground shadow-lift sm:p-12">
          <h2 className="text-2xl font-extrabold sm:text-3xl">ابدأ رحلتك التعليمية اليوم</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-primary-foreground/85">
            سجّل في البرنامج المناسب لك، أو تواصل معنا للاستفسار عن الرسوم وأوقات الدراسة والفروع.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              to="/register"
              className="rounded-xl bg-gold-gradient px-6 py-3 text-sm font-extrabold text-gold-foreground"
            >
              سجل الآن
            </Link>
            <Link
              to="/contact"
              className="rounded-xl border border-primary-foreground/30 px-6 py-3 text-sm font-extrabold"
            >
              تواصل معنا
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

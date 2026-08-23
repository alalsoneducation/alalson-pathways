import { Link } from "@tanstack/react-router";
import { ArrowLeft, Sparkles } from "lucide-react";

import { Logo } from "@/components/Logo";
import { WhatsAppLink } from "@/components/WhatsAppButton";
import { site } from "@/data/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-gradient text-primary-foreground">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -start-24 size-72 rounded-full bg-cyan/25 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -end-16 size-80 rounded-full bg-gold/20 blur-3xl"
      />

      <div className="container-page relative grid items-center gap-10 py-14 lg:grid-cols-[1.15fr_0.85fr] lg:py-24">
        <div className="min-w-0">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/25 bg-primary-foreground/10 px-4 py-1.5 text-xs font-bold">
            <Sparkles className="size-3.5" aria-hidden />
            منذ عام {site.foundedYear} في الجمهورية اليمنية
          </span>

          <h1 className="mt-5 text-3xl leading-tight font-extrabold sm:text-4xl lg:text-5xl">
            {site.nameAr}
          </h1>
          <p className="mt-2 text-base font-semibold text-primary-foreground/80" dir="ltr">
            {site.nameEn}
          </p>

          <p className="mt-5 max-w-2xl text-lg font-bold text-gold sm:text-xl">{site.tagline}</p>

          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-primary-foreground/85 sm:text-base">
            منذ عام 2016 نعمل على تقديم برامج تعليمية وتدريبية متنوعة تساعد على تطوير المهارات
            والمعارف وتأهيل المتدربين لمتطلبات سوق العمل.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/store"
              className="inline-flex items-center gap-2 rounded-xl bg-gold-gradient px-6 py-3 text-sm font-extrabold text-gold-foreground shadow-lift transition-transform hover:-translate-y-0.5"
            >
              استكشف برامجنا
              <ArrowLeft className="size-4" aria-hidden />
            </Link>
            <Link
              to="/register"
              className="inline-flex items-center rounded-xl border border-primary-foreground/30 bg-primary-foreground/10 px-6 py-3 text-sm font-extrabold text-primary-foreground transition-colors hover:bg-primary-foreground/20"
            >
              سجل الآن
            </Link>
            <WhatsAppLink
              className="px-6 py-3"
              message="السلام عليكم، أرغب في الاستفسار عن برامج معهد الألسن الدولي."
            >
              تواصل عبر WhatsApp
            </WhatsAppLink>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="relative flex size-56 items-center justify-center rounded-full bg-primary-foreground/10 p-6 ring-1 ring-primary-foreground/20 sm:size-72 lg:size-80">
            <Logo size={280} priority className="size-40 sm:size-52 lg:size-60" />
          </div>
        </div>
      </div>
    </section>
  );
}

import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import {
  BadgeCheck,
  CalendarClock,
  Clock,
  MapPin,
  Users,
  Wallet,
} from "lucide-react";

import { PageHeader } from "@/components/PageHeader";
import { ProgramCard } from "@/components/ProgramCard";
import { ProgramImage } from "@/components/ProgramImage";
import { WhatsAppLink } from "@/components/WhatsAppButton";
import { departmentName, getProgram, relatedPrograms, type Program } from "@/data/programs";
import { site } from "@/data/site";

export const Route = createFileRoute("/programs/$slug")({
  loader: ({ params }) => {
    const program = getProgram(params.slug);
    if (!program) throw notFound();
    return { program };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: `الخدمة غير متاحة | ${site.nameAr}` }, { name: "robots", content: "noindex" }],
      };
    }
    const p = loaderData.program;
    const desc =
      p.summary ?? `${p.type} ${p.name} ضمن ${departmentName(p.department)} في ${site.nameAr}.`;
    return {
      meta: [
        { title: `${p.name} | ${site.nameAr}` },
        { name: "description", content: desc.slice(0, 155) },
        { property: "og:title", content: `${p.name} | ${site.nameAr}` },
        { property: "og:description", content: desc.slice(0, 155) },
        { property: "og:type", content: "product" },
        { property: "og:url", content: `/programs/${p.slug}` },
      ],
      links: [{ rel: "canonical", href: `/programs/${p.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Course",
            name: p.name,
            description: desc,
            provider: { "@type": "EducationalOrganization", name: site.nameAr },
          }),
        },
      ],
    };
  },
  notFoundComponent: ProgramNotFound,
  component: ProgramDetails,
});

function ProgramNotFound() {
  return (
    <div className="container-page section-y text-center">
      <h1 className="text-2xl font-extrabold text-navy">الخدمة التعليمية غير موجودة</h1>
      <p className="mt-3 text-sm text-muted-foreground">
        قد يكون الرابط غير صحيح أو تم تحديث البرنامج.
      </p>
      <Link
        to="/store"
        className="mt-6 inline-flex rounded-xl bg-brand-gradient px-5 py-2.5 text-sm font-bold text-primary-foreground"
      >
        العودة إلى المتجر
      </Link>
    </div>
  );
}

function InfoRow({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof Clock;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-3 rounded-xl bg-surface p-4">
      <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-accent text-accent-foreground">
        <Icon className="size-4" aria-hidden />
      </span>
      <div className="min-w-0">
        <p className="text-xs font-bold text-muted-foreground">{label}</p>
        <p className="mt-0.5 text-sm font-semibold text-navy">{value}</p>
      </div>
    </div>
  );
}

function ListBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="card-elevated p-6">
      <h3 className="text-base font-extrabold text-navy">{title}</h3>
      <ul className="mt-3 grid gap-2">
        {items.map((it) => (
          <li key={it} className="flex gap-2 text-sm leading-relaxed text-muted-foreground">
            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-gold" aria-hidden />
            <span>{it}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ProgramDetails() {
  const { program } = Route.useLoaderData();
  const p = program as Program;
  const related = relatedPrograms(p);

  return (
    <>
      <PageHeader
        eyebrow={`${departmentName(p.department)} • ${p.type}`}
        title={p.name}
        subtitle={p.summary}
      />

      <section className="container-page section-y">
        <div className="grid gap-8 lg:grid-cols-[1.4fr_0.6fr]">
          <div className="min-w-0 space-y-6">
            <div className="overflow-hidden rounded-2xl border border-border">
              <ProgramImage program={p} />
            </div>

            {p.goal ? (
              <div className="card-elevated p-6">
                <h2 className="text-lg font-extrabold text-navy">هدف البرنامج</h2>
                <p className="mt-3 text-sm leading-loose text-muted-foreground">{p.goal}</p>
              </div>
            ) : null}

            {p.sections?.map((s) => <ListBlock key={s.title} title={s.title} items={s.items} />)}

            {p.features?.length ? <ListBlock title="مميزات البرنامج" items={p.features} /> : null}
            {p.audience?.length ? <ListBlock title="الفئة المستهدفة" items={p.audience} /> : null}
            {p.requirements?.length ? (
              <ListBlock title="شروط الالتحاق" items={p.requirements} />
            ) : null}
            {p.accreditations?.length ? (
              <ListBlock title="الاعتمادات" items={p.accreditations} />
            ) : null}
            {p.partnerships?.length ? (
              <ListBlock title="الشراكات" items={p.partnerships} />
            ) : null}
            {p.schedule?.length ? (
              <ListBlock title="أوقات الدراسة" items={p.schedule} />
            ) : null}
            {p.branches?.length ? (
              <ListBlock title="الفروع المتاحة" items={p.branches} />
            ) : null}
          </div>

          <aside className="space-y-4 lg:sticky lg:top-24 lg:self-start">
            <div className="card-elevated space-y-3 p-6">
              <h2 className="text-base font-extrabold text-navy">معلومات سريعة</h2>
              <InfoRow icon={BadgeCheck} label="النوع" value={p.type} />
              {p.duration ? <InfoRow icon={Clock} label="المدة" value={p.duration} /> : null}
              {p.price ? <InfoRow icon={Wallet} label="الرسوم" value={p.price} /> : null}
              {p.firstInstallment ? (
                <InfoRow icon={CalendarClock} label="التقسيط" value={p.firstInstallment} />
              ) : null}
              {p.seats ? <InfoRow icon={Users} label="المقاعد" value={p.seats} /> : null}
              <InfoRow icon={MapPin} label="القسم" value={departmentName(p.department)} />

              <div className="grid gap-2 pt-2">
                <Link
                  to="/register"
                  search={{ program: p.slug }}
                  className="rounded-xl bg-brand-gradient px-4 py-3 text-center text-sm font-extrabold text-primary-foreground"
                >
                  التسجيل في البرنامج
                </Link>
                <WhatsAppLink
                  className="justify-center px-4 py-3"
                  message={`السلام عليكم، أرغب في الاستفسار عن: ${p.name}`}
                >
                  استفسار عبر WhatsApp
                </WhatsAppLink>
              </div>
            </div>
          </aside>
        </div>

        {related.length ? (
          <div className="mt-14">
            <h2 className="text-2xl font-extrabold text-navy">برامج ذات صلة</h2>
            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((r) => (
                <ProgramCard key={r.slug} program={r} />
              ))}
            </div>
          </div>
        ) : null}
      </section>
    </>
  );
}

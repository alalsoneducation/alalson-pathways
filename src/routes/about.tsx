import { createFileRoute } from "@tanstack/react-router";

import { PageHeader } from "@/components/PageHeader";
import { aboutParagraphs, pillars, site } from "@/data/site";

const description =
  "تعرف على معهد الألسن الدولي: النشأة عام 2016، الرؤية والرسالة والأهداف، والبرامج التعليمية والتدريبية التي يقدمها في اليمن.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: `عن المعهد | ${site.nameAr}` },
      { name: "description", content: description },
      { property: "og:title", content: `عن المعهد | ${site.nameAr}` },
      { property: "og:description", content: description },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow={site.nameEn}
        title="عن المعهد"
        subtitle="مؤسسة تعليمية وتدريبية تأسست في مطلع عام 2016 في الجمهورية اليمنية."
      />

      <section className="container-page section-y">
        <div className="grid gap-5 text-sm leading-loose text-foreground/85 sm:text-base">
          {aboutParagraphs.map((p) => (
            <p key={p.slice(0, 30)}>{p}</p>
          ))}
        </div>
      </section>

      <section className="bg-soft-gradient section-y">
        <div className="container-page">
          <h2 className="text-2xl font-extrabold text-navy sm:text-3xl">
            التأسيس والرؤية والرسالة والأهداف
          </h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {pillars.map((p) => (
              <article key={p.title} className="card-elevated p-6">
                <h3 className="text-lg font-extrabold text-navy">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

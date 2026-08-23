import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone } from "lucide-react";

import { PageHeader } from "@/components/PageHeader";
import { SocialLinks } from "@/components/SocialLinks";
import { WhatsAppLink } from "@/components/WhatsAppButton";
import { BranchCard } from "@/components/BranchCard";
import { branches, contactGroups, site } from "@/data/site";

const description =
  "تواصل مع معهد الألسن الدولي عبر الهاتف أو واتساب أو البريد الإلكتروني، أو زر أحد فروعنا في صنعاء وعمران.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: `تواصل معنا | ${site.nameAr}` },
      { name: "description", content: description },
      { property: "og:title", content: `تواصل معنا | ${site.nameAr}` },
      { property: "og:description", content: description },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHeader
        title="تواصل معنا"
        subtitle="نسعد باستقبال استفساراتكم وطلبات التسجيل عبر جميع قنوات التواصل."
      />

      <section className="container-page section-y">
        <div className="grid gap-5 lg:grid-cols-3">
          {contactGroups.map((g) => (
            <article key={g.label} className="card-elevated p-6">
              <h2 className="flex items-center gap-2 text-base font-extrabold text-navy">
                <Phone className="size-4 text-cyan" aria-hidden />
                {g.label}
              </h2>
              <ul className="mt-4 grid gap-2">
                {g.numbers.map((n) => (
                  <li key={n}>
                    <a
                      href={`tel:${n.replace(/\s/g, "")}`}
                      dir="ltr"
                      className="block rounded-lg bg-surface px-3 py-2 text-sm font-bold text-foreground transition-colors hover:bg-accent"
                    >
                      {n}
                    </a>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-6 grid gap-5 md:grid-cols-2">
          <article className="card-elevated p-6">
            <h2 className="flex items-center gap-2 text-base font-extrabold text-navy">
              <Mail className="size-4 text-cyan" aria-hidden />
              البريد الإلكتروني
            </h2>
            <a
              href="mailto:Alalsoneducation@gmail.com"
              dir="ltr"
              className="mt-3 block text-sm font-bold text-primary hover:underline"
            >
              Alalsoneducation@gmail.com
            </a>
            <div className="mt-5">
              <WhatsAppLink
                className="px-5 py-3"
                message="السلام عليكم، أرغب في الاستفسار عن برامج المعهد."
              >
                مراسلتنا عبر WhatsApp
              </WhatsAppLink>
            </div>
          </article>

          <article className="card-elevated p-6">
            <h2 className="text-base font-extrabold text-navy">تابعنا على مواقع التواصل</h2>
            <div className="mt-4">
              <SocialLinks />
            </div>
          </article>
        </div>

        <div className="mt-14">
          <h2 className="text-2xl font-extrabold text-navy">فروعنا</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {branches.map((b) => (
              <BranchCard key={b.id} branch={b} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

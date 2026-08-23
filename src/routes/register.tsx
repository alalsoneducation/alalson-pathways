import { createFileRoute } from "@tanstack/react-router";

import { PageHeader } from "@/components/PageHeader";
import { RegistrationForm } from "@/components/RegistrationForm";
import { site } from "@/data/site";

const description =
  "سجل في دبلومات ودورات معهد الألسن الدولي: املأ نموذج التسجيل وسيتم التواصل معك لاستكمال إجراءات القبول.";

export const Route = createFileRoute("/register")({
  validateSearch: (search: Record<string, unknown>): { program: string } => ({
    program: typeof search["program"] === "string" ? search["program"].slice(0, 80) : "",
  }),
  head: () => ({
    meta: [
      { title: `التسجيل | ${site.nameAr}` },
      { name: "description", content: description },
      { property: "og:title", content: `التسجيل | ${site.nameAr}` },
      { property: "og:description", content: description },
      { property: "og:url", content: "/register" },
    ],
    links: [{ rel: "canonical", href: "/register" }],
  }),
  component: RegisterPage,
});

function RegisterPage() {
  const { program } = Route.useSearch();
  return (
    <>
      <PageHeader
        title="التسجيل"
        subtitle="أدخل بياناتك واختر البرنامج المناسب، وسيتم التواصل معك لاستكمال إجراءات التسجيل."
      />
      <section className="container-page section-y">
        <div className="mx-auto max-w-3xl">
          <RegistrationForm defaultProgram={program} />
        </div>
      </section>
    </>
  );
}

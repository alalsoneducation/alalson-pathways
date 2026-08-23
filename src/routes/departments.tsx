import { createFileRoute } from "@tanstack/react-router";

import { DepartmentCard } from "@/components/DepartmentCard";
import { PageHeader } from "@/components/PageHeader";
import { departments } from "@/data/programs";
import { site } from "@/data/site";

const description =
  "الأقسام التعليمية في معهد الألسن الدولي: اللغات، الحاسوب، إدارة الأعمال، المحاسبة المالية، العلوم الطبية، الصيانة والبرمجة، الجرافيكس، البرامج الدولية، التقوية، والتنمية البشرية.";

export const Route = createFileRoute("/departments")({
  head: () => ({
    meta: [
      { title: `الأقسام التعليمية | ${site.nameAr}` },
      { name: "description", content: description },
      { property: "og:title", content: `الأقسام التعليمية | ${site.nameAr}` },
      { property: "og:description", content: description },
      { property: "og:url", content: "/departments" },
    ],
    links: [{ rel: "canonical", href: "/departments" }],
  }),
  component: DepartmentsPage,
});

function DepartmentsPage() {
  return (
    <>
      <PageHeader
        title="الأقسام التعليمية"
        subtitle="أقسام متخصصة تضم دبلومات ودورات وبرامج تدريبية في مجالات متعددة."
      />
      <section className="container-page section-y">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {departments.map((d) => (
            <DepartmentCard key={d.id} department={d} />
          ))}
        </div>
      </section>
    </>
  );
}

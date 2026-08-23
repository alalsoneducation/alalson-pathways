import { createFileRoute } from "@tanstack/react-router";

import { BranchCard } from "@/components/BranchCard";
import { PageHeader } from "@/components/PageHeader";
import { branches, site } from "@/data/site";

const description =
  "مواقع فروع معهد الألسن الدولي في صنعاء (جولة شميلة وآرتل) وعمران (جولة البشيري) مع أرقام التواصل وروابط الخرائط.";

export const Route = createFileRoute("/branches")({
  head: () => ({
    meta: [
      { title: `الفروع والمواقع | ${site.nameAr}` },
      { name: "description", content: description },
      { property: "og:title", content: `الفروع والمواقع | ${site.nameAr}` },
      { property: "og:description", content: description },
      { property: "og:url", content: "/branches" },
    ],
    links: [{ rel: "canonical", href: "/branches" }],
  }),
  component: BranchesPage,
});

function BranchesPage() {
  return (
    <>
      <PageHeader
        title="الفروع والمواقع"
        subtitle="نخدم طلابنا من خلال فروع في أمانة العاصمة صنعاء ومحافظة عمران."
      />
      <section className="container-page section-y">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {branches.map((b) => (
            <BranchCard key={b.id} branch={b} />
          ))}
        </div>
      </section>
    </>
  );
}

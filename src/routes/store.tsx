import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";

import { FilterBar, defaultFilters, type Filters } from "@/components/FilterBar";
import { PageHeader } from "@/components/PageHeader";
import { ProgramCard } from "@/components/ProgramCard";
import { SearchBar } from "@/components/SearchBar";
import {
  departmentName,
  hasDetails,
  programs,
  type DepartmentId,
  type ProgramType,
} from "@/data/programs";
import { site } from "@/data/site";

const description =
  "متجر الألسن: تصفح الدبلومات والدورات والبرامج التدريبية التي يقدمها معهد الألسن الدولي مع البحث والتصفية حسب القسم والنوع والرسوم.";

type StoreSearch = { dept?: DepartmentId | "all"; type?: ProgramType | "all"; q?: string };

export const Route = createFileRoute("/store")({
  validateSearch: (search: Record<string, unknown>): StoreSearch => ({
    dept: (search.dept as StoreSearch["dept"]) || undefined,
    type: (search.type as StoreSearch["type"]) || undefined,
    q: typeof search.q === "string" ? search.q.slice(0, 100) : undefined,
  }),
  head: () => ({
    meta: [
      { title: `متجر الألسن – الدبلومات والدورات | ${site.nameAr}` },
      { name: "description", content: description },
      { property: "og:title", content: `متجر الألسن | ${site.nameAr}` },
      { property: "og:description", content: description },
      { property: "og:url", content: "/store" },
    ],
    links: [{ rel: "canonical", href: "/store" }],
  }),
  component: StorePage,
});

function StorePage() {
  const search = Route.useSearch();
  const [query, setQuery] = useState(search.q ?? "");
  const [filters, setFilters] = useState<Filters>({
    ...defaultFilters,
    dept: search.dept ?? "all",
    type: search.type ?? "all",
  });

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    let list = programs.filter((p) => {
      if (filters.dept !== "all" && p.department !== filters.dept) return false;
      if (filters.type !== "all" && p.type !== filters.type) return false;
      if (filters.fees === "with-price" && !p.price) return false;
      if (filters.fees === "without-price" && p.price) return false;
      if (!q) return true;
      return [p.name, p.nameEn, p.type, departmentName(p.department), p.summary]
        .filter(Boolean)
        .some((v) => (v as string).toLowerCase().includes(q));
    });

    if (filters.sort === "name") {
      list = [...list].sort((a, b) => a.name.localeCompare(b.name, "ar"));
    } else if (filters.sort === "with-details") {
      list = [...list].sort((a, b) => Number(hasDetails(b)) - Number(hasDetails(a)));
    }
    return list;
  }, [query, filters]);

  return (
    <>
      <PageHeader
        eyebrow="Alalson Store"
        title="متجر الألسن"
        subtitle="اكتشف الدبلومات والدورات والبرامج التدريبية التي يقدمها معهد الألسن الدولي."
      />

      <section className="container-page section-y">
        <div className="grid gap-4">
          <SearchBar value={query} onChange={setQuery} />
          <FilterBar filters={filters} onChange={setFilters} />
        </div>

        <p className="mt-6 text-sm font-semibold text-muted-foreground">
          النتائج: {results.length} من أصل {programs.length} خدمة تعليمية
        </p>

        {results.length === 0 ? (
          <div className="mt-8 rounded-2xl border border-dashed border-border bg-surface p-10 text-center">
            <p className="text-base font-bold text-navy">لا توجد نتائج مطابقة</p>
            <p className="mt-2 text-sm text-muted-foreground">
              جرّب تعديل كلمات البحث أو إعادة ضبط عوامل التصفية.
            </p>
          </div>
        ) : (
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {results.map((p) => (
              <ProgramCard key={p.slug} program={p} />
            ))}
          </div>
        )}
      </section>
    </>
  );
}

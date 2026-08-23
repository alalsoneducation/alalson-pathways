import { RotateCcw } from "lucide-react";

import { departments, programTypes, type DepartmentId, type ProgramType } from "@/data/programs";

export type Filters = {
  dept: DepartmentId | "all";
  type: ProgramType | "all";
  fees: "all" | "with-price" | "without-price";
  sort: "default" | "name" | "with-details";
};

export const defaultFilters: Filters = {
  dept: "all",
  type: "all",
  fees: "all",
  sort: "default",
};

const selectClass =
  "w-full rounded-xl border border-border bg-surface px-3 py-3 text-sm font-semibold text-foreground outline-none transition-colors focus:border-cyan focus:ring-2 focus:ring-ring/40";

export function FilterBar({
  filters,
  onChange,
}: {
  filters: Filters;
  onChange: (f: Filters) => void;
}) {
  const set = <K extends keyof Filters>(key: K, value: Filters[K]) =>
    onChange({ ...filters, [key]: value });

  return (
    <div className="grid gap-3 rounded-2xl border border-border bg-surface p-4 shadow-card sm:grid-cols-2 lg:grid-cols-5">
      <div>
        <label htmlFor="f-dept" className="mb-1.5 block text-xs font-bold text-muted-foreground">
          القسم
        </label>
        <select
          id="f-dept"
          className={selectClass}
          value={filters.dept}
          onChange={(e) => set("dept", e.target.value as Filters["dept"])}
        >
          <option value="all">كل الأقسام</option>
          {departments.map((d) => (
            <option key={d.id} value={d.id}>
              {d.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="f-type" className="mb-1.5 block text-xs font-bold text-muted-foreground">
          نوع البرنامج
        </label>
        <select
          id="f-type"
          className={selectClass}
          value={filters.type}
          onChange={(e) => set("type", e.target.value as Filters["type"])}
        >
          <option value="all">الكل</option>
          {programTypes.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="f-fees" className="mb-1.5 block text-xs font-bold text-muted-foreground">
          الرسوم
        </label>
        <select
          id="f-fees"
          className={selectClass}
          value={filters.fees}
          onChange={(e) => set("fees", e.target.value as Filters["fees"])}
        >
          <option value="all">الكل</option>
          <option value="with-price">الرسوم معلنة</option>
          <option value="without-price">الرسوم عند الاستفسار</option>
        </select>
      </div>

      <div>
        <label htmlFor="f-sort" className="mb-1.5 block text-xs font-bold text-muted-foreground">
          الترتيب
        </label>
        <select
          id="f-sort"
          className={selectClass}
          value={filters.sort}
          onChange={(e) => set("sort", e.target.value as Filters["sort"])}
        >
          <option value="default">الافتراضي</option>
          <option value="name">حسب الاسم</option>
          <option value="with-details">التفاصيل المتاحة أولاً</option>
        </select>
      </div>

      <div className="flex items-end">
        <button
          type="button"
          onClick={() => onChange(defaultFilters)}
          className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-border px-3 py-3 text-sm font-bold text-navy transition-colors hover:bg-muted"
        >
          <RotateCcw className="size-4" aria-hidden />
          إعادة التصفية
        </button>
      </div>
    </div>
  );
}

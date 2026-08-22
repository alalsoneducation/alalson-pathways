import { Search, X } from "lucide-react";

export function SearchBar({
  value,
  onChange,
  placeholder = "ابحث عن دبلوم أو دورة أو برنامج...",
}: {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
}) {
  return (
    <div className="relative">
      <label htmlFor="program-search" className="sr-only">
        البحث في البرامج
      </label>
      <Search
        className="pointer-events-none absolute top-1/2 start-4 size-5 -translate-y-1/2 text-muted-foreground"
        aria-hidden
      />
      <input
        id="program-search"
        type="search"
        value={value}
        maxLength={100}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-2xl border border-border bg-surface py-3.5 ps-12 pe-11 text-sm font-medium shadow-card outline-none transition-colors placeholder:text-muted-foreground focus:border-cyan focus:ring-2 focus:ring-ring/40"
      />
      {value ? (
        <button
          type="button"
          onClick={() => onChange("")}
          aria-label="مسح البحث"
          className="absolute top-1/2 end-3 flex size-8 -translate-y-1/2 items-center justify-center rounded-lg text-muted-foreground hover:bg-muted"
        >
          <X className="size-4" />
        </button>
      ) : null}
    </div>
  );
}

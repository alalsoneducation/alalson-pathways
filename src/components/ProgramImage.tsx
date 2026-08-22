import { useState } from "react";
import { GraduationCap } from "lucide-react";

import type { Program } from "@/data/programs";
import { departmentName } from "@/data/programs";
import { cn } from "@/lib/utils";

/**
 * نظام عرض صور البرامج.
 * - إن وُجد الحقل image يعرض الصورة (lazy + نسبة أبعاد ثابتة).
 * - إن لم توجد الصورة أو فشل تحميلها يظهر بديل احترافي بهوية المعهد.
 */
export function ProgramImage({
  program,
  className,
  rounded = "rounded-2xl",
}: {
  program: Program;
  className?: string;
  rounded?: string;
}) {
  const [failed, setFailed] = useState(false);
  const showImage = Boolean(program.image) && !failed;

  return (
    <div
      className={cn(
        "relative aspect-16/10 w-full overflow-hidden bg-soft-gradient",
        rounded,
        className,
      )}
    >
      {showImage ? (
        <img
          src={program.image}
          alt={program.name}
          loading="lazy"
          decoding="async"
          onError={() => setFailed(true)}
          className={cn(
            "h-full w-full transition-transform duration-500 hover:scale-105",
            program.imageFit === "contain" ? "object-contain p-4" : "object-cover",
          )}
        />
      ) : (
        <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-brand-gradient px-4 text-center">
          <GraduationCap className="size-8 text-primary-foreground/90" aria-hidden />
          <span className="line-clamp-2 text-sm font-bold text-primary-foreground">
            {program.name}
          </span>
          <span className="text-[11px] text-primary-foreground/75">
            {departmentName(program.department)}
          </span>
        </div>
      )}
      <span className="absolute top-3 start-3 rounded-full bg-surface/90 px-3 py-1 text-[11px] font-bold text-primary shadow-card">
        {program.type}
      </span>
    </div>
  );
}

import { Link } from "@tanstack/react-router";
import { Award, Clock, Tag } from "lucide-react";

import { ProgramImage } from "@/components/ProgramImage";
import { WhatsAppLink } from "@/components/WhatsAppButton";
import { departmentName, hasDetails, type Program } from "@/data/programs";

export function ProgramCard({ program }: { program: Program }) {
  const detailed = hasDetails(program);

  return (
    <article className="card-elevated flex h-full flex-col overflow-hidden">
      <Link
        to="/programs/$slug"
        params={{ slug: program.slug }}
        aria-label={`عرض تفاصيل ${program.name}`}
      >
        <ProgramImage program={program} rounded="rounded-none" />
      </Link>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="min-w-0">
          <p className="text-xs font-bold text-cyan">{departmentName(program.department)}</p>
          <h3 className="mt-1 text-base font-extrabold text-navy sm:text-lg">{program.name}</h3>
          {program.nameEn ? (
            <p className="text-xs text-muted-foreground" dir="ltr">
              {program.nameEn}
            </p>
          ) : null}
        </div>

        <p className="line-clamp-3 text-sm leading-relaxed text-muted-foreground">
          {program.summary ?? "سيتم إضافة التفاصيل قريباً."}
        </p>

        <ul className="grid gap-1.5 text-xs text-foreground/80">
          {program.duration ? (
            <li className="flex items-start gap-2">
              <Clock className="mt-0.5 size-3.5 shrink-0 text-cyan" aria-hidden />
              <span className="line-clamp-2">{program.duration}</span>
            </li>
          ) : null}
          {program.price ? (
            <li className="flex items-start gap-2">
              <Tag className="mt-0.5 size-3.5 shrink-0 text-cyan" aria-hidden />
              <span className="line-clamp-2">{program.price}</span>
            </li>
          ) : null}
          {program.accreditations?.length ? (
            <li className="flex items-start gap-2">
              <Award className="mt-0.5 size-3.5 shrink-0 text-cyan" aria-hidden />
              <span className="line-clamp-2">{program.accreditations.join(" • ")}</span>
            </li>
          ) : null}
          {!detailed ? (
            <li className="rounded-lg bg-muted px-3 py-2 text-muted-foreground">
              سيتم إضافة التفاصيل قريباً
            </li>
          ) : null}
        </ul>

        <div className="mt-auto grid gap-2 pt-2 sm:grid-cols-2">
          <Link
            to="/programs/$slug"
            params={{ slug: program.slug }}
            className="inline-flex items-center justify-center rounded-xl border border-border px-3 py-2.5 text-sm font-bold text-navy transition-colors hover:bg-muted"
          >
            عرض التفاصيل
          </Link>
          <Link
            to="/register"
            search={{ program: program.slug }}
            className="inline-flex items-center justify-center rounded-xl bg-brand-gradient px-3 py-2.5 text-sm font-bold text-primary-foreground"
          >
            سجل الآن
          </Link>
          <WhatsAppLink
            className="sm:col-span-2"
            message={`السلام عليكم، أرغب في الاستفسار عن ${program.name}.`}
            variant="outline"
          >
            استفسار عبر WhatsApp
          </WhatsAppLink>
        </div>
      </div>
    </article>
  );
}

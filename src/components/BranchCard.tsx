import { MapPin, Navigation } from "lucide-react";

import { WhatsAppLink } from "@/components/WhatsAppButton";
import { branchLabel, type Branch } from "@/data/site";

export function BranchCard({ branch }: { branch: Branch }) {
  const query = encodeURIComponent(`${branch.city} ${branch.area} ${branch.landmark}`);

  return (
    <article className="card-elevated flex h-full flex-col gap-4 p-6">
      <span className="flex size-12 items-center justify-center rounded-2xl bg-accent text-accent-foreground">
        <MapPin className="size-6" />
      </span>
      <div>
        <h3 className="text-lg font-extrabold text-navy">{branch.city}</h3>
        <p className="mt-1 text-sm font-semibold text-foreground/80">{branch.area}</p>
        <p className="text-sm text-muted-foreground">{branch.landmark}</p>
      </div>
      <div className="mt-auto grid gap-2 sm:grid-cols-2">
        <a
          href={`https://www.google.com/maps/search/?api=1&query=${query}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-xl border border-border px-3 py-2.5 text-sm font-bold text-navy transition-colors hover:bg-muted"
        >
          <Navigation className="size-4" aria-hidden />
          عرض على الخريطة
        </a>
        <WhatsAppLink
          variant="outline"
          message={`السلام عليكم، أرغب في الاستفسار عن فرع ${branchLabel(branch)}.`}
        >
          استفسار
        </WhatsAppLink>
      </div>
    </article>
  );
}

import { Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  BookOpen,
  Briefcase,
  Calculator,
  Globe,
  Languages,
  Mic,
  Monitor,
  Palette,
  Smartphone,
  Sparkles,
  Stethoscope,
} from "lucide-react";

import { programsByDepartment, type Department } from "@/data/programs";

const icons: Record<string, React.ComponentType<{ className?: string }>> = {
  languages: Languages,
  monitor: Monitor,
  briefcase: Briefcase,
  calculator: Calculator,
  stethoscope: Stethoscope,
  smartphone: Smartphone,
  palette: Palette,
  globe: Globe,
  "book-open": BookOpen,
  sparkles: Sparkles,
  mic: Mic,
};

export function DepartmentCard({ department }: { department: Department }) {
  const Icon = icons[department.icon] ?? BookOpen;
  const count = programsByDepartment(department.id).length;

  return (
    <article className="card-elevated flex h-full flex-col gap-4 p-6">
      <span className="flex size-12 items-center justify-center rounded-2xl bg-accent text-accent-foreground">
        <Icon className="size-6" />
      </span>
      <div className="min-w-0">
        <h3 className="text-lg font-extrabold text-navy">{department.name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {department.description}
        </p>
      </div>
      <p className="text-xs font-bold text-cyan">{count} برنامج متاح</p>
      <Link
        to="/store"
        search={{ dept: department.id }}
        className="mt-auto inline-flex items-center gap-2 text-sm font-bold text-primary hover:underline"
      >
        استكشف البرامج
        <ArrowLeft className="size-4" aria-hidden />
      </Link>
    </article>
  );
}

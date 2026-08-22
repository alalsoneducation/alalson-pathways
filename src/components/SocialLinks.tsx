import {
  Facebook,
  Ghost,
  Globe,
  Image as ImageIcon,
  Instagram,
  Linkedin,
  MessageCircle,
  Music2,
  Rss,
  Send,
  Twitter,
  Type,
  Users,
  Video,
  Youtube,
} from "lucide-react";

import { socialLinks } from "@/data/site";
import { cn } from "@/lib/utils";

const icons: Record<string, React.ComponentType<{ className?: string }>> = {
  globe: Globe,
  facebook: Facebook,
  users: Users,
  twitter: Twitter,
  youtube: Youtube,
  whatsapp: MessageCircle,
  send: Send,
  instagram: Instagram,
  video: Video,
  music: Music2,
  image: ImageIcon,
  type: Type,
  linkedin: Linkedin,
  ghost: Ghost,
  rss: Rss,
};

export function SocialLinks({
  variant = "grid",
  className,
}: {
  variant?: "grid" | "compact";
  className?: string;
}) {
  if (variant === "compact") {
    return (
      <ul className={cn("flex flex-wrap gap-2", className)}>
        {socialLinks.map((s) => {
          const Icon = icons[s.icon] ?? Globe;
          return (
            <li key={s.name + s.url}>
              <a
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.name}
                title={s.name}
                className="flex size-10 items-center justify-center rounded-xl border border-primary-foreground/20 bg-primary-foreground/10 text-primary-foreground transition-colors hover:bg-primary-foreground/20"
              >
                <Icon className="size-4" />
              </a>
            </li>
          );
        })}
      </ul>
    );
  }

  return (
    <ul className={cn("grid gap-3 sm:grid-cols-2 lg:grid-cols-3", className)}>
      {socialLinks.map((s) => {
        const Icon = icons[s.icon] ?? Globe;
        return (
          <li key={s.name + s.url}>
            <a
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="card-elevated flex items-center gap-3 p-4"
            >
              <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                <Icon className="size-5" />
              </span>
              <span className="min-w-0">
                <span className="block truncate text-sm font-bold text-navy">{s.name}</span>
                <span className="block truncate text-xs text-muted-foreground" dir="ltr">
                  {s.url.replace("https://", "")}
                </span>
              </span>
            </a>
          </li>
        );
      })}
    </ul>
  );
}

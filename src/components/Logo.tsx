import logo from "@/assets/logo.png.asset.json";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  size?: number;
  priority?: boolean;
};

export function Logo({ className, size = 48, priority = false }: Props) {
  return (
    <img
      src={logo.url}
      alt={`شعار ${site.nameAr}`}
      width={size}
      height={size}
      loading={priority ? "eager" : "lazy"}
      className={cn("shrink-0 object-contain", className)}
      style={{ width: size, height: size }}
    />
  );
}

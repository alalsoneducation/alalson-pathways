import { MessageCircle } from "lucide-react";

import { whatsappLink } from "@/data/site";
import { cn } from "@/lib/utils";

export function WhatsAppLink({
  message,
  children,
  className,
  variant = "solid",
}: {
  message?: string;
  children?: React.ReactNode;
  className?: string;
  variant?: "solid" | "outline" | "ghost";
}) {
  return (
    <a
      href={whatsappLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="تواصل معنا عبر واتساب"
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-bold transition-colors",
        variant === "solid" && "bg-whatsapp text-primary-foreground hover:opacity-90",
        variant === "outline" &&
          "border border-whatsapp/40 text-whatsapp hover:bg-whatsapp/10",
        variant === "ghost" && "text-whatsapp hover:bg-whatsapp/10",
        className,
      )}
    >
      <MessageCircle className="size-4" aria-hidden />
      {children ?? "واتساب"}
    </a>
  );
}

/** زر واتساب عائم ثابت في كل الصفحات */
export function FloatingWhatsApp() {
  return (
    <a
      href={whatsappLink("مرحباً، أرغب بالاستفسار عن برامج معهد الألسن الدولي.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="تواصل معنا عبر WhatsApp"
      className="fixed bottom-5 start-5 z-40 flex size-14 items-center justify-center rounded-full bg-whatsapp text-primary-foreground shadow-lift transition-transform hover:scale-105"
    >
      <MessageCircle className="size-7" aria-hidden />
    </a>
  );
}

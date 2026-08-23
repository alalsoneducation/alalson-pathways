import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="العودة إلى الأعلى"
      className="fixed bottom-5 end-5 z-40 flex size-11 items-center justify-center rounded-full border border-border bg-surface text-primary shadow-card transition-transform hover:scale-105"
    >
      <ArrowUp className="size-5" aria-hidden />
    </button>
  );
}

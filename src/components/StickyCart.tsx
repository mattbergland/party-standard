"use client";

import { useEffect, useState } from "react";

export default function StickyCart() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY < 600) {
        setVisible(false);
        return;
      }

      const purchaseSection = document.getElementById("purchase");
      if (!purchaseSection) {
        setVisible(true);
        return;
      }

      const rect = purchaseSection.getBoundingClientRect();
      const inView = rect.top < window.innerHeight && rect.bottom > 0;
      setVisible(!inView);
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-warm-white/95 backdrop-blur-sm border-t border-steel-light/40 px-4 py-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-sm font-semibold text-charcoal">
            Steel Party Cups
          </p>
          <p className="text-xs text-charcoal-light">12-Pack — $79</p>
        </div>
        <a
          href="#purchase"
          className="px-6 py-3 bg-charcoal text-warm-white text-sm font-semibold tracking-wide uppercase rounded-sm hover:bg-charcoal-light transition-colors whitespace-nowrap"
        >
          Add to Cart
        </a>
      </div>
    </div>
  );
}

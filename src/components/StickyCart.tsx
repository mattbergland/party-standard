"use client";

import { useEffect, useState } from "react";

export default function StickyCart() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const purchaseSection = document.getElementById("purchase");
      if (!purchaseSection) return;

      const rect = purchaseSection.getBoundingClientRect();
      const pastPurchase = rect.bottom < 0;
      const beforePurchase = rect.top > window.innerHeight;

      setVisible(pastPurchase || beforePurchase);
    }

    // Only show on initial scroll past hero
    function handleInitialScroll() {
      setVisible(window.scrollY > 600);
      const purchaseSection = document.getElementById("purchase");
      if (purchaseSection) {
        const rect = purchaseSection.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          setVisible(false);
        }
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("scroll", handleInitialScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", handleInitialScroll);
    };
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-warm-white/95 backdrop-blur-sm border-t border-steel-light/40 px-4 py-3 safe-area-inset-bottom">
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

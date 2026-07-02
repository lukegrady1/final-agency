"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { gsap, prefersReducedMotion } from "@/lib/gsap";

// Intercepts same-page anchor clicks (e.g. "See the three plans" → #plans) and
// glides to the target instead of jumping. Global; mounted once in the layout.
export default function SmoothScroll() {
  const pathname = usePathname();

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (
        e.defaultPrevented ||
        e.button !== 0 ||
        e.metaKey ||
        e.ctrlKey ||
        e.shiftKey ||
        e.altKey
      )
        return;

      const anchor = (e.target as HTMLElement)?.closest?.("a");
      if (!anchor) return;
      const raw = anchor.getAttribute("href");
      if (!raw) return;

      let hash = "";
      if (raw.startsWith("#")) hash = raw;
      else {
        try {
          const u = new URL(anchor.href);
          if (u.pathname === window.location.pathname && u.hash) hash = u.hash;
        } catch {
          return;
        }
      }
      if (!hash || hash === "#") return;

      const target = document.querySelector(hash);
      if (!target) return;

      // Take over from the browser / Next's default jump.
      e.preventDefault();
      e.stopPropagation();

      gsap.to(window, {
        duration: prefersReducedMotion() ? 0 : 0.9,
        ease: "power2.inOut",
        scrollTo: { y: target as HTMLElement, offsetY: 84 },
      });
      window.history.pushState(null, "", hash);
    };

    // Capture phase so we run before framework click handlers.
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, [pathname]);

  return null;
}

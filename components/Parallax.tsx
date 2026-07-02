"use client";

import { useEffect, useRef } from "react";
import type { ReactNode } from "react";
import { gsap, prefersReducedMotion } from "@/lib/gsap";

interface ParallaxProps {
  children: ReactNode;
  className?: string;
  /** How far (in % of its own height) the element drifts across its scroll. */
  amount?: number;
}

// GSAP ScrollTrigger parallax. Meant to wrap media inside an `overflow-hidden`
// frame; give it a className that oversizes it (e.g. `absolute inset-[-12%]`)
// so the drift never exposes an edge.
export default function Parallax({
  children,
  className = "",
  amount = 6,
}: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { yPercent: -amount },
        {
          yPercent: amount,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        },
      );
    }, el);

    return () => ctx.revert();
  }, [amount]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

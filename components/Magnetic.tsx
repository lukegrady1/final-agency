"use client";

import { useEffect, useRef } from "react";
import type { ReactNode } from "react";
import { gsap, prefersReducedMotion, hasFinePointer } from "@/lib/gsap";

interface MagneticProps {
  children: ReactNode;
  /** How strongly it follows the cursor (0–1). */
  strength?: number;
  className?: string;
}

// Wraps an interactive element so it gently pulls toward the cursor on hover —
// a premium micro-interaction for primary CTAs. Desktop pointer only; disabled
// under reduced motion.
export default function Magnetic({
  children,
  strength = 0.35,
  className = "",
}: MagneticProps) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion() || !hasFinePointer()) return;

    const xTo = gsap.quickTo(el, "x", { duration: 0.5, ease: "power3.out" });
    const yTo = gsap.quickTo(el, "y", { duration: 0.5, ease: "power3.out" });

    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      xTo((e.clientX - (r.left + r.width / 2)) * strength);
      yTo((e.clientY - (r.top + r.height / 2)) * strength);
    };
    const onLeave = () => {
      xTo(0);
      yTo(0);
    };

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [strength]);

  return (
    <span ref={ref} className={`inline-block will-change-transform ${className}`}>
      {children}
    </span>
  );
}

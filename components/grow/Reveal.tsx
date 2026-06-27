"use client";

import { useEffect, useRef, useState } from "react";
import type { ElementType, CSSProperties, ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Reveal style: "up" (default, fade+rise) or "scale" (fade+scale-in). */
  variant?: "up" | "scale";
  /** Stagger delay in ms. */
  delay?: number;
  /** Render as a different element (e.g. "section", "li", "span"). */
  as?: ElementType;
  style?: CSSProperties;
  id?: string;
}

/**
 * Robust scroll-reveal. Uses IntersectionObserver to add `.in-view`, which
 * triggers the CSS reveal animation. Deliberately CSS-driven so reveals are
 * reliable across SSR/hydration (framer-motion mount animations proved flaky
 * here). Falls back to visible if IO is unavailable.
 */
export default function Reveal({
  children,
  className = "",
  variant = "up",
  delay = 0,
  as,
  style,
  id,
}: RevealProps) {
  const Tag = (as ?? "div") as ElementType;
  const ref = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      id={id}
      data-reveal={variant === "scale" ? "scale" : ""}
      className={`${inView ? "in-view" : ""} ${className}`}
      style={{ ["--reveal-delay" as string]: `${delay}ms`, ...style }}
    >
      {children}
    </Tag>
  );
}

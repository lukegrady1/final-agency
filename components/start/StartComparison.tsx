"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import BlurIn from "../BlurIn";

export default function StartComparison() {
  const [position, setPosition] = useState(45);
  const containerRef = useRef<HTMLDivElement>(null);

  const updateFromClientX = (clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.max(0, Math.min(100, pct)));
  };

  return (
    <BlurIn>
      <div
        ref={containerRef}
        className="relative aspect-[16/10] w-full max-w-5xl mx-auto rounded-2xl overflow-hidden bg-card border border-card-border select-none cursor-ew-resize"
        onMouseMove={(e) => updateFromClientX(e.clientX)}
        onTouchMove={(e) => updateFromClientX(e.touches[0].clientX)}
      >
        {/* BEFORE — left side */}
        <div className="absolute inset-0 bg-[#1a1730]">
          <Image
            src="/site_before.PNG"
            alt="Client website before Grady Digital redesign"
            fill
            className="object-contain object-center"
          />
        </div>

        {/* AFTER — right side, clipped */}
        <div
          className="absolute inset-0"
          style={{ clipPath: `inset(0 0 0 ${position}%)` }}
        >
          <div className="absolute inset-0 bg-[#1a1730]">
            <Image
              src="/site_after.PNG"
              alt="Client website after Grady Digital redesign"
              fill
              className="object-contain object-center"
            />
          </div>
        </div>

        {/* Divider handle */}
        <div
          className="absolute top-0 bottom-0 w-px bg-white/80 pointer-events-none"
          style={{ left: `${position}%` }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white text-background flex items-center justify-center shadow-lg">
            <span className="text-xs font-bold">⇄</span>
          </div>
        </div>

        {/* Labels */}
        <div className="absolute top-4 left-4 rounded-full bg-black/60 backdrop-blur-sm border border-white/20 px-3 py-1.5 text-xs uppercase tracking-wider text-white font-medium">
          Before
        </div>
        <div className="absolute top-4 right-4 rounded-full bg-accent/80 backdrop-blur-sm border border-accent-light/30 px-3 py-1.5 text-xs uppercase tracking-wider text-white font-medium">
          After
        </div>
      </div>
      <p className="text-center text-white/40 text-xs mt-4">
        Hover over the image to compare before and after.
      </p>
    </BlurIn>
  );
}

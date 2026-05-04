"use client";

import { useRef, useState } from "react";
import BlurIn from "../BlurIn";

export default function StartComparison() {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

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
        onMouseDown={(e) => {
          dragging.current = true;
          updateFromClientX(e.clientX);
        }}
        onMouseMove={(e) => {
          if (dragging.current) updateFromClientX(e.clientX);
        }}
        onMouseUp={() => (dragging.current = false)}
        onMouseLeave={() => (dragging.current = false)}
        onTouchStart={(e) => {
          dragging.current = true;
          updateFromClientX(e.touches[0].clientX);
        }}
        onTouchMove={(e) => {
          if (dragging.current) updateFromClientX(e.touches[0].clientX);
        }}
        onTouchEnd={() => (dragging.current = false)}
      >
        {/* BEFORE — left side */}
        {/* TODO: replace this placeholder with <Image fill src="/start/before.png" alt="Old site" /> */}
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{
            background:
              "repeating-linear-gradient(45deg, #1a1730 0 12px, #14111f 12px 24px)",
          }}
        >
          <div className="text-center px-6">
            <span className="inline-block rounded-full border border-white/20 px-3 py-1 text-xs text-white/70 mb-3">
              Their old site
            </span>
            <p className="text-white/60 text-sm max-w-xs">
              Drop a screenshot at <code className="text-accent-light">/public/start/before.png</code>
            </p>
          </div>
        </div>

        {/* AFTER — right side, clipped */}
        <div
          className="absolute inset-0"
          style={{ clipPath: `inset(0 0 0 ${position}%)` }}
        >
          {/* TODO: replace this placeholder with <Image fill src="/start/after.png" alt="New site by Grady Digital" /> */}
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(108,106,246,0.25), #070612 70%)",
            }}
          >
            <div className="text-center px-6">
              <span className="inline-block rounded-full bg-accent/20 border border-accent/40 px-3 py-1 text-xs text-accent-light mb-3">
                Built by Grady Digital
              </span>
              <p className="text-white/70 text-sm max-w-xs">
                Drop a screenshot at <code className="text-accent-light">/public/start/after.png</code>
              </p>
            </div>
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
        <div className="absolute top-4 left-4 text-xs uppercase tracking-wider text-white/60">
          Before
        </div>
        <div className="absolute top-4 right-4 text-xs uppercase tracking-wider text-white/80">
          After
        </div>
      </div>
      <p className="text-center text-white/40 text-xs mt-4">
        Drag the slider to compare. Replace placeholder images in{" "}
        <code className="text-accent-light">components/start/StartComparison.tsx</code>.
      </p>
    </BlurIn>
  );
}

import { Smile, MessageSquare, Star, ShieldCheck, MapPin, Phone, RotateCw } from "lucide-react";
import type { CSSProperties } from "react";
import Reveal from "./Reveal";
import AuroraBackdrop from "./AuroraBackdrop";

const steps = [
  { icon: Smile, label: "Happy customer", sub: "A job well done", color: "from-accent to-violet", text: "text-accent" },
  { icon: MessageSquare, label: "Smart review ask", sub: "At the right moment", color: "from-violet to-cyan", text: "text-[#8b3fd6]" },
  { icon: Star, label: "New 5-star review", sub: "In your own voice", color: "from-cyan to-amber", text: "text-[#0e8090]" },
  { icon: ShieldCheck, label: "Stronger profile", sub: "Active and trusted", color: "from-amber to-violet", text: "text-[#b45309]" },
  { icon: MapPin, label: "Higher in Maps", sub: "Top of the pack", color: "from-violet to-accent", text: "text-[#8b3fd6]" },
  { icon: Phone, label: "More phone calls", sub: "Back to the top", color: "from-accent to-cyan", text: "text-accent" },
];

// Place the six steps evenly around a circle, starting at the top and moving
// clockwise, so the numbered sequence reads as a turning wheel.
const RADIUS = 33; // % from center to each node (ring passes through icon centers)
const nodes = steps.map((s, i) => {
  const angle = ((-90 + i * 60) * Math.PI) / 180;
  return {
    ...s,
    n: i + 1,
    x: 50 + RADIUS * Math.cos(angle),
    y: 50 + RADIUS * Math.sin(angle),
  };
});
const RING = `${RADIUS * 2}%`;

export default function GrowFlywheel() {
  return (
    <section className="relative overflow-hidden grain-overlay py-14 lg:py-32 border-t border-black/10">
      <AuroraBackdrop tone="violet" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 xl:gap-16 lg:items-center">
          {/* Copy — left on desktop, centered on mobile */}
          <div className="text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-[#8b3fd6]">
              <span className="w-6 h-px bg-violet" />
              The system
              <span className="w-6 h-px bg-violet" />
            </span>
            <h2 className="mt-3 lg:mt-4 text-3xl sm:text-5xl font-medium tracking-tight leading-[1.05] text-[#0c0b1e]">
              One simple system.{" "}
              <span className="grow-gradient-text font-display italic">
                Compounding every month.
              </span>
            </h2>
            <p className="mt-4 lg:mt-5 text-[#0c0b1e]/60 text-base sm:text-lg leading-relaxed">
              Each piece feeds the next. More reviews build a stronger profile, a
              stronger profile ranks higher, higher rankings bring more
              customers — and the wheel keeps turning.
            </p>
            {/* Closing line lives with the copy on desktop */}
            <p className="hidden lg:block mt-8 text-[#0c0b1e]/50 text-sm">
              You keep running the business.{" "}
              <span className="text-[#0c0b1e]/80 font-medium">
                I keep the wheel turning.
              </span>
            </p>
          </div>

          {/* Flywheel — the six steps arranged around a turning wheel */}
          <div className="relative mt-2 md:mt-16 lg:mt-0 mx-auto w-full max-w-[400px] sm:max-w-[460px] lg:max-w-[520px] aspect-square">
          {/* Static rail */}
          <div
            aria-hidden
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-black/[0.07]"
            style={{ width: RING, height: RING }}
          />
          {/* Rotating dashed rail — reads as motion. Centering lives on the
              wrapper so the spin transform can't override it. */}
          <div
            aria-hidden
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{ width: RING, height: RING }}
          >
            <div className="w-full h-full rounded-full border-2 border-dashed border-violet/25 motion-safe:animate-[spin_44s_linear_infinite]" />
          </div>

          {/* Center hub */}
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 grid place-items-center rounded-full bg-white/85 backdrop-blur-sm border border-black/[0.06] shadow-lg shadow-[#0c0b1e]/5"
            style={{ width: "36%", height: "36%" }}
          >
            <div className="text-center px-2">
              <RotateCw className="mx-auto w-5 h-5 sm:w-6 sm:h-6 text-[#8b3fd6]" />
              <div className="mt-1.5 font-medium text-[#0c0b1e] text-xs sm:text-sm">
                Every month
              </div>
              <div className="text-[10px] sm:text-xs text-[#0c0b1e]/50">
                it compounds
              </div>
            </div>
          </div>

          {/* Step nodes around the ring */}
          {nodes.map((s) => (
            <div
              key={s.label}
              className="absolute -translate-x-1/2 -translate-y-6 sm:-translate-y-7 lg:-translate-y-8 w-[78px] sm:w-24 lg:w-28"
              style={{ left: `${s.x}%`, top: `${s.y}%` }}
            >
              <Reveal
                variant="scale"
                delay={(s.n - 1) * 90}
                className="flex flex-col items-center text-center"
              >
                <span
                  className={`relative z-10 grid place-items-center w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-2xl bg-gradient-to-br ${s.color} shadow-lg shadow-black/25`}
                >
                  <s.icon className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-white" />
                  <span className="absolute -top-2 -right-2 grid place-items-center w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white border border-black/10 text-[10px] sm:text-[11px] font-semibold text-[#0c0b1e]/60 shadow-sm">
                    {s.n}
                  </span>
                </span>
                <div className="mt-2 font-medium text-[#0c0b1e] text-[11px] sm:text-xs lg:text-sm leading-tight">
                  {s.label}
                </div>
                <div className={`hidden sm:block mt-0.5 text-[11px] lg:text-xs ${s.text}`}>
                  {s.sub}
                </div>
              </Reveal>
            </div>
          ))}
          </div>
        </div>

        {/* Closing line — below the wheel on mobile/tablet only */}
        <p className="lg:hidden mt-8 md:mt-14 text-center text-[#0c0b1e]/50 text-sm">
          You keep running the business.{" "}
          <span className="text-[#0c0b1e]/80 font-medium">
            I keep the wheel turning.
          </span>
        </p>
      </div>
    </section>
  );
}

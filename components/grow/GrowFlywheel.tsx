import { Smile, MessageSquare, Star, ShieldCheck, MapPin, Phone } from "lucide-react";
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

export default function GrowFlywheel() {
  return (
    <section className="relative overflow-hidden grain-overlay py-24 lg:py-32">
      <AuroraBackdrop tone="violet" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-[#8b3fd6]">
            <span className="w-6 h-px bg-violet" />
            The system
            <span className="w-6 h-px bg-violet" />
          </span>
          <h2 className="mt-4 text-4xl sm:text-5xl font-medium tracking-tight leading-[1.05] text-[#0c0b1e]">
            One simple system.{" "}
            <span className="grow-gradient-text font-display italic">
              Compounding every month.
            </span>
          </h2>
          <p className="mt-5 text-[#0c0b1e]/60 text-lg leading-relaxed">
            Each piece feeds the next. More reviews build a stronger profile, a
            stronger profile ranks higher, higher rankings bring more
            customers — and the wheel keeps turning.
          </p>
        </div>

        {/* Flywheel track */}
        <div className="relative mt-16">
          {/* Connecting gradient line (desktop) */}
          <div
            aria-hidden
            className="hidden lg:block absolute left-0 right-0 top-8 h-px"
            style={{
              background:
                "linear-gradient(90deg, #6c6af6, #a855f7, #34d3e0, #f5a524, #a855f7, #6c6af6)",
            }}
          />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-10 gap-x-4">
            {steps.map((s, i) => (
              <Reveal
                key={s.label}
                delay={i * 90}
                className="relative flex flex-col items-center text-center"
              >
                <span
                  className={`relative z-10 grid place-items-center w-16 h-16 rounded-2xl bg-gradient-to-br ${s.color} shadow-lg shadow-black/30`}
                >
                  <s.icon className="w-7 h-7 text-white" />
                  <span className="absolute -top-2 -right-2 grid place-items-center w-6 h-6 rounded-full bg-white border border-black/10 text-[11px] font-semibold text-[#0c0b1e]/60 shadow-sm">
                    {i + 1}
                  </span>
                </span>
                <div className="mt-4 text-[#0c0b1e] font-medium text-sm">
                  {s.label}
                </div>
                <div className={`mt-1 text-xs ${s.text}`}>{s.sub}</div>
              </Reveal>
            ))}
          </div>
        </div>

        <p className="mt-14 text-center text-[#0c0b1e]/50 text-sm">
          You keep running the business.{" "}
          <span className="text-[#0c0b1e]/80 font-medium">
            I keep the wheel turning.
          </span>
        </p>
      </div>
    </section>
  );
}

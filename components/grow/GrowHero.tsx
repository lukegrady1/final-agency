import Link from "next/link";
import { ArrowRight } from "lucide-react";
import GrowProfileMockup from "./GrowProfileMockup";
import AuroraBackdrop from "./AuroraBackdrop";

export default function GrowHero() {
  return (
    <section className="relative overflow-hidden grain-overlay pt-36 pb-20 lg:pt-44 lg:pb-28">
      <AuroraBackdrop tone="indigo-cyan" />
      {/* Subtle grid lines, masked toward center */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-[0.5]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(12,11,30,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(12,11,30,0.04) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(70% 60% at 50% 30%, black, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(70% 60% at 50% 30%, black, transparent 80%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-10 items-center">
          {/* Left: copy */}
          <div>
            <span
              data-reveal-load
              className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 backdrop-blur-sm px-3 py-1.5 text-xs font-medium text-[#0c0b1e]/70 shadow-sm"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-cyan grow-pulse" />
              Your local growth engine
            </span>

            <h1
              data-reveal-load
              style={{ ["--reveal-delay" as string]: "100ms" }}
              className="mt-6 text-[2.6rem] leading-[1.05] sm:text-6xl lg:text-[4.1rem] font-medium text-[#0c0b1e] tracking-tight"
            >
              Make Google
              <br />
              your best
              <br />
              <span
                className="grow-gradient-text font-display italic"
                style={{ paddingRight: "0.1em" }}
              >
                salesperson.
              </span>
            </h1>

            <p
              data-reveal-load
              style={{ ["--reveal-delay" as string]: "250ms" }}
              className="mt-6 text-[#0c0b1e]/60 text-lg leading-relaxed max-w-md"
            >
              I help local service businesses earn more 5-star reviews, climb the
              Google map pack, and turn nearby searches into real phone calls
              from people ready to hire — without adding another job to your
              week.
            </p>

            <div
              data-reveal-load
              style={{ ["--reveal-delay" as string]: "400ms" }}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <Link
                href="#how"
                className="group inline-flex items-center gap-2 rounded-full px-6 py-3.5 font-medium text-sm text-white bg-gradient-to-r from-cyan via-accent to-violet hover:opacity-90 transition-opacity shadow-lg shadow-accent/25"
              >
                See how it works
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link
                href="#plans"
                className="inline-flex items-center rounded-full px-6 py-3.5 font-medium text-sm text-[#0c0b1e] border border-black/10 bg-white hover:bg-black/[0.03] hover:border-black/20 transition-colors shadow-sm"
              >
                View the plans
              </Link>
            </div>

            <div
              data-reveal-load
              style={{ ["--reveal-delay" as string]: "550ms" }}
              className="mt-8 flex items-center gap-3"
            >
              <div className="flex -space-x-2">
                {[
                  "from-cyan to-accent",
                  "from-violet to-accent",
                  "from-amber to-violet",
                  "from-accent to-cyan",
                ].map((g, i) => (
                  <span
                    key={i}
                    className={`w-7 h-7 rounded-full bg-gradient-to-br ${g} border-2 border-[#f4f5fb]`}
                  />
                ))}
              </div>
              <span className="text-[#0c0b1e]/50 text-sm">
                Built for busy local business owners
              </span>
            </div>
          </div>

          {/* Right: animated mockup */}
          <div className="relative">
            <div
              style={{
                transform:
                  "perspective(2000px) rotateY(-9deg) rotateX(3deg) rotate(3deg)",
                transformStyle: "preserve-3d",
                filter:
                  "drop-shadow(0 35px 55px rgba(12,11,30,0.22)) drop-shadow(0 12px 24px rgba(12,11,30,0.14))",
              }}
            >
              <GrowProfileMockup />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

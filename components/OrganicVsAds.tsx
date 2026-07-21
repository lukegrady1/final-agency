import { Megaphone, Magnet, X, Check, ShieldCheck } from "lucide-react";
import BlurIn from "./BlurIn";
import AuroraBackdrop from "./grow/AuroraBackdrop";

// The case against renting attention with ads. Three points; the leaky-bucket
// verdict below carries the rest of the argument.
const adsPoints = [
  "Stop paying and the leads stop — you own nothing.",
  "Every click costs more as competitors bid the price up.",
  "You pay the same for a real buyer or a tire-kicker.",
];

// The case for ranking + owning your own system.
const systemPoints = [
  "Rank once and the leads keep coming, free.",
  "People already searching for what you do, ready to hire.",
  "Every call, text, and form lands in one inbox.",
];

export default function OrganicVsAds() {
  return (
    <section className="relative overflow-hidden grain-overlay py-24 lg:py-32 border-y border-black/10 bg-white/50 backdrop-blur-sm">
      <AuroraBackdrop tone="cyan" />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-8 md:mb-14 max-w-2xl mx-auto">
          <BlurIn delay={0.1}>
            <h2 className="text-3xl md:text-4xl font-medium text-[#0c0b1e] tracking-tight mt-4">
              Ads rent attention. We build you an{" "}
              <span className="grow-gradient-text font-display italic">
                asset.
              </span>
            </h2>
          </BlurIn>
          <BlurIn delay={0.2}>
            <p className="text-[#0c0b1e]/60 text-base md:text-lg leading-relaxed mt-4">
              Stop paying for ads and the leads stop that day. Rank on Google and
              get found by people already searching — then catch every one in a
              CRM built like a bucket with no holes.
            </p>
          </BlurIn>
        </div>

        {/* Side by side even on mobile — a comparison you can't see at once
            isn't a comparison. Mobile shows the condensed copy. */}
        <div className="grid grid-cols-2 gap-3 md:gap-6 items-stretch">
          {/* Paid ads — renting */}
          <BlurIn delay={0.15}>
            <div className="h-full flex flex-col rounded-2xl bg-white border border-black/[0.08] shadow-sm p-4 md:p-7 lg:p-8">
              <div className="flex flex-col gap-2 md:flex-row md:items-center md:gap-3">
                <span className="grid place-items-center w-8 h-8 md:w-11 md:h-11 rounded-lg md:rounded-xl border border-[#e0492f]/20 bg-[#e0492f]/10 text-[#e0492f]">
                  <Megaphone className="w-4 h-4 md:w-5 md:h-5" />
                </span>
                <div>
                  <h3 className="text-sm md:text-lg leading-snug font-medium text-[#0c0b1e]">
                    Paid ads on their own
                  </h3>
                  <p className="text-[#0c0b1e]/50 text-xs">Renting attention</p>
                </div>
              </div>
              <ul className="mt-4 md:mt-6 space-y-2.5 md:space-y-3 flex-1">
                {adsPoints.map((p) => (
                  <li key={p} className="flex items-start gap-2 md:gap-3">
                    <X className="w-3.5 h-3.5 md:w-4 md:h-4 mt-0.5 shrink-0 text-[#e0492f]" />
                    <span className="text-[#0c0b1e]/70 text-xs md:text-sm leading-snug md:leading-relaxed">
                      {p}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </BlurIn>

          {/* The system — owning */}
          <BlurIn delay={0.25}>
            <div className="h-full flex flex-col rounded-2xl bg-gradient-to-b from-accent/[0.08] to-white border border-accent/40 ring-1 ring-accent/20 shadow-2xl shadow-accent/15 p-4 md:p-7 lg:p-8">
              <div className="flex flex-col gap-2 md:flex-row md:items-center md:gap-3">
                <span className="grid place-items-center w-8 h-8 md:w-11 md:h-11 rounded-lg md:rounded-xl border border-accent/30 bg-accent/10 text-accent">
                  <Magnet className="w-4 h-4 md:w-5 md:h-5" />
                </span>
                <div>
                  <h3 className="text-sm md:text-lg leading-snug font-medium text-[#0c0b1e]">
                    The Grady Digital system
                  </h3>
                  <p className="text-accent text-xs font-medium">
                    Building an asset
                  </p>
                </div>
              </div>
              <ul className="mt-4 md:mt-6 space-y-2.5 md:space-y-3 flex-1">
                {systemPoints.map((p) => (
                  <li key={p} className="flex items-start gap-2 md:gap-3">
                    <Check className="w-3.5 h-3.5 md:w-4 md:h-4 mt-0.5 shrink-0 text-accent" />
                    <span className="text-[#0c0b1e]/80 text-xs md:text-sm leading-snug md:leading-relaxed">
                      {p}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </BlurIn>
        </div>

        {/* Verdict — the leaky bucket line */}
        <BlurIn delay={0.3}>
          <div className="mt-3 md:mt-6 rounded-2xl border border-black/[0.08] bg-white shadow-sm p-4 md:p-6 flex items-start gap-3 md:gap-4 max-w-4xl mx-auto">
            <span className="grid place-items-center w-9 h-9 md:w-11 md:h-11 rounded-lg md:rounded-xl border border-cyan/30 bg-cyan/10 text-[#0e8090] shrink-0">
              <ShieldCheck className="w-4 h-4 md:w-5 md:h-5" />
            </span>
            <p className="text-[#0c0b1e]/80 text-xs md:text-sm leading-relaxed">
              <span className="font-medium text-[#0c0b1e]">
                Ads pour leads into a leaky bucket.
              </span>{" "}
              We build the bucket with no holes — then keep it full for free. And
              if you ever do run ads, they&apos;ll finally pay off, because
              nothing slips through.
            </p>
          </div>
        </BlurIn>
      </div>
    </section>
  );
}

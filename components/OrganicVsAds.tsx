import { Megaphone, Magnet, X, Check, ShieldCheck } from "lucide-react";
import SectionLabel from "./SectionLabel";
import BlurIn from "./BlurIn";
import AuroraBackdrop from "./grow/AuroraBackdrop";

// The case against renting attention with ads.
const adsPoints = [
  "The moment you stop paying, the leads stop. You own nothing.",
  "Every click costs more as competitors keep bidding the price up.",
  "You interrupt people mid-scroll — lots of curiosity clicks and tire-kickers.",
  "You pay the same for a real buyer or a time-waster, and can't tell them apart.",
  "With no system to catch them, the leads you paid for land nowhere and slip away.",
];

// The case for ranking + owning your own system.
const systemPoints = [
  "Rank on Google once and the leads keep coming — even in months you don't spend a dollar more.",
  "Higher-quality leads: people already searching for what you do, ready to hire.",
  "Every call, text, and form lands in one CRM inbox — a bucket with no holes.",
  "Reviews and rankings compound, so each new lead gets cheaper over time.",
  "You build equity in an asset you own, not rented clicks that vanish.",
];

export default function OrganicVsAds() {
  return (
    <section className="relative overflow-hidden grain-overlay py-24 lg:py-32 border-y border-black/10 bg-white/50 backdrop-blur-sm">
      <AuroraBackdrop tone="cyan" />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <BlurIn>
            <SectionLabel>Organic vs. Paid Ads</SectionLabel>
          </BlurIn>
          <BlurIn delay={0.1}>
            <h2 className="text-3xl md:text-4xl font-medium text-[#0c0b1e] tracking-tight mt-4">
              Ads rent attention. We build you an{" "}
              <span className="grow-gradient-text font-display italic">
                asset.
              </span>
            </h2>
          </BlurIn>
          <BlurIn delay={0.2}>
            <p className="text-[#0c0b1e]/60 text-lg leading-relaxed mt-4">
              Stop paying for ads and the leads stop that day. Rank on Google and
              get found by people already searching — then catch every one in a
              CRM built like a bucket with no holes.
            </p>
          </BlurIn>
        </div>

        <div className="grid md:grid-cols-2 gap-6 items-stretch">
          {/* Paid ads — renting */}
          <BlurIn delay={0.15}>
            <div className="h-full flex flex-col rounded-2xl bg-white border border-black/[0.08] shadow-sm p-7 lg:p-8">
              <div className="flex items-center gap-3">
                <span className="grid place-items-center w-11 h-11 rounded-xl border border-[#e0492f]/20 bg-[#e0492f]/10 text-[#e0492f]">
                  <Megaphone className="w-5 h-5" />
                </span>
                <div>
                  <h3 className="text-lg font-medium text-[#0c0b1e]">
                    Paid ads on their own
                  </h3>
                  <p className="text-[#0c0b1e]/50 text-xs">Renting attention</p>
                </div>
              </div>
              <ul className="mt-6 space-y-3 flex-1">
                {adsPoints.map((p) => (
                  <li key={p} className="flex items-start gap-3">
                    <X className="w-4 h-4 mt-0.5 shrink-0 text-[#e0492f]" />
                    <span className="text-[#0c0b1e]/70 text-sm leading-relaxed">
                      {p}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </BlurIn>

          {/* The system — owning */}
          <BlurIn delay={0.25}>
            <div className="h-full flex flex-col rounded-2xl bg-gradient-to-b from-accent/[0.08] to-white border border-accent/40 ring-1 ring-accent/20 shadow-2xl shadow-accent/15 p-7 lg:p-8">
              <div className="flex items-center gap-3">
                <span className="grid place-items-center w-11 h-11 rounded-xl border border-accent/30 bg-accent/10 text-accent">
                  <Magnet className="w-5 h-5" />
                </span>
                <div>
                  <h3 className="text-lg font-medium text-[#0c0b1e]">
                    The Grady Digital system
                  </h3>
                  <p className="text-accent text-xs font-medium">
                    Building an asset
                  </p>
                </div>
              </div>
              <ul className="mt-6 space-y-3 flex-1">
                {systemPoints.map((p) => (
                  <li key={p} className="flex items-start gap-3">
                    <Check className="w-4 h-4 mt-0.5 shrink-0 text-accent" />
                    <span className="text-[#0c0b1e]/80 text-sm leading-relaxed">
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
          <div className="mt-6 rounded-2xl border border-black/[0.08] bg-white shadow-sm p-6 flex items-start gap-4 max-w-4xl mx-auto">
            <span className="grid place-items-center w-11 h-11 rounded-xl border border-cyan/30 bg-cyan/10 text-[#0e8090] shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </span>
            <p className="text-[#0c0b1e]/80 text-sm leading-relaxed">
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

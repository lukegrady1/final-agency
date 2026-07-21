import AuroraBackdrop from "./AuroraBackdrop";
import PricingPlans from "../PricingPlans";

// The /grow pricing section. The plan cards themselves live in the shared
// <PricingPlans /> component (this page's card design is the site-wide one),
// so every pricing table stays identical — including the mobile carousel.
export default function GrowPlans() {
  return (
    <section
      id="plans"
      className="relative overflow-hidden grain-overlay py-14 lg:py-32 border-t border-black/10 bg-gradient-to-b from-[#f3effb] to-[#f4f5fb]"
    >
      <AuroraBackdrop tone="violet" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-8 lg:mb-12">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-[#b45309]">
            <span className="w-6 h-px bg-amber" />
            The plans
            <span className="w-6 h-px bg-amber" />
          </span>
          <h2 className="mt-3 lg:mt-4 text-3xl sm:text-5xl font-medium tracking-tight leading-[1.05] text-[#0c0b1e]">
            Choose how aggressively{" "}
            <span className="grow-gradient-text font-display italic">
              you want to grow.
            </span>
          </h2>
          <p className="mt-4 lg:mt-5 text-[#0c0b1e]/60 text-base sm:text-lg leading-relaxed">
            Three plans, month-to-month. No setup fee, no contract, cancel
            anytime.
          </p>
        </div>

        <PricingPlans ctaHref="/start#book" showFootnote />
      </div>
    </section>
  );
}

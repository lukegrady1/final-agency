import SectionWrapper from "./SectionWrapper";
import BlurIn from "./BlurIn";
import PricingPlans from "./PricingPlans";

interface PlansSectionProps {
  className?: string;
}

// The three-plan ladder framed with a heading. Shared by Home and Services so
// the packaging story reads identically on both. Anchored at #plans.
export default function PlansSection({ className }: PlansSectionProps) {
  return (
    <SectionWrapper id="plans" className={className}>
      <div className="text-center mb-16">
        <BlurIn delay={0.1}>
          <h2 className="text-3xl md:text-4xl font-medium text-[#0c0b1e] tracking-tight mt-4">
            Three plans.{" "}
            <span className="grow-gradient-text font-display italic">
              Pick how fast you grow.
            </span>
          </h2>
        </BlurIn>
        <BlurIn delay={0.2}>
          <p className="text-[#0c0b1e]/60 text-lg leading-relaxed max-w-2xl mx-auto mt-4">
            Start with a website, add a review engine, or run the full Growth
            System. Month-to-month, no setup fee, cancel anytime.
          </p>
        </BlurIn>
      </div>
      <PricingPlans ctaHref="/start#book" />
    </SectionWrapper>
  );
}

import PricingPlans from "../PricingPlans";

// Pricing on /start reads from the canonical ladder in lib/plans.ts via the
// shared <PricingPlans /> component. CTA stays on-page (#book).
export default function StartPricing() {
  return <PricingPlans ctaHref="#book" showFootnote />;
}

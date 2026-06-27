import type { Metadata } from "next";
import GrowHero from "@/components/grow/GrowHero";
import GrowFeatureStrip from "@/components/grow/GrowFeatureStrip";
import GrowProblem from "@/components/grow/GrowProblem";
import GrowFlywheel from "@/components/grow/GrowFlywheel";
import GrowUnderHood from "@/components/grow/GrowUnderHood";
import GrowPlans from "@/components/grow/GrowPlans";
import GrowFinalCTA from "@/components/grow/GrowFinalCTA";

export const metadata: Metadata = {
  title: "Grow on Google — Reviews, Local SEO & More Calls | Grady Digital",
  description:
    "A done-for-you local growth system: more 5-star reviews, a stronger Google profile, higher map-pack rankings, and every lead in one inbox. Plans from $97/month, no setup fee, cancel anytime.",
  keywords: [
    "local SEO",
    "Google Business Profile management",
    "online reviews management",
    "map pack ranking",
    "local business growth",
    "more google reviews",
    "Grady Digital",
  ],
  alternates: { canonical: "/grow" },
};

export default function GrowPage() {
  return (
    <main className="bg-[#f4f5fb] text-[#0c0b1e] overflow-x-clip">
      <GrowHero />
      <GrowFeatureStrip />
      <div id="how">
        <GrowProblem />
        <GrowFlywheel />
        <GrowUnderHood />
      </div>
      <GrowPlans />
      <GrowFinalCTA />
    </main>
  );
}

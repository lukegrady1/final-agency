import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import SocialProofStats from "@/components/SocialProofStats";
import ServicesOverview from "@/components/ServicesOverview";
import CaseStudies from "@/components/CaseStudies";
import AboutSnippet from "@/components/AboutSnippet";
import ProcessSection from "@/components/ProcessSection";
import HomeFAQ from "@/components/HomeFAQ";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Grady Digital — AI Agents & Automation for Local Businesses",
  description:
    "AI receptionists, chatbots, lead follow-up, and websites that bring in calls. Built for HVAC, contractors, salons, and service businesses.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <main>
      <HeroSection />
      <SocialProofStats />
      <ServicesOverview />
      <CaseStudies />
      <AboutSnippet />
      <ProcessSection />
      <HomeFAQ />
      <CTABanner />
    </main>
  );
}

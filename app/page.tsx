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
  title: { absolute: "Grady Digital — Professional Websites for Local Businesses" },
  description:
    "Custom, conversion-focused websites built and managed for local service businesses. $97/month, no contracts, live in two weeks.",
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

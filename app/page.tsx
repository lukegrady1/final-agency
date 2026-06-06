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
  title: { absolute: "Grady Digital — Websites & SEO for Local Businesses" },
  description:
    "Custom websites and local SEO built and managed for local businesses. CRM included. $197/month, no long-term contract.",
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

import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import SocialProofStats from "@/components/SocialProofStats";
import ServicesOverview from "@/components/ServicesOverview";
import CaseStudies from "@/components/CaseStudies";
import AboutSnippet from "@/components/AboutSnippet";
import ProcessSection from "@/components/ProcessSection";
import HomeFAQ from "@/components/HomeFAQ";
import CTABanner from "@/components/CTABanner";
import { faqItems } from "@/lib/faq-data";

export const metadata: Metadata = {
  title: {
    absolute: "Grady Digital — Websites, SEO & Reviews for Local Businesses",
  },
  description:
    "Custom website, Google Business Profile, reviews, SEO, and an all-in-one inbox for your leads, built and managed for local businesses. One plan, $297/month, no setup fee, cancel anytime.",
  alternates: { canonical: "/" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer.replace(/\n\n/g, " "),
    },
  })),
};

export default function Home() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
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

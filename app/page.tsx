import type { Metadata } from "next";
import HomeHero from "@/components/home/HomeHero";
import TrustBar from "@/components/TrustBar";
import Testimonials from "@/components/home/Testimonials";
import HomeProblem from "@/components/home/HomeProblem";
import HomeFlywheel from "@/components/home/HomeFlywheel";
import GrowUnderHood from "@/components/grow/GrowUnderHood";
import ReviewEngine from "@/components/home/ReviewEngine";
import CaseStudies from "@/components/CaseStudies";
import HomePlans from "@/components/home/HomePlans";
import OrganicVsAds from "@/components/OrganicVsAds";
import ProcessSection from "@/components/ProcessSection";
import AboutSnippet from "@/components/AboutSnippet";
import HomeFAQ from "@/components/HomeFAQ";
import HomeFinalCTA from "@/components/home/HomeFinalCTA";
import { faqItems } from "@/lib/faq-data";

export const metadata: Metadata = {
  title: {
    absolute: "Grady Digital — Websites, SEO & Reviews for Local Businesses",
  },
  description:
    "One system for local businesses: your reviews win the click, your website wins the call, and every lead lands in one inbox. The Reputation System is $147/month — no setup fee, cancel anytime.",
  keywords: [
    "local business website design",
    "small business web design",
    "local SEO",
    "Google Business Profile optimization",
    "online reviews management",
    "lead management",
    "website and SEO plan",
    "Grady Digital",
  ],
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
    <main className="bg-transparent text-[#0c0b1e] overflow-x-clip">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* 1 — Hero */}
      <HomeHero />

      {/* 2 — Social proof: logos + testimonials */}
      <TrustBar />
      <Testimonials />

      {/* 3–5 — The problem, the system, and the machine that runs it */}
      <div id="how">
        <HomeProblem />
        <HomeFlywheel />
        <GrowUnderHood />
        <ReviewEngine />
        <CaseStudies />
      </div>

      {/* 6 — Plans */}
      <HomePlans />

      {/* 7 — Ads rent attention; we build you an asset */}
      <OrganicVsAds />

      {/* 8 — Process */}
      <ProcessSection />

      {/* 9 — About Luke / direct access */}
      <AboutSnippet />

      {/* 10 — FAQ */}
      <HomeFAQ />

      {/* 11 — Final CTA */}
      <HomeFinalCTA />
    </main>
  );
}

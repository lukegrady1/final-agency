import type { Metadata } from "next";
import SectionWrapper from "@/components/SectionWrapper";
import FAQAccordion from "@/components/FAQAccordion";
import { faqItems } from "@/lib/faq-data";
import CTABanner from "@/components/CTABanner";
import BlurIn from "@/components/BlurIn";

export const metadata: Metadata = {
  title: "FAQ — AI Receptionist, Chatbot & Automation Questions Answered",
  description:
    "Get answers about AI receptionists, chatbots, setup timelines, pricing, contracts, and how Grady Digital helps local service businesses get more leads.",
  alternates: { canonical: "/faq" },
};

export default function FAQPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="pt-40 pb-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <BlurIn>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white">
              Frequently Asked Questions
            </h1>
          </BlurIn>
          <BlurIn delay={0.1}>
            <p className="text-white/60 text-lg leading-relaxed max-w-2xl mx-auto mt-4">
              Everything you need to know about AI receptionists, chatbots,
              automation, and working with Grady Digital.
            </p>
          </BlurIn>
        </div>
      </section>

      <SectionWrapper>
        <FAQAccordion />
      </SectionWrapper>

      <CTABanner />
    </main>
  );
}

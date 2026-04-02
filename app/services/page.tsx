import type { Metadata } from "next";
import Link from "next/link";
import SectionLabel from "@/components/SectionLabel";
import ProcessSection from "@/components/ProcessSection";
import CTABanner from "@/components/CTABanner";
import ServicesContent from "@/components/ServicesContent";

export const metadata: Metadata = {
  title: "AI Receptionist, Chatbot & Automation Services for Local Businesses",
  description:
    "AI receptionists that answer every call, chatbots that book appointments, and automated lead follow-up — built for HVAC, contractors, salons, and service businesses.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "AI Receptionist, Chatbot & Automation Services | Grady Digital",
    description:
      "AI receptionists that answer every call, chatbots that book appointments, and automated lead follow-up for local service businesses.",
  },
};

export default function ServicesPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    provider: {
      "@type": "Organization",
      name: "Grady Digital",
      url: "https://gradydigital.com",
    },
    serviceType: "AI Automation & Digital Marketing",
    areaServed: { "@type": "Country", name: "United States" },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "AI & Digital Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "AI Receptionist",
            description:
              "Voice AI agent that answers business calls 24/7, qualifies leads, and books appointments automatically.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "AI Website Chatbot",
            description:
              "AI chat widget that engages website visitors, answers questions, and books appointments into your calendar.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Lead Follow-Up Automation",
            description:
              "Automated SMS and email follow-up that contacts new leads within 60 seconds.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Web Design & Development",
            description:
              "Fast, mobile-first websites designed to convert visitors into calls and bookings.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "SEO & Google Business Profile",
            description:
              "Local SEO, Google Business Profile optimization, and review automation.",
          },
        },
      ],
    },
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* Page Hero */}
      <section className="relative pt-40 pb-24 overflow-hidden">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background:
              "radial-gradient(ellipse at center top, rgba(108,106,246,0.2) 0%, transparent 60%)",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <SectionLabel>Our Services</SectionLabel>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white mt-4 leading-tight">
            Stop losing leads. Start filling your calendar.
          </h1>
          <p className="text-white/60 text-lg leading-relaxed max-w-2xl mx-auto mt-6">
            AI receptionists, chatbots, automated follow-up, and websites that
            bring in calls — all running 24/7 without extra staff.
          </p>
        </div>
      </section>

      <ServicesContent />

      {/* Industries & Service Areas */}
      <section className="py-24 lg:py-32 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <SectionLabel>Industries We Serve</SectionLabel>
          <h2 className="text-3xl md:text-4xl font-medium text-white mt-4 mb-10">
            Built for local service businesses
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {[
              {
                name: "HVAC Companies",
                href: "/industries/hvac",
                desc: "Websites, SEO, and AI automation for heating and cooling businesses.",
              },
              {
                name: "Plumbing Companies",
                href: "/industries/plumbers",
                desc: "Get more emergency calls and service bookings with local SEO and AI.",
              },
              {
                name: "Landscaping Companies",
                href: "/industries/landscapers",
                desc: "Fill your schedule year-round with better visibility and automation.",
              },
            ].map((industry) => (
              <Link
                key={industry.href}
                href={industry.href}
                className="block rounded-2xl bg-card border border-card-border p-6 hover:border-white/20 transition-colors group"
              >
                <h3 className="text-lg font-medium text-white mb-2">
                  {industry.name}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed mb-3">
                  {industry.desc}
                </p>
                <span className="text-accent-light text-sm group-hover:text-white transition-colors">
                  View services &rarr;
                </span>
              </Link>
            ))}
          </div>

          <h3 className="text-xl font-medium text-white mb-6">
            Service Areas — Central Massachusetts
          </h3>
          <div className="flex flex-wrap gap-3">
            {[
              { name: "Worcester", slug: "worcester-ma" },
              { name: "Leominster", slug: "leominster-ma" },
              { name: "Fitchburg", slug: "fitchburg-ma" },
            ].map((city) => (
              <Link
                key={city.slug}
                href={`/local-seo/${city.slug}`}
                className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-white/70 hover:text-white hover:border-white/20 transition-colors"
              >
                {city.name}, MA
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ProcessSection />
      <CTABanner />
    </main>
  );
}

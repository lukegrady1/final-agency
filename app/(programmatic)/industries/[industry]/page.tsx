import { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  services,
  industries,
  cities,
  getIndustryBySlug,
} from "@/data";
import ProgrammaticHero from "@/components/programmatic/ProgrammaticHero";
import ProgrammaticFAQ from "@/components/programmatic/ProgrammaticFAQ";
import ProgrammaticCTA from "@/components/programmatic/ProgrammaticCTA";
import ServiceGrid from "@/components/programmatic/ServiceGrid";
import CityGrid from "@/components/programmatic/CityGrid";
import Type4Content from "./Type4Content";

interface PageProps {
  params: Promise<{ industry: string }>;
}

export function generateStaticParams() {
  return industries.map((i) => ({ industry: i.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { industry: industrySlug } = await params;
  const industry = getIndustryBySlug(industrySlug);

  if (!industry) return {};

  const title = `Digital Marketing for ${industry.name} | Grady Digital`;
  const description = `Websites, local SEO, AI automation, and more \u2014 built specifically for ${industry.name.toLowerCase()}. Get more leads and grow your business with Grady Digital.`;

  return {
    title,
    description,
    alternates: {
      canonical: `https://gradydigital.com/industries/${industry.slug}`,
    },
    robots: { index: true, follow: true },
    openGraph: { title, description, url: `https://gradydigital.com/industries/${industry.slug}` },
  };
}

export default async function IndustryHubPage({ params }: PageProps) {
  const { industry: industrySlug } = await params;
  const industry = getIndustryBySlug(industrySlug);

  if (!industry) notFound();

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: industry.name, href: `/industries/${industry.slug}` },
  ];

  const serviceLinks = services.map((s) => ({
    name: `${s.name} for ${industry.name}`,
    description: s.description,
    href: `/${s.slug}/${industry.slug}`,
  }));

  const cityLinks = cities.map((c) => ({
    name: c.name,
    state: c.state,
    href: `/${services[0].slug}/${industry.slug}/${c.slug}`,
  }));

  const faqItems = [
    {
      question: `What digital marketing services does Grady Digital offer for ${industry.name.toLowerCase()}?`,
      answer: `We offer a full suite of digital marketing services for ${industry.name.toLowerCase()}: website design, local SEO, Google Business Profile management, AI automation, and more. Each service is built around what works for ${industry.name.toLowerCase()} specifically \u2014 not generic tactics.`,
    },
    {
      question: `How long does it take to see results for a ${industry.singular}?`,
      answer: `Most ${industry.name.toLowerCase()} see measurable improvements within 60\u201390 days. Full results \u2014 consistent Google Maps placement, sustained organic traffic, and a reliable lead pipeline \u2014 typically develop over 4\u20136 months. The results compound over time.`,
    },
    {
      question: `How much does digital marketing cost for a ${industry.singular}?`,
      answer: `Grady Digital offers flat monthly pricing with no long-term contracts. The cost depends on which services you need and the scope of your service area. Schedule a free strategy call and we'll give you a straight number based on your ${industry.singular}'s specific situation.`,
    },
    {
      question: `Why should a ${industry.singular} choose Grady Digital over other agencies?`,
      answer: `We work exclusively with local service businesses like ${industry.name.toLowerCase()}. We're based in Central Massachusetts, we don't outsource, and you work directly with the person building your system. No account managers, no fluff \u2014 just strategies that work for ${industry.name.toLowerCase()}.`,
    },
  ];

  return (
    <main>
      <ProgrammaticHero
        label={`${industry.shortName} Digital Marketing`}
        h1={`Digital Marketing for ${industry.name}`}
        subheadline={`Running a ${industry.singular} means your time is spent on the job, not online. But your customers are searching online \u2014 and if your business isn't showing up, you're leaving work on the table. Grady Digital works exclusively with local service businesses like yours.`}
        trustBar="Grady Digital \u00B7 Leominster, MA \u00B7 Serving New England"
        breadcrumbs={breadcrumbs}
      />
      <Type4Content industry={industry} />
      <ServiceGrid
        heading={`${industry.shortName} Digital Marketing Services We Offer`}
        services={serviceLinks}
      />
      <CityGrid
        heading={`${industry.name} We Serve Across Central Massachusetts`}
        cities={cityLinks}
      />
      <ProgrammaticCTA
        heading={`Ready to Grow Your ${industry.shortName} Business?`}
        body={`Let's talk about how digital marketing can help your ${industry.singular} get more leads and outrank the competition. No obligation, no pressure.`}
      />
      <ProgrammaticFAQ
        heading={`FAQ \u2014 Digital Marketing for ${industry.name}`}
        items={faqItems}
      />
    </main>
  );
}

import { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  services,
  industries,
  cities,
  getServiceBySlug,
  getIndustryBySlug,
} from "@/data";
import ProgrammaticHero from "@/components/programmatic/ProgrammaticHero";
import ProgrammaticFAQ from "@/components/programmatic/ProgrammaticFAQ";
import ProgrammaticCTA from "@/components/programmatic/ProgrammaticCTA";
import CityGrid from "@/components/programmatic/CityGrid";
import Type3Content from "./Type3Content";

interface PageProps {
  params: Promise<{ service: string; industry: string }>;
}

export function generateStaticParams() {
  const params: { service: string; industry: string }[] = [];
  for (const s of services) {
    for (const i of industries) {
      params.push({ service: s.slug, industry: i.slug });
    }
  }
  return params;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { service: serviceSlug, industry: industrySlug } = await params;
  const service = getServiceBySlug(serviceSlug);
  const industry = getIndustryBySlug(industrySlug);

  if (!service || !industry) return {};

  const title = `${service.name} for ${industry.name} | Grady Digital`;
  const description = `${service.name} built specifically for ${industry.name.toLowerCase()}. More leads, higher rankings, real results. Free strategy call from Grady Digital.`;

  return {
    title,
    description,
    alternates: {
      canonical: `https://gradydigital.com/${service.slug}/${industry.slug}`,
    },
    robots: { index: true, follow: true },
    openGraph: { title, description, url: `https://gradydigital.com/${service.slug}/${industry.slug}` },
  };
}

export default async function ServiceIndustryPage({ params }: PageProps) {
  const { service: serviceSlug, industry: industrySlug } = await params;
  const service = getServiceBySlug(serviceSlug);
  const industry = getIndustryBySlug(industrySlug);

  if (!service || !industry) notFound();

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: `${industry.name}`, href: `/industries/${industry.slug}` },
    { label: `${service.name}`, href: `/${service.slug}/${industry.slug}` },
  ];

  const cityLinks = cities.map((c) => ({
    name: c.name,
    state: c.state,
    href: `/${service.slug}/${industry.slug}/${c.slug}`,
  }));

  const faqItems = [
    {
      question: `How long does ${service.name.toLowerCase()} take to show results for ${industry.name.toLowerCase()}?`,
      answer: `Most ${industry.name.toLowerCase()} working with Grady Digital see measurable results within 60\u201390 days of starting ${service.name.toLowerCase()}. Full results \u2014 consistent placement in the local map pack and sustained organic traffic \u2014 typically develop over 4\u20136 months. The improvements compound over time as your online presence grows in your service area.`,
    },
    {
      question: `How much does ${service.name.toLowerCase()} cost for a ${industry.singular}?`,
      answer: `Grady Digital's ${service.name.toLowerCase()} packages for ${industry.name.toLowerCase()} start at a flat monthly rate with no setup surprises. Pricing depends on the scope of your service area and competitive landscape. We don't charge per-keyword or lock you into annual contracts. Schedule a free call and we'll give you a straight number.`,
    },
    {
      question: `Does my ${industry.singular} need a new website for ${service.name.toLowerCase()} to work?`,
      answer: `Not always. We can often improve your ${service.name.toLowerCase()} results without rebuilding from scratch. However, if your current website has serious speed, mobile, or structural issues, those will limit how far ${service.name.toLowerCase()} can take you. We'll audit your site during onboarding and flag anything holding you back.`,
    },
    {
      question: `What makes Grady Digital different from other ${service.name.toLowerCase()} agencies for ${industry.name.toLowerCase()}?`,
      answer: `We work exclusively with local service businesses like ${industry.name.toLowerCase()}. Every tactic, tool, and campaign we run is built around what works for trades and home services specifically. We're based in Central Massachusetts, so we understand the local market in a way that remote agencies don't.`,
    },
  ];

  return (
    <main>
      <ProgrammaticHero
        label={`${service.shortName} for ${industry.shortName}`}
        h1={`${service.name} for ${industry.name}`}
        subheadline={`${service.description} Built specifically for ${industry.name.toLowerCase()} across Central Massachusetts and New England.`}
        trustBar="Grady Digital \u00B7 Leominster, MA \u00B7 Serving New England"
        breadcrumbs={breadcrumbs}
      />
      <Type3Content service={service} industry={industry} />
      <CityGrid
        heading={`We Serve ${industry.name} Across Central Massachusetts`}
        cities={cityLinks}
      />
      <ProgrammaticCTA
        heading={`Ready to Grow Your ${industry.shortName} Business?`}
        body={`Let's talk about how ${service.name.toLowerCase()} can help your ${industry.singular} get more leads and outrank the competition in your service area.`}
      />
      <ProgrammaticFAQ
        heading={`FAQ \u2014 ${service.name} for ${industry.name}`}
        items={faqItems}
      />
    </main>
  );
}

import { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  services,
  industries,
  cities,
  getServiceBySlug,
  getCityBySlug,
} from "@/data";
import ProgrammaticHero from "@/components/programmatic/ProgrammaticHero";
import ProgrammaticFAQ from "@/components/programmatic/ProgrammaticFAQ";
import ProgrammaticCTA from "@/components/programmatic/ProgrammaticCTA";
import IndustryGrid from "@/components/programmatic/IndustryGrid";
import Type2Content from "./Type2Content";

interface PageProps {
  params: Promise<{ service: string; city: string }>;
}

export function generateStaticParams() {
  const params: { service: string; city: string }[] = [];
  for (const s of services) {
    for (const c of cities) {
      params.push({ service: s.slug, city: c.slug });
    }
  }
  return params;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { service: serviceSlug, city: citySlug } = await params;
  const service = getServiceBySlug(serviceSlug);
  const city = getCityBySlug(citySlug);

  if (!service || !city) return {};

  const title = `${service.name} in ${city.name}, ${city.state} | Grady Digital`;
  const description = `${service.name} for local businesses in ${city.name}, ${city.state}. More leads, higher Google rankings, real results. Free strategy call from Grady Digital.`;

  return {
    title,
    description,
    alternates: {
      canonical: `https://gradydigital.com/${service.slug}/${city.slug}`,
    },
    robots: { index: true, follow: true },
    openGraph: { title, description, url: `https://gradydigital.com/${service.slug}/${city.slug}` },
  };
}

export default async function ServiceCityPage({ params }: PageProps) {
  const { service: serviceSlug, city: citySlug } = await params;
  const service = getServiceBySlug(serviceSlug);
  const city = getCityBySlug(citySlug);

  if (!service || !city) notFound();

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: service.name, href: `/${service.slug}/${city.slug}` },
  ];

  const industryLinks = industries.map((i) => ({
    name: `${service.shortName} for ${i.name}`,
    href: `/${service.slug}/${i.slug}/${city.slug}`,
  }));

  const faqItems = [
    {
      question: `How long does ${service.name.toLowerCase()} take to work in ${city.name}?`,
      answer: `Most ${city.name} businesses working with Grady Digital see measurable results within 60\u201390 days of starting ${service.name.toLowerCase()}. Full results typically develop over 4\u20136 months. The improvements compound over time as your online presence grows in the ${city.name} market.`,
    },
    {
      question: `How much does ${service.name.toLowerCase()} cost for a ${city.name} business?`,
      answer: `Grady Digital's ${service.name.toLowerCase()} packages start at a flat monthly rate with no setup surprises. Pricing depends on the scope of your ${city.name} service area and competitive landscape. We don't lock you into annual contracts. Schedule a free call and we'll give you a straight number.`,
    },
    {
      question: `Do I need a new website for ${service.name.toLowerCase()} to work in ${city.name}?`,
      answer: `Not always. We can often improve your results without rebuilding your site. However, if your current website has serious issues, those will limit how far ${service.name.toLowerCase()} can take you in the ${city.name} market. We'll audit your site during onboarding and flag anything holding you back.`,
    },
    {
      question: `Why choose Grady Digital for ${service.name.toLowerCase()} in ${city.name}?`,
      answer: `We work exclusively with local service businesses. Every tactic and campaign we run for ${city.name} clients is built around what works for local services specifically. We're based in Central Massachusetts, so we understand the ${city.name} market in a way that remote agencies don't.`,
    },
  ];

  return (
    <main>
      <ProgrammaticHero
        label={`${service.shortName} in ${city.name}`}
        h1={`${service.name} in ${city.name}, ${city.state}`}
        subheadline={`${service.description} Helping local businesses in ${city.name} get more leads and rank higher on Google.`}
        trustBar={`Grady Digital \u00B7 Leominster, MA \u00B7 Serving ${city.county} and beyond`}
        breadcrumbs={breadcrumbs}
      />
      <IndustryGrid
        heading={`${service.name} by Industry in ${city.name}`}
        industries={industryLinks}
      />
      <Type2Content service={service} city={city} />
      <ProgrammaticCTA
        heading={`Ready to Grow Your ${city.name} Business?`}
        body={`Let's talk about how ${service.name.toLowerCase()} can help your ${city.name} business get more leads and grow. No obligation, no pressure.`}
      />
      <ProgrammaticFAQ
        heading={`FAQ \u2014 ${service.name} in ${city.name}, ${city.state}`}
        items={faqItems}
      />
    </main>
  );
}

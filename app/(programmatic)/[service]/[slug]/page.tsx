import { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  services,
  industries,
  cities,
  getServiceBySlug,
  getIndustryBySlug,
  getCityBySlug,
} from "@/data";
import ProgrammaticHero from "@/components/programmatic/ProgrammaticHero";
import ProgrammaticFAQ from "@/components/programmatic/ProgrammaticFAQ";
import ProgrammaticCTA from "@/components/programmatic/ProgrammaticCTA";
import IndustryGrid from "@/components/programmatic/IndustryGrid";
import CityGrid from "@/components/programmatic/CityGrid";
import Type2Content from "./Type2Content";
import Type3Content from "./Type3Content";

interface PageProps {
  params: Promise<{ service: string; slug: string }>;
}

function resolveSlug(slug: string) {
  const city = getCityBySlug(slug);
  if (city) return { type: "city" as const, city, industry: undefined };
  const industry = getIndustryBySlug(slug);
  if (industry) return { type: "industry" as const, industry, city: undefined };
  return null;
}

export function generateStaticParams() {
  const params: { service: string; slug: string }[] = [];
  for (const s of services) {
    for (const c of cities) {
      params.push({ service: s.slug, slug: c.slug });
    }
    for (const i of industries) {
      params.push({ service: s.slug, slug: i.slug });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { service: serviceSlug, slug } = await params;
  const service = getServiceBySlug(serviceSlug);
  const resolved = resolveSlug(slug);

  if (!service || !resolved) return {};

  if (resolved.type === "city") {
    const city = resolved.city!;
    const title = `${service.name} in ${city.name}, ${city.state} | Grady Digital`;
    const description = `${service.name} for local businesses in ${city.name}, ${city.state}. More leads, higher Google rankings, real results. Free strategy call from Grady Digital.`;
    return {
      title,
      description,
      alternates: {
        canonical: `https://gradydigital.com/${service.slug}/${city.slug}`,
      },
      robots: { index: true, follow: true },
      openGraph: {
        title,
        description,
        url: `https://gradydigital.com/${service.slug}/${city.slug}`,
      },
    };
  }

  const industry = resolved.industry!;
  const title = `${service.name} for ${industry.name} | Grady Digital`;
  const description = `${service.name} built specifically for ${industry.name.toLowerCase()}. More leads, higher rankings, real results. Free strategy call from Grady Digital.`;
  return {
    title,
    description,
    alternates: {
      canonical: `https://gradydigital.com/${service.slug}/${industry.slug}`,
    },
    robots: { index: true, follow: true },
    openGraph: {
      title,
      description,
      url: `https://gradydigital.com/${service.slug}/${industry.slug}`,
    },
  };
}

export default async function ServiceSlugPage({ params }: PageProps) {
  const { service: serviceSlug, slug } = await params;
  const service = getServiceBySlug(serviceSlug);
  const resolved = resolveSlug(slug);

  if (!service || !resolved) notFound();

  if (resolved.type === "city") {
    return <CityPage service={service} city={resolved.city!} />;
  }

  return <IndustryPage service={service} industry={resolved.industry!} />;
}

// Type 2: Service + City
function CityPage({
  service,
  city,
}: {
  service: (typeof services)[0];
  city: (typeof cities)[0];
}) {
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
      answer: `Most ${city.name} businesses working with Grady Digital see measurable results within 60–90 days of starting ${service.name.toLowerCase()}. Full results typically develop over 4–6 months. The improvements compound over time as your online presence grows in the ${city.name} market.`,
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
        trustBar={`Grady Digital · Serving ${city.county} and beyond`}
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
        heading={`FAQ — ${service.name} in ${city.name}, ${city.state}`}
        items={faqItems}
      />
    </main>
  );
}

// Type 3: Service + Industry
function IndustryPage({
  service,
  industry,
}: {
  service: (typeof services)[0];
  industry: (typeof industries)[0];
}) {
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
      answer: `Most ${industry.name.toLowerCase()} working with Grady Digital see measurable results within 60–90 days of starting ${service.name.toLowerCase()}. Full results — consistent placement in the local map pack and sustained organic traffic — typically develop over 4–6 months. The improvements compound over time as your online presence grows in your service area.`,
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
        trustBar="Grady Digital · Serving New England"
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
        heading={`FAQ — ${service.name} for ${industry.name}`}
        items={faqItems}
      />
    </main>
  );
}

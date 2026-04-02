import { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  services,
  industries,
  cities,
  getServiceBySlug,
  getIndustryBySlug,
  getCityBySlug,
  getNearbyCities,
} from "@/data";
import ProgrammaticHero from "@/components/programmatic/ProgrammaticHero";
import ProgrammaticFAQ from "@/components/programmatic/ProgrammaticFAQ";
import ProgrammaticCTA from "@/components/programmatic/ProgrammaticCTA";
import InternalLinks from "@/components/programmatic/InternalLinks";
import Type1Content from "./Type1Content";

interface PageProps {
  params: Promise<{ service: string; industry: string; city: string }>;
}

export function generateStaticParams() {
  const params: { service: string; industry: string; city: string }[] = [];
  for (const s of services) {
    for (const i of industries) {
      for (const c of cities) {
        params.push({ service: s.slug, industry: i.slug, city: c.slug });
      }
    }
  }
  return params;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { service: serviceSlug, industry: industrySlug, city: citySlug } = await params;
  const service = getServiceBySlug(serviceSlug);
  const industry = getIndustryBySlug(industrySlug);
  const city = getCityBySlug(citySlug);

  if (!service || !industry || !city) return {};

  const title = `${service.name} for ${industry.shortName} in ${city.name}, ${city.state}`;
  const description = `Grady Digital helps ${industry.name.toLowerCase()} in ${city.name}, ${city.state} grow with ${service.name.toLowerCase()}. Get more leads, rank higher on Google, and grow your business. Free strategy call.`;

  return {
    title,
    description,
    alternates: {
      canonical: `https://gradydigital.com/${service.slug}/${industry.slug}/${city.slug}`,
    },
    robots: { index: true, follow: true },
    openGraph: {
      title,
      description,
      url: `https://gradydigital.com/${service.slug}/${industry.slug}/${city.slug}`,
    },
  };
}

export default async function ServiceIndustryCityPage({ params }: PageProps) {
  const { service: serviceSlug, industry: industrySlug, city: citySlug } = await params;
  const service = getServiceBySlug(serviceSlug);
  const industry = getIndustryBySlug(industrySlug);
  const city = getCityBySlug(citySlug);

  if (!service || !industry || !city) notFound();

  const nearbyCities = getNearbyCities(city.slug, 5);

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: service.name, href: `/${service.slug}/${industry.slug}` },
    { label: `${industry.shortName} in ${city.name}`, href: `/${service.slug}/${industry.slug}/${city.slug}` },
  ];

  const faqItems = [
    {
      question: `How long does ${service.name} take to work for a ${city.name} ${industry.singular}?`,
      answer: `For most ${industry.name.toLowerCase()} in ${city.name}, you can expect to see early movement in Google rankings within 60\u201390 days of starting ${service.name.toLowerCase()}. Full results \u2014 consistent placement in the local map pack and sustained organic traffic \u2014 typically develop over 4\u20136 months. ${service.name} builds on itself: the longer your ${city.name} ${industry.singular} is active in the program, the stronger your visibility gets and the harder it becomes for competitors to unseat you.`,
    },
    {
      question: `How much does ${service.name} cost for a ${industry.singular} in ${city.name}?`,
      answer: `Grady Digital's ${service.name.toLowerCase()} packages for ${industry.name.toLowerCase()} start at a flat monthly rate with no setup surprises. Pricing is based on the scope of your ${city.name} service area and competitive landscape. We don't charge per-keyword or lock you into annual contracts. Most ${industry.name.toLowerCase()} in ${city.name} and surrounding ${city.county} towns work with us on a month-to-month basis. Schedule a free call and we'll give you a straight number.`,
    },
    {
      question: `Does my ${industry.singular} in ${city.name} need a new website for ${service.name.toLowerCase()} to work?`,
      answer: `Not always. In many cases, we can improve your ${service.name.toLowerCase()} results without rebuilding your site from scratch. However, if your current website has serious speed, mobile, or structural issues, those will limit how far ${service.name.toLowerCase()} can take you in the ${city.name} market. We'll audit your site as part of our onboarding and flag anything that's holding back your ${industry.singular} from ranking in ${city.name}.`,
    },
    {
      question: `What makes Grady Digital different from other ${service.name.toLowerCase()} agencies serving ${city.name}?`,
      answer: `Most ${service.name.toLowerCase()} agencies take on any client in any industry. Grady Digital works exclusively with local service businesses \u2014 trades, home services, and similar industries like ${industry.name.toLowerCase()}. That means every tactic, every tool, and every campaign we run for ${city.name} clients is built around what works for service businesses specifically. We're also based right here in Central Massachusetts, so we understand the ${city.name} market in a way that remote agencies simply don't.`,
    },
  ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${service.name} for ${industry.name} in ${city.name}`,
    provider: {
      "@type": "LocalBusiness",
      name: "Grady Digital",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Leominster",
        addressRegion: "MA",
        addressCountry: "US",
      },
      telephone: "+1-978-798-2870",
      url: "https://gradydigital.com",
    },
    areaServed: {
      "@type": "City",
      name: city.name,
    },
    description: `${service.name} for ${industry.name.toLowerCase()} in ${city.name}, ${city.state}.`,
  };

  const nearbyCityLinks = nearbyCities.map((c) => ({
    label: `${service.name} for ${industry.shortName} in ${c.name}`,
    href: `/${service.slug}/${industry.slug}/${c.slug}`,
  }));

  const relatedPages = [
    {
      label: `All ${service.name} in ${city.name}`,
      href: `/${service.slug}/${city.slug}`,
    },
    {
      label: `${service.name} for ${industry.name}`,
      href: `/${service.slug}/${industry.slug}`,
    },
    {
      label: `Digital Marketing for ${industry.name}`,
      href: `/industries/${industry.slug}`,
    },
  ];

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <ProgrammaticHero
        label={`${service.shortName} for ${industry.shortName}`}
        h1={`${service.name} for ${industry.name} in ${city.name}, ${city.state}`}
        subheadline={`More leads. Higher Google rankings. A stronger online presence \u2014 built specifically for ${industry.name.toLowerCase()} in ${city.name} and the surrounding ${city.county} area.`}
        trustBar={`Grady Digital \u00B7 Leominster, MA \u00B7 Serving ${city.county} and beyond`}
        breadcrumbs={breadcrumbs}
      />
      <Type1Content service={service} industry={industry} city={city} />
      <ProgrammaticCTA
        heading={`Ready to Grow Your ${city.name} ${industry.shortName} Business?`}
        body={`If you're serious about getting more customers in ${city.name} and ${city.county}, let's talk. We'll look at your current online presence, show you exactly where the gaps are, and put together a ${service.name.toLowerCase()} plan built for your ${industry.singular}.`}
      />
      <ProgrammaticFAQ
        heading={`Frequently Asked Questions \u2014 ${service.name} for ${industry.name} in ${city.name}`}
        items={faqItems}
      />
      <InternalLinks
        nearbyCities={nearbyCityLinks}
        relatedPages={relatedPages}
      />
    </main>
  );
}

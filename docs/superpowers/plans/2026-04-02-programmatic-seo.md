# Programmatic SEO Phase 1 — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build 132 statically-generated programmatic SEO pages (4 page types) for gradydigital.com targeting "[service] for [industry] in [city]" queries across Central Massachusetts.

**Architecture:** Data-driven page generation using Next.js App Router dynamic routes inside a `(programmatic)` route group. All content is interpolated from typed data arrays in `/data`. Pages use client components with Framer Motion animations, with the existing noscript CSS fallback ensuring Googlebot sees all content without JS.

**Tech Stack:** Next.js 14+ App Router, TypeScript, Tailwind CSS, Framer Motion, lucide-react

**Source documents:**
- Spec: `docs/superpowers/specs/2026-04-02-programmatic-seo-design.md`
- Data & copy templates: `programmatic_seo.md`

---

## File Structure

### New files to create:

```
data/
  types.ts                                          — TypeScript interfaces for Service, Industry, City
  services.ts                                       — Service[] array (3 services for Phase 1)
  industries.ts                                     — Industry[] array (3 industries for Phase 1)
  cities.ts                                         — City[] array (10 Central MA cities)
  index.ts                                          — Re-exports + helper functions

components/programmatic/
  ProgrammaticHero.tsx                              — Hero for all 4 page types
  ProgrammaticFAQ.tsx                               — FAQ accordion with JSON-LD schema
  ProgrammaticCTA.tsx                               — CTA section with contact link
  Breadcrumbs.tsx                                   — Breadcrumb nav with BreadcrumbList JSON-LD
  InternalLinks.tsx                                 — Nearby cities + related page links
  CityGrid.tsx                                      — Grid of city link cards
  ServiceGrid.tsx                                   — Grid of service link cards
  IndustryGrid.tsx                                  — Grid of industry link cards

app/(programmatic)/
  [service]/
    [industry]/
      [city]/
        page.tsx                                    — Type 1: Service + Industry + City (90 pages)
      page.tsx                                      — Type 3: Service + Industry (9 pages)
    [city]/
      page.tsx                                      — Type 2: Service + City (30 pages)
  industries/
    [industry]/
      page.tsx                                      — Type 4: Industry Hub (3 pages)
```

### Existing files to modify:

```
app/sitemap.ts                                      — Add all programmatic URLs dynamically
```

---

## Task 1: Data Types

**Files:**
- Create: `data/types.ts`

- [ ] **Step 1: Create the type definitions file**

```ts
// data/types.ts

export interface Service {
  slug: string;
  name: string;
  shortName: string;
  headline: string;
  description: string;
  painPoints: string[];
  outcomes: string[];
  includes: string[];
  variations: string[];
}

export interface Industry {
  slug: string;
  name: string;
  singular: string;
  shortName: string;
  keywords: string[];
  painPoints: string[];
  trustSignals: string[];
}

export interface City {
  slug: string;
  name: string;
  state: string;
  region: string;
  population: number;
  county: string;
  uniqueSentence: string;
}
```

- [ ] **Step 2: Verify no TypeScript errors**

Run: `npx tsc --noEmit data/types.ts` or just confirm no red squiggles in editor.

- [ ] **Step 3: Commit**

```bash
git add data/types.ts
git commit -m "Add TypeScript types for programmatic SEO data layer"
```

---

## Task 2: Services Data

**Files:**
- Create: `data/services.ts`

- [ ] **Step 1: Create services data file with 3 Phase 1 services**

```ts
// data/services.ts

import { Service } from "./types";

export const services: Service[] = [
  {
    slug: "website-design",
    name: "Website Design",
    shortName: "Website Design",
    headline: "Professional Websites Built to Convert",
    description:
      "Custom-built websites designed specifically for local service businesses — fast, mobile-first, and built to rank on Google.",
    painPoints: [
      "Losing jobs to competitors with more professional-looking websites",
      "Embarrassed to send customers to your current site",
      "Website doesn't show up on Google at all",
      "Old site isn't mobile-friendly",
    ],
    outcomes: [
      "A site that earns trust the moment someone lands on it",
      "More quote requests from your service area",
      "A site Google actually wants to rank",
      "Fast load times on any device",
    ],
    includes: [
      "Custom design (no templates)",
      "Mobile-first development",
      "On-page SEO setup",
      "Contact forms and call tracking",
      "Google Analytics + Search Console setup",
      "1 round of revisions",
    ],
    variations: [
      "custom website",
      "professional website",
      "business website",
      "web design",
      "new website",
      "website development",
      "website redesign",
    ],
  },
  {
    slug: "local-seo",
    name: "Local SEO",
    shortName: "Local SEO",
    headline: "Rank at the Top of Google in Your Service Area",
    description:
      "A complete local SEO strategy that gets your business into the Google Maps 3-pack and to the top of organic search for the keywords your customers are typing.",
    painPoints: [
      "Competitors showing up above you on Google Maps",
      "Not ranking for your city or service keywords",
      "Getting traffic but not from your local area",
      "Inconsistent business info across the web",
    ],
    outcomes: [
      "Consistent placement in the Google Maps 3-pack",
      "More calls from people in your service area",
      "Outranking local competitors",
      "Long-term search visibility without ad spend",
    ],
    includes: [
      "Google Business Profile optimization",
      "Citation building and cleanup",
      "On-page and technical SEO",
      "Monthly reporting",
      "Review strategy",
      "Local link building",
    ],
    variations: [
      "local search optimization",
      "Google Maps ranking",
      "local search visibility",
      "local search presence",
      "map pack ranking",
      "Google Business Profile optimization",
      "local search rankings",
    ],
  },
  {
    slug: "ai-automation",
    name: "AI Automation",
    shortName: "AI Automation",
    headline: "Stop Losing Leads to Slow Follow-Up",
    description:
      "AI-powered automation that responds to new leads instantly, books appointments, follows up on quotes, and handles repetitive tasks — so you can focus on the job.",
    painPoints: [
      "Missing leads because you're too busy to respond quickly",
      "Chasing down customers for payments or quote approvals",
      "Manually following up with leads who went cold",
      "Spending hours on admin tasks that could be automated",
    ],
    outcomes: [
      "Instant lead response — even at 2am",
      "More bookings from the same lead volume",
      "Automated follow-up that closes more quotes",
      "Hours back in your week",
    ],
    includes: [
      "Lead response automation",
      "Appointment booking workflows",
      "Quote follow-up sequences",
      "Review request automation",
      "CRM integration (GoHighLevel)",
      "Ongoing workflow optimization",
    ],
    variations: [
      "marketing automation",
      "lead automation",
      "automated follow-up",
      "workflow automation",
      "CRM automation",
      "automated lead response",
    ],
  },
];
```

- [ ] **Step 2: Commit**

```bash
git add data/services.ts
git commit -m "Add services data for programmatic SEO (3 Phase 1 services)"
```

---

## Task 3: Industries Data

**Files:**
- Create: `data/industries.ts`

- [ ] **Step 1: Create industries data file with 3 Phase 1 industries**

```ts
// data/industries.ts

import { Industry } from "./types";

export const industries: Industry[] = [
  {
    slug: "hvac",
    name: "HVAC Companies",
    singular: "HVAC company",
    shortName: "HVAC",
    keywords: [
      "HVAC",
      "heating and cooling",
      "air conditioning",
      "furnace repair",
      "AC installation",
    ],
    painPoints: [
      "Scrambling for leads in the off-season",
      "Google Maps showing competitors above you",
      "Website looks outdated compared to bigger companies",
      "Losing bids to companies who just look more professional online",
    ],
    trustSignals: [
      "licensed and insured",
      "NATE-certified technicians",
      "24/7 emergency service",
      "free estimates",
    ],
  },
  {
    slug: "plumbers",
    name: "Plumbing Companies",
    singular: "plumbing company",
    shortName: "Plumbing",
    keywords: [
      "plumber",
      "plumbing company",
      "drain cleaning",
      "water heater installation",
      "emergency plumber",
    ],
    painPoints: [
      "Too much work coming from one referral source",
      "Phone not ringing enough in slow months",
      "Emergency calls going to competitors who rank higher on Google",
      "No online reviews compared to bigger plumbing companies",
    ],
    trustSignals: [
      "licensed master plumber",
      "24/7 emergency service",
      "upfront pricing",
      "local and family-owned",
    ],
  },
  {
    slug: "landscapers",
    name: "Landscaping Companies",
    singular: "landscaping company",
    shortName: "Landscaping",
    keywords: [
      "landscaper",
      "landscaping company",
      "lawn care",
      "landscape design",
      "snow removal",
    ],
    painPoints: [
      "Business is feast-or-famine — packed in spring, dead in winter",
      "Customers don't understand the difference between you and cheap lawn guys",
      "No way to showcase your best work online",
      "Missing out on high-value design and installation jobs",
    ],
    trustSignals: [
      "licensed and insured",
      "free consultations",
      "portfolio of completed projects",
      "locally owned",
    ],
  },
];
```

- [ ] **Step 2: Commit**

```bash
git add data/industries.ts
git commit -m "Add industries data for programmatic SEO (3 Phase 1 industries)"
```

---

## Task 4: Cities Data

**Files:**
- Create: `data/cities.ts`

- [ ] **Step 1: Create cities data file with 10 Central MA cities**

```ts
// data/cities.ts

import { City } from "./types";

export const cities: City[] = [
  {
    slug: "leominster-ma",
    name: "Leominster",
    state: "MA",
    region: "Central Massachusetts",
    population: 43000,
    county: "Worcester County",
    uniqueSentence:
      "Leominster is known as the Pioneer Plastics City and has a dense small business community across trades and home services.",
  },
  {
    slug: "fitchburg-ma",
    name: "Fitchburg",
    state: "MA",
    region: "Central Massachusetts",
    population: 41000,
    county: "Worcester County",
    uniqueSentence:
      "Fitchburg is a growing city in north-central Massachusetts with an increasingly competitive market for home service businesses.",
  },
  {
    slug: "worcester-ma",
    name: "Worcester",
    state: "MA",
    region: "Central Massachusetts",
    population: 206000,
    county: "Worcester County",
    uniqueSentence:
      "Worcester is the second-largest city in New England and home to over 35,000 businesses — making it one of the most competitive local markets in Massachusetts.",
  },
  {
    slug: "gardner-ma",
    name: "Gardner",
    state: "MA",
    region: "Central Massachusetts",
    population: 21000,
    county: "Worcester County",
    uniqueSentence:
      "Gardner is the 'Chair City' of Massachusetts and serves as a regional hub for northern Worcester County, drawing customers from surrounding smaller towns.",
  },
  {
    slug: "athol-ma",
    name: "Athol",
    state: "MA",
    region: "Central Massachusetts",
    population: 11000,
    county: "Worcester County",
    uniqueSentence:
      "Athol is a small but tightly-knit community in north-central Massachusetts where word of mouth and local search visibility go hand in hand.",
  },
  {
    slug: "lunenburg-ma",
    name: "Lunenburg",
    state: "MA",
    region: "Central Massachusetts",
    population: 11000,
    county: "Worcester County",
    uniqueSentence:
      "Lunenburg is a residential town with a growing population of homeowners who rely on local trades for everything from HVAC to landscaping.",
  },
  {
    slug: "sterling-ma",
    name: "Sterling",
    state: "MA",
    region: "Central Massachusetts",
    population: 8000,
    county: "Worcester County",
    uniqueSentence:
      "Sterling is a small, affluent town in central Massachusetts where homeowners expect high-quality service and actively search for trusted local providers.",
  },
  {
    slug: "westminster-ma",
    name: "Westminster",
    state: "MA",
    region: "Central Massachusetts",
    population: 8000,
    county: "Worcester County",
    uniqueSentence:
      "Westminster is a growing residential community near Fitchburg and Leominster, where local service businesses compete for a loyal customer base.",
  },
  {
    slug: "princeton-ma",
    name: "Princeton",
    state: "MA",
    region: "Central Massachusetts",
    population: 4000,
    county: "Worcester County",
    uniqueSentence:
      "Princeton is a rural, high-income town on Wachusett Mountain where homeowners invest significantly in property maintenance and home improvement.",
  },
  {
    slug: "templeton-ma",
    name: "Templeton",
    state: "MA",
    region: "Central Massachusetts",
    population: 8000,
    county: "Worcester County",
    uniqueSentence:
      "Templeton is a small town in northern Worcester County where local businesses benefit from tight community ties and strong referral networks.",
  },
];
```

- [ ] **Step 2: Commit**

```bash
git add data/cities.ts
git commit -m "Add cities data for programmatic SEO (10 Central MA cities)"
```

---

## Task 5: Data Index with Helper Functions

**Files:**
- Create: `data/index.ts`

- [ ] **Step 1: Create the index file with re-exports and helpers**

```ts
// data/index.ts

export type { Service, Industry, City } from "./types";
export { services } from "./services";
export { industries } from "./industries";
export { cities } from "./cities";

import { services } from "./services";
import { industries } from "./industries";
import { cities } from "./cities";

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}

export function getIndustryBySlug(slug: string) {
  return industries.find((i) => i.slug === slug);
}

export function getCityBySlug(slug: string) {
  return cities.find((c) => c.slug === slug);
}

export function getNearbyCities(citySlug: string, limit = 5) {
  const city = getCityBySlug(citySlug);
  if (!city) return [];
  return cities
    .filter((c) => c.slug !== citySlug && c.region === city.region)
    .slice(0, limit);
}

export function getAllServiceSlugs() {
  return services.map((s) => s.slug);
}

export function getAllIndustrySlugs() {
  return industries.map((i) => i.slug);
}

export function getAllCitySlugs() {
  return cities.map((c) => c.slug);
}
```

- [ ] **Step 2: Verify the build compiles**

Run: `npx tsc --noEmit`
Expected: No errors.

- [ ] **Step 3: Commit**

```bash
git add data/index.ts
git commit -m "Add data index with re-exports and helper functions"
```

---

## Task 6: Breadcrumbs Component

**Files:**
- Create: `components/programmatic/Breadcrumbs.tsx`

- [ ] **Step 1: Create the breadcrumbs component**

This is a client component that renders breadcrumb navigation and a BreadcrumbList JSON-LD schema.

```tsx
// components/programmatic/Breadcrumbs.tsx
"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  const schemaItems = items.map((item, index) => ({
    "@type": "ListItem" as const,
    position: index + 1,
    name: item.label,
    item: `https://gradydigital.com${item.href}`,
  }));

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: schemaItems,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-sm text-white/40">
        {items.map((item, index) => (
          <span key={item.href} className="flex items-center gap-1.5">
            {index > 0 && <ChevronRight className="w-3.5 h-3.5" />}
            {index === items.length - 1 ? (
              <span className="text-white/60">{item.label}</span>
            ) : (
              <Link href={item.href} className="hover:text-white/70 transition-colors">
                {item.label}
              </Link>
            )}
          </span>
        ))}
      </nav>
    </>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add components/programmatic/Breadcrumbs.tsx
git commit -m "Add Breadcrumbs component with BreadcrumbList JSON-LD"
```

---

## Task 7: ProgrammaticHero Component

**Files:**
- Create: `components/programmatic/ProgrammaticHero.tsx`

- [ ] **Step 1: Create the hero component**

```tsx
// components/programmatic/ProgrammaticHero.tsx
"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import BlurIn from "@/components/BlurIn";
import SectionLabel from "@/components/SectionLabel";
import Breadcrumbs from "./Breadcrumbs";

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface ProgrammaticHeroProps {
  label: string;
  h1: string;
  subheadline: string;
  trustBar: string;
  breadcrumbs: BreadcrumbItem[];
}

export default function ProgrammaticHero({
  label,
  h1,
  subheadline,
  trustBar,
  breadcrumbs,
}: ProgrammaticHeroProps) {
  return (
    <section className="pt-36 pb-16 lg:pt-44 lg:pb-24 relative">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(ellipse at 30% 20%, rgba(108,106,246,0.2) 0%, transparent 60%)",
        }}
      />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <BlurIn>
          <Breadcrumbs items={breadcrumbs} />
        </BlurIn>
        <div className="mt-8">
          <BlurIn delay={0.05}>
            <SectionLabel>{label}</SectionLabel>
          </BlurIn>
          <BlurIn delay={0.1}>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white mt-6 leading-tight lg:leading-[1.2]">
              {h1}
            </h1>
          </BlurIn>
          <BlurIn delay={0.2}>
            <p className="text-white/70 text-lg leading-relaxed max-w-2xl mt-6">
              {subheadline}
            </p>
          </BlurIn>
          <BlurIn delay={0.3}>
            <div className="flex items-center gap-4 flex-wrap mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full px-5 py-3 bg-foreground text-background font-medium text-sm hover:bg-white/90 transition-colors duration-200"
              >
                Get a Free Strategy Call
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </BlurIn>
          <BlurIn delay={0.35}>
            <p className="text-white/40 text-sm mt-6">{trustBar}</p>
          </BlurIn>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add components/programmatic/ProgrammaticHero.tsx
git commit -m "Add ProgrammaticHero component for programmatic SEO pages"
```

---

## Task 8: ProgrammaticFAQ Component

**Files:**
- Create: `components/programmatic/ProgrammaticFAQ.tsx`

- [ ] **Step 1: Create the FAQ component with JSON-LD**

This reuses the same Framer Motion accordion pattern as the existing `FAQAccordion` but accepts FAQ items as props and renders FAQPage JSON-LD schema.

```tsx
// components/programmatic/ProgrammaticFAQ.tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export interface FAQItem {
  question: string;
  answer: string;
}

interface ProgrammaticFAQProps {
  heading: string;
  items: FAQItem[];
}

export default function ProgrammaticFAQ({
  heading,
  items,
}: ProgrammaticFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <h2 className="text-2xl md:text-3xl font-medium text-white mb-12">
          {heading}
        </h2>
        <div className="max-w-3xl">
          {items.map((item, index) => (
            <div key={index} className="border-b border-white/10">
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full flex items-center justify-between py-5 text-left"
              >
                <span className="text-base font-medium text-white pr-4">
                  {item.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-white/40 shrink-0 transition-transform duration-200 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <p className="text-white/60 text-sm leading-relaxed pb-5">
                      {item.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add components/programmatic/ProgrammaticFAQ.tsx
git commit -m "Add ProgrammaticFAQ component with FAQPage JSON-LD schema"
```

---

## Task 9: ProgrammaticCTA Component

**Files:**
- Create: `components/programmatic/ProgrammaticCTA.tsx`

- [ ] **Step 1: Create the CTA component**

```tsx
// components/programmatic/ProgrammaticCTA.tsx
"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import BlurIn from "@/components/BlurIn";

interface ProgrammaticCTAProps {
  heading: string;
  body: string;
}

export default function ProgrammaticCTA({
  heading,
  body,
}: ProgrammaticCTAProps) {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(108,106,246,0.15) 0%, transparent 70%)",
        }}
      />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 text-center">
        <BlurIn>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-white">
            {heading}
          </h2>
        </BlurIn>
        <BlurIn delay={0.1}>
          <p className="text-white/60 text-lg leading-relaxed max-w-2xl mx-auto mt-6">
            {body}
          </p>
        </BlurIn>
        <BlurIn delay={0.2}>
          <div className="flex items-center justify-center gap-4 flex-wrap mt-10">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full px-5 py-3 bg-foreground text-background font-medium text-sm hover:bg-white/90 transition-colors duration-200"
            >
              Book a Free Strategy Call
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </BlurIn>
        <BlurIn delay={0.3}>
          <div className="flex items-center justify-center gap-6 flex-wrap mt-8">
            <span className="text-white/40 text-sm">No contracts</span>
            <span className="text-white/40 text-sm">
              Free audit — no obligation
            </span>
            <span className="text-white/40 text-sm">Response within 24 hours</span>
          </div>
        </BlurIn>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add components/programmatic/ProgrammaticCTA.tsx
git commit -m "Add ProgrammaticCTA component for programmatic SEO pages"
```

---

## Task 10: InternalLinks Component

**Files:**
- Create: `components/programmatic/InternalLinks.tsx`

- [ ] **Step 1: Create the internal links component**

```tsx
// components/programmatic/InternalLinks.tsx
"use client";

import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import FadeUp from "@/components/FadeUp";

interface LinkItem {
  label: string;
  href: string;
}

interface InternalLinksProps {
  nearbyCities?: LinkItem[];
  relatedPages?: LinkItem[];
}

export default function InternalLinks({
  nearbyCities,
  relatedPages,
}: InternalLinksProps) {
  if (!nearbyCities?.length && !relatedPages?.length) return null;

  return (
    <section className="py-16 lg:py-24 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {nearbyCities && nearbyCities.length > 0 && (
          <FadeUp>
            <div className="mb-12">
              <h3 className="text-lg font-medium text-white mb-4 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-accent-light" />
                Also Serving Nearby Cities
              </h3>
              <div className="flex flex-wrap gap-3">
                {nearbyCities.map((city) => (
                  <Link
                    key={city.href}
                    href={city.href}
                    className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-white/70 hover:text-white hover:border-white/20 transition-colors"
                  >
                    {city.label}
                  </Link>
                ))}
              </div>
            </div>
          </FadeUp>
        )}
        {relatedPages && relatedPages.length > 0 && (
          <FadeUp delay={0.1}>
            <div>
              <h3 className="text-lg font-medium text-white mb-4">
                Related Services
              </h3>
              <div className="flex flex-col gap-2">
                {relatedPages.map((page) => (
                  <Link
                    key={page.href}
                    href={page.href}
                    className="inline-flex items-center gap-1.5 text-sm text-accent-light hover:text-white transition-colors"
                  >
                    {page.label}
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                ))}
              </div>
            </div>
          </FadeUp>
        )}
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add components/programmatic/InternalLinks.tsx
git commit -m "Add InternalLinks component for programmatic SEO cross-linking"
```

---

## Task 11: CityGrid, ServiceGrid, IndustryGrid Components

**Files:**
- Create: `components/programmatic/CityGrid.tsx`
- Create: `components/programmatic/ServiceGrid.tsx`
- Create: `components/programmatic/IndustryGrid.tsx`

- [ ] **Step 1: Create CityGrid**

```tsx
// components/programmatic/CityGrid.tsx
"use client";

import Link from "next/link";
import { MapPin } from "lucide-react";
import { StaggerParent, StaggerChild } from "@/components/StaggerParent";

interface CityLink {
  name: string;
  state: string;
  href: string;
}

interface CityGridProps {
  heading: string;
  cities: CityLink[];
}

export default function CityGrid({ heading, cities }: CityGridProps) {
  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <h2 className="text-2xl md:text-3xl font-medium text-white mb-10">
          {heading}
        </h2>
        <StaggerParent className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {cities.map((city) => (
            <StaggerChild key={city.href}>
              <Link
                href={city.href}
                className="flex items-center gap-2 rounded-2xl bg-card border border-card-border p-4 text-sm text-white/70 hover:text-white hover:border-white/20 transition-colors"
              >
                <MapPin className="w-4 h-4 text-accent-light shrink-0" />
                {city.name}, {city.state}
              </Link>
            </StaggerChild>
          ))}
        </StaggerParent>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Create ServiceGrid**

```tsx
// components/programmatic/ServiceGrid.tsx
"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { StaggerParent, StaggerChild } from "@/components/StaggerParent";

interface ServiceLink {
  name: string;
  description: string;
  href: string;
}

interface ServiceGridProps {
  heading: string;
  services: ServiceLink[];
}

export default function ServiceGrid({ heading, services }: ServiceGridProps) {
  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <h2 className="text-2xl md:text-3xl font-medium text-white mb-10">
          {heading}
        </h2>
        <StaggerParent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <StaggerChild key={service.href}>
              <Link
                href={service.href}
                className="block rounded-2xl bg-card border border-card-border p-6 hover:border-white/20 transition-colors group"
              >
                <h3 className="text-lg font-medium text-white mb-2">
                  {service.name}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <span className="inline-flex items-center gap-1.5 text-sm text-accent-light group-hover:text-white transition-colors">
                  Learn more
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            </StaggerChild>
          ))}
        </StaggerParent>
      </div>
    </section>
  );
}
```

- [ ] **Step 3: Create IndustryGrid**

```tsx
// components/programmatic/IndustryGrid.tsx
"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { StaggerParent, StaggerChild } from "@/components/StaggerParent";

interface IndustryLink {
  name: string;
  href: string;
}

interface IndustryGridProps {
  heading: string;
  industries: IndustryLink[];
}

export default function IndustryGrid({
  heading,
  industries,
}: IndustryGridProps) {
  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <h2 className="text-2xl md:text-3xl font-medium text-white mb-10">
          {heading}
        </h2>
        <StaggerParent className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {industries.map((industry) => (
            <StaggerChild key={industry.href}>
              <Link
                href={industry.href}
                className="flex items-center justify-between rounded-2xl bg-card border border-card-border p-6 hover:border-white/20 transition-colors group"
              >
                <span className="text-lg font-medium text-white">
                  {industry.name}
                </span>
                <ArrowRight className="w-4 h-4 text-white/40 group-hover:text-accent-light transition-colors" />
              </Link>
            </StaggerChild>
          ))}
        </StaggerParent>
      </div>
    </section>
  );
}
```

- [ ] **Step 4: Commit**

```bash
git add components/programmatic/CityGrid.tsx components/programmatic/ServiceGrid.tsx components/programmatic/IndustryGrid.tsx
git commit -m "Add CityGrid, ServiceGrid, IndustryGrid components for programmatic pages"
```

---

## Task 12: Type 1 Page — Service + Industry + City (90 pages)

This is the primary page type and the most complex. It renders the full copy template from `programmatic_seo.md` Section "Template 1A".

**Files:**
- Create: `app/(programmatic)/[service]/[industry]/[city]/page.tsx`

- [ ] **Step 1: Create the Type 1 page**

```tsx
// app/(programmatic)/[service]/[industry]/[city]/page.tsx

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
      answer: `For most ${industry.name.toLowerCase()} in ${city.name}, you can expect to see early movement in Google rankings within 60–90 days of starting ${service.name.toLowerCase()}. Full results — consistent placement in the local map pack and sustained organic traffic — typically develop over 4–6 months. ${service.name} builds on itself: the longer your ${city.name} ${industry.singular} is active in the program, the stronger your visibility gets and the harder it becomes for competitors to unseat you.`,
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
      answer: `Most ${service.name.toLowerCase()} agencies take on any client in any industry. Grady Digital works exclusively with local service businesses — trades, home services, and similar industries like ${industry.name.toLowerCase()}. That means every tactic, every tool, and every campaign we run for ${city.name} clients is built around what works for service businesses specifically. We're also based right here in Central Massachusetts, so we understand the ${city.name} market in a way that remote agencies simply don't.`,
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
        subheadline={`More leads. Higher Google rankings. A stronger online presence — built specifically for ${industry.name.toLowerCase()} in ${city.name} and the surrounding ${city.county} area.`}
        trustBar={`Grady Digital \u00B7 Leominster, MA \u00B7 Serving ${city.county} and beyond`}
        breadcrumbs={breadcrumbs}
      />
      <Type1Content service={service} industry={industry} city={city} />
      <ProgrammaticCTA
        heading={`Ready to Grow Your ${city.name} ${industry.shortName} Business?`}
        body={`If you're serious about getting more customers in ${city.name} and ${city.county}, let's talk. We'll look at your current online presence, show you exactly where the gaps are, and put together a ${service.name.toLowerCase()} plan built for your ${industry.singular}.`}
      />
      <ProgrammaticFAQ
        heading={`Frequently Asked Questions — ${service.name} for ${industry.name} in ${city.name}`}
        items={faqItems}
      />
      <InternalLinks
        nearbyCities={nearbyCityLinks}
        relatedPages={relatedPages}
      />
    </main>
  );
}
```

- [ ] **Step 2: Create the Type1Content client component**

This component renders the body sections (intro, pain points, service overview, why Grady, outcomes) with Framer Motion animations.

Create file: `app/(programmatic)/[service]/[industry]/[city]/Type1Content.tsx`

```tsx
// app/(programmatic)/[service]/[industry]/[city]/Type1Content.tsx
"use client";

import { CheckCircle2 } from "lucide-react";
import BlurIn from "@/components/BlurIn";
import FadeUp from "@/components/FadeUp";
import type { Service, Industry, City } from "@/data";

interface Type1ContentProps {
  service: Service;
  industry: Industry;
  city: City;
}

export default function Type1Content({
  service,
  industry,
  city,
}: Type1ContentProps) {
  return (
    <>
      {/* Section: Intro */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <BlurIn>
            <div className="max-w-3xl text-white/70 text-base leading-relaxed space-y-4">
              <p>
                If you run a {industry.singular} in {city.name},{" "}
                {city.state}, you already know how competitive it can be to
                stand out online. Homeowners and property managers in{" "}
                {city.name} are searching Google every day for{" "}
                {industry.name.toLowerCase()} services — and if your business
                isn&apos;t ranking, those calls are going to your competitors.
              </p>
              <p>
                Grady Digital specializes in {service.name.toLowerCase()} for
                local service businesses across {city.county} and greater{" "}
                {city.state}. We work exclusively with trades and home service
                companies, which means every strategy we build is designed
                around what actually moves the needle for{" "}
                {industry.name.toLowerCase()} — not generic tactics recycled
                from e-commerce or SaaS.
              </p>
              <p>
                Whether you&apos;re a single-truck {industry.singular} trying
                to grow, or an established {city.name} operation looking to
                dominate your local market, we have a{" "}
                {service.name.toLowerCase()} approach that fits where you are
                and where you want to go. {city.uniqueSentence}
              </p>
            </div>
          </BlurIn>
        </div>
      </section>

      {/* Section: Pain Points */}
      <section className="py-24 lg:py-32 bg-white/[0.02] border-y border-white/8">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <FadeUp>
            <h2 className="text-2xl md:text-3xl font-medium text-white mb-4">
              Do Any of These Sound Familiar for Your {city.name}{" "}
              {industry.shortName} Business?
            </h2>
            <p className="text-white/60 text-base leading-relaxed max-w-2xl mb-8">
              You&apos;re running a great {industry.singular} in {city.name} —
              but your online presence isn&apos;t keeping up. Here&apos;s what
              we hear most from {industry.name.toLowerCase()} business owners
              before they start working with us:
            </p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <ul className="space-y-3 max-w-2xl">
              {industry.painPoints.map((point, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-white/70 text-base"
                >
                  <CheckCircle2 className="w-5 h-5 text-accent-light shrink-0 mt-0.5" />
                  {point}
                </li>
              ))}
            </ul>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="text-white/60 text-base mt-8 max-w-2xl">
              If even one of these hits close to home,{" "}
              {service.name.toLowerCase()} is exactly what your {city.name}{" "}
              {industry.singular} needs.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Section: Service Overview */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <FadeUp>
            <h2 className="text-2xl md:text-3xl font-medium text-white mb-4">
              What {service.name} Looks Like for {industry.name} in {city.name}
            </h2>
            <p className="text-white/60 text-base leading-relaxed max-w-3xl mb-4">
              {service.name} for {industry.name.toLowerCase()} isn&apos;t
              one-size-fits-all. What works for a national brand doesn&apos;t
              work for a local {industry.singular} trying to win customers in{" "}
              {city.name} and nearby towns. Here&apos;s how Grady Digital
              approaches {service.name.toLowerCase()} specifically for{" "}
              {industry.name.toLowerCase()} in your market:
            </p>
            <p className="text-white/60 text-base leading-relaxed max-w-3xl mb-8">
              {service.description}
            </p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p className="text-white/80 text-base font-medium mb-4">
              When you work with us, your {service.name.toLowerCase()}{" "}
              engagement includes:
            </p>
            <ul className="space-y-3 max-w-2xl mb-8">
              {service.includes.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-white/70 text-base"
                >
                  <CheckCircle2 className="w-5 h-5 text-accent-light shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="text-white/60 text-base leading-relaxed max-w-3xl">
              Everything is tailored to the {city.name}, {city.state} market —
              we&apos;re not running a cookie-cutter playbook. We look at what
              your competitors in {city.name} and {city.county} are doing, find
              the gaps, and build a strategy that puts your {industry.singular}{" "}
              in front of the right people at the right time.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Section: Why Grady Digital */}
      <section className="py-24 lg:py-32 bg-white/[0.02] border-y border-white/8">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <FadeUp>
            <h2 className="text-2xl md:text-3xl font-medium text-white mb-10">
              Why {city.name} {industry.name} Work With Grady Digital
            </h2>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
            <FadeUp delay={0.05}>
              <div>
                <h3 className="text-lg font-medium text-white mb-2">
                  We only work with local service businesses.
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  We don&apos;t work with e-commerce brands, tech startups, or
                  national chains. Every client we serve is a local service
                  business — {industry.name.toLowerCase()},{" "}
                  plumbing, electrical, landscaping, and similar trades. That
                  focus means our strategies are battle-tested specifically for
                  companies like yours.
                </p>
              </div>
            </FadeUp>
            <FadeUp delay={0.1}>
              <div>
                <h3 className="text-lg font-medium text-white mb-2">
                  We&apos;re based in Central Massachusetts.
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  We&apos;re not some faceless agency in another state.
                  We&apos;re based in Leominster, MA — close to {city.name} —
                  and we understand the {city.county} market, the local
                  competition, and what {city.name} customers actually respond
                  to.
                </p>
              </div>
            </FadeUp>
            <FadeUp delay={0.15}>
              <div>
                <h3 className="text-lg font-medium text-white mb-2">
                  We use AI to move faster and deliver more.
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  Our team uses AI-powered workflows to build, optimize, and
                  report faster than traditional agencies — without sacrificing
                  quality. That means you get more done for your{" "}
                  {service.name.toLowerCase()} budget.
                </p>
              </div>
            </FadeUp>
            <FadeUp delay={0.2}>
              <div>
                <h3 className="text-lg font-medium text-white mb-2">
                  No long-term contracts.
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  We earn your business every month. If you&apos;re not seeing
                  results from your {city.name}{" "}
                  {service.name.toLowerCase()} campaign, you&apos;re not locked
                  in.
                </p>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Section: Expected Outcomes */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <FadeUp>
            <h2 className="text-2xl md:text-3xl font-medium text-white mb-4">
              What {city.name} {industry.name} Can Expect from {service.name}
            </h2>
            <p className="text-white/60 text-base leading-relaxed max-w-2xl mb-8">
              Here&apos;s what {industry.name.toLowerCase()} in {city.name}{" "}
              typically experience after partnering with Grady Digital for{" "}
              {service.name.toLowerCase()}:
            </p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <ul className="space-y-3 max-w-2xl mb-8">
              {service.outcomes.map((outcome, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-white/70 text-base"
                >
                  <CheckCircle2 className="w-5 h-5 text-accent-light shrink-0 mt-0.5" />
                  {outcome}
                </li>
              ))}
            </ul>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="text-white/60 text-base leading-relaxed max-w-2xl">
              Most {city.name} {industry.name.toLowerCase()} clients see
              measurable movement within the first 60–90 days.{" "}
              {service.name} is a longer-term investment — the results compound
              month over month as your authority in the {city.name} market
              grows.
            </p>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
```

- [ ] **Step 3: Verify the build compiles**

Run: `npx next build`
Expected: All 90 Type 1 pages are generated with no errors.

- [ ] **Step 4: Commit**

```bash
git add "app/(programmatic)/[service]/[industry]/[city]/page.tsx" "app/(programmatic)/[service]/[industry]/[city]/Type1Content.tsx"
git commit -m "Add Type 1 programmatic pages: service + industry + city (90 pages)"
```

---

## Task 13: Type 3 Page — Service + Industry (9 pages)

**Files:**
- Create: `app/(programmatic)/[service]/[industry]/page.tsx`

- [ ] **Step 1: Create the Type 3 page**

```tsx
// app/(programmatic)/[service]/[industry]/page.tsx

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
      answer: `We work exclusively with local service businesses like ${industry.name.toLowerCase()}. Every tactic, tool, and campaign we run is built around what works for trades and home services specifically. We're also based in Central Massachusetts, so we understand the local market in a way that remote agencies don't.`,
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
        heading={`FAQ — ${service.name} for ${industry.name}`}
        items={faqItems}
      />
    </main>
  );
}
```

- [ ] **Step 2: Create Type3Content client component**

Create file: `app/(programmatic)/[service]/[industry]/Type3Content.tsx`

```tsx
// app/(programmatic)/[service]/[industry]/Type3Content.tsx
"use client";

import { CheckCircle2 } from "lucide-react";
import BlurIn from "@/components/BlurIn";
import FadeUp from "@/components/FadeUp";
import type { Service, Industry } from "@/data";

interface Type3ContentProps {
  service: Service;
  industry: Industry;
}

export default function Type3Content({
  service,
  industry,
}: Type3ContentProps) {
  return (
    <>
      {/* Pain Points */}
      <section className="py-24 lg:py-32 bg-white/[0.02] border-y border-white/8">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <FadeUp>
            <h2 className="text-2xl md:text-3xl font-medium text-white mb-4">
              Common Challenges {industry.name} Face Online
            </h2>
          </FadeUp>
          <FadeUp delay={0.1}>
            <ul className="space-y-3 max-w-2xl mt-6">
              {industry.painPoints.map((point, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-white/70 text-base"
                >
                  <CheckCircle2 className="w-5 h-5 text-accent-light shrink-0 mt-0.5" />
                  {point}
                </li>
              ))}
            </ul>
          </FadeUp>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <FadeUp>
            <h2 className="text-2xl md:text-3xl font-medium text-white mb-4">
              How {service.name} Works for {industry.name}
            </h2>
            <p className="text-white/60 text-base leading-relaxed max-w-3xl mb-8">
              {service.description} Here&apos;s how we apply{" "}
              {service.name.toLowerCase()} specifically for{" "}
              {industry.name.toLowerCase()}:
            </p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <ul className="space-y-3 max-w-2xl mb-8">
              {service.includes.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-white/70 text-base"
                >
                  <CheckCircle2 className="w-5 h-5 text-accent-light shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </FadeUp>
          <BlurIn delay={0.2}>
            <p className="text-white/60 text-base leading-relaxed max-w-3xl">
              We currently serve {industry.name.toLowerCase()} across Central
              Massachusetts, Greater Boston, Southern New Hampshire, Rhode
              Island, and Connecticut.
            </p>
          </BlurIn>
        </div>
      </section>
    </>
  );
}
```

- [ ] **Step 3: Commit**

```bash
git add "app/(programmatic)/[service]/[industry]/page.tsx" "app/(programmatic)/[service]/[industry]/Type3Content.tsx"
git commit -m "Add Type 3 programmatic pages: service + industry (9 pages)"
```

---

## Task 14: Type 2 Page — Service + City (30 pages)

**Files:**
- Create: `app/(programmatic)/[service]/[city]/page.tsx`

- [ ] **Step 1: Create the Type 2 page**

```tsx
// app/(programmatic)/[service]/[city]/page.tsx

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
        heading={`FAQ — ${service.name} in ${city.name}, ${city.state}`}
        items={faqItems}
      />
    </main>
  );
}
```

- [ ] **Step 2: Create Type2Content client component**

Create file: `app/(programmatic)/[service]/[city]/Type2Content.tsx`

```tsx
// app/(programmatic)/[service]/[city]/Type2Content.tsx
"use client";

import { CheckCircle2 } from "lucide-react";
import FadeUp from "@/components/FadeUp";
import type { Service, City } from "@/data";

interface Type2ContentProps {
  service: Service;
  city: City;
}

export default function Type2Content({ service, city }: Type2ContentProps) {
  return (
    <>
      {/* Service Overview */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <FadeUp>
            <h2 className="text-2xl md:text-3xl font-medium text-white mb-4">
              {service.name} for {city.name} Businesses
            </h2>
            <p className="text-white/60 text-base leading-relaxed max-w-3xl mb-8">
              {service.description} Here&apos;s what&apos;s included when you
              work with Grady Digital on {service.name.toLowerCase()} in{" "}
              {city.name}:
            </p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <ul className="space-y-3 max-w-2xl mb-8">
              {service.includes.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-white/70 text-base"
                >
                  <CheckCircle2 className="w-5 h-5 text-accent-light shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="text-white/60 text-base leading-relaxed max-w-3xl">
              {city.uniqueSentence}
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Why Grady */}
      <section className="py-24 lg:py-32 bg-white/[0.02] border-y border-white/8">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <FadeUp>
            <h2 className="text-2xl md:text-3xl font-medium text-white mb-10">
              Why {city.name} Businesses Choose Grady Digital
            </h2>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl">
            <FadeUp delay={0.05}>
              <div>
                <h3 className="text-lg font-medium text-white mb-2">
                  Local service business focus
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  We work exclusively with trades, home services, and local
                  businesses. Our {service.name.toLowerCase()} strategies are
                  built for companies like yours.
                </p>
              </div>
            </FadeUp>
            <FadeUp delay={0.1}>
              <div>
                <h3 className="text-lg font-medium text-white mb-2">
                  Based in Central Massachusetts
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  We&apos;re in Leominster, MA — close to {city.name}. We
                  understand the {city.county} market and what local customers
                  respond to.
                </p>
              </div>
            </FadeUp>
            <FadeUp delay={0.15}>
              <div>
                <h3 className="text-lg font-medium text-white mb-2">
                  No long-term contracts
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  Month-to-month. If you&apos;re not seeing results, you&apos;re
                  not locked in. We earn your business every month.
                </p>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>
    </>
  );
}
```

- [ ] **Step 3: Commit**

```bash
git add "app/(programmatic)/[service]/[city]/page.tsx" "app/(programmatic)/[service]/[city]/Type2Content.tsx"
git commit -m "Add Type 2 programmatic pages: service + city (30 pages)"
```

---

## Task 15: Type 4 Page — Industry Hub (3 pages)

**Files:**
- Create: `app/(programmatic)/industries/[industry]/page.tsx`

- [ ] **Step 1: Create the Type 4 page**

```tsx
// app/(programmatic)/industries/[industry]/page.tsx

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
  const description = `Websites, local SEO, AI automation, and more — built specifically for ${industry.name.toLowerCase()}. Get more leads and grow your business with Grady Digital.`;

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
      answer: `We offer a full suite of digital marketing services for ${industry.name.toLowerCase()}: website design, local SEO, Google Business Profile management, AI automation, and more. Each service is built around what works for ${industry.name.toLowerCase()} specifically — not generic tactics.`,
    },
    {
      question: `How long does it take to see results for a ${industry.singular}?`,
      answer: `Most ${industry.name.toLowerCase()} see measurable improvements within 60–90 days. Full results — consistent Google Maps placement, sustained organic traffic, and a reliable lead pipeline — typically develop over 4–6 months. The results compound over time.`,
    },
    {
      question: `How much does digital marketing cost for a ${industry.singular}?`,
      answer: `Grady Digital offers flat monthly pricing with no long-term contracts. The cost depends on which services you need and the scope of your service area. Schedule a free strategy call and we'll give you a straight number based on your ${industry.singular}'s specific situation.`,
    },
    {
      question: `Why should a ${industry.singular} choose Grady Digital over other agencies?`,
      answer: `We work exclusively with local service businesses like ${industry.name.toLowerCase()}. We're based in Central Massachusetts, we don't outsource, and you work directly with the person building your system. No account managers, no fluff — just strategies that work for ${industry.name.toLowerCase()}.`,
    },
  ];

  return (
    <main>
      <ProgrammaticHero
        label={`${industry.shortName} Digital Marketing`}
        h1={`Digital Marketing for ${industry.name}`}
        subheadline={`Running a ${industry.singular} means your time is spent on the job, not online. But your customers are searching online — and if your business isn't showing up, you're leaving work on the table. Grady Digital works exclusively with local service businesses like yours.`}
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
        heading={`FAQ — Digital Marketing for ${industry.name}`}
        items={faqItems}
      />
    </main>
  );
}
```

- [ ] **Step 2: Create Type4Content client component**

Create file: `app/(programmatic)/industries/[industry]/Type4Content.tsx`

```tsx
// app/(programmatic)/industries/[industry]/Type4Content.tsx
"use client";

import { CheckCircle2 } from "lucide-react";
import FadeUp from "@/components/FadeUp";
import type { Industry } from "@/data";

interface Type4ContentProps {
  industry: Industry;
}

export default function Type4Content({ industry }: Type4ContentProps) {
  return (
    <section className="py-24 lg:py-32 bg-white/[0.02] border-y border-white/8">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <FadeUp>
          <h2 className="text-2xl md:text-3xl font-medium text-white mb-4">
            The Digital Marketing Challenges {industry.name} Face
          </h2>
          <p className="text-white/60 text-base leading-relaxed max-w-3xl mb-8">
            We understand the {industry.shortName.toLowerCase()} industry:
            seasonal demand swings, reputation-driven sales cycles, and the
            challenge of competing against bigger companies with bigger marketing
            budgets. Here&apos;s what we hear most:
          </p>
        </FadeUp>
        <FadeUp delay={0.1}>
          <ul className="space-y-3 max-w-2xl">
            {industry.painPoints.map((point, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-white/70 text-base"
              >
                <CheckCircle2 className="w-5 h-5 text-accent-light shrink-0 mt-0.5" />
                {point}
              </li>
            ))}
          </ul>
        </FadeUp>
      </div>
    </section>
  );
}
```

- [ ] **Step 3: Commit**

```bash
git add "app/(programmatic)/industries/[industry]/page.tsx" "app/(programmatic)/industries/[industry]/Type4Content.tsx"
git commit -m "Add Type 4 programmatic pages: industry hubs (3 pages)"
```

---

## Task 16: Update Sitemap

**Files:**
- Modify: `app/sitemap.ts`

- [ ] **Step 1: Update the sitemap to include all programmatic URLs**

Replace the entire contents of `app/sitemap.ts`:

```ts
// app/sitemap.ts

import type { MetadataRoute } from "next";
import { services, industries, cities } from "@/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://gradydigital.com";

  // Core site pages
  const corePages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/five-minute-window-speed-to-lead`,
      lastModified: new Date("2026-03-29"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/ai-receptionist-local-business`,
      lastModified: new Date("2026-01-15"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/local-seo-checklist`,
      lastModified: new Date("2026-02-03"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/ai-chatbot-lessons`,
      lastModified: new Date("2026-03-01"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date("2026-01-01"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date("2026-01-01"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  // Type 4: Industry Hub pages
  const industryHubPages: MetadataRoute.Sitemap = industries.map((i) => ({
    url: `${baseUrl}/industries/${i.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 1.0,
  }));

  // Type 1: Service + Industry + City pages
  const type1Pages: MetadataRoute.Sitemap = [];
  for (const s of services) {
    for (const i of industries) {
      for (const c of cities) {
        type1Pages.push({
          url: `${baseUrl}/${s.slug}/${i.slug}/${c.slug}`,
          lastModified: new Date(),
          changeFrequency: "monthly" as const,
          priority: 0.9,
        });
      }
    }
  }

  // Type 2: Service + City pages
  const type2Pages: MetadataRoute.Sitemap = [];
  for (const s of services) {
    for (const c of cities) {
      type2Pages.push({
        url: `${baseUrl}/${s.slug}/${c.slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.8,
      });
    }
  }

  // Type 3: Service + Industry pages
  const type3Pages: MetadataRoute.Sitemap = [];
  for (const s of services) {
    for (const i of industries) {
      type3Pages.push({
        url: `${baseUrl}/${s.slug}/${i.slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.8,
      });
    }
  }

  return [
    ...corePages,
    ...industryHubPages,
    ...type1Pages,
    ...type2Pages,
    ...type3Pages,
  ];
}
```

- [ ] **Step 2: Commit**

```bash
git add app/sitemap.ts
git commit -m "Update sitemap to dynamically generate all programmatic SEO URLs"
```

---

## Task 17: Build Verification

- [ ] **Step 1: Run the full build**

Run: `npx next build`
Expected: Build succeeds with 132 programmatic pages generated (90 + 30 + 9 + 3). Zero TypeScript errors.

- [ ] **Step 2: Spot-check pages in dev mode**

Run: `npx next dev`

Check these URLs in a browser:
- `http://localhost:3000/local-seo/hvac/worcester-ma` (Type 1)
- `http://localhost:3000/website-design/leominster-ma` (Type 2)
- `http://localhost:3000/ai-automation/plumbers` (Type 3)
- `http://localhost:3000/industries/hvac` (Type 4)
- `http://localhost:3000/services` (existing page still works)
- `http://localhost:3000/about` (existing page still works)

Verify:
- Content renders correctly with all variables interpolated
- Framer Motion animations play on scroll
- JSON-LD schemas visible in page source (View Source)
- Internal links point to valid pages
- Breadcrumbs render correctly
- Disable JavaScript in browser — confirm all text content is visible (noscript fallback)

- [ ] **Step 3: Check that no existing routes are broken**

Visit all existing routes and confirm they render:
- `/`, `/services`, `/about`, `/contact`, `/blog`, `/faq`, `/privacy`, `/terms`

- [ ] **Step 4: Commit any fixes if needed, then final commit**

```bash
git add -A
git commit -m "Programmatic SEO Phase 1: 132 pages across 4 page types

- 90 Type 1 pages (service + industry + city)
- 30 Type 2 pages (service + city)
- 9 Type 3 pages (service + industry)
- 3 Type 4 pages (industry hubs)
- Dynamic sitemap with all programmatic URLs
- JSON-LD schema (Service, FAQPage, BreadcrumbList) on all pages
- Internal cross-linking between all page types"
```

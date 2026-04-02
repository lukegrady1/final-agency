# Programmatic SEO — Phase 1 Design Spec

## Scope

Build the first rollout of programmatic SEO pages for gradydigital.com.

**Subset:**
- 3 services: Local SEO, Website Design, AI Automation
- 3 industries: HVAC, Plumbing, Landscaping
- 10 cities: Central MA (Leominster, Fitchburg, Worcester, Gardner, Athol, Lunenburg, Sterling, Westminster, Princeton, Templeton)

**Page counts:**
| Type | Formula | Count |
|---|---|---|
| Type 1: Service + Industry + City | 3 x 3 x 10 | 90 |
| Type 2: Service + City | 3 x 10 | 30 |
| Type 3: Service + Industry | 3 x 3 | 9 |
| Type 4: Industry Hub | 3 | 3 |
| **Total** | | **132** |

## Source of Truth

All data, copy templates, URL patterns, heading hierarchy, keyword density targets, FAQ templates, JSON-LD schemas, and internal linking rules are defined in `/programmatic_seo.md`. This spec does not duplicate that content — it defines HOW to implement it.

## Architecture

### Route Group

All programmatic routes live inside an `(programmatic)` route group. The parentheses make it invisible in the URL — `/local-seo/hvac/worcester-ma` works as expected.

```
app/
  (programmatic)/
    [service]/
      [industry]/
        [city]/
          page.tsx       <- Type 1: /local-seo/hvac/worcester-ma
        page.tsx         <- Type 3: /local-seo/hvac
      [city]/
        page.tsx         <- Type 2: /local-seo/worcester-ma
    industries/
      [industry]/
        page.tsx         <- Type 4: /industries/hvac
```

Each page uses `generateStaticParams()` to pre-render all valid combinations at build time. Any param combination not in the data returns `notFound()`.

### Data Layer

```
data/
  services.ts      — Service[] array (3 services, typed)
  industries.ts    — Industry[] array (3 industries, typed)
  cities.ts        — City[] array (10 cities, typed, includes uniqueSentence)
  index.ts         — re-exports + helper functions
```

**Types:**

```ts
interface Service {
  slug: string
  name: string
  shortName: string
  headline: string
  description: string
  painPoints: string[]
  outcomes: string[]
  includes: string[]
  variations: string[]   // semantic keyword variations
}

interface Industry {
  slug: string
  name: string
  singular: string
  shortName: string
  keywords: string[]
  painPoints: string[]
  trustSignals: string[]
}

interface City {
  slug: string
  name: string
  state: string
  region: string
  population: number
  county: string
  uniqueSentence: string
}
```

**Helper functions in `data/index.ts`:**
- `getServiceBySlug(slug: string): Service | undefined`
- `getIndustryBySlug(slug: string): Industry | undefined`
- `getCityBySlug(slug: string): City | undefined`
- `getNearbyCities(citySlug: string, limit?: number): City[]` — returns other cities in same region
- `getAllServiceSlugs(): string[]`
- `getAllIndustrySlugs(): string[]`
- `getAllCitySlugs(): string[]`

## Page Implementation

### Client Components with SSR Content

All programmatic pages follow the same pattern used by existing site pages:

- Pages CAN use `"use client"`, Framer Motion, and `useEffect`
- All text content is rendered in the initial HTML (not injected by JS)
- Framer Motion animations use `initial` styles (e.g., `opacity: 0`) as progressive enhancement
- The existing `<noscript>` CSS override in `app/layout.tsx` forces all content visible when JS is disabled — this handles Googlebot crawling without JS

**Reuse existing animation components:** `BlurIn`, `FadeUp`, `SplitText`, `StaggerParent`/`StaggerChild` from the current site.

### Shared Components for Programmatic Pages

New components in `components/programmatic/`:

- `ProgrammaticHero.tsx` — Hero section with H1, subheadline, CTA, trust bar
- `PainPointsSection.tsx` — "Does this sound familiar?" with bullet list
- `ServiceOverviewSection.tsx` — Service description + includes list
- `WhyGradySection.tsx` — 4 differentiator blocks
- `OutcomesSection.tsx` — Expected outcomes + timeline
- `ProgrammaticCTA.tsx` — CTA with form link + phone
- `ProgrammaticFAQ.tsx` — 4 FAQs with Framer Motion AnimatePresence (same pattern as existing FAQAccordion)
- `InternalLinks.tsx` — Nearby cities + related pages
- `Breadcrumbs.tsx` — Breadcrumb nav with BreadcrumbList schema
- `CityGrid.tsx` — Grid of city links (used in Type 3 and Type 4 pages)
- `ServiceGrid.tsx` — Grid of service cards (used in Type 4 pages)
- `IndustryGrid.tsx` — Grid of industry cards (used in Type 2 pages)

### Page Structure by Type

**Type 1 — Service + Industry + City** (primary, 90 pages):
1. Breadcrumbs
2. ProgrammaticHero (H1: "[Service] for [Industry] in [City], [State]")
3. Intro paragraph (with uniqueSentence)
4. PainPointsSection
5. ServiceOverviewSection
6. WhyGradySection
7. OutcomesSection
8. ProgrammaticCTA
9. ProgrammaticFAQ (4 FAQs, FAQPage JSON-LD)
10. InternalLinks (nearby cities + parent pages)

**Type 2 — Service + City** (30 pages):
1. Breadcrumbs
2. Hero (H1: "[Service] in [City], [State]")
3. IndustryGrid (links to Type 1 pages)
4. Service overview
5. WhyGradySection
6. ProgrammaticCTA
7. ProgrammaticFAQ
8. InternalLinks

**Type 3 — Service + Industry** (9 pages):
1. Breadcrumbs
2. Hero (H1: "[Service] for [Industry]")
3. Pain points
4. Service details for this industry
5. CityGrid (links to Type 1 pages)
6. ProgrammaticCTA
7. ProgrammaticFAQ

**Type 4 — Industry Hub** (3 pages):
1. Breadcrumbs
2. Hero (H1: "Digital Marketing for [Industry]")
3. Industry challenges
4. ServiceGrid (6 service cards linking to Type 3 pages)
5. CityGrid
6. ProgrammaticCTA
7. ProgrammaticFAQ

## SEO & Metadata

### Per-page metadata (via `generateMetadata`):
- `title`: "[Service] for [Industry] in [City], [State] | Grady Digital" (max 60 chars)
- `description`: Dynamic, includes service + industry + city + CTA (max 155 chars)
- `canonical`: Full URL
- `robots`: `index, follow`
- `openGraph`: title, description, url

### JSON-LD schemas per page:
1. **Service schema** — service name, provider (LocalBusiness), areaServed
2. **FAQPage schema** — 4 question/answer pairs
3. **BreadcrumbList schema** — navigation path

### Sitemap
Update existing `app/sitemap.ts` to dynamically generate URLs from the data arrays. Priority tiers:
- 1.0: Industry hub pages + core site pages
- 0.9: Type 1 pages (top services/industries in primary market)
- 0.8: Type 2 and Type 3 pages

### Robots
No changes needed — existing `app/robots.ts` allows `/` and blocks `/api/`.

## Internal Linking

Every Type 1 page links to:
- Parent Type 2 page (same service + city)
- Parent Type 3 page (same service + industry)
- Parent Industry Hub page
- 4-5 nearby city variants (same service + industry)

Type 2 pages link to all Type 1 pages for that service + city combo.
Type 3 pages link to all Type 1 pages for that service + industry combo.
Type 4 pages link to all Type 3 pages for that industry.

## Styling

Match existing site design system exactly:
- Background: `#070612`
- Cards: `bg-card border border-card-border rounded-2xl`
- Section spacing: `py-24 lg:py-32`, container `max-w-7xl mx-auto px-6 lg:px-12`
- Typography: DM Sans for body, Playfair Display italic for display elements
- Accent color for icons, links, badges: `accent` / `accent-light`
- FAQ items: same style as existing FAQAccordion

## What This Spec Does NOT Cover

- CMS integration (all data is in TypeScript files)
- Analytics event tracking on programmatic pages
- A/B testing of copy variations
- Expansion beyond Phase 1 (remaining services, industries, cities)
- Blog content tied to programmatic pages

## Scaling to Full Rollout

After Phase 1 is live and indexed:
1. Add remaining 3 services to `data/services.ts`
2. Add remaining 5 industries to `data/industries.ts`
3. Add secondary + tertiary cities to `data/cities.ts`
4. Rebuild — `generateStaticParams` handles the rest automatically
5. No template or routing changes needed

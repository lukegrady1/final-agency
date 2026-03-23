# CLAUDE.md — Grady Digital Website Rebuild
## Next.js 14+ App Router | Full-Site Build Instructions

This document is the single source of truth for Claude Code. Read every section
before writing a single line of code. Follow specifications exactly.

---

## 0. MISSION BRIEF

You are rebuilding the Grady Digital marketing website from scratch using
Next.js 14+ (App Router), Tailwind CSS, Framer Motion, and HLS video. The new
site must carry over all content from the existing site (gradydigital.com) but
present it in a dramatically upgraded dark, cinematic design system anchored by
the hero section specified below.

Luke Grady is the founder. He is a software engineer who builds AI chatbots,
voice agents, workflow automation, websites, and SEO systems for local service
businesses. The brand voice is direct, confident, technically credible, and
human — no agency fluff.

---

## 1. TECH STACK

| Layer | Choice |
|---|---|
| Framework | Next.js 14+ (App Router) |
| Language | TypeScript (strict mode) |
| Styling | Tailwind CSS v3 |
| Animation | Framer Motion |
| Video | hls.js (client-only) |
| Icons | lucide-react |
| Forms | React Hook Form + Zod |
| Fonts | next/font/google |

Install all of the above before writing components.

---

## 2. GLOBAL DESIGN SYSTEM

### 2.1 Color Tokens (tailwind.config.ts)

```ts
colors: {
  background: '#070612',
  foreground: '#ffffff',
  muted: 'rgba(255,255,255,0.6)',
  border: 'rgba(255,255,255,0.12)',
  accent: '#6c6af6',          // soft indigo/violet accent
  'accent-light': '#9e9cf8',
  card: 'rgba(255,255,255,0.04)',
  'card-border': 'rgba(255,255,255,0.08)',
}
```

### 2.2 Typography (next/font/google)

Primary display font: **Playfair Display** (weights 400, 500, 700; styles normal + italic)
Body / UI font: **DM Sans** (weights 300, 400, 500, 600)

Apply both as CSS variables on `<html>`:
- `--font-display: Playfair Display`
- `--font-body: DM Sans`

Default body uses DM Sans. Headings use DM Sans medium unless marked as
"serif/display" in the spec below (those use Playfair Display italic).

### 2.3 Spacing Scale

Use Tailwind defaults. Sections use `py-24 lg:py-32`. Containers use
`max-w-7xl mx-auto px-6 lg:px-12`.

### 2.4 Component Defaults

- All cards: `bg-card border border-card-border rounded-2xl`
- All pills/badges: `rounded-full border border-white/20 backdrop-blur-sm px-3 py-1.5 text-sm`
- Buttons — primary: `bg-foreground text-background rounded-full px-5 py-3 font-medium`
- Buttons — secondary: `bg-white/10 backdrop-blur-sm text-white rounded-full px-8 py-3 font-medium hover:bg-white/20`
- Buttons — outline: `border border-white/20 text-white rounded-full px-6 py-3 font-medium hover:border-white/40`

### 2.5 Animation Primitives

Build these as reusable Client Components before using them in pages.

**`<BlurIn>`** — wraps any children:
```
initial:  { opacity: 0, filter: 'blur(10px)', y: 20 }
animate:  { opacity: 1, filter: 'blur(0px)',  y: 0  }
transition: { ease: 'easeOut', duration, delay }
viewport: { once: true }
Props: children, delay=0, duration=0.6, className
```

**`<SplitText>`** — staggered word reveal:
```
Splits text by spaces into word spans
Each word: initial { opacity:0, y:40 } → animate { opacity:1, y:0 }
delay per word = initialDelay + (wordIndex × delayBetweenWords)
Props: text, className, delayBetweenWords=0.08, duration=0.6, initialDelay=0
Use useInView({ once: true }) to trigger
```

**`<FadeUp>`** — simple fade + translate:
```
initial:  { opacity: 0, y: 32 }
animate:  { opacity: 1, y: 0  }
transition: { ease: 'easeOut', duration: 0.5, delay }
viewport: { once: true }
Props: children, delay=0, className
```

**`<StaggerParent>`** + **`<StaggerChild>`** — for lists of cards:
```
Parent staggerChildren: 0.1
Child: initial { opacity:0, y:24 } → animate { opacity:1, y:0 }
```

---

## 3. SHARED LAYOUT COMPONENTS

### 3.1 Navbar (`components/Navbar.tsx`) — Client Component

- Fixed to top, `z-50`, full width
- Background: `transparent` when at top of page; transitions to
  `rgba(7,6,18,0.85) backdrop-blur-md border-b border-white/10` on scroll
  (use `useScrollPosition` hook or scroll listener)
- Left: Grady Digital wordmark — `font-display italic text-xl text-white`
  (no image logo, use text)
- Center (desktop): nav links — Services, Blog, About, Contact
  `text-sm text-white/70 hover:text-white transition-colors`
- Right: "Book a Free Call" button (primary style, smaller: `px-4 py-2 text-sm`)
- Mobile: hamburger icon (Menu from lucide-react), slide-down mobile menu with
  same links. Animate open/close with Framer Motion height animation.
- Active link: `text-white font-medium`

### 3.2 Footer (`components/Footer.tsx`) — Server Component

Layout: 4-column grid on desktop, stacked on mobile.

Column 1 — Brand:
- "Grady Digital" in `font-display italic text-xl`
- Tagline: "AI agents, web design, and SEO for businesses that want to grow.
  No contracts, real results."
- Copyright: `© 2026 Grady Digital. All rights reserved.`

Column 2 — Quick Links: Services, Blog, About, FAQ, Contact

Column 3 — Legal: Privacy Policy, Terms of Service

Column 4 — Contact CTA:
- "Ready to grow?" heading
- "Book a Free Consultation" primary button linking to /contact

Bottom bar: thin `border-t border-white/10` with copyright on left,
"Built by a software engineer." on right in `text-white/40 text-xs`.

### 3.3 Section Wrapper (`components/SectionWrapper.tsx`) — Server Component

A simple wrapper: `<section className="py-24 lg:py-32 {className}">
<div className="max-w-7xl mx-auto px-6 lg:px-12">{children}</div></section>`

Accept `className` and `id` props.

### 3.4 SectionLabel (`components/SectionLabel.tsx`)

Reusable eyebrow label above section headings. Pill badge style. Example:
`<SectionLabel>Our Services</SectionLabel>` renders the badge from §2.4.

---

## 4. PAGE SPECIFICATIONS

---

### PAGE 1: Home (`app/page.tsx`)

**Server Component.** Renders all sections in order. Import Client Components
where needed.

#### Metadata:
```ts
export const metadata: Metadata = {
  title: 'Grady Digital — AI Agents, Web Design & SEO',
  description: 'AI chatbots, voice agents, workflow automation, and
  high-converting websites built for businesses that want real results.',
}
```

---

#### Section 1.1 — Hero (`components/HeroSection.tsx`) — Client Component

This is the hero defined in the previous build prompt. Replicate it exactly.
Key details:

**Outer section:** `relative w-full h-screen overflow-hidden flex items-center`
Background: `#070612`

**Background video** (`components/HeroVideo.tsx` — Client Component):
- HLS source: `https://stream.mux.com/s8pMcOvMQXc4GD6AX4e1o01xFogFxipmuKltNfSYza0200.m3u8`
- Load via hls.js in useEffect (client-only — no SSR)
- `autoPlay muted loop playsInline`
- Absolutely positioned, `h-full w-full object-cover origin-left scale-[1.2]`
- `style={{ marginLeft: '200px' }}`
- z-0
- Bottom gradient overlay: `h-40 absolute bottom-0 left-0 right-0 z-10`
  `background: linear-gradient(to top, #070612, transparent)`

**Content container:** `relative z-20 w-full max-w-7xl mx-auto px-6 lg:px-12`

Content layout: `flex flex-col gap-12`

**Top group** (`flex flex-col gap-6`):

Badge (BlurIn delay=0):
- Sparkles icon + "New AI Automation Ally"

Heading (SplitText stagger):
- Line 1 (block): "Unlock the Power of AI"
- Line 2 (inline): "for Your"
- Line 3 (inline, Playfair Display italic): "Business."
- `text-4xl md:text-5xl lg:text-6xl font-medium leading-tight lg:leading-[1.2] text-white`

Subtitle (BlurIn delay=0.4):
- "Our cutting-edge AI platform automates, analyzes, and accelerates your
  workflows so you can focus on what really matters."
- `text-white/80 text-lg leading-relaxed max-w-xl`

**CTA buttons** (BlurIn delay=0.6):
- Primary: "Book A Free Call" → /contact, ArrowRight icon
- Secondary: "See Our Services" → /services

Z-index: video z-0, gradient z-10, content z-20.

---

#### Section 1.2 — Social Proof Stats

Background: slightly elevated `bg-white/[0.02] border-y border-white/8`

5 stats in a horizontal flex/grid, centered, `py-12 lg:py-16`:

| Stat | Label |
|---|---|
| +37% | avg. increase in search visibility |
| 53% | faster page loads after optimization |
| 4.9/5 | average client satisfaction |
| 24/7 | AI availability |
| 2x | avg. lead increase in first 90 days |

Each stat: number in `text-3xl lg:text-4xl font-medium text-white`,
label in `text-sm text-white/60 mt-1 max-w-[140px] text-center`.

Below the stats row, centered footnote: `text-white/40 text-xs mt-6`
"Based on recent client results"

Animate each stat card with StaggerChild.

---

#### Section 1.3 — Services Overview

SectionLabel: "What We Build for You"
H2: "Everything your business needs to grow online"
Subheading: "AI agents, high-converting websites, and search optimization —
built and managed for you."

6 service cards in a `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`:

1. **AI Chatbots**
   Icon: MessageSquare (lucide)
   Body: "24/7 AI-powered chat agents that qualify leads, answer questions, and
   book appointments — so you never miss a customer. Custom-trained on your
   business, integrated directly into your website."

2. **AI Voice Agents**
   Icon: Phone
   Body: "AI phone agents that answer calls, schedule appointments, and handle
   common inquiries around the clock. Sound natural, speak your brand's
   language, and route complex calls to your team."

3. **Workflow Automation**
   Icon: Zap
   Body: "Automated follow-ups, CRM integration, and lead routing that eliminate
   manual busywork. Connect your tools and let AI handle the repetitive tasks."

4. **Web Design & Development**
   Icon: Monitor
   Body: "Fast, mobile-first websites built to convert visitors into leads and
   customers. Custom designs that reflect your brand — not cookie-cutter
   templates."

5. **SEO & Google Business Profile**
   Icon: Search
   Body: "Rank higher in local and organic search so customers find you before
   your competitors. Google Business Profile optimization, on-page SEO, and
   content strategy."

6. **Analytics & Reporting**
   Icon: BarChart2
   Body: "Full-stack tracking with Google Analytics 4, Tag Manager, and Search
   Console. Monthly reporting tied to real business outcomes — leads, calls,
   and revenue."

Card style: `bg-card border border-card-border rounded-2xl p-6`
Icon: small `w-8 h-8` inside a `rounded-xl bg-accent/10 p-2 text-accent-light`
Title: `text-lg font-medium text-white mt-4 mb-2`
Body: `text-white/60 text-sm leading-relaxed`

Bottom CTA: "View all services →" link to /services, centered, `text-accent-light`.

---

#### Section 1.4 — Case Studies / Results

SectionLabel: "Real Results for Real Businesses"
H2: "See what we've built for businesses like yours"

3 case study cards, `grid grid-cols-1 lg:grid-cols-3 gap-6`:

**Card 1 — Barber Shop**
Headline: "158% more online bookings in the first 60 days"
Tags: AI Receptionist · Web Design · SEO
What we did:
- Built a modern booking website with integrated AI receptionist — no missed
  calls or manual scheduling
- Optimized Google Business Profile for top 3 local search rankings
- Reduced page load time from 2.1s to 0.8s for faster mobile performance

**Card 2 — Family Restaurant**
Headline: "137% more calls in 60 days"
Tags: Web Design · Google Business Profile
What we did:
- Redesigned a modern, mobile-first website highlighting menu, hours, location
- Optimized Google Business Profile with photos, keywords, and weekly posts
- Added structured menu markup for rich Google results and better visibility

**Card 3 — General Contractor**
Headline: "163% increase in estimate requests within 90 days"
Tags: Web Design · SEO · Automation
What we did:
- Designed a modern, mobile-friendly website with clear service pages
- Optimized Google Business Profile with project photos and weekly updates
- Implemented automated review requests via text and email

Card style: same as service cards. Headline in `text-xl font-medium text-white`.
Tags rendered as small pills: `text-xs rounded-full bg-accent/10 text-accent-light px-2 py-0.5 border border-accent/20`.
Bullet list with check icons (CheckCircle2 from lucide, `w-4 h-4 text-accent-light`).

---

#### Section 1.5 — About / Founder Snippet

Two columns: left = text, right = decorative element (abstract grid or gradient
blob, not a photo placeholder — leave image implementation for Luke to drop in).

Left:
SectionLabel: "About Grady Digital"
H2: "Built by a software engineer who understands both code and business growth"

Body paragraphs:
"I'm a software engineer who spent years building complex systems for tech
companies. But the work that matters most to me now? Helping small business
owners — the people who keep our communities running."

"Too many great businesses are stuck with outdated websites that don't bring in
leads, buried in search results, or drowning in marketing promises that never
deliver. That's where Grady Digital comes in."

"I combine engineering precision with marketing strategy to build digital systems
that actually work — fast websites that convert visitors into calls, local SEO
that puts you on the map, and automations that save you time while generating
more business."

Three inline proof points below the text (flex row):
- "No Contracts" with X icon
- "Fast Setup — Live in 2–4 weeks"
- "Real Results — More leads, better rankings"

"Learn more about me →" link to /about.

---

#### Section 1.6 — Process

SectionLabel: "Our Process"
H2: "A proven approach to getting you results"

4 steps, horizontal on desktop (`grid grid-cols-1 md:grid-cols-4 gap-6`):

Step 1 — Discover: "We learn about your business, identify opportunities, and
map out a tailored strategy."
Step 2 — Build: "We build your AI agents, website, or SEO system — whatever
drives the biggest impact first."
Step 3 — Launch: "Everything goes live with thorough testing, training, and a
smooth handoff."
Step 4 — Optimize: "We monitor performance, refine your systems, and
continuously improve results."

Each step: large step number in `text-5xl font-medium text-white/10`, title in
`text-lg font-medium text-white mt-2`, body in `text-sm text-white/60 mt-2`.
Between steps (desktop only): a right-arrow connector `→` in `text-white/20`.

---

#### Section 1.7 — FAQ (Accordion)

SectionLabel: "FAQ"
H2: "Got questions? We've got answers."

Use Framer Motion `AnimatePresence` + `motion.div` for smooth open/close.
Each item: border-b `border-white/10`, question in `text-base font-medium
text-white`, answer in `text-white/60 text-sm leading-relaxed`.

10 FAQ items:

1. **What are AI agents and how can they help my business?**
   "AI agents are software systems — like chatbots and voice assistants — that
   can handle customer inquiries, answer questions, qualify leads, book
   appointments, and more, all without human involvement. For your business,
   this means 24/7 coverage, faster response times, and more leads captured."

2. **How do AI voice agents work?**
   "AI voice agents are connected to your business phone number. When a customer
   calls, the agent answers, understands the caller's intent using natural
   language processing, and responds naturally — booking appointments, answering
   FAQs, or routing the call to a human when needed."

3. **Will the AI sound robotic or fake?**
   "Not at all. Modern AI voice technology is remarkably natural-sounding. We
   fine-tune tone, pacing, and vocabulary to match your brand so callers have a
   smooth experience. Most customers can't tell the difference."

4. **Do I need a new website to use your AI services?**
   "No — AI agents can be integrated into your existing website or phone system.
   That said, if your current site isn't converting visitors into leads,
   combining a redesign with AI can dramatically amplify results."

5. **How long does it take to get set up?**
   "Most projects go live within 2–4 weeks. AI integrations are typically faster;
   full website builds take a bit longer depending on scope."

6. **Is there a long-term contract?**
   "No. We work month-to-month. If you're not getting results, you can cancel
   any time — no questions asked. We prefer to earn your business every month."

7. **What types of businesses do you work with?**
   "We primarily work with local service businesses — contractors, home services,
   healthcare, restaurants, salons, and similar industries. If you rely on phone
   calls, appointments, or local customers, we can help."

8. **How is Grady Digital different from other agencies?**
   "You work directly with the person building your system — a software engineer,
   not an account manager. There are no markups, no outsourcing, no fluff. Just
   engineered systems built to get results."

9. **What results can I expect?**
   "Results vary by industry and starting point, but our clients typically see
   2x more leads within the first 90 days when combining web design, SEO, and
   AI automation. We share case study benchmarks upfront so you know what
   to expect."

10. **How do I get started?**
    "Book a free audit. We'll review your current site, local SEO presence, and
    customer journey — then show you exactly what we'd build and why. No
    obligation, no sales pressure."

---

#### Section 1.8 — CTA Banner

Full-width dark section with subtle gradient or noise texture overlay.

H2: "Ready to grow your business?"
Subtext: "Let's talk about how AI agents, a better website, and smarter SEO can
transform your business. No obligation, no pressure."

Two buttons: "Book a Free Consultation" (primary) + "View Our Services"
(secondary).

Three trust pills below the buttons:
- "Free Audit — No cost, no commitment"
- "Fast Response — Within 24 hours"
- "Real Expertise — Built by a software engineer"

---

### PAGE 2: Services (`app/services/page.tsx`)

**Server Component.**

```ts
export const metadata = {
  title: 'Services | Grady Digital',
  description: 'AI chatbots, voice agents, workflow automation, and
  high-converting websites built for businesses that want to grow.',
}
```

#### Structure:

**Page Hero** (not full-screen, `py-24 pt-40`):
SectionLabel: "Our Services"
H1: "AI agents, web design & SEO services"
Subtext: "AI chatbots, voice agents, workflow automation, and high-converting
websites built for businesses that want to grow."
No video — use a subtle radial gradient `bg-gradient-radial` behind the text.

**Services Detail Section:**
Expand each of the 6 services into a two-column layout (alternating
image/text sides). Since there are no images, use decorative abstract
code/data visualizations (SVG) on the visual side, or a dark glass card
showing mock output of the service (e.g., a fake chat interface for chatbots,
a waveform for voice agents, a workflow diagram for automation).

For each service block:
- Full service name as H2
- 2–3 bullet points from the site content
- A "Learn more / Book a call" CTA button
- Decorative visual panel

Services in order: AI Chatbots, AI Voice Agents, Workflow Automation,
Web Design & Development, SEO & Google Business Profile, Analytics & Reporting.

**Process Section** — same as home §1.6, can be a shared `<ProcessSection />`
component.

**Bottom CTA** — same banner as home §1.8. Extract into shared
`<CTABanner />` component.

---

### PAGE 3: About (`app/about/page.tsx`)

**Server Component.**

```ts
export const metadata = {
  title: 'About Luke Grady | Grady Digital',
  description: 'Software engineer turned digital agency founder. Building
  AI-powered systems that help local businesses grow.',
}
```

#### Structure:

**Page Hero** (`pt-40 pb-16`):
H1: "Luke Grady"
Subtext: "Founder, Grady Digital"
One-liner: "Building AI-powered systems that help businesses grow — one agent,
one automation, one lead at a time."

**Main About Section** (two columns):
Left — large text block:

H2: "From Code to Conversions"
Paragraphs:
"I'm a software engineer who spent years building complex systems for tech
companies. But the work that matters most to me now? Helping small business
owners — the people who keep our communities running."

"Too many great businesses are stuck with outdated websites that don't bring in
leads, buried in search results, or drowning in marketing promises that never
deliver. That's where Grady Digital comes in."

"I combine engineering precision with marketing strategy to build digital
systems that actually work — fast websites that convert visitors into calls,
local SEO that puts you on the map, and automations that save you time while
generating more business."

Right — image placeholder:
Render a styled image container with `aspect-[3/4]` that says (in code):
```tsx
<div className="relative aspect-[3/4] rounded-2xl overflow-hidden 
  bg-white/5 border border-white/10 flex items-center justify-center">
  {/* Replace with: <Image src="/headshot.png" fill alt="Luke Grady" /> */}
  <span className="text-white/30 text-sm">headshot.png</span>
</div>
```

**What Grady Digital Does** — 3 cards (same grid style):
- AI Agents: "Chatbots and voice agents that handle customer inquiries 24/7"
- Websites: "Fast, mobile-first sites designed to convert visitors into customers"
- SEO & Automation: "Search optimization and workflow automation that drive
  consistent growth"

**Why AI?** — full-width text block:
H2: "Why AI?"
Body: "Because AI is the biggest unlock for small businesses since the internet
itself. The technology that was only available to Fortune 500 companies is now
accessible to every business — and the ones that adopt it first will have an
enormous competitive advantage."

"I build AI systems that are practical, reliable, and designed for real
businesses — not science projects. Chatbots that actually qualify leads. Voice
agents that actually book appointments. Automations that actually save you time.
That's the standard."

**Bottom proof points row:**
- "No Contracts — Cancel anytime"
- "Fast Setup — Live in 2–4 weeks, not months"
- "Real Results — More leads, better rankings, higher ROI"

**CTA Banner** — shared `<CTABanner />`

---

### PAGE 4: Contact (`app/contact/page.tsx`)

**Contact form is a Client Component** (`components/ContactForm.tsx`).
Page shell is a Server Component.

```ts
export const metadata = {
  title: 'Contact | Book a Free Audit | Grady Digital',
  description: 'Book a free audit. We review your current site and show you
  exactly what we can improve — no obligation.',
}
```

#### Structure:

**Page Hero:**
SectionLabel: "Get in Touch"
H1: "Let's grow your business with AI"
Subtext: "Tell us about your business and we'll show you how AI agents, a
better website, and smarter SEO can help you get more leads and grow."

Three trust signals (horizontal pills):
- "Response within 24 hours — We review every submission personally"
- "Direct access to Luke — No account managers or call centers"
- "No obligation — The audit is free with zero pressure to sign up"

**Form Section** (`components/ContactForm.tsx` — Client Component):

Use React Hook Form + Zod for validation.

Fields:
- Name * (text input)
- Business Name * (text input)
- Email * (email input, validate format)
- Phone (optional, tel input)
- Current Website (optional, url input)
- Services Interested In (multi-select checkboxes):
  - AI Chatbots
  - AI Voice Agents
  - Workflow Automation
  - Web Design & Development
  - SEO & Google Business Profile
  - Analytics & Reporting
- Message (textarea, rows=4)
- Privacy/Terms checkbox * (required)

Submit button: "Get Free Audit" (primary button style, full-width)

On submit: POST to `/api/contact`. Show a success state with a checkmark
animation and message "Thanks! We'll be in touch within 24 hours."
Show inline validation errors below each field.

Input styles: `bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-white
placeholder:text-white/30 focus:outline-none focus:border-accent/60 w-full text-sm`

**API Route** (`app/api/contact/route.ts`):
- Validate body with Zod (same schema as form)
- For now, log the submission to console and return `{ success: true }`
- Add a TODO comment for Luke to wire up email (e.g., Resend, Mailgun)
- Return 400 with field errors if validation fails

---

### PAGE 5: Blog (`app/blog/page.tsx`)

**Server Component.** Static for now — no CMS wired up.

```ts
export const metadata = {
  title: 'Blog | Grady Digital',
  description: 'Insights on AI automation, web design, and local SEO for
  small businesses.',
}
```

#### Structure:

**Page Hero:**
H1: "The Grady Digital Blog"
Subtext: "Insights on AI automation, local SEO, and what's actually working
for small businesses right now."

**Blog Grid:**
Render 3 placeholder blog post cards (hard-coded for now):

Post 1:
- Title: "Why Every Local Service Business Needs an AI Receptionist in 2026"
- Category: AI Automation
- Date: January 15, 2026
- Excerpt: "Missed calls cost local businesses thousands of dollars every month.
  Here's how AI voice agents are changing the game for contractors, salons,
  and service providers."
- Slug: /blog/ai-receptionist-local-business

Post 2:
- Title: "The 5-Step Local SEO Checklist That Actually Moves the Needle"
- Category: SEO
- Date: February 3, 2026
- Excerpt: "Google Business Profile optimization is the fastest way to get more
  local calls. Here's the exact checklist we run for every new client."
- Slug: /blog/local-seo-checklist

Post 3:
- Title: "What We Learned Building 20+ AI Chatbots for Small Businesses"
- Category: AI Automation
- Date: March 1, 2026
- Excerpt: "Not all chatbots are created equal. After building and deploying
  AI agents for barbershops, restaurants, and contractors, here's what works."
- Slug: /blog/ai-chatbot-lessons

Card style: `bg-card border border-card-border rounded-2xl p-6`
Category pill: small colored badge
Title: `text-lg font-medium text-white`
Excerpt: `text-white/60 text-sm leading-relaxed mt-2`
Date: `text-white/40 text-xs`
"Read more →" link in `text-accent-light text-sm mt-4`

**Coming Soon banner** below cards:
"More posts coming soon. Subscribe for updates when new content drops."
Simple email input + subscribe button (non-functional, just UI).

#### Blog Post Layout (`app/blog/[slug]/page.tsx`):

For now, all 3 slugs render a shared placeholder template:
- Navbar
- Hero with post title, category, date
- Content area (lorem ipsum placeholder with TODO comment for CMS)
- CTA Banner at bottom
- Footer

---

### PAGE 6: FAQ (`app/faq/page.tsx`)

**Server Component.**

```ts
export const metadata = {
  title: 'FAQ | Grady Digital',
  description: 'Answers to common questions about AI agents, web design,
  SEO, pricing, and working with Grady Digital.',
}
```

Render the same 10 FAQ items from §1.7, but expanded into a full page with:
- Page hero: H1 "Frequently Asked Questions"
- All 10 items in the accordion component
- CTA Banner at bottom

---

### PAGE 7: Privacy Policy (`app/privacy/page.tsx`)

**Server Component.**

```ts
export const metadata = {
  title: 'Privacy Policy | Grady Digital',
}
```

Render a simple legal page with the following content (styled with prose):

Title: "Privacy Policy"
Last updated: January 1, 2026

Sections:
1. Information We Collect — name, email, phone, website, message from contact form
2. How We Use Your Information — to respond to inquiries, provide services,
   improve our website
3. Information Sharing — we do not sell or share personal information with
   third parties except as needed to provide services
4. Cookies — we use cookies for analytics (Google Analytics 4)
5. Data Retention — we retain contact form submissions for up to 2 years
6. Your Rights — you can request deletion of your data by emailing
   hello@gradydigital.com
7. Contact — hello@gradydigital.com

Style: `prose prose-invert max-w-3xl mx-auto` inside a padded container.
Link back to home at the bottom.

---

### PAGE 8: Terms of Service (`app/terms/page.tsx`)

**Server Component.**

```ts
export const metadata = {
  title: 'Terms of Service | Grady Digital',
}
```

Same prose style as Privacy Policy. Sections:

1. Services — Grady Digital provides web design, AI automation, and SEO
   services on a month-to-month basis
2. Payment — services are billed monthly in advance; cancellation ends billing
   at the next cycle
3. No Guarantees — while we track and report real results, specific outcomes
   cannot be guaranteed
4. Intellectual Property — client websites and deliverables are owned by the
   client upon full payment
5. Limitation of Liability — Grady Digital's liability is limited to fees paid
   in the current billing period
6. Governing Law — Massachusetts, United States
7. Contact — hello@gradydigital.com

---

## 5. NOT-FOUND & ERROR PAGES

`app/not-found.tsx`:
- Center-aligned, dark background
- Large "404" in display font
- "Page not found. Let's get you back on track."
- Button: "Go Home" → /

`app/error.tsx` (Client Component, must have `"use client"`):
- Similar treatment
- "Something went wrong."
- Reset button using the provided `reset` function

---

## 6. FILE STRUCTURE (COMPLETE)

```
grady-digital/
├── app/
│   ├── layout.tsx
│   ├── globals.css
│   ├── page.tsx                    ← Home
│   ├── not-found.tsx
│   ├── error.tsx
│   ├── about/
│   │   └── page.tsx
│   ├── services/
│   │   └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   ├── blog/
│   │   ├── page.tsx
│   │   └── [slug]/
│   │       └── page.tsx
│   ├── faq/
│   │   └── page.tsx
│   ├── privacy/
│   │   └── page.tsx
│   ├── terms/
│   │   └── page.tsx
│   └── api/
│       └── contact/
│           └── route.ts
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── SectionWrapper.tsx
│   ├── SectionLabel.tsx
│   ├── CTABanner.tsx
│   ├── ProcessSection.tsx
│   ├── ContactForm.tsx
│   ├── HeroSection.tsx
│   ├── HeroVideo.tsx
│   ├── BlurIn.tsx
│   ├── SplitText.tsx
│   ├── FadeUp.tsx
│   └── StaggerParent.tsx
├── public/
│   └── headshot.png                ← Luke adds this later
├── tailwind.config.ts
├── tsconfig.json
├── next.config.ts
└── package.json
```

---

## 7. SSR / HYDRATION RULES

These rules are mandatory. Do not violate them.

1. All components using `window`, `document`, `navigator`, or browser-only APIs
   MUST be Client Components with `"use client"` at the top.
2. `hls.js` MUST only run inside `useEffect`. Never call `new Hls()` at module
   level or during render.
3. `framer-motion` Client Components (`motion.*`) are fine when the file is
   already a Client Component.
4. Page-level files (`app/**/page.tsx`) are Server Components unless they
   explicitly have `"use client"`. Keep them as Server Components wherever
   possible.
5. `layout.tsx` is a Server Component. Apply fonts via CSS variables, not by
   importing client utilities.
6. The contact form (`ContactForm.tsx`) is a Client Component because it uses
   React Hook Form state.
7. The Navbar scroll detection requires a Client Component.
8. Never use `Math.random()`, `Date.now()`, or other non-deterministic values
   during SSR — they cause hydration mismatches.

---

## 8. PERFORMANCE & SEO REQUIREMENTS

- All pages must pass `next build` with zero TypeScript errors and zero warnings.
- All images must use `next/image` with explicit `width` and `height` (or `fill`
  with a sized parent). Add `priority` on above-the-fold images.
- Add `alt` text to all images.
- Use semantic HTML: `<main>`, `<section>`, `<article>`, `<nav>`, `<footer>`,
  `<h1>`–`<h3>` hierarchy.
- Each page must export a unique `metadata` object.
- The HLS video must NOT block the page — it loads async in `useEffect`.
- Use `loading="lazy"` on below-the-fold images.
- Avoid layout shift: reserve space for the hero video with `min-h-screen`.

---

## 9. QUALITY CHECKLIST

Run through this before declaring the build complete:

- [ ] `npm run build` passes with zero errors
- [ ] `npm run dev` runs without console errors or hydration warnings
- [ ] Navbar background transition works on scroll
- [ ] Mobile hamburger menu opens/closes correctly
- [ ] Hero video autoplays, loops, muted on Chrome, Firefox, Safari
- [ ] All Framer Motion animations trigger once on scroll into view
- [ ] Contact form validates all required fields before submit
- [ ] Contact form shows success state after submission
- [ ] `/api/contact` route returns `{ success: true }` on valid POST
- [ ] All 8 pages render at `/`, `/services`, `/about`, `/contact`,
      `/blog`, `/faq`, `/privacy`, `/terms`
- [ ] Blog post slugs resolve at `/blog/[slug]`
- [ ] 404 page renders for unknown routes
- [ ] All internal links use `next/link`
- [ ] No hardcoded `<a href>` for internal navigation
- [ ] Footer renders on all pages
- [ ] Navbar renders on all pages
- [ ] Typography: Playfair Display renders on serif/italic elements
- [ ] Typography: DM Sans renders on body/UI elements
- [ ] All color tokens from §2.1 are used consistently
- [ ] No placeholder text left in production copy (only headshot placeholder
      is acceptable)

---

## 10. TONE & COPY GUIDELINES

If you write any supplementary copy (e.g., blog post lorem ipsum, meta
descriptions), match this voice:

- Direct and confident. No hedge words like "try" or "might."
- Technical credibility without jargon overload.
- Human — this is one person building real things for real businesses.
- Short sentences. Active voice. No agency fluff.
- Never say "cutting-edge" or "innovative" or "leverage."

Brand name: always "Grady Digital" (two words, capital G, capital D).
Founder: "Luke Grady" or just "Luke."
Email: `hello@gradydigital.com`
Book call URL: `/contact`

---

*End of CLAUDE.md — build the full site exactly as specified above.*
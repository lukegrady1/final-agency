# HOMEPAGE-REDESIGN.md — Grady Digital

Spec for rebuilding the gradydigital.com homepage. Written to be handed to Claude Code as the source of truth for what the page should be, say, and look like.

---

## 1. Strategy (read this first — it drives every decision below)

**One product, one story.** Grady Digital no longer positions websites and reviews as separate offerings. The core product is **The Reputation System ($147/mo)** — website + review engine together. The $97 Website plan is the stripped-down version; the $297 Growth System is the loaded version. The homepage sells ONE narrative:

> Someone searches → your reviews win the click → your website wins the call → the lead lands in your inbox.

Reviews and website are two halves of one machine. Neither works alone: reviews without a good site = people trust you, click, and bounce. A site without reviews = nobody clicks through in the first place. Every section of the page should reinforce this loop.

**Design DNA comes from /grow, not the current homepage.** The /grow page is the reference for tone, structure, and approach. What makes it work:
- Single-idea headline (not three stacked claims)
- Show, don't tell — product mockups (Google Business Profile card, sample SMS, review reply) instead of feature descriptions
- Problem section with a visual (competitor search-result comparison)
- The flywheel diagram showing compounding
- The incentive-alignment paragraph ("your results and my paycheck are the same thing")
- Warm, specific closing CTA

**IMPORTANT — this is a restructure, not a redesign.** The owner likes the current visual design of the site and it should be PRESERVED: keep the existing typography, color palette, spacing, card styles, animations, component styling, and overall aesthetic exactly as they are today. What changes is the FORMAT, ORDER, and SECTIONS — which sections exist, what order they appear in, what the copy says, and how the story is framed. Reuse existing components (from both the current homepage and /grow) wherever possible; build new components only where a section has no existing equivalent (e.g., the extended flywheel step), and when you do, match the established visual language precisely. If a choice ever comes down to "restyle it" vs. "keep it looking like the rest of the site," keep it looking like the rest of the site.

The current homepage's strongest asset to KEEP is the before/after website slider — it's the best proof for the website half of the loop.

**Stack:** Next.js / TypeScript / Tailwind / Framer Motion. Deploy target unchanged. Reuse existing /grow components wherever possible rather than rebuilding.

---

## 2. Global rules (apply site-wide)

### CTA consistency — one action, one label, everywhere
- Every primary button says **"Book a Free Call"** (acceptable sharper variant: "Book a Free 5-Min Call" — the time-box lowers commitment anxiety). Never "Get Started."
- This applies to: hero button, nav button, all three plan cards, final CTA section, footer CTA.
- All primary CTAs link to the same booking destination (`/start#book`).
- Secondary CTAs (scroll anchors like "See how it works") are fine but visually subordinate.

### Header
- Add the **phone number as a tap-to-call link in the header** — (978) 798-2870. Mobile owners will just tap it; that's a conversion.
- Nav CTA button: "Book a Free Call."

### Testimonials / social proof (biggest current gap)
- The site sells reviews but currently shows ZERO reviews of Grady Digital itself. Fix this.
- Add 1–2 short quoted testimonials with name + business attached (e.g., from Garabedian Plumbing, Reece Group, Tee's Deli). Placement: directly under the hero (with the logo bar) AND/OR beside pricing.
- If Grady Digital has Google reviews on its g.page profile, surface the rating and count on-page: "★ 5.0 · N Google reviews."
- Placeholder format if real quotes aren't collected yet: leave clearly-marked `{{TESTIMONIAL}}` slots — do not fabricate quotes.

### Mobile
- Plan cards must stack vertically on mobile — no horizontal carousel/swiping to compare plans. (Current implementation renders the cards twice in the DOM via a carousel; replace with a vertical stack on small screens.)
- The before/after slider must work with touch.

### Things to avoid
- No fabricated client results. The hero dashboard mockup (4.9 rating, review counts, "+38% calls") must read clearly as a product-UI illustration, NOT a claimed client outcome. When a real client stat exists, swap it in and label it (e.g., "+38% calls in 90 days — Garabedian Plumbing").
- Don't describe features in prose where a mockup can show them instead.
- Don't let any section duplicate its bullet text (the current ads-vs-asset section renders each bullet twice — short + long version).

---

## 3. Page structure (section by section, in order)

### Section 1 — Hero
- **Headline: one idea, outcome-flavored.** Options (pick one, or same spirit):
  - "Your customers are searching right now. We make sure they pick you."
  - "Get found. Get chosen. Get the call."
  - "Make Google your best salesperson." (borrowed from /grow — still works under the one-product story)
- **Subhead** carries the mechanism and the loop: reviews win the click, the website wins the call, every lead lands in one inbox. Mention "$147/month, no setup fee" — price transparency is a differentiator.
- **Primary CTA:** Book a Free Call. Directly under the button, the risk reversal line: "Live in 10 business days, or your next month is free."
- **Hero visual:** show the fuller machine, not just the GBP card. Options: a composite (mini site preview + GBP/reviews card + inbox notification), or a rotating/animated sequence cycling through the three. Reuse the /grow GBP mockup component as one element.

### Section 2 — Social proof strip
- Client logo bar (existing logos: Reece Group, MJP Auto Detail, Greater Boston Livery, Garabedian, Greg's Cuts, Tee's Deli, Functional Massage Therapy).
- 1–2 testimonial quotes with names/businesses (see Global rules).
- "Trusted by local businesses across Massachusetts."

### Section 3 — The problem (ported from /grow, widened one notch)
- Keep the search-results comparison visual: "Competitor with momentum — 4.9 · 214 reviews" vs. "Your business — 4.2 · 47 reviews."
- Extend the problem past the map pack to the click: even when they DO click you, an outdated site sends them back to the results. Two failure points, one loop.
- Keep the /grow problem framing blocks (Trust / Visibility / Speed / Consistency) but compress — these can be 4 short cards rather than 4 full subsections.

### Section 4 — The system (the flywheel, extended)
- Port the /grow flywheel, but add the website into the loop. New sequence:
  1. Someone searches
  2. Your reviews win the click
  3. **Your website wins the call** (new step)
  4. Lead lands in one inbox
  5. Job well done → smart review ask
  6. New 5-star review → stronger profile → back to the top
- Keep the framing line: "You keep running the business. I keep the wheel turning."

### Section 5 — Show the machine ("Automation that still feels human" — ported from /grow, plus one addition)
- Keep all three /grow mockups: the sample review-request SMS ("Hi Sarah — thanks for choosing us today..."), the review reply in the owner's voice, the monthly proof snapshot.
- ADD a website-half proof: the **before/after slider** (Imagine Construction, Garabedian, Tee's Deli) lives here or immediately after, framed as "the click is only half the job — here's what wins the call."

### Section 6 — Plans (one plan, two adjustments)

**Framing:** changes from "menu of three equals" to "here's the system, here's less, here's more." The Reputation System is the default; Website is the stripped-down version; Growth is the loaded version.

**Card layout (three cards in a row, center card featured):**

Each card, top to bottom:
1. **Icon** (top-left, ~20px, outline style) — one per plan that matches its personality: e.g., star for Website, storefront/building for Reputation, trending-up for Growth. Featured card's icon uses the accent color.
2. **Plan name** (medium weight, ~15-16px)
3. **Benefit-driven subtitle** (small, muted) — describes the outcome, never a feature list:
   - Website: "Look great online, never miss a call"
   - Reputation System: "Website + review engine · save $25/mo"
   - Growth: "Everything, plus marketing"
4. **Price** (large, ~24px): "$147" with "/mo" small and muted after it.
   - **Reputation card only: anchor with a strikethrough** — show ~~$172~~ before the $147 (small, muted, line-through). This is the card doing the bundle math for the visitor: they instantly read "the two halves separately would cost more." This detail is required — it's the single most important element for communicating that Reputation = Website + Reviews combined.
5. **Bullets — 3 max, ideally exactly 3.** Owners skim; feature walls make $297 look complicated instead of valuable. Upper tiers start with "Everything in [tier below], plus:" then 2 more bullets.
6. **Full-width button** pinned to the card bottom (cards equal height, flex column, button `margin-top: auto`): "Book a Free Call."

**Featured card treatment (The Reputation System, center):**
- 2px accent-color border (other cards get a hairline neutral border) — border only, same background as siblings; do NOT tint the whole card.
- "Most popular" pill badge, top-right of the card, small (12px), accent tint background.
- Its button is the only solid/filled accent button in the section; the other two cards use outline buttons. One filled button per view — it tells the eye where the default is.

**Below the cards:**
- "No setup fee · Month-to-month · Cancel anytime" (either on each card under the price, or once below the row).
- The 10-day guarantee block (keep existing copy).
- **The incentive-alignment paragraph from /grow** (port verbatim — "The low monthly rate is the point. Agencies that charge thousands upfront get paid no matter what happens next..."). This is the most trust-building copy on the site.

**Copy direction per card:**
- **The Reputation System — $147/mo.** Described FIRST in copy even though it's displayed center. It IS the product: "the full loop — reviews win the click, the website wins the call."
- **Website — $97/mo.** Described by what it lacks: "The website and inbox, without the review engine. For businesses that just need to look great online."
- **The Growth System — $297/mo.** "Everything, plus we run your whole Google presence — weekly posts, cross-posting, ongoing local SEO."

**Notes:**
- There is NO $75 reviews-only plan on the site and NO website footnote below the cards. The $75 offer exists only as an off-menu downsell on sales calls. (An earlier design iteration had a "Just need a website? $97/mo" footnote — obsolete now that Website is a full card.)
- Mobile: cards stack vertically in order Reputation → Website → Growth (featured card first on mobile), no carousel.

### Section 7 — Ads vs. asset (trimmed)
- Keep the concept and the headline ("Ads rent attention. We build you an asset.") — it's the best positioning copy on the current homepage.
- Cut to **3 bullets per side** (currently 5, each rendering twice). The closing "leaky bucket" paragraph carries the argument; the bullets only set it up.
- Suggested surviving bullets — Ads side: (1) Stop paying and the leads stop — you own nothing. (2) Every click costs more as competitors bid up. (3) You pay the same for a real buyer or a tire-kicker. System side: (1) Rank once and leads keep coming free. (2) People already searching, ready to hire. (3) Every call, text, and form lands in one inbox.

### Section 8 — Process (keep from current homepage)
- The 4-step "From call to launch in 10 business days" (Book a Call → We Design & Build → Launch → We Manage It). Works as-is.

### Section 9 — About Luke / direct access
- Keep "Built by an engineer who thinks like a marketer" section, condensed.
- Key points: direct access to Luke, no account managers, no outsourcing, month-to-month, fully managed.

### Section 10 — FAQ
- Keep the existing FAQ. Update any answers that referenced the old three-equal-plans framing to match the one-product story (e.g., "What's the difference between plans" should explain: the Reputation System is the full loop; Website is that minus the review engine; Growth adds the managed Google presence).

### Section 11 — Final CTA
- Use /grow's warmer closing instead of the current generic one: "Let's look at your current Google presence together and map the simplest path to more reviews, better rankings, and more calls. Free, no pressure."
- Button: "Book a Free Call" + tap-to-call phone number.
- Risk reversal line repeated once more.

---

## 4. Design notes

- **Preserve the existing visual design.** The owner is happy with how the site looks — /grow especially is the style he wants. Do not introduce new fonts, colors, spacing systems, or component styles. This project changes structure, order, sections, and copy; the aesthetic stays.
- Reuse /grow's existing components and visual style for ported sections (GBP mockup, SMS bubble, review reply, flywheel). Same typography, spacing rhythm, card styles, and animation feel (Framer Motion, subtle).
- Mockup elements should look like real product UI, flat and clean — not screenshots, not stock imagery (this already matches how /grow does it).
- The page should answer "what do you sell, what does it cost, can I trust you" within the first two scrolls. Everything after Section 6 exists for skeptics who need more convincing.
- Keep total page length comparable to /grow. If a section fights for space, cut from Sections 7–9 before touching 1–6.

## 5. SEO / meta

- Preserve the homepage's existing URL and its ranking signals for website-design keywords — this is a rebuild of the homepage, NOT a redirect to /grow.
- Title/meta direction: keep "Websites, SEO & Reviews for Local Businesses" family, updated description to reflect the one-system story and $147 anchor. Keep existing OG image setup.
- /grow stays live as a standalone campaign/landing page for review-led SMS outreach. Do not delete or redirect it.

## 6. Acceptance checklist

- [ ] No new fonts, colors, spacing systems, or component styles introduced — existing visual design preserved; changes limited to structure, order, sections, and copy
- [ ] Every primary CTA reads "Book a Free Call" (or "Book a Free 5-Min Call") — zero instances of "Get Started"
- [ ] Phone number tap-to-call in header
- [ ] At least one real (or clearly-slotted) testimonial with name + business
- [ ] Plans reachable within ~3 scroll sections; $147 visually dominant and described as the default
- [ ] Reputation card shows the ~~$172~~ strikethrough anchor and "Website + review engine · save $25/mo" subtitle
- [ ] Featured card: 2px accent border + "Most popular" badge + the section's only filled button; other cards hairline border + outline buttons
- [ ] Every plan card has exactly 3 bullets and a benefit-driven subtitle (no feature-list subtitles)
- [ ] $97 described as the stripped-down version; $297 as the loaded version; no $75 plan anywhere, no website footnote
- [ ] Flywheel includes the website step
- [ ] Before/after slider present and touch-friendly
- [ ] Ads-vs-asset trimmed to 3 bullets per side, no duplicated bullet text
- [ ] Plan cards stack vertically on mobile (no carousel, no duplicate DOM rendering)
- [ ] Hero mockup numbers read as product illustration, not claimed results
- [ ] Incentive-alignment paragraph present under pricing
- [ ] /grow untouched and still live
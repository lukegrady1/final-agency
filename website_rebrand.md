# Grady Digital — Website Audit & Action Plan

**Site:** gradydigital.com
**Audited:** June 7, 2026
**Status:** Plan only. No live changes made. Awaiting your approval before any edits.

---

## The headline finding

Your site is currently **three different websites stitched together**, each reflecting a different offer and a different design. Nothing matches the new $297 plan yet, and several pages contradict each other on the same screen.

1. **The "$197 + setup fee" site** (home, privacy, terms): one plan at **$197/month plus a one-time $1,000 setup fee**, live in 2–4 weeks, CRM included.
2. **The "$97" site** (start, work): a cheaper plan at **$97/month**, with a sales video, a booking widget, and an annual billing toggle.
3. **The "AI agency" site** (services, about, contact, blog): a completely different positioning built around AI chatbots, voice agents, and workflow automation, with **no pricing at all** and a "free audit" funnel.

So a visitor can land on your home page seeing $197 + $1,000 setup, click "Services" and land on an AI-chatbot page with no price, then click "Get Started" and see $97. None of these is the new offer.

**The new offer (single source of truth for every fix below):** one plan, **$297/month, no setup fee** (first month builds and launches you), **live within 10 business days or next month is free** (account credit, not a refund), cancel anytime. The bundle: custom conversion website, Google Business Profile optimization with posting and cross-posting to Instagram/Facebook/YouTube, review growth with target keywords, review responses, disputing/removing old negative reviews where possible, ongoing SEO, and GoHighLevel CRM access.

---

## A. Page inventory

Every page reached from the nav, footers, sitemap, and internal links.

| # | URL | Status | Which "version" | Pricing shown |
|---|-----|--------|-----------------|---------------|
| 1 | `/` (home) | Live | $197 site | $197/mo + $1,000 setup |
| 2 | `/start` | Live | $97 site | **$97/mo card, but FAQ says $197 + $1,000 setup** |
| 3 | `/work` | Live | $97 site | $97/mo (CTA + footer) |
| 4 | `/services` | Live | AI agency site | None |
| 5 | `/about` | Live | AI agency site | None (+ placeholder "Your Photo Here") |
| 6 | `/contact` | Live | AI agency site | None (free-audit form) |
| 7 | `/privacy` | Live | $197 site | $197/mo (meta + footer) |
| 8 | `/terms` | Live | $197 site | $197/mo + $1,000 setup |
| 9 | `/blog` | Live | AI agency site | None (3 post previews) |
| 10 | `/blog/ai-receptionist-local-business` | **404 (broken)** | — | — |
| 11 | `/blog/local-seo-checklist` | **404 (broken)** | — | — |
| 12 | `/blog/ai-chatbot-lessons` | **404 (broken)** | — | — |
| 13 | `/faq` | **404 (broken)** | — | linked in footer of pages 4, 5, 6, 9 |
| 14 | `/pricing` | **404** | — | not linked (only a `#pricing` anchor on `/start`); minor |

Sitemap.xml lists only pages 1–8. `/blog` and its posts and `/faq` are reachable by link but missing from the sitemap, and the posts and `/faq` are dead.

**Confirm before I begin:** did I miss any page? In particular, do you have any landing pages, ad pages, or industry-specific pages that aren't in the nav/footer/sitemap?

---

## B. Critical fixes (do these first — they actively mislead prospects)

These show the wrong price or the build fee. Until they change, you are quoting prospects two wrong numbers and a fee that no longer exists.

1. **Home `/`** — Hero, stat bar, "What You Get" heading, bottom CTA, meta description, and FAQ all say **$197/month** and most say **one-time $1,000 setup**. → Change every instance to **$297/month, no setup fee**.
2. **Terms `/terms` §2 and §12** — States the fee is **"$197 per month, plus a one-time $1,000 setup fee"** and that **"the one-time setup fee is non-refundable."** This is your binding agreement. → Change to $297/month, remove the setup fee language, add the 10-business-day delivery-credit term.
3. **Start `/start`** — Pricing card says **$97/month**; the FAQ on the *same page* says **$197/month + $1,000 setup**. Bottom CTA and footer say $97. → All to $297, no setup fee. Remove the internal contradiction.
4. **Work `/work`** — Bottom CTA and footer say **$97/month**. → $297.
5. **Privacy `/privacy`** — Meta description and footer say **$197/month**. → $297.
6. **`/start` annual toggle ("Annual — 2 mo free")** — Introduces a second price point/structure, which breaks "one plan, no tiers." → Remove the toggle; show one monthly price.
7. **Setup-fee language everywhere** — Hunt and remove every "$1,000 setup," "one-time setup," "setup fee" reference (currently on home, terms, and the start FAQ). Replace with "no setup fee, your first month gets you built and live."

---

## C. Page-by-page breakdown

For each page: what's wrong, what it should say, and suggested replacement copy. All copy is written for local trades/service businesses, plain-spoken, no jargon, no hype, no em-dashes.

### 1. Home `/`

**Wrong / outdated**
- "$197/month. One-time $1,000 setup" (hero subhead, stat bar "$197/mo", section heading "Everything included for $197/month", bottom CTA, meta description, FAQ answer).
- "2–4 weeks" timeline (hero, stat, "How It Works," FAQ). Conflicts with the new 10-business-day guarantee.
- Service list is incomplete: cards cover Custom Website, GBP & SEO, Built to Convert, Fully Managed, Direct Access, CRM. **Missing:** social cross-posting (Instagram/Facebook/YouTube), review generation, review responses, removing negative reviews, GBP posting. CRM is not named as GoHighLevel.
- No delivery guarantee anywhere. No "why monthly" trust section.
- Nav link "Services" sends visitors to the off-offer AI-agency page (see structural fix in Section D).

**Suggested replacement copy**

Hero subhead:
> We build your website and run your Google presence so customers find you first and turn into paying clients. One plan, $297 a month. No setup fee. Your first month gets you built and live, and you can cancel anytime.

Stat bar:
> $297/mo — everything included · Live in 10 business days · 100% custom, no templates · Reviews, SEO and social handled · GoHighLevel CRM included

"What You Get" heading:
> Everything included for $297 a month

Service cards (replace the six with cards that match the real bundle):
- **Custom Website** — Built from scratch around your business, mobile-first, designed to turn visitors into calls and bookings.
- **Google Business Profile** — We optimize your profile and post to it regularly, then cross-post to your Instagram, Facebook, and YouTube so you stay visible everywhere customers look.
- **More and Better Reviews** — We help you bring in more high-quality reviews with the keywords that help you rank, reply to them for you, and work to remove old negative ones where it's possible.
- **Ongoing SEO** — Local and organic search work every month so customers find you before your competitors.
- **GoHighLevel CRM** — Manage your calls, texts, and leads in one place, included with your plan.
- **Direct Access to Luke** — You work with the person building and running your site. No account managers, no middlemen.

Add near pricing (short "why monthly," verbatim from your copy):
> The low monthly rate is the point. Agencies that charge thousands upfront get paid no matter what happens next. I only keep getting paid if you stay, which means I'm earning it every month instead of disappearing after one big check. Your results and my paycheck are the same thing.

Add near pricing (delivery guarantee, verbatim):
> Live in 10 business days, or your next month is free. No big setup fee. Your first month gets your site built and live. If I don't have you live within 10 business days, your next month is on me.

Bottom CTA section:
> A custom website, your Google presence, reviews, SEO, and a CRM. One plan, $297 a month. No setup fee, cancel anytime.

**FAQ (home)** — current answers and what to do:
- *How much does it cost?* Currently: "$197/month plus a one-time $1,000 setup fee..." → Replace: "It's $297 a month, one plan, everything included. There's no setup fee. Your first month covers building your site and getting you live. No long-term contract, cancel anytime."
- *How long does it take to build?* Currently: "Most projects go live within 2–4 weeks..." → Replace: "Your site is live within 10 business days of you signing up and getting me what I need. If I miss that, your next month is free."
- *Is there a long-term contract?* Currently: "No. We work month-to-month... cancel anytime..." → Keep as is, it already matches.
- Add new entry: *Is there a setup fee?* → "No. Your first month's $297 covers building your site and getting you live. No big check upfront."
- Add new entry, **verbatim full version**: *Why a monthly rate instead of a big upfront fee?* →
  > Because it keeps me honest. When an agency charges you a few thousand dollars upfront, they get paid whether or not anything works after that. Once they've got the check, there's nothing making them show up again. That's how people end up ghosted with a website they can't even update.
  >
  > My model only works if you stick around. I get paid a little each month, which means I only keep getting paid if you keep getting value out of it. So every single month I'm actually working to earn it, improving your site, posting, bringing in reviews, handling your SEO. I want to work with you for the next 5 to 10 years, and the only way that happens is if I keep delivering. We're on the same side.
- The remaining home FAQ answers ("What if I already have a website," "Do I have to manage anything," "What kind of businesses," "What makes Grady Digital different," "Will my site work on phones," "Can I see examples," "How do I get started") do not mention price and read fine. Light edit only: make sure none promise results, and the "different" and "manage" answers can mention reviews/social now that those are in the bundle.

*Note:* No results/performance guarantee language was found in the home FAQ. Good. Nothing to remove there.

### 2. Start `/start`

**Wrong / outdated**
- Pricing card: **$97/month**, "Billed monthly," annual toggle "2 mo free." → One plan, $297/month, no annual toggle.
- The plan's bullet list is the old thin bundle (basic SEO, lead-capture form, mobile app). → Replace with the full bundle (same six items as the home cards above).
- **FAQ "How much does it cost?" answer says $197/month + $1,000 setup** — contradicts the $97 card on the same page. → $297, no setup fee.
- FAQ "How long does it take?" says 2–4 weeks. → 10 business days.
- "Watch This First" sales video (`website_vsl.mp4`) and "How we build websites that actually generate clients." This is an old-funnel "watch the video" element. → Decide whether to keep (see Open Questions). If the video still says $97/$197 or 2–4 weeks, it must be re-recorded or removed.
- Booking widget (`api.gradydigital.com/widget/booking/...`) plus a separate "Book a Free Call" flow. This is a *second* conversion path competing with the `/contact` "Free Audit" form. Pick one (see Section D).
- Plan name "Grady Digital Website" undersells the bundle. Consider "The Grady Digital Plan" since it now includes GBP, reviews, social, SEO, and CRM, not just a website.

**Suggested replacement copy**

Pricing card:
> ### The Grady Digital Plan
> Everything you need to get found on Google, win the trust of customers, and turn clicks into calls. Built and managed for you.
>
> **$297/month** — no setup fee
>
> - Custom conversion website, mobile-first and fast
> - Google Business Profile optimization, posting, and cross-posting to Instagram, Facebook, and YouTube
> - Review growth with target keywords, plus we reply to reviews and work to remove old negative ones
> - Ongoing local and organic SEO
> - GoHighLevel CRM to manage calls, texts, and leads
> - Hosting, updates, security, and speed, all handled
>
> No setup fee. Your first month gets you built and live. Cancel anytime.

Under the price, add the short "why monthly" and the delivery-guarantee line (both verbatim, as in the home section above).

### 3. Work `/work`

**Wrong / outdated**
- Bottom CTA "A professional website for $97/month" and footer "$97/month, no contracts." → $297/month, full bundle.
- Footer tagline "Custom, conversion-focused websites... $97/month" → update to the $297 bundle wording used site-wide.

**Suggested replacement copy**

Bottom CTA:
> Custom website, Google presence, reviews, SEO, and a CRM. One plan, $297 a month. No setup fee, cancel anytime.

The portfolio content itself (White Springs, Imagine Construction, MJP, Reece, Greater Boston Livery) is fine and on-brand. **Verify the live client links still work** (whitespringsfl-us.com, mjpautodetailing.com, reecegroupllc.com, greaterbostonlivery.com) since those are external.

### 4. Services `/services`

**Wrong / outdated — this is the biggest mismatch on the site.**
- Entire page is positioned around **AI chatbots, AI voice agents, and workflow automation**, none of which are in the new offer. Six-service menu ("AI Chatbots, AI Voice Agents, Workflow Automation, Web Design, SEO & GBP, Analytics & Reporting") implies an à-la-carte agency, which directly contradicts "one plan only."
- No pricing.
- CTA is "Get Free Audit," not the current call to action.
- Uses a different nav (Services / Blog / About / Contact) and footer (with the dead FAQ link).

**Recommendation:** This page needs to be rebuilt to describe the **single plan and its bundle**, not a service menu. Either repurpose it as a "What's Included / The Plan" page or remove it from the nav entirely and fold its content into home. Suggested replacement framing:

> ### One plan. Everything your business needs to get found and chosen.
> You don't pick services off a menu. For $297 a month you get the whole system: a custom website, your Google Business Profile posted and cross-posted to Instagram, Facebook, and YouTube, a steady stream of better reviews, ongoing SEO, and a CRM to manage it all. Built and managed for you, live in 10 business days.

Drop the AI chatbot / voice agent / automation sections unless you are genuinely still selling those (see Open Questions).

### 5. About `/about`

**Wrong / outdated**
- Positioned around AI ("Why AI?", "AI Agents," chatbots and voice agents). Off-offer.
- **Visible placeholder text: "Your Photo Here" / "Replace with headshot"** next to the headshot image. This is an unfinished element showing on a live page. Fix immediately.
- CTA "Get a Free Audit." → current CTA.
- "Live in 2–4 weeks" → 10 business days.
- Different nav/footer (with dead FAQ link).

**Suggested replacement copy** (keep the founder story, retune away from AI toward the real offer):
> I'm a software engineer who spent years building systems for tech companies. Now I help local service businesses, the ones that keep our communities running, get found online and turn visitors into paying customers.
>
> Most web designers hand you a pretty page that doesn't bring in work, then disappear. I build your site the way I build software: every piece has a job, and that job is getting you customers. Then I keep working on it every month, your Google profile, your reviews, your SEO, so it keeps paying off. One plan, $297 a month, no big check upfront, cancel anytime.

Remove the "Why AI?" section unless AI services are staying.

### 6. Contact `/contact`

**Wrong / outdated**
- "Let's grow your business with AI" and a "Get Your Free Audit" form with service checkboxes (AI Chatbots, AI Voice Agents, Workflow Automation, Web Design, SEO & GBP, Analytics & Reporting). The checkboxes imply multiple separately-purchased services, contradicting the single plan.
- "Free audit" framing is from the old AI funnel.
- Different nav/footer (with dead FAQ link).

**Suggested replacement copy**
> ### Let's get you built and live
> Tell me about your business and I'll show you exactly what I'd build, how your Google presence and reviews would work, and how fast you'd be live. No pressure, no obligation.

Replace the service-selection checkboxes with simple fields (name, business name, email, phone, current website if any, message). Drop the multi-service checklist. Keep "Direct access to Luke" and "Response within 24 hours."

**Verify the form actually submits** and where it sends to (not tested in this audit).

### 7. Privacy `/privacy`

**Wrong / outdated**
- Meta description and footer say "$197/month." → $297.
- Body content (data collection, retention, rights) is fine and offer-neutral. No changes needed beyond the footer/meta price.

### 8. Terms `/terms`

**Wrong / outdated (binding document — high priority)**
- §2 Fees: "$197 per month... plus a one-time $1,000 setup fee." → "$297 per month. No setup fee; the first month's payment covers the build."
- §3 Timeline: "live within two to four (2–4) weeks." → "live within 10 business days," and add the delivery credit: if not live within 10 business days, the next month is applied as a free account credit (not a refund; the plan continues).
- §12 Cancellation: "The one-time setup fee is non-refundable." → Remove (no setup fee exists).
- §10 "No Guarantees" — **keep as is.** It correctly states outcomes aren't guaranteed, which matches the new offer's rule that you never promise results. Make sure any new delivery-guarantee wording is clearly framed as speed-only and doesn't contradict §10.
- Footer price → $297.
- §4 (revisions), §5 (ownership), §6–9, §11, §13–14 are offer-neutral and can stay, but confirm the revision policy still reflects how you want to operate.

### 9. Blog `/blog`

**Wrong / outdated**
- All three post links ("Read more →") are **404 / broken**: `ai-receptionist-local-business`, `local-seo-checklist`, `ai-chatbot-lessons`. The blog index promotes posts that don't exist.
- Topics are AI-receptionist / chatbot themed, off the new offer.
- Footer links to the dead `/faq` page.

**Recommendation:** Either unpublish the blog until posts exist, or write the three posts (retargeted to your real offer: reviews, GBP, local SEO). At minimum, remove the dead "Read more" links so visitors don't hit 404s. Decide whether the blog stays in the footer at all.

### Broken links and technical issues (all pages)

- `/faq` returns **404** but is linked in the footer of `/services`, `/about`, `/contact`, and `/blog`. Either build the FAQ page or remove the footer link. (You have a good FAQ on the home page already, which could become the `/faq` page.)
- Three `/blog/*` posts return **404** (see above).
- `/pricing` returns 404. Not linked in nav, so low priority, but worth a redirect to home or `/start` in case anyone has the URL.
- `/about` shows placeholder text "Your Photo Here / Replace with headshot."
- **Two design systems / two navs:** pages 1,2,3,7,8 use one header/footer (Work, About, Contact); pages 4,5,6,9 use another (Services, Blog, About, Contact, with a "Book a Call"/"Free Audit" button and a Blog + FAQ footer). This makes the site feel like two companies. Unify (Section D).
- **Two conversion paths:** `/start` uses a booking widget + sales video; the AI pages use a `/contact` "Free Audit" form. Pick one primary CTA and one destination.
- Not tested (recommend you verify): contact form submission, blog subscribe form, mobile rendering of the `/start` before/after slider and booking widget.

---

## D. Consistency check (target end state)

After the edits, every page should show the same thing. Confirm all of the following are true everywhere they appear:

- **Price:** $297/month, and only $297. No $97, no $197, no $247, no annual toggle, no other number.
- **One plan:** no tiers, no good-better-best, no service menu, no à-la-carte checkboxes.
- **No setup/build fee:** zero references to "$1,000," "setup fee," or "one-time" anywhere, including Terms. Replaced with "no setup fee, your first month gets you built and live."
- **Delivery guarantee:** "Live in 10 business days, or your next month is free" appears near pricing and in the FAQ and Terms, always framed as speed-only (next month is an account credit, not a refund, plan continues).
- **No results guarantee:** no "more calls or your money back," no promised rankings/leads/results anywhere. (Currently clean; keep it that way. Terms §10 stays.)
- **Service list matches the bundle:** custom website; GBP optimization + posting + cross-posting to Instagram/Facebook/YouTube; review growth with keywords; review responses; removing old negative reviews where possible; ongoing SEO; GoHighLevel CRM.
- **Timeline:** "10 business days" everywhere. No "2–4 weeks" left (home, start, about, terms, how-it-works all currently say 2–4 weeks).
- **One nav and one footer** across all pages. One primary CTA pointing to one destination.
- **"Cancel anytime / no contract"** wording consistent (already used in several places).
- **No dead links:** `/faq` and the blog posts resolved or removed.

---

## E. Open questions (need your decision before I edit)

1. **Are you still selling AI services?** The `/services`, `/about`, `/contact`, and `/blog` pages are built entirely around AI chatbots, voice agents, and automation, which are not in the $297 bundle. Do I (a) strip all AI positioning and refocus these pages on the single plan, or (b) keep AI as a separate offering? This is the single biggest decision and it affects four pages.

2. **One conversion path.** You currently have two: the `/start` booking widget + sales video, and the `/contact` "Free Audit" form. Which is the primary CTA, and where should every "Get Started" button point?

3. **The sales video (`website_vsl.mp4`) on `/start`.** Keep it, replace it, or remove it? If kept, it likely still states old pricing/timeline and would need re-recording.

4. **Plan name.** "Grady Digital Website" undersells a bundle that now includes GBP, social, reviews, SEO, and CRM. Want me to rename it (e.g. "The Grady Digital Plan")?

5. **Two design systems.** Unifying the nav/footer/styling across all pages is a larger build than copy edits. Do you want this in scope now, or should I first fix the copy/pricing within the existing two designs and tackle unification separately?

6. **Blog.** Keep and write real posts, or unpublish until ready? Either way the dead links get removed.

7. **Revision policy (Terms §4).** Currently "unlimited in month one, one change/month after." Still accurate under the new model, or should it change?

8. **Delivery window confirmation.** Your brief locks in 10 business days. The whole site currently says 2–4 weeks. Confirming I should change every instance to 10 business days (and not leave any "2–4 weeks" anywhere).

---

*Nothing on the live site has been changed. Once you've answered the open questions and approved the direction, we can go through the edits page by page together.*
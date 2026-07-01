// ─────────────────────────────────────────────────────────────────────────
// Canonical source of truth for Grady Digital's product ladder.
// Every page (Home, Services, Start, Grow) reads plans + capabilities from
// here so the messaging never drifts. Edit copy in ONE place — this file.
// ─────────────────────────────────────────────────────────────────────────

export type PlanId = "website" | "website-reviews" | "growth-system";

export interface Plan {
  id: PlanId;
  name: string;
  price: number; // monthly USD
  /** Who this rung is for, e.g. "Just starting out". Shown as an eyebrow. */
  bestFor: string;
  /** One-line positioning shown under the plan name. */
  tagline: string;
  /**
   * What THIS tier adds. For the first plan these are its base features; for
   * higher tiers the consumer prepends an "Everything in <prev>, plus:" line.
   */
  adds: string[];
  featured?: boolean;
}

/** Shared terms shown near pricing everywhere. */
export const guaranteeTerms = "No setup fee · Month-to-month · Cancel anytime";
export const liveGuarantee =
  "Live in 10 business days, or your next month is free.";

export const plans: Plan[] = [
  {
    id: "website",
    name: "Website",
    price: 97,
    bestFor: "Best for businesses just starting out",
    tagline:
      "A fast, professional website built and managed for you, with one inbox for every lead. Perfect if you just need to look great online and never miss a call.",
    adds: [
      "A fast custom website that turns visitors into calls",
      "Built SEO-optimized so Google can find and rank it",
      "An all-in-one inbox where every call, text, and lead lands",
      "Hosting, updates, security, and speed, all handled for you",
    ],
  },
  {
    id: "website-reviews",
    name: "The Reputation System",
    price: 147,
    featured: true,
    bestFor: "Best for businesses ready to grow",
    tagline:
      "Your website plus a review engine that fills your Google profile with 5-star reviews. The fastest way to look great online and earn the trust that wins the call.",
    adds: [
      "More 5-star reviews, with replies written in your voice",
      "Old, unfair reviews challenged on your behalf",
      "A steady stream of fresh reviews that wins you the click",
    ],
  },
  {
    id: "growth-system",
    name: "The Growth System",
    price: 297,
    bestFor: "Best for businesses ready to own their market",
    tagline:
      "Everything you need to rank higher on Google, get found by the people already searching for what you do, and turn them into paying customers. Built and managed for you.",
    adds: [
      "Your Google profile set up, posted weekly, and cross-posted to Instagram, Facebook & YouTube",
      "Ongoing local SEO so you keep showing up when people search",
      "A simple monthly report tied to real results",
    ],
  },
];

/** The name of the plan a tier inherits from, or null for the base plan. */
export function inheritsFrom(index: number): string | null {
  return index > 0 ? plans[index - 1].name : null;
}

// ─────────────────────────────────────────────────────────────────────────
// Capabilities — the building blocks that make up the plans. Each is tagged
// with the plan it first appears in, so the Services/Home grids reinforce the
// same ladder. `iconKey` is mapped to a lucide icon inside each component.
// ─────────────────────────────────────────────────────────────────────────

export type CapabilityPlanTag =
  | "All plans"
  | "The Reputation System"
  | "The Growth System";

export type CapabilityIcon =
  | "website"
  | "inbox"
  | "reviews"
  | "google-social"
  | "seo"
  | "luke";

export interface Capability {
  iconKey: CapabilityIcon;
  title: string;
  planTag: CapabilityPlanTag;
  body: string;
}

export const capabilities: Capability[] = [
  {
    iconKey: "website",
    title: "Custom Website",
    planTag: "All plans",
    body: "A fast, professional website built around your business that looks great on phones and is SEO-optimized so Google can find and rank it. It turns the people who find you into phone calls and booked jobs, instead of letting them click away to a competitor.",
  },
  {
    iconKey: "inbox",
    title: "All Your Leads in One Inbox",
    planTag: "All plans",
    body: "Every call, text, and lead from your website lands in one place, so nothing slips through the cracks. It's included on every plan, and we set it up for you.",
  },
  {
    iconKey: "reviews",
    title: "More & Better Reviews",
    planTag: "The Reputation System",
    body: "Reviews are what convince a stranger to pick you over the next business. We bring in more 5-star reviews, reply to every one in your voice, and challenge old unfair ones on your behalf.",
  },
  {
    iconKey: "google-social",
    title: "Google Business Profile & Social",
    planTag: "The Growth System",
    body: "Your Google listing is often the first thing a customer sees. We set it up the right way and post to it every week, then cross-post to your Instagram, Facebook, and YouTube so you show up everywhere customers look.",
  },
  {
    iconKey: "seo",
    title: "Get Found on Google (SEO)",
    planTag: "The Growth System",
    body: "SEO just means showing up when people search Google for what you do. The higher you rank, the more you get found by people already looking to buy — ready-to-hire leads with real intent, not tire-kickers. We work on it every month so you climb the results and win those customers before your competitors do.",
  },
  {
    iconKey: "luke",
    title: "Direct Access to Luke",
    planTag: "All plans",
    body: "You work with the person who actually builds and runs your site. No account managers, no middlemen, no being passed around.",
  },
];

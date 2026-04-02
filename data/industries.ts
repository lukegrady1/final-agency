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

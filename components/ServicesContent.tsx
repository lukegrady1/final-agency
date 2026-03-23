"use client";

import {
  MessageSquare,
  Phone,
  Zap,
  Monitor,
  Search,
  Star,
  PhoneMissed,
  RotateCcw,
} from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import ServiceDetail from "./ServiceDetail";

const services = [
  {
    icon: Phone,
    title: "AI Receptionist",
    description:
      "Never miss another call. Our AI answers your phone 24/7, qualifies the lead, and books the appointment — even at 2am on a Saturday.",
    bullets: [
      "Answers calls with your business name and handles FAQs about pricing, hours, and services",
      "Collects caller info, books appointments, and sends SMS confirmations automatically",
      "Escalates complex calls to your team — it never hangs up or gives a bad answer",
    ],
    visual: "voice",
  },
  {
    icon: MessageSquare,
    title: "AI Website Chatbot",
    description:
      "Turn website visitors into booked appointments — automatically, even when you're on a job site.",
    bullets: [
      "Engages visitors instantly with answers about your services, pricing, and availability",
      "Captures name, phone, and service need — then books directly into your calendar",
      "Every conversation is logged in your CRM with real-time notifications",
    ],
    visual: "chat",
  },
  {
    icon: Zap,
    title: "Lead Follow-Up Automation",
    description:
      "Speed-to-lead wins deals. Our system texts new leads within 60 seconds — before they call your competitor.",
    bullets: [
      "Instant text when a lead comes in from any source — website, Google, ads, or missed call",
      "3\u20135 touch follow-up sequence over 7 days with booking links",
      "Automatically stops when the lead responds or books — no spam, no manual work",
    ],
    visual: "workflow",
  },
  {
    icon: PhoneMissed,
    title: "Missed Call Text-Back",
    description:
      "Every missed call is a missed customer. We text them back in under 60 seconds with a booking link.",
    bullets: [
      "Catches leads before they call a competitor — works 24/7 with zero manual effort",
      "Sends a friendly \u201CSorry we missed you\u201D text with a link to book or request a callback",
      "The simplest automation we offer — and one of the highest-ROI",
    ],
    visual: "workflow",
  },
  {
    icon: Star,
    title: "Review & Reputation Automation",
    description:
      "Turn every completed job into a 5-star Google review — automatically, while the experience is still fresh.",
    bullets: [
      "Sends a personalized text 1\u20132 hours after job completion with a one-click Google review link",
      "Optional follow-up reminder if no review within 48 hours",
      "More reviews = higher Google Maps ranking = more organic leads without ad spend",
    ],
    visual: "analytics",
  },
  {
    icon: RotateCcw,
    title: "Lead Reactivation",
    description:
      "You already paid for those old leads sitting in your CRM. We make them pay you back.",
    bullets: [
      "Re-engages cold leads and past customers with personalized SMS and email outreach",
      "3\u20135 touch sequence over 2 weeks — moves interested leads back into your active pipeline",
      "Even a 2\u20133% response rate on 200 old leads = 4\u20136 new bookings with zero ad spend",
    ],
    visual: "workflow",
  },
  {
    icon: Monitor,
    title: "Web Design & Development",
    description:
      "Fast, mobile-first websites designed to turn visitors into calls and bookings. Custom builds, not templates.",
    bullets: [
      "Custom designs that reflect your brand and speak to your local market",
      "Optimized for speed — sub-second load times on mobile",
      "Built with conversion in mind: clear CTAs, click-to-call, and booking integration",
    ],
    visual: "web",
  },
  {
    icon: Search,
    title: "SEO & Google Business Profile",
    description:
      "Show up when locals search for what you do. We handle the technical work so you rank higher and get more calls.",
    bullets: [
      "Full Google Business Profile optimization — photos, keywords, weekly posts",
      "On-page SEO, structured data, and local content strategy",
      "Consistent review generation that directly boosts your Maps ranking",
    ],
    visual: "seo",
  },
];

export default function ServicesContent() {
  return (
    <SectionWrapper>
      <div className="space-y-24">
        {services.map((service, i) => (
          <ServiceDetail
            key={service.title}
            icon={service.icon}
            title={service.title}
            description={service.description}
            bullets={service.bullets}
            visual={service.visual}
            reversed={i % 2 === 1}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}

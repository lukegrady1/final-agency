"use client";

import Link from "next/link";
import {
  MessageSquare,
  Phone,
  Zap,
  Monitor,
  Search,
  BarChart2,
} from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import SectionLabel from "./SectionLabel";
import BlurIn from "./BlurIn";
import { StaggerParent, StaggerChild } from "./StaggerParent";

const services = [
  {
    icon: Phone,
    title: "AI Receptionist",
    body: "Never miss another call. Our AI answers your phone, qualifies the lead, and books the appointment — even at 2am. Most callers can't tell it's not a person.",
    href: "/ai-automation/hvac",
  },
  {
    icon: MessageSquare,
    title: "AI Website Chatbot",
    body: "Turn website visitors into booked appointments while you're on a job. Answers questions, captures contact info, and fills your calendar automatically.",
  },
  {
    icon: Zap,
    title: "Lead Follow-Up & Automations",
    body: "New lead comes in? They get a text within 60 seconds. Missed call? Automatic text-back. Old leads sitting in your CRM? We reactivate them. No manual work required.",
    href: "/ai-automation/plumbers",
  },
  {
    icon: Monitor,
    title: "Web Design & Development",
    body: "Fast, mobile-first websites built to convert visitors into calls and bookings. Custom designs that reflect your brand — not cookie-cutter templates.",
    href: "/website-design/hvac",
  },
  {
    icon: Search,
    title: "SEO & Google Business Profile",
    body: "Show up when locals search for what you do. We handle your Google Business Profile, on-page SEO, and review strategy so customers find you before your competitors.",
    href: "/local-seo/hvac",
  },
  {
    icon: BarChart2,
    title: "Review & Reputation Automation",
    body: "Every completed job triggers an automatic review request. One-click link to Google. Builds your star rating consistently so you rank higher and win more trust.",
  },
];

export default function ServicesOverview() {
  return (
    <SectionWrapper>
      <div className="text-center mb-16">
        <BlurIn>
          <SectionLabel>What We Build for You</SectionLabel>
        </BlurIn>
        <BlurIn delay={0.1}>
          <h2 className="text-3xl md:text-4xl font-medium text-white mt-4">
            Six ways we put your growth on autopilot
          </h2>
        </BlurIn>
        <BlurIn delay={0.2}>
          <p className="text-white/60 text-lg leading-relaxed max-w-2xl mx-auto mt-4">
            AI agents that sell while you sleep, websites that convert, and SEO
            that gets you found first.
          </p>
        </BlurIn>
      </div>

      <StaggerParent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => {
          const Icon = service.icon;
          const content = (
            <>
              <div className="rounded-xl bg-accent/10 p-2 w-fit">
                <Icon className="w-8 h-8 text-accent-light" />
              </div>
              <h3 className="text-lg font-medium text-white mt-4 mb-2">
                {service.title}
              </h3>
              <p className="text-white/60 text-sm leading-relaxed">
                {service.body}
              </p>
              {service.href && (
                <span className="inline-flex items-center text-accent-light text-sm mt-3 group-hover:text-white transition-colors">
                  Learn more &rarr;
                </span>
              )}
            </>
          );
          return (
            <StaggerChild
              key={service.title}
              className="liquid-glass p-6"
            >
              {service.href ? (
                <Link href={service.href} className="block group">
                  {content}
                </Link>
              ) : (
                content
              )}
            </StaggerChild>
          );
        })}
      </StaggerParent>

      <div className="text-center mt-12">
        <Link
          href="/services"
          className="text-accent-light text-sm hover:underline"
        >
          View all services &rarr;
        </Link>
      </div>
    </SectionWrapper>
  );
}

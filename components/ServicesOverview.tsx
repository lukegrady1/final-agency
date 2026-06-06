"use client";

import Link from "next/link";
import {
  Paintbrush,
  Smartphone,
  Zap,
  Wrench,
  Code,
  Search,
} from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import SectionLabel from "./SectionLabel";
import BlurIn from "./BlurIn";
import { StaggerParent, StaggerChild } from "./StaggerParent";

const features = [
  {
    icon: Paintbrush,
    title: "Custom Website",
    body: "Designed from scratch around your business, mobile-first, built to convert. Fully managed hosting, updates, and support.",
  },
  {
    icon: Search,
    title: "Google Business Profile & SEO",
    body: "We optimize your local and organic search presence so customers find you before your competitors.",
  },
  {
    icon: Zap,
    title: "Built to Convert",
    body: "Clear calls to action, click-to-call buttons, and layouts designed to turn visitors into leads and bookings.",
  },
  {
    icon: Wrench,
    title: "Fully Managed",
    body: "Hosting, updates, speed, and security are all handled. You never touch the backend. Need a change? Just ask.",
  },
  {
    icon: Code,
    title: "Direct Access to Luke",
    body: "You work directly with the person building your site. No account managers, no middlemen, no runaround.",
  },
  {
    icon: Smartphone,
    title: "CRM Included",
    body: "Every plan includes access to a lead and messaging app to manage calls, texts, and customer interactions in one place.",
  },
];

export default function ServicesOverview() {
  return (
    <SectionWrapper>
      <div className="text-center mb-16">
        <BlurIn>
          <SectionLabel>What You Get</SectionLabel>
        </BlurIn>
        <BlurIn delay={0.1}>
          <h2 className="text-3xl md:text-4xl font-medium text-white mt-4">
            Everything included for $197/month
          </h2>
        </BlurIn>
        <BlurIn delay={0.2}>
          <p className="text-white/60 text-lg leading-relaxed max-w-2xl mx-auto mt-4">
            A custom website and local SEO strategy built to get you found
            on Google and convert visitors into leads — plus a CRM to manage
            it all.
          </p>
        </BlurIn>
      </div>

      <StaggerParent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature) => {
          const Icon = feature.icon;
          return (
            <StaggerChild
              key={feature.title}
              className="bg-card border border-card-border rounded-2xl p-6"
            >
              <div className="rounded-xl bg-accent/10 p-2 w-fit">
                <Icon className="w-8 h-8 text-accent-light" />
              </div>
              <h3 className="text-lg font-medium text-white mt-4 mb-2">
                {feature.title}
              </h3>
              <p className="text-white/60 text-sm leading-relaxed">
                {feature.body}
              </p>
            </StaggerChild>
          );
        })}
      </StaggerParent>

      <div className="text-center mt-12">
        <Link
          href="/work"
          className="text-accent-light text-sm hover:underline"
        >
          See our work &rarr;
        </Link>
      </div>
    </SectionWrapper>
  );
}

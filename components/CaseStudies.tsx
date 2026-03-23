"use client";

import { CheckCircle2 } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import SectionLabel from "./SectionLabel";
import BlurIn from "./BlurIn";
import { StaggerParent, StaggerChild } from "./StaggerParent";

const caseStudies = [
  {
    industry: "Barber Shop",
    headline: "From 12 missed calls/week to zero",
    tags: ["AI Receptionist", "Web Design", "SEO"],
    beforeAfter: { before: "12+ missed calls per week", after: "Every call answered, 158% more bookings" },
    bullets: [
      "AI receptionist answers every call with the shop's name, books appointments into the calendar, and texts confirmations",
      "New website with online booking — customers schedule themselves at midnight, on weekends, whenever",
      "Google Business Profile hit top 3 local rankings. Organic calls doubled in 8 weeks.",
    ],
  },
  {
    industry: "Family Restaurant",
    headline: "137% more calls with a $0 ad budget",
    tags: ["Web Design", "Google Business Profile", "Review Automation"],
    beforeAfter: { before: "Outdated site, 2.8 Google rating", after: "137% more calls, 4.6 stars" },
    bullets: [
      "Rebuilt website with menu, hours, and click-to-call front and center — page load dropped from 4.2s to 0.9s",
      "Google Business Profile overhauled with photos, keywords, and weekly posts — jumped from page 2 to #3 in local results",
      "Automated review requests after every visit. Went from 2.8 to 4.6 stars in 90 days with 85+ new reviews.",
    ],
  },
  {
    industry: "General Contractor",
    headline: "163% more estimate requests in 90 days",
    tags: ["Web Design", "SEO", "Lead Follow-Up", "Missed Call Text-Back"],
    beforeAfter: { before: "No follow-up, leads going cold", after: "163% more estimates, 40+ new reviews" },
    bullets: [
      "Built service-specific landing pages that rank for \"[service] near me\" — 3 pages in top 5 local results within 60 days",
      "Missed call text-back catches every lead within seconds. Lead follow-up automation texts within 60s and follows up for 7 days.",
      "Automated review requests after every job — 40+ new Google reviews, now the highest-rated contractor in the area",
    ],
  },
];

export default function CaseStudies() {
  return (
    <SectionWrapper>
      <div className="text-center mb-16">
        <BlurIn>
          <SectionLabel>Client Results</SectionLabel>
        </BlurIn>
        <BlurIn delay={0.1}>
          <h2 className="text-3xl md:text-4xl font-medium text-white mt-4">
            What happens when you stop losing leads
          </h2>
        </BlurIn>
      </div>

      <StaggerParent className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {caseStudies.map((study) => (
          <StaggerChild
            key={study.headline}
            className="liquid-glass p-6 flex flex-col"
          >
            <span className="text-xs font-medium text-accent-light uppercase tracking-wider">
              {study.industry}
            </span>
            <h3 className="text-xl font-medium text-white mt-2">
              {study.headline}
            </h3>
            <div className="flex flex-wrap gap-2 mt-3">
              {study.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs rounded-full bg-accent/10 text-accent-light px-2 py-0.5 border border-accent/20"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Before / After */}
            <div className="grid grid-cols-2 gap-3 mt-5 mb-5">
              <div className="rounded-xl bg-red-500/[0.06] border border-red-500/10 px-3 py-2">
                <span className="block text-[10px] uppercase tracking-wider text-red-400/70 font-medium">Before</span>
                <span className="text-xs text-white/50 leading-snug">{study.beforeAfter.before}</span>
              </div>
              <div className="rounded-xl bg-emerald-500/[0.06] border border-emerald-500/10 px-3 py-2">
                <span className="block text-[10px] uppercase tracking-wider text-emerald-400/70 font-medium">After</span>
                <span className="text-xs text-white/70 leading-snug">{study.beforeAfter.after}</span>
              </div>
            </div>

            <ul className="space-y-3 flex-1">
              {study.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-2 text-sm text-white/60">
                  <CheckCircle2 className="w-4 h-4 text-accent-light shrink-0 mt-0.5" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </StaggerChild>
        ))}
      </StaggerParent>
    </SectionWrapper>
  );
}

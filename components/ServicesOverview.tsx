"use client";

import Link from "next/link";
import {
  Paintbrush,
  MapPin,
  Star,
  TrendingUp,
  MessageSquare,
  UserRound,
} from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import SectionLabel from "./SectionLabel";
import BlurIn from "./BlurIn";
import { StaggerParent, StaggerChild } from "./StaggerParent";

const features = [
  {
    icon: Paintbrush,
    title: "Custom Website",
    body: "A fast, professional website built around your business that looks great on phones. It turns the people who find you into phone calls and booked jobs, instead of letting them click away to a competitor.",
  },
  {
    icon: MapPin,
    title: "Google Business Profile & Social",
    body: "Your Google Business Profile is the listing with your photos, hours, reviews, and call button that shows up on Google Maps and search. We set it up the right way and post to it every week, then share those posts to your Instagram, Facebook, and YouTube so you show up everywhere customers look.",
  },
  {
    icon: Star,
    title: "More and Better Reviews",
    body: "Reviews are what convince a stranger to pick you over the next business. We help you bring in more of them, reply to every one for you, and work to get old unfair ones taken down.",
  },
  {
    icon: TrendingUp,
    title: "Get Found on Google (SEO)",
    body: "SEO just means showing up when people search Google for what you do. We work on it every month so you climb the results and customers find you before they find your competitors.",
  },
  {
    icon: MessageSquare,
    title: "All Your Leads in One Inbox",
    body: "An all-in-one inbox is one place where every call, text, and lead from your website lands, so nothing slips through the cracks. It's included, and we set it up for you.",
  },
  {
    icon: UserRound,
    title: "Direct Access to Luke",
    body: "You work with the person who actually builds and runs your site. No account managers, no middlemen, no being passed around.",
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
            The full Growth System, $297 a month
          </h2>
        </BlurIn>
        <BlurIn delay={0.2}>
          <p className="text-white/60 text-lg leading-relaxed max-w-2xl mx-auto mt-4">
            A custom website, your Google presence posted and cross-posted,
            a steady stream of better reviews, ongoing SEO, and an all-in-one
            inbox to manage it all. Built and managed for you. Just need the
            website and inbox? That&apos;s the Website plan at $97 a month.
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

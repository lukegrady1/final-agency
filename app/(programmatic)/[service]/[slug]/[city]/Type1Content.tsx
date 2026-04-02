"use client";

import { CheckCircle2 } from "lucide-react";
import BlurIn from "@/components/BlurIn";
import FadeUp from "@/components/FadeUp";
import type { Service, Industry, City } from "@/data";

interface Type1ContentProps {
  service: Service;
  industry: Industry;
  city: City;
}

export default function Type1Content({
  service,
  industry,
  city,
}: Type1ContentProps) {
  return (
    <>
      {/* Section: Intro */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <BlurIn>
            <div className="max-w-3xl text-white/70 text-base leading-relaxed space-y-4">
              <p>
                If you run a {industry.singular} in {city.name},{" "}
                {city.state}, you already know how competitive it can be to
                stand out online. Homeowners and property managers in{" "}
                {city.name} are searching Google every day for{" "}
                {industry.name.toLowerCase()} services — and if your business
                isn&apos;t ranking, those calls are going to your competitors.
              </p>
              <p>
                Grady Digital specializes in {service.name.toLowerCase()} for
                local service businesses across {city.county} and greater{" "}
                {city.state}. We work exclusively with trades and home service
                companies, which means every strategy we build is designed
                around what actually moves the needle for{" "}
                {industry.name.toLowerCase()} — not generic tactics recycled
                from e-commerce or SaaS.
              </p>
              <p>
                Whether you&apos;re a single-truck {industry.singular} trying
                to grow, or an established {city.name} operation looking to
                dominate your local market, we have a{" "}
                {service.name.toLowerCase()} approach that fits where you are
                and where you want to go. {city.uniqueSentence}
              </p>
            </div>
          </BlurIn>
        </div>
      </section>

      {/* Section: Pain Points */}
      <section className="py-24 lg:py-32 bg-white/[0.02] border-y border-white/8">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <FadeUp>
            <h2 className="text-2xl md:text-3xl font-medium text-white mb-4">
              Do Any of These Sound Familiar for Your {city.name}{" "}
              {industry.shortName} Business?
            </h2>
            <p className="text-white/60 text-base leading-relaxed max-w-2xl mb-8">
              You&apos;re running a great {industry.singular} in {city.name} —
              but your online presence isn&apos;t keeping up. Here&apos;s what
              we hear most from {industry.name.toLowerCase()} business owners
              before they start working with us:
            </p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <ul className="space-y-3 max-w-2xl">
              {industry.painPoints.map((point, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-white/70 text-base"
                >
                  <CheckCircle2 className="w-5 h-5 text-accent-light shrink-0 mt-0.5" />
                  {point}
                </li>
              ))}
            </ul>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="text-white/60 text-base mt-8 max-w-2xl">
              If even one of these hits close to home,{" "}
              {service.name.toLowerCase()} is exactly what your {city.name}{" "}
              {industry.singular} needs.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Section: Service Overview */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <FadeUp>
            <h2 className="text-2xl md:text-3xl font-medium text-white mb-4">
              What {service.name} Looks Like for {industry.name} in {city.name}
            </h2>
            <p className="text-white/60 text-base leading-relaxed max-w-3xl mb-4">
              {service.name} for {industry.name.toLowerCase()} isn&apos;t
              one-size-fits-all. What works for a national brand doesn&apos;t
              work for a local {industry.singular} trying to win customers in{" "}
              {city.name} and nearby towns. Here&apos;s how Grady Digital
              approaches {service.name.toLowerCase()} specifically for{" "}
              {industry.name.toLowerCase()} in your market:
            </p>
            <p className="text-white/60 text-base leading-relaxed max-w-3xl mb-8">
              {service.description}
            </p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p className="text-white/80 text-base font-medium mb-4">
              When you work with us, your {service.name.toLowerCase()}{" "}
              engagement includes:
            </p>
            <ul className="space-y-3 max-w-2xl mb-8">
              {service.includes.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-white/70 text-base"
                >
                  <CheckCircle2 className="w-5 h-5 text-accent-light shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="text-white/60 text-base leading-relaxed max-w-3xl">
              Everything is tailored to the {city.name}, {city.state} market —
              we&apos;re not running a cookie-cutter playbook. We look at what
              your competitors in {city.name} and {city.county} are doing, find
              the gaps, and build a strategy that puts your {industry.singular}{" "}
              in front of the right people at the right time.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Section: Why Grady Digital */}
      <section className="py-24 lg:py-32 bg-white/[0.02] border-y border-white/8">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <FadeUp>
            <h2 className="text-2xl md:text-3xl font-medium text-white mb-10">
              Why {city.name} {industry.name} Work With Grady Digital
            </h2>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
            <FadeUp delay={0.05}>
              <div>
                <h3 className="text-lg font-medium text-white mb-2">
                  We only work with local service businesses.
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  We don&apos;t work with e-commerce brands, tech startups, or
                  national chains. Every client we serve is a local service
                  business — {industry.name.toLowerCase()},{" "}
                  plumbing, electrical, landscaping, and similar trades. That
                  focus means our strategies are battle-tested specifically for
                  companies like yours.
                </p>
              </div>
            </FadeUp>
            <FadeUp delay={0.1}>
              <div>
                <h3 className="text-lg font-medium text-white mb-2">
                  We&apos;re based in Central Massachusetts.
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  We&apos;re not some faceless agency in another state.
                  We&apos;re based in Leominster, MA — close to {city.name} —
                  and we understand the {city.county} market, the local
                  competition, and what {city.name} customers actually respond
                  to.
                </p>
              </div>
            </FadeUp>
            <FadeUp delay={0.15}>
              <div>
                <h3 className="text-lg font-medium text-white mb-2">
                  We use AI to move faster and deliver more.
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  Our team uses AI-powered workflows to build, optimize, and
                  report faster than traditional agencies — without sacrificing
                  quality. That means you get more done for your{" "}
                  {service.name.toLowerCase()} budget.
                </p>
              </div>
            </FadeUp>
            <FadeUp delay={0.2}>
              <div>
                <h3 className="text-lg font-medium text-white mb-2">
                  No long-term contracts.
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  We earn your business every month. If you&apos;re not seeing
                  results from your {city.name}{" "}
                  {service.name.toLowerCase()} campaign, you&apos;re not locked
                  in.
                </p>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Section: Expected Outcomes */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <FadeUp>
            <h2 className="text-2xl md:text-3xl font-medium text-white mb-4">
              What {city.name} {industry.name} Can Expect from {service.name}
            </h2>
            <p className="text-white/60 text-base leading-relaxed max-w-2xl mb-8">
              Here&apos;s what {industry.name.toLowerCase()} in {city.name}{" "}
              typically experience after partnering with Grady Digital for{" "}
              {service.name.toLowerCase()}:
            </p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <ul className="space-y-3 max-w-2xl mb-8">
              {service.outcomes.map((outcome, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-white/70 text-base"
                >
                  <CheckCircle2 className="w-5 h-5 text-accent-light shrink-0 mt-0.5" />
                  {outcome}
                </li>
              ))}
            </ul>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="text-white/60 text-base leading-relaxed max-w-2xl">
              Most {city.name} {industry.name.toLowerCase()} clients see
              measurable movement within the first 60–90 days.{" "}
              {service.name} is a longer-term investment — the results compound
              month over month as your authority in the {city.name} market
              grows.
            </p>
          </FadeUp>
        </div>
      </section>
    </>
  );
}

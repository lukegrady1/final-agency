import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Paintbrush, Code, Eye, Target, DollarSign, Wrench, Search } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import SectionLabel from "@/components/SectionLabel";
import BlurIn from "@/components/BlurIn";
import { StaggerParent, StaggerChild } from "@/components/StaggerParent";

export const metadata: Metadata = {
  title: "About",
  description:
    "Software engineer building professional, conversion-focused websites for local service businesses. No contracts, fully managed, live in two weeks.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <main>
      {/* Hero — two column */}
      <section className="relative pt-40 pb-24 overflow-hidden">
        <div
          className="absolute inset-0 opacity-50"
          style={{
            background:
              "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(108,106,246,0.18) 0%, transparent 70%)",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <BlurIn>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white leading-tight">
                  Because Businesses Deserve Websites That Actually Work
                </h1>
              </BlurIn>
              <BlurIn delay={0.15}>
                <p className="text-white/60 text-lg leading-relaxed mt-6">
                  Most businesses either overpay thousands upfront, or end up
                  with a template nobody manages. We built Grady Digital to
                  change that: custom, conversion-focused websites built and
                  managed for you at a flat monthly rate.
                </p>
              </BlurIn>
            </div>
            <BlurIn delay={0.2}>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-card border border-card-border">
                <Image
                  src="/site_after.PNG"
                  alt="Example website build by Grady Digital"
                  fill
                  className="object-contain object-center"
                />
                <p className="absolute bottom-3 left-0 right-0 text-center text-white/40 text-xs">
                  Example build preview
                </p>
              </div>
            </BlurIn>
          </div>
        </div>
      </section>

      {/* Who's Behind Grady Digital */}
      <SectionWrapper>
        <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-12 items-start max-w-5xl mx-auto">
          <BlurIn>
            <div className="flex flex-col gap-4">
              <div className="relative w-48 h-48 rounded-2xl overflow-hidden bg-white/5 border border-white/10">
                <Image
                  src="/headshot.PNG"
                  alt="Luke Grady"
                  fill
                  className="object-cover object-[center_25%]"
                />
              </div>
            </div>
          </BlurIn>
          <div>
            <BlurIn>
              <SectionLabel>Who&apos;s behind Grady Digital</SectionLabel>
            </BlurIn>
            <BlurIn delay={0.1}>
              <h2 className="text-3xl md:text-4xl font-medium text-white mt-4">
                Hey, I&apos;m Luke.
              </h2>
            </BlurIn>
            <div className="space-y-4 mt-6">
              <BlurIn delay={0.15}>
                <p className="text-white/60 text-base leading-relaxed">
                  I&apos;ve helped businesses increase their online visibility,
                  capture more leads, and turn their websites into systems that
                  actually generate revenue. I know what it takes to get people
                  to stop, trust, and take action. I also know what it costs
                  when those things are missing from a website.
                </p>
              </BlurIn>
              <BlurIn delay={0.2}>
                <p className="text-white/60 text-base leading-relaxed">
                  I started Grady Digital because most business websites I saw
                  were leaving real money on the table. Not because the owners
                  weren&apos;t great at what they do. Because their sites
                  weren&apos;t doing the work. A blurry logo, a missing phone
                  number, a headline that says nothing. Small things that cost
                  real customers.
                </p>
              </BlurIn>
              <BlurIn delay={0.25}>
                <p className="text-white/60 text-base leading-relaxed">
                  The web is changing fast. Most business owners don&apos;t have
                  time to keep up with all of it. That&apos;s what Grady Digital
                  is for. We build and manage your website so it keeps working
                  for you, no matter how the landscape shifts.
                </p>
              </BlurIn>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* How We Build */}
      <SectionWrapper className="bg-white/[0.02] border-y border-white/[0.08]">
        <div className="text-center max-w-3xl mx-auto">
          <BlurIn>
            <h2 className="text-3xl md:text-4xl font-medium text-white">
              Custom design. Clean code. You approve.
            </h2>
          </BlurIn>
          <BlurIn delay={0.1}>
            <p className="text-white/60 text-base leading-relaxed mt-4">
              Nothing goes live until you&apos;re happy with it. We walk through
              the site together and make any final adjustments before launch.
            </p>
          </BlurIn>
        </div>
        <StaggerParent className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {[
            {
              icon: Paintbrush,
              title: "Designed for you",
              body: "Custom layouts and copy built around your business, not a generic template.",
            },
            {
              icon: Code,
              title: "Engineer-built",
              body: "Clean code, fast load times, and a site that works on every device.",
            },
            {
              icon: Eye,
              title: "You approve",
              body: "Preview your site, request changes, and launch when you're ready.",
            },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <StaggerChild
                key={item.title}
                className="bg-card border border-card-border rounded-2xl p-6 text-center"
              >
                <div className="rounded-xl bg-accent/10 p-3 w-fit mx-auto">
                  <Icon className="w-6 h-6 text-accent-light" />
                </div>
                <h3 className="text-lg font-medium text-white mt-4">
                  {item.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed mt-2">
                  {item.body}
                </p>
              </StaggerChild>
            );
          })}
        </StaggerParent>
      </SectionWrapper>

      {/* Our Mission */}
      <SectionWrapper>
        <div className="text-center mb-12">
          <BlurIn>
            <h2 className="text-3xl md:text-4xl font-medium text-white">
              Our Mission
            </h2>
          </BlurIn>
        </div>
        <StaggerParent className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: Target,
              title: "Conversion-Focused",
              body: "Every site is built to turn visitors into leads, calls, and customers.",
            },
            {
              icon: DollarSign,
              title: "No Hidden Costs",
              body: "No contracts. No setup fees. No tech headaches.",
            },
            {
              icon: Wrench,
              title: "Built and Managed For You",
              body: "We handle design, development, hosting, and ongoing updates.",
            },
            {
              icon: Search,
              title: "Built to Be Found",
              body: "Optimized from day one so customers can find you online.",
            },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <StaggerChild
                key={item.title}
                className="bg-card border border-card-border rounded-2xl p-6 text-center"
              >
                <div className="rounded-xl bg-accent/10 p-3 w-fit mx-auto">
                  <Icon className="w-6 h-6 text-accent-light" />
                </div>
                <h3 className="text-lg font-medium text-white mt-4">
                  {item.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed mt-2">
                  {item.body}
                </p>
              </StaggerChild>
            );
          })}
        </StaggerParent>
      </SectionWrapper>

      {/* CTA Banner */}
      <SectionWrapper>
        <BlurIn>
          <div className="bg-accent/90 rounded-2xl px-8 py-16 text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-medium text-white">
              Professional website. Managed for you.
            </h2>
            <p className="text-white/80 text-base leading-relaxed max-w-xl mx-auto mt-4">
              Book a short call. We&apos;ll build your website and walk through
              it together. Launch when you&apos;re ready.
            </p>
            <Link
              href="/start"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 bg-white text-background font-medium text-sm hover:bg-white/90 transition-colors duration-200 mt-8"
            >
              Get Started
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </BlurIn>
      </SectionWrapper>
    </main>
  );
}

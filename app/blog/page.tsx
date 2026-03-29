import type { Metadata } from "next";
import Link from "next/link";
import SectionWrapper from "@/components/SectionWrapper";
import BlurIn from "@/components/BlurIn";
import { StaggerParent, StaggerChild } from "@/components/StaggerParent";

export const metadata: Metadata = {
  title: "AI Automation & Local SEO Blog for Service Businesses",
  description:
    "Practical guides on AI receptionists, chatbots, local SEO, and lead generation for HVAC, contractors, salons, and service businesses.",
  alternates: { canonical: "/blog" },
};

const posts = [
  {
    title:
      "The 5-Minute Window: Why Local Service Businesses Lose Jobs Before They Even Know They Had Them",
    category: "AI Automation",
    date: "March 29, 2026",
    excerpt:
      "Most local service businesses miss 62% of inbound calls — and 85% of those callers never call back. Here's how the first 5 minutes after a missed call determines whether you win or lose the job.",
    slug: "five-minute-window-speed-to-lead",
  },
  {
    title:
      "Why Every Local Service Business Needs an AI Receptionist in 2026",
    category: "AI Automation",
    date: "January 15, 2026",
    excerpt:
      "Over 60% of callers who can't reach a business will call a competitor instead. Here's how AI receptionists answer every call, book appointments, and capture leads 24/7.",
    slug: "ai-receptionist-local-business",
  },
  {
    title:
      "The 5-Step Local SEO Checklist That Actually Moves the Needle",
    category: "SEO",
    date: "February 3, 2026",
    excerpt:
      "Google Business Profile optimization is the fastest way to get more local calls. Here's the exact checklist we run for every new client.",
    slug: "local-seo-checklist",
  },
  {
    title:
      "What We Learned Building 20+ AI Chatbots for Small Businesses",
    category: "AI Automation",
    date: "March 1, 2026",
    excerpt:
      "After deploying chatbots for barber shops, HVAC companies, and contractors, here are the 8 lessons that separate bots that book jobs from bots that get ignored.",
    slug: "ai-chatbot-lessons",
  },
];

export default function BlogPage() {
  return (
    <main>
      <section className="pt-40 pb-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <BlurIn>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white">
              The Grady Digital Blog
            </h1>
          </BlurIn>
          <BlurIn delay={0.1}>
            <p className="text-white/60 text-lg leading-relaxed max-w-2xl mt-4">
              Insights on AI automation, local SEO, and what&apos;s actually
              working for small businesses right now.
            </p>
          </BlurIn>
        </div>
      </section>

      <SectionWrapper>
        <StaggerParent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <StaggerChild
              key={post.slug}
              className="bg-card border border-card-border rounded-2xl p-6 flex flex-col"
            >
              <span className="text-xs rounded-full bg-accent/10 text-accent-light px-2 py-0.5 border border-accent/20 w-fit">
                {post.category}
              </span>
              <h2 className="text-lg font-medium text-white mt-3">
                {post.title}
              </h2>
              <p className="text-white/60 text-sm leading-relaxed mt-2 flex-1">
                {post.excerpt}
              </p>
              <div className="flex items-center justify-between mt-4">
                <span className="text-white/40 text-xs">{post.date}</span>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-accent-light text-sm hover:underline"
                >
                  Read more &rarr;
                </Link>
              </div>
            </StaggerChild>
          ))}
        </StaggerParent>

        {/* Coming Soon */}
        <div className="mt-16 text-center border border-white/10 rounded-2xl p-8">
          <p className="text-white/60 text-sm">
            More posts coming soon. Subscribe for updates when new content
            drops.
          </p>
          <div className="flex items-center justify-center gap-2 mt-4 max-w-sm mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="bg-white/5 border border-white/15 rounded-xl px-4 py-2.5 text-white placeholder:text-white/30 focus:outline-none focus:border-accent/60 flex-1 text-sm"
            />
            <button className="rounded-full px-5 py-2.5 bg-foreground text-background font-medium text-sm hover:bg-white/90 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </SectionWrapper>
    </main>
  );
}

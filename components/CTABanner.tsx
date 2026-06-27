import Link from "next/link";
import BlurIn from "./BlurIn";

export default function CTABanner() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(108,106,246,0.15) 0%, transparent 70%)",
        }}
      />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 text-center">
        <BlurIn>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white">
            Three plans. From $97 a month.
          </h2>
        </BlurIn>
        <BlurIn delay={0.1}>
          <p className="text-white/60 text-lg leading-relaxed max-w-2xl mx-auto mt-6">
            A custom website with one inbox for your leads at $97/month, Website
            + Reviews with a 5-star review engine at $147/month, or the full
            Growth System — Google presence and SEO too — at $297/month. Built
            and managed for you. No setup fee, cancel anytime.
          </p>
        </BlurIn>
        <BlurIn delay={0.2}>
          <div className="flex items-center justify-center gap-4 flex-wrap mt-10">
            <Link
              href="/start"
              className="inline-flex items-center rounded-full px-5 py-3 bg-foreground text-background font-medium text-sm hover:bg-white/90 transition-colors duration-200"
            >
              Get Started
            </Link>
            <Link
              href="/work"
              className="inline-flex items-center rounded-full px-8 py-3 bg-white/10 backdrop-blur-sm text-white font-medium text-sm hover:bg-white/20 transition-colors duration-200"
            >
              See Our Work
            </Link>
          </div>
        </BlurIn>
        <BlurIn delay={0.3}>
          <div className="flex items-center justify-center gap-6 mt-8">
            <span className="text-white/40 text-sm">Fully managed — We handle everything</span>
          </div>
        </BlurIn>
      </div>
    </section>
  );
}

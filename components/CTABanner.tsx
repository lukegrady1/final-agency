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
            How many leads did you lose this week?
          </h2>
        </BlurIn>
        <BlurIn delay={0.1}>
          <p className="text-white/60 text-lg leading-relaxed max-w-2xl mx-auto mt-6">
            We&apos;ll audit your website, Google presence, and lead capture
            process — then show you exactly where you&apos;re leaving money on
            the table. Free. No strings.
          </p>
        </BlurIn>
        <BlurIn delay={0.2}>
          <div className="flex items-center justify-center gap-4 flex-wrap mt-10">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full px-5 py-3 bg-foreground text-background font-medium text-sm hover:bg-white/90 transition-colors duration-200"
            >
              Get Your Free Audit
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center rounded-full px-8 py-3 bg-white/10 backdrop-blur-sm text-white font-medium text-sm hover:bg-white/20 transition-colors duration-200"
            >
              See What We Build
            </Link>
          </div>
        </BlurIn>
        <BlurIn delay={0.3}>
          <div className="flex items-center justify-center gap-6 flex-wrap mt-8">
            <span className="text-white/40 text-sm">
              Free Audit — No cost, no commitment
            </span>
            <span className="text-white/40 text-sm">
              Fast Response — Within 24 hours
            </span>
            <span className="text-white/40 text-sm">
              No Contracts — Cancel anytime
            </span>
          </div>
        </BlurIn>
      </div>
    </section>
  );
}

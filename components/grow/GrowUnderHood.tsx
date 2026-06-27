import { Star } from "lucide-react";
import type { CSSProperties, ReactNode } from "react";
import Reveal from "./Reveal";
import AuroraBackdrop from "./AuroraBackdrop";

function Card({
  index,
  eyebrow,
  eyebrowColor,
  glow,
  title,
  body,
  children,
}: {
  index: number;
  eyebrow: string;
  eyebrowColor: string;
  glow: string;
  title: string;
  body: string;
  children: ReactNode;
}) {
  return (
    <Reveal
      delay={index * 110}
      className={`group flex flex-col rounded-3xl border border-black/[0.07] bg-white p-6 lg:p-7 shadow-xl shadow-[#0c0b1e]/[0.05] transition-all duration-300 hover:-translate-y-1 hover:border-black/15 ${glow}`}
    >
      <span
        className={`text-xs font-semibold uppercase tracking-wide ${eyebrowColor}`}
      >
        {eyebrow}
      </span>
      <h3 className="mt-2 text-xl font-medium text-[#0c0b1e]">{title}</h3>
      <p className="mt-2 text-[#0c0b1e]/60 text-sm leading-relaxed">{body}</p>
      <div className="mt-6 flex-1 flex items-end">{children}</div>
    </Reveal>
  );
}

export default function GrowUnderHood() {
  return (
    <section className="relative overflow-hidden grain-overlay py-24 lg:py-32 border-t border-black/[0.06]">
      <AuroraBackdrop tone="indigo" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-[#8b3fd6]">
            <span className="w-6 h-px bg-violet" />
            A look under the hood
          </span>
          <h2 className="mt-4 text-4xl sm:text-5xl font-medium tracking-tight leading-[1.05] text-[#0c0b1e]">
            Automation that still{" "}
            <span className="grow-gradient-text font-display italic">
              feels human.
            </span>
          </h2>
          <p className="mt-5 text-[#0c0b1e]/60 text-lg leading-relaxed">
            The system does the heavy lifting in the background, but every
            message still sounds like you wrote it yourself.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {/* Card 1 — SMS review request */}
          <Card
            index={0}
            eyebrow="Smart review requests"
            eyebrowColor="text-[#0e8090]"
            glow="hover:shadow-2xl hover:shadow-cyan/15"
            title="Asked at the right moment"
            body="Right after a great job, the customer gets a friendly text with a one-tap path to your Google profile."
          >
            <div className="w-full rounded-2xl bg-black/[0.03] border border-black/[0.06] p-4 space-y-3">
              <div className="max-w-[85%] rounded-2xl rounded-tl-sm bg-black/[0.05] px-3.5 py-2.5 text-[#0c0b1e]/75 text-xs leading-relaxed">
                Hi Sarah — thanks for choosing us today! Mind sharing a quick
                review? It takes about a minute.
              </div>
              <div className="max-w-[60%] ml-auto rounded-2xl rounded-br-sm bg-gradient-to-br from-cyan to-accent px-3.5 py-2.5 text-white text-xs font-medium text-center shadow-lg shadow-cyan/30">
                ⭐ Leave a review
              </div>
            </div>
          </Card>

          {/* Card 2 — review + reply */}
          <Card
            index={1}
            eyebrow="Replies in your voice"
            eyebrowColor="text-[#b45309]"
            glow="hover:shadow-2xl hover:shadow-amber/15"
            title="Every review answered"
            body="New reviews get a thoughtful reply that sounds like you — fast, personal, and tuned to your brand."
          >
            <div className="w-full rounded-2xl bg-black/[0.03] border border-black/[0.06] p-4 space-y-3">
              <div>
                <div className="flex items-center gap-1">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <Star key={i} className="w-3 h-3 fill-amber text-amber" />
                  ))}
                </div>
                <p className="mt-1.5 text-[#0c0b1e]/75 text-xs leading-relaxed">
                  &ldquo;Showed up on time and did fantastic work. Highly
                  recommend.&rdquo;
                </p>
              </div>
              <div className="rounded-xl border-l-2 border-violet/50 bg-violet/[0.07] pl-3 pr-2 py-2">
                <div className="text-[10px] uppercase tracking-wide text-[#8b3fd6] font-semibold">
                  Your reply
                </div>
                <p className="mt-1 text-[#0c0b1e]/60 text-xs leading-relaxed">
                  Thanks so much, Mike — it was a pleasure. We&apos;re here
                  whenever you need us!
                </p>
              </div>
            </div>
          </Card>

          {/* Card 3 — growth chart */}
          <Card
            index={2}
            eyebrow="Clear monthly proof"
            eyebrowColor="text-[#8b3fd6]"
            glow="hover:shadow-2xl hover:shadow-violet/15"
            title="Growth you can see"
            body="A simple monthly view of reviews, ranking, and calls — so you always know it's working."
          >
            <div className="w-full rounded-2xl bg-black/[0.03] border border-black/[0.06] p-4">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] uppercase tracking-wide text-[#0c0b1e]/40 font-semibold">
                  Visibility momentum
                </span>
                <span className="text-xs font-medium text-[#0e8090]">+38%</span>
              </div>
              <div className="flex items-end gap-1.5 h-20">
                {[28, 36, 33, 48, 54, 70, 88].map((h, i) => (
                  <div
                    key={i}
                    className="grow-chart-bar flex-1 rounded-t-md bg-gradient-to-t from-accent/40 via-violet/70 to-cyan"
                    style={
                      {
                        height: `${h}%`,
                        animationDelay: `${200 + i * 80}ms`,
                      } as CSSProperties
                    }
                  />
                ))}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}

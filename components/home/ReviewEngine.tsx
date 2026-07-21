import { Nfc, Workflow, Star, Copy, MessageSquare, ChevronRight } from "lucide-react";
import type { ComponentType, ReactNode } from "react";
import Reveal from "../grow/Reveal";
import AuroraBackdrop from "../grow/AuroraBackdrop";

// Homepage deep-dive on the Reputation review engine: how a review actually
// gets captured (NFC tap in person, or CRM automation), and what happens on the
// custom review portal (star rating → private routing for low, generated Google
// review for high). The whole point is removing friction.
//
// Desktop and mobile use different layouts on purpose: desktop keeps the
// 3-across card grid; mobile gets two-column capture cards with an "or" between
// them and a staggered cascade for the step flow.

function Stars({ filled, total = 5 }: { filled: number; total?: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: total }).map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${
            i < filled
              ? "fill-amber text-amber"
              : "fill-black/[0.06] text-black/15"
          }`}
        />
      ))}
    </div>
  );
}

function FlowCard({
  n,
  title,
  body,
  className,
  children,
}: {
  n: number;
  title: string;
  body: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <Reveal
      delay={n * 100}
      className={`flex flex-col rounded-2xl md:rounded-3xl border border-black/[0.07] bg-white p-4 md:p-6 shadow-xl shadow-[#0c0b1e]/[0.05] ${
        className ?? ""
      }`}
    >
      <div className="flex items-center gap-2.5">
        <span className="grid place-items-center w-6 h-6 rounded-full bg-accent/10 text-accent text-xs font-semibold">
          {n}
        </span>
        <h4 className="text-base md:text-lg font-medium text-[#0c0b1e]">
          {title}
        </h4>
      </div>
      <p className="mt-2 text-[#0c0b1e]/60 text-xs md:text-sm leading-snug md:leading-relaxed">
        {body}
      </p>
      <div className="mt-3 md:mt-5 flex-1 flex items-end">{children}</div>
    </Reveal>
  );
}

// ── Portal step mockups (shared by desktop grid and mobile stagger) ──────────
const steps: {
  n: number;
  title: string;
  body: string;
  mockup: () => ReactNode;
}[] = [
  {
    n: 1,
    title: "They pick their stars",
    body: "One tap opens your review page — a custom portal we build for your business. All they do is choose a rating.",
    mockup: () => (
      <div className="w-full rounded-2xl bg-black/[0.03] border border-black/[0.06] p-3 md:p-4">
        <div className="rounded-xl bg-white border border-black/[0.06] p-3 md:p-3.5 shadow-sm">
          <div className="text-[10px] uppercase tracking-wide text-[#0c0b1e]/40 font-semibold">
            Your Business
          </div>
          <div className="mt-1 text-sm font-medium text-[#0c0b1e]">
            How was your visit?
          </div>
          <div className="mt-3">
            <div className="flex items-center gap-1.5">
              {[0, 1, 2, 3, 4].map((i) => (
                <Star
                  key={i}
                  className="w-[22px] h-[22px] md:w-6 md:h-6 fill-amber text-amber"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    n: 2,
    title: "It routes them for you",
    body: "1–3 stars goes straight to your inbox as private feedback, so you can make it right — and it never touches your public rating. 4–5 stars heads to Google.",
    mockup: () => (
      <div className="w-full rounded-2xl bg-black/[0.03] border border-black/[0.06] p-3 md:p-4 space-y-2.5">
        <div className="flex items-center justify-between rounded-xl bg-white border border-black/[0.06] px-3 py-2.5">
          <Stars filled={2} />
          <span className="inline-flex items-center gap-1 text-[11px] font-medium text-[#0e8090]">
            <MessageSquare className="w-3 h-3" />
            Private to you
          </span>
        </div>
        <div className="flex items-center justify-between rounded-xl bg-white border border-accent/25 ring-1 ring-accent/10 px-3 py-2.5">
          <Stars filled={5} />
          <span className="text-[11px] font-semibold text-accent">→ Google</span>
        </div>
      </div>
    ),
  },
  {
    n: 3,
    title: "The review writes itself",
    body: "For happy customers, we generate a review packed with the keywords Google rewards. They copy it in one tap, land on your Google page, paste, and it's posted — they never have to think of what to say.",
    mockup: () => (
      <div className="w-full rounded-2xl bg-black/[0.03] border border-black/[0.06] p-3 md:p-4">
        <div className="rounded-xl bg-white border border-black/[0.06] p-3 md:p-3.5 shadow-sm">
          <p className="text-[11px] text-[#0c0b1e]/70 leading-relaxed italic">
            &ldquo;Fast, professional, and fairly priced &mdash; the best
            emergency plumber in town. Fixed our burst pipe same day. Highly
            recommend.&rdquo;
          </p>
          <div className="mt-3 flex items-center justify-center gap-1.5 rounded-full bg-accent text-white text-[11px] font-medium py-2 shadow-lg shadow-accent/25">
            <Copy className="w-3 h-3" />
            Copy &amp; post to Google
          </div>
        </div>
      </div>
    ),
  },
];

// Mobile stagger widths + elbow-connector positions. Each card is offset a bit
// further right; the connector's vertical line drops from the previous card's
// bottom-left and turns 90° right to land at the next card's left-middle.
const cardClass = ["w-full", "w-[88%] ml-auto", "w-[78%] ml-auto"];
const elbowClass = [
  "",
  "left-[14px] right-[calc(88%_+_12px)]",
  "left-[calc(12%_+_14px)] right-[calc(78%_+_12px)]",
];

// L-shaped connector: a box with left + bottom borders (rounded inner corner)
// draws "down then right"; the chevron is the arrowhead landing on the card.
function Elbow({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`absolute -top-8 bottom-1/2 rounded-bl-[14px] border-l-2 border-b-2 border-accent/50 ${className}`}
    >
      <ChevronRight
        className="absolute right-0 bottom-0 translate-x-1/2 translate-y-1/2 w-4 h-4 text-accent/70"
        strokeWidth={2.5}
      />
    </div>
  );
}

// Vertical capture card used only in the mobile two-column layout.
function MobileCaptureCard({
  icon: Icon,
  iconClass,
  title,
  body,
  delay,
}: {
  icon: ComponentType<{ className?: string }>;
  iconClass: string;
  title: string;
  body: string;
  delay?: number;
}) {
  return (
    <Reveal
      delay={delay}
      className="flex flex-col items-center text-center rounded-2xl border border-black/[0.07] bg-white p-4 shadow-lg shadow-[#0c0b1e]/[0.05]"
    >
      <span
        className={`grid place-items-center w-11 h-11 rounded-xl border ${iconClass}`}
      >
        <Icon className="w-5 h-5" />
      </span>
      <h3 className="mt-3 text-sm font-medium text-[#0c0b1e]">{title}</h3>
      <p className="mt-1.5 text-[#0c0b1e]/60 text-xs leading-snug">{body}</p>
    </Reveal>
  );
}

export default function ReviewEngine() {
  return (
    <section className="relative overflow-hidden grain-overlay py-14 lg:py-32 border-t border-black/10">
      <AuroraBackdrop tone="amber" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-[#b45309]">
            <span className="w-6 h-px bg-amber" />
            The review engine
          </span>
          <h2 className="mt-3 lg:mt-4 text-3xl sm:text-5xl font-medium tracking-tight leading-[1.05] text-[#0c0b1e]">
            More 5-star reviews, with the{" "}
            <span className="grow-gradient-text font-display italic">
              friction removed.
            </span>
          </h2>
          <p className="mt-4 lg:mt-5 text-[#0c0b1e]/60 text-base sm:text-lg leading-relaxed">
            Reviews are what wins you the click. So we make leaving one take about
            ten seconds &mdash; and quietly route them so your best experiences
            land on Google and the rough ones come straight to you.
          </p>
        </div>

        {/* Two ways to ask */}
        <div className="mt-8 md:mt-12">
          <span className="block text-center md:text-left text-xs font-semibold uppercase tracking-wide text-[#0c0b1e]/40">
            Two ways to ask
          </span>

          {/* Mobile: two columns side by side */}
          <div className="md:hidden mt-4 grid grid-cols-2 gap-3">
            <MobileCaptureCard
              icon={Nfc}
              iconClass="border-cyan/30 bg-cyan/10 text-[#0e8090]"
              title="Tap to review"
              body="Customers tap their phone to your card and land on your review page — instantly."
            />
            <MobileCaptureCard
              icon={Workflow}
              iconClass="border-violet/30 bg-violet/10 text-[#8b3fd6]"
              title="Fully hands-off"
              body="We connect your CRM and auto-text a review request after each job."
              delay={90}
            />
          </div>

          {/* Desktop: two horizontal cards side by side (unchanged) */}
          <div className="hidden md:grid md:grid-cols-2 md:gap-6 mt-4">
            <Reveal className="flex gap-4 rounded-3xl border border-black/[0.07] bg-white p-6 shadow-xl shadow-[#0c0b1e]/[0.05]">
              <span className="grid place-items-center w-11 h-11 shrink-0 rounded-xl border border-cyan/30 bg-cyan/10 text-[#0e8090]">
                <Nfc className="w-5 h-5" />
              </span>
              <div>
                <h3 className="text-lg font-medium text-[#0c0b1e]">
                  Tap to review
                </h3>
                <p className="mt-1.5 text-[#0c0b1e]/60 text-sm leading-relaxed">
                  In-person business? When the job&apos;s done, your customer taps
                  their phone to your Grady Digital review card and lands on your
                  review page instantly. No typing an address, no searching for
                  your business &mdash; just tap and go.
                </p>
              </div>
            </Reveal>

            <Reveal
              delay={90}
              className="flex gap-4 rounded-3xl border border-black/[0.07] bg-white p-6 shadow-xl shadow-[#0c0b1e]/[0.05]"
            >
              <span className="grid place-items-center w-11 h-11 shrink-0 rounded-xl border border-violet/30 bg-violet/10 text-[#8b3fd6]">
                <Workflow className="w-5 h-5" />
              </span>
              <div>
                <h3 className="text-lg font-medium text-[#0c0b1e]">
                  Or fully hands-off
                </h3>
                <p className="mt-1.5 text-[#0c0b1e]/60 text-sm leading-relaxed">
                  Not client-facing? We connect to most CRMs. The moment a job is
                  marked complete, a review request goes out by text a little
                  while later &mdash; while the good experience is still fresh.
                </p>
              </div>
            </Reveal>
          </div>
        </div>

        {/* What happens on the portal */}
        <div className="mt-8 md:mt-14">
          <span className="text-xs font-semibold uppercase tracking-wide text-[#0c0b1e]/40">
            What happens when they open it
          </span>

          {/* Mobile: staggered cascade with L-shaped elbow connectors */}
          <div className="md:hidden mt-4 flex flex-col gap-8">
            {steps.map((s, i) => (
              <div key={s.n} className="relative">
                {i > 0 && <Elbow className={elbowClass[i]} />}
                <FlowCard
                  n={s.n}
                  title={s.title}
                  body={s.body}
                  className={cardClass[i]}
                >
                  {s.mockup()}
                </FlowCard>
              </div>
            ))}
          </div>

          {/* Desktop: 3-up grid (unchanged) */}
          <div className="hidden md:grid md:grid-cols-3 md:gap-6 mt-4">
            {steps.map((s) => (
              <FlowCard key={s.n} n={s.n} title={s.title} body={s.body}>
                {s.mockup()}
              </FlowCard>
            ))}
          </div>
        </div>

        <Reveal delay={120}>
          <p className="mt-8 md:mt-12 text-[#0c0b1e]/50 text-sm">
            Less friction means more reviews.{" "}
            <span className="text-[#0c0b1e]/80 font-medium">
              More reviews win the click.
            </span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}

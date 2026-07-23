"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowRight, Check, Lock, ShieldCheck, TrendingUp } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import BlurIn from "@/components/BlurIn";

// Merchynt white-label GBP audit tool. Each submission is emailed to Luke so we
// walk into the call with the lead's real data.
const AUDIT_URL = "https://audit.seo.gradydigital.com";
const STORAGE_KEY = "gd_audit_completed";

/**
 * Gates the rest of the booked page behind the required Step 1 audit. The audit
 * card is always visible; everything passed as children is dimmed/locked until
 * the visitor confirms they've run their audit. Completion is remembered in
 * localStorage so it survives reloads.
 */
export default function AuditGate({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [ranAudit, setRanAudit] = useState(false);
  const gateRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
    try {
      if (localStorage.getItem(STORAGE_KEY) === "1") setCompleted(true);
      if (sessionStorage.getItem("gd_audit_opened") === "1") setRanAudit(true);
    } catch {
      /* storage blocked — gate still works for the session */
    }
  }, []);

  const openAudit = () => {
    setRanAudit(true);
    try {
      sessionStorage.setItem("gd_audit_opened", "1");
    } catch {
      /* ignore */
    }
  };

  const unlock = useCallback(() => {
    setCompleted(true);
    try {
      localStorage.setItem(STORAGE_KEY, "1");
    } catch {
      /* ignore */
    }
    requestAnimationFrame(() => {
      gateRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }, []);

  const locked = !completed;

  return (
    <>
      {/* STEP 1 — REQUIRED AUDIT (the gate) */}
      <SectionWrapper className="!pt-0 !pb-10">
        <BlurIn>
          <div
            id="audit"
            className="relative max-w-3xl mx-auto rounded-3xl border-2 border-accent/30 bg-white shadow-xl shadow-accent/10 p-8 lg:p-12 overflow-hidden grain-overlay scroll-mt-28"
          >
            <div
              className="absolute inset-0 opacity-80 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse 85% 60% at 50% 0%, rgba(108,106,246,0.14) 0%, transparent 70%)",
              }}
            />
            <div className="relative text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-accent">
                <ShieldCheck className="w-3.5 h-3.5" />
                Step 1 · Required before your call
              </span>
              <h2 className="text-3xl md:text-4xl font-medium text-[#0c0b1e] tracking-tight mt-5">
                Run your free audit to unlock your roadmap
              </h2>
              <p className="text-[#0c0b1e]/70 text-base leading-relaxed max-w-xl mx-auto mt-5">
                Fill out your free Google audit first — it&apos;s the one thing I
                need before we talk, and it opens up the rest of this page: the
                sites I build, the before-and-after ranking heatmaps that move
                businesses to the top of Google, and how that turns into more
                calls and more booked jobs.
              </p>

              {/* ROI hook — the whole point at a low ticket */}
              <div className="mt-6 max-w-md mx-auto rounded-2xl border border-amber/40 bg-amber/[0.08] px-5 py-4 text-left">
                <div className="flex items-center gap-2 text-[#b45309] text-sm font-semibold">
                  <TrendingUp className="w-4 h-4 shrink-0" />
                  The math that makes this a no-brainer
                </div>
                <p className="text-[#0c0b1e]/75 text-sm leading-relaxed mt-2">
                  The whole system runs{" "}
                  <span className="font-semibold text-[#0c0b1e]">$197 a month</span>
                  . For most local service businesses,{" "}
                  <span className="font-semibold text-[#0c0b1e]">
                    one extra job covers the entire year
                  </span>{" "}
                  — everything you win after that is profit.
                </p>
              </div>

              <p className="text-[#0c0b1e]/70 text-base leading-relaxed max-w-xl mx-auto mt-6">
                <span className="text-[#0c0b1e] font-medium">
                  Why the audit&apos;s required:
                </span>{" "}
                your results come straight to me, so we spend the whole call on your
                real numbers instead of guessing. No audit, no roadmap.
              </p>

              <a
                href={AUDIT_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={openAudit}
                className="group inline-flex items-center gap-2 rounded-full px-7 py-4 text-white bg-gradient-to-r from-cyan via-accent to-violet font-medium text-base hover:opacity-90 transition-opacity mt-8 shadow-lg shadow-accent/25"
              >
                Run My Free Audit
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
              <p className="text-[#0c0b1e]/40 text-xs mt-4">
                Takes ~1 minute · 100% free · unlocks everything below
              </p>

              {/* Confirmation / unlock */}
              <div className="mt-8 border-t border-black/10 pt-6">
                {completed ? (
                  <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-700">
                    <Check className="w-4 h-4" />
                    Audit done — everything below is unlocked
                  </div>
                ) : (
                  <>
                    <p className="text-[#0c0b1e]/70 text-sm">
                      Ran it? Unlock the rest of your page — your proof, your
                      plan, and what happens next.
                    </p>
                    <button
                      type="button"
                      onClick={unlock}
                      disabled={mounted ? !ranAudit : false}
                      className="group mt-4 inline-flex items-center gap-2 rounded-full px-6 py-3 font-medium text-sm text-[#0c0b1e] border border-black/15 bg-white hover:border-black/30 hover:bg-black/[0.03] transition-colors disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:border-black/15"
                    >
                      <Check className="w-4 h-4 text-accent" />
                      I&apos;ve completed my audit
                    </button>
                    <p className="text-[#0c0b1e]/40 text-xs mt-3">
                      {mounted && !ranAudit
                        ? "Run the audit above first to unlock."
                        : "This unlocks your proof, your plan, and what's next."}
                    </p>
                  </>
                )}
              </div>
            </div>
          </div>
        </BlurIn>
      </SectionWrapper>

      {/* GATED CONTENT — hidden entirely until the audit is done */}
      <div ref={gateRef} className="scroll-mt-24">
        {locked ? (
          <SectionWrapper compact className="!pt-0">
            <div className="max-w-md mx-auto text-center rounded-3xl border border-black/[0.08] bg-white/70 backdrop-blur-sm p-8 shadow-sm">
              <div className="mx-auto w-12 h-12 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
                <Lock className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-medium text-[#0c0b1e] mt-5">
                The rest of your page is locked
              </h3>
              <p className="text-[#0c0b1e]/60 text-sm leading-relaxed mt-3">
                Run your free audit above to unlock your proof, real ranking
                results, your plan, and exactly what happens next.
              </p>
              <ul className="mt-5 space-y-2 text-left inline-block">
                {[
                  "Sites I've built for businesses like yours",
                  "Real Google ranking results",
                  "Your plan and what's included",
                  "What happens before the call",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-sm text-[#0c0b1e]/50"
                  >
                    <Lock className="w-3.5 h-3.5 text-[#0c0b1e]/30 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <button
                type="button"
                onClick={() => {
                  document
                    .getElementById("audit")
                    ?.scrollIntoView({ behavior: "smooth", block: "center" });
                }}
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#0c0b1e] text-white text-sm font-medium px-5 py-3 hover:opacity-90 transition-opacity"
              >
                Go to my audit
              </button>
            </div>
          </SectionWrapper>
        ) : (
          <div>{children}</div>
        )}
      </div>
    </>
  );
}

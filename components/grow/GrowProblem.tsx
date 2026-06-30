import { Search, Star } from "lucide-react";
import AuroraBackdrop from "./AuroraBackdrop";

const stories = [
  {
    n: "01",
    tag: "Trust",
    color: "text-accent",
    dot: "bg-accent",
    glow: "shadow-accent/15",
    title: "Reviews decide who feels safe to call.",
    body: "Before anyone visits your site, they scan your star rating, your most recent reviews, and how you reply. That quick read decides whether you get the call or the next business does.",
  },
  {
    n: "02",
    tag: "Visibility",
    color: "text-[#0e8090]",
    dot: "bg-cyan",
    glow: "shadow-cyan/15",
    title: "If you're not in the top three, you're barely in the running.",
    body: "Most people pick from the businesses Google shows first. Climbing into the local map pack is the difference between a steady flow of calls and getting skipped entirely.",
  },
  {
    n: "03",
    tag: "Speed",
    color: "text-[#8b3fd6]",
    dot: "bg-violet",
    glow: "shadow-violet/15",
    title: "The business that answers first usually wins the job.",
    body: "A missed call is a customer dialing the next name on the list. Every call, text, and form lands in one inbox so nothing slips through while you're on a job.",
  },
  {
    n: "04",
    tag: "Consistency",
    color: "text-[#b45309]",
    dot: "bg-amber",
    glow: "shadow-amber/15",
    title: "Showing up every week is the whole game.",
    body: "Fresh reviews, replies, and posts tell Google your business is active and worth ranking. Done once, it fades. Done every week, it compounds — and that's the part I handle for you.",
  },
];

function Pin({
  n,
  color,
  className,
}: {
  n: number;
  color: string;
  className?: string;
}) {
  return (
    <div className={`absolute -translate-x-1/2 -translate-y-full ${className ?? ""}`}>
      <div
        className="grid place-items-center w-9 h-9 text-white text-sm font-bold shadow-lg shadow-[#0c0b1e]/20 ring-2 ring-white/70"
        style={{
          backgroundColor: color,
          borderRadius: "50% 50% 50% 0",
          transform: "rotate(-45deg)",
        }}
      >
        <span style={{ transform: "rotate(45deg)" }}>{n}</span>
      </div>
    </div>
  );
}

export default function GrowProblem() {
  return (
    <section className="relative">
      <div className="relative grain-overlay py-24 lg:py-32">
        <AuroraBackdrop tone="cyan" />

        <div className="relative w-full max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left: header + map comparison */}
            <div>
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-[#0e8090]">
                <span className="w-6 h-px bg-cyan" />
                The problem
              </span>
              <h2 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.05] text-[#0c0b1e]">
                Your next customer is{" "}
                <span className="grow-gradient-text font-display italic">
                  already searching.
                </span>
              </h2>
              <p className="mt-6 text-[#0c0b1e]/60 text-lg leading-relaxed max-w-md">
                The only question is whether Google sends them to you — or to the
                competitor with more reviews, a stronger profile, and a head
                start.
              </p>

              {/* Search → map → ranking card */}
              <div className="relative mt-10 rounded-[28px] border border-black/[0.07] bg-white shadow-2xl shadow-[#0c0b1e]/10 p-5 sm:p-6">
                <div
                  aria-hidden
                  className="absolute -inset-px rounded-[28px] -z-10 opacity-70 blur-xl"
                  style={{
                    background:
                      "radial-gradient(60% 60% at 30% 0%, rgba(52,211,224,0.35), transparent 70%)",
                  }}
                />

                {/* Search bar */}
                <div className="flex items-center gap-2.5 rounded-full border border-black/10 bg-white px-4 py-3 shadow-sm">
                  <Search className="w-4 h-4 text-[#0c0b1e]/40 shrink-0" />
                  <span className="text-[#0c0b1e] text-sm font-medium">
                    best local service near me
                  </span>
                </div>

                {/* Map */}
                <div className="relative mt-4 h-48 sm:h-52 rounded-2xl overflow-hidden border border-black/[0.05] bg-gradient-to-br from-[#eef1fb] to-[#f7f8fc]">
                  <svg
                    aria-hidden
                    viewBox="0 0 400 220"
                    preserveAspectRatio="xMidYMid slice"
                    className="absolute inset-0 w-full h-full"
                  >
                    {[70, 130, 190].map((baseY, r) => (
                      <g key={r} fill="rgba(86,110,180,0.10)">
                        {Array.from({ length: 11 }).map((_, i) => {
                          const w = 44;
                          const x = i * w - 22 + (r % 2) * 22;
                          const h = 30;
                          return (
                            <polygon
                              key={i}
                              points={`${x},${baseY} ${x + w / 2},${baseY - h} ${x + w},${baseY}`}
                            />
                          );
                        })}
                      </g>
                    ))}
                    {/* Road */}
                    <line
                      x1="-30"
                      y1="240"
                      x2="430"
                      y2="20"
                      stroke="rgba(12,11,30,0.06)"
                      strokeWidth="22"
                      strokeLinecap="round"
                    />
                    <line
                      x1="-30"
                      y1="240"
                      x2="430"
                      y2="20"
                      stroke="rgba(255,255,255,0.85)"
                      strokeWidth="3"
                      strokeDasharray="2 11"
                      strokeLinecap="round"
                    />
                  </svg>

                  <Pin n={3} color="#9aa3b2" className="left-[28%] top-[44%]" />
                  <Pin n={2} color="#ef7a4f" className="left-[74%] top-[40%]" />
                  <Pin n={1} color="#3878ff" className="left-1/2 top-[66%]" />
                </div>

                {/* Ranking rows */}
                <div className="mt-5">
                  <div className="flex items-center gap-3.5">
                    <span className="grid place-items-center w-11 h-11 rounded-xl bg-black/[0.04] text-[#0c0b1e] text-base font-bold shrink-0">
                      1
                    </span>
                    <div className="min-w-0">
                      <div className="text-[#0c0b1e] font-bold truncate">
                        Competitor with momentum
                      </div>
                      <div className="flex items-center gap-1 text-sm text-[#0c0b1e]/45 mt-0.5">
                        4.9
                        <Star className="w-3.5 h-3.5 fill-[#0c0b1e]/45 text-[#0c0b1e]/45" />
                        · 214 reviews
                      </div>
                    </div>
                  </div>

                  <div className="my-3 h-px bg-black/[0.07]" />

                  <div className="flex items-center gap-3.5 opacity-50">
                    <span className="grid place-items-center w-11 h-11 rounded-xl bg-black/[0.04] text-[#0c0b1e]/60 text-base font-bold shrink-0">
                      7
                    </span>
                    <div className="min-w-0">
                      <div className="text-[#0c0b1e]/70 font-bold truncate">
                        Your business
                      </div>
                      <div className="flex items-center gap-1 text-sm text-[#0c0b1e]/45 mt-0.5">
                        4.2
                        <Star className="w-3.5 h-3.5 fill-[#0c0b1e]/45 text-[#0c0b1e]/45" />
                        · 47 reviews
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer line */}
                <p className="mt-5 text-sm font-bold text-[#e0492f]">
                  Every missed search can become somebody else&apos;s phone call.
                </p>
              </div>
            </div>

            {/* Story cards — all shown together */}
            <div className="space-y-5">
              {stories.map((s) => (
                <div
                  key={s.n}
                  className={`rounded-3xl border border-black/[0.07] bg-white p-7 shadow-xl ${s.glow}`}
                >
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide">
                    <span className={`w-2 h-2 rounded-full ${s.dot}`} />
                    <span className={s.color}>
                      {s.n} / {s.tag}
                    </span>
                  </div>
                  <h3 className="mt-3 text-2xl font-medium leading-snug text-[#0c0b1e]">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-[#0c0b1e]/60 leading-relaxed">
                    {s.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

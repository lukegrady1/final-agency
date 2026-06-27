import type { CSSProperties } from "react";

type Tone = "indigo-cyan" | "cyan" | "violet" | "amber" | "indigo";

const orbs: Record<Tone, { a: string; b: string }> = {
  "indigo-cyan": { a: "rgba(108,106,246,0.55)", b: "rgba(52,211,224,0.40)" },
  cyan: { a: "rgba(52,211,224,0.42)", b: "rgba(108,106,246,0.32)" },
  violet: { a: "rgba(168,85,247,0.45)", b: "rgba(108,106,246,0.38)" },
  amber: { a: "rgba(245,165,36,0.34)", b: "rgba(168,85,247,0.34)" },
  indigo: { a: "rgba(108,106,246,0.45)", b: "rgba(168,85,247,0.30)" },
};

/**
 * Atmospheric backdrop for a section: two slow-drifting blurred color orbs.
 * Place inside a `relative` section. Decorative only.
 */
export default function AuroraBackdrop({
  tone = "indigo-cyan",
  className = "",
}: {
  tone?: Tone;
  className?: string;
}) {
  const c = orbs[tone];
  return (
    <div
      aria-hidden
      className={`absolute inset-0 -z-10 overflow-hidden ${className}`}
    >
      <div
        className="aurora-orb aurora-orb-a"
        style={
          {
            width: "42vw",
            height: "42vw",
            top: "-12%",
            left: "-8%",
            background: c.a,
          } as CSSProperties
        }
      />
      <div
        className="aurora-orb aurora-orb-b"
        style={
          {
            width: "38vw",
            height: "38vw",
            bottom: "-14%",
            right: "-6%",
            background: c.b,
          } as CSSProperties
        }
      />
    </div>
  );
}

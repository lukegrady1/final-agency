import { ImageResponse } from "next/og";

export const alt =
  "Grady Digital — Websites, SEO & Reviews for Local Businesses";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#070612",
          padding: "80px",
          position: "relative",
        }}
      >
        {/* indigo glow */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: "flex",
            background:
              "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(108,106,246,0.28), transparent 70%)",
          }}
        />

        {/* wordmark */}
        <div
          style={{
            display: "flex",
            fontSize: 46,
            fontStyle: "italic",
            fontWeight: 600,
            color: "#ffffff",
          }}
        >
          Grady Digital
        </div>

        {/* headline */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 76,
              lineHeight: 1.1,
              fontWeight: 600,
              color: "#ffffff",
              maxWidth: 920,
            }}
          >
            Websites, SEO &amp; reviews for local businesses
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 28,
              fontSize: 36,
              color: "rgba(255,255,255,0.72)",
            }}
          >
            Plans from $97/month. No setup fee. Cancel anytime.
          </div>
        </div>

        {/* bottom pills */}
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              display: "flex",
              padding: "14px 28px",
              borderRadius: 999,
              border: "1px solid rgba(255,255,255,0.2)",
              color: "#9e9cf8",
              fontSize: 28,
            }}
          >
            gradydigital.com
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}

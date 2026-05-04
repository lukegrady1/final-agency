"use client";

import Script from "next/script";

const GHL_BOOKING_URL =
  "https://api.gradydigital.com/widget/booking/S3cuYzCyg7EtEtcdTkz8";

export default function StartCalendar() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="rounded-2xl overflow-hidden border border-card-border bg-card">
        <iframe
          src={GHL_BOOKING_URL}
          id="S3cuYzCyg7EtEtcdTkz8_grady_start_calendar"
          title="Book a call with Luke"
          style={{
            width: "100%",
            border: "none",
            minHeight: "720px",
            display: "block",
          }}
          scrolling="no"
        />
      </div>
      <Script
        src="https://link.msgsndr.com/js/form_embed.js"
        strategy="lazyOnload"
      />
    </div>
  );
}

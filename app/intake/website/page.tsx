import type { Metadata } from "next";
import WebsiteIntakeFunnel from "@/components/WebsiteIntakeFunnel";

export const metadata: Metadata = {
  title: "Website Project Intake | Grady Digital",
  description:
    "Tell us about your business and website goals. We will review your brief and reach out within 24 hours.",
  robots: { index: false, follow: false },
};

export default function WebsiteIntakePage() {
  return (
    <main className="pt-24 pb-16">
      <WebsiteIntakeFunnel />
    </main>
  );
}

import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-display",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://gradydigital.com"),
  title: {
    default: "Grady Digital — AI Agents & Automation for Local Businesses",
    template: "%s | Grady Digital",
  },
  description:
    "AI receptionists, chatbots, lead follow-up, and websites that bring in calls. Built for HVAC, contractors, salons, and service businesses.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Grady Digital",
    title: "Grady Digital — AI Agents & Automation for Local Businesses",
    description:
      "AI receptionists, chatbots, lead follow-up, and websites that bring in calls. Built for HVAC, contractors, salons, and service businesses.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Grady Digital — AI Agents & Automation for Local Businesses",
    description:
      "AI receptionists, chatbots, lead follow-up, and websites that bring in calls. Built for local service businesses.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Grady Digital",
    url: "https://gradydigital.com",
    description:
      "AI receptionists, chatbots, lead follow-up, and websites for local service businesses.",
    email: "luke@gradydigital.com",
    sameAs: [],
    contactPoint: {
      "@type": "ContactPoint",
      email: "luke@gradydigital.com",
      contactType: "sales",
      availableLanguage: "English",
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Grady Digital",
    url: "https://gradydigital.com",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://gradydigital.com/blog?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-2YL00Z9HHH" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-2YL00Z9HHH');
            `,
          }}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
      </head>
      <body className={dmSans.className} style={{ backgroundColor: "#070612" }}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

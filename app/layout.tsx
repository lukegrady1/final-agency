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
    default: "Grady Digital — Websites, SEO & Reviews for Local Businesses",
    template: "%s | Grady Digital",
  },
  description:
    "Custom website, Google Business Profile, reviews, SEO, and an all-in-one inbox for your leads, built and managed for local businesses. Plans from $97/month, no setup fee, cancel anytime.",
  keywords: [
    "local business website design",
    "small business web design",
    "local SEO",
    "Google Business Profile optimization",
    "online reviews management",
    "lead management",
    "website and SEO plan",
    "Grady Digital",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Grady Digital",
    title: "Grady Digital — Websites, SEO & Reviews for Local Businesses",
    description:
      "Custom website, Google Business Profile, reviews, SEO, and an all-in-one inbox for your leads, built and managed for local businesses. Plans from $97/month, no setup fee, cancel anytime.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Grady Digital — Websites, SEO & Reviews for Local Businesses",
    description:
      "Custom website, Google Business Profile, reviews, SEO, and an all-in-one inbox for your leads, built and managed for local businesses. Plans from $97/month, no setup fee, cancel anytime.",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
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
      "Custom websites, local SEO, reviews, and Google presence management for local businesses. All-in-one inbox to manage leads included.",
    email: "luke@gradydigital.com",
    telephone: "+1-978-798-2870",
    sameAs: [
      "https://www.linkedin.com/company/grady-digital",
      "https://www.instagram.com/gradydigitalmarketing/",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      email: "luke@gradydigital.com",
      telephone: "+1-978-798-2870",
      contactType: "sales",
      availableLanguage: "English",
    },
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Grady Digital",
    url: "https://gradydigital.com",
    email: "luke@gradydigital.com",
    telephone: "+1-978-798-2870",
    description:
      "Custom websites, local SEO, reviews, and Google presence management for local businesses. All-in-one inbox to manage leads included.",
    priceRange: "$$",
    areaServed: {
      "@type": "Country",
      name: "United States",
    },
    serviceType: [
      "Web Design",
      "SEO",
      "Google Business Profile Optimization",
      "Review Management",
      "Social Media Posting",
      "Lead Management Inbox",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Grady Digital",
    url: "https://gradydigital.com",
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "The Growth System",
    serviceType:
      "Website, Local SEO, Reviews & Google Business Profile Management",
    provider: {
      "@type": "LocalBusiness",
      name: "Grady Digital",
      url: "https://gradydigital.com",
    },
    areaServed: {
      "@type": "Country",
      name: "United States",
    },
    description:
      "Three plans for local businesses. The Website plan ($97/month) is a custom website with hosting and an all-in-one inbox to manage leads. The Reputation System ($147/month) is the most popular plan: it adds a review engine that fills your Google profile with 5-star reviews, written responses, and challenges to old unfair reviews. The Growth System ($297/month) adds Google Business Profile optimization with posting and cross-posting to Instagram, Facebook, and YouTube and ongoing SEO. Built and managed for you, live in 10 business days, no setup fee.",
    offers: [
      {
        "@type": "Offer",
        name: "Website",
        url: "https://gradydigital.com/start",
        availability: "https://schema.org/InStock",
        price: "97",
        priceCurrency: "USD",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: "97",
          priceCurrency: "USD",
          unitCode: "MON",
          unitText: "month",
        },
      },
      {
        "@type": "Offer",
        name: "The Reputation System",
        url: "https://gradydigital.com/start",
        availability: "https://schema.org/InStock",
        price: "147",
        priceCurrency: "USD",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: "147",
          priceCurrency: "USD",
          unitCode: "MON",
          unitText: "month",
        },
      },
      {
        "@type": "Offer",
        name: "The Growth System",
        url: "https://gradydigital.com/start",
        availability: "https://schema.org/InStock",
        price: "297",
        priceCurrency: "USD",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: "297",
          priceCurrency: "USD",
          unitCode: "MON",
          unitText: "month",
        },
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "The Growth System",
      itemListElement: [
        "Custom conversion website",
        "Google Business Profile optimization and posting",
        "Social cross-posting to Instagram, Facebook, and YouTube",
        "Review growth, responses, and removal of old negative reviews",
        "Ongoing local and organic SEO",
        "All-in-one inbox to manage leads, calls, and texts",
      ].map((name) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name },
      })),
    },
  };

  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.addEventListener('load', function() {
                setTimeout(function() {
                  var s = document.createElement('script');
                  s.src = 'https://www.googletagmanager.com/gtag/js?id=G-2YL00Z9HHH';
                  s.async = true;
                  document.head.appendChild(s);
                  s.onload = function() {
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-2YL00Z9HHH');
                  };
                }, 100);
              });
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(serviceSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        <noscript>
          <style
            dangerouslySetInnerHTML={{
              __html: `
                [style*="opacity: 0"], [style*="opacity:0"] {
                  opacity: 1 !important;
                  transform: none !important;
                  filter: none !important;
                }
              `,
            }}
          />
        </noscript>
      </head>
      <body
        className={dmSans.className}
        style={{ backgroundColor: "#f4f5fb", color: "#0c0b1e" }}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

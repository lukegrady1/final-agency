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
    default: "Grady Digital — Websites & SEO for Local Businesses",
    template: "%s | Grady Digital",
  },
  description:
    "Custom websites and local SEO built and managed for local businesses. CRM included. $197/month, no long-term contract.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Grady Digital",
    title: "Grady Digital — Websites & SEO for Local Businesses",
    description:
      "Custom websites and local SEO built and managed for local businesses. CRM included. $197/month, no long-term contract.",
    images: [
      {
        url: "/grady-digital-og.png",
        width: 1200,
        height: 630,
        alt: "Grady Digital — Websites & SEO for Local Businesses",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Grady Digital — Websites & SEO for Local Businesses",
    description:
      "Custom websites and local SEO built and managed for local businesses. CRM included. $197/month, no long-term contract.",
    images: ["/grady-digital-og.png"],
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
      "Custom websites and local SEO for local businesses. CRM included.",
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
      "Custom websites and local SEO for local businesses. CRM included.",
    priceRange: "$$",
    areaServed: {
      "@type": "Country",
      name: "United States",
    },
    serviceType: [
      "Web Design",
      "SEO",
      "Google Business Profile Optimization",
      "CRM",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Grady Digital",
    url: "https://gradydigital.com",
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
      <body className={dmSans.className} style={{ backgroundColor: "#070612" }}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

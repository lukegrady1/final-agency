import type { MetadataRoute } from "next";
import { services, industries, cities } from "@/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://gradydigital.com";

  const corePages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/five-minute-window-speed-to-lead`,
      lastModified: new Date("2026-03-29"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/ai-receptionist-local-business`,
      lastModified: new Date("2026-01-15"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/local-seo-checklist`,
      lastModified: new Date("2026-02-03"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/ai-chatbot-lessons`,
      lastModified: new Date("2026-03-01"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date("2026-01-01"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date("2026-01-01"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  const industryHubPages: MetadataRoute.Sitemap = industries.map((i) => ({
    url: `${baseUrl}/industries/${i.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 1.0,
  }));

  const type1Pages: MetadataRoute.Sitemap = [];
  for (const s of services) {
    for (const i of industries) {
      for (const c of cities) {
        type1Pages.push({
          url: `${baseUrl}/${s.slug}/${i.slug}/${c.slug}`,
          lastModified: new Date(),
          changeFrequency: "monthly" as const,
          priority: 0.9,
        });
      }
    }
  }

  const type2Pages: MetadataRoute.Sitemap = [];
  for (const s of services) {
    for (const c of cities) {
      type2Pages.push({
        url: `${baseUrl}/${s.slug}/${c.slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.8,
      });
    }
  }

  const type3Pages: MetadataRoute.Sitemap = [];
  for (const s of services) {
    for (const i of industries) {
      type3Pages.push({
        url: `${baseUrl}/${s.slug}/${i.slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.8,
      });
    }
  }

  return [
    ...corePages,
    ...industryHubPages,
    ...type1Pages,
    ...type2Pages,
    ...type3Pages,
  ];
}

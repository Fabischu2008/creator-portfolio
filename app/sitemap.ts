import type { MetadataRoute } from "next"
import { services } from "@/lib/services"
import { wissenArticles } from "@/lib/wissen"
import { SITE_URL } from "@/lib/site"

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return [
    {
      url: SITE_URL,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    // Wird aus lib/services.ts abgeleitet — neue Leistungen landen automatisch hier.
    ...services.map((service) => ({
      url: `${SITE_URL}/leistungen/${service.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    {
      url: `${SITE_URL}/wissen`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.5,
    },
    ...wissenArticles.map((article) => ({
      url: `${SITE_URL}/wissen/${article.slug}`,
      lastModified: new Date(article.updated),
      changeFrequency: "monthly" as const,
      priority: 0.55,
    })),
    ...["impressum", "datenschutz"].map((path) => ({
      url: `${SITE_URL}/${path}`,
      lastModified,
      changeFrequency: "yearly" as const,
      priority: 0.3,
    })),
  ]
}

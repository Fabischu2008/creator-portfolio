import { createOgImage, OG_WIDE } from "@/lib/og"

export const alt = "Schuck Digital — Mehr Kunden. Mehr Umsatz."
export const size = OG_WIDE
export const contentType = "image/png"

export default function TwitterImage() {
  return createOgImage({
    variant: "wide",
    title: "Mehr Kunden. Mehr Umsatz.",
    subtitle: "Websites, Landingpages, Meta & Google Ads, Social Media und SEO.",
  })
}

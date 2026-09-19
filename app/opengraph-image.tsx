import { createOgImage, OG_SQUARE } from "@/lib/og"

export const alt = "Schuck Digital — Mehr Kunden. Mehr Umsatz."
export const size = OG_SQUARE
export const contentType = "image/png"

export default function OpenGraphImage() {
  return createOgImage({
    variant: "square",
    title: "Mehr Kunden. Mehr Umsatz.",
    subtitle: "Websites, Landingpages, Meta & Google Ads, Social Media und SEO.",
  })
}

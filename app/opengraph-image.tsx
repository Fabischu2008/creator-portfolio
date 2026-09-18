import { createOgImage, OG_SIZE } from "@/lib/og"

export const alt = "Schuck Digital — Websites, Marketing & Wachstum"
export const size = OG_SIZE
export const contentType = "image/png"

export default function OpenGraphImage() {
  return createOgImage({
    title: "Mehr Kunden. Mehr Umsatz.",
    subtitle: "Websites, Landingpages, Meta & Google Ads, Social Media und SEO.",
  })
}

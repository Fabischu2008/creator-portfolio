import { createOgImage, OG_WIDE } from "@/lib/og"

export const alt = "Google Ads Audit — Schuck Digital"
export const size = OG_WIDE
export const contentType = "image/png"

export default function GoogleAdsAuditTwitterImage() {
  return createOgImage({
    variant: "wide",
    label: "Google Ads Audit",
    title: "Wo versickert dein Budget?",
    subtitle: "Bezahlter Konto-Audit in 5 Werktagen. 249 € netto.",
  })
}
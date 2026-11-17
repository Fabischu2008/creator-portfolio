import { createOgImage, OG_SQUARE } from "@/lib/og"

export const alt = "Google Ads Audit — Schuck Digital"
export const size = OG_SQUARE
export const contentType = "image/png"

export default function GoogleAdsAuditOpenGraphImage() {
  return createOgImage({
    variant: "square",
    label: "Google Ads Audit",
    title: "Wo versickert dein Budget?",
    subtitle: "Bezahlter Konto-Audit in 5 Werktagen. 249 € netto.",
  })
}

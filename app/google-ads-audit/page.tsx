import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SiteBackground } from "@/components/site-background"
import { ScrollProgress } from "@/components/scroll-progress"
import { GoogleAdsAuditContent } from "@/components/google-ads-audit-content"
import { SITE_URL } from "@/lib/site"

const title = "Google Ads Audit | Schuck Digital"
const description =
  "Bezahlter Google Ads Audit für Shopify-Shops und kleine Unternehmen. Tracking, Streuverluste, Kampagnen und Feed — priorisiert, in 5 Werktagen. 249 € netto."
const url = "/google-ads-audit"

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: {
    title,
    description,
    url,
    siteName: "Schuck Digital",
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
}

const auditSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Google Ads Audit",
  serviceType: "Google Ads Audit",
  url: `${SITE_URL}${url}`,
  description,
  provider: {
    "@type": "ProfessionalService",
    name: "Schuck Digital",
    url: SITE_URL,
  },
  areaServed: { "@type": "Country", name: "Deutschland" },
  offers: {
    "@type": "Offer",
    price: "249",
    priceCurrency: "EUR",
    url: `${SITE_URL}${url}`,
    availability: "https://schema.org/InStock",
  },
}

export default function GoogleAdsAuditPage() {
  return (
    <>
      <SiteBackground />
      <ScrollProgress />
      <main className="relative z-0 min-h-screen">
        <Header />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(auditSchema) }}
        />
        <GoogleAdsAuditContent />
        <Footer />
      </main>
    </>
  )
}

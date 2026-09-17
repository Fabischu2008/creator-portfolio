import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { SITE_URL } from "@/lib/site"
import { buildBusinessSchema } from "@/lib/structured-data"
import "./globals.css"

const geist = Geist({ subsets: ["latin"], variable: "--font-geist-sans" })
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" })

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Schuck Digital — Websites, Marketing & Wachstum",
  description:
    "Conversion-optimierte Websites, Landingpages, Meta & Google Ads, Social Media und SEO. Mehr Kunden, mehr Umsatz — persönlich betreut von Fabian Schuck.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Schuck Digital — Websites, Marketing & Wachstum",
    description:
      "Conversion-optimierte Websites, Landingpages, Meta & Google Ads, Social Media und SEO. Mehr Kunden, mehr Umsatz — persönlich betreut von Fabian Schuck.",
    url: "/",
    siteName: "Schuck Digital",
    locale: "de_DE",
    type: "website",
  },
  verification: {
    google: "HoQC-517IlT51TUErMJPqcs57gmdgQwJ5aoIVemb9qc",
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="de">
      <body className={`${geist.variable} ${geistMono.variable} font-sans antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(buildBusinessSchema()) }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  )
}

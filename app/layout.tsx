import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { SITE_URL } from "@/lib/site"
import { buildBusinessSchema } from "@/lib/structured-data"
import { ThemeProvider } from "@/components/theme-provider"
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
    images: [
      {
        url: "/og-square.png",
        width: 1024,
        height: 1024,
        alt: "Schuck Digital — Mehr Kunden. Mehr Umsatz.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Schuck Digital — Websites, Marketing & Wachstum",
    description:
      "Conversion-optimierte Websites, Landingpages, Meta & Google Ads, Social Media und SEO. Mehr Kunden, mehr Umsatz — persönlich betreut von Fabian Schuck.",
  },
  verification: {
    google: "HoQC-517IlT51TUErMJPqcs57gmdgQwJ5aoIVemb9qc",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/icon.svg", type: "image/svg+xml" },
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
    <html lang="de" suppressHydrationWarning>
      <head>
        <script async src="https://px.get-ryze.ai/px.js" data-key="rz_pk_2ca2040fdae5b1bf0927c72c5587004d"></script>
      </head>
      <body className={`${geist.variable} ${geistMono.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(buildBusinessSchema()) }}
          />
          {children}
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  )
}

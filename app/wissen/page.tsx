import type { Metadata } from "next"
import Link from "next/link"
import { WissenLayout } from "@/components/wissen-layout"
import { wissenArticles } from "@/lib/wissen"

export const metadata: Metadata = {
  title: "Wissen | Schuck Digital",
  description:
    "Kurze Erklärungen zu Landingpages, Ads, SEO und Conversion — ohne Fachchinesisch, mit dem nächsten Schritt für dein Business.",
  alternates: { canonical: "/wissen" },
  openGraph: {
    title: "Wissen | Schuck Digital",
    description:
      "Kurze Erklärungen zu Landingpages, Ads, SEO und Conversion — ohne Fachchinesisch, mit dem nächsten Schritt für dein Business.",
    url: "/wissen",
    siteName: "Schuck Digital",
    locale: "de_DE",
    type: "website",
  },
}

export default function WissenIndexPage() {
  return (
    <WissenLayout>
      <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Wissen</p>
      <h1 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight text-balance">
        Begriffe, die auf der Rechnung landen.
      </h1>
      <p className="mt-4 text-muted-foreground leading-relaxed">
        Kurze Texte zu den Themen, mit denen wir arbeiten. Kein Kurs, kein Newsletter — eine Erklärung
        und der Weg zur passenden Leistung.
      </p>

      <ul className="mt-12 space-y-4">
        {wissenArticles.map((article) => (
          <li key={article.slug}>
            <Link
              href={`/wissen/${article.slug}`}
              className="block rounded-xl border border-border p-5 hover:bg-secondary transition-colors"
            >
              <h2 className="font-semibold tracking-tight">{article.title}</h2>
              <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{article.excerpt}</p>
            </Link>
          </li>
        ))}
      </ul>
    </WissenLayout>
  )
}

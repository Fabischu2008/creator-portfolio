import { notFound } from "next/navigation"
import type { Metadata } from "next"
import Link from "next/link"
import { WissenLayout } from "@/components/wissen-layout"
import { ContactActions } from "@/components/contact-actions"
import { getRelatedArticles, getWissenBySlug, wissenArticles } from "@/lib/wissen"
import { getServiceBySlug } from "@/lib/services"
import { serviceWhatsappMessage } from "@/lib/contact"

interface PageProps {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return wissenArticles.map((article) => ({ slug: article.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const article = getWissenBySlug(slug)
  if (!article) return { title: "Beitrag nicht gefunden" }

  const title = `${article.seoTitle} | Schuck Digital`
  const url = `/wissen/${article.slug}`

  return {
    title,
    description: article.seoDescription,
    alternates: { canonical: url },
    openGraph: {
      title,
      description: article.seoDescription,
      url,
      siteName: "Schuck Digital",
      locale: "de_DE",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: article.seoDescription,
    },
  }
}

export default async function WissenArticlePage({ params }: PageProps) {
  const { slug } = await params
  const article = getWissenBySlug(slug)
  if (!article) notFound()

  const service = article.serviceSlug ? getServiceBySlug(article.serviceSlug) : undefined
  const related = getRelatedArticles(article)

  return (
    <WissenLayout>
      <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Wissen</p>
      <h1 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight text-balance">
        {article.title}
      </h1>
      <p className="mt-4 text-muted-foreground leading-relaxed">{article.excerpt}</p>

      <div className="mt-12 space-y-10">
        {article.sections.map((section) => (
          <section key={section.heading} className="space-y-3">
            <h2 className="text-xl font-semibold tracking-tight">{section.heading}</h2>
            <div className="space-y-3 text-muted-foreground leading-relaxed">
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 48)}>{paragraph}</p>
              ))}
            </div>
          </section>
        ))}
      </div>

      {service && (
        <p className="mt-10 text-muted-foreground leading-relaxed">
          Passend dazu:{" "}
          <Link href={`/leistungen/${service.slug}`} className="text-foreground underline underline-offset-4">
            {service.title}
          </Link>
          .
        </p>
      )}

      {related.length > 0 && (
        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Weiterlesen</p>
          <ul className="mt-4 space-y-2">
            {related.map((item) => (
              <li key={item.slug}>
                <Link
                  href={`/wissen/${item.slug}`}
                  className="text-foreground underline underline-offset-4 hover:opacity-70"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="mt-14 pt-10 border-t border-border text-center space-y-6">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-balance">
          Passt das zu deinem Business?
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          Vier Fragen, eine ehrliche Einschätzung — oder schreib direkt.
        </p>
        <ContactActions
          whatsappMessage={serviceWhatsappMessage(article.title)}
          mailSubject={`Frage zu: ${article.title}`}
        />
      </div>
    </WissenLayout>
  )
}

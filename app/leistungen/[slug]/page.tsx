import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ServicePageContent } from "@/components/service-page-content"
import { SiteBackground } from "@/components/site-background"
import { ScrollProgress } from "@/components/scroll-progress"
import { getServiceBySlug, services } from "@/lib/services"

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const service = getServiceBySlug(slug)
  if (!service) return { title: "Leistung nicht gefunden" }

  const title = `${service.seoTitle} | Schuck Digital`
  const url = `/leistungen/${service.slug}`

  return {
    title,
    description: service.seoDescription,
    // Verhindert, dass Google die Seite unter mehreren Adressen doppelt wertet.
    alternates: { canonical: url },
    openGraph: {
      title,
      description: service.seoDescription,
      url,
      siteName: "Schuck Digital",
      locale: "de_DE",
      type: "website",
    },
  }
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params
  const service = getServiceBySlug(slug)
  if (!service) notFound()

  return (
    <>
      <SiteBackground />
      <ScrollProgress />
      <main className="relative z-0 min-h-screen">
        <Header />
        <ServicePageContent service={service} />
        <Footer />
      </main>
    </>
  )
}

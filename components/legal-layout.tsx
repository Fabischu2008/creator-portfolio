import type { ReactNode } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SiteBackground } from "@/components/site-background"
import { ScrollProgress } from "@/components/scroll-progress"

interface LegalLayoutProps {
  title: string
  subtitle?: string
  children: ReactNode
}

export function LegalLayout({ title, subtitle, children }: LegalLayoutProps) {
  return (
    <>
      <SiteBackground />
      <ScrollProgress />
      <main className="relative z-0 min-h-screen">
        <Header />
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-24">
          {/* Ruhige Fläche, damit der Hintergrund den langen Fließtext nicht stört. */}
          <div className="rounded-2xl border border-border/60 bg-background/85 backdrop-blur-md p-6 sm:p-10 lg:p-12">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-balance">{title}</h1>
            {subtitle && <p className="mt-4 text-muted-foreground">{subtitle}</p>}
            <div className="mt-12 space-y-10">{children}</div>
          </div>
        </article>
        <Footer />
      </main>
    </>
  )
}

export function LegalSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="space-y-3">
      <h2 className="text-xl font-semibold tracking-tight">{title}</h2>
      <div className="space-y-3 text-muted-foreground leading-relaxed">{children}</div>
    </section>
  )
}

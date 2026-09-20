import type { ReactNode } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SiteBackground } from "@/components/site-background"
import { ScrollProgress } from "@/components/scroll-progress"

interface WissenLayoutProps {
  children: ReactNode
}

export function WissenLayout({ children }: WissenLayoutProps) {
  return (
    <>
      <SiteBackground />
      <ScrollProgress />
      <main className="relative z-0 min-h-screen">
        <Header />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-24">
          <div className="rounded-2xl border border-border/60 bg-background/85 backdrop-blur-md p-6 sm:p-10 lg:p-12">
            {children}
          </div>
        </div>
        <Footer />
      </main>
    </>
  )
}

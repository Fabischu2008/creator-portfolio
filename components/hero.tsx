"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronDown } from "lucide-react"
import { SectionLabel } from "@/components/section-label"

export function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-24 pb-20"
    >
      <div className="max-w-4xl w-full text-center">
        <div className="fade-in-up">
          <SectionLabel>Websites · Marketing · Wachstum</SectionLabel>
        </div>

        <h1
          lang="de"
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance hyphens-auto fade-in-up-delay-1"
        >
          Deine Website soll nicht gefallen.
          <br />
          <span className="text-muted-foreground">Sie soll verkaufen.</span>
        </h1>

        <p className="mt-8 text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed fade-in-up-delay-2">
          Conversion-optimierte Websites und Landingpages — kombiniert mit Meta & Google Ads, Social
          Media und SEO, die dir die richtigen Kunden bringen.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center fade-in-up-delay-3">
          <Button size="lg" onClick={() => scrollTo("fragebogen")} className="group">
            Kostenlosen 60-Sek-Check starten
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button size="lg" variant="outline" onClick={() => scrollTo("leistungen")}>
            Leistungen ansehen
          </Button>
        </div>

        <p className="mt-6 text-sm text-muted-foreground fade-in-up-delay-3">
          4 Fragen · 60 Sekunden · kostenlos & unverbindlich
        </p>
      </div>

      <button
        onClick={() => scrollTo("statement")}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-foreground transition-colors animate-bounce"
        aria-label="Nach unten scrollen"
      >
        <ChevronDown className="h-6 w-6" />
      </button>
    </section>
  )
}

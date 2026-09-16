import { SectionLabel } from "@/components/section-label"
import { Reveal } from "@/components/reveal"

export function Statement() {
  return (
    <section id="statement" className="py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto space-y-10">
        <Reveal>
          <SectionLabel>Sichtbarkeit · Vertrauen · Umsatz</SectionLabel>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-balance">
            Du bist online nie <span className="text-muted-foreground">unsichtbar.</span>
          </h2>
        </Reveal>

        <Reveal delay={100}>
          <div className="space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
            <p>
              Die Frage ist nicht, <span className="text-foreground font-medium">ob</span> Menschen dich
              online finden. Die Frage ist, was sie sehen, wenn sie es tun.
            </p>
            <p>
              Jeder Besuch auf deiner Website ist eine Entscheidung. Vertrauen oder Zweifel. Anfrage
              oder Absprung. Kunde oder Konkurrenz.
            </p>
            <p>
              Deshalb scheitern so viele Websites: Sie zeigen, was ein Unternehmen macht — aber nicht,
              warum jemand kaufen sollte.
            </p>
          </div>
        </Reveal>

        <Reveal delay={200}>
          <blockquote className="border-l-2 border-foreground pl-6 py-2">
            <p className="text-xl md:text-2xl font-medium leading-relaxed">
              Eine gute Website kostet Geld. Eine schlechte kostet Kunden.
            </p>
            <footer className="mt-3 text-sm text-muted-foreground">— Der Unterschied ist messbar</footer>
          </blockquote>
        </Reveal>
      </div>
    </section>
  )
}

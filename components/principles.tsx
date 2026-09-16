import { SectionLabel } from "@/components/section-label"
import { Reveal } from "@/components/reveal"

const principles = [
  {
    number: "01",
    title: "Klarheit",
    text: "Jede Seite hat ein Ziel. Alles, was davon ablenkt, fliegt raus.",
  },
  {
    number: "02",
    title: "Geschwindigkeit",
    text: "Langsame Seiten verlieren Kunden. Performance ist kein Detail, sondern Umsatz.",
  },
  {
    number: "03",
    title: "Vertrauen",
    text: "Menschen kaufen von Menschen. Dein Auftritt muss glaubwürdig wirken — nicht generisch.",
  },
  {
    number: "04",
    title: "Messbarkeit",
    text: "Was nicht gemessen wird, lässt sich nicht verbessern. Jede Maßnahme wird trackbar.",
  },
  {
    number: "05",
    title: "Ehrlichkeit",
    text: "Keine Buzzwords, keine Versprechen ohne Grundlage. Wenn etwas nicht passt, sage ich es.",
  },
  {
    number: "06",
    title: "Persönlich",
    text: "Kein Callcenter, kein Projektmanager-Pingpong. Du sprichst direkt mit mir.",
  },
]

export function Principles() {
  return (
    <section id="prinzipien" className="py-24 px-4 sm:px-6 lg:px-8 border-y border-border/60">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="max-w-3xl space-y-4 mb-16">
            <SectionLabel>Arbeitsweise</SectionLabel>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-balance">
              Wofür ich stehe.
            </h2>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {principles.map((principle, index) => (
            <Reveal key={principle.number} delay={index * 60}>
              <div className="space-y-3">
                <span className="text-sm font-mono text-muted-foreground">{principle.number}</span>
                <h3 className="text-xl font-semibold">{principle.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{principle.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

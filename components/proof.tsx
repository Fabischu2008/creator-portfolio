import { ImageIcon } from "lucide-react"
import { SectionLabel } from "@/components/section-label"
import { Reveal } from "@/components/reveal"

const placeholders = [
  { title: "Google Ads Ergebnisse", description: "Screenshots & Performance-Daten folgen" },
  { title: "Website Projekte", description: "Referenzen & Live-Beispiele folgen" },
  { title: "Meta Ads Kampagnen", description: "Kampagnen-Ergebnisse folgen" },
  { title: "Landingpage Conversions", description: "Conversion-Daten folgen" },
]

export function Proof() {
  return (
    <section id="ergebnisse" className="py-24 px-4 sm:px-6 lg:px-8 border-y border-border/60">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="space-y-4 max-w-3xl mb-16">
            <SectionLabel>Ergebnisse</SectionLabel>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-balance">
              Zahlen statt Versprechen.
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Hier kommen bald echte Ergebnisse — Google Ads Beweise, Website-Referenzen und
              Kampagnen-Daten aus Kundenprojekten.
            </p>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 gap-4">
          {placeholders.map((item, index) => (
            <Reveal key={item.title} delay={index * 70}>
              <div className="aspect-[4/3] rounded-xl border border-dashed border-border bg-background/40 backdrop-blur-sm flex flex-col items-center justify-center gap-4 p-8 text-center">
                <div className="h-14 w-14 rounded-lg bg-secondary flex items-center justify-center">
                  <ImageIcon className="h-7 w-7 text-muted-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

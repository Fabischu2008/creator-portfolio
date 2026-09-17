import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { SectionLabel } from "@/components/section-label"
import { Reveal } from "@/components/reveal"

const faqs = [
  {
    question: "Für wen ist das?",
    answer:
      "Für Unternehmen und Selbstständige, die online wachsen wollen — ob du gerade startest oder deine bestehende Präsenz auf das nächste Level bringen willst. Website, Landingpage, Ads oder alles zusammen.",
  },
  {
    question: "Was passiert nach dem 60-Sekunden-Check?",
    answer:
      "Ich schaue mir deine Angaben an und melde mich persönlich bei dir — kein Automat, kein Verkaufsskript. Du bekommst eine ehrliche Einschätzung, ob und wie ich dir helfen kann.",
  },
  {
    question: "Was kostet eine Website oder Landingpage?",
    answer:
      "Das hängt vom Umfang ab. Einfache Landingpages starten ab ca. 800 €, professionelle Websites ab ca. 1.500 €. Im kostenlosen Check klären wir deinen Bedarf und ich nenne dir einen realistischen Rahmen.",
  },
  {
    question: "Betreust du auch Google Ads, Meta Ads und Social Media?",
    answer:
      "Ja — Google Ads, Meta Ads (Facebook & Instagram), Social Media Betreuung und SEO gehören zu meinen Kernleistungen. Google holt Menschen ab, die schon suchen, Meta erreicht sie davor. Ich kann einzelne Bereiche übernehmen oder alles aus einer Hand.",
  },
  {
    question: "Wie schnell kann es losgehen?",
    answer:
      "Landingpages sind oft in 1–2 Wochen live. Größere Websites dauern 3–6 Wochen. Ads-Kampagnen können wir innerhalb weniger Tage starten. Im Erstgespräch klären wir den genauen Zeitplan.",
  },
  {
    question: "Was, wenn ich noch nicht genau weiß, was ich brauche?",
    answer:
      "Genau dafür gibt es den 60-Sekunden-Check. Du beantwortest vier einfache Fragen, ich melde mich mit einer konkreten Empfehlung. Kostenlos und ohne Verpflichtung.",
  },
]

export function FAQ() {
  return (
    <section id="faq" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <Reveal>
          <div className="space-y-4 mb-12 text-center">
            <SectionLabel>Häufige Fragen</SectionLabel>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Bevor wir sprechen.</h2>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <Accordion type="single" collapsible className="space-y-2">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={faq.question}
                value={`item-${index}`}
                className="border border-border rounded-lg px-4 bg-background/60 backdrop-blur-sm"
              >
                <AccordionTrigger className="text-left font-medium hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  )
}

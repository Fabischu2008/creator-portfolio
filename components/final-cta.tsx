import { Reveal } from "@/components/reveal"
import { ContactActions } from "@/components/contact-actions"

export function FinalCta() {
  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 border-t border-border/60">
      <Reveal>
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-balance">
            Der nächste Schritt dauert 60 Sekunden.
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Vier Fragen, eine ehrliche Einschätzung — und du weißt, was für dein Business Sinn macht.
            Oder schreib mir direkt, wenn dir das lieber ist.
          </p>
          <ContactActions className="pt-2" />
          <p className="text-sm text-muted-foreground">
            Kostenlos · unverbindlich · persönliche Antwort innerhalb von 24 Stunden
          </p>
        </div>
      </Reveal>
    </section>
  )
}

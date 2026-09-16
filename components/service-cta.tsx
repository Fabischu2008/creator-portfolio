import { Reveal } from "@/components/reveal"
import { ContactActions } from "@/components/contact-actions"
import { serviceWhatsappMessage } from "@/lib/contact"

interface ServiceCtaProps {
  title: string
  text: string
  serviceTitle: string
}

export function ServiceCta({ title, text, serviceTitle }: ServiceCtaProps) {
  return (
    <section className="py-28 px-4 sm:px-6 lg:px-8">
      <Reveal>
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-balance">{title}</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">{text}</p>
          <ContactActions
            className="pt-2"
            whatsappMessage={serviceWhatsappMessage(serviceTitle)}
            mailSubject={`Anfrage: ${serviceTitle}`}
          />
          <p className="text-sm text-muted-foreground">
            Kostenlos · unverbindlich · persönliche Rückmeldung innerhalb von 24h
          </p>
        </div>
      </Reveal>
    </section>
  )
}

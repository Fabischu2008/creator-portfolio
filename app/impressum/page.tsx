import type { Metadata } from "next"
import { LegalLayout, LegalSection } from "@/components/legal-layout"
import { LEGAL } from "@/lib/legal"

export const metadata: Metadata = {
  title: "Impressum | Schuck Digital",
  description: "Anbieterkennzeichnung nach § 5 DDG für schuck.digital.",
  alternates: { canonical: "/impressum" },
}

export default function ImpressumPage() {
  return (
    <LegalLayout title="Impressum">
      <LegalSection title="Angaben gemäß § 5 DDG">
        <p>
          {LEGAL.name}
          <br />
          {LEGAL.businessName}
          <br />
          {LEGAL.street}
          <br />
          {LEGAL.zip} {LEGAL.city}
          <br />
          Deutschland
        </p>
      </LegalSection>

      <LegalSection title="Kontakt">
        <p>
          Telefon:{" "}
          <a href={`tel:${LEGAL.phone.replace(/\s/g, "")}`} className="hover:text-foreground transition-colors">
            {LEGAL.phone}
          </a>
          <br />
          E-Mail:{" "}
          <a href={`mailto:${LEGAL.email}`} className="hover:text-foreground transition-colors">
            {LEGAL.email}
          </a>
        </p>
      </LegalSection>

      <LegalSection title="Umsatzsteuer">
        <p>
          Als Kleinunternehmer im Sinne von § 19 Abs. 1 UStG wird keine Umsatzsteuer berechnet und
          entsprechend keine Umsatzsteuer-Identifikationsnummer geführt.
        </p>
      </LegalSection>

      <LegalSection title="Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV">
        <p>
          {LEGAL.name}
          <br />
          {LEGAL.street}
          <br />
          {LEGAL.zip} {LEGAL.city}
        </p>
      </LegalSection>

      <LegalSection title="Verbraucherstreitbeilegung">
        <p>
          Ich bin nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren vor einer
          Verbraucherschlichtungsstelle teilzunehmen.
        </p>
      </LegalSection>

      <LegalSection title="Haftung für Inhalte">
        <p>
          Als Diensteanbieter bin ich für eigene Inhalte auf diesen Seiten nach den allgemeinen
          Gesetzen verantwortlich. Ich bin jedoch nicht verpflichtet, übermittelte oder gespeicherte
          fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine
          rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung
          von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine
          diesbezügliche Haftung ist erst ab dem Zeitpunkt der Kenntnis einer konkreten
          Rechtsverletzung möglich. Bei Bekanntwerden entsprechender Rechtsverletzungen entferne ich
          diese Inhalte umgehend.
        </p>
      </LegalSection>

      <LegalSection title="Haftung für Links">
        <p>
          Diese Website enthält Links zu externen Websites Dritter, auf deren Inhalte ich keinen
          Einfluss habe. Deshalb kann ich für diese fremden Inhalte auch keine Gewähr übernehmen. Für
          die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber
          verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche
          Rechtsverstöße überprüft; rechtswidrige Inhalte waren nicht erkennbar. Bei Bekanntwerden
          von Rechtsverletzungen entferne ich derartige Links umgehend.
        </p>
      </LegalSection>

      <LegalSection title="Urheberrecht">
        <p>
          Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen
          dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
          Verwertung außerhalb der Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung
          des jeweiligen Autors beziehungsweise Erstellers. Die auf dieser Website gezeigten
          Projektabbildungen stammen aus eigenen Kundenprojekten und werden mit Zustimmung der
          jeweiligen Auftraggeber verwendet.
        </p>
      </LegalSection>
    </LegalLayout>
  )
}

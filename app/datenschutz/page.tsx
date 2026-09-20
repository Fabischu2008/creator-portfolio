import type { Metadata } from "next"
import { LegalLayout, LegalSection } from "@/components/legal-layout"
import { LEGAL, LEGAL_LAST_UPDATED } from "@/lib/legal"

export const metadata: Metadata = {
  title: "Datenschutzerklärung | Schuck Digital",
  description:
    "Wie schuck.digital mit deinen Daten umgeht: Hosting, Reichweitenmessung, Kontaktformular und deine Rechte nach der DSGVO.",
  alternates: { canonical: "/datenschutz" },
}

export default function DatenschutzPage() {
  return (
    <LegalLayout
      title="Datenschutzerklärung"
      subtitle={`Stand: ${LEGAL_LAST_UPDATED}`}
    >
      <LegalSection title="Das Wichtigste vorweg">
        <p>
          Diese Website setzt <strong>keine Cookies</strong> und speichert nichts im Speicher deines
          Browsers. Deshalb gibt es auch kein Cookie-Banner. Die verwendeten Schriftarten liegen auf
          dem eigenen Server, es wird also keine Verbindung zu Google aufgebaut. Personenbezogene
          Daten entstehen im Wesentlichen nur dann, wenn du mir aktiv schreibst.
        </p>
      </LegalSection>

      <LegalSection title="Verantwortlicher">
        <p>
          Verantwortlich für die Datenverarbeitung auf dieser Website ist:
          <br />
          <br />
          {LEGAL.name}
          <br />
          {LEGAL.street}
          <br />
          {LEGAL.zip} {LEGAL.city}
          <br />
          Deutschland
          <br />
          E-Mail: {LEGAL.email}
          <br />
          Telefon: {LEGAL.phone}
        </p>
      </LegalSection>

      <LegalSection title="Hosting">
        <p>
          Diese Website wird bei der Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA
          gehostet. Beim Aufruf der Seite verarbeitet Vercel technisch notwendige Verbindungsdaten in
          meinem Auftrag. Mit Vercel besteht ein Vertrag über die Auftragsverarbeitung nach Art. 28
          DSGVO. Die Übermittlung in die USA wird über die Standardvertragsklauseln der
          EU-Kommission beziehungsweise eine Zertifizierung nach dem EU-US Data Privacy Framework
          abgesichert.
        </p>
        <p>
          Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Mein berechtigtes Interesse liegt in einer
          sicheren, schnellen und zuverlässigen Bereitstellung dieser Website.
        </p>
      </LegalSection>

      <LegalSection title="Server-Logfiles">
        <p>
          Beim Aufruf der Website werden automatisch Informationen erfasst, die dein Browser
          übermittelt: aufgerufene Adresse, Datum und Uhrzeit des Zugriffs, übertragene Datenmenge,
          Browsertyp und Betriebssystem, die zuvor besuchte Seite sowie die IP-Adresse. Diese Daten
          sind technisch erforderlich, um die Seite auszuliefern und die Systemsicherheit zu
          gewährleisten. Eine Zusammenführung mit anderen Datenquellen findet nicht statt.
        </p>
        <p>
          Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO.
        </p>
      </LegalSection>

      <LegalSection title="Reichweitenmessung mit Vercel Web Analytics">
        <p>
          Zur Auswertung der Seitennutzung kommen Vercel Web Analytics und Vercel Speed Insights zum
          Einsatz, Dienste der Vercel Inc. Die Skripte werden über die eigene Domain ausgeliefert. Sie
          setzen <strong>keine Cookies</strong>, vergeben keine geräteübergreifende Kennung und
          erstellen kein Profil einzelner Besucher. Erfasst werden aggregierte Angaben wie
          aufgerufene Seiten, ungefähre Herkunftsregion, Gerätetyp, die verweisende Seite sowie
          technische Leistungskennzahlen (etwa Ladezeiten).
        </p>
        <p>
          Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Mein berechtigtes Interesse liegt darin,
          die Nutzung meines Angebots statistisch auszuwerten und die Website zu verbessern. Da keine
          Informationen auf deinem Endgerät gespeichert oder ausgelesen werden, ist keine
          Einwilligung nach § 25 TDDDG erforderlich.
        </p>
      </LegalSection>

      <LegalSection title="Kontaktformular und 60-Sekunden-Check">
        <p>
          Wenn du das Kontaktformular oder den 60-Sekunden-Check nutzt, verarbeite ich die von dir
          eingegebenen Angaben — je nach Formular Name, E-Mail-Adresse, Nachricht sowie deine
          Antworten zu gewünschter Leistung, Ziel, Zeitrahmen und Budget. Diese Daten dienen
          ausschließlich der Bearbeitung deiner Anfrage.
        </p>
        <p>
          Für den Versand dieser Anfragen an mein Postfach nutze ich den E-Mail-Dienst der Resend,
          Inc., 2261 Market Street #5039, San Francisco, CA 94114, USA. Resend verarbeitet die
          Formulardaten in meinem Auftrag auf Grundlage eines Vertrags zur Auftragsverarbeitung nach
          Art. 28 DSGVO.
        </p>
        <p>
          Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, soweit deine Anfrage auf einen
          Vertragsabschluss abzielt, im Übrigen Art. 6 Abs. 1 lit. f DSGVO aufgrund meines
          berechtigten Interesses an der Beantwortung von Anfragen.
        </p>
      </LegalSection>

      <LegalSection title="Kontaktaufnahme per WhatsApp, E-Mail oder Telefon">
        <p>
          Auf der Website findest du Verweise auf WhatsApp. Erst wenn du einen solchen Verweis
          anklickst, baut dein Gerät eine Verbindung zu WhatsApp auf und es werden Daten an die
          WhatsApp Ireland Limited übertragen. Auf diese Verarbeitung habe ich keinen Einfluss; es
          gelten die Datenschutzbestimmungen von WhatsApp. Schreibst du mir dort, per E-Mail oder
          rufst du an, verarbeite ich die dabei anfallenden Daten zur Bearbeitung deines Anliegens.
        </p>
        <p>
          Rechtsgrundlage ist Art. 6 Abs. 1 lit. b beziehungsweise lit. f DSGVO.
        </p>
      </LegalSection>

      <LegalSection title="Externe Verweise">
        <p>
          Diese Website verlinkt auf externe Angebote, etwa LinkedIn. Beim bloßen Aufruf meiner Seite
          werden dorthin keine Daten übertragen. Erst wenn du einen Verweis anklickst, gelangst du
          zum jeweiligen Anbieter, dessen eigene Datenschutzbestimmungen dann gelten.
        </p>
      </LegalSection>

      <LegalSection title="Speicherdauer">
        <p>
          Server-Logfiles werden nach kurzer Zeit automatisch gelöscht, sobald sie für die
          Systemsicherheit nicht mehr erforderlich sind. Anfragen über das Formular oder per E-Mail
          bewahre ich so lange auf, wie es zur Bearbeitung deines Anliegens nötig ist, und darüber
          hinaus nur, soweit gesetzliche Aufbewahrungspflichten bestehen.
        </p>
      </LegalSection>

      <LegalSection title="Deine Rechte">
        <p>
          Du hast jederzeit das Recht auf Auskunft über die zu deiner Person gespeicherten Daten
          (Art. 15 DSGVO), auf Berichtigung (Art. 16 DSGVO), auf Löschung (Art. 17 DSGVO), auf
          Einschränkung der Verarbeitung (Art. 18 DSGVO) sowie auf Datenübertragbarkeit (Art. 20
          DSGVO).
        </p>
        <p>
          Soweit die Verarbeitung auf einem berechtigten Interesse beruht, kannst du dieser nach Art.
          21 DSGVO widersprechen. Eine erteilte Einwilligung kannst du jederzeit mit Wirkung für die
          Zukunft widerrufen. Für all das genügt eine formlose Nachricht an {LEGAL.email}.
        </p>
        <p>
          Unabhängig davon steht dir ein Beschwerderecht bei einer Datenschutz-Aufsichtsbehörde zu,
          insbesondere in dem Mitgliedstaat deines Aufenthaltsorts, deines Arbeitsplatzes oder des
          Orts des mutmaßlichen Verstoßes.
        </p>
      </LegalSection>

      <LegalSection title="Verschlüsselung">
        <p>
          Diese Website nutzt durchgehend eine TLS-Verschlüsselung. Du erkennst sie an der Adresse,
          die mit <span className="whitespace-nowrap">https://</span> beginnt. Dadurch können die
          Daten, die du an mich übermittelst, nicht von Dritten mitgelesen werden.
        </p>
      </LegalSection>
    </LegalLayout>
  )
}

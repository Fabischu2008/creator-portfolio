import Link from "next/link"
import { ArrowLeft, ArrowRight, Check, SearchCheck, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SectionLabel } from "@/components/section-label"
import { Reveal } from "@/components/reveal"
import { GoogleAdsAuditForm } from "@/components/google-ads-audit-form"
import {
  CONTACT_EMAIL,
  GOOGLE_ADS_AUDIT_WHATSAPP_MESSAGE,
  mailtoUrl,
  whatsappUrl,
} from "@/lib/contact"

const benefits = [
  {
    title: "Klarer Blick aufs Konto",
    description:
      "Tracking, Kontostruktur, Suchbegriffe, Gebote, Anzeigen, Merchant Center und Feed — an einem Ort, in normaler Sprache.",
  },
  {
    title: "Wo das Budget verbrennt",
    description:
      "Eine ehrliche Einschätzung, wo Geld verloren geht, und welche 3–5 Maßnahmen den größten Effekt haben.",
  },
  {
    title: "Bericht, den du verstehst",
    description:
      "PDF mit 8–12 Seiten plus priorisierte To-do-Liste: Sofort, als Nächstes, später. Zum Abarbeiten, nicht zum Ablegen.",
  },
  {
    title: "30 Minuten Auswertung",
    description:
      "Wir gehen den Bericht gemeinsam durch. Du stellst die Fragen, ich sage dir, was ich an deiner Stelle zuerst anfasse.",
  },
  {
    title: "Lieferung in 5 Werktagen",
    description:
      "Sobald der Kontozugang da ist. Kein offenes Projekt, kein Warten auf den nächsten Monat.",
  },
]

const scope = [
  {
    title: "Tracking & Messung",
    description: "Conversion-Setup, Consent Mode und Checkout-Tracking. Stimmen die Zahlen, auf die Google optimiert?",
  },
  {
    title: "Kontostruktur & Budget",
    description: "Kampagnen, Anzeigengruppen und wohin das Budget wirklich fließt — Search, Shopping, Performance Max.",
  },
  {
    title: "Streuverluste & Suchbegriffe",
    description: "Suchbegriff-Bericht, Negativ-Keywords und Match Types. Hier versickert bei den meisten Shops das meiste Geld.",
  },
  {
    title: "Gebote & Ziele",
    description: "tCPA, tROAS, Maximize Conversions und Maximize Conversion Value. Passt das Ziel zu deinen Margen?",
  },
  {
    title: "Anzeigen & Assets",
    description: "Texte, Erweiterungen und Asset-Gruppen. Was Google ausspielt, und was davon zu deinem Angebot passt.",
  },
  {
    title: "Shopping, Merchant Center & Feed",
    description: "Titel, Preise, Verfügbarkeit und Ablehnungen. Ein unsauberer Feed macht Shopping und Performance Max teuer.",
  },
  {
    title: "Zielgruppen & Einstellungen",
    description: "Remarketing, Standorte, Geräte und Ausschlüsse. Die stillen Hebel, die oft niemand anfasst.",
  },
  {
    title: "Landingpages & Shop-Reibung",
    description: "Ob der Klick auf einer Seite landet, die verkauft — oder Checkout, Tempo und Angebot ihn wieder verlieren.",
  },
  {
    title: "Kennzahlen & Potenzial",
    description: "ROAS, CPA und Impression Share. Wo Luft nach oben ist, und wo mehr Budget nur teurer wird.",
  },
]

const limits = [
  {
    title: "Kein Gratis-Check",
    description: "Du bekommst eine bezahlte, gründliche Prüfung. Kein kurzes Bauchgefühl am Telefon.",
  },
  {
    title: "Keine Folienpräsentation",
    description: "Der Bericht ist zum Arbeiten da. Keine 40 Folien, die nach dem Call niemand mehr öffnet.",
  },
  {
    title: "Keine versteckte Verpflichtung",
    description: "Danach entscheidest du, ob Umsetzung oder Betreuung Sinn macht. Der Audit endet mit dem Gespräch.",
  },
  {
    title: "Keine Änderungen im Konto",
    description: "Ich schaue, bewerte und schreibe. Umschalten mache ich nur, wenn du es extra beauftragst.",
  },
]

const steps = [
  {
    title: "Kick-off",
    text: "Wir klären Ziele, monatliches Budget und den Zugang zu Google Ads — und zum Merchant Center, falls du Shopping oder Performance Max fährst.",
  },
  {
    title: "Kontoanalyse",
    text: "Ich prüfe Tracking, Struktur, Suchbegriffe, Gebote, Anzeigen, Feed, Einstellungen und die Seiten, auf denen die Klicks landen.",
  },
  {
    title: "PDF-Bericht vorab",
    text: "Du bekommst den Bericht, bevor wir sprechen. So kommst du vorbereitet rein und wir verlieren die 30 Minuten nicht an Grundlagen.",
  },
  {
    title: "30 Minuten Auswertung",
    text: "Wir gehen die Prioritäten durch. Du fragst, was unklar ist. Ich sage dir, welche Punkte den größten Hebel haben.",
  },
  {
    title: "Du entscheidest in Ruhe",
    text: "Umsetzung, Betreuung oder selbst weitermachen. Ohne Nachfassen, das dich in ein Abo drückt.",
  },
]

const prices = [
  {
    featured: true,
    label: "Einstieg",
    title: "Google Ads Audit",
    price: "249 €",
    unit: "einmalig, netto zzgl. MwSt.",
    description:
      "Tracking, Konto, Kampagnen und Feed. PDF-Bericht, priorisierte To-do-Liste und 30 Minuten Auswertung. Lieferung in 5 Werktagen.",
  },
  {
    featured: false,
    label: "Optional danach",
    title: "Quick-Wins-Umsetzung",
    price: "690 €",
    unit: "einmalig, netto zzgl. MwSt.",
    description:
      "Die wichtigsten Punkte aus dem Audit setze ich einmalig direkt im Konto um. Ohne dass daraus eine laufende Betreuung wird.",
  },
  {
    featured: false,
    label: "Laufend",
    title: "Betreuung",
    price: "ab 790 €",
    unit: "pro Monat, netto zzgl. MwSt.",
    description:
      "Starter ab 790 €/Monat. Wachstum: 1.190 €/Monat oder 12 % des Mediabudgets.",
  },
]

export function GoogleAdsAuditContent() {
  return (
    <>
      <section className="px-4 pb-20 pt-32 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <Link
            href="/"
            className="mb-10 inline-flex items-center text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Zur Startseite
          </Link>

          <div className="space-y-6">
            <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-foreground text-background">
              <SearchCheck className="h-7 w-7" aria-hidden="true" />
            </div>
            <SectionLabel>Google Ads Audit</SectionLabel>
            <h1
              lang="de"
              className="text-balance text-4xl font-bold tracking-tight hyphens-auto md:text-5xl lg:text-6xl"
            >
              Dein Google-Ads-Konto hat ein Leck. In 5 Werktagen zeige ich dir, wo.
            </h1>
            <p className="max-w-3xl text-balance text-xl text-muted-foreground md:text-2xl">
              Bezahlter Google Ads Audit für Shopify-Shops und kleine Unternehmen — Tracking,
              Streuverluste, Kampagnen und Feed, klar priorisiert, verständlich erklärt, ohne
              Betreuungszwang.
            </p>
            <div className="flex flex-col items-start gap-4 pt-2">
              <Button size="lg" className="group" asChild>
                <a href="#audit-anfragen">
                  Audit für 249 € anfragen
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <p className="text-sm text-muted-foreground">
                249 € netto zzgl. MwSt. · PDF in 5 Werktagen · kein Betreuungszwang
              </p>
              <p className="text-sm text-muted-foreground">
                Lieber direkt schreiben?{" "}
                <a
                  href={whatsappUrl(GOOGLE_ADS_AUDIT_WHATSAPP_MESSAGE)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4 transition-colors hover:text-foreground"
                >
                  WhatsApp
                </a>
                {" · "}
                <a
                  href={mailtoUrl("Google Ads Audit anfragen")}
                  className="underline underline-offset-4 transition-colors hover:text-foreground"
                >
                  {CONTACT_EMAIL}
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border/60 px-4 py-20 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto max-w-3xl space-y-6">
            <SectionLabel>Das Problem</SectionLabel>
            <h2 className="text-balance text-3xl font-bold tracking-tight md:text-4xl">
              Zu viel Budget, zu wenig Bestellungen.
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground md:text-xl">
              Viele Shops schalten Google Ads und haben das Gefühl, dass zu viel Budget versickert.
              Die Kosten steigen, die Bestellungen nicht. Performance Max läuft „irgendwie“. Und
              niemand weiß sicher, ob die Conversions überhaupt stimmen. Genau das prüfe ich — bevor
              du weiter Geld nachschiebst.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <div className="mb-12 space-y-4">
              <SectionLabel>Was du bekommst</SectionLabel>
              <h2 className="text-balance text-3xl font-bold tracking-tight md:text-4xl">
                Klarheit, die du direkt umsetzen kannst.
              </h2>
            </div>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {benefits.map((benefit, index) => (
              <Reveal
                key={benefit.title}
                delay={index * 70}
                className={index === benefits.length - 1 ? "h-full sm:col-span-2" : "h-full"}
              >
                <div className="h-full space-y-3 rounded-xl border border-border bg-background/60 p-6 backdrop-blur-sm">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-foreground text-background">
                    <Check className="h-4 w-4" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-semibold">{benefit.title}</h3>
                  <p className="leading-relaxed text-muted-foreground">{benefit.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border/60 px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <div className="mb-12 max-w-3xl space-y-4">
              <SectionLabel>Prüfumfang</SectionLabel>
              <h2 className="text-balance text-3xl font-bold tracking-tight md:text-4xl">
                Was ich im Konto wirklich anschaue.
              </h2>
            </div>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {scope.map((item, index) => (
              <Reveal key={item.title} delay={index * 50} className="h-full">
                <div className="h-full space-y-3 rounded-xl border border-border bg-background/60 p-6 backdrop-blur-sm">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="leading-relaxed text-muted-foreground">{item.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <div className="mb-12 space-y-4">
              <SectionLabel>Klare Grenze</SectionLabel>
              <h2 className="text-balance text-3xl font-bold tracking-tight md:text-4xl">
                Was der Audit nicht ist.
              </h2>
            </div>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {limits.map((item, index) => (
              <Reveal key={item.title} delay={index * 70} className="h-full">
                <div className="flex h-full gap-4 rounded-xl border border-border bg-background/60 p-6 backdrop-blur-sm">
                  <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-border">
                    <X className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="leading-relaxed text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border/60 px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <div className="mb-12 space-y-4">
              <SectionLabel>Ablauf</SectionLabel>
              <h2 className="text-balance text-3xl font-bold tracking-tight md:text-4xl">
                So läuft der Audit ab.
              </h2>
            </div>
          </Reveal>

          <div className="space-y-3">
            {steps.map((step, index) => (
              <Reveal key={step.title} delay={index * 70}>
                <div className="flex items-start gap-4 rounded-xl border border-border bg-background/60 p-5 backdrop-blur-sm">
                  <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-foreground text-sm font-semibold text-background">
                    {index + 1}
                  </span>
                  <div className="space-y-1 pt-0.5">
                    <h3 className="font-semibold">{step.title}</h3>
                    <p className="leading-relaxed text-muted-foreground">{step.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <div className="mb-12 max-w-3xl space-y-4">
              <SectionLabel>Preise</SectionLabel>
              <h2 className="text-balance text-3xl font-bold tracking-tight md:text-4xl">
                Ein klarer Einstieg. Der Rest ist optional.
              </h2>
            </div>
          </Reveal>

          <div className="grid gap-4 lg:grid-cols-3">
            {prices.map((tier, index) => (
              <Reveal key={tier.title} delay={index * 70} className="h-full">
                <div
                  className={`flex h-full flex-col space-y-4 rounded-xl border bg-background/60 p-6 backdrop-blur-sm ${
                    tier.featured ? "border-foreground" : "border-border"
                  }`}
                >
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                    {tier.label}
                  </p>
                  <div className="space-y-1">
                    <h3 className="text-lg font-semibold">{tier.title}</h3>
                    <p className="text-4xl font-bold tracking-tight">{tier.price}</p>
                    <p className="text-sm text-muted-foreground">{tier.unit}</p>
                  </div>
                  <p className="flex-1 leading-relaxed text-muted-foreground">{tier.description}</p>
                  {tier.featured && (
                    <Button className="group w-full" asChild>
                      <a href="#audit-anfragen">
                        Audit für 249 € anfragen
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </a>
                    </Button>
                  )}
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={180}>
            <div className="mt-4 space-y-3 rounded-xl border border-border bg-background/60 p-6 backdrop-blur-sm">
              <h3 className="font-semibold">14-Tage-Brücke</h3>
              <p className="leading-relaxed text-muted-foreground">
                Startest du innerhalb von 14 Tagen die laufende Betreuung, wird die Audit-Gebühr von
                249 € auf die erste Monatsrechnung angerechnet.
              </p>
            </div>
          </Reveal>

          <p className="mt-6 text-sm text-muted-foreground">
            Alle Preise netto zzgl. MwSt. Keine Erfolgsgarantie — ein Audit zeigt dir, wo es hakt.
            Was du daraus machst, entscheidest du.
          </p>
          <p className="mt-4">
            <Link
              href="/leistungen/meta-google-ads"
              className="inline-flex items-center text-sm font-medium transition-opacity hover:opacity-70"
            >
              Laufende Betreuung im Detail
              <ArrowRight className="ml-1 h-3.5 w-3.5" />
            </Link>
          </p>
        </div>
      </section>

      <section id="audit-anfragen" className="scroll-mt-24 border-t border-border/60 px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-5xl items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="space-y-6">
              <SectionLabel>Audit anfragen</SectionLabel>
              <h2 className="text-balance text-3xl font-bold tracking-tight md:text-5xl">
                Sag mir, ob der Audit bei dir Sinn macht.
              </h2>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Schreib mir Budget, Shop-URL und was aktuell nicht rund läuft. Ich melde mich
                innerhalb eines Werktags — und sage dir ehrlich, wenn der Audit in deinem Fall
                nichts bringt.
              </p>
              <ul className="space-y-3 pt-2">
                {[
                  "249 € netto zzgl. MwSt., einmalig.",
                  "Keine Änderungen im Konto, kein Abo.",
                  "Antwort innerhalb eines Werktags.",
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-muted-foreground">
                    <ArrowRight className="mt-0.5 h-5 w-5 flex-shrink-0 text-foreground" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <GoogleAdsAuditForm />
          </Reveal>
        </div>
      </section>
    </>
  )
}

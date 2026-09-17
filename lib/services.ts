import type { LucideIcon } from "lucide-react"
import { Globe, Layout, Megaphone, Search, Share2, TrendingUp } from "lucide-react"

export interface ServiceBenefit {
  title: string
  description: string
}

export interface Service {
  slug: string
  icon: LucideIcon
  title: string
  shortDescription: string
  heroSubtitle: string
  intro: string
  whyTitle: string
  whyText: string
  benefits: ServiceBenefit[]
  process: string[]
  ctaTitle: string
  ctaText: string
}

export const services: Service[] = [
  {
    slug: "websites-landingpages",
    icon: Layout,
    title: "Websites & Landingpages",
    shortDescription:
      "Conversion-optimierte Seiten, die Besucher in Anfragen verwandeln.",
    heroSubtitle: "Deine Website ist dein bester Verkäufer — 24/7.",
    intro:
      "Eine Website ist mehr als eine digitale Visitenkarte. Sie ist der Ort, an dem Interesse zu Vertrauen und Vertrauen zu Umsatz wird. Wir bauen Websites und Landingpages, die genau das tun: klar kommunizieren, Vertrauen aufbauen und Besucher zu Kunden machen.",
    whyTitle: "Warum das deinem Business etwas bringt",
    whyText:
      "73 % der Kunden entscheiden sich für ein Unternehmen, dessen Website professionell wirkt. Eine langsame, veraltete oder unklare Seite kostet dich täglich Anfragen — oft ohne dass du es merkst. Eine conversion-optimierte Website arbeitet für dich, während du schläfst.",
    benefits: [
      {
        title: "Mehr qualifizierte Anfragen",
        description:
          "Klare Struktur, überzeugende Texte und strategisch platzierte CTAs führen Besucher gezielt zur Kontaktaufnahme.",
      },
      {
        title: "Professioneller erster Eindruck",
        description:
          "Deine Website ist oft der erste Kontaktpunkt. Ein modernes Design signalisiert Kompetenz und Vertrauenswürdigkeit.",
      },
      {
        title: "Schnelle Ladezeiten",
        description:
          "Performance ist kein Nice-to-have. Schnelle Seiten ranken besser und verlieren weniger Besucher.",
      },
      {
        title: "Mobile-first Design",
        description:
          "Über 60 % deiner Besucher kommen vom Smartphone. Deine Seite muss auf jedem Gerät überzeugen.",
      },
    ],
    process: [
      "Kostenloser 60-Sekunden-Check — wir klären dein Ziel",
      "Konzept & Struktur — was deine Seite braucht, um zu verkaufen",
      "Design & Entwicklung — modern, schnell, conversion-optimiert",
      "Launch & Optimierung — live gehen und Ergebnisse messen",
    ],
    ctaTitle: "Bereit für eine Website, die verkauft?",
    ctaText:
      "Starte den kostenlosen 60-Sekunden-Check und erfahre, wie deine neue Website aussehen kann.",
  },
  {
    slug: "meta-google-ads",
    icon: Megaphone,
    title: "Meta & Google Ads",
    shortDescription:
      "Bezahlte Werbung auf Facebook, Instagram und Google — für messbare Anfragen.",
    heroSubtitle: "Die richtigen Menschen. Zur richtigen Zeit. Mit der richtigen Botschaft.",
    intro:
      "Meta Ads (Facebook & Instagram) und Google Ads sind die beiden stärksten Hebel für schnelles Wachstum — sie funktionieren nur unterschiedlich. Google holt Menschen ab, die bereits nach deinem Angebot suchen. Meta zeigt dich Menschen, die dich noch gar nicht kennen. Ich setze beide Kanäle so auf, dass sie sich ergänzen statt sich das Budget wegzunehmen.",
    whyTitle: "Warum bezahlte Werbung dein Wachstum beschleunigt",
    whyText:
      "Organische Reichweite allein reicht selten aus, um planbar zu wachsen. Mit Ads bestimmst du selbst, wie viele Menschen dich morgen sehen — und du siehst für jeden eingesetzten Euro, was er zurückbringt. Ob Google, Meta oder beides sinnvoll ist, hängt von deinem Angebot ab. Genau das klären wir vorher, statt einfach Budget zu verbrennen.",
    benefits: [
      {
        title: "Google: Nachfrage abgreifen",
        description:
          "Wer bei Google nach deiner Leistung sucht, will kaufen. Mit Search Ads stehst du genau in diesem Moment ganz oben — noch vor der Konkurrenz.",
      },
      {
        title: "Meta: Nachfrage erzeugen",
        description:
          "Auf Facebook und Instagram erreichst du Menschen, bevor sie überhaupt suchen — nach Alter, Interesse, Standort und Verhalten.",
      },
      {
        title: "Messbare ROI",
        description:
          "Du siehst exakt, was jede Kampagne kostet und was sie bringt. Keine Black Box, volle Transparenz.",
      },
      {
        title: "Skalierbares Wachstum",
        description:
          "Was funktioniert, skalieren wir. Was nicht funktioniert, optimieren wir — datenbasiert und kontinuierlich.",
      },
    ],
    process: [
      "Kanal-Entscheidung — Google, Meta oder beides?",
      "Zielgruppen- & Keyword-Analyse — wer sucht wonach?",
      "Kampagnen-Setup — Anzeigen, Creatives, Tracking",
      "Testing & Optimierung — A/B-Tests für maximale Performance",
      "Reporting — monatliche Auswertung und Strategie-Anpassung",
    ],
    ctaTitle: "Mehr Kunden über Google, Facebook & Instagram?",
    ctaText:
      "Im 60-Sekunden-Check klären wir, welcher Kanal für dein Business Sinn macht — kostenlos und unverbindlich.",
  },
  {
    slug: "social-media",
    icon: Share2,
    title: "Social Media Betreuung",
    shortDescription:
      "Professioneller Auftritt, Content-Strategie und Community-Management.",
    heroSubtitle: "Sichtbar sein, wo deine Kunden sind.",
    intro:
      "Social Media ist längst kein Spielzeug mehr — es ist ein zentraler Kanal für Markenaufbau, Kundenbindung und Vertrauen. Wir übernehmen deinen professionellen Auftritt auf allen relevanten Plattformen, damit du dich auf dein Business konzentrieren kannst.",
    whyTitle: "Warum Social Media dein Business stärkt",
    whyText:
      "Menschen kaufen von Menschen, denen sie vertrauen. Ein aktiver, authentischer Social-Media-Auftritt baut genau dieses Vertrauen auf — noch bevor jemand deine Website besucht. Unternehmen mit konsistenter Social-Media-Präsenz generieren bis zu 3× mehr Leads.",
    benefits: [
      {
        title: "Markenbekanntheit steigern",
        description:
          "Regelmäßiger, hochwertiger Content hält deine Marke im Kopf deiner Zielgruppe.",
      },
      {
        title: "Vertrauen aufbauen",
        description:
          "Authentische Einblicke, Kundenstories und Expertise-Content schaffen Nähe und Glaubwürdigkeit.",
      },
      {
        title: "Mehr Reichweite & Engagement",
        description:
          "Strategischer Content, der geteilt, kommentiert und gespeichert wird — organisch und bezahlt.",
      },
      {
        title: "Zeit sparen",
        description:
          "Wir übernehmen Planung, Erstellung und Veröffentlichung. Du behältst die Kontrolle, ohne den Aufwand.",
      },
    ],
    process: [
      "Analyse deiner Marke & Zielgruppe",
      "Content-Strategie & Redaktionsplan",
      "Erstellung & Veröffentlichung",
      "Monatliches Reporting & Optimierung",
    ],
    ctaTitle: "Social Media, das wirklich wirkt?",
    ctaText:
      "Lass uns im 60-Sekunden-Check besprechen, wie wir deinen Social-Media-Auftritt auf das nächste Level bringen.",
  },
  {
    slug: "seo",
    icon: Search,
    title: "SEO",
    shortDescription:
      "Search Engine Optimization — damit dich deine Kunden finden, bevor sie zur Konkurrenz gehen.",
    heroSubtitle: "Gefunden werden, wenn es zählt.",
    intro:
      "SEO (Search Engine Optimization) sorgt dafür, dass deine Website bei Google sichtbar ist — genau dann, wenn potenzielle Kunden nach deinen Leistungen suchen. Keine Werbekosten pro Klick. Nachhaltige Sichtbarkeit, die langfristig Kunden bringt.",
    whyTitle: "Warum SEO die beste Investition ist",
    whyText:
      "68 % aller Online-Erfahrungen beginnen mit einer Google-Suche. Wenn du nicht auf Seite 1 stehst, existierst du für die meisten Suchenden nicht. SEO ist kein Sprint — es ist der Marathon, der dein Business dauerhaft vorne hält.",
    benefits: [
      {
        title: "Organische Sichtbarkeit",
        description:
          "Erscheine bei relevanten Suchbegriffen — ohne für jeden Klick zu bezahlen.",
      },
      {
        title: "Qualifizierte Besucher",
        description:
          "Menschen, die aktiv nach deiner Lösung suchen, landen direkt auf deiner Seite.",
      },
      {
        title: "Langfristiger ROI",
        description:
          "Anders als Ads wirkt SEO über Monate und Jahre — jede Optimierung zahlt auf dein zukünftiges Wachstum ein.",
      },
      {
        title: "Wettbewerbsvorteil",
        description:
          "Während deine Konkurrenz nur auf Ads setzt, baust du eine nachhaltige Traffic-Quelle auf.",
      },
    ],
    process: [
      "SEO-Audit — wo stehst du heute?",
      "Keyword-Recherche & Strategie",
      "On-Page & technische Optimierung",
      "Content-Erstellung & kontinuierliches Monitoring",
    ],
    ctaTitle: "Bei Google gefunden werden?",
    ctaText:
      "Im kostenlosen Check analysieren wir dein Potenzial und zeigen dir, wo die größten SEO-Chancen liegen.",
  },
  {
    slug: "kundengewinnung",
    icon: TrendingUp,
    title: "Kundengewinnung & Umsatz",
    shortDescription:
      "Ganzheitliche Marketing-Strategien für mehr Anfragen und nachhaltiges Wachstum.",
    heroSubtitle: "Systematisch wachsen — nicht zufällig.",
    intro:
      "Kundengewinnung ist kein Zufall, sondern System. Wir verbinden Website, Ads, Social Media und SEO zu einer durchdachten Strategie, die dir kontinuierlich neue Kunden bringt und deinen Umsatz steigert.",
    whyTitle: "Warum eine ganzheitliche Strategie den Unterschied macht",
    whyText:
      "Einzelne Maßnahmen bringen einzelne Ergebnisse. Erst wenn Website, Marketing und Nachverfolgung zusammenspielen, entsteht ein System, das vorhersagbar wächst. Unternehmen mit integriertem Marketing erzielen im Schnitt 20–30 % mehr Umsatz.",
    benefits: [
      {
        title: "Vorhersagbare Pipeline",
        description:
          "Du weißt, wie viele Anfragen pro Monat reinkommen — und kannst planen.",
      },
      {
        title: "Höhere Abschlussquoten",
        description:
          "Optimierte Customer Journey von der ersten Berührung bis zum Abschluss.",
      },
      {
        title: "Umsatzsteigerung",
        description:
          "Mehr qualifizierte Leads + bessere Conversion = messbar mehr Umsatz.",
      },
      {
        title: "Alles aus einer Hand",
        description:
          "Kein Koordinationsaufwand zwischen fünf verschiedenen Anbietern.",
      },
    ],
    process: [
      "Analyse deiner aktuellen Kundengewinnung",
      "Strategie-Entwicklung — welche Kanäle, welches Budget?",
      "Umsetzung aller Maßnahmen",
      "Laufende Optimierung & Reporting",
    ],
    ctaTitle: "Systematisch mehr Umsatz?",
    ctaText:
      "Starte den 60-Sekunden-Check und lass uns deine Wachstumsstrategie besprechen.",
  },
  {
    slug: "digitale-praesenz",
    icon: Globe,
    title: "Digitale Präsenz",
    shortDescription:
      "Vom ersten Eindruck bis zum Abschluss — dein Unternehmen online überzeugen.",
    heroSubtitle: "Online präsent sein, wo es zählt.",
    intro:
      "Deine digitale Präsenz ist das Gesamtbild, das potenzielle Kunden von dir bekommen — Website, Social Media, Google-Einträge, Bewertungen. Wir sorgen dafür, dass dieses Bild professionell, konsistent und überzeugend ist.",
    whyTitle: "Warum deine digitale Präsenz entscheidend ist",
    whyText:
      "Bevor jemand anruft oder kauft, googelt er. Er schaut auf Instagram. Er liest Bewertungen. Wenn überall ein professionelles, stimmiges Bild entsteht, steigt das Vertrauen — und mit ihm die Wahrscheinlichkeit, dass jemand bei dir kauft.",
    benefits: [
      {
        title: "Konsistenter Markenauftritt",
        description:
          "Ein einheitliches Erscheinungsbild über alle Kanäle — professionell und wiedererkennbar.",
      },
      {
        title: "Mehr Vertrauen",
        description:
          "Eine durchdachte Online-Präsenz signalisiert: Dieses Unternehmen meint es ernst.",
      },
      {
        title: "Wettbewerbsfähigkeit",
        description:
          "In den meisten Branchen entscheidet die Online-Präsenz, wer den Auftrag bekommt.",
      },
      {
        title: "Grundlage für Marketing",
        description:
          "Eine starke Basis macht jede weitere Marketing-Maßnahme effektiver.",
      },
    ],
    process: [
      "Audit deiner aktuellen Online-Präsenz",
      "Strategie für alle relevanten Kanäle",
      "Umsetzung & Optimierung",
      "Laufende Betreuung & Anpassung",
    ],
    ctaTitle: "Deine digitale Präsenz auf Profi-Niveau?",
    ctaText:
      "Im 60-Sekunden-Check zeigen wir dir, wo du stehst und was als Nächstes Sinn macht.",
  },
]

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug)
}

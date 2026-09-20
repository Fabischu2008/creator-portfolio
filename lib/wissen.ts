export interface WissenSection {
  heading: string
  paragraphs: string[]
}

export interface WissenArticle {
  slug: string
  title: string
  seoTitle: string
  seoDescription: string
  excerpt: string
  serviceSlug?: string
  related: string[]
  updated: string
  sections: WissenSection[]
}

export const wissenArticles: WissenArticle[] = [
  {
    slug: "landingpage",
    title: "Was ist eine Landingpage?",
    seoTitle: "Landingpage: Bedeutung, Aufbau und wann sie sich lohnt",
    seoDescription:
      "Eine Landingpage hat ein Ziel: die Anfrage. So unterscheidet sie sich von der Website, was drauf muss und wann sie sich für dein Business rechnet.",
    excerpt:
      "Eine Landingpage ist eine einzelne Seite mit einem klaren Ziel — meist eine Anfrage, ein Termin oder ein Kauf.",
    serviceSlug: "websites-landingpages",
    related: ["conversion-rate", "call-to-action", "google-ads"],
    updated: "2026-09-20",
    sections: [
      {
        heading: "Kurz erklärt",
        paragraphs: [
          "Eine Landingpage ist die Seite, auf der jemand nach einem Klick „landet“ — aus einer Anzeige, einer Mail oder einem Social-Post. Sie erzählt nicht die ganze Firmengeschichte. Sie beantwortet eine Frage und führt zu einer Handlung.",
          "Genau darin unterscheidet sie sich von einer klassischen Website: Die Website darf mehrere Wege anbieten. Die Landingpage darf das nicht. Ein Angebot, ein Versprechen, ein Button.",
        ],
      },
      {
        heading: "Was darauf muss",
        paragraphs: [
          "Oben steht, für wen das Angebot ist und welches Ergebnis es bringt. Darunter Vertrauen: Zahlen, ein kurzes Beispiel, ein Gesicht. Und immer in Reichweite der nächste Schritt — Anruf, Formular oder WhatsApp.",
          "Was fehlt, ist genauso wichtig. Kein Menü mit acht Punkten, kein Blog-Teaser, kein „Schau dich ruhig um“. Jeder Extra-Link ist eine Ausrede, nicht zu schreiben.",
        ],
      },
      {
        heading: "Wann sie sich lohnt",
        paragraphs: [
          "Immer dann, wenn du Geld für Klicks ausgibst: Google Ads, Meta Ads, eine Kampagne. Die Anzeige verspricht etwas Konkretes — die Landingpage muss genau dieses Versprechen halten. Landet der Klick auf der Startseite, zahlst du für Besucher, die sich verlaufen.",
          "Auch ohne Ads lohnt sie sich, wenn du ein einzelnes Angebot pushst: ein Erstgespräch, ein Audit, ein saisonales Paket. Die restliche Website bleibt. Die Kampagne bekommt ihre eigene Seite.",
        ],
      },
    ],
  },
  {
    slug: "conversion-rate",
    title: "Was bedeutet Conversion Rate?",
    seoTitle: "Conversion Rate einfach erklärt",
    seoDescription:
      "Die Conversion Rate zeigt, wie viele Besucher zur Anfrage werden. So liest du die Zahl, was eine gute Quote ist und wie du sie verbesserst.",
    excerpt:
      "Die Conversion Rate ist der Anteil der Besucher, die das tun, was du willst: anfragen, kaufen, anrufen.",
    serviceSlug: "kundengewinnung",
    related: ["landingpage", "call-to-action", "google-ads"],
    updated: "2026-09-20",
    sections: [
      {
        heading: "Die Zahl hinter der Zahl",
        paragraphs: [
          "Conversion Rate heißt: von 100 Besuchern, wie viele werden zu einer Anfrage? 100 Besucher und 3 Formulare ergeben 3 Prozent. Klingt klein, entscheidet aber über den Monat.",
          "Wichtig ist, was du als Conversion zählst. Für die meisten Dienstleister ist das eine qualifizierte Anfrage — nicht jeder Klick auf „Mehr erfahren“. Sonst schöne Quote, leeres Postfach.",
        ],
      },
      {
        heading: "Was gut ist",
        paragraphs: [
          "Es gibt keine Universalszahl. Eine lokale Handwerksseite mit klarem Angebot liegt oft über einer allgemeinen Agentur-Startseite. Eine Landingpage hinter einer engen Anzeige höher als eine Website, die alles gleichzeitig will.",
          "Vergleiche dich deshalb mit dir selbst: dieselbe Seite, gleicher Zeitraum, eine Änderung. Wenn die Quote steigt, hat die Änderung etwas gebracht. Wenn nicht, war es Geschmack.",
        ],
      },
      {
        heading: "Wie sie steigt",
        paragraphs: [
          "Meist liegt es nicht am Design, sondern an der Unklarheit. Der Besucher versteht nicht, was er bekommt, für wen es ist oder was als Nächstes passiert. Ein Satz oben, der das klärt, holt oft mehr als ein neues Farbschema.",
          "Danach: weniger Ablenkung, ein sichtbarer CTA, schnelle Ladezeit auf dem Handy. Und Traffic, der zum Angebot passt. Eine hohe Absprungrate aus der falschen Anzeige rettest du nicht mit einem schöneren Button.",
        ],
      },
    ],
  },
  {
    slug: "google-ads",
    title: "Google Ads — kurz erklärt",
    seoTitle: "Google Ads einfach erklärt: so funktionieren Suchanzeigen",
    seoDescription:
      "Google Ads zeigt deine Anzeige, wenn jemand sucht. So funktionieren Gebote, Qualität und warum die Zielseite entscheidet, ob der Klick sich lohnt.",
    excerpt:
      "Google Ads ist bezahlte Sichtbarkeit in der Suche: du zahlst, wenn jemand auf deine Anzeige klickt — nicht für das bloße Erscheinen.",
    serviceSlug: "meta-google-ads",
    related: ["landingpage", "conversion-rate", "seo"],
    updated: "2026-09-20",
    sections: [
      {
        heading: "Was du kaufst",
        paragraphs: [
          "Jemand sucht „Website erstellen lassen“ oder „Google Ads Agentur“. Google zeigt Anzeigen darüber und organische Treffer darunter. Klickt jemand deine Anzeige, zahlst du. Scrollt er vorbei, kostet dich das nichts.",
          "Du bietest auf Suchbegriffe, nicht auf ein Gefühl. Deshalb ist Google Ads so direkt: die Absicht steht schon in der Suchzeile. Wer sucht, will oft jetzt eine Lösung — nicht in drei Monaten.",
        ],
      },
      {
        heading: "Warum der Klickpreis nicht alles ist",
        paragraphs: [
          "Google bewertet nicht nur, wer mehr bietet. Anzeigentext, erwartete Klickrate und die Zielseite fließen in den Qualitätsfaktor. Eine klare Anzeige auf eine passende Landingpage kann günstiger sein als eine teure, unscharfe.",
          "Deshalb scheitern viele Konten nicht am Budget, sondern an der Lücke zwischen Anzeige und Seite. Versprichst du ein Erstgespräch und landest auf einer allgemeinen Startseite, wird jeder Klick teurer — und seltener zur Anfrage.",
        ],
      },
      {
        heading: "Wann es sich lohnt",
        paragraphs: [
          "Wenn eine Anfrage mehr wert ist als ein paar Klicks. Für Dienstleistungen mit klarem Angebot oft ja. Für unklare Angebote eher nein — dann verbrennst du Budget, bevor die Seite verkauft.",
          "Google Ads ersetzt SEO nicht. Ads bringen Sichtbarkeit ab Tag eins. SEO braucht länger, kostet aber nicht pro Klick. Beides zusammen ist der Normalfall, nicht entweder oder.",
        ],
      },
    ],
  },
  {
    slug: "meta-ads",
    title: "Was sind Meta Ads?",
    seoTitle: "Meta Ads erklärt: Facebook- und Instagram-Werbung",
    seoDescription:
      "Meta Ads sind Anzeigen auf Facebook und Instagram. Wann sie Sinn machen, worin sie sich von Google Ads unterscheiden und worauf es bei der Zielseite ankommt.",
    excerpt:
      "Meta Ads sind bezahlte Beiträge auf Facebook und Instagram — du unterbrichst den Feed, statt auf eine Suche zu antworten.",
    serviceSlug: "meta-google-ads",
    related: ["google-ads", "landingpage", "social-media-betreuung"],
    updated: "2026-09-20",
    sections: [
      {
        heading: "Der Unterschied zur Suche",
        paragraphs: [
          "Bei Google sucht jemand aktiv. Bei Meta scrollt jemand. Deine Anzeige muss erst Interesse wecken, das vorher nicht da war. Deshalb wirken hier Bild, erster Satz und Angebot härter als ein Keyword.",
          "Das ist kein Nachteil — es ist eher eine andere Tür. Gut, wenn dein Angebot erklärbar ist und ein klares Bild hat. Schlecht, wenn du nur „irgendwen in der Region“ ansprichst, ohne zu sagen, was er davon hat.",
        ],
      },
      {
        heading: "Was die Anzeige tragen muss",
        paragraphs: [
          "Ein Satz, den man im Vorbeiscrollen versteht. Ein Bild oder Video ohne Rätsel. Ein Ziel, das auf dem Handy in unter einer Minute erreichbar ist. Lange Erklärseiten hinter einem 6-Sekunden-Clip verlieren den Klick wieder.",
          "Auch hier gilt: die Zielseite muss dasselbe versprechen wie die Anzeige. Wer auf „kostenloses Erstgespräch“ klickt und ein Kontaktformular mit acht Pflichtfeldern findet, geht.",
        ],
      },
      {
        heading: "Google oder Meta?",
        paragraphs: [
          "Wer schon sucht, gehört zu Google. Wer dein Thema noch nicht sucht, eher zu Meta. Viele Projekte brauchen beides: Nachfrage abgreifen und Nachfrage erzeugen.",
          "Entscheiden solltest du das nicht nach Bauchgefühl, sondern nach Angebot und Preis. Ein teures B2B-Projekt mit klarem Suchvolumen startet oft bei Google. Ein visuelles Angebot mit breiter Zielgruppe oft bei Meta.",
        ],
      },
    ],
  },
  {
    slug: "seo",
    title: "Was ist SEO?",
    seoTitle: "SEO einfach erklärt: so wirst du bei Google gefunden",
    seoDescription:
      "SEO heißt, bei Google gefunden zu werden, ohne pro Klick zu zahlen. Was dazugehört, was Mythos ist und warum die Seite selbst der größte Hebel bleibt.",
    excerpt:
      "SEO — Search Engine Optimization — ist die Arbeit, damit Google deine Seite zeigt, wenn jemand nach deiner Leistung sucht.",
    serviceSlug: "seo",
    related: ["google-ads", "landingpage", "conversion-rate"],
    updated: "2026-09-20",
    sections: [
      {
        heading: "Was Google eigentlich will",
        paragraphs: [
          "Google will die Seite zeigen, die die Suche am besten beantwortet. SEO ist deshalb keine Trickserei. Es ist die Entscheidung, eine klare Seite für eine echte Frage zu bauen — und sie technisch so auszuliefern, dass Google sie lesen kann.",
          "Dazu gehören drei Dinge: die Seite muss zum Suchbegriff passen, sie muss schnell und auf dem Handy nutzbar sein, und andere relevante Seiten dürfen auf sie zeigen. Fehlt eines, hilft das nächste Keyword-Tool wenig.",
        ],
      },
      {
        heading: "Was oft überschätzt wird",
        paragraphs: [
          "Keyword-Dichte, geheime Plugins, täglich ein neuer Text ohne Substanz. Google erkennt leere Wiederholungen. Eine Seite, die dasselbe in anderen Worten sagt, rankt nicht besser — sie verdünnt das Angebot.",
          "Auch „wir sind überall lokal“ ohne echte Leistung vor Ort hilft selten. Sichtbarkeit kommt von Nutzen und Klarheit, nicht von einer Stadt in jedem zweiten Satz.",
        ],
      },
      {
        heading: "SEO und Ads",
        paragraphs: [
          "SEO braucht Zeit. Die ersten Wochen siehst du oft wenig, dafür zahlst du später nicht pro Klick. Ads sind der schnelle Weg, während die organische Seite wächst.",
          "Sinnvoll ist, dieselben Begriffe nicht doppelt zu verwässern: die Leistungsseite zielt auf die kaufnahe Suche, ein kurzer Erklärungstext wie dieser fängt die Frage davor ab und schickt weiter zur Leistung.",
        ],
      },
    ],
  },
  {
    slug: "call-to-action",
    title: "Was ist ein Call-to-Action?",
    seoTitle: "Call-to-Action (CTA): so formulierst du den nächsten Schritt",
    seoDescription:
      "Ein Call-to-Action sagt dem Besucher, was als Nächstes kommt. Warum „Mehr erfahren“ selten reicht und wie ein CTA Anfragen auslöst.",
    excerpt:
      "Ein Call-to-Action — kurz CTA — ist die klare Aufforderung auf der Seite: schreib, ruf an, starte den Check.",
    serviceSlug: "websites-landingpages",
    related: ["landingpage", "conversion-rate", "website-erstellen-lassen"],
    updated: "2026-09-20",
    sections: [
      {
        heading: "Mehr als ein Button",
        paragraphs: [
          "Der CTA ist nicht die Farbe des Buttons. Es ist der Satz, der die Entscheidung abschließt. „Absenden“ sagt nichts. „60-Sek-Check starten“ sagt, was passiert und wie lange es dauert.",
          "Menschen klicken, wenn das Risiko klein wirkt und der Nutzen klar ist. Deshalb stehen daneben oft ein zweiter und dritter Weg — WhatsApp, Mail — statt nur ein Formular, das sich anfühlt wie eine Bewerbung.",
        ],
      },
      {
        heading: "Wo er hingehört",
        paragraphs: [
          "Oben, sobald das Angebot klar ist. Nochmal nach dem Beleg, dass du das kannst. Und am Ende der Seite, wenn jemand erst alles gelesen hat. Ein einziger CTA ganz unten reicht selten — auf dem Handy sieht man das Ende erst nach dem Scrollen.",
          "Was du vermeidest: fünf verschiedene Ziele auf einer Fläche. Newsletter, PDF, Anruf, Shop, Blog. Eine Seite, ein nächster Schritt. Alles andere ist Höflichkeit gegenüber deiner Unentschlossenheit.",
        ],
      },
    ],
  },
  {
    slug: "website-erstellen-lassen",
    title: "Website erstellen lassen — worauf es ankommt",
    seoTitle: "Website erstellen lassen: was du brauchen und was nicht",
    seoDescription:
      "Eine Website soll Anfragen bringen, nicht nur gut aussehen. Welche Seiten du brauchst, was du weglassen kannst und wie du den Anbieter auswählst.",
    excerpt:
      "Eine Website erstellen zu lassen heißt: jemand übersetzt dein Angebot in eine Seite, die Besucher zur Anfrage führt.",
    serviceSlug: "websites-landingpages",
    related: ["landingpage", "seo", "call-to-action"],
    updated: "2026-09-20",
    sections: [
      {
        heading: "Nicht die Seitenanzahl entscheidet",
        paragraphs: [
          "Die meisten Unternehmen brauchen weniger Seiten, als sie denken: Start, Leistungen, ein paar Belege, Kontakt, Impressum. Was fehlt, ist oft die Klarheit auf der Startseite — nicht noch eine Unterseite „Vision“.",
          "Besser eine schnelle, verständliche Seite als ein Baukasten mit zwölf Templates, den niemand pflegt. Pflege, die nicht passiert, sieht man. Und sie kostet Vertrauen.",
        ],
      },
      {
        heading: "Wonach du den Anbieter fragst",
        paragraphs: [
          "Nicht nur nach dem Look. Frag, welches Ziel die Startseite hat, wie die Seite auf dem Handy läuft, wohin die Buttons führen und wie du später Texte änderst. Wer nur Moodboards zeigt, baut eine Broschüre.",
          "Ein gutes Angebot sagt dir vorher, was du selbst zuliefern musst: Texte, Fotos, Zugänge. Überraschungen nach dem Kick-off sind teurer als ein ehrliches Briefing.",
        ],
      },
      {
        heading: "Website und Marketing",
        paragraphs: [
          "Die schönste Seite ohne Besucher bleibt leer. Ads und SEO ohne eine Seite, die abschließt, verbrennen Budget. Deshalb gehören beides zusammen: erst die Seite, die verkauft — dann der Traffic darauf.",
          "Wenn du unsicher bist, was du brauchst, reicht ein kurzer Check. Vier Fragen sagen oft mehr als ein 20-seitiges Konzept, das niemand liest.",
        ],
      },
    ],
  },
  {
    slug: "social-media-betreuung",
    title: "Was heißt Social-Media-Betreuung?",
    seoTitle: "Social-Media-Betreuung: was dazugehört und was nicht",
    seoDescription:
      "Social-Media-Betreuung ist mehr als Posten. Welche Aufgaben dazugehören, wann sie sich lohnt und warum Reichweite allein selten Anfragen bringt.",
    excerpt:
      "Social-Media-Betreuung heißt: jemand plant, erstellt und verantwortet deinen Auftritt auf den Kanälen, auf denen deine Kunden unterwegs sind.",
    serviceSlug: "social-media",
    related: ["meta-ads", "call-to-action", "conversion-rate"],
    updated: "2026-09-20",
    sections: [
      {
        heading: "Mehr als der Feed",
        paragraphs: [
          "Betreuung ist nicht „drei Posts die Woche“. Dazu gehören die Stimme, mit der du sprichst, die Themen, die zum Angebot passen, Antworten auf Nachrichten und die Entscheidung, was du weglässt.",
          "Ein Kanal ohne Ziel wird zur Pflicht. Ein Kanal mit Ziel — Anfragen, Termin, Wiedererkennung — lässt sich steuern. Dann ist ein Beitrag entweder Beweis, Einladung oder Erklärung. Nicht Stimmung.",
        ],
      },
      {
        heading: "Wann es sich rechnet",
        paragraphs: [
          "Wenn deine Kunden dort entscheiden oder dich dort das erste Mal sehen. Für viele lokale und visuelle Angebote ist Instagram oder Facebook genau dieser Ort. Für ein reines B2B-Thema mit langer Recherche eher seltener der Haupthebel.",
          "Ohne eine Seite, auf der die Anfrage landet, bleibt Betreuung Dekoration. Der Beitrag darf schön sein. Der Link danach muss arbeiten.",
        ],
      },
    ],
  },
]

export function getWissenBySlug(slug: string) {
  return wissenArticles.find((article) => article.slug === slug)
}

export function getRelatedArticles(article: WissenArticle) {
  return article.related
    .map((slug) => getWissenBySlug(slug))
    .filter((item): item is WissenArticle => Boolean(item))
}

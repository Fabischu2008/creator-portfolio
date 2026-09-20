import Image from "next/image"
import { SectionLabel } from "@/components/section-label"
import { Reveal } from "@/components/reveal"
import { MediaCarousel } from "@/components/media-carousel"
import { DeviceMockup, type Screenshot } from "@/components/device-mockup"

interface AdResult {
  src: string
  alt: string
  title: string
  period: string
  stats: { label: string; value: string }[]
}

const adResults: AdResult[] = [
  {
    src: "/ergebnisse/google-ads-conversions.png",
    alt: "Google Ads Konto mit 56.434 Impressionen, 5.154 Klicks und 909 Conversions",
    title: "909 Conversions aus einem Kampagnen-Zeitraum",
    period: "Dez. 2025 – Sept. 2026",
    stats: [
      { label: "Budget", value: "4.455 €" },
      { label: "Impressionen", value: "56.434" },
      { label: "Klicks", value: "5.154" },
      { label: "Conversions", value: "909" },
    ],
  },
  {
    src: "/ergebnisse/google-ads-klickrate.png",
    alt: "Google Ads Konto mit 9,13 % Klickrate und 0,86 € durchschnittlichem Klickpreis",
    title: "9,13 % Klickrate bei 0,86 € pro Klick",
    period: "Jan. 2026 – Sept. 2026",
    stats: [
      { label: "Budget", value: "4.455 €" },
      { label: "Ø Klickpreis", value: "0,86 €" },
      { label: "Klickrate", value: "9,13 %" },
      { label: "Klicks", value: "5.154" },
    ],
  },
  {
    src: "/ergebnisse/google-ads-zwei-monate.png",
    alt: "Google Ads Konto mit 19.961 Impressionen, 1.118 Klicks und 42 Conversions",
    title: "42 Conversions in zwei Monaten",
    period: "Juli 2026 – Sept. 2026",
    stats: [
      { label: "Budget", value: "2.205 €" },
      { label: "Impressionen", value: "19.961" },
      { label: "Klicks", value: "1.118" },
      { label: "Conversions", value: "42" },
    ],
  },
]

interface Project {
  desktop: Screenshot
  mobile: Screenshot
  alt: string
  title: string
  description: string
}

const projects: Project[] = [
  {
    desktop: { src: "/projekte/kallenbach-desktop.png", width: 1024, height: 577 },
    mobile: { src: "/projekte/kallenbach-mobile.png", width: 572, height: 1024 },
    alt: "Website von Daniel Kallenbach auf Desktop und Smartphone",
    title: "Daniel Kallenbach",
    description:
      "Coaching-Website mit klarer Nutzerführung zum kostenlosen Erstgespräch — auf jedem Gerät.",
  },
  {
    desktop: { src: "/projekte/xcoin-desktop.png", width: 1024, height: 577 },
    mobile: { src: "/projekte/xcoin-mobile.png", width: 595, height: 1024 },
    alt: "Website von Xcoin auf Desktop und Smartphone",
    title: "Xcoin",
    description:
      "Landingpage für eine Privacy-Kryptowährung — komplexe Technik verständlich aufbereitet, mit klarem Weg zum Token.",
  },
  {
    desktop: { src: "/projekte/master-defense-desktop.png", width: 1024, height: 603 },
    mobile: { src: "/projekte/master-defense-mobile.png", width: 557, height: 1024 },
    alt: "Website von Master Defense Kaiserslautern auf Desktop und Smartphone",
    title: "Master Defense Kaiserslautern",
    description:
      "Website für Selbstverteidigung und Deeskalation — getrennte Wege für Unternehmen und Privatpersonen, beide führen zum Erstgespräch.",
  },
]

export function Proof() {
  const adSlides = adResults.map((result) => (
    <figure
      key={result.src}
      className="rounded-xl border border-border bg-background/70 backdrop-blur-md overflow-hidden shadow-sm"
    >
      <Image
        src={result.src}
        alt={result.alt}
        width={1024}
        height={358}
        className="w-full h-auto border-b border-border"
        sizes="(max-width: 1024px) 100vw, 1024px"
      />
      <figcaption className="p-5 sm:p-6 space-y-4">
        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
          <h4 className="font-semibold text-lg">{result.title}</h4>
          <span className="text-sm text-muted-foreground">{result.period}</span>
        </div>
        <dl className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {result.stats.map((stat) => (
            <div key={stat.label}>
              <dt className="text-xs uppercase tracking-wider text-muted-foreground">
                {stat.label}
              </dt>
              <dd className="text-xl font-bold mt-0.5">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </figcaption>
    </figure>
  ))

  const projectSlides = projects.map((project) => (
    <figure key={project.desktop.src} className="px-1">
      <DeviceMockup desktop={project.desktop} mobile={project.mobile} alt={project.alt} />
      <figcaption className="mt-5">
        <h4 className="font-semibold text-lg">{project.title}</h4>
        <p className="text-muted-foreground mt-1">{project.description}</p>
      </figcaption>
    </figure>
  ))

  return (
    <section id="ergebnisse" className="py-24 px-4 sm:px-6 lg:px-8 border-y border-border/60">
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <div className="space-y-4 max-w-3xl mb-14">
            <SectionLabel>Ergebnisse</SectionLabel>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-balance">
              Zahlen statt Versprechen.
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Echte Auswertungen aus Google Ads Konten und Websites, die ich gebaut habe — direkt
              aus dem Dashboard, ohne Schönrechnen.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="space-y-6">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Google Ads
            </h3>
            <MediaCarousel slides={adSlides} ariaLabel="Google Ads Ergebnisse" />
          </div>
        </Reveal>

        <Reveal>
          <div className="mt-20 space-y-6">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Website-Projekte
            </h3>
            <MediaCarousel slides={projectSlides} ariaLabel="Website-Projekte" />
          </div>
        </Reveal>
      </div>
    </section>
  )
}

import { SectionLabel } from "@/components/section-label"
import { Reveal } from "@/components/reveal"

const stats = [
  { value: "10+", label: "Jahre Erfahrung im Web" },
  { value: "100%", label: "Persönliche Betreuung" },
  { value: "360°", label: "Von Website bis Marketing" },
]

export function About() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <Reveal>
            <div className="space-y-4 lg:sticky lg:top-32">
              <SectionLabel>Über mich</SectionLabel>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-balance">
                Fabian Schuck.
                <br />
                <span className="text-muted-foreground">28, Digital Media Marketing.</span>
              </h2>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Mit 18 habe ich angefangen, Websites zu bauen. Nebenbei kleine Spiele programmiert,
                Design gelernt, alles ausprobiert, was mit dem Web zu tun hatte.
              </p>
              <p>
                Mit 25 kam das Studium in{" "}
                <span className="text-foreground font-medium">Digital Media Marketing</span> dazu. Seitdem
                verbinde ich beides: die technische Seite, die eine Website schnell und sauber macht — und
                die Marketing-Seite, die dafür sorgt, dass sie auch Kunden bringt.
              </p>
              <p>
                Heute arbeite ich mit Unternehmen, die online wachsen wollen. Websites, Landingpages, Meta
                Ads, Social Media, SEO.{" "}
                <span className="text-foreground font-medium">
                  Jedes Projekt betreue ich persönlich
                </span>{" "}
                — von der ersten Idee bis zu den Zahlen danach.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="mt-20 grid sm:grid-cols-3 gap-8 pt-12 border-t border-border">
          {stats.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 80}>
              <p className="text-4xl md:text-5xl font-bold tracking-tight">{stat.value}</p>
              <p className="mt-2 text-muted-foreground">{stat.label}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

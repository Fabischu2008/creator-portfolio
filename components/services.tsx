import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { SectionLabel } from "@/components/section-label"
import { Reveal } from "@/components/reveal"
import { services } from "@/lib/services"

export function Services() {
  return (
    <section id="leistungen" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="space-y-4 max-w-3xl mb-16">
            <SectionLabel>Leistungen</SectionLabel>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-balance">
              Alles, was dein Business online braucht.
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Kein Baukasten. Keine Agentur-Floskeln. Klick dich in die einzelnen Leistungen und sieh
              genau, was du bekommst.
            </p>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, index) => (
            <Reveal key={service.slug} delay={index * 60}>
              <Link
                href={`/leistungen/${service.slug}`}
                className="group block h-full rounded-xl border border-border bg-background/60 backdrop-blur-sm p-6 transition-all duration-300 hover:border-foreground hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary transition-colors group-hover:bg-foreground group-hover:text-background">
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-xl font-semibold">{service.title}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  {service.shortDescription}
                </p>
                <span className="mt-5 inline-flex items-center text-sm font-medium">
                  Mehr erfahren
                  <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

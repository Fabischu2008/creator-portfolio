import Link from "next/link"
import { ArrowLeft, ArrowRight, Check } from "lucide-react"
import type { Service } from "@/lib/services"
import { SectionLabel } from "@/components/section-label"
import { ServiceCta } from "@/components/service-cta"
import { Reveal } from "@/components/reveal"
import { services } from "@/lib/services"

interface ServicePageContentProps {
  service: Service
}

export function ServicePageContent({ service }: ServicePageContentProps) {
  const Icon = service.icon
  const otherServices = services.filter((s) => s.slug !== service.slug).slice(0, 3)

  return (
    <>
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/#leistungen"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors mb-10"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Alle Leistungen
          </Link>

          <div className="space-y-6">
            <div className="h-14 w-14 rounded-lg bg-foreground text-background flex items-center justify-center">
              <Icon className="h-7 w-7" />
            </div>
            <SectionLabel>Leistung</SectionLabel>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance">
              {service.title}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground text-balance">
              {service.heroSubtitle}
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">{service.intro}</p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 border-y border-border/60">
        <Reveal>
          <div className="max-w-3xl mx-auto space-y-6">
            <SectionLabel>Dein Vorteil</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-balance">
              {service.whyTitle}
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              {service.whyText}
            </p>
          </div>
        </Reveal>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <div className="space-y-4 mb-12">
              <SectionLabel>Was du bekommst</SectionLabel>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Konkrete Ergebnisse für dein Business
              </h2>
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 gap-4">
            {service.benefits.map((benefit, index) => (
              <Reveal key={benefit.title} delay={index * 70}>
                <div className="h-full rounded-xl border border-border bg-background/60 backdrop-blur-sm p-6 space-y-3">
                  <div className="h-8 w-8 rounded-full bg-foreground text-background flex items-center justify-center">
                    <Check className="h-4 w-4" />
                  </div>
                  <h3 className="text-lg font-semibold">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 border-y border-border/60">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <div className="space-y-4 mb-12">
              <SectionLabel>Ablauf</SectionLabel>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                So arbeiten wir zusammen
              </h2>
            </div>
          </Reveal>

          <div className="space-y-3">
            {service.process.map((step, index) => (
              <Reveal key={step} delay={index * 70}>
                <div className="flex gap-4 items-start p-5 rounded-xl border border-border bg-background/60 backdrop-blur-sm">
                  <span className="flex-shrink-0 h-8 w-8 rounded-full bg-foreground text-background flex items-center justify-center text-sm font-semibold">
                    {index + 1}
                  </span>
                  <p className="leading-relaxed pt-1">{step}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ServiceCta
        title={service.ctaTitle}
        text={service.ctaText}
        serviceTitle={service.title}
      />

      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-border/60">
        <div className="max-w-4xl mx-auto">
          <SectionLabel>Weitere Leistungen</SectionLabel>
          <div className="mt-6 grid sm:grid-cols-3 gap-4">
            {otherServices.map((other) => (
              <Link
                key={other.slug}
                href={`/leistungen/${other.slug}`}
                className="group rounded-xl border border-border bg-background/60 backdrop-blur-sm p-5 transition-all hover:border-foreground hover:-translate-y-1"
              >
                <other.icon className="h-5 w-5" />
                <h3 className="mt-3 font-semibold">{other.title}</h3>
                <span className="mt-2 inline-flex items-center text-sm text-muted-foreground">
                  Ansehen
                  <ArrowRight className="ml-1 h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

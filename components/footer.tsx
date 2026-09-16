import Link from "next/link"
import { Linkedin, Mail, MessageCircle } from "lucide-react"
import { services } from "@/lib/services"
import { CONTACT_EMAIL, DEFAULT_WHATSAPP_MESSAGE, whatsappUrl } from "@/lib/contact"

const NAV_ITEMS = [
  { id: "about", label: "Über mich" },
  { id: "ergebnisse", label: "Ergebnisse" },
  { id: "fragebogen", label: "60-Sek-Check" },
  { id: "faq", label: "FAQ" },
  { id: "contact", label: "Kontakt" },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-background/60 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Schuck Digital</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Websites, Landingpages & Digital Marketing — conversion-optimiert und persönlich betreut.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider">Leistungen</h3>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/leistungen/${service.slug}`}
                    className="hover:text-foreground transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider">Navigation</h3>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <Link href={`/#${item.id}`} className="hover:text-foreground transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider">Kontakt</h3>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li>
                <Link href="/#fragebogen" className="hover:text-foreground transition-colors">
                  60-Sek-Check starten
                </Link>
              </li>
              <li>
                <a
                  href={whatsappUrl(DEFAULT_WHATSAPP_MESSAGE)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors"
                >
                  Per WhatsApp schreiben
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="hover:text-foreground transition-colors break-all"
                >
                  {CONTACT_EMAIL}
                </a>
              </li>
            </ul>
            <div className="flex gap-3 pt-1">
              <a
                href="https://www.linkedin.com/in/fabian-schuck-20a56122b/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-secondary hover:bg-foreground hover:text-background transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href={whatsappUrl(DEFAULT_WHATSAPP_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-secondary hover:bg-foreground hover:text-background transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="p-2 rounded-lg bg-secondary hover:bg-foreground hover:text-background transition-colors"
                aria-label="E-Mail"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground text-center">
            © {currentYear} Schuck Digital. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  )
}

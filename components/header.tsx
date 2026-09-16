"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react"
import { services } from "@/lib/services"

const NAV_ITEMS = [
  { id: "about", label: "Über mich" },
  { id: "ergebnisse", label: "Ergebnisse" },
  { id: "faq", label: "FAQ" },
  { id: "contact", label: "Kontakt" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const pathname = usePathname()
  const isHome = pathname === "/"

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsServicesOpen(false)
    }
    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [])

  const navigate = (id: string) => {
    setIsMobileMenuOpen(false)
    setIsServicesOpen(false)
    if (isHome) {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
    } else {
      window.location.href = `/#${id}`
    }
  }

  const openServices = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setIsServicesOpen(true)
  }

  const scheduleCloseServices = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    closeTimer.current = setTimeout(() => setIsServicesOpen(false), 140)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-xl border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link
            href="/"
            className="text-lg md:text-xl font-semibold tracking-tight hover:opacity-70 transition-opacity"
          >
            Schuck Digital
          </Link>

          <nav className="hidden md:flex items-center gap-7 lg:gap-8">
            <div
              className="relative"
              onMouseEnter={openServices}
              onMouseLeave={scheduleCloseServices}
            >
              <button
                onClick={() => setIsServicesOpen((open) => !open)}
                aria-expanded={isServicesOpen}
                aria-haspopup="true"
                className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors py-2 border-b-2 border-transparent hover:border-foreground"
              >
                Leistungen
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-200 ${
                    isServicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isServicesOpen && (
                <div className="absolute left-0 top-full pt-3 w-[min(90vw,42rem)]">
                  <div className="rounded-xl border border-border bg-background/95 backdrop-blur-xl shadow-lg p-2">
                    <div className="grid grid-cols-2 gap-1">
                      {services.map((service) => (
                        <Link
                          key={service.slug}
                          href={`/leistungen/${service.slug}`}
                          onClick={() => setIsServicesOpen(false)}
                          className="group flex gap-3 items-start rounded-lg p-3 hover:bg-secondary transition-colors"
                        >
                          <span className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-md bg-secondary group-hover:bg-foreground group-hover:text-background transition-colors">
                            <service.icon className="h-4 w-4" />
                          </span>
                          <span className="min-w-0">
                            <span className="flex items-center gap-1 text-sm font-medium">
                              {service.title}
                              <ArrowRight className="h-3.5 w-3.5 opacity-0 -translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
                            </span>
                            <span className="mt-0.5 block text-xs text-muted-foreground leading-relaxed">
                              {service.shortDescription}
                            </span>
                          </span>
                        </Link>
                      ))}
                    </div>
                    <button
                      onClick={() => navigate("leistungen")}
                      className="mt-1 flex w-full items-center justify-between rounded-lg border-t border-border px-3 py-3 text-sm font-medium hover:bg-secondary transition-colors"
                    >
                      Alle Leistungen im Überblick
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              )}
            </div>

            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => navigate(item.id)}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors py-2 border-b-2 border-transparent hover:border-foreground"
              >
                {item.label}
              </button>
            ))}

            <Button size="lg" className="font-semibold group" onClick={() => navigate("fragebogen")}>
              60-Sek-Check
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </nav>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2"
            aria-label={isMobileMenuOpen ? "Menü schließen" : "Menü öffnen"}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <>
            <div
              className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <nav className="md:hidden absolute top-full left-0 right-0 max-h-[80vh] overflow-y-auto bg-background/95 backdrop-blur-xl border-t border-border shadow-lg z-50">
              <div className="px-4 py-6 space-y-1 relative">
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="absolute top-4 right-4 p-2 rounded-lg hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground"
                  aria-label="Menü schließen"
                >
                  <X className="h-5 w-5" />
                </button>

                <p className="px-4 pt-2 pb-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  Leistungen
                </p>
                {services.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/leistungen/${service.slug}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 rounded-lg text-base font-medium hover:bg-secondary transition-colors"
                  >
                    <service.icon className="h-4 w-4 flex-shrink-0" />
                    {service.title}
                  </Link>
                ))}

                <div className="pt-3 mt-2 border-t border-border">
                  {NAV_ITEMS.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => navigate(item.id)}
                      className="block w-full text-left px-4 py-3 rounded-lg text-base font-medium hover:bg-secondary transition-colors"
                    >
                      {item.label}
                    </button>
                  ))}
                </div>

                <div className="pt-3 mt-2 border-t border-border">
                  <Button className="w-full group" size="lg" onClick={() => navigate("fragebogen")}>
                    60-Sek-Check starten
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>
            </nav>
          </>
        )}
      </div>
    </header>
  )
}

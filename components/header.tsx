"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const isOnKalkulatorPage = pathname === "/kalkulator"

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    if (isOnKalkulatorPage) {
      // Wenn wir auf der Kalkulator-Seite sind, zur Hauptseite navigieren
      window.location.href = `/#${id}`
      setIsMobileMenuOpen(false)
      return
    }
    
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMobileMenuOpen(false)
    }
  }

  const handleLogoClick = () => {
    if (isOnKalkulatorPage) {
      window.location.href = "/"
    } else {
      scrollToSection("hero")
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-lg border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <button
            onClick={handleLogoClick}
            className="text-lg md:text-xl font-semibold text-foreground hover:text-accent transition-colors"
          >
            Portfolio
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Über mich
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Projekte
            </button>
            <a
              href="/kalkulator"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Kostenrechner
            </a>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Kontakt
            </button>
            <a href="/kalkulator">
              <Button size="lg" className="font-semibold">
                Kostenrechner starten
              </Button>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden p-2">
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden py-4 space-y-4 border-t border-border">
            <button
              onClick={() => scrollToSection("about")}
              className="block w-full text-left py-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              Über mich
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="block w-full text-left py-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="block w-full text-left py-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              Projekte
            </button>
            <a
              href="/kalkulator"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full text-left py-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              Kostenrechner
            </a>
            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left py-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              Kontakt
            </button>
            <a href="/kalkulator" onClick={() => setIsMobileMenuOpen(false)}>
              <Button className="w-full" size="lg">
                Kostenrechner starten
              </Button>
            </a>
          </nav>
        )}
      </div>
    </header>
  )
}

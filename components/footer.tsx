"use client"

import { Github, Linkedin, Mail, Twitter } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-secondary/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Portfolio</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              UX/UI Design & Softwareentwicklung für moderne digitale Erlebnisse.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Navigation</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById("about")
                    if (element) element.scrollIntoView({ behavior: "smooth" })
                  }}
                  className="hover:text-foreground transition-colors"
                >
                  Über mich
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById("skills")
                    if (element) element.scrollIntoView({ behavior: "smooth" })
                  }}
                  className="hover:text-foreground transition-colors"
                >
                  Skills
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById("projects")
                    if (element) element.scrollIntoView({ behavior: "smooth" })
                  }}
                  className="hover:text-foreground transition-colors"
                >
                  Projekte
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById("contact")
                    if (element) element.scrollIntoView({ behavior: "smooth" })
                  }}
                  className="hover:text-foreground transition-colors"
                >
                  Kontakt
                </button>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Folge mir</h3>
            <div className="flex gap-3">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-secondary hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-secondary hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-secondary hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="mailto:kontakt@example.com"
                className="p-2 rounded-lg bg-secondary hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground text-center">
            © {currentYear} Portfolio. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  )
}

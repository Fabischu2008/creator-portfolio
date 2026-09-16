"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ArrowRight, Mail, MessageCircle, Send } from "lucide-react"
import { SectionLabel } from "@/components/section-label"
import { Reveal } from "@/components/reveal"
import { CONTACT_EMAIL, DEFAULT_WHATSAPP_MESSAGE, whatsappUrl } from "@/lib/contact"

const bullets = [
  "Eine ehrliche Einschätzung, was dein Auftritt gerade bremst.",
  "Ein konkreter Vorschlag, welcher Kanal für dich Sinn macht.",
  "Ein erster Schritt, den du sofort gehen kannst.",
]

export function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, type: "contact" }),
      })

      const data = await response.json()
      if (!response.ok) throw new Error(data.error || "Ein Fehler ist aufgetreten")

      setIsSubmitted(true)
      setFormData({ name: "", email: "", message: "" })
      setTimeout(() => setIsSubmitted(false), 5000)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Ein Fehler ist aufgetreten")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <Reveal>
            <div className="space-y-6">
              <SectionLabel>Kontakt</SectionLabel>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-balance">
                Lass uns sprechen.
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Wenn du das Gefühl hast, online mehr rausholen zu können — dann ist dieses Gespräch für
                dich.
              </p>

              <ul className="space-y-3 pt-2">
                {bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3 text-muted-foreground">
                    <ArrowRight className="h-5 w-5 flex-shrink-0 mt-0.5 text-foreground" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-4 space-y-4">
                <p className="text-sm text-muted-foreground">
                  Kostenlos & unverbindlich · Antwort innerhalb von 24h
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button variant="outline" asChild>
                    <Link href="/#fragebogen">60-Sek-Check</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <a
                      href={whatsappUrl(DEFAULT_WHATSAPP_MESSAGE)}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="mr-2 h-4 w-4" />
                      WhatsApp
                    </a>
                  </Button>
                </div>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="inline-flex items-center gap-2 text-sm font-medium hover:opacity-70 transition-opacity"
                >
                  <Mail className="h-4 w-4" />
                  {CONTACT_EMAIL}
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="rounded-xl border border-border bg-background/70 backdrop-blur-md p-6 sm:p-8 shadow-sm">
              {isSubmitted && (
                <div className="mb-6 p-4 bg-secondary border border-border rounded-lg">
                  <p className="text-sm">
                    Danke! Deine Nachricht ist angekommen. Ich melde mich in Kürze bei dir.
                  </p>
                </div>
              )}
              {error && (
                <div className="mb-6 p-4 border border-destructive/30 rounded-lg">
                  <p className="text-sm text-destructive">{error}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <Input
                    id="name"
                    placeholder="Dein Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    E-Mail
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="deine@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Worum geht es?
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Erzähl mir kurz von deinem Projekt..."
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <Button type="submit" size="lg" className="w-full group" disabled={isSubmitting}>
                  {isSubmitting ? "Wird gesendet..." : "Nachricht senden"}
                  {!isSubmitting && (
                    <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  )}
                </Button>
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

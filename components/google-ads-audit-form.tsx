"use client"

import type React from "react"
import { useState } from "react"
import { ArrowRight, Mail, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { GOOGLE_ADS_AUDIT_WHATSAPP_MESSAGE, mailtoUrl, whatsappUrl } from "@/lib/contact"

const DEFAULT_MESSAGE = [
  "Google Ads Audit anfragen",
  "",
  "Budget:",
  "Shop-URL:",
  "Was aktuell nicht rund läuft:",
].join("\n")

const MAIL_HREF = mailtoUrl("Google Ads Audit anfragen", DEFAULT_MESSAGE)

export function GoogleAdsAuditForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: DEFAULT_MESSAGE,
  })
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
        body: JSON.stringify({ ...formData, type: "google-ads-audit" }),
      })

      const data = await response.json()
      if (!response.ok) throw new Error(data.error || "Ein Fehler ist aufgetreten")

      setIsSubmitted(true)
      setFormData({ name: "", email: "", message: DEFAULT_MESSAGE })
    } catch (err) {
      setError(err instanceof Error ? err.message : "Ein Fehler ist aufgetreten")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="rounded-xl border border-border bg-background/70 backdrop-blur-md p-6 shadow-sm sm:p-8">
      {isSubmitted && (
        <div className="mb-6 rounded-lg border border-border bg-secondary p-4">
          <p className="text-sm">
            Danke. Deine Anfrage ist da. Ich melde mich innerhalb eines Werktags.
          </p>
        </div>
      )}
      {error && (
        <div className="mb-6 rounded-lg border border-destructive/30 p-4">
          <p className="text-sm text-destructive">{error}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="space-y-2">
          <label htmlFor="audit-name" className="text-sm font-medium">
            Name
          </label>
          <Input
            id="audit-name"
            name="name"
            autoComplete="name"
            placeholder="Dein Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
            disabled={isSubmitting}
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="audit-email" className="text-sm font-medium">
            E-Mail
          </label>
          <Input
            id="audit-email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="deine@email.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
            disabled={isSubmitting}
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="audit-message" className="text-sm font-medium">
            Budget, Shop und was hakt
          </label>
          <Textarea
            id="audit-message"
            name="message"
            rows={8}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            required
            disabled={isSubmitting}
          />
        </div>
        <Button type="submit" size="lg" className="group w-full" disabled={isSubmitting}>
          {isSubmitting ? "Wird gesendet..." : "Audit anfragen"}
          {!isSubmitting && (
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          )}
        </Button>
        <p className="text-center text-xs text-muted-foreground">
          249 € netto zzgl. MwSt. · Antwort innerhalb eines Werktags
        </p>
      </form>

      <div className="mt-6 flex flex-col gap-3 border-t border-border pt-6 sm:flex-row">
        <Button variant="outline" className="flex-1" asChild>
          <a href={whatsappUrl(GOOGLE_ADS_AUDIT_WHATSAPP_MESSAGE)} target="_blank" rel="noopener noreferrer">
            <MessageCircle className="mr-2 h-4 w-4" />
            WhatsApp
          </a>
        </Button>
        <Button variant="outline" className="flex-1" asChild>
          <a href={MAIL_HREF}>
            <Mail className="mr-2 h-4 w-4" />
            E-Mail
          </a>
        </Button>
      </div>
    </div>
  )
}

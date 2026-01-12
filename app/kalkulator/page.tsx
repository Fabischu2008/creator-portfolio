"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Separator } from "@/components/ui/separator"
import { Download, Calculator, Sparkles, Building2, CheckCircle2 } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

interface PricingItem {
  id: string
  label: string
  price: number
}

const projectTypes: PricingItem[] = [
  { id: "website", label: "Corporate Website / Web-App", price: 2500 },
  { id: "landing", label: "Landing Page / Marketing Site", price: 1200 },
  { id: "ecommerce", label: "E-Commerce Shop", price: 4500 },
  { id: "app", label: "Mobile App", price: 6000 },
  { id: "redesign", label: "Website Redesign / Relaunch", price: 2000 },
  { id: "custom", label: "Individuelles B2B Projekt", price: 4000 },
]

const features: PricingItem[] = [
  { id: "responsive", label: "Responsive Design (Mobile-First)", price: 500 },
  { id: "cms", label: "CMS Integration (Content Management)", price: 1200 },
  { id: "seo", label: "SEO Optimierung", price: 800 },
  { id: "analytics", label: "Analytics & Tracking Integration", price: 400 },
  { id: "payment", label: "Payment Integration", price: 1200 },
  { id: "multilang", label: "Mehrsprachigkeit (i18n)", price: 1000 },
  { id: "animations", label: "Animationen & Interaktionen", price: 800 },
  { id: "api", label: "API Integration / Backend-Anbindung", price: 1500 },
  { id: "auth", label: "Benutzerauthentifizierung", price: 1000 },
  { id: "dashboard", label: "Admin Dashboard", price: 2000 },
]

const timelines: PricingItem[] = [
  { id: "rush", label: "Express (2-4 Wochen)", price: 800 },
  { id: "standard", label: "Standard (4-8 Wochen)", price: 0 },
  { id: "flexible", label: "Flexibel (8+ Wochen)", price: -300 },
]

export default function KalkulatorPage() {
  const [selectedProject, setSelectedProject] = useState<string>("")
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([])
  const [selectedTimeline, setSelectedTimeline] = useState<string>("standard")
  const [showLeadForm, setShowLeadForm] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  
  const [leadData, setLeadData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  })

  const calculatePrice = () => {
    let total = 0

    const project = projectTypes.find((p) => p.id === selectedProject)
    if (project) {
      total += project.price
    }

    selectedFeatures.forEach((featureId) => {
      const feature = features.find((f) => f.id === featureId)
      if (feature) {
        total += feature.price
      }
    })

    const timeline = timelines.find((t) => t.id === selectedTimeline)
    if (timeline) {
      total += timeline.price
    }

    return Math.max(0, total)
  }

  const totalPrice = calculatePrice()
  const vatPrice = totalPrice * 0.19
  const finalPrice = totalPrice + vatPrice

  const handleFeatureToggle = (featureId: string) => {
    setSelectedFeatures((prev) =>
      prev.includes(featureId)
        ? prev.filter((id) => id !== featureId)
        : [...prev, featureId]
    )
  }

  const handleLeadSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Collect all data
      const submissionData = {
        name: leadData.name,
        email: leadData.email,
        company: leadData.company,
        phone: leadData.phone,
        message: leadData.message,
        type: "calculator",
        projectType: projectTypes.find((p) => p.id === selectedProject)?.label || "",
        selectedFeatures: selectedFeatures.map(
          (id) => features.find((f) => f.id === id)?.label || ""
        ),
        timeline: timelines.find((t) => t.id === selectedTimeline)?.label || "",
        totalPrice: finalPrice,
        calculatedPrice: totalPrice,
      }

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submissionData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Ein Fehler ist aufgetreten")
      }

      setIsSubmitted(true)
      setShowLeadForm(false)
      setLeadData({ name: "", email: "", company: "", phone: "", message: "" })
    } catch (error) {
      console.error("Error submitting form:", error)
      alert("Es ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1 pt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
          <div className="space-y-12">
            {/* Header */}
            <div className="space-y-4 text-center">
              <div className="flex items-center justify-center gap-2 text-accent">
                <Building2 className="h-6 w-6" />
                <Calculator className="h-6 w-6" />
                <Sparkles className="h-5 w-5" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                B2B Kostenrechner
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                Erstelle einen individuellen Kostenvoranschlag für Ihr Unternehmen. 
                Alle Preise sind Richtwerte basierend auf typischen B2B-Projekten.
              </p>
            </div>

            {isSubmitted && (
              <Card className="p-6 bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-6 w-6 text-green-600 dark:text-green-400" />
                  <div>
                    <h3 className="font-semibold text-green-900 dark:text-green-100">
                      Anfrage erfolgreich gesendet!
                    </h3>
                    <p className="text-sm text-green-700 dark:text-green-300 mt-1">
                      Wir werden uns in Kürze bei Ihnen melden.
                    </p>
                  </div>
                </div>
              </Card>
            )}

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Form Section */}
              <div className="lg:col-span-2 space-y-8">
                {/* Project Type */}
                <Card className="p-6">
                  <h2 className="text-2xl font-semibold mb-6">Projekttyp</h2>
                  <RadioGroup value={selectedProject} onValueChange={setSelectedProject}>
                    <div className="space-y-4">
                      {projectTypes.map((project) => (
                        <div key={project.id} className="flex items-center space-x-3">
                          <RadioGroupItem value={project.id} id={project.id} />
                          <Label
                            htmlFor={project.id}
                            className="flex-1 cursor-pointer flex items-center justify-between"
                          >
                            <span>{project.label}</span>
                            <span className="text-muted-foreground font-medium">
                              ab {project.price.toLocaleString("de-DE")} €
                            </span>
                          </Label>
                        </div>
                      ))}
                    </div>
                  </RadioGroup>
                </Card>

                {/* Features */}
                <Card className="p-6">
                  <h2 className="text-2xl font-semibold mb-6">Zusätzliche Features</h2>
                  <div className="space-y-4">
                    {features.map((feature) => (
                      <div key={feature.id} className="flex items-center space-x-3">
                        <Checkbox
                          id={feature.id}
                          checked={selectedFeatures.includes(feature.id)}
                          onCheckedChange={() => handleFeatureToggle(feature.id)}
                        />
                        <Label
                          htmlFor={feature.id}
                          className="flex-1 cursor-pointer flex items-center justify-between"
                        >
                          <span>{feature.label}</span>
                          <span className="text-muted-foreground font-medium">
                            +{feature.price.toLocaleString("de-DE")} €
                          </span>
                        </Label>
                      </div>
                    ))}
                  </div>
                </Card>

                {/* Timeline */}
                <Card className="p-6">
                  <h2 className="text-2xl font-semibold mb-6">Zeitrahmen</h2>
                  <RadioGroup value={selectedTimeline} onValueChange={setSelectedTimeline}>
                    <div className="space-y-4">
                      {timelines.map((timeline) => (
                        <div key={timeline.id} className="flex items-center space-x-3">
                          <RadioGroupItem value={timeline.id} id={timeline.id} />
                          <Label
                            htmlFor={timeline.id}
                            className="flex-1 cursor-pointer flex items-center justify-between"
                          >
                            <span>{timeline.label}</span>
                            {timeline.price !== 0 && (
                              <span
                                className={`font-medium ${
                                  timeline.price > 0
                                    ? "text-orange-600 dark:text-orange-400"
                                    : "text-green-600 dark:text-green-400"
                                }`}
                              >
                                {timeline.price > 0 ? "+" : ""}
                                {timeline.price.toLocaleString("de-DE")} €
                              </span>
                            )}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </RadioGroup>
                </Card>
              </div>

              {/* Summary Section */}
              <div className="lg:col-span-1">
                <Card className="p-6 sticky top-8">
                  <h2 className="text-2xl font-semibold mb-6">Kostenvoranschlag</h2>

                  {selectedProject ? (
                    <>
                      <div className="space-y-4">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Projektbasis</span>
                          <span>
                            {projectTypes
                              .find((p) => p.id === selectedProject)
                              ?.price.toLocaleString("de-DE")}{" "}
                            €
                          </span>
                        </div>

                        {selectedFeatures.length > 0 && (
                          <>
                            <Separator />
                            <div className="space-y-2">
                              {selectedFeatures.map((featureId) => {
                                const feature = features.find((f) => f.id === featureId)
                                return (
                                  <div key={featureId} className="flex justify-between text-sm">
                                    <span className="text-muted-foreground">{feature?.label}</span>
                                    <span>+{feature?.price.toLocaleString("de-DE")} €</span>
                                  </div>
                                )
                              })}
                            </div>
                            <Separator />
                          </>
                        )}

                        {selectedTimeline !== "standard" && (
                          <>
                            <div className="flex justify-between text-sm">
                              <span className="text-muted-foreground">Zeitrahmen</span>
                              <span>
                                {timelines
                                  .find((t) => t.id === selectedTimeline)
                                  ?.price.toLocaleString("de-DE")}{" "}
                                €
                              </span>
                            </div>
                            <Separator />
                          </>
                        )}

                        <div className="flex justify-between text-sm pt-2">
                          <span className="text-muted-foreground">Zwischensumme</span>
                          <span className="font-medium">
                            {totalPrice.toLocaleString("de-DE")} €
                          </span>
                        </div>

                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">MwSt. (19%)</span>
                          <span>
                            {vatPrice.toLocaleString("de-DE", { maximumFractionDigits: 2 })} €
                          </span>
                        </div>

                        <Separator />

                        <div className="flex justify-between text-xl font-bold pt-2">
                          <span>Gesamtpreis</span>
                          <span className="text-accent">
                            {finalPrice.toLocaleString("de-DE", { maximumFractionDigits: 2 })} €
                          </span>
                        </div>
                      </div>

                      {!showLeadForm ? (
                        <div className="mt-8 space-y-3">
                          <Button
                            className="w-full"
                            size="lg"
                            onClick={() => setShowLeadForm(true)}
                          >
                            Kostenloses Angebot anfordern
                          </Button>
                          <Button variant="outline" className="w-full" size="lg">
                            <Download className="mr-2 h-4 w-4" />
                            Als PDF exportieren
                          </Button>
                        </div>
                      ) : (
                        <Card className="mt-6 p-6 bg-muted/50">
                          <h3 className="font-semibold mb-4">Kontaktdaten für Angebot</h3>
                          <form onSubmit={handleLeadSubmit} className="space-y-4">
                            <div className="space-y-2">
                              <Label htmlFor="name">Name *</Label>
                              <Input
                                id="name"
                                value={leadData.name}
                                onChange={(e) =>
                                  setLeadData({ ...leadData, name: e.target.value })
                                }
                                required
                                placeholder="Max Mustermann"
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="email">E-Mail *</Label>
                              <Input
                                id="email"
                                type="email"
                                value={leadData.email}
                                onChange={(e) =>
                                  setLeadData({ ...leadData, email: e.target.value })
                                }
                                required
                                placeholder="max@firma.de"
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="company">Firma *</Label>
                              <Input
                                id="company"
                                value={leadData.company}
                                onChange={(e) =>
                                  setLeadData({ ...leadData, company: e.target.value })
                                }
                                required
                                placeholder="Firmenname GmbH"
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="phone">Telefon</Label>
                              <Input
                                id="phone"
                                type="tel"
                                value={leadData.phone}
                                onChange={(e) =>
                                  setLeadData({ ...leadData, phone: e.target.value })
                                }
                                placeholder="+49 123 456789"
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="message">Nachricht / Projektbeschreibung</Label>
                              <Textarea
                                id="message"
                                value={leadData.message}
                                onChange={(e) =>
                                  setLeadData({ ...leadData, message: e.target.value })
                                }
                                rows={3}
                                placeholder="Beschreiben Sie Ihr Projekt..."
                              />
                            </div>
                            <div className="flex gap-3">
                              <Button type="submit" className="flex-1" disabled={isSubmitting}>
                                {isSubmitting ? "Wird gesendet..." : "Angebot anfordern"}
                              </Button>
                              <Button
                                type="button"
                                variant="outline"
                                onClick={() => setShowLeadForm(false)}
                              >
                                Abbrechen
                              </Button>
                            </div>
                          </form>
                        </Card>
                      )}

                      <p className="text-xs text-muted-foreground mt-6 text-center">
                        * Alle Preise sind Richtwerte. Der finale Preis wird individuell nach
                        einer detaillierten Projektanalyse festgelegt.
                      </p>
                    </>
                  ) : (
                    <div className="text-center py-12">
                      <p className="text-muted-foreground">
                        Wählen Sie einen Projekttyp aus, um einen Kostenvoranschlag zu erhalten.
                      </p>
                    </div>
                  )}
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

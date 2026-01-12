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
import { Badge } from "@/components/ui/badge"
import {
  Calculator,
  Sparkles,
  Building2,
  CheckCircle2,
  ShoppingCart,
  Smartphone,
  Globe,
  Palette,
  Code,
  Search,
  BarChart3,
  CreditCard,
  Languages,
  Users,
  Settings,
  Zap,
  FileText,
  Mail,
  Lock,
  Database,
  Bell,
  Star,
  Package,
  Heart,
  TrendingUp,
  Megaphone,
  Filter,
  Share2,
  Target,
} from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import type { LucideIcon } from "lucide-react"

interface ServiceFeature {
  id: string
  name: string
  description?: string
  price: number
  category: string
}

interface Service {
  id: string
  name: string
  description: string
  basePrice: number
  icon: LucideIcon
  includedByDefault: string[] // Feature IDs die bereits enthalten sind
  features: ServiceFeature[]
}

const services: Service[] = [
  {
    id: "corporate-website",
    name: "Corporate Website",
    description: "Professionelle Unternehmenswebsite mit modernem Design und vollständiger Responsive-Optimierung",
    basePrice: 2500,
    icon: Building2,
    includedByDefault: ["responsive", "seo-basic", "analytics-basic"],
    features: [
      {
        id: "custom-design",
        name: "Individuelles UI/UX Design",
        description: "Maßgeschneidertes Design-Konzept",
        price: 800,
        category: "Design",
      },
      {
        id: "animations",
        name: "Animationen & Micro-Interactions",
        description: "Moderne Animationen für besseres UX",
        price: 600,
        category: "Design",
      },
      {
        id: "cms",
        name: "CMS Integration",
        description: "Content Management System (z.B. Strapi, Sanity)",
        price: 1200,
        category: "Entwicklung",
      },
      {
        id: "blog",
        name: "Blog-System",
        description: "Vollständiges Blog mit Kategorien & Tags",
        price: 500,
        category: "Entwicklung",
      },
      {
        id: "multilang",
        name: "Mehrsprachigkeit",
        description: "i18n für mehrere Sprachen",
        price: 1000,
        category: "Entwicklung",
      },
      {
        id: "contact-form",
        name: "Kontaktformular & Integration",
        description: "Formular mit E-Mail-Versand",
        price: 300,
        category: "Entwicklung",
      },
      {
        id: "seo-advanced",
        name: "Erweiterte SEO-Optimierung",
        description: "On-Page SEO, Sitemap, Meta-Tags",
        price: 800,
        category: "Marketing",
      },
      {
        id: "analytics-advanced",
        name: "Erweiterte Analytics",
        description: "Google Analytics 4, Conversions, Events",
        price: 400,
        category: "Marketing",
      },
    ],
  },
  {
    id: "ecommerce",
    name: "E-Commerce Shop",
    description: "Vollständiger Online-Shop mit Warenkorb, Checkout und Zahlungsabwicklung",
    basePrice: 4500,
    icon: ShoppingCart,
    includedByDefault: ["responsive", "payment-basic", "product-management", "cart-checkout"],
    features: [
      {
        id: "product-variants",
        name: "Produktvarianten",
        description: "Größen, Farben, Optionen",
        price: 800,
        category: "Entwicklung",
      },
      {
        id: "inventory",
        name: "Lagerverwaltung",
        description: "Bestandsverwaltung & Low-Stock-Alerts",
        price: 1200,
        category: "Entwicklung",
      },
      {
        id: "customer-accounts",
        name: "Kundenkonten",
        description: "Registrierung, Login, Profil",
        price: 1000,
        category: "Entwicklung",
      },
      {
        id: "order-management",
        name: "Bestellverwaltung",
        description: "Bestellhistorie, Status-Tracking",
        price: 800,
        category: "Entwicklung",
      },
      {
        id: "reviews",
        name: "Bewertungs- & Review-System",
        description: "Produktbewertungen & Sterne",
        price: 600,
        category: "Entwicklung",
      },
      {
        id: "wishlist",
        name: "Wunschliste",
        description: "Merkzettel für Kunden",
        price: 400,
        category: "Entwicklung",
      },
      {
        id: "payment-advanced",
        name: "Erweiterte Zahlungsmethoden",
        description: "PayPal, Klarna, Apple Pay, Google Pay",
        price: 800,
        category: "Zahlung",
      },
      {
        id: "shipping-integration",
        name: "Versandintegration",
        description: "DPD, DHL, Hermes Anbindung",
        price: 1000,
        category: "Zahlung",
      },
      {
        id: "seo-shop",
        name: "Shop SEO-Optimierung",
        description: "Produkt-SEO, Schema-Markup",
        price: 800,
        category: "Marketing",
      },
      {
        id: "analytics-ecommerce",
        name: "E-Commerce Analytics",
        description: "Conversion-Tracking, Funnels",
        price: 600,
        category: "Marketing",
      },
    ],
  },
  {
    id: "landing-page",
    name: "Landing Page / Marketing Site",
    description: "Hochkonvertierende Landing Page für Marketing-Kampagnen",
    basePrice: 1200,
    icon: TrendingUp,
    includedByDefault: ["responsive", "seo-basic"],
    features: [
      {
        id: "conversion-optimization",
        name: "Conversion-Optimierung",
        description: "A/B Testing, Heatmaps, Optimierung",
        price: 800,
        category: "Marketing",
      },
      {
        id: "lead-generation",
        name: "Lead-Generierung",
        description: "Formulare, Pop-ups, Exit-Intent",
        price: 600,
        category: "Marketing",
      },
      {
        id: "video-integration",
        name: "Video-Integration",
        description: "Hero-Videos, Product-Demos",
        price: 400,
        category: "Design",
      },
      {
        id: "animations-landing",
        name: "Premium Animationen",
        description: "Scroll-Animationen, Parallax",
        price: 700,
        category: "Design",
      },
      {
        id: "cms-landing",
        name: "CMS für Landing Pages",
        description: "Einfaches CMS für mehrere Landing Pages",
        price: 1000,
        category: "Entwicklung",
      },
      {
        id: "analytics-landing",
        name: "Conversion Analytics",
        description: "Detaillierte Conversion-Tracking",
        price: 500,
        category: "Marketing",
      },
    ],
  },
  {
    id: "mobile-app",
    name: "Mobile App",
    description: "Native oder Cross-Platform Mobile App (iOS & Android)",
    basePrice: 6000,
    icon: Smartphone,
    includedByDefault: ["responsive", "native-design"],
    features: [
      {
        id: "ios-android",
        name: "iOS & Android",
        description: "Beide Plattformen",
        price: 2000,
        category: "Entwicklung",
      },
      {
        id: "push-notifications",
        name: "Push-Benachrichtigungen",
        description: "In-App & Push-Notifications",
        price: 800,
        category: "Entwicklung",
      },
      {
        id: "offline-mode",
        name: "Offline-Funktionalität",
        description: "Offline-Zugriff auf Daten",
        price: 1200,
        category: "Entwicklung",
      },
      {
        id: "biometric-auth",
        name: "Biometrische Authentifizierung",
        description: "Face ID, Touch ID, Fingerprint",
        price: 600,
        category: "Sicherheit",
      },
      {
        id: "app-analytics",
        name: "App Analytics",
        description: "User-Tracking, Events, Funnels",
        price: 500,
        category: "Marketing",
      },
      {
        id: "in-app-purchases",
        name: "In-App-Käufe",
        description: "Payment-Integration in App",
        price: 1000,
        category: "Zahlung",
      },
      {
        id: "backend-integration",
        name: "Backend-Integration",
        description: "API-Anbindung, Datenbank",
        price: 1500,
        category: "Entwicklung",
      },
    ],
  },
  {
    id: "redesign",
    name: "Website Redesign / Relaunch",
    description: "Modernisierung bestehender Websites mit verbessertem Design und Performance",
    basePrice: 2000,
    icon: Palette,
    includedByDefault: ["responsive", "performance"],
    features: [
      {
        id: "audit",
        name: "Website-Audit",
        description: "Detaillierte Analyse der aktuellen Site",
        price: 500,
        category: "Analyse",
      },
      {
        id: "migration",
        name: "Daten-Migration",
        description: "Sichere Übertragung aller Daten",
        price: 800,
        category: "Entwicklung",
      },
      {
        id: "modern-design",
        name: "Modernes Design",
        description: "Neues UI/UX Design-Konzept",
        price: 1000,
        category: "Design",
      },
      {
        id: "performance-optimization",
        name: "Performance-Optimierung",
        description: "Ladezeiten, Core Web Vitals",
        price: 600,
        category: "Entwicklung",
      },
      {
        id: "seo-migration",
        name: "SEO-Migration",
        description: "301 Redirects, SEO-Erhaltung",
        price: 700,
        category: "Marketing",
      },
      {
        id: "cms-migration",
        name: "CMS-Migration",
        description: "Umzug zu modernem CMS",
        price: 1200,
        category: "Entwicklung",
      },
    ],
  },
  {
    id: "custom",
    name: "Individuelles B2B Projekt",
    description: "Maßgeschneiderte Lösung für komplexe Business-Anforderungen",
    basePrice: 4000,
    icon: Settings,
    includedByDefault: ["responsive", "consultation"],
    features: [
      {
        id: "consultation-extended",
        name: "Erweiterte Beratung",
        description: "Strategie-Workshops, Konzept-Entwicklung",
        price: 1500,
        category: "Beratung",
      },
      {
        id: "custom-backend",
        name: "Custom Backend",
        description: "Individuelle Backend-Entwicklung",
        price: 3000,
        category: "Entwicklung",
      },
      {
        id: "api-development",
        name: "API-Entwicklung",
        description: "REST/GraphQL API Entwicklung",
        price: 2000,
        category: "Entwicklung",
      },
      {
        id: "dashboard-custom",
        name: "Custom Dashboard",
        description: "Individuelles Admin-Dashboard",
        price: 2500,
        category: "Entwicklung",
      },
      {
        id: "integration-custom",
        name: "System-Integration",
        description: "Integration bestehender Systeme",
        price: 1800,
        category: "Entwicklung",
      },
      {
        id: "authentication-advanced",
        name: "Erweiterte Authentifizierung",
        description: "SSO, OAuth, 2FA",
        price: 1200,
        category: "Sicherheit",
      },
      {
        id: "testing",
        name: "Testing & QA",
        description: "Umfangreiche Tests, QA-Prozess",
        price: 1000,
        category: "Qualität",
      },
    ],
  },
  {
    id: "marketing",
    name: "Marketing & Werbung",
    description: "SEO, Social Media, Google Ads & Marketing-Services nach Bedarf",
    basePrice: 0,
    icon: Megaphone,
    includedByDefault: [],
    features: [
      {
        id: "seo-service",
        name: "SEO-Service",
        description: "Suchmaschinenoptimierung (monatliches Retainer oder Setup)",
        price: 1500,
        category: "SEO",
      },
      {
        id: "seo-audit",
        name: "SEO-Audit",
        description: "Detaillierte Analyse der Website",
        price: 800,
        category: "SEO",
      },
      {
        id: "keyword-research",
        name: "Keyword-Recherche",
        description: "Umfangreiche Keyword-Analyse",
        price: 500,
        category: "SEO",
      },
      {
        id: "onpage-seo",
        name: "On-Page SEO",
        description: "Content-Optimierung, Meta-Tags, Structure",
        price: 1000,
        category: "SEO",
      },
      {
        id: "link-building",
        name: "Link-Building",
        description: "Backlink-Aufbau & Outreach",
        price: 1500,
        category: "SEO",
      },
      {
        id: "google-ads",
        name: "Google Ads Management",
        description: "Kampagnen-Setup & Betreuung",
        price: 1200,
        category: "Werbekampagnen",
      },
      {
        id: "meta-ads",
        name: "Meta Ads (Facebook & Instagram)",
        description: "Social Media Werbekampagnen",
        price: 1000,
        category: "Werbekampagnen",
      },
      {
        id: "social-media-management",
        name: "Social Media Management",
        description: "Content-Erstellung & Community-Management",
        price: 1500,
        category: "Social Media",
      },
      {
        id: "content-marketing",
        name: "Content-Marketing",
        description: "Blog-Content, Artikel, Guides",
        price: 1200,
        category: "Content",
      },
      {
        id: "email-marketing",
        name: "E-Mail-Marketing",
        description: "Newsletter, Automation, Kampagnen",
        price: 800,
        category: "Marketing",
      },
    ],
  },
  {
    id: "sales-funnel",
    name: "Sales Funnel",
    description: "Hochkonvertierende Verkaufstrichter für Leads & Sales",
    basePrice: 2800,
    icon: Filter,
    includedByDefault: ["responsive", "conversion-optimization"],
    features: [
      {
        id: "funnel-strategy",
        name: "Funnel-Strategie & Konzept",
        description: "Funnel-Struktur, Customer Journey, Touchpoints",
        price: 1200,
        category: "Strategie",
      },
      {
        id: "landing-pages",
        name: "Mehrere Landing Pages",
        description: "3-5 Landing Pages für verschiedene Stufen",
        price: 1500,
        category: "Entwicklung",
      },
      {
        id: "lead-magnet",
        name: "Lead-Magnet Erstellung",
        description: "E-Book, Checkliste, Template als Download",
        price: 600,
        category: "Content",
      },
      {
        id: "email-automation",
        name: "E-Mail-Automation",
        description: "Welcome-Series, Nurturing, Follow-Up",
        price: 1000,
        category: "Marketing",
      },
      {
        id: "conversion-tracking-funnel",
        name: "Conversion-Tracking",
        description: "Funnel-Analytics, Drop-off-Analyse",
        price: 800,
        category: "Analytics",
      },
      {
        id: "a-b-testing-funnel",
        name: "A/B Testing",
        description: "Multivariate Tests für alle Funnel-Stufen",
        price: 900,
        category: "Optimierung",
      },
      {
        id: "upsell-downsell",
        name: "Upsell & Downsell-Seiten",
        description: "Verkaufs-Seiten für Zusatzangebote",
        price: 800,
        category: "Entwicklung",
      },
      {
        id: "payment-integration-funnel",
        name: "Zahlungsintegration",
        description: "Stripe, PayPal für Direktverkauf",
        price: 600,
        category: "Zahlung",
      },
      {
        id: "thank-you-pages",
        name: "Thank-You & OTO-Seiten",
        description: "Bestätigungs- & One-Time-Offer-Seiten",
        price: 500,
        category: "Entwicklung",
      },
    ],
  },
]

const timelines = [
  { id: "rush", label: "Express (2-4 Wochen)", price: 800 },
  { id: "standard", label: "Standard (4-8 Wochen)", price: 0 },
  { id: "flexible", label: "Flexibel (8+ Wochen)", price: -300 },
]

const categoryIcons: Record<string, LucideIcon> = {
  Design: Palette,
  Entwicklung: Code,
  Marketing: TrendingUp,
  Zahlung: CreditCard,
  Sicherheit: Lock,
  Analyse: BarChart3,
  Beratung: Users,
  Qualität: CheckCircle2,
  SEO: Search,
  Werbekampagnen: TrendingUp,
  "Social Media": Share2,
  Content: FileText,
  Strategie: Target,
  Analytics: BarChart3,
  Optimierung: Zap,
}

const categoryColors: Record<string, string> = {
  Design: "bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300",
  Entwicklung: "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300",
  Marketing: "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300",
  Zahlung: "bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300",
  Sicherheit: "bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300",
  Analyse: "bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300",
  Beratung: "bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300",
  Qualität: "bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300",
  SEO: "bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300",
  Werbekampagnen: "bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300",
  "Social Media": "bg-rose-100 dark:bg-rose-900/30 text-rose-700 dark:text-rose-300",
  Content: "bg-slate-100 dark:bg-slate-900/30 text-slate-700 dark:text-slate-300",
  Strategie: "bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300",
  Analytics: "bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300",
  Optimierung: "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300",
}

export default function KalkulatorPage() {
  const [selectedService, setSelectedService] = useState<string>("")
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

  const currentService = services.find((s) => s.id === selectedService)

  const calculatePrice = () => {
    if (!currentService) return 0

    let total = currentService.basePrice

    selectedFeatures.forEach((featureId) => {
      const feature = currentService.features.find((f) => f.id === featureId)
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

  const handleServiceChange = (serviceId: string) => {
    setSelectedService(serviceId)
    setSelectedFeatures([]) // Reset features when service changes
  }

  const handleFeatureToggle = (featureId: string) => {
    setSelectedFeatures((prev) =>
      prev.includes(featureId)
        ? prev.filter((id) => id !== featureId)
        : [...prev, featureId]
    )
  }

  // Group features by category
  const groupedFeatures = currentService
    ? currentService.features.reduce((acc, feature) => {
        if (!acc[feature.category]) {
          acc[feature.category] = []
        }
        acc[feature.category].push(feature)
        return acc
      }, {} as Record<string, ServiceFeature[]>)
    : {}

  const handleLeadSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const submissionData = {
        name: leadData.name,
        email: leadData.email,
        company: leadData.company,
        phone: leadData.phone,
        message: leadData.message,
        type: "calculator",
        projectType: currentService?.name || "",
        selectedFeatures: selectedFeatures.map((id) => {
          const feature = currentService?.features.find((f) => f.id === id)
          return feature?.name || ""
        }),
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
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
                Wählen Sie ein Leistungspaket und passen Sie es mit spezifischen Features an.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Form Section */}
              <div className="lg:col-span-2 space-y-8">
                {/* Service Selection */}
                <Card className="p-6">
                  <h2 className="text-2xl font-semibold mb-6">Leistungspaket wählen</h2>
                  <RadioGroup value={selectedService} onValueChange={handleServiceChange}>
                    <div className="grid md:grid-cols-2 gap-4">
                      {services.map((service) => {
                        const Icon = service.icon
                        return (
                          <Label
                            key={service.id}
                            htmlFor={service.id}
                            className={`relative flex flex-col p-4 border-2 rounded-lg cursor-pointer transition-all hover:border-accent ${
                              selectedService === service.id
                                ? "border-accent bg-accent/5"
                                : "border-border"
                            }`}
                          >
                            <RadioGroupItem
                              value={service.id}
                              id={service.id}
                              className="absolute top-4 right-4"
                            />
                            <div className="flex items-start gap-3 pr-8">
                              <div className="p-2 rounded-lg bg-accent/10 text-accent mt-1">
                                <Icon className="h-5 w-5" />
                              </div>
                              <div className="flex-1 space-y-1">
                                <div className="flex items-center justify-between">
                                  <h3 className="font-semibold text-lg">{service.name}</h3>
                                  <span className="text-sm font-medium text-muted-foreground">
                                    ab {service.basePrice.toLocaleString("de-DE")} €
                                  </span>
                                </div>
                                <p className="text-sm text-muted-foreground">
                                  {service.description}
                                </p>
                              </div>
                            </div>
                          </Label>
                        )
                      })}
                    </div>
                  </RadioGroup>
                </Card>

                {/* Features - only show if service is selected */}
                {currentService && (
                  <Card className="p-6">
                    <div className="mb-6">
                      <h2 className="text-2xl font-semibold mb-2">Zusätzliche Features</h2>
                      <p className="text-sm text-muted-foreground">
                        Diese Features sind bereits inklusive:{" "}
                        {currentService.includedByDefault.map((id, index) => {
                          const defaultFeatures: Record<string, string> = {
                            responsive: "Responsive Design",
                            "seo-basic": "Basis SEO",
                            "analytics-basic": "Basis Analytics",
                            "payment-basic": "Zahlungsabwicklung",
                            "product-management": "Produktverwaltung",
                            "cart-checkout": "Warenkorb & Checkout",
                            "native-design": "Native Design",
                            performance: "Performance-Optimierung",
                            consultation: "Beratung",
                            "conversion-optimization": "Conversion-Optimierung",
                          }
                          return (
                            <span key={id}>
                              <Badge variant="secondary" className="mr-1">
                                {defaultFeatures[id] || id}
                              </Badge>
                              {index < currentService.includedByDefault.length - 1 && ", "}
                            </span>
                          )
                        })}
                      </p>
                    </div>

                    <div className="space-y-6">
                      {Object.entries(groupedFeatures).map(([category, categoryFeatures]) => {
                        const CategoryIcon = categoryIcons[category] || Code
                        return (
                          <div key={category}>
                            <div className="flex items-center gap-2 mb-4">
                              <CategoryIcon className="h-4 w-4 text-muted-foreground" />
                              <h3 className="font-semibold text-lg">{category}</h3>
                            </div>
                            <div className="space-y-3 pl-6">
                              {categoryFeatures.map((feature) => (
                                <div
                                  key={feature.id}
                                  className="flex items-start gap-3 p-3 rounded-lg border border-border hover:bg-accent/5 transition-colors"
                                >
                                  <Checkbox
                                    id={feature.id}
                                    checked={selectedFeatures.includes(feature.id)}
                                    onCheckedChange={() => handleFeatureToggle(feature.id)}
                                    className="mt-0.5"
                                  />
                                  <Label
                                    htmlFor={feature.id}
                                    className="flex-1 cursor-pointer space-y-1"
                                  >
                                    <div className="flex items-center justify-between">
                                      <span className="font-medium">{feature.name}</span>
                                      <span className="text-sm font-semibold text-accent">
                                        +{feature.price.toLocaleString("de-DE")} €
                                      </span>
                                    </div>
                                    {feature.description && (
                                      <p className="text-xs text-muted-foreground">
                                        {feature.description}
                                      </p>
                                    )}
                                  </Label>
                                </div>
                              ))}
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </Card>
                )}

                {/* Timeline */}
                {currentService && (
                  <Card className="p-6">
                    <h2 className="text-2xl font-semibold mb-6">Zeitrahmen</h2>
                    <RadioGroup
                      value={selectedTimeline}
                      onValueChange={setSelectedTimeline}
                    >
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
                )}
              </div>

              {/* Summary Section */}
              <div className="lg:col-span-1">
                <Card className="p-6 sticky top-8">
                  <h2 className="text-2xl font-semibold mb-6">Kostenvoranschlag</h2>

                  {currentService ? (
                    <>
                      <div className="space-y-4">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">
                            {currentService.name}
                          </span>
                          <span>
                            {currentService.basePrice.toLocaleString("de-DE")} €
                          </span>
                        </div>

                        {selectedFeatures.length > 0 && (
                          <>
                            <Separator />
                            <div className="space-y-2">
                              {selectedFeatures.map((featureId) => {
                                const feature = currentService.features.find(
                                  (f) => f.id === featureId
                                )
                                return (
                                  <div
                                    key={featureId}
                                    className="flex justify-between text-sm"
                                  >
                                    <span className="text-muted-foreground">
                                      {feature?.name}
                                    </span>
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
                            {vatPrice.toLocaleString("de-DE", {
                              maximumFractionDigits: 2,
                            })}{" "}
                            €
                          </span>
                        </div>

                        <Separator />

                        <div className="flex justify-between text-xl font-bold pt-2">
                          <span>Gesamtpreis</span>
                          <span className="text-accent">
                            {finalPrice.toLocaleString("de-DE", {
                              maximumFractionDigits: 2,
                            })}{" "}
                            €
                          </span>
                        </div>
                      </div>

                      {isSubmitted ? (
                        <div className="mt-8 p-4 bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg">
                          <div className="flex items-center gap-3">
                            <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400 flex-shrink-0" />
                            <div>
                              <h3 className="font-semibold text-sm text-green-900 dark:text-green-100">
                                Anfrage erfolgreich gesendet!
                              </h3>
                              <p className="text-xs text-green-700 dark:text-green-300 mt-1">
                                Wir werden uns in Kürze bei Ihnen melden.
                              </p>
                            </div>
                          </div>
                        </div>
                      ) : !showLeadForm ? (
                        <div className="mt-8">
                          <Button
                            className="w-full"
                            size="lg"
                            onClick={() => setShowLeadForm(true)}
                          >
                            Kostenloses Angebot anfordern
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
                              <Label htmlFor="message">
                                Nachricht / Projektbeschreibung
                              </Label>
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
                              <Button
                                type="submit"
                                className="flex-1"
                                disabled={isSubmitting}
                              >
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
                        Wählen Sie ein Leistungspaket aus, um einen Kostenvoranschlag zu
                        erhalten.
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
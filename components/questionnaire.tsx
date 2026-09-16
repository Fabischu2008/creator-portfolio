"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowLeft, ArrowRight, Check, Mail, MessageCircle } from "lucide-react"
import { SectionLabel } from "@/components/section-label"
import { questionnaireWhatsappMessage, whatsappUrl } from "@/lib/contact"

const STEPS = [
  {
    id: "service",
    question: "Was brauchst du?",
    options: [
      "Website",
      "Landingpage",
      "Meta Ads",
      "Social Media Betreuung",
      "SEO",
      "Mehrere Leistungen",
    ],
  },
  {
    id: "goal",
    question: "Was ist dein Hauptziel?",
    options: [
      "Mehr Kundenanfragen",
      "Umsatz steigern",
      "Online-Präsenz aufbauen",
      "Bestehende Website verbessern",
      "Werbung starten",
    ],
  },
  {
    id: "timeline",
    question: "Wann soll es losgehen?",
    options: ["So schnell wie möglich", "In 1–3 Monaten", "Ich schaue mich erst um"],
  },
  {
    id: "budget",
    question: "Welcher Budget-Rahmen passt?",
    options: ["Unter 1.000 €", "1.000 – 3.000 €", "3.000 – 5.000 €", "Über 5.000 €", "Noch unklar"],
  },
]

export function Questionnaire() {
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")
  // Final step is either the channel choice or, once e-mail was picked, the form.
  const [contactMethod, setContactMethod] = useState<"choice" | "email">("choice")

  const isContactStep = step === STEPS.length
  const totalSteps = STEPS.length + 1
  const progress = ((step + 1) / totalSteps) * 100

  const selectOption = (option: string) => {
    const current = STEPS[step]
    setAnswers((prev) => ({ ...prev, [current.id]: option }))
    setTimeout(() => setStep((s) => s + 1), 180)
  }

  const handleSubmit = async () => {
    setIsSubmitting(true)
    setError("")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          type: "questionnaire",
          service: answers.service,
          goal: answers.goal,
          timeline: answers.timeline,
          budget: answers.budget,
          message: [
            `Leistung: ${answers.service}`,
            `Ziel: ${answers.goal}`,
            `Zeitrahmen: ${answers.timeline}`,
            `Budget: ${answers.budget}`,
          ].join("\n"),
        }),
      })

      const data = await response.json()
      if (!response.ok) throw new Error(data.error || "Ein Fehler ist aufgetreten")

      setIsSubmitted(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Ein Fehler ist aufgetreten")
    } finally {
      setIsSubmitting(false)
    }
  }

  const reset = () => {
    setStep(0)
    setAnswers({})
    setName("")
    setEmail("")
    setIsSubmitted(false)
    setError("")
    setContactMethod("choice")
  }

  return (
    <section id="fragebogen" className="py-24 px-4 sm:px-6 lg:px-8 border-y border-border/60">
      <div className="max-w-2xl mx-auto">
        <div className="space-y-4 text-center mb-12">
          <SectionLabel>60-Sekunden-Check</SectionLabel>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-balance">
            In 60 Sekunden zur ersten Einschätzung.
          </h2>
          <p className="text-lg text-muted-foreground">
            4 kurze Fragen — danach melde ich mich persönlich bei dir.
          </p>
        </div>

        <div className="rounded-xl border border-border bg-background/70 backdrop-blur-md p-6 sm:p-8 shadow-sm">
          {!isSubmitted ? (
            <>
              <div className="mb-8">
                <div className="flex justify-between text-sm text-muted-foreground mb-2">
                  <span>
                    Schritt {step + 1} von {totalSteps}
                  </span>
                  <span>{Math.round(progress)}%</span>
                </div>
                <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                  <div
                    className="h-full bg-foreground transition-all duration-300 rounded-full"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>

              {!isContactStep ? (
                <div className="space-y-6">
                  <h3 className="text-xl sm:text-2xl font-semibold">{STEPS[step].question}</h3>
                  <div className="grid gap-3">
                    {STEPS[step].options.map((option) => (
                      <button
                        key={option}
                        onClick={() => selectOption(option)}
                        className={`w-full text-left px-4 py-3.5 rounded-lg border transition-all duration-200 ${
                          answers[STEPS[step].id] === option
                            ? "border-foreground bg-secondary"
                            : "border-border hover:border-foreground/50 hover:bg-secondary/60"
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                  {step > 0 && (
                    <Button variant="ghost" onClick={() => setStep((s) => s - 1)}>
                      <ArrowLeft className="mr-2 h-4 w-4" />
                      Zurück
                    </Button>
                  )}
                </div>
              ) : contactMethod === "choice" ? (
                <div className="space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-xl sm:text-2xl font-semibold">
                      Fast geschafft — wie sollen wir weitermachen?
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Deine Antworten sind gespeichert. Such dir aus, wie du mich erreichen willst.
                    </p>
                  </div>

                  <div className="rounded-lg border border-border bg-secondary/50 p-4 space-y-1.5 text-sm">
                    {STEPS.map((s) => (
                      <div key={s.id} className="flex gap-2">
                        <Check className="h-4 w-4 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{answers[s.id]}</span>
                      </div>
                    ))}
                  </div>

                  <div className="grid gap-3">
                    <Button size="lg" className="w-full" asChild>
                      <a
                        href={whatsappUrl(questionnaireWhatsappMessage(answers, name))}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <MessageCircle className="mr-2 h-4 w-4" />
                        Per WhatsApp senden
                      </a>
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="w-full"
                      onClick={() => setContactMethod("email")}
                    >
                      <Mail className="mr-2 h-4 w-4" />
                      Lieber per E-Mail
                    </Button>
                  </div>

                  <div className="flex items-center justify-between">
                    <Button variant="ghost" onClick={() => setStep((s) => s - 1)}>
                      <ArrowLeft className="mr-2 h-4 w-4" />
                      Zurück
                    </Button>
                    <p className="text-xs text-muted-foreground text-right">
                      Bei WhatsApp ist die Nachricht schon fertig — du musst nur senden.
                    </p>
                  </div>
                </div>
              ) : (
                <div className="space-y-6">
                  <h3 className="text-xl sm:text-2xl font-semibold">
                    Fast geschafft — wohin soll die Antwort?
                  </h3>
                  <div className="space-y-4">
                    <Input
                      placeholder="Dein Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      disabled={isSubmitting}
                    />
                    <Input
                      type="email"
                      placeholder="deine@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  {error && <p className="text-sm text-destructive">{error}</p>}
                  <div className="flex gap-3">
                    <Button
                      variant="outline"
                      onClick={() => setContactMethod("choice")}
                      disabled={isSubmitting}
                    >
                      <ArrowLeft className="mr-2 h-4 w-4" />
                      Zurück
                    </Button>
                    <Button
                      className="flex-1 group"
                      onClick={handleSubmit}
                      disabled={isSubmitting || !name || !email}
                    >
                      {isSubmitting ? "Wird gesendet..." : "Antwort erhalten"}
                      {!isSubmitting && (
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      )}
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground text-center">
                    Nur Name und E-Mail. Ich melde mich persönlich — kein Funnel, keine Automatik.
                  </p>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-8 space-y-4">
              <div className="h-16 w-16 rounded-full bg-foreground text-background flex items-center justify-center mx-auto">
                <Check className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-semibold">Danke, {name}!</h3>
              <p className="text-muted-foreground max-w-sm mx-auto">
                Ich schaue mir deine Angaben an und melde mich persönlich bei dir — in der Regel
                innerhalb von 24 Stunden.
              </p>
              <Button variant="outline" onClick={reset} className="mt-4">
                Nochmal starten
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

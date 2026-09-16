// International format without "+" or spaces — required by wa.me links.
export const WHATSAPP_NUMBER = "4915259527957"
export const CONTACT_EMAIL = "fabianschuck13@gmail.com"

export function whatsappUrl(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

export function mailtoUrl(subject: string, body?: string) {
  const params = new URLSearchParams({ subject })
  if (body) params.set("body", body)
  return `mailto:${CONTACT_EMAIL}?${params.toString()}`
}

export const DEFAULT_WHATSAPP_MESSAGE =
  "Hallo Fabian! Ich habe deine Website gesehen und würde gerne über mein Projekt sprechen."

export function serviceWhatsappMessage(serviceTitle: string) {
  return `Hallo Fabian! Ich habe deine Seite zu "${serviceTitle}" gelesen und würde das gerne für mein Business besprechen.`
}

export interface QuestionnaireAnswers {
  service?: string
  goal?: string
  timeline?: string
  budget?: string
}

/**
 * Turns the four answers into a ready-to-send WhatsApp message so the lead
 * arrives complete — the visitor only has to hit send.
 */
export function questionnaireWhatsappMessage(answers: QuestionnaireAnswers, name?: string) {
  const lines = [
    "Hallo Fabian! Ich komme über deinen 60-Sekunden-Check.",
    "",
    `Ich interessiere mich für: ${answers.service ?? "—"}`,
    `Mein Hauptziel: ${answers.goal ?? "—"}`,
    `Zeitrahmen: ${answers.timeline ?? "—"}`,
    `Budget: ${answers.budget ?? "—"}`,
  ]

  if (name?.trim()) {
    lines.push("", `Mein Name ist ${name.trim()}.`)
  }

  return lines.join("\n")
}

import { NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"
import { CONTACT_EMAIL } from "@/lib/contact"

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null

const TO_EMAIL = process.env.CONTACT_TO_EMAIL || CONTACT_EMAIL
// Eigene Absenderadresse statt der Kontaktadresse, damit Lead-Mails im Postfach
// sofort als Formular-Benachrichtigung erkennbar sind.
const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL || "Schuck Digital <website@schuck.digital>"

/** Shown to the visitor whenever the mail could not be handed over to Resend. */
const DELIVERY_ERROR =
  "Die Nachricht konnte gerade nicht zugestellt werden. Schreib mir bitte direkt per WhatsApp oder an " +
  `${CONTACT_EMAIL} — ich melde mich schnellstmöglich.`

function escapeHtml(value: unknown) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const {
      name,
      email,
      message,
      type = "contact",
      service,
      goal,
      timeline,
      budget,
    } = body

    if (!name || !email) {
      return NextResponse.json(
        { error: "Name und E-Mail sind erforderlich" },
        { status: 400 }
      )
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email))) {
      return NextResponse.json(
        { error: "Bitte gib eine gültige E-Mail-Adresse an." },
        { status: 400 }
      )
    }

    const isQuestionnaire = type === "questionnaire"

    // Server log doubles as a backup copy of the lead if the mail bounces later.
    console.log("[lead]", JSON.stringify({ type, name, email, service, goal, timeline, budget }))

    if (!resend) {
      console.error("[lead] RESEND_API_KEY is not set — no mail was sent.")
      return NextResponse.json({ error: DELIVERY_ERROR }, { status: 503 })
    }

    const answers = isQuestionnaire
      ? [
          ["Leistung", service],
          ["Ziel", goal],
          ["Zeitrahmen", timeline],
          ["Budget", budget],
        ]
      : []

    const html = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333;">${isQuestionnaire ? "Neuer 60-Sekunden-Check" : "Neue Kontaktanfrage"}</h2>
        <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>E-Mail:</strong> <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></p>
          ${message ? `<p><strong>Nachricht:</strong><br>${escapeHtml(message).replace(/\n/g, "<br>")}</p>` : ""}
        </div>
        ${
          answers.length
            ? `<div style="background: #eee; padding: 20px; border-radius: 8px; margin: 20px 0;">
                 <h3 style="margin-top: 0;">Fragebogen-Antworten:</h3>
                 ${answers
                   .map(([label, value]) => `<p><strong>${label}:</strong> ${escapeHtml(value || "—")}</p>`)
                   .join("")}
               </div>`
            : ""
        }
        <p style="color: #666; font-size: 12px; margin-top: 30px;">
          Automatisch gesendet von schuck.digital
        </p>
      </div>
    `

    const text = [
      isQuestionnaire ? "Neuer 60-Sekunden-Check" : "Neue Kontaktanfrage",
      "",
      `Name: ${name}`,
      `E-Mail: ${email}`,
      message ? `Nachricht: ${message}` : "",
      ...answers.map(([label, value]) => `${label}: ${value || "—"}`),
    ]
      .filter(Boolean)
      .join("\n")

    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: String(email),
      subject: isQuestionnaire ? `Neuer 60-Sek-Check: ${name}` : `Neue Kontaktanfrage: ${name}`,
      html,
      text,
    })

    if (error) {
      console.error("[lead] Resend rejected the mail:", error)
      return NextResponse.json({ error: DELIVERY_ERROR }, { status: 502 })
    }

    return NextResponse.json(
      { success: true, message: "Vielen Dank! Wir melden uns in Kürze bei dir." },
      { status: 200 }
    )
  } catch (error) {
    console.error("[lead] Error processing submission:", error)
    return NextResponse.json({ error: DELIVERY_ERROR }, { status: 500 })
  }
}

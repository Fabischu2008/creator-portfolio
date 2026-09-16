import { NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null

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

    console.log("=== NEW LEAD SUBMISSION ===")
    console.log("Type:", type)
    console.log("Name:", name)
    console.log("Email:", email)
    console.log("Message:", message || "N/A")
    if (type === "questionnaire") {
      console.log("Service:", service)
      console.log("Goal:", goal)
      console.log("Timeline:", timeline)
      console.log("Budget:", budget)
    }
    console.log("Timestamp:", new Date().toISOString())
    console.log("========================")

    if (resend && process.env.RESEND_API_KEY) {
      try {
        const isQuestionnaire = type === "questionnaire"
        const subject = isQuestionnaire
          ? `Neuer 60-Sek-Check: ${name}`
          : `Neue Kontaktanfrage: ${name}`

        let emailHtml = `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #333;">${isQuestionnaire ? "Neuer 60-Sekunden-Check" : "Neue Kontaktanfrage"}</h2>
            <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>E-Mail:</strong> <a href="mailto:${email}">${email}</a></p>
              ${message ? `<p><strong>Nachricht:</strong><br>${String(message).replace(/\n/g, "<br>")}</p>` : ""}
            </div>
        `

        if (isQuestionnaire) {
          emailHtml += `
            <div style="background: #eee; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="margin-top: 0;">Fragebogen-Antworten:</h3>
              <p><strong>Leistung:</strong> ${service || "N/A"}</p>
              <p><strong>Ziel:</strong> ${goal || "N/A"}</p>
              <p><strong>Zeitrahmen:</strong> ${timeline || "N/A"}</p>
              <p><strong>Budget:</strong> ${budget || "N/A"}</p>
            </div>
          `
        }

        emailHtml += `
            <p style="color: #666; font-size: 12px; margin-top: 30px;">
              Diese E-Mail wurde automatisch von schuck-digital.de gesendet.
            </p>
          </div>
        `

        await resend.emails.send({
          from: "Schuck Digital <onboarding@resend.dev>",
          to: "fabianschuck13@gmail.com",
          replyTo: email,
          subject,
          html: emailHtml,
        })
      } catch (emailError) {
        console.error("Error sending email:", emailError)
      }
    }

    return NextResponse.json(
      {
        success: true,
        message: "Vielen Dank! Wir melden uns in Kürze bei dir.",
      },
      { status: 200 }
    )
  } catch (error) {
    console.error("Error processing submission:", error)
    return NextResponse.json(
      { error: "Es ist ein Fehler aufgetreten. Bitte versuche es später erneut." },
      { status: 500 }
    )
  }
}

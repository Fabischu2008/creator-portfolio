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
      company, 
      phone,
      type = "contact",
      projectType,
      selectedFeatures,
      timeline,
      totalPrice,
      calculatedPrice
    } = body

    // Validate required fields
    if (!name || !email) {
      return NextResponse.json(
        { error: "Name und E-Mail sind erforderlich" },
        { status: 400 }
      )
    }

    // Log the submission
    console.log("=== NEW LEAD SUBMISSION ===")
    console.log("Type:", type)
    console.log("Name:", name)
    console.log("Email:", email)
    console.log("Company:", company || "N/A")
    console.log("Phone:", phone || "N/A")
    console.log("Message:", message || "N/A")
    if (type === "calculator") {
      console.log("Project Type:", projectType)
      console.log("Features:", selectedFeatures?.join(", ") || "N/A")
      console.log("Timeline:", timeline)
      console.log("Total Price:", totalPrice, "€")
    }
    console.log("Full Data:", JSON.stringify(body, null, 2))
    console.log("Timestamp:", new Date().toISOString())
    console.log("========================")

    // Send email if Resend API key is configured
    if (resend && process.env.RESEND_API_KEY) {
      try {
        const isCalculator = type === "calculator"
        const subject = isCalculator 
          ? `🆕 Neuer Kalkulator-Lead: ${name}${company ? ` (${company})` : ""}`
          : `📧 Neue Kontaktanfrage: ${name}`
        
        let emailHtml = `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #333;">${isCalculator ? "🆕 Neuer Kalkulator-Lead" : "📧 Neue Kontaktanfrage"}</h2>
            <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="margin-top: 0;">Kontaktdaten:</h3>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>E-Mail:</strong> <a href="mailto:${email}">${email}</a></p>
              ${company ? `<p><strong>Firma:</strong> ${company}</p>` : ""}
              ${phone ? `<p><strong>Telefon:</strong> ${phone}</p>` : ""}
              ${message ? `<p><strong>Nachricht:</strong><br>${message.replace(/\n/g, "<br>")}</p>` : ""}
            </div>
        `
        
        if (isCalculator) {
          emailHtml += `
            <div style="background: #e8f4f8; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="margin-top: 0;">Projekt-Details:</h3>
              <p><strong>Projekttyp:</strong> ${projectType || "N/A"}</p>
              ${selectedFeatures && selectedFeatures.length > 0 
                ? `<p><strong>Features:</strong> ${selectedFeatures.join(", ")}</p>` 
                : ""}
              <p><strong>Zeitrahmen:</strong> ${timeline || "N/A"}</p>
              <p><strong>Kalkulierter Preis:</strong> ${totalPrice ? totalPrice.toLocaleString("de-DE", { maximumFractionDigits: 2 }) + " €" : "N/A"}</p>
            </div>
          `
        }
        
        emailHtml += `
            <p style="color: #666; font-size: 12px; margin-top: 30px;">
              Diese E-Mail wurde automatisch von deinem Portfolio-Formular gesendet.
            </p>
          </div>
        `

        await resend.emails.send({
          from: "Portfolio <onboarding@resend.dev>", // Ändere das später zu deiner Domain
          to: "fabianschuck13@gmail.com",
          replyTo: email,
          subject: subject,
          html: emailHtml,
        })
      } catch (emailError) {
        console.error("Error sending email:", emailError)
        // Continue even if email fails
      }
    }

    return NextResponse.json(
      { 
        success: true, 
        message: "Vielen Dank für Ihre Anfrage! Wir melden uns in Kürze bei Ihnen." 
      },
      { status: 200 }
    )
  } catch (error) {
    console.error("Error processing submission:", error)
    return NextResponse.json(
      { error: "Es ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut." },
      { status: 500 }
    )
  }
}

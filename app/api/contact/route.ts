import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, message, type = "contact" } = body

    // Validate required fields
    if (!name || !email) {
      return NextResponse.json(
        { error: "Name und E-Mail sind erforderlich" },
        { status: 400 }
      )
    }

    // Log the submission (in production, you'd send email or save to database)
    console.log("=== NEW LEAD SUBMISSION ===")
    console.log("Type:", type)
    console.log("Name:", name)
    console.log("Email:", email)
    console.log("Message:", message)
    console.log("Full Data:", JSON.stringify(body, null, 2))
    console.log("Timestamp:", new Date().toISOString())
    console.log("========================")

    // In production, you could:
    // 1. Send email using Resend, SendGrid, or Nodemailer
    // 2. Save to database (PostgreSQL, MongoDB, etc.)
    // 3. Send to CRM (HubSpot, Salesforce, etc.)
    // 4. Send to email service (Mailchimp, ConvertKit, etc.)

    // For now, we'll return success
    // You can integrate email sending here later
    // Example with Resend:
    // await resend.emails.send({
    //   from: 'onboarding@resend.dev',
    //   to: 'fabianschuck13@gmail.com',
    //   subject: `New ${type === 'calculator' ? 'Calculator' : 'Contact'} Lead: ${name}`,
    //   html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Message: ${message}</p>`
    // })

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

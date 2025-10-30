import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, message, type } = body

    console.log("[v0] Contact form submission:", { name, email, phone, message, type })

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // TODO: Integrate with email service (SendGrid, Resend, etc.)
    // For now, just log the submission
    console.log("[v0] Form data would be sent to email service")

    return NextResponse.json({ success: true, message: "Message received" }, { status: 200 })
  } catch (error) {
    console.error("[v0] Contact API error:", error)
    return NextResponse.json({ error: "Failed to process request" }, { status: 500 })
  }
}

import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, date, time, service, notes } = body

    console.log("[v0] Appointment booking:", { name, email, phone, date, time, service, notes })

    // Validate required fields
    if (!name || !email || !phone || !date || !time) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // TODO: Integrate with calendar service and email notifications
    console.log("[v0] Appointment would be saved and confirmation email sent")

    return NextResponse.json({ success: true, message: "Appointment request received" }, { status: 200 })
  } catch (error) {
    console.error("[v0] Appointment API error:", error)
    return NextResponse.json({ error: "Failed to process request" }, { status: 500 })
  }
}

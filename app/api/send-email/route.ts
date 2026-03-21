import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json()

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    console.log("[v0] Form submission received:", { name, email, subject, message })

    return NextResponse.json(
      {
        success: true,
        message: "Thank you! Your message has been received. I'll get back to you soon!",
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("[v0] Form submission error:", error)
    return NextResponse.json({ error: "Failed to process your request. Please try again." }, { status: 500 })
  }
}

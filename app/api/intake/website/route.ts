import { NextResponse } from "next/server";

// TODO: Wire up email notification (e.g., Resend, Mailgun) to send
// submissions to hello@gradydigital.com

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Basic required field check
    const required = [
      "firstName",
      "lastName",
      "businessName",
      "email",
      "phone",
      "industry",
      "bizDesc",
      "location",
      "primaryGoal",
      "targetCustomer",
      "logoStatus",
      "timeline",
      "budget",
    ];

    const missing = required.filter(
      (field) => !body[field] || (typeof body[field] === "string" && !body[field].trim())
    );

    if (missing.length > 0) {
      return NextResponse.json(
        { success: false, error: "Missing required fields", fields: missing },
        { status: 400 }
      );
    }

    // Validate email format
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)) {
      return NextResponse.json(
        { success: false, error: "Invalid email format" },
        { status: 400 }
      );
    }

    console.log("=== NEW WEBSITE INTAKE SUBMISSION ===");
    console.log(JSON.stringify(body, null, 2));
    console.log("=====================================");

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { success: false, error: "Invalid request body" },
      { status: 400 }
    );
  }
}

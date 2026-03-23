import { NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(1),
  businessName: z.string().min(1),
  email: z.string().email(),
  phone: z.string().optional(),
  website: z.string().optional(),
  services: z.array(z.string()).optional(),
  message: z.string().optional(),
  privacy: z.literal(true),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = contactSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { success: false, errors: result.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    // TODO: Wire up email delivery (e.g., Resend, Mailgun)
    console.log("Contact form submission:", result.data);

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { success: false, errors: { _form: ["Invalid request"] } },
      { status: 400 }
    );
  }
}

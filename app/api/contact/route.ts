import { NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";

function getResend() {
  if (process.env.RESEND_API_KEY) {
    return new Resend(process.env.RESEND_API_KEY);
  }
  return null;
}

const contactSchema = z.object({
  name: z.string().min(1),
  businessName: z.string().min(1),
  email: z.string().email(),
  phone: z.string().optional(),
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

    const data = result.data;

    // Send notification email to Luke
    const resend = getResend();
    if (resend) {
      await resend.emails.send({
        from: "Grady Digital <notifications@send.gradydigital.com>",
        to: "luke@gradydigital.com",
        replyTo: data.email,
        subject: `New AI Audit Request: ${data.businessName} (${data.name})`,
        html: `
          <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;max-width:600px;margin:0 auto;">
            <div style="background:#070612;padding:24px 24px 16px;border-radius:12px 12px 0 0;">
              <h1 style="color:#ffffff;font-size:20px;margin:0;">New Contact Form Submission</h1>
              <p style="color:rgba(255,255,255,0.6);font-size:14px;margin:8px 0 0;">${data.businessName} — ${data.name}</p>
            </div>
            <div style="padding:16px 24px 24px;background:#ffffff;border:1px solid #e5e7eb;border-top:none;border-radius:0 0 12px 12px;">
              <table style="width:100%;border-collapse:collapse;">
                <tr><td style="padding:8px 0;color:#6b7280;font-size:13px;width:140px;">Name</td><td style="padding:8px 0;color:#111827;font-size:13px;">${data.name}</td></tr>
                <tr><td style="padding:8px 0;color:#6b7280;font-size:13px;">Business</td><td style="padding:8px 0;color:#111827;font-size:13px;">${data.businessName}</td></tr>
                <tr><td style="padding:8px 0;color:#6b7280;font-size:13px;">Email</td><td style="padding:8px 0;color:#111827;font-size:13px;"><a href="mailto:${data.email}">${data.email}</a></td></tr>
                ${data.phone ? `<tr><td style="padding:8px 0;color:#6b7280;font-size:13px;">Phone</td><td style="padding:8px 0;color:#111827;font-size:13px;">${data.phone}</td></tr>` : ""}
              </table>
              <div style="margin-top:24px;padding-top:16px;border-top:1px solid #e5e7eb;text-align:center;">
                <a href="mailto:${data.email}" style="display:inline-block;background:#070612;color:#ffffff;padding:10px 24px;border-radius:999px;text-decoration:none;font-size:14px;font-weight:500;">Reply to ${data.name}</a>
              </div>
            </div>
          </div>
        `,
      });
    }

    // Always log as backup
    console.log("Contact form submission:", data);

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { success: false, errors: { _form: ["Invalid request"] } },
      { status: 400 }
    );
  }
}

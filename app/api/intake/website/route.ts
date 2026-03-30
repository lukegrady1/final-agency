import { NextResponse } from "next/server";
import { Resend } from "resend";

function getResend() {
  if (process.env.RESEND_API_KEY) {
    return new Resend(process.env.RESEND_API_KEY);
  }
  return null;
}

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

    // Build email body
    const emailHtml = buildEmailHtml(body);

    // Send notification email to Luke
    const resend = getResend();
    if (resend) {
      await resend.emails.send({
        from: "Grady Digital <notifications@send.gradydigital.com>",
        to: "luke@gradydigital.com",
        replyTo: body.email,
        subject: `New Website Intake: ${body.businessName} — ${body.firstName} ${body.lastName}`,
        html: emailHtml,
      });
    }

    // Always log to console as backup
    console.log("=== NEW WEBSITE INTAKE SUBMISSION ===");
    console.log(JSON.stringify(body, null, 2));
    console.log("=====================================");

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Intake submission error:", error);
    return NextResponse.json(
      { success: false, error: "Invalid request body" },
      { status: 400 }
    );
  }
}

function buildEmailHtml(data: Record<string, string>): string {
  const section = (title: string, rows: [string, string][]) => {
    const filtered = rows.filter(([, v]) => v && v.trim());
    if (filtered.length === 0) return "";
    return `
      <tr><td colspan="2" style="padding:16px 0 8px;font-size:14px;font-weight:600;color:#6c6af6;border-bottom:1px solid #e5e7eb;">${title}</td></tr>
      ${filtered
        .map(
          ([label, value]) =>
            `<tr><td style="padding:8px 0;color:#6b7280;font-size:13px;width:180px;vertical-align:top;">${label}</td><td style="padding:8px 0;color:#111827;font-size:13px;">${value.replace(/\n/g, "<br>")}</td></tr>`
        )
        .join("")}
    `;
  };

  return `
    <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;max-width:600px;margin:0 auto;">
      <div style="background:#070612;padding:24px 24px 16px;border-radius:12px 12px 0 0;">
        <h1 style="color:#ffffff;font-size:20px;margin:0;">New Website Intake Brief</h1>
        <p style="color:rgba(255,255,255,0.6);font-size:14px;margin:8px 0 0;">${data.businessName} — ${data.firstName} ${data.lastName}</p>
      </div>
      <div style="padding:16px 24px 24px;background:#ffffff;border:1px solid #e5e7eb;border-top:none;border-radius:0 0 12px 12px;">
        <table style="width:100%;border-collapse:collapse;">
          ${section("Contact Information", [
            ["Name", `${data.firstName} ${data.lastName}`],
            ["Business", data.businessName],
            ["Email", `<a href="mailto:${data.email}">${data.email}</a>`],
            ["Phone", data.phone],
            ["Preferred Contact", data.contactPref],
          ])}
          ${section("Business Overview", [
            ["Industry", data.industry],
            ["Location", data.location],
            ["Years in Business", data.yearsInBiz],
            ["Description", data.bizDesc],
            ["Current Website", data.currentWebsite ? `<a href="${data.currentWebsite}">${data.currentWebsite}</a>` : "None"],
            ["Social Links", data.socialLinks],
          ])}
          ${section("Project Goals", [
            ["Primary Goal", data.primaryGoal],
            ["Target Customer", data.targetCustomer],
            ["Primary CTA", data.primaryCTA],
            ["Pain Point", data.painPoint],
            ["Competitors", data.competitors],
          ])}
          ${section("Design Preferences", [
            ["Vibe", data.vibes],
            ["Color Preference", data.colorPref],
            ["Brand Colors", [data.brandColor1, data.brandColor2].filter(Boolean).join(" / ")],
            ["Sites They Like", data.sitesLike],
            ["Sites They Dislike", data.sitesDislike],
            ["Design Notes", data.designNotes],
          ])}
          ${section("Scope of Work", [
            ["Pages", data.pages],
            ["Features", data.features],
            ["# of Services", data.numServices],
            ["Other Requirements", data.otherScope],
          ])}
          ${section("Content & Assets", [
            ["Logo", data.logoStatus],
            ["Photos", data.photoStatus],
            ["Domain", data.domainName || data.domainStatus],
            ["Hosting", data.hostingStatus],
            ["Testimonials", data.reviewStatus],
            ["Asset Notes", data.assetNotes],
          ])}
          ${section("Timeline & Budget", [
            ["Timeline", data.timeline],
            ["Launch Event", data.launchEvent],
            ["Budget", data.budget],
            ["Urgency", data.urgency ? `${data.urgency} / 5` : ""],
            ["Referral Source", data.referralSource],
            ["Additional Notes", data.additionalNotes],
          ])}
        </table>
        <div style="margin-top:24px;padding-top:16px;border-top:1px solid #e5e7eb;text-align:center;">
          <a href="mailto:${data.email}" style="display:inline-block;background:#070612;color:#ffffff;padding:10px 24px;border-radius:999px;text-decoration:none;font-size:14px;font-weight:500;">Reply to ${data.firstName}</a>
        </div>
      </div>
    </div>
  `;
}

const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  WidthType, ShadingType, AlignmentType, BorderStyle, HeadingLevel,
  PageSize, convertInchesToTwip, LevelFormat,
} = require("docx");
const fs = require("fs");
const path = require("path");

// ─── CONFIG ───
const CLIENT_NAME = process.argv[2] || "[CLIENT NAME]";
const PROJECT_TYPE = process.argv[3] || "Website Build";

// ─── COLORS ───
const DEEP_NAVY = "0A0F2E";
const ACCENT = "6C6AF6";
const LIGHT_NAVY = "E8EAF6";
const LIGHT_ACCENT = "F0EFFF";
const GRAY = "4A5568";
const WHITE = "FFFFFF";
const BLACK = "1A202C";

// ─── NUMBERING ───
const BULLET_CONFIG = {
  config: [
    {
      reference: "bullet-list",
      levels: [
        {
          level: 0,
          format: LevelFormat.BULLET,
          text: "\u2022",
          alignment: AlignmentType.LEFT,
          style: { paragraph: { indent: { left: 720, hanging: 360 } } },
        },
      ],
    },
  ],
};

// ─── HELPERS ───
function sectionHeader(text) {
  return [
    new Paragraph({ spacing: { before: 400 } }),
    new Paragraph({
      children: [
        new TextRun({
          text: text.toUpperCase(),
          bold: true,
          font: "Arial",
          size: 22,
          color: DEEP_NAVY,
        }),
      ],
      border: {
        bottom: { style: BorderStyle.SINGLE, size: 6, color: ACCENT },
      },
      spacing: { after: 200 },
    }),
  ];
}

function subHeader(text) {
  return new Paragraph({
    children: [
      new TextRun({
        text,
        bold: true,
        font: "Arial",
        size: 22,
        color: BLACK,
      }),
    ],
    spacing: { before: 240, after: 120 },
  });
}

function bullet(main, sub) {
  const children = [
    new TextRun({ text: main, font: "Arial", size: 20, color: BLACK }),
  ];
  if (sub) {
    children.push(
      new TextRun({ text: ` — ${sub}`, font: "Arial", size: 20, color: GRAY, italics: true })
    );
  }
  return new Paragraph({
    children,
    numbering: { reference: "bullet-list", level: 0 },
    spacing: { after: 80 },
  });
}

function inputLine(label) {
  return new Paragraph({
    children: [
      new TextRun({ text: `${label}: `, bold: true, font: "Arial", size: 20, color: BLACK }),
      new TextRun({ text: "________________________________________", font: "Arial", size: 20, color: GRAY }),
    ],
    spacing: { after: 120 },
    indent: { left: 720 },
  });
}

function divider() {
  return new Paragraph({
    border: {
      bottom: { style: BorderStyle.SINGLE, size: 2, color: "D1D5DB" },
    },
    spacing: { before: 200, after: 200 },
  });
}

function overviewTable() {
  const cellWidth = 4680;
  return new Table({
    columnWidths: [cellWidth, cellWidth],
    rows: [
      new TableRow({
        children: [
          new TableCell({
            children: [new Paragraph({
              children: [new TextRun({ text: "CLIENT", font: "Arial", size: 16, bold: true, color: DEEP_NAVY })],
            })],
            width: { size: cellWidth, type: WidthType.DXA },
            shading: { type: ShadingType.CLEAR, fill: LIGHT_NAVY },
            borders: noBorders(),
          }),
          new TableCell({
            children: [new Paragraph({
              children: [new TextRun({ text: CLIENT_NAME, font: "Arial", size: 20, color: BLACK })],
            })],
            width: { size: cellWidth, type: WidthType.DXA },
            shading: { type: ShadingType.CLEAR, fill: LIGHT_ACCENT },
            borders: noBorders(),
          }),
        ],
      }),
      new TableRow({
        children: [
          new TableCell({
            children: [new Paragraph({
              children: [new TextRun({ text: "PROJECT TYPE", font: "Arial", size: 16, bold: true, color: DEEP_NAVY })],
            })],
            width: { size: cellWidth, type: WidthType.DXA },
            shading: { type: ShadingType.CLEAR, fill: LIGHT_NAVY },
            borders: noBorders(),
          }),
          new TableCell({
            children: [new Paragraph({
              children: [new TextRun({ text: PROJECT_TYPE, font: "Arial", size: 20, color: BLACK })],
            })],
            width: { size: cellWidth, type: WidthType.DXA },
            shading: { type: ShadingType.CLEAR, fill: LIGHT_ACCENT },
            borders: noBorders(),
          }),
        ],
      }),
    ],
    width: { size: 9360, type: WidthType.DXA },
  });
}

function noBorders() {
  const none = { style: BorderStyle.NONE, size: 0 };
  return { top: none, bottom: none, left: none, right: none };
}

// ─── DOCUMENT ───
const doc = new Document({
  numbering: BULLET_CONFIG,
  sections: [
    {
      properties: {
        page: {
          size: { width: 12240, height: 15840 },
          margin: { top: 0, right: convertInchesToTwip(1), bottom: convertInchesToTwip(1), left: convertInchesToTwip(1) },
        },
      },
      children: [
        // ── Header Block ──
        new Paragraph({
          children: [
            new TextRun({ text: "Client Onboarding Form", bold: true, font: "Arial", size: 36, color: WHITE }),
          ],
          shading: { type: ShadingType.CLEAR, fill: DEEP_NAVY },
          spacing: { before: 400, after: 0 },
          indent: { left: convertInchesToTwip(0.5) },
        }),
        new Paragraph({
          children: [
            new TextRun({ text: `${CLIENT_NAME} | ${PROJECT_TYPE}`, font: "Arial", size: 22, color: "9E9CF8" }),
          ],
          shading: { type: ShadingType.CLEAR, fill: DEEP_NAVY },
          spacing: { before: 80, after: 400 },
          indent: { left: convertInchesToTwip(0.5) },
        }),
        // Gold accent bar
        new Paragraph({
          border: { bottom: { style: BorderStyle.SINGLE, size: 12, color: ACCENT } },
          spacing: { after: 300 },
        }),

        // ── Overview ──
        overviewTable(),

        // ═══════════════════════════════════════
        // SECTION 1: Domain & Hosting
        // ═══════════════════════════════════════
        ...sectionHeader("Domain & Hosting Access"),
        new Paragraph({
          children: [new TextRun({ text: "We need this to connect your domain and deploy your website.", font: "Arial", size: 20, color: GRAY, italics: true })],
          spacing: { after: 200 },
        }),

        subHeader("Domain Registrar"),
        bullet("Where is your domain registered?", "e.g. GoDaddy, Namecheap, Google Domains"),
        inputLine("Registrar"),
        inputLine("Login URL"),
        inputLine("Username / Email"),
        inputLine("Password"),

        subHeader("Hosting Provider (if applicable)"),
        bullet("Only needed if you have existing hosting we need to access"),
        inputLine("Provider"),
        inputLine("Login URL"),
        inputLine("Username / Email"),
        inputLine("Password"),

        subHeader("DNS Management"),
        bullet("If DNS is managed separately from the registrar"),
        inputLine("DNS Provider (e.g. Cloudflare)"),
        inputLine("Login URL"),
        inputLine("Username / Email"),
        inputLine("Password"),

        divider(),

        // ═══════════════════════════════════════
        // SECTION 2: Social Media
        // ═══════════════════════════════════════
        ...sectionHeader("Social Media Accounts"),
        new Paragraph({
          children: [new TextRun({ text: "Only needed if we're linking or embedding social feeds on your site.", font: "Arial", size: 20, color: GRAY, italics: true })],
          spacing: { after: 200 },
        }),

        inputLine("Facebook Page URL"),
        inputLine("Facebook Admin Email"),
        inputLine("Instagram Handle"),
        inputLine("Instagram Login Email"),
        inputLine("Instagram Password"),
        inputLine("LinkedIn Page URL"),
        inputLine("Other Social URLs"),

        divider(),

        // ═══════════════════════════════════════
        // SECTION 3: Design Assets
        // ═══════════════════════════════════════
        ...sectionHeader("Design Assets & Branding"),
        new Paragraph({
          children: [new TextRun({ text: "If you don't have any of these, or you want us to handle the design, just put N/A.", font: "Arial", size: 20, color: GRAY, italics: true })],
          spacing: { after: 200 },
        }),

        subHeader("Logo Files"),
        bullet("Please provide your logo in as many formats as possible"),
        bullet("Preferred formats: SVG (vector), PNG (transparent background), AI/EPS"),
        inputLine("How will you send logo files?"),
        bullet("Delivery options: Email or Google Drive"),

        subHeader("Brand Colors"),
        inputLine("Primary color (hex code or name)"),
        inputLine("Secondary color"),
        inputLine("Accent color"),

        subHeader("Fonts"),
        inputLine("Primary font name"),
        inputLine("Secondary font name"),
        bullet("Please provide font files if they are custom/purchased"),

        subHeader("Photography"),
        bullet("Provide any photos you want used on the site"),
        bullet("Include team headshots, office/storefront photos, project photos"),
        bullet("Please include all pictures in a zip file and email them to us"),

        divider(),

        // ═══════════════════════════════════════
        // SECTION 4: Third-Party Integrations
        // ═══════════════════════════════════════
        ...sectionHeader("Third-Party Integrations & Tools"),
        new Paragraph({
          children: [new TextRun({ text: "List any tools or services that need to connect to your website. If you don't use any of these, just put N/A.", font: "Arial", size: 20, color: GRAY, italics: true })],
          spacing: { after: 200 },
        }),

        bullet("Booking / scheduling tool", "e.g. Calendly, Acuity, ServiceTitan"),
        inputLine("Tool name"),
        inputLine("Login URL"),
        inputLine("Username / Email"),
        inputLine("Password or embed code"),

        bullet("CRM system", "e.g. HubSpot, Jobber, Housecall Pro"),
        inputLine("CRM name"),
        inputLine("Login credentials or API key"),

        bullet("Payment processor", "e.g. Stripe, Square, PayPal"),
        inputLine("Processor name"),
        inputLine("Account email"),

        bullet("Review platform", "e.g. Google Reviews widget, Yelp"),
        inputLine("Review platform URL"),

        bullet("Other integrations"),
        inputLine("Tool 1"),
        inputLine("Tool 2"),

        divider(),

        // ═══════════════════════════════════════
        // SECTION 5: Existing Site (if migrating)
        // ═══════════════════════════════════════
        ...sectionHeader("Existing Website Access (If Migrating)"),
        new Paragraph({
          children: [new TextRun({ text: "Only fill this out if you have an existing site we need to pull content from or redirect.", font: "Arial", size: 20, color: GRAY, italics: true })],
          spacing: { after: 200 },
        }),

        inputLine("Current website URL"),
        inputLine("CMS platform (WordPress, Wix, Squarespace, etc.)"),
        inputLine("CMS admin login URL"),
        inputLine("Username / Email"),
        inputLine("Password"),
        bullet("Are there any pages or content you want to keep as-is?"),
        inputLine("Pages to preserve"),
        bullet("Do you need email addresses migrated?"),
        inputLine("Yes / No — details"),

        divider(),

        // ═══════════════════════════════════════
        // SECTION 6: Notes
        // ═══════════════════════════════════════
        ...sectionHeader("Additional Notes"),
        new Paragraph({
          children: [new TextRun({ text: "Anything else we should know that wasn't covered above.", font: "Arial", size: 20, color: GRAY, italics: true })],
          spacing: { after: 200 },
        }),
        inputLine("Notes"),
        new Paragraph({ spacing: { after: 100 } }),
        inputLine(""),
        new Paragraph({ spacing: { after: 100 } }),
        inputLine(""),

        // ── Footer ──
        new Paragraph({ spacing: { before: 600 } }),
        new Paragraph({
          children: [
            new TextRun({ text: `Prepared for ${CLIENT_NAME}`, font: "Arial", size: 18, color: GRAY }),
          ],
          border: { top: { style: BorderStyle.SINGLE, size: 2, color: "D1D5DB" } },
          spacing: { before: 200 },
          alignment: AlignmentType.CENTER,
        }),
        new Paragraph({
          children: [
            new TextRun({ text: "VC Solutions | keeganzoller@vc-solutions.net", font: "Arial", size: 16, color: GRAY }),
          ],
          alignment: AlignmentType.CENTER,
          spacing: { before: 80 },
        }),
      ],
    },
  ],
});

// ─── GENERATE ───
const outputPath = path.join(__dirname, "..", "outputs", `${CLIENT_NAME.replace(/[^a-zA-Z0-9]/g, "_")}_Onboarding.docx`);
Packer.toBuffer(doc).then((buffer) => {
  fs.writeFileSync(outputPath, buffer);
  console.log(`Done — ${outputPath}`);
});

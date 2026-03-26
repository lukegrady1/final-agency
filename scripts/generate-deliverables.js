const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  WidthType, ShadingType, AlignmentType, BorderStyle, LevelFormat,
  PageSize, convertInchesToTwip, ImageRun,
} = require("docx");
const fs = require("fs");
const path = require("path");

// ─── CONFIG ───
const CLIENT_NAME = process.argv[2] || "[CLIENT NAME]";
const PROJECT_TYPE = process.argv[3] || "Website Build";
const SCREENSHOT_PATH = process.argv[4] || "none";

// ─── COLORS ───
const GREEN = "1B4332";
const GOLD = "C9A84C";
const LIGHT_GREEN = "E8F0EC";
const LIGHT_GOLD = "FDF6E3";
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
          color: GREEN,
        }),
      ],
      border: {
        bottom: { style: BorderStyle.SINGLE, size: 6, color: GOLD },
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

function bodyText(text) {
  return new Paragraph({
    children: [new TextRun({ text, font: "Arial", size: 20, color: GRAY })],
    spacing: { after: 120 },
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

function noBorders() {
  const none = { style: BorderStyle.NONE, size: 0 };
  return { top: none, bottom: none, left: none, right: none };
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
              children: [new TextRun({ text: "CLIENT", font: "Arial", size: 16, bold: true, color: GREEN })],
            })],
            width: { size: cellWidth, type: WidthType.DXA },
            shading: { type: ShadingType.CLEAR, fill: LIGHT_GREEN },
            borders: noBorders(),
          }),
          new TableCell({
            children: [new Paragraph({
              children: [new TextRun({ text: CLIENT_NAME, font: "Arial", size: 20, color: BLACK })],
            })],
            width: { size: cellWidth, type: WidthType.DXA },
            shading: { type: ShadingType.CLEAR, fill: LIGHT_GOLD },
            borders: noBorders(),
          }),
        ],
      }),
      new TableRow({
        children: [
          new TableCell({
            children: [new Paragraph({
              children: [new TextRun({ text: "PROJECT TYPE", font: "Arial", size: 16, bold: true, color: GREEN })],
            })],
            width: { size: cellWidth, type: WidthType.DXA },
            shading: { type: ShadingType.CLEAR, fill: LIGHT_GREEN },
            borders: noBorders(),
          }),
          new TableCell({
            children: [new Paragraph({
              children: [new TextRun({ text: PROJECT_TYPE, font: "Arial", size: 20, color: BLACK })],
            })],
            width: { size: cellWidth, type: WidthType.DXA },
            shading: { type: ShadingType.CLEAR, fill: LIGHT_GOLD },
            borders: noBorders(),
          }),
        ],
      }),
    ],
    width: { size: 9360, type: WidthType.DXA },
  });
}

// ─── Deliverables Table ───
function deliverablesTable(rows) {
  const col1 = 3200;
  const col2 = 3200;
  const col3 = 2960;

  const headerRow = new TableRow({
    children: [
      new TableCell({
        children: [new Paragraph({
          children: [new TextRun({ text: "DELIVERABLE", font: "Arial", size: 16, bold: true, color: WHITE })],
        })],
        width: { size: col1, type: WidthType.DXA },
        shading: { type: ShadingType.CLEAR, fill: GREEN },
        borders: noBorders(),
      }),
      new TableCell({
        children: [new Paragraph({
          children: [new TextRun({ text: "DELIVERY METHOD", font: "Arial", size: 16, bold: true, color: WHITE })],
        })],
        width: { size: col2, type: WidthType.DXA },
        shading: { type: ShadingType.CLEAR, fill: GREEN },
        borders: noBorders(),
      }),
      new TableCell({
        children: [new Paragraph({
          children: [new TextRun({ text: "ESTIMATED TIMELINE", font: "Arial", size: 16, bold: true, color: WHITE })],
        })],
        width: { size: col3, type: WidthType.DXA },
        shading: { type: ShadingType.CLEAR, fill: GREEN },
        borders: noBorders(),
      }),
    ],
  });

  const dataRows = rows.map((row, i) => {
    const fill = i % 2 === 0 ? LIGHT_GREEN : LIGHT_GOLD;
    return new TableRow({
      children: [
        new TableCell({
          children: [new Paragraph({
            children: [new TextRun({ text: row[0], font: "Arial", size: 20, color: BLACK })],
          })],
          width: { size: col1, type: WidthType.DXA },
          shading: { type: ShadingType.CLEAR, fill },
          borders: noBorders(),
        }),
        new TableCell({
          children: [new Paragraph({
            children: [new TextRun({ text: row[1], font: "Arial", size: 20, color: GRAY })],
          })],
          width: { size: col2, type: WidthType.DXA },
          shading: { type: ShadingType.CLEAR, fill },
          borders: noBorders(),
        }),
        new TableCell({
          children: [new Paragraph({
            children: [new TextRun({ text: row[2], font: "Arial", size: 20, color: GRAY })],
          })],
          width: { size: col3, type: WidthType.DXA },
          shading: { type: ShadingType.CLEAR, fill },
          borders: noBorders(),
        }),
      ],
    });
  });

  return new Table({
    columnWidths: [col1, col2, col3],
    rows: [headerRow, ...dataRows],
    width: { size: 9360, type: WidthType.DXA },
  });
}

// ─── BUILD SECTIONS ───
const children = [
  // ── Header Block ──
  new Paragraph({
    children: [],
    shading: { type: ShadingType.CLEAR, fill: GREEN },
    spacing: { before: 0, after: 0 },
  }),
  new Paragraph({
    children: [
      new TextRun({ text: "Client Deliverables", bold: true, font: "Arial", size: 36, color: WHITE }),
    ],
    shading: { type: ShadingType.CLEAR, fill: GREEN },
    spacing: { before: 400, after: 0 },
    indent: { left: convertInchesToTwip(0.5) },
  }),
  new Paragraph({
    children: [
      new TextRun({ text: `${CLIENT_NAME} | ${PROJECT_TYPE}`, font: "Arial", size: 22, color: "A7C4A0" }),
    ],
    shading: { type: ShadingType.CLEAR, fill: GREEN },
    spacing: { before: 80, after: 400 },
    indent: { left: convertInchesToTwip(0.5) },
  }),
  // Gold accent bar
  new Paragraph({
    border: { bottom: { style: BorderStyle.SINGLE, size: 12, color: GOLD } },
    spacing: { after: 300 },
  }),

  // ── Overview ──
  overviewTable(),

  // ═══════════════════════════════════════
  // SECTION 1: What's Included
  // ═══════════════════════════════════════
  ...sectionHeader("What's Included"),

  subHeader("Design & Development"),
  bullet("Custom website design", "unique to your brand, not a template"),
  bullet("Mobile-responsive development", "looks great on all devices"),
  bullet("Performance optimization", "fast load times, optimized images"),
  bullet("Cross-browser testing", "Chrome, Safari, Firefox, Edge"),
  bullet("SSL certificate setup", "secure HTTPS connection"),

  subHeader("Content Management"),
  bullet("Content population", "all provided text, images, and media added to the site"),
  bullet("SEO-optimized page titles and meta descriptions"),
  bullet("Image optimization and alt text"),
  bullet("Internal linking structure"),

  subHeader("Page Breakdown"),
  bodyText("Pages will be determined based on your intake form. Common pages include:"),
  bullet("Homepage"),
  bullet("About / Our Story"),
  bullet("Services overview + individual service pages"),
  bullet("Contact page with form"),
  bullet("FAQ"),
  bullet("Blog (if applicable)"),
  bullet("For municipalities: Departments, Meeting Minutes, News/Announcements, Events"),

  subHeader("Technical Setup"),
  bullet("Domain connection and DNS configuration"),
  bullet("Google Analytics 4 installation"),
  bullet("Google Search Console verification"),
  bullet("Google Business Profile linking (if applicable)"),
  bullet("Contact form with email notifications"),
  bullet("XML sitemap and robots.txt"),
  bullet("Schema markup for local SEO"),

  divider(),

  // ═══════════════════════════════════════
  // SECTION 2: Deliverables Schedule
  // ═══════════════════════════════════════
  ...sectionHeader("Deliverables Schedule"),
  bodyText("Below is the expected timeline for each major deliverable. Dates will be confirmed after our kickoff call."),

  deliverablesTable([
    ["Onboarding & kickoff call", "Zoom / Google Meet", "Week 1"],
    ["Sitemap & wireframes", "Shared via email / Google Drive", "Week 1"],
    ["Homepage design mockup", "Shared via Figma or live preview", "Week 2"],
    ["Interior page designs", "Shared via Figma or live preview", "Week 2"],
    ["Client review & revisions", "Video walkthrough + feedback", "Week 2-3"],
    ["Full site development", "Staged on preview URL", "Week 3"],
    ["Content population", "On staged site", "Week 3"],
    ["Final review & revisions", "Video walkthrough + feedback", "Week 3-4"],
    ["Launch", "Live on your domain", "Week 4"],
    ["Post-launch QA & fixes", "Direct support", "Week 4-5"],
    ["Analytics & SEO report", "Email / PDF", "Week 6"],
  ]),

  divider(),

  // ═══════════════════════════════════════
  // SECTION 3: Communication
  // ═══════════════════════════════════════
  ...sectionHeader("Communication & Review Process"),
  bullet("Primary contact: Luke Grady", "luke@gradydigital.com"),
  bullet("Response time: within 24 hours on business days"),
  bullet("Design reviews will include a video walkthrough of the site"),
  bullet("You'll have a preview link to review the site before launch"),
  bullet("Two rounds of revisions are included per design phase"),
  bullet("Additional revisions are available at an hourly rate"),

  divider(),

  // ═══════════════════════════════════════
  // SECTION 4: What We Need From You
  // ═══════════════════════════════════════
  ...sectionHeader("What We Need From You"),
  bodyText("To stay on schedule, we'll need the following from you:"),
  bullet("Completed onboarding form", "domain, hosting, and account credentials"),
  bullet("Logo files", "SVG or high-res PNG preferred"),
  bullet("Brand colors and fonts", "if you have brand guidelines"),
  bullet("Photography / images", "team photos, storefront, project photos"),
  bullet("Written content", "or bullet points for us to write from"),
  bullet("Testimonials / reviews", "with permission to publish"),
  bullet("Timely feedback on design mockups", "within 2-3 business days"),

  divider(),

  // ═══════════════════════════════════════
  // SECTION 5: Post-Launch
  // ═══════════════════════════════════════
  ...sectionHeader("Post-Launch Support"),
  bullet("30-day bug fix guarantee", "any issues found after launch are fixed free of charge"),
  bullet("Monthly maintenance available", "updates, backups, security, content changes"),
  bullet("Analytics review at 30 days", "initial performance report and recommendations"),
  bullet("Ongoing SEO and content support available", "ask about monthly plans"),

  divider(),

  // ═══════════════════════════════════════
  // SECTION 6: Terms
  // ═══════════════════════════════════════
  ...sectionHeader("Agreement & Terms"),
  bullet("No long-term contracts", "cancel anytime with 30 days notice"),
  bullet("All website files and content are owned by you upon full payment"),
  bullet("This document outlines expected deliverables, not a binding contract"),
  bullet("Final scope and pricing will be confirmed in a separate agreement"),
];

// ── Optional Screenshot ──
if (SCREENSHOT_PATH !== "none" && fs.existsSync(SCREENSHOT_PATH)) {
  const imageBuffer = fs.readFileSync(SCREENSHOT_PATH);
  children.push(
    new Paragraph({ spacing: { before: 400 } }),
    ...sectionHeader("Preview"),
    new Paragraph({
      children: [
        new ImageRun({
          data: imageBuffer,
          transformation: { width: 600, height: 400 },
          type: "png",
        }),
      ],
      alignment: AlignmentType.CENTER,
    }),
    new Paragraph({
      children: [
        new TextRun({ text: "Site preview screenshot", font: "Arial", size: 16, color: GRAY, italics: true }),
      ],
      alignment: AlignmentType.CENTER,
      spacing: { before: 80 },
    })
  );
}

// ── Footer ──
children.push(
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
      new TextRun({ text: "Grady Digital | hello@gradydigital.com", font: "Arial", size: 16, color: GRAY }),
    ],
    alignment: AlignmentType.CENTER,
    spacing: { before: 80 },
  })
);

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
      children,
    },
  ],
});

// ─── GENERATE ───
const outputPath = path.join(__dirname, "..", "outputs", `${CLIENT_NAME.replace(/[^a-zA-Z0-9]/g, "_")}_Deliverables.docx`);
Packer.toBuffer(doc).then((buffer) => {
  fs.writeFileSync(outputPath, buffer);
  console.log(`Done — ${outputPath}`);
});

"use client";

import { useState, useCallback } from "react";
import { CheckCircle2, ArrowRight, ArrowLeft, Copy, Check } from "lucide-react";
import Link from "next/link";
import "../app/intake/website/funnel.css";

const TOTAL_STEPS = 7;

interface FormData {
  firstName: string;
  lastName: string;
  businessName: string;
  email: string;
  phone: string;
  contactPref: string;
  industry: string;
  bizDesc: string;
  location: string;
  yearsInBiz: string;
  hasWebsite: string;
  currentWebsite: string;
  socialLinks: string;
  primaryGoal: string;
  targetCustomer: string;
  primaryCTA: string;
  painPoint: string;
  competitors: string;
  vibes: string[];
  colorPref: string;
  brandColor1: string;
  brandColor2: string;
  sitesLike: string;
  sitesDislike: string;
  designNotes: string;
  pages: string[];
  features: string[];
  numServices: string;
  otherScope: string;
  logoStatus: string;
  photoStatus: string;
  copyStatus: string;
  domainStatus: string;
  domainName: string;
  hostingStatus: string;
  reviewStatus: string;
  assetNotes: string;
  timeline: string;
  launchEvent: string;
  budget: string;
  referralSource: string;
  additionalNotes: string;
  urgency: string;
}

const initialFormData: FormData = {
  firstName: "", lastName: "", businessName: "", email: "", phone: "",
  contactPref: "", industry: "", bizDesc: "", location: "", yearsInBiz: "",
  hasWebsite: "", currentWebsite: "", socialLinks: "", primaryGoal: "",
  targetCustomer: "", primaryCTA: "", painPoint: "", competitors: "",
  vibes: [], colorPref: "", brandColor1: "", brandColor2: "", sitesLike: "",
  sitesDislike: "", designNotes: "", pages: [], features: [], numServices: "",
  otherScope: "", logoStatus: "", photoStatus: "", copyStatus: "",
  domainStatus: "", domainName: "", hostingStatus: "", reviewStatus: "",
  assetNotes: "", timeline: "", launchEvent: "", budget: "", referralSource: "",
  additionalNotes: "", urgency: "",
};

type Errors = Record<string, string>;

const INDUSTRY_OPTIONS = [
  "HVAC", "Plumbing", "Electrical", "Landscaping / Lawn Care",
  "Pressure Washing", "Cleaning Services", "Roofing", "Painting",
  "General Contracting", "Pest Control", "Salon / Nail Salon / Spa",
  "Restaurant / Food Service", "Medical / Dental", "Legal Services",
  "Real Estate", "Fitness / Personal Training", "Trucking / Transportation",
  "Auto Repair / Detailing", "Event Planning / Entertainment",
  "Retail / E-Commerce", "Municipality / Town Government",
  "Other (describe below)",
];

const PAGE_OPTIONS = [
  "Home", "About Us", "Services", "Individual Service Pages", "Contact",
  "Gallery / Portfolio", "Blog", "Testimonials / Reviews", "FAQ",
  "Pricing", "Careers / Hiring", "Privacy / Legal Pages",
  "Departments / Boards", "Meeting Minutes / Agendas",
  "News / Announcements", "Events Calendar",
];

const FEATURE_OPTIONS = [
  "Contact form", "Online booking", "Live chat / chatbot",
  "Quote request form", "Online store / payments", "Google review widget",
  "Map / directions", "Popup / lead capture", "Google Analytics",
  "Local SEO setup", "CRM integration", "Member login / portal",
  "Event calendar", "Document library / downloads", "Emergency alerts / notifications",
];

const inputClass =
  "bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-accent/60 focus:ring-1 focus:ring-accent/20 w-full text-sm transition-colors";

const inputInvalidClass =
  "bg-white/5 border border-red-400/60 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-red-400/60 focus:ring-1 focus:ring-red-400/20 w-full text-sm transition-colors";

const selectClass =
  "bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent/60 focus:ring-1 focus:ring-accent/20 w-full text-sm transition-colors";

const textareaClass =
  "bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-accent/60 focus:ring-1 focus:ring-accent/20 w-full text-sm transition-colors resize-vertical";

export default function WebsiteIntakeFunnel() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const updateField = useCallback(
    (field: keyof FormData, value: string) => {
      setFormData((prev) => ({ ...prev, [field]: value }));
      setErrors((prev) => { const next = { ...prev }; delete next[field]; return next; });
    },
    []
  );

  const toggleArrayField = useCallback(
    (field: "vibes" | "pages" | "features", value: string) => {
      setFormData((prev) => {
        const arr = prev[field] as string[];
        return {
          ...prev,
          [field]: arr.includes(value) ? arr.filter((v) => v !== value) : [...arr, value],
        };
      });
    },
    []
  );

  function validate(_step: number): boolean {
    const errs: Errors = {};
    if (_step === 1) {
      if (!formData.industry) errs.industry = "Please select your industry.";
      if (!formData.bizDesc.trim()) errs.bizDesc = "Please describe your business.";
      if (!formData.location.trim()) errs.location = "Please enter your service area.";
    }
    if (_step === 2) {
      if (!formData.primaryGoal) errs.primaryGoal = "Please select your primary goal.";
      if (!formData.targetCustomer.trim()) errs.targetCustomer = "Please describe your target customer.";
    }
    if (_step === 5) {
      if (!formData.logoStatus) errs.logoStatus = "Please select your logo status.";
    }
    if (_step === 6) {
      if (!formData.timeline) errs.timeline = "Please select a timeline.";
      if (!formData.budget) errs.budget = "Please select a budget range.";
    }
    if (_step === 7) {
      if (!formData.firstName.trim()) errs.firstName = "Please enter your first name.";
      if (!formData.lastName.trim()) errs.lastName = "Please enter your last name.";
      if (!formData.businessName.trim()) errs.businessName = "Please enter your business name.";
      if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
        errs.email = "Please enter a valid email.";
      if (!formData.phone.trim()) errs.phone = "Please enter your phone number.";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  }

  function nextStep() {
    if (!validate(currentStep)) return;
    setCurrentStep((s) => Math.min(s + 1, TOTAL_STEPS));
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function prevStep() {
    setCurrentStep((s) => Math.max(s - 1, 1));
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  async function submitForm() {
    if (!validate(7)) return;
    const payload = {
      ...formData,
      vibes: formData.vibes.join(", "),
      pages: formData.pages.join(", "),
      features: formData.features.join(", "),
    };
    try {
      await fetch("/api/intake/website", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
    } catch { /* show thank-you regardless */ }
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function buildClipboardText(): string {
    return [
      "=== GRADY DIGITAL — WEBSITE INTAKE BRIEF ===", "",
      "--- CONTACT INFO ---",
      `Name: ${formData.firstName} ${formData.lastName}`,
      `Business: ${formData.businessName}`,
      `Email: ${formData.email}`,
      `Phone: ${formData.phone}`,
      `Best Contact: ${formData.contactPref || "N/A"}`, "",
      "--- BUSINESS ---",
      `Industry: ${formData.industry}`,
      `Location: ${formData.location}`,
      `Years: ${formData.yearsInBiz || "N/A"}`,
      `Description: ${formData.bizDesc}`,
      `Current Site: ${formData.currentWebsite || "None"}`,
      `Social: ${formData.socialLinks || "N/A"}`, "",
      "--- GOALS ---",
      `Primary Goal: ${formData.primaryGoal}`,
      `Target Customer: ${formData.targetCustomer}`,
      `Primary CTA: ${formData.primaryCTA || "N/A"}`,
      `Pain Point: ${formData.painPoint || "N/A"}`,
      `Competitors: ${formData.competitors || "N/A"}`, "",
      "--- DESIGN ---",
      `Vibe: ${formData.vibes.join(", ") || "N/A"}`,
      `Color Pref: ${formData.colorPref || "N/A"}`,
      `Brand Colors: ${[formData.brandColor1, formData.brandColor2].filter(Boolean).join(" / ") || "N/A"}`,
      `Sites They Like: ${formData.sitesLike || "N/A"}`,
      `Sites They Dislike: ${formData.sitesDislike || "N/A"}`,
      `Design Notes: ${formData.designNotes || "N/A"}`, "",
      "--- SCOPE ---",
      `Pages: ${formData.pages.join(", ") || "N/A"}`,
      `Features: ${formData.features.join(", ") || "N/A"}`,
      `# of Services: ${formData.numServices || "N/A"}`,
      `Other Scope: ${formData.otherScope || "N/A"}`, "",
      "--- ASSETS ---",
      `Logo: ${formData.logoStatus || "N/A"}`,
      `Photos: ${formData.photoStatus || "N/A"}`,
      `Copy: ${formData.copyStatus || "N/A"}`,
      `Domain: ${formData.domainName || formData.domainStatus || "N/A"}`,
      `Hosting: ${formData.hostingStatus || "N/A"}`,
      `Testimonials: ${formData.reviewStatus || "N/A"}`,
      `Asset Notes: ${formData.assetNotes || "N/A"}`, "",
      "--- TIMELINE & BUDGET ---",
      `Timeline: ${formData.timeline}`,
      `Launch Event: ${formData.launchEvent || "N/A"}`,
      `Budget: ${formData.budget}`,
      `Urgency: ${formData.urgency ? formData.urgency + "/5" : "N/A"}`,
      `Referral: ${formData.referralSource || "N/A"}`,
      `Notes: ${formData.additionalNotes || "N/A"}`,
    ].join("\n");
  }

  function copyToClipboard() {
    navigator.clipboard.writeText(buildClipboardText()).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  }

  function buildEmailLink(): string {
    const sub = encodeURIComponent(`New Website Brief: ${formData.businessName}`);
    const body = encodeURIComponent(
      `Hi,\n\nA new website intake brief has been submitted.\n\nName: ${formData.firstName} ${formData.lastName}\nBusiness: ${formData.businessName}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nGoal: ${formData.primaryGoal}\nBudget: ${formData.budget}\nTimeline: ${formData.timeline}\n\nPlease follow up within 24 hours.`
    );
    return `mailto:luke@gradydigital.com?subject=${sub}&body=${body}`;
  }

  // ─── Shared sub-components ───

  function RadioGroup({ field, options }: { field: keyof FormData; options: string[] }) {
    return (
      <div className="check-grid">
        {options.map((opt) => (
          <div
            key={opt}
            className={`check-card radio-card${formData[field] === opt ? " selected" : ""}`}
            onClick={() => updateField(field, opt)}
          >
            <div className="check-icon" />
            {opt}
          </div>
        ))}
      </div>
    );
  }

  function CheckboxGroup({ field, options }: { field: "vibes" | "pages" | "features"; options: string[] }) {
    const selected = formData[field] as string[];
    return (
      <div className="check-grid">
        {options.map((opt) => (
          <div
            key={opt}
            className={`check-card${selected.includes(opt) ? " selected" : ""}`}
            onClick={() => toggleArrayField(field, opt)}
          >
            <div className="check-icon" />
            {opt}
          </div>
        ))}
      </div>
    );
  }

  function FieldError({ field }: { field: string }) {
    if (!errors[field]) return null;
    return <p className="text-red-400 text-xs mt-1">{errors[field]}</p>;
  }

  function NavButtons({ onNext, submitLabel }: { onNext: () => void; submitLabel?: string }) {
    return (
      <div className="flex justify-between items-center mt-8">
        {currentStep > 1 ? (
          <button
            onClick={prevStep}
            className="inline-flex items-center gap-2 border border-white/20 text-white rounded-full px-6 py-3 font-medium text-sm hover:border-white/40 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back
          </button>
        ) : (
          <span />
        )}
        <button
          onClick={onNext}
          className="inline-flex items-center gap-2 bg-foreground text-background rounded-full px-6 py-3 font-medium text-sm hover:bg-white/90 transition-colors"
        >
          {submitLabel || "Continue"} <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    );
  }

  // ─── Thank You ───
  if (submitted) {
    const summaryGroups = [
      { heading: "Contact Information", items: [
        ["Name", `${formData.firstName} ${formData.lastName}`],
        ["Business", formData.businessName],
        ["Email", formData.email],
        ["Phone", formData.phone],
        ["Best contact", formData.contactPref],
      ]},
      { heading: "Business Overview", items: [
        ["Industry", formData.industry],
        ["Location", formData.location],
        ["Years in Operation", formData.yearsInBiz],
        ["Current Website", formData.currentWebsite || "None"],
      ]},
      { heading: "Project Goals", items: [
        ["Primary Goal", formData.primaryGoal],
        ["Primary CTA", formData.primaryCTA],
        ["Budget", formData.budget],
        ["Timeline", formData.timeline],
        ["Urgency", formData.urgency ? `${formData.urgency} / 5` : ""],
      ]},
      { heading: "Design & Scope", items: [
        ["Vibe", formData.vibes.join(", ")],
        ["Color Pref", formData.colorPref],
        ["Brand Colors", [formData.brandColor1, formData.brandColor2].filter(Boolean).join(", ")],
        ["Pages", formData.pages.join(", ")],
        ["Features", formData.features.join(", ")],
      ]},
      { heading: "Assets & Content", items: [
        ["Logo", formData.logoStatus],
        ["Photos", formData.photoStatus],
        ["Copy / Content", formData.copyStatus],
        ["Domain", formData.domainName || formData.domainStatus],
        ["Testimonials", formData.reviewStatus],
      ]},
    ];

    return (
      <div className="intake-funnel max-w-2xl mx-auto px-6">
        <div className="step-animate">
          <div className="text-center py-8">
            <div className="w-16 h-16 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-8 h-8 text-accent-light" />
            </div>
            <span className="rounded-full border border-white/20 backdrop-blur-sm px-3 py-1.5 text-sm text-accent-light">
              Received
            </span>
            <h1 className="text-3xl font-medium text-white mt-4">
              Your brief is{" "}
              <span className="font-serif italic text-accent-light">in.</span>
            </h1>
            <p className="text-white/60 text-sm leading-relaxed mt-3 max-w-md mx-auto">
              We&apos;ll review everything and reach out within 24 hours to schedule your strategy call.
            </p>
          </div>

          <div className="liquid-glass p-6">
            {summaryGroups.map((group) => (
              <div key={group.heading} className="mb-6 last:mb-0">
                <h3 className="text-xs uppercase tracking-wider text-accent-light mb-3">{group.heading}</h3>
                <div className="summary-grid">
                  {group.items
                    .filter(([, v]) => v && v.trim())
                    .map(([k, v]) => (
                      <div key={k} className="flex flex-col gap-0.5">
                        <span className="text-xs text-white/40">{k}</span>
                        <span className="text-sm text-white">{v}</span>
                      </div>
                    ))}
                </div>
              </div>
            ))}

            {formData.bizDesc && (
              <div className="mb-6">
                <h3 className="text-xs uppercase tracking-wider text-accent-light mb-3">Business Description</h3>
                <p className="text-sm text-white/80 leading-relaxed">{formData.bizDesc}</p>
              </div>
            )}
            {formData.targetCustomer && (
              <div className="mb-6">
                <h3 className="text-xs uppercase tracking-wider text-accent-light mb-3">Target Customer</h3>
                <p className="text-sm text-white/80 leading-relaxed">{formData.targetCustomer}</p>
              </div>
            )}
            {formData.additionalNotes && (
              <div>
                <h3 className="text-xs uppercase tracking-wider text-accent-light mb-3">Additional Notes</h3>
                <p className="text-sm text-white/80 leading-relaxed">{formData.additionalNotes}</p>
              </div>
            )}
          </div>

          <button
            onClick={copyToClipboard}
            className="mt-6 w-full inline-flex items-center justify-center gap-2 bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white hover:border-accent/40 hover:text-accent-light transition-colors"
          >
            {copied ? (
              <><Check className="w-4 h-4" /> Copied to clipboard</>
            ) : (
              <><Copy className="w-4 h-4" /> Copy brief to clipboard</>
            )}
          </button>

          <div className="mt-4 text-center">
            <a href={buildEmailLink()} className="text-accent-light text-sm hover:underline">
              Send this brief via email &rarr;
            </a>
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full px-5 py-3 bg-foreground text-background font-medium text-sm hover:bg-white/90 transition-colors"
            >
              Back to Home <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // ─── Main Funnel ───
  return (
    <div className="intake-funnel max-w-2xl mx-auto px-6">
      {/* Progress */}
      <div className="mb-10">
        <div className="flex justify-between items-center mb-2.5">
          <span className="text-xs uppercase tracking-wider text-white/40">Progress</span>
          <span className="text-xs text-accent-light tabular-nums">
            Step {currentStep} of {TOTAL_STEPS}
          </span>
        </div>
        <div className="progress-track">
          <div className="progress-fill" style={{ width: `${(currentStep / TOTAL_STEPS) * 100}%` }} />
        </div>
        <div className="flex gap-1.5 mt-3">
          {Array.from({ length: TOTAL_STEPS }, (_, i) => (
            <div
              key={i}
              className={`w-1.5 h-1.5 rounded-full transition-colors ${
                i + 1 < currentStep
                  ? "bg-accent/40"
                  : i + 1 === currentStep
                  ? "bg-accent"
                  : "bg-white/15"
              }`}
            />
          ))}
        </div>
      </div>

      {/* ══════ STEP 1: Business Overview ══════ */}
      {currentStep === 1 && (
        <div className="step-animate" key="step-1">
          <span className="rounded-full border border-white/20 backdrop-blur-sm px-3 py-1.5 text-sm text-accent-light">
            About Your Business
          </span>
          <h1 className="text-3xl md:text-4xl font-medium text-white mt-4 mb-2">
            Tell us about your{" "}
            <span className="font-serif italic text-accent-light">organization.</span>
          </h1>
          <p className="text-white/60 text-sm leading-relaxed mb-8">
            This takes about 4 minutes. We need to understand what you do so we can build something that actually represents you.
          </p>

          <div className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-white/80 mb-1.5">
                Industry / Business Type <span className="text-accent-light">*</span>
              </label>
              <select
                value={formData.industry}
                onChange={(e) => updateField("industry", e.target.value)}
                className={`${selectClass} ${errors.industry ? "!border-red-400/60" : ""}`}
              >
                <option value="" disabled>Select your industry...</option>
                {INDUSTRY_OPTIONS.map((o) => <option key={o} value={o}>{o}</option>)}
              </select>
              <FieldError field="industry" />
            </div>
            <div>
              <div className="flex justify-between items-center mb-1.5">
                <label className="text-sm font-medium text-white/80">
                  Describe your business or organization in 2-3 sentences <span className="text-accent-light">*</span>
                </label>
                <span className="text-xs text-white/30 tabular-nums">{formData.bizDesc.length} / 400</span>
              </div>
              <textarea
                maxLength={400}
                rows={4}
                placeholder="What do you do, who do you serve? For municipalities: describe your town and key departments."
                value={formData.bizDesc}
                onChange={(e) => updateField("bizDesc", e.target.value)}
                className={`${textareaClass} ${errors.bizDesc ? "!border-red-400/60" : ""}`}
              />
              <FieldError field="bizDesc" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-white/80 mb-1.5">
                  Service Area / Location <span className="text-accent-light">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Greater Boston, MA"
                  value={formData.location}
                  onChange={(e) => updateField("location", e.target.value)}
                  className={errors.location ? inputInvalidClass : inputClass}
                />
                <FieldError field="location" />
              </div>
              <div>
                <label className="block text-sm font-medium text-white/80 mb-1.5">
                  Years in Operation
                </label>
                <select value={formData.yearsInBiz} onChange={(e) => updateField("yearsInBiz", e.target.value)} className={selectClass}>
                  <option value="" disabled>Select...</option>
                  {["Less than 1 year", "1-2 years", "3-5 years", "6-10 years", "10-20 years", "20+ years"].map((o) => (
                    <option key={o} value={o}>{o}</option>
                  ))}
                </select>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-white/80 mb-1.5">
                Do you currently have a website?
              </label>
              <RadioGroup field="hasWebsite" options={["Yes", "No"]} />
            </div>
            {formData.hasWebsite === "Yes" && (
              <div>
                <label className="block text-sm font-medium text-white/80 mb-1.5">
                  Current Website URL
                </label>
                <input
                  type="url"
                  placeholder="https://yoursite.com"
                  value={formData.currentWebsite}
                  onChange={(e) => updateField("currentWebsite", e.target.value)}
                  className={inputClass}
                />
                <p className="text-xs text-white/30 italic mt-1">We&apos;ll review it before our call.</p>
              </div>
            )}
            <div>
              <label className="block text-sm font-medium text-white/80 mb-1.5">
                Social Media Profiles (paste any that apply)
              </label>
              <textarea
                rows={3}
                placeholder={"Facebook: https://facebook.com/...\nInstagram: @yourhandle\nGoogle Business: https://maps.google.com/..."}
                value={formData.socialLinks}
                onChange={(e) => updateField("socialLinks", e.target.value)}
                className={textareaClass}
              />
            </div>
          </div>

          <NavButtons onNext={nextStep} />
        </div>
      )}

      {/* ══════ STEP 2: Project Goals ══════ */}
      {currentStep === 2 && (
        <div className="step-animate" key="step-2">
          <span className="rounded-full border border-white/20 backdrop-blur-sm px-3 py-1.5 text-sm text-accent-light">
            Project Goals
          </span>
          <h1 className="text-3xl md:text-4xl font-medium text-white mt-4 mb-2">
            What do you want this{" "}
            <span className="font-serif italic text-accent-light">website to do?</span>
          </h1>
          <p className="text-white/60 text-sm leading-relaxed mb-8">
            Your website should work as a sales tool. Help us understand what success looks like for you.
          </p>

          <div className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-white/80 mb-1.5">
                Primary goal of this website <span className="text-accent-light">*</span>
              </label>
              <RadioGroup
                field="primaryGoal"
                options={[
                  "Generate leads / calls", "Online bookings / scheduling",
                  "Sell products online", "Build credibility / brand",
                  "Showcase portfolio / work", "Rank on Google / SEO",
                  "Post announcements / community updates",
                ]}
              />
              <FieldError field="primaryGoal" />
            </div>
            <div>
              <label className="block text-sm font-medium text-white/80 mb-1.5">
                Who is your target customer? <span className="text-accent-light">*</span>
              </label>
              <textarea
                rows={3}
                placeholder="Homeowners aged 35-65 looking for HVAC service, or town residents who need meeting info and permits..."
                value={formData.targetCustomer}
                onChange={(e) => updateField("targetCustomer", e.target.value)}
                className={`${textareaClass} ${errors.targetCustomer ? "!border-red-400/60" : ""}`}
              />
              <FieldError field="targetCustomer" />
            </div>
            <div>
              <label className="block text-sm font-medium text-white/80 mb-1.5">
                What action do you want visitors to take first?
              </label>
              <RadioGroup
                field="primaryCTA"
                options={["Call us", "Fill out a contact form", "Book an appointment", "Request a quote", "Shop / buy now", "Get directions", "Find information / documents", "Report an issue"]}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-white/80 mb-1.5">
                Biggest frustration with your online presence right now
              </label>
              <textarea
                rows={3}
                placeholder="We don't show up on Google, competitors outrank us, our current site looks outdated..."
                value={formData.painPoint}
                onChange={(e) => updateField("painPoint", e.target.value)}
                className={textareaClass}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-white/80 mb-1.5">
                Biggest competitor URLs (1-3 examples)
              </label>
              <textarea
                rows={2}
                placeholder={"https://competitor1.com\nhttps://competitor2.com"}
                value={formData.competitors}
                onChange={(e) => updateField("competitors", e.target.value)}
                className={textareaClass}
              />
              <p className="text-xs text-white/30 italic mt-1">We&apos;ll audit these and make sure your site stands out from theirs.</p>
            </div>
          </div>

          <NavButtons onNext={nextStep} />
        </div>
      )}

      {/* ══════ STEP 3: Design Preferences ══════ */}
      {currentStep === 3 && (
        <div className="step-animate" key="step-3">
          <span className="rounded-full border border-white/20 backdrop-blur-sm px-3 py-1.5 text-sm text-accent-light">
            Look &amp; Feel
          </span>
          <h1 className="text-3xl md:text-4xl font-medium text-white mt-4 mb-2">
            Let&apos;s talk about{" "}
            <span className="font-serif italic text-accent-light">design.</span>
          </h1>
          <p className="text-white/60 text-sm leading-relaxed mb-8">
            We&apos;ll make final design decisions together, but this gives us a strong starting point.
          </p>

          <div className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-white/80 mb-1.5">Overall vibe / aesthetic</label>
              <CheckboxGroup field="vibes" options={["Clean & minimal", "Bold & modern", "Luxury / premium", "Friendly & approachable", "Corporate / professional", "Rugged / tradesman", "Official / civic"]} />
            </div>
            <div>
              <label className="block text-sm font-medium text-white/80 mb-1.5">Color preference</label>
              <div className="check-grid three-col">
                {["Light / white", "Dark / dramatic", "Use my brand colors"].map((opt) => (
                  <div
                    key={opt}
                    className={`check-card radio-card${formData.colorPref === opt ? " selected" : ""}`}
                    onClick={() => updateField("colorPref", opt)}
                  >
                    <div className="check-icon" />
                    {opt}
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-white/80 mb-1.5">Primary brand color</label>
                <input type="text" placeholder="#1A3A6B or Navy Blue" value={formData.brandColor1} onChange={(e) => updateField("brandColor1", e.target.value)} className={inputClass} />
              </div>
              <div>
                <label className="block text-sm font-medium text-white/80 mb-1.5">Secondary brand color</label>
                <input type="text" placeholder="#F5A623 or Orange" value={formData.brandColor2} onChange={(e) => updateField("brandColor2", e.target.value)} className={inputClass} />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-white/80 mb-1.5">Websites you love (paste 1-3 URLs)</label>
              <textarea
                rows={3}
                placeholder={"https://example.com — I like their hero section and color scheme\nhttps://example2.com — clean and easy to navigate"}
                value={formData.sitesLike}
                onChange={(e) => updateField("sitesLike", e.target.value)}
                className={textareaClass}
              />
              <p className="text-xs text-white/30 italic mt-1">Doesn&apos;t have to be in your industry. Just sites that feel right.</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-white/80 mb-1.5">Websites you hate or want to avoid looking like</label>
              <textarea rows={2} placeholder="Anything that feels outdated, cluttered, or hard to use on mobile..." value={formData.sitesDislike} onChange={(e) => updateField("sitesDislike", e.target.value)} className={textareaClass} />
            </div>
            <div>
              <label className="block text-sm font-medium text-white/80 mb-1.5">Any other design notes?</label>
              <textarea rows={3} placeholder="We want photography-heavy, no stock photos. Must feel local and trustworthy..." value={formData.designNotes} onChange={(e) => updateField("designNotes", e.target.value)} className={textareaClass} />
            </div>
          </div>

          <NavButtons onNext={nextStep} />
        </div>
      )}

      {/* ══════ STEP 4: Scope & Pages ══════ */}
      {currentStep === 4 && (
        <div className="step-animate" key="step-4">
          <span className="rounded-full border border-white/20 backdrop-blur-sm px-3 py-1.5 text-sm text-accent-light">
            Scope of Work
          </span>
          <h1 className="text-3xl md:text-4xl font-medium text-white mt-4 mb-2">
            What pages do you{" "}
            <span className="font-serif italic text-accent-light">need?</span>
          </h1>
          <p className="text-white/60 text-sm leading-relaxed mb-8">
            Select everything that applies. We&apos;ll finalize the sitemap together, but this gives us a baseline.
          </p>

          <div className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-white/80 mb-1.5">Core pages needed</label>
              <CheckboxGroup field="pages" options={PAGE_OPTIONS} />
            </div>
            <div>
              <label className="block text-sm font-medium text-white/80 mb-1.5">Special features / functionality needed</label>
              <CheckboxGroup field="features" options={FEATURE_OPTIONS} />
            </div>
            <div>
              <label className="block text-sm font-medium text-white/80 mb-1.5">Approx. number of services to showcase</label>
              <select value={formData.numServices} onChange={(e) => updateField("numServices", e.target.value)} className={selectClass}>
                <option value="" disabled>Select...</option>
                {["1-3 services", "4-6 services", "7-10 services", "10+ services", "Not sure yet"].map((o) => (
                  <option key={o} value={o}>{o}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-white/80 mb-1.5">Anything else the site needs to do?</label>
              <textarea rows={3} placeholder="Multilingual, ADA compliant, Spanish version, client portal, PDF downloads, permit applications, public records..." value={formData.otherScope} onChange={(e) => updateField("otherScope", e.target.value)} className={textareaClass} />
            </div>
          </div>

          <NavButtons onNext={nextStep} />
        </div>
      )}

      {/* ══════ STEP 5: Content & Assets ══════ */}
      {currentStep === 5 && (
        <div className="step-animate" key="step-5">
          <span className="rounded-full border border-white/20 backdrop-blur-sm px-3 py-1.5 text-sm text-accent-light">
            Content &amp; Assets
          </span>
          <h1 className="text-3xl md:text-4xl font-medium text-white mt-4 mb-2">
            What do you{" "}
            <span className="font-serif italic text-accent-light">already have?</span>
          </h1>
          <p className="text-white/60 text-sm leading-relaxed mb-8">
            Knowing what&apos;s ready helps us plan the build timeline and scope accurately.
          </p>

          <div className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-white/80 mb-1.5">
                Logo status <span className="text-accent-light">*</span>
              </label>
              <RadioGroup
                field="logoStatus"
                options={["Yes, finalized logo (vector files)", "Yes, but only as image/PNG", "In progress / being designed", "No logo — need design"]}
              />
              <FieldError field="logoStatus" />
            </div>
            <div>
              <label className="block text-sm font-medium text-white/80 mb-1.5">Photography / images</label>
              <RadioGroup field="photoStatus" options={["Professional photos ready", "Have phone photos to use", "Stock photos only", "No photos — need sourcing"]} />
            </div>
            <div>
              <label className="block text-sm font-medium text-white/80 mb-1.5">Website copy / written content</label>
              <RadioGroup field="copyStatus" options={["Fully written and ready", "Partially written", "Need full copywriting", "Will provide bullet points only"]} />
            </div>
            <div>
              <label className="block text-sm font-medium text-white/80 mb-1.5">Do you have a domain name?</label>
              <RadioGroup field="domainStatus" options={["Yes, already own one", "No — need help choosing/buying"]} />
            </div>
            {formData.domainStatus === "Yes, already own one" && (
              <>
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-1.5">Your domain name</label>
                  <input type="text" placeholder="yourbusiness.com" value={formData.domainName} onChange={(e) => updateField("domainName", e.target.value)} className={inputClass} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-1.5">Hosting situation</label>
                  <select value={formData.hostingStatus} onChange={(e) => updateField("hostingStatus", e.target.value)} className={selectClass}>
                    <option value="" disabled>Select...</option>
                    {["Have existing hosting (need transfer)", "Have existing hosting (keep it)", "No hosting — need setup", "Not sure"].map((o) => (
                      <option key={o} value={o}>{o}</option>
                    ))}
                  </select>
                </div>
              </>
            )}
            <div>
              <label className="block text-sm font-medium text-white/80 mb-1.5">Testimonials / reviews available?</label>
              <RadioGroup field="reviewStatus" options={["Yes, Google reviews available", "Yes, written testimonials", "Some, need to gather more", "None yet"]} />
            </div>
            <div>
              <label className="block text-sm font-medium text-white/80 mb-1.5">Additional asset notes</label>
              <textarea rows={3} placeholder="I have video testimonials, PDF brochures, certifications, awards to showcase..." value={formData.assetNotes} onChange={(e) => updateField("assetNotes", e.target.value)} className={textareaClass} />
            </div>
          </div>

          <NavButtons onNext={nextStep} />
        </div>
      )}

      {/* ══════ STEP 6: Timeline ══════ */}
      {currentStep === 6 && (
        <div className="step-animate" key="step-6">
          <span className="rounded-full border border-white/20 backdrop-blur-sm px-3 py-1.5 text-sm text-accent-light">
            Timeline
          </span>
          <h1 className="text-3xl md:text-4xl font-medium text-white mt-4 mb-2">
            <span className="font-serif italic text-accent-light">Timeline.</span>
          </h1>
          <p className="text-white/60 text-sm leading-relaxed mb-8">
            We&apos;ll confirm everything on our strategy call, but this helps us plan ahead.
          </p>

          <div className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-white/80 mb-1.5">
                When do you need the website live? <span className="text-accent-light">*</span>
              </label>
              <RadioGroup field="timeline" options={["ASAP (1-2 weeks)", "1 month", "2-3 months", "No hard deadline"]} />
              <FieldError field="timeline" />
            </div>
            <div>
              <label className="block text-sm font-medium text-white/80 mb-1.5">
                Is there a specific launch date or event?
              </label>
              <input type="text" placeholder="Grand opening April 15, busy season starts May..." value={formData.launchEvent} onChange={(e) => updateField("launchEvent", e.target.value)} className={inputClass} />
            </div>
            <div>
              <div className="flex justify-between items-center mb-1.5">
                <label className="text-sm font-medium text-white/80">Anything else we should know?</label>
                <span className="text-xs text-white/30 tabular-nums">{formData.additionalNotes.length} / 600</span>
              </div>
              <textarea
                maxLength={600}
                rows={4}
                placeholder="Questions, concerns, past bad experiences with web agencies, special requirements..."
                value={formData.additionalNotes}
                onChange={(e) => updateField("additionalNotes", e.target.value)}
                className={textareaClass}
              />
            </div>
          </div>

          <NavButtons onNext={nextStep} />
        </div>
      )}

      {/* ══════ STEP 7: Contact Info ══════ */}
      {currentStep === 7 && (
        <div className="step-animate" key="step-7">
          <span className="rounded-full border border-white/20 backdrop-blur-sm px-3 py-1.5 text-sm text-accent-light">
            Almost Done
          </span>
          <h1 className="text-3xl md:text-4xl font-medium text-white mt-4 mb-2">
            Last step — tell us{" "}
            <span className="font-serif italic text-accent-light">who you are.</span>
          </h1>
          <p className="text-white/60 text-sm leading-relaxed mb-8">
            We&apos;ll use this to send your project brief and schedule your strategy call.
          </p>

          <div className="flex gap-4 mb-8 flex-wrap">
            <div className="flex items-center gap-2 text-xs text-white/50">
              <div className="w-1.5 h-1.5 rounded-full bg-green-400" />100% confidential
            </div>
            <div className="flex items-center gap-2 text-xs text-white/50">
              <div className="w-1.5 h-1.5 rounded-full bg-green-400" />No commitment required
            </div>
            <div className="flex items-center gap-2 text-xs text-white/50">
              <div className="w-1.5 h-1.5 rounded-full bg-green-400" />Response within 24 hrs
            </div>
          </div>

          <div className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-white/80 mb-1.5">
                  First Name <span className="text-accent-light">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Jane"
                  value={formData.firstName}
                  onChange={(e) => updateField("firstName", e.target.value)}
                  className={errors.firstName ? inputInvalidClass : inputClass}
                />
                <FieldError field="firstName" />
              </div>
              <div>
                <label className="block text-sm font-medium text-white/80 mb-1.5">
                  Last Name <span className="text-accent-light">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Doe"
                  value={formData.lastName}
                  onChange={(e) => updateField("lastName", e.target.value)}
                  className={errors.lastName ? inputInvalidClass : inputClass}
                />
                <FieldError field="lastName" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-white/80 mb-1.5">
                Business / Organization Name <span className="text-accent-light">*</span>
              </label>
              <input
                type="text"
                placeholder="Doe's Landscaping LLC or Town of Springfield"
                value={formData.businessName}
                onChange={(e) => updateField("businessName", e.target.value)}
                className={errors.businessName ? inputInvalidClass : inputClass}
              />
              <FieldError field="businessName" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-white/80 mb-1.5">
                  Email Address <span className="text-accent-light">*</span>
                </label>
                <input
                  type="email"
                  placeholder="jane@example.com"
                  value={formData.email}
                  onChange={(e) => updateField("email", e.target.value)}
                  className={errors.email ? inputInvalidClass : inputClass}
                />
                <FieldError field="email" />
              </div>
              <div>
                <label className="block text-sm font-medium text-white/80 mb-1.5">
                  Phone Number <span className="text-accent-light">*</span>
                </label>
                <input
                  type="tel"
                  placeholder="(555) 000-0000"
                  value={formData.phone}
                  onChange={(e) => updateField("phone", e.target.value)}
                  className={errors.phone ? inputInvalidClass : inputClass}
                />
                <FieldError field="phone" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-white/80 mb-1.5">
                Best way to reach you
              </label>
              <RadioGroup field="contactPref" options={["Email", "Phone call", "Text message", "Any"]} />
            </div>
          </div>

          <NavButtons onNext={submitForm} submitLabel="Submit My Project Brief" />
        </div>
      )}
    </div>
  );
}

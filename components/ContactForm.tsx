"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, ArrowRight, ShieldOff, Clock, Phone } from "lucide-react";
import Link from "next/link";

const serviceOptions = [
  "AI Receptionist",
  "AI Website Chatbot",
  "Lead Follow-Up Automation",
  "Missed Call Text-Back",
  "Review & Reputation Automation",
  "Web Design & Development",
  "SEO & Google Business Profile",
  "Not Sure — Help Me Decide",
] as const;

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  businessName: z.string().min(1, "Business name is required"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().optional(),
  website: z.string().optional(),
  services: z.array(z.string()).optional(),
  message: z.string().optional(),
  privacy: z.literal(true, {
    error: "You must accept the privacy policy",
  }),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: { services: [] },
  });

  const onSubmit = async (data: ContactFormData) => {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (res.ok) setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="liquid-glass p-12 text-center max-w-lg mx-auto">
        <CheckCircle2 className="w-16 h-16 text-accent-light mx-auto mb-4" />
        <h3 className="text-2xl font-medium text-white">
          You&apos;re on the list.
        </h3>
        <p className="text-white/60 mt-3 text-sm leading-relaxed">
          We&apos;ll review your submission and get back to you within 24
          hours with a personalized breakdown of where AI can save you time,
          capture more leads, and grow your revenue.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full px-5 py-3 bg-foreground text-background font-medium text-sm hover:bg-white/90 transition-colors duration-200 mt-8"
        >
          Back to Home
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    );
  }

  const inputClass =
    "bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-accent/60 focus:ring-1 focus:ring-accent/20 w-full text-sm transition-colors";

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
      {/* Form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="lg:col-span-2 space-y-5"
      >
        {/* Name + Business */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-white/80 mb-1.5"
            >
              Your Name <span className="text-accent-light">*</span>
            </label>
            <input
              id="name"
              {...register("name")}
              placeholder="John Smith"
              className={inputClass}
            />
            {errors.name && (
              <p className="text-red-400 text-xs mt-1">
                {errors.name.message}
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor="businessName"
              className="block text-sm font-medium text-white/80 mb-1.5"
            >
              Business Name <span className="text-accent-light">*</span>
            </label>
            <input
              id="businessName"
              {...register("businessName")}
              placeholder="Smith's HVAC"
              className={inputClass}
            />
            {errors.businessName && (
              <p className="text-red-400 text-xs mt-1">
                {errors.businessName.message}
              </p>
            )}
          </div>
        </div>

        {/* Email + Phone */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-white/80 mb-1.5"
            >
              Email <span className="text-accent-light">*</span>
            </label>
            <input
              id="email"
              {...register("email")}
              type="email"
              placeholder="john@smithshvac.com"
              className={inputClass}
            />
            {errors.email && (
              <p className="text-red-400 text-xs mt-1">
                {errors.email.message}
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-white/80 mb-1.5"
            >
              Phone <span className="text-white/30 text-xs">(optional)</span>
            </label>
            <input
              id="phone"
              {...register("phone")}
              type="tel"
              placeholder="(555) 123-4567"
              className={inputClass}
            />
          </div>
        </div>

        {/* Website */}
        <div>
          <label
            htmlFor="website"
            className="block text-sm font-medium text-white/80 mb-1.5"
          >
            Current Website{" "}
            <span className="text-white/30 text-xs">(optional)</span>
          </label>
          <input
            id="website"
            {...register("website")}
            type="url"
            placeholder="https://smithshvac.com"
            className={inputClass}
          />
        </div>

        {/* Services */}
        <fieldset>
          <legend className="text-sm font-medium text-white/80 mb-3">
            What are you interested in?{" "}
            <span className="text-white/30 text-xs">(select all that apply)</span>
          </legend>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {serviceOptions.map((service) => (
              <label
                key={service}
                className="flex items-center gap-2.5 text-sm text-white/70 cursor-pointer rounded-lg px-3 py-2.5 border border-transparent hover:border-white/10 hover:bg-white/[0.02] transition-colors"
              >
                <input
                  type="checkbox"
                  value={service}
                  {...register("services")}
                  className="rounded border-white/20 bg-white/5 text-accent focus:ring-accent/40 w-4 h-4"
                />
                {service}
              </label>
            ))}
          </div>
        </fieldset>

        {/* Message */}
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-white/80 mb-1.5"
          >
            Anything else we should know?{" "}
            <span className="text-white/30 text-xs">(optional)</span>
          </label>
          <textarea
            id="message"
            {...register("message")}
            rows={3}
            placeholder="Tell us about your business, your biggest challenge right now, or what you're hoping to achieve..."
            className={inputClass}
          />
        </div>

        {/* Privacy */}
        <label className="flex items-start gap-2.5 text-sm text-white/50 cursor-pointer">
          <input
            type="checkbox"
            {...register("privacy")}
            className="mt-0.5 rounded border-white/20 bg-white/5 text-accent focus:ring-accent/40 w-4 h-4"
          />
          <span>
            I agree to the{" "}
            <Link
              href="/privacy"
              className="text-accent-light underline underline-offset-2"
            >
              Privacy Policy
            </Link>{" "}
            and{" "}
            <Link
              href="/terms"
              className="text-accent-light underline underline-offset-2"
            >
              Terms of Service
            </Link>
          </span>
        </label>
        {errors.privacy && (
          <p className="text-red-400 text-xs">{errors.privacy.message}</p>
        )}

        {/* Submit */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full inline-flex items-center justify-center gap-2 rounded-full px-5 py-3.5 bg-foreground text-background font-medium text-sm hover:bg-white/90 transition-colors duration-200 disabled:opacity-50"
        >
          {isSubmitting ? (
            "Sending..."
          ) : (
            <>
              Get Your Free Audit
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>

        <p className="text-white/30 text-xs text-center">
          No spam. No sales calls. Just a free, honest audit.
        </p>
      </form>

      {/* Sidebar */}
      <div className="space-y-6">
        <div className="liquid-glass p-6">
          <h3 className="text-sm font-medium text-white mb-4">
            What happens next?
          </h3>
          <ol className="space-y-4">
            <li className="flex gap-3">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-accent/10 text-accent-light text-xs font-medium shrink-0">
                1
              </span>
              <p className="text-sm text-white/60">
                We analyze your business — how you handle calls, leads,
                follow-ups, and bookings — within 24 hours.
              </p>
            </li>
            <li className="flex gap-3">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-accent/10 text-accent-light text-xs font-medium shrink-0">
                2
              </span>
              <p className="text-sm text-white/60">
                You get a personalized audit showing where AI systems can
                save you hours, capture missed leads, and increase revenue.
              </p>
            </li>
            <li className="flex gap-3">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-accent/10 text-accent-light text-xs font-medium shrink-0">
                3
              </span>
              <p className="text-sm text-white/60">
                We walk through the findings and show you what to automate
                first for the biggest impact — no obligation.
              </p>
            </li>
          </ol>
        </div>

        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <Clock className="w-4 h-4 text-accent-light mt-0.5 shrink-0" />
            <div>
              <p className="text-sm font-medium text-white">24-hour response</p>
              <p className="text-xs text-white/40">
                We review every submission personally
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <ShieldOff className="w-4 h-4 text-accent-light mt-0.5 shrink-0" />
            <div>
              <p className="text-sm font-medium text-white">No contracts</p>
              <p className="text-xs text-white/40">
                Month-to-month. Cancel anytime.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Phone className="w-4 h-4 text-accent-light mt-0.5 shrink-0" />
            <div>
              <p className="text-sm font-medium text-white">Talk to the team</p>
              <p className="text-xs text-white/40">
                No account managers or call centers
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-4">
          <p className="text-xs text-white/30">
            Or email us directly at{" "}
            <a
              href="mailto:luke@gradydigital.com"
              className="text-accent-light"
            >
              luke@gradydigital.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

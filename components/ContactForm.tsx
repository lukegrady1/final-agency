"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, ArrowRight, ShieldOff, Clock, Phone } from "lucide-react";
import Link from "next/link";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  businessName: z.string().min(1, "Business name is required"),
  email: z.string().email("Please enter a valid email (e.g. name@company.com)"),
  phone: z.string().optional(),
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
          Message sent.
        </h3>
        <p className="text-white/60 mt-3 text-sm leading-relaxed">
          Luke will get back to you within 24 hours. If you&apos;d like
          to skip the wait and book a call directly, head to the Get
          Started page.
        </p>
        <Link
          href="/start"
          className="inline-flex items-center gap-2 rounded-full px-5 py-3 bg-foreground text-background font-medium text-sm hover:bg-white/90 transition-colors duration-200 mt-8"
        >
          Book a Call
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
        <p className="text-white/50 text-sm">
          Takes about 30 seconds. We&apos;ll handle the rest.
        </p>

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
              autoComplete="name"
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
              autoComplete="organization"
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
              autoComplete="email"
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
              autoComplete="tel"
              placeholder="(555) 123-4567"
              className={inputClass}
            />
          </div>
        </div>

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
              Send Message
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>

        <p className="text-white/30 text-xs text-center">
          No spam, no pressure.
          By submitting you agree to our{" "}
          <Link
            href="/privacy"
            className="text-white/40 underline underline-offset-2"
          >
            Privacy Policy
          </Link>.
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
                This sends a message directly to Luke. He&apos;ll get
                back to you within 24 hours.
              </p>
            </li>
            <li className="flex gap-3">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-accent/10 text-accent-light text-xs font-medium shrink-0">
                2
              </span>
              <p className="text-sm text-white/60">
                Want to skip the wait?{" "}
                <Link href="/start" className="text-accent-light hover:underline">
                  Book a call directly
                </Link>{" "}
                on the Get Started page.
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
              <p className="text-sm font-medium text-white">Talk to the builder</p>
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

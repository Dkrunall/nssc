"use client";

import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  enquirySchema,
  normalisePhone,
  serviceOptions,
  type EnquiryData,
  type EnquiryInput,
} from "@/lib/validation";
import { track } from "@/lib/track";
import { site } from "@/config/site";
import { PhoneLinks } from "./ContactButtons";

const field =
  "mt-1.5 block min-h-12 w-full rounded-lg border border-green-900/30 bg-white px-4 py-2.5 text-base text-green-900 focus-visible:border-green-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-800 aria-[invalid=true]:border-red-700";
const label = "block text-sm font-semibold text-green-900";

// A real person takes a few seconds after first touching the form.
const tooFast = (startedAt: number) => !startedAt || Date.now() - startedAt < 3000;

export function EnquiryForm({
  defaultService = "",
  id = "enquiry",
}: {
  defaultService?: string;
  id?: string;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const [startedAt, setStartedAt] = useState(0);
  const [serverError, setServerError] = useState(false);
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<EnquiryInput, unknown, EnquiryData>({
    resolver: zodResolver(enquirySchema),
    defaultValues: {
      fullName: "",
      phone: "",
      email: "",
      service: defaultService,
      companyNames: "",
      location: "",
      message: "",
      consent: false,
    },
  });
  const messageLen = (useWatch({ control, name: "message" }) ?? "").length;

  const err = (name: keyof EnquiryInput) => errors[name]?.message as string | undefined;
  const aria = (name: keyof EnquiryInput) => ({
    "aria-invalid": err(name) ? (true as const) : undefined,
    "aria-describedby": err(name) ? `${id}-${name}-error` : undefined,
  });
  const fieldError = (name: keyof EnquiryInput) =>
    err(name) ? (
      <p
        id={`${id}-${name}-error`}
        role="alert"
        className="mt-1.5 text-sm font-medium text-red-700"
      >
        {err(name)}
      </p>
    ) : null;

  const onSubmit = handleSubmit(async (values, e) => {
    setServerError(false);
    const form = e?.target as HTMLFormElement | undefined;
    const honeypot = (form?.elements.namedItem("website") as HTMLInputElement | null)?.value;
    // Bots: fill honeypot or submit instantly. Pretend success.
    if (honeypot || tooFast(startedAt)) {
      router.push("/thank-you");
      return;
    }
    const phone = normalisePhone(values.phone);
    const endpoint = process.env.NEXT_PUBLIC_FORM_ENDPOINT;
    try {
      if (endpoint) {
        const res = await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({ ...values, phone, sourcePage: pathname }),
        });
        if (!res.ok) throw new Error("failed");
      } else {
        const lines = [
          `Name: ${values.fullName}`,
          `Phone: ${phone}`,
          values.email && `Email: ${values.email}`,
          values.service && `Service: ${values.service}`,
          values.companyNames && `Company: ${values.companyNames}`,
          values.location && `Location: ${values.location}`,
          values.message && `Message: ${values.message}`,
        ].filter(Boolean);
        window.location.assign(
          `mailto:${site.emails[0]}?subject=${encodeURIComponent("Enquiry from website")}&body=${encodeURIComponent(lines.join("\n"))}`,
        );
      }
      track("form_submit", { page: pathname });
      router.push("/thank-you");
    } catch {
      setServerError(true);
    }
  });

  return (
    <form
      onFocusCapture={() => setStartedAt((t) => t || Date.now())}
      onSubmit={onSubmit}
      noValidate
      className="space-y-5 rounded-2xl bg-white p-6 text-green-900 shadow-soft sm:p-8"
      aria-label="Enquiry form"
    >
      <div>
        <label htmlFor={`${id}-fullName`} className={label}>
          Full name <span aria-hidden="true">*</span>
        </label>
        <input
          id={`${id}-fullName`}
          type="text"
          autoComplete="name"
          required
          className={field}
          {...aria("fullName")}
          {...register("fullName")}
        />
        {fieldError("fullName")}
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor={`${id}-phone`} className={label}>
            Mobile number <span aria-hidden="true">*</span>
          </label>
          <input
            id={`${id}-phone`}
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            required
            className={field}
            {...aria("phone")}
            {...register("phone")}
          />
          {fieldError("phone")}
        </div>
        <div>
          <label htmlFor={`${id}-email`} className={label}>
            Email <span className="font-normal text-muted">(optional)</span>
          </label>
          <input
            id={`${id}-email`}
            type="email"
            autoComplete="email"
            className={field}
            {...aria("email")}
            {...register("email")}
          />
          {fieldError("email")}
        </div>
      </div>

      <div>
        <label htmlFor={`${id}-service`} className={label}>
          Service needed <span className="font-normal text-muted">(optional)</span>
        </label>
        <select
          id={`${id}-service`}
          className={field}
          {...aria("service")}
          {...register("service")}
        >
          <option value="">Select a service</option>
          {serviceOptions.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
        {fieldError("service")}
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor={`${id}-companyNames`} className={label}>
            Company name(s) <span className="font-normal text-muted">(optional)</span>
          </label>
          <input
            id={`${id}-companyNames`}
            type="text"
            className={field}
            {...aria("companyNames")}
            {...register("companyNames")}
          />
          {fieldError("companyNames")}
        </div>
        <div>
          <label htmlFor={`${id}-location`} className={label}>
            City / country <span className="font-normal text-muted">(optional)</span>
          </label>
          <input
            id={`${id}-location`}
            type="text"
            autoComplete="address-level2"
            className={field}
            {...aria("location")}
            {...register("location")}
          />
          {fieldError("location")}
        </div>
      </div>

      <div>
        <label htmlFor={`${id}-message`} className={label}>
          Message <span className="font-normal text-muted">(optional)</span>
        </label>
        <textarea
          id={`${id}-message`}
          rows={4}
          maxLength={1000}
          className={field}
          {...aria("message")}
          {...register("message")}
        />
        <p className="mt-1 text-right text-xs text-muted">{messageLen}/1000</p>
        {fieldError("message")}
      </div>

      {/* Honeypot: hidden from people and assistive tech, bots tend to fill it. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label>
          Website
          <input type="text" name="website" tabIndex={-1} autoComplete="off" defaultValue="" />
        </label>
      </div>

      <div>
        <div className="flex items-start gap-3">
          <input
            id={`${id}-consent`}
            type="checkbox"
            className="mt-1 h-6 w-6 shrink-0 accent-green-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-800 focus-visible:ring-offset-2"
            {...aria("consent")}
            {...register("consent")}
          />
          <label htmlFor={`${id}-consent`} className="text-sm">
            I agree to be contacted about my enquiry and accept the{" "}
            <a href="/privacy-policy" className="font-semibold underline">
              privacy policy
            </a>
            . <span aria-hidden="true">*</span>
          </label>
        </div>
        {fieldError("consent")}
      </div>

      {serverError && (
        <div
          role="alert"
          className="rounded-lg border border-red-700/40 bg-red-50 p-4 text-sm text-red-900"
        >
          <p className="font-semibold">Sorry, we could not send your enquiry just now.</p>
          <p className="mt-1">
            Please call us directly: <PhoneLinks /> or email{" "}
            <a href={`mailto:${site.emails[0]}`} className="underline">
              {site.emails[0]}
            </a>
            .
          </p>
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-green-900 px-6 py-3 text-base font-semibold text-ivory-50 hover:bg-green-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-900 focus-visible:ring-offset-2 disabled:opacity-60"
      >
        {isSubmitting ? "Sending…" : "Send enquiry"}
      </button>
    </form>
  );
}

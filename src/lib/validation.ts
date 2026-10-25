import { z } from "zod";
import { services } from "@/content/services";

export const serviceOptions = [...services.map((s) => s.name), "Insurance", "Not sure"] as const;

const indianMobile = /^(?:\+91[\s-]?|91[\s-]?|0)?[6-9]\d{9}$/;

const optionalText = (max: number) =>
  z
    .string()
    .trim()
    .max(max, `Please keep this under ${max} characters`)
    .optional()
    .transform((v) => (v ? v : undefined));

export const enquirySchema = z.object({
  fullName: z.string().trim().min(2, "Please enter your full name").max(120, "Name is too long"),
  phone: z
    .string()
    .trim()
    .refine(
      (v) => indianMobile.test(v.replace(/[\s-]/g, "")),
      "Enter a valid 10-digit Indian mobile number (+91 allowed)",
    ),
  email: z
    .string()
    .trim()
    .max(160)
    .refine((v) => v === "" || z.email().safeParse(v).success, "Enter a valid email address")
    .optional()
    .transform((v) => (v ? v : undefined)),
  service: z
    .string()
    .trim()
    .max(80)
    .refine(
      (v) => v === "" || (serviceOptions as readonly string[]).includes(v),
      "Choose a service from the list",
    )
    .optional()
    .transform((v) => (v ? v : undefined)),
  companyNames: optionalText(300),
  location: optionalText(120),
  message: optionalText(1000),
  consent: z.boolean().refine((v) => v === true, "Please accept to continue"),
});

export type EnquiryInput = z.input<typeof enquirySchema>;
export type EnquiryData = z.output<typeof enquirySchema>;

/** Normalise to +91XXXXXXXXXX. */
export function normalisePhone(raw: string): string {
  const digits = raw.replace(/\D/g, "");
  return `+91${digits.slice(-10)}`;
}

import Link from "next/link";
import type { ReactNode } from "react";

export const container = "mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8";

type Variant = "primary" | "gold" | "outline" | "outlineLight";
export const btn = (variant: Variant = "primary", extra = "") =>
  [
    "inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
    variant === "primary" &&
      "bg-green-900 text-ivory-50 hover:bg-green-800 focus-visible:ring-green-900",
    variant === "gold" &&
      "bg-gold-400 text-green-900 hover:bg-gold-200 focus-visible:ring-gold-400 focus-visible:ring-offset-green-900",
    variant === "outline" &&
      "border border-green-900 text-green-900 hover:bg-green-900 hover:text-ivory-50 focus-visible:ring-green-900",
    variant === "outlineLight" &&
      "border border-ivory-50/60 text-ivory-50 hover:bg-ivory-50 hover:text-green-900 focus-visible:ring-gold-400 focus-visible:ring-offset-green-900",
    extra,
  ]
    .filter(Boolean)
    .join(" ");

export function Section({
  children,
  tone = "ivory",
  id,
  className = "",
}: {
  children: ReactNode;
  tone?: "ivory" | "sand" | "dark";
  id?: string;
  className?: string;
}) {
  const bg =
    tone === "dark"
      ? "bg-green-900 text-ivory-50"
      : tone === "sand"
        ? "bg-sand-100"
        : "bg-ivory-50";
  return (
    <section id={id} className={`${bg} py-16 sm:py-24 ${className}`}>
      <div className={container}>{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  lead,
  dark = false,
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
  dark?: boolean;
}) {
  return (
    <div className="mb-10 max-w-2xl sm:mb-14">
      {eyebrow && (
        <p
          className={`mb-3 text-xs font-extrabold uppercase tracking-[0.18em] ${dark ? "text-gold-400" : "text-gold-700"}`}
        >
          {eyebrow}
        </p>
      )}
      <h2 className="font-heading text-3xl font-bold leading-tight sm:text-5xl">{title}</h2>
      {lead && <p className={`mt-4 text-lg ${dark ? "text-ivory-50/85" : "text-muted"}`}>{lead}</p>}
    </div>
  );
}

export function TextLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      href={href}
      className="font-semibold text-green-800 underline decoration-gold-400 decoration-2 underline-offset-4 hover:text-green-900"
    >
      {children}
    </Link>
  );
}

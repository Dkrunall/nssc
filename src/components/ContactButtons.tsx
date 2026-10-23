"use client";

import { site, whatsappLink } from "@/config/site";
import { track } from "@/lib/track";
import { btn } from "./ui";
import { PhoneIcon, WhatsAppIcon } from "./Icons";

type Variant = Parameters<typeof btn>[0];

export function CallButton({
  label = "Call now",
  variant = "primary",
  className = "",
  index = 0,
}: {
  label?: string;
  variant?: Variant;
  className?: string;
  index?: number;
}) {
  const phone = site.phones[index];
  return (
    <a
      href={`tel:${phone.e164}`}
      onClick={() => track("call_click", { number: phone.e164 })}
      className={btn(variant, className)}
    >
      <PhoneIcon />
      {label}
    </a>
  );
}

/** Renders nothing when NEXT_PUBLIC_WHATSAPP_NUMBER is not set. */
export function WhatsAppButton({
  label = "WhatsApp us",
  variant = "outline",
  className = "",
}: {
  label?: string;
  variant?: Variant;
  className?: string;
}) {
  if (!whatsappLink) return null;
  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => track("whatsapp_click")}
      className={btn(variant, className)}
    >
      <WhatsAppIcon />
      {label}
    </a>
  );
}

export function PhoneLinks({ className = "" }: { className?: string }) {
  return (
    <span className={className}>
      {site.phones.map((p, i) => (
        <span key={p.e164}>
          {i > 0 && " · "}
          <a
            href={`tel:${p.e164}`}
            onClick={() => track("call_click", { number: p.e164 })}
            className="font-semibold underline-offset-4 hover:underline"
          >
            {p.display}
          </a>
        </span>
      ))}
    </span>
  );
}

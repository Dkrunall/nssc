"use client";

import { site, whatsappLink } from "@/config/site";
import { track } from "@/lib/track";
import { PhoneIcon, WhatsAppIcon } from "./Icons";

export function StickyContactBar() {
  const cell =
    "flex min-h-14 flex-1 items-center justify-center gap-2 text-sm font-bold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-gold-400";
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 flex border-t border-green-900/20 shadow-[0_-4px_16px_rgba(10,58,45,0.15)] lg:hidden"
      role="region"
      aria-label="Quick contact"
    >
      <a
        href={`tel:${site.phones[0].e164}`}
        onClick={() => track("call_click", { source: "sticky" })}
        className={`${cell} bg-green-900 text-ivory-50`}
      >
        <PhoneIcon /> Call
      </a>
      {whatsappLink && (
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => track("whatsapp_click", { source: "sticky" })}
          className={`${cell} bg-gold-400 text-green-900`}
        >
          <WhatsAppIcon /> WhatsApp
        </a>
      )}
    </div>
  );
}

import type { Faq as FaqItem } from "@/content/faqs";

export function FaqList({ items, dark = false }: { items: FaqItem[]; dark?: boolean }) {
  return (
    <div
      className={`divide-y ${dark ? "divide-ivory-50/20" : "divide-green-900/15"} border-y ${dark ? "border-ivory-50/20" : "border-green-900/15"}`}
    >
      {items.map((f) => (
        <details key={f.q} className="group">
          <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 py-4 text-left text-lg font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-800 [&::-webkit-details-marker]:hidden">
            <span>{f.q}</span>
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5 shrink-0 transition-transform group-open:rotate-45"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <path d="M12 5v14M5 12h14" />
            </svg>
          </summary>
          <p className={`pb-5 pr-9 ${dark ? "text-ivory-50/85" : "text-muted"}`}>{f.a}</p>
        </details>
      ))}
    </div>
  );
}

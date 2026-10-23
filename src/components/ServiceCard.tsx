import Link from "next/link";
import type { Service } from "@/content/services";
import { ArrowIcon, ServiceSvg } from "./Icons";

export function ServiceCard({ s }: { s: Service }) {
  return (
    <Link
      href={`/services/${s.slug}`}
      className="group flex h-full flex-col rounded-2xl border border-green-900/10 bg-white p-6 shadow-soft transition hover:-translate-y-0.5 hover:border-gold-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-900"
    >
      <span className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-green-900 text-gold-400">
        <ServiceSvg name={s.icon} />
      </span>
      <h3 className="font-heading text-2xl font-bold text-green-900">{s.name}</h3>
      <p className="mt-2 flex-1 text-muted">{s.short}</p>
      <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-green-800 group-hover:text-gold-700">
        Learn more <ArrowIcon />
      </span>
    </Link>
  );
}

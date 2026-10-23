import Link from "next/link";
import { JsonLd } from "./JsonLd";
import { breadcrumbLd } from "@/lib/jsonld";
import { container } from "./ui";

export function Breadcrumbs({ items }: { items: { name: string; path: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="bg-sand-100">
      <JsonLd data={breadcrumbLd(items)} />
      <ol className={`${container} flex flex-wrap items-center gap-2 py-3 text-sm text-muted`}>
        <li>
          <Link href="/" className="hover:underline">
            Home
          </Link>
        </li>
        {items.map((it, i) => (
          <li key={it.path} className="flex items-center gap-2">
            <span aria-hidden="true">/</span>
            {i === items.length - 1 ? (
              <span aria-current="page" className="font-semibold text-green-900">
                {it.name}
              </span>
            ) : (
              <Link href={it.path} className="hover:underline">
                {it.name}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

import type { ReactNode } from "react";
import { container } from "./ui";

export function PageHero({
  eyebrow,
  title,
  lead,
  children,
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
  children?: ReactNode;
}) {
  return (
    <div className="bg-ivory-50 pb-12 pt-12 sm:pb-16 sm:pt-20">
      <div className={container}>
        <div className="max-w-3xl">
          {eyebrow && (
            <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.18em] text-gold-700">
              {eyebrow}
            </p>
          )}
          <h1 className="font-heading text-4xl font-bold leading-tight text-green-900 sm:text-6xl">
            {title}
          </h1>
          {lead && <p className="mt-5 text-lg text-muted sm:text-xl">{lead}</p>}
          {children}
        </div>
      </div>
    </div>
  );
}

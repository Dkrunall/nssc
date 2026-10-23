import { testimonials } from "@/content/testimonials";
import { Section, SectionHeading } from "./ui";

/** Renders nothing until real entries exist in src/content/testimonials.ts. */
export function Testimonials() {
  if (testimonials.length === 0) return null;
  return (
    <Section tone="sand">
      <SectionHeading eyebrow="Client words" title="What clients say" />
      <div className="grid gap-6 md:grid-cols-3">
        {testimonials.map((t) => (
          <figure key={t.name} className="rounded-2xl bg-white p-6 shadow-soft">
            <blockquote className="text-green-900">“{t.quote}”</blockquote>
            <figcaption className="mt-4 text-sm font-bold text-muted">
              {t.name}
              {t.location ? `, ${t.location}` : ""}
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}

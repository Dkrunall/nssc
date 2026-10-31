import Link from "next/link";
import { otherServices, otherServicesNote } from "@/content/otherServices";
import { CallButton } from "./ContactButtons";
import { CheckIcon } from "./Icons";
import { Section, SectionHeading, btn } from "./ui";

export function OtherServices() {
  return (
    <Section tone="dark">
      <SectionHeading
        dark
        eyebrow="Also available"
        title="Other services"
        lead="Beyond shares, we also help with these everyday documents and applications."
      />
      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {otherServices.map((s) => (
          <li key={s.name} className="flex gap-4 rounded-2xl bg-ivory-50/5 p-6">
            <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gold-400 text-green-900">
              <CheckIcon className="h-4 w-4" />
            </span>
            <div>
              <h3 className="text-lg font-extrabold">{s.name}</h3>
              <p className="mt-1 text-sm text-ivory-50/80">{s.body}</p>
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-8 flex flex-wrap gap-3">
        <CallButton variant="gold" />
        <Link href="#contact-band" className={btn("outlineLight")}>
          Send an enquiry
        </Link>
      </div>
      <p className="mt-6 text-sm text-ivory-50/75">{otherServicesNote}</p>
    </Section>
  );
}

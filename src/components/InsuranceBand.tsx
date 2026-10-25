import Link from "next/link";
import { CallButton } from "./ContactButtons";
import { Section, SectionHeading, btn } from "./ui";

export function InsuranceBand() {
  return (
    <Section tone="dark">
      <div className="grid items-center gap-8 md:grid-cols-[1.4fr_1fr]">
        <SectionHeading
          dark
          eyebrow="Also available"
          title="All types of insurance"
          lead="Beyond shares, we also help with insurance paperwork and enquiries. Tell us what you need and we will guide you on the next step."
        />
        <div className="-mt-6 flex flex-wrap gap-3 md:mt-0 md:justify-end">
          <CallButton variant="gold" />
          <Link href="#contact-band" className={btn("outlineLight")}>
            Send an enquiry
          </Link>
        </div>
      </div>
      <p className="mt-6 text-sm text-ivory-50/75">
        Insurance support is guidance and documentation help only. NSSC is not an insurer and does
        not guarantee any claim or outcome.
      </p>
    </Section>
  );
}

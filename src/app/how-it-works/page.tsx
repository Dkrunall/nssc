import { pageMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageHero } from "@/components/PageHero";
import { Steps } from "@/components/Steps";
import { CtaBand } from "@/components/CtaBand";
import { Section, SectionHeading } from "@/components/ui";

export const metadata = pageMetadata({
  title: "How It Works | NSSC Share Certificate Help",
  description:
    "Our five-step process: share your details, document review, filing, follow-up and completion for your physical share request.",
  path: "/how-it-works",
});

export default function HowItWorks() {
  return (
    <>
      <Breadcrumbs items={[{ name: "How it works", path: "/how-it-works" }]} />
      <PageHero
        eyebrow="Process"
        title="How it works"
        lead="A simple, transparent process so you always know what has been done and what comes next."
      />
      <Section tone="sand">
        <Steps />
      </Section>
      {/* [FEES / HOW CHARGES WORK] - owner to edit this section. No numbers by design. */}
      <Section>
        <div className="max-w-3xl">
          <SectionHeading eyebrow="Fees" title="How our charges work" />
          <p className="-mt-6 text-lg text-muted">
            Charges depend on the nature of your case, the number of companies involved and the work
            required. We explain them upfront, before you decide to proceed, so there are no
            surprises.
          </p>
        </div>
      </Section>
      <CtaBand />
    </>
  );
}

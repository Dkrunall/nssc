import { pageMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/ui";

export const metadata = pageMetadata({
  title: "Disclaimer | NSSC",
  description:
    "NSSC is an independent consultancy. We are not affiliated with SEBI, MCA, the IEPF Authority, any company or registrar. No outcome is guaranteed.",
  path: "/disclaimer",
});

export default function Disclaimer() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Disclaimer", path: "/disclaimer" }]} />
      <PageHero eyebrow="Legal" title="Disclaimer" />
      <Section tone="sand">
        <ul className="max-w-3xl list-disc space-y-4 pl-5 text-lg text-muted">
          <li>
            Nayra Shares Solution &amp; Consultant (NSSC) is an independent consultancy. It assists
            shareholders with documentation and follow-up.
          </li>
          <li>
            NSSC is not a law firm and is not affiliated with SEBI, MCA, the IEPF Authority, or any
            company or registrar.
          </li>
          <li>
            Results depend on the company, the registrar and the authority concerned. NSSC does not
            guarantee any outcome or timeline.
          </li>
          <li>
            Information on this website is general and is not legal or financial advice. Please
            consult a qualified professional for advice on your situation.
          </li>
          <li>
            Document lists shown on this website are typical. Requirements vary by company and
            registrar.
          </li>
        </ul>
      </Section>
    </>
  );
}

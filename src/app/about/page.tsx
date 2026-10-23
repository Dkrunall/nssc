import { pageMetadata } from "@/lib/seo";
import { site } from "@/config/site";
import { whyUs } from "@/content/steps";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageHero } from "@/components/PageHero";
import { Monogram } from "@/components/Monogram";
import { CtaBand } from "@/components/CtaBand";
import { Testimonials } from "@/components/Testimonials";
import { Section } from "@/components/ui";
import { Flyer } from "@/components/Flyer";

export const metadata = pageMetadata({
  title: "About NSSC | Vicky N. Darji, Mumbai",
  description:
    "Nayra Shares Solution & Consultant is an independent Mumbai consultancy helping shareholders with physical share certificate paperwork.",
  path: "/about",
});

export default function About() {
  return (
    <>
      <Breadcrumbs items={[{ name: "About", path: "/about" }]} />
      <PageHero eyebrow="About us" title={`About ${site.shortName}`} lead={site.about} />
      <Section tone="sand">
        <div className="grid items-center gap-10 md:grid-cols-[auto_1fr]">
          <Monogram />
          <div className="space-y-4 text-lg text-muted">
            <h2 className="font-heading text-3xl font-bold text-green-900">
              {site.principal}, Principal
            </h2>
            <p>
              {site.name} is led by {site.principal}, with {site.experience.toLowerCase()} helping
              families and investors untangle physical share paperwork, and{" "}
              {site.clients.toLowerCase()}.
            </p>
            <p>
              We are an independent consultancy. We assist with documentation and follow-up with
              companies and registrars. We are not a law firm and are not affiliated with SEBI, MCA,
              the IEPF Authority or any company or registrar.
            </p>
          </div>
        </div>
      </Section>
      <Section>
        <div className="grid items-center gap-10 md:grid-cols-[1fr_auto]">
          <div className="max-w-xl space-y-4 text-lg text-muted">
            <h2 className="font-heading text-3xl font-bold text-green-900 sm:text-4xl">
              Our services at a glance
            </h2>
            <p>
              A quick summary of what we help with and how to reach us. See each service page for
              the documents typically needed.
            </p>
          </div>
          <Flyer />
        </div>
      </Section>
      <Section>
        <h2 className="mb-8 font-heading text-3xl font-bold sm:text-4xl">
          What you can expect from us
        </h2>
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyUs.map((w) => (
            <li key={w.title} className="rounded-2xl bg-white p-6 shadow-soft">
              <h3 className="text-lg font-extrabold">{w.title}</h3>
              <p className="mt-1 text-muted">{w.body}</p>
            </li>
          ))}
        </ul>
      </Section>
      <Testimonials />
      <CtaBand />
    </>
  );
}

import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import { professionalServiceLd } from "@/lib/jsonld";
import { site } from "@/config/site";
import { services } from "@/content/services";
import { homeFaqs } from "@/content/faqs";
import { problems, whyUs } from "@/content/steps";
import { JsonLd } from "@/components/JsonLd";
import { Hero } from "@/components/Hero";
import { ServiceCard } from "@/components/ServiceCard";
import { Steps } from "@/components/Steps";
import { FaqList } from "@/components/Faq";
import { CtaBand } from "@/components/CtaBand";
import { Testimonials } from "@/components/Testimonials";
import { Monogram } from "@/components/Monogram";
import { InsuranceBand } from "@/components/InsuranceBand";
import { Flyer } from "@/components/Flyer";
import { Reveal } from "@/components/Reveal";
import { CheckIcon } from "@/components/Icons";
import { Section, SectionHeading, TextLink } from "@/components/ui";

export const metadata = pageMetadata({
  title: "Physical Share Certificate Help in Mumbai | NSSC",
  description:
    "Transmission after death, duplicate certificates, name correction, IEPF claims and demat of physical shares. Mumbai-based, NRIs supported remotely.",
  path: "/",
});

export default function Home() {
  return (
    <>
      <JsonLd data={professionalServiceLd()} />
      <Hero />

      <Section tone="sand">
        <SectionHeading
          eyebrow="Does this sound familiar?"
          title="Problems we help shareholders solve"
        />
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {problems.map((p, i) => (
            <li key={p}>
              <Reveal
                delay={i * 0.05}
                className="h-full rounded-2xl border-l-4 border-gold-400 bg-white p-6 shadow-soft"
              >
                <p className="font-heading text-2xl font-semibold italic leading-snug">“{p}”</p>
              </Reveal>
            </li>
          ))}
        </ul>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Our services"
          title="Help for every kind of physical share issue"
          lead="From transmission after death to demat conversion, each service has its own page with the documents typically needed."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <ServiceCard key={s.slug} s={s} />
          ))}
        </div>
      </Section>

      <Section tone="sand">
        <SectionHeading
          eyebrow="How it works"
          title="A clear process, from first call to completion"
        />
        <Steps />
        <p className="mt-8">
          <TextLink href="/how-it-works">See the full process</TextLink>
        </p>
      </Section>

      <Section>
        <SectionHeading eyebrow="Why choose us" title="Calm, careful help with your paperwork" />
        <ul className="grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {whyUs.map((w) => (
            <li key={w.title} className="flex gap-4">
              <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-900 text-gold-400">
                <CheckIcon className="h-4 w-4" />
              </span>
              <div>
                <h3 className="text-lg font-extrabold">{w.title}</h3>
                <p className="mt-1 text-muted">{w.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </Section>

      <Section>
        <div className="grid items-center gap-10 md:grid-cols-[1fr_auto]">
          <SectionHeading
            eyebrow="At a glance"
            title="Everything we help with, in one page"
            lead="Eight services, one point of contact. Call, email or visit our Dahisar (E) office."
          />
          <Flyer />
        </div>
      </Section>

      <InsuranceBand />

      <Section tone="sand">
        <div className="grid items-center gap-10 md:grid-cols-[auto_1fr]">
          <Monogram />
          <div>
            <SectionHeading eyebrow="About NSSC" title={`Led by ${site.principal}`} />
            <p className="-mt-6 max-w-2xl text-lg text-muted">{site.about}</p>
            <p className="mt-4 font-bold">
              {site.experience} · {site.clients}
            </p>
            <p className="mt-4">
              <TextLink href="/about">More about us</TextLink>
            </p>
          </div>
        </div>
      </Section>

      <Testimonials />

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading
            eyebrow="Questions"
            title="Common questions"
            lead="Straight answers to what shareholders ask us most."
          />
          <div>
            <FaqList items={homeFaqs} />
            <p className="mt-6">
              <Link
                href="/faq"
                className="font-semibold underline decoration-gold-400 decoration-2 underline-offset-4"
              >
                Read all FAQs
              </Link>
            </p>
          </div>
        </div>
      </Section>

      <CtaBand />
    </>
  );
}

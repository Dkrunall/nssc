import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getService, requirementsNote, services } from "@/content/services";
import { pageMetadata } from "@/lib/seo";
import { faqLd } from "@/lib/jsonld";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageHero } from "@/components/PageHero";
import { CallButton } from "@/components/ContactButtons";
import { FaqList } from "@/components/Faq";
import { CtaBand } from "@/components/CtaBand";
import { CheckIcon } from "@/components/Icons";
import { Section, btn } from "@/components/ui";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;
export const generateStaticParams = () => services.map((s) => ({ slug: s.slug }));

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const s = getService((await params).slug);
  if (!s) return {};
  return pageMetadata({
    title: s.metaTitle,
    description: s.metaDescription,
    path: `/services/${s.slug}`,
  });
}

export default async function ServicePage({ params }: Props) {
  const s = getService((await params).slug);
  if (!s) notFound();
  const related = s.related.map((r) => getService(r)).filter((r) => !!r);

  return (
    <>
      <JsonLd data={faqLd(s.faqs)} />
      <Breadcrumbs
        items={[
          { name: "Services", path: "/services" },
          { name: s.name, path: `/services/${s.slug}` },
        ]}
      />
      <PageHero eyebrow="Service" title={s.name} lead={s.intro}>
        <div className="mt-8 flex flex-wrap gap-3">
          <CallButton />
          <Link href="#contact-band" className={btn("outline")}>
            Send an enquiry
          </Link>
        </div>
      </PageHero>

      <Section tone="sand">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div className="space-y-5 text-lg text-muted">
            {s.body.map((p) => (
              <p key={p}>{p}</p>
            ))}
            <h2 className="pt-4 font-heading text-3xl font-bold text-green-900">
              Common challenges
            </h2>
            <ul className="list-disc space-y-2 pl-5">
              {s.challenges.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
            <h2 className="pt-4 font-heading text-3xl font-bold text-green-900">What to expect</h2>
            <p>
              We start with a short conversation to understand your situation, then tell you plainly
              what is needed and how charges work before you decide to proceed. Timelines depend on
              the company and its registrar, so we keep you updated rather than promise dates.
            </p>
          </div>
          <aside className="h-fit rounded-2xl bg-white p-6 shadow-soft">
            <h2 className="font-heading text-2xl font-bold">Who needs this</h2>
            <ul className="mt-4 space-y-3">
              {s.who.map((w) => (
                <li key={w} className="flex gap-3">
                  <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-green-800" />
                  <span>{w}</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </Section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-heading text-3xl font-bold sm:text-4xl">How we help</h2>
            <ol className="mt-6 space-y-4">
              {s.how.map((h, i) => (
                <li key={h} className="flex gap-4">
                  <span
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-green-900 text-sm font-extrabold text-gold-400"
                    aria-hidden="true"
                  >
                    {i + 1}
                  </span>
                  <span className="pt-1">{h}</span>
                </li>
              ))}
            </ol>
          </div>
          <div>
            <h2 className="font-heading text-3xl font-bold sm:text-4xl">
              Documents usually required
            </h2>
            <p className="mt-2 text-sm font-semibold text-gold-700">
              Typical list, subject to the company or registrar
            </p>
            <ul className="mt-6 space-y-3">
              {s.documents.map((d) => (
                <li key={d} className="flex gap-3">
                  <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-green-800" />
                  <span>{d}</span>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm text-muted">{requirementsNote}</p>
          </div>
        </div>
      </Section>

      <Section tone="sand">
        <h2 className="mb-8 font-heading text-3xl font-bold sm:text-4xl">
          Questions about {s.name.toLowerCase()}
        </h2>
        <div className="max-w-3xl">
          <FaqList items={s.faqs} />
        </div>
      </Section>

      <Section>
        <h2 className="mb-6 font-heading text-3xl font-bold">Related services</h2>
        <ul className="flex flex-wrap gap-3">
          {related.map((r) => (
            <li key={r.slug}>
              <Link
                href={`/services/${r.slug}`}
                className="inline-flex min-h-12 items-center rounded-full border border-green-900/30 px-5 font-semibold hover:border-gold-400 hover:bg-white"
              >
                {r.name}
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <CtaBand defaultService={s.name} title={`Need help with ${s.name.toLowerCase()}?`} />
    </>
  );
}

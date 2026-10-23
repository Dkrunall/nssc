import { pageMetadata } from "@/lib/seo";
import { faqLd } from "@/lib/jsonld";
import { generalFaqs } from "@/content/faqs";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageHero } from "@/components/PageHero";
import { FaqList } from "@/components/Faq";
import { CtaBand } from "@/components/CtaBand";
import { Section } from "@/components/ui";

export const metadata = pageMetadata({
  title: "FAQ: Physical Share Certificates | NSSC",
  description:
    "Answers on transmission, duplicate certificates, IEPF claims, name correction, demat and NRI shareholders.",
  path: "/faq",
});

export default function FaqPage() {
  return (
    <>
      <JsonLd data={faqLd(generalFaqs)} />
      <Breadcrumbs items={[{ name: "FAQ", path: "/faq" }]} />
      <PageHero
        eyebrow="FAQ"
        title="Frequently asked questions"
        lead="If your question is not here, call or message us."
      />
      <Section tone="sand">
        <div className="max-w-3xl">
          <FaqList items={generalFaqs} />
        </div>
      </Section>
      <CtaBand />
    </>
  );
}

import { pageMetadata } from "@/lib/seo";
import { services } from "@/content/services";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageHero } from "@/components/PageHero";
import { ServiceCard } from "@/components/ServiceCard";
import { CtaBand } from "@/components/CtaBand";
import { Section } from "@/components/ui";

export const metadata = pageMetadata({
  title: "Share Certificate Services | NSSC Mumbai",
  description:
    "Transmission, duplicate certificates, name correction, IEPF claims, demat, NRI support and more. Services for physical shares.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Services", path: "/services" }]} />
      <PageHero
        eyebrow="Services"
        title="Services for physical share issues"
        lead="Whatever has happened to your physical share certificates, there is usually a documented route to resolve it. Choose a service to see how we help."
      />
      <Section>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <ServiceCard key={s.slug} s={s} />
          ))}
        </div>
      </Section>
      <CtaBand />
    </>
  );
}

import { site, siteUrl } from "@/config/site";
import { services } from "@/content/services";
import type { Faq } from "@/content/faqs";

export const professionalServiceLd = () => ({
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.name,
  alternateName: site.shortName,
  description: site.about,
  url: siteUrl,
  image: `${siteUrl}/brand/logo-light.png`,
  logo: `${siteUrl}/brand/icon.png`,
  telephone: site.phones.map((p) => p.e164),
  email: site.emails[0],
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.line,
    addressLocality: site.address.city,
    postalCode: site.address.postalCode,
    addressRegion: site.address.region,
    addressCountry: site.address.country,
  },
  areaServed: [
    { "@type": "City", name: "Mumbai" },
    { "@type": "Country", name: "India" },
  ],
  serviceType: services.map((s) => s.name),
});

export const faqLd = (faqs: Faq[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
});

export const breadcrumbLd = (items: { name: string; path: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [{ name: "Home", path: "/" }, ...items].map((it, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: it.name,
    item: `${siteUrl}${it.path === "/" ? "" : it.path}`,
  })),
});

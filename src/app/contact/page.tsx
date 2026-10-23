import { pageMetadata } from "@/lib/seo";
import { site } from "@/config/site";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageHero } from "@/components/PageHero";
import { EnquiryForm } from "@/components/EnquiryForm";
import { CallButton, PhoneLinks, WhatsAppButton } from "@/components/ContactButtons";
import { Section, btn } from "@/components/ui";

export const metadata = pageMetadata({
  title: "Contact NSSC | Dahisar East, Mumbai",
  description:
    "Call, WhatsApp or email Nayra Shares Solution & Consultant in Dahisar (E), Mumbai 400068, or send an enquiry online.",
  path: "/contact",
});

export default function Contact() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Contact", path: "/contact" }]} />
      <PageHero
        eyebrow="Contact"
        title="Talk to us about your shares"
        lead="Call, message or send an enquiry. NRI, OCI and PIO shareholders are supported remotely."
      />
      <Section tone="sand">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-6 text-lg">
            <div>
              <h2 className="font-heading text-2xl font-bold">Phone</h2>
              <p className="mt-1">
                <PhoneLinks />
              </p>
            </div>
            <div>
              <h2 className="font-heading text-2xl font-bold">Email</h2>
              {site.emails.map((e) => (
                <p key={e} className="mt-1 break-all">
                  <a href={`mailto:${e}`} className="underline underline-offset-4">
                    {e}
                  </a>
                </p>
              ))}
            </div>
            <div>
              <h2 className="font-heading text-2xl font-bold">Office</h2>
              <address className="mt-1 not-italic text-muted">{site.address.full}</address>
              <p className="mt-1 text-muted">Hours: {site.hours}</p>
              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  href={site.address.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={btn("outline")}
                >
                  Open in Google Maps
                </a>
                {/* [GOOGLE BUSINESS PROFILE LINK] - set googleBusinessUrl in src/config/site.ts */}
                {site.googleBusinessUrl && (
                  <a
                    href={site.googleBusinessUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={btn("outline")}
                  >
                    Google Business Profile
                  </a>
                )}
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <CallButton />
              <WhatsAppButton />
            </div>
          </div>
          <EnquiryForm id="contact" />
        </div>
      </Section>
    </>
  );
}

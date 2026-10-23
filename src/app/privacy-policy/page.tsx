import { pageMetadata } from "@/lib/seo";
import { site } from "@/config/site";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/ui";

export const metadata = pageMetadata({
  title: "Privacy Policy | NSSC",
  description:
    "How Nayra Shares Solution & Consultant collects, uses and stores the personal data you share through this website.",
  path: "/privacy-policy",
});

const h2 = "mt-10 font-heading text-3xl font-bold text-green-900";

export default function Privacy() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Privacy policy", path: "/privacy-policy" }]} />
      <PageHero eyebrow="Legal" title="Privacy policy" />
      <Section tone="sand">
        <div className="max-w-3xl space-y-4 text-lg text-muted">
          <p className="rounded-lg border border-gold-600/40 bg-white p-4 text-base">
            This is a general template. The owner should have it reviewed by a lawyer before relying
            on it.
          </p>
          <h2 className={h2}>What we collect</h2>
          <p>
            When you send an enquiry we collect your name, mobile number, email address (optional),
            the service you need, company names, city or country, and any message you write. We also
            record the page you submitted the form from.
          </p>
          <h2 className={h2}>Why we collect it</h2>
          <p>
            We use this information only to respond to your enquiry, understand your case and
            contact you about it. We do not sell your data or use it for unrelated marketing.
          </p>
          <h2 className={h2}>Who can access it</h2>
          <p>
            Access is limited to NSSC staff who need it to respond to you. Enquiries reach us by
            email, either through your own email app or through a third-party form service that
            processes them on our behalf.
          </p>
          <h2 className={h2}>Storage and retention</h2>
          <p>
            Enquiries are held in our email inbox. We keep them for [RETENTION PERIOD] and then
            delete or anonymise them, unless we need them longer to complete work you asked us to
            do.
          </p>
          <h2 className={h2}>Cookies</h2>
          <p>This website does not currently use analytics or advertising cookies.</p>
          <h2 className={h2}>Your rights and deletion requests</h2>
          <p>
            You can ask us to access, correct or delete your data by writing to{" "}
            <a href={`mailto:${site.emails[0]}`} className="font-semibold underline">
              {site.emails[0]}
            </a>
            .
          </p>
          <h2 className={h2}>Contact</h2>
          <p>
            {site.name}, {site.address.full}.
          </p>
        </div>
      </Section>
    </>
  );
}

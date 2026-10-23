import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { PhoneLinks } from "@/components/ContactButtons";
import { btn } from "@/components/ui";

export const metadata: Metadata = {
  title: { absolute: "Thank you | NSSC" },
  robots: { index: false, follow: false },
};

export default function ThankYou() {
  return (
    <PageHero
      eyebrow="Enquiry received"
      title="Thank you. We will be in touch."
      lead="We have received your enquiry and will contact you on the number you shared."
    >
      <p className="mt-6 text-muted">
        Need to talk sooner? Call <PhoneLinks />.
      </p>
      <Link href="/" className={`${btn("outline")} mt-8`}>
        Back to home
      </Link>
    </PageHero>
  );
}

import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { btn } from "@/components/ui";
import { CallButton } from "@/components/ContactButtons";

export const metadata = { title: "Page not found", robots: { index: false } };

export default function NotFound() {
  return (
    <PageHero
      eyebrow="Error 404"
      title="We could not find that page"
      lead="The page may have moved. You can head back home or speak to us directly."
    >
      <div className="mt-8 flex flex-wrap gap-3">
        <Link href="/" className={btn("primary")}>
          Back to home
        </Link>
        <CallButton variant="outline" />
      </div>
    </PageHero>
  );
}

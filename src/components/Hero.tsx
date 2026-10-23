import Link from "next/link";
import { site } from "@/config/site";
import { CallButton } from "./ContactButtons";
import { Logo } from "./Logo";
import { btn, container } from "./ui";

export function Hero() {
  return (
    <section className="bg-ivory-50 pb-16 pt-10 sm:pb-24 sm:pt-16">
      <div className={`${container} grid items-center gap-12 lg:grid-cols-[1.15fr_1fr]`}>
        <div>
          <p className="mb-4 text-xs font-extrabold uppercase tracking-[0.18em] text-gold-700">
            {site.secondary}
          </p>
          <h1 className="font-heading text-5xl font-bold leading-[1.05] text-green-900 sm:text-7xl">
            {site.tagline}
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted sm:text-xl">
            Lost, old or inherited physical share certificates? We guide you through the documents
            and follow-up with the company or its registrar, so you are not left to work it out
            alone.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <CallButton />
            <Link href="#contact-band" className={btn("outline")}>
              Send an enquiry
            </Link>
          </div>
          <ul className="mt-10 grid gap-4 border-t border-green-900/15 pt-6 text-sm font-bold text-green-900 sm:grid-cols-3">
            <li>{site.experience}</li>
            <li>{site.clients}</li>
            <li>Mumbai-based, NRIs supported remotely</li>
          </ul>
        </div>
        <div className="mx-auto w-full max-w-md overflow-hidden rounded-3xl bg-white p-4 shadow-soft">
          <Logo
            variant="light"
            priority
            sizes="(min-width:1024px) 420px, 90vw"
            className="h-auto w-full"
          />
        </div>
      </div>
    </section>
  );
}

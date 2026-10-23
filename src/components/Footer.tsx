import Link from "next/link";
import { site } from "@/config/site";
import { services } from "@/content/services";
import { Logo } from "./Logo";
import { PhoneLinks } from "./ContactButtons";
import { SocialIcon } from "./Icons";
import { container } from "./ui";

export function Footer() {
  const socials = Object.entries(site.social).filter(([, url]) => url);
  return (
    <footer className="bg-green-900 pb-24 text-ivory-50 lg:pb-0">
      <div className={`${container} grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4`}>
        <div>
          <div className="w-44 overflow-hidden rounded-xl">
            <Logo variant="dark" sizes="176px" className="h-auto w-full" />
          </div>
          <p className="mt-4 text-sm text-ivory-50/80">{site.tagline}</p>
          {socials.length > 0 && (
            <ul className="mt-4 flex gap-3">
              {socials.map(([name, url]) => (
                <li key={name}>
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={name}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-ivory-50/30 hover:bg-ivory-50 hover:text-green-900"
                  >
                    <SocialIcon name={name} />
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div>
          <h2 className="font-heading text-xl font-bold text-gold-400">Services</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="hover:text-gold-200 hover:underline">
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-heading text-xl font-bold text-gold-400">Quick links</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {[
              ...site.nav,
              { label: "Privacy policy", href: "/privacy-policy" },
              { label: "Disclaimer", href: "/disclaimer" },
            ].map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="hover:text-gold-200 hover:underline">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-heading text-xl font-bold text-gold-400">Contact</h2>
          <address className="mt-4 space-y-2 text-sm not-italic">
            <p>
              <PhoneLinks />
            </p>
            {site.emails.map((e) => (
              <p key={e}>
                <a href={`mailto:${e}`} className="break-all hover:underline">
                  {e}
                </a>
              </p>
            ))}
            <p className="pt-1 text-ivory-50/80">{site.address.full}</p>
            <p className="text-ivory-50/80">Hours: {site.hours}</p>
          </address>
        </div>
      </div>

      <div className="border-t border-ivory-50/15">
        <div className={`${container} space-y-2 py-6 text-xs text-ivory-50/75`}>
          <p>{site.disclaimerShort}</p>
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

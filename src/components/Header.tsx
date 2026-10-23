"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { site } from "@/config/site";
import { Logo } from "./Logo";
import { CallButton } from "./ContactButtons";
import { container } from "./ui";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 border-b border-green-900/10 bg-white/95 backdrop-blur transition-all ${scrolled ? "shadow-soft" : ""}`}
    >
      <div
        className={`${container} flex items-center justify-between gap-4 transition-all ${scrolled ? "h-14" : "h-20"}`}
      >
        <Link
          href="/"
          className="flex items-center gap-3 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-900"
          aria-label={`${site.name} home`}
        >
          <Logo
            variant="icon"
            priority
            sizes="56px"
            className={`w-auto transition-all ${scrolled ? "h-9" : "h-12"}`}
          />
          <span className="leading-tight">
            <span className="block font-heading text-2xl font-bold text-green-900">
              {site.shortName}
            </span>
            <span className="hidden text-[11px] font-semibold uppercase tracking-wider text-muted sm:block">
              Nayra Shares Solution &amp; Consultant
            </span>
          </span>
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-7 lg:flex">
          {site.nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              aria-current={pathname.startsWith(n.href) ? "page" : undefined}
              className="rounded text-sm font-semibold text-green-900 hover:text-gold-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-900 aria-[current=page]:text-gold-700"
            >
              {n.label}
            </Link>
          ))}
          <CallButton className="!min-h-10 !px-5 !py-2" />
        </nav>

        <button
          type="button"
          className="inline-flex h-12 w-12 items-center justify-center rounded-lg text-green-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-900 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <svg
            viewBox="0 0 24 24"
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            aria-hidden="true"
          >
            {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {open && (
        <nav
          id="mobile-menu"
          aria-label="Mobile"
          className="border-t border-green-900/10 bg-white lg:hidden"
        >
          <ul className={`${container} py-3`}>
            {site.nav.map((n) => (
              <li key={n.href}>
                <Link
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="flex min-h-14 items-center border-b border-green-900/10 text-lg font-semibold text-green-900"
                >
                  {n.label}
                </Link>
              </li>
            ))}
            <li className="py-4">
              <CallButton className="w-full" />
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

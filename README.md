# NSSC website

Marketing site and enquiry system for **Nayra Shares Solution & Consultant** (Mumbai).
Static Next.js (App Router, TypeScript strict) and Tailwind CSS.

## Setup

```bash
npm install --legacy-peer-deps   # pnpm install also works if you use pnpm
cp .env.example .env.local       # then fill in the values
npm run dev                      # http://localhost:3000
```

Other scripts: `npm run build`, `npm run lint`, `npm run typecheck`, `npm run format`.

## Environment variables

| Variable                      | Purpose                                                                                                                                            |
| ----------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL`        | Live domain, e.g. `https://yourdomain.in`. Used for canonical URLs, sitemap and JSON-LD.                                                           |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | Digits only with country code, e.g. `919004180377`. Empty = WhatsApp buttons are hidden.                                                           |
| `NEXT_PUBLIC_FORM_ENDPOINT`   | Optional form endpoint (e.g. Formspree `https://formspree.io/f/xxxx`). Empty = the form opens the visitor's email app with the enquiry pre-filled. |

`NEXT_PUBLIC_*` values are baked in at build time, so rebuild or redeploy after changing them.

## How enquiries work

This is a fully static site (`output: "export"`, no server or database). Create a free form endpoint at formspree.io (or similar), point it at your inbox and set `NEXT_PUBLIC_FORM_ENDPOINT`. Without it, submitting opens the visitor's email app addressed to `site.emails[0]`.

## Editing content

- Site-wide facts (name, phones, emails, address, hours, social links, nav): `src/config/site.ts`
- Services (copy, documents, FAQs per service): `src/content/services.ts`
- General FAQs: `src/content/faqs.ts`
- Process steps, problem cards, "why choose us": `src/content/steps.ts`
- Testimonials: `src/content/testimonials.ts` (section is hidden while empty)
- Logos: `public/brand/logo-light.png`, `logo-dark.png`, `icon.png`. The favicon is `src/app/icon.png` and `src/app/apple-icon.png`.

## Owner to-do (placeholders)

Search the project for these markers:

- [ ] `[WHATSAPP NUMBER]`: set `NEXT_PUBLIC_WHATSAPP_NUMBER`
- [ ] `[WEBSITE DOMAIN]`: set `NEXT_PUBLIC_SITE_URL`
- [ ] `[FULL OFFICE ADDRESS / LANDMARK]`: `src/config/site.ts`
- [ ] `[BUSINESS HOURS]`: `src/config/site.ts`
- [ ] `[TESTIMONIALS]`: add real entries in `src/content/testimonials.ts`
- [ ] `[FEES / HOW CHARGES WORK]`: review the Fees section in `src/app/how-it-works/page.tsx` (no numbers by design)
- [ ] `[SOCIAL LINKS]`: fill URLs in `site.social`; empty ones stay hidden
- [ ] `[PRINCIPAL PHOTO]`: replace `src/components/Monogram.tsx` with a photo
- [ ] `[GOOGLE BUSINESS PROFILE LINK]`: `googleBusinessUrl` in `src/config/site.ts`
- [ ] `[RETENTION PERIOD]`: in `src/app/privacy-policy/page.tsx`
- [ ] Review every `TODO: owner to review` service in `src/content/services.ts`
- [ ] Have the Privacy Policy and Disclaimer reviewed by a lawyer

## Deploying to Vercel

1. Push the project to GitHub and import it in Vercel (or any static host; the `out/` folder after `npm run build` is the whole site).
2. Add the environment variables above under Project Settings, Environment Variables.
3. Deploy, then submit `https://yourdomain/sitemap.xml` in Google Search Console and claim your Google Business Profile.

## Analytics and consent

No analytics or ad cookies are used, so no cookie banner is included. If you add analytics, add a consent banner first and wire the provider into `src/lib/track.ts` (a no-op today; `call_click`, `whatsapp_click` and `form_submit` already call it).

## Spam protection

The form uses a hidden honeypot and a 3-second minimum time-to-submit, plus whatever spam filtering your form service provides.

## Next steps (not built)

- Enquiry database and admin page if you outgrow email.

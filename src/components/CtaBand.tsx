import { site } from "@/config/site";
import { CallButton, PhoneLinks, WhatsAppButton } from "./ContactButtons";
import { EnquiryForm } from "./EnquiryForm";
import { MailIcon, PinIcon } from "./Icons";
import { Section } from "./ui";

export function CtaBand({
  defaultService = "",
  title = "Tell us about your shares",
}: {
  defaultService?: string;
  title?: string;
}) {
  return (
    <Section tone="dark" id="contact-band">
      <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.18em] text-gold-400">
            Get in touch
          </p>
          <h2 className="font-heading text-3xl font-bold leading-tight sm:text-5xl">{title}</h2>
          <p className="mt-4 text-lg text-ivory-50/85">
            Call, message or send an enquiry. We will review what you have and explain what is
            needed, with charges explained upfront.
          </p>
          <ul className="mt-8 space-y-4 text-lg">
            <li>
              <PhoneLinks />
            </li>
            {site.emails.map((e) => (
              <li key={e} className="flex items-center gap-2">
                <MailIcon className="h-5 w-5 shrink-0 text-gold-400" />
                <a href={`mailto:${e}`} className="break-all hover:underline">
                  {e}
                </a>
              </li>
            ))}
            <li className="flex items-start gap-2 text-base text-ivory-50/85">
              <PinIcon className="mt-1 h-5 w-5 shrink-0 text-gold-400" />
              <address className="not-italic">{site.address.full}</address>
            </li>
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <CallButton variant="gold" />
            <WhatsAppButton variant="outlineLight" />
          </div>
        </div>
        <EnquiryForm defaultService={defaultService} id="cta" />
      </div>
    </Section>
  );
}

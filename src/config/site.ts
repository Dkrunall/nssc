export const site = {
  name: "Nayra Shares Solution & Consultant",
  shortName: "NSSC",
  tagline: "Solutions for All Physical Share Issues",
  secondary: "Physical Shares · Recovered & Restored",
  principal: "Vicky N. Darji",
  experience: "9+ years experience",
  clients: "100+ clients served",
  phones: [
    { display: "90041 80377", e164: "+919004180377" },
    { display: "79770 45794", e164: "+917977045794" },
  ],
  emails: ["nayrasharessolution@gmail.com", "vickydarji55@gmail.com"],
  address: {
    line: "Dahisar (E)",
    city: "Mumbai",
    postalCode: "400068",
    region: "Maharashtra",
    country: "IN",
    // TODO: owner to add [FULL OFFICE ADDRESS / LANDMARK]
    full: "[FULL OFFICE ADDRESS / LANDMARK], Dahisar (E), Mumbai - 400068, Maharashtra, India",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Dahisar+East+Mumbai+400068",
  },
  // TODO: owner to add [BUSINESS HOURS]
  hours: "[BUSINESS HOURS]",
  // TODO: owner to add [GOOGLE BUSINESS PROFILE LINK]
  googleBusinessUrl: "",
  // [SOCIAL LINKS] - icons with an empty URL are hidden
  social: { facebook: "", instagram: "", linkedin: "", youtube: "" } as Record<string, string>,
  about:
    "We provide end-to-end assistance for shareholders to resolve issues related to physical share certificates and investor services. Our team guides you through the documentation and process to help complete your requests smoothly.",
  disclaimerShort:
    "NSSC is an independent consultancy, not affiliated with SEBI, MCA, the IEPF Authority or any company or registrar. Outcomes are not guaranteed.",
  nav: [
    { label: "Services", href: "/services" },
    { label: "How it works", href: "/how-it-works" },
    { label: "About", href: "/about" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
  ],
} as const;

export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000").replace(
  /\/$/,
  "",
);

export const whatsappNumber = (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "").replace(/\D/g, "");

export const whatsappLink = whatsappNumber
  ? `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      "Hello NSSC, I would like help with my physical shares.",
    )}`
  : "";

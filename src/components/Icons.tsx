import type { ServiceIcon } from "@/content/services";

const paths: Record<ServiceIcon, React.ReactNode> = {
  transmission: (
    <>
      <path d="M4 7h12m0 0-3-3m3 3-3 3" />
      <path d="M20 17H8m0 0 3-3m-3 3 3 3" />
    </>
  ),
  duplicate: (
    <>
      <rect x="8" y="8" width="12" height="12" rx="2" />
      <path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2" />
    </>
  ),
  name: (
    <>
      <path d="M4 20h4L19 9a2.8 2.8 0 0 0-4-4L4 16v4Z" />
      <path d="m13.5 6.5 4 4" />
    </>
  ),
  iepf: (
    <>
      <circle cx="12" cy="12" r="8" />
      <path d="M12 8v8m-2-6h3a1.5 1.5 0 0 1 0 3h-2a1.5 1.5 0 0 0 0 3h3" />
    </>
  ),
  demat: (
    <>
      <rect x="3" y="5" width="18" height="12" rx="2" />
      <path d="M8 21h8M12 17v4M9 11l2 2 4-4" />
    </>
  ),
  funds: (
    <>
      <path d="M4 20V10m6 10V4m6 16v-7m4 7H2" />
    </>
  ),
  nri: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" />
    </>
  ),
  compliance: (
    <>
      <path d="M12 3 5 6v5c0 4.5 3 8 7 10 4-2 7-5.5 7-10V6l-7-3Z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
};

export function ServiceSvg({
  name,
  className = "h-7 w-7",
}: {
  name: ServiceIcon;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}

export const PhoneIcon = ({ className = "h-5 w-5" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />
  </svg>
);

export const WhatsAppIcon = ({ className = "h-5 w-5" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M3 21l1.6-4.8A8.5 8.5 0 1 1 8 19.5L3 21Z" />
    <path d="M9 9c0 3 3 6 6 6l1.2-1.4-2-1-1 .6a4 4 0 0 1-2-2l.6-1-1-2L9 9Z" />
  </svg>
);

export const MailIcon = ({ className = "h-5 w-5" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </svg>
);

export const PinIcon = ({ className = "h-5 w-5" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M12 21s7-6 7-11a7 7 0 1 0-14 0c0 5 7 11 7 11Z" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
);

export const ArrowIcon = ({ className = "h-4 w-4" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M5 12h14m-5-5 5 5-5 5" />
  </svg>
);

export const CheckIcon = ({ className = "h-5 w-5" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="m5 12 4.5 4.5L19 7" />
  </svg>
);

const social: Record<string, string> = {
  facebook: "M14 8h3V4h-3a4 4 0 0 0-4 4v2H7v4h3v6h4v-6h3l1-4h-4V8Z",
  instagram:
    "M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4Zm5 6a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm5.5-2.5h.01",
  linkedin:
    "M4 9h4v11H4V9Zm2-5a2 2 0 1 1 0 4 2 2 0 0 1 0-4Zm5 5h4v2c1-2 6-2.5 6 2v7h-4v-6c0-2-3-2-3 0v6h-3V9Z",
  youtube:
    "M3 8a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V8Zm7 1.5v5l4.5-2.5L10 9.5Z",
};
export const SocialIcon = ({
  name,
  className = "h-5 w-5",
}: {
  name: string;
  className?: string;
}) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d={social[name] ?? ""} />
  </svg>
);

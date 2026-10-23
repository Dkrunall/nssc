export type Faq = { q: string; a: string };

export const generalFaqs: Faq[] = [
  {
    q: "I found old physical share certificates at home. What should I do first?",
    a: "Do not throw them away. Note the company name, folio number, certificate numbers and the name printed on them. Then contact us with these details and we will explain what each certificate may need, such as transmission, name correction or conversion to demat.",
  },
  {
    q: "What happens to shares when the shareholder has passed away?",
    a: "The shares need to be transmitted to the legal heirs or nominee through the company or its registrar. The documents depend on whether there is a nominee, a will or neither. We help you identify and prepare the paperwork.",
  },
  {
    q: "Can you help if my share certificate is lost or damaged?",
    a: "Yes. Companies usually allow a duplicate certificate to be issued after certain formalities, which commonly include an indemnity and an affidavit. We help you prepare these as per the company's requirements.",
  },
  {
    q: "I live abroad. Can I still get help?",
    a: "Yes. NRI, OCI and PIO shareholders are supported remotely by phone, email and WhatsApp, and we guide you on which documents may need attestation.",
  },
  {
    q: "How do I know if I have unclaimed shares or dividends?",
    a: "Shares and dividends that stay unclaimed for a long period may be transferred to the Investor Education and Protection Fund (IEPF). Share your name and the companies you hold shares in and we will guide you on how to check and claim.",
  },
  {
    q: "Do you guarantee that my request will be approved?",
    a: "No. Outcomes depend on the company, the registrar and the authority concerned. We help you prepare complete, correct documents and follow up on your behalf.",
  },
  {
    q: "What are your charges?",
    a: "Charges depend on the nature of the case and the number of companies involved. We explain them upfront before you decide to proceed.",
  },
  {
    q: "Are you affiliated with SEBI, a company or a registrar?",
    a: "No. NSSC is an independent consultancy that assists with documentation and follow-up. We are not a law firm and are not affiliated with SEBI, MCA, the IEPF Authority or any company or registrar.",
  },
];

export const homeFaqs: Faq[] = generalFaqs.slice(0, 4);

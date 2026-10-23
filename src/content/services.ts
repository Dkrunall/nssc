export type ServiceIcon =
  "transmission" | "duplicate" | "name" | "iepf" | "demat" | "funds" | "nri" | "compliance";

export type Service = {
  slug: string;
  name: string;
  short: string;
  icon: ServiceIcon;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  body: string[];
  who: string[];
  how: string[];
  documents: string[];
  challenges: string[];
  related: string[];
  faqs: { q: string; a: string }[];
};

export const requirementsNote =
  "Requirements vary by company and registrar. The list above is typical and may change for your case.";

/*
 * TODO: owner to review - every service below. Check the copy for accuracy before launch.
 * Keep statements general: no fees, timelines or guarantees.
 */
export const services: Service[] = [
  {
    // TODO: owner to review
    slug: "transmission-of-shares",
    name: "Transmission of shares",
    short: "Transfer physical shares to legal heirs or nominees after the shareholder's death.",
    icon: "transmission",
    metaTitle: "Transmission of Shares After Death | NSSC Mumbai",
    metaDescription:
      "Help with transmission of shares after death for physical share certificates. Documentation and follow-up with the company or registrar. Mumbai-based.",
    intro:
      "When a shareholder passes away, the shares do not automatically move into the names of the family. They have to be transmitted to the nominee or legal heirs through the company or its registrar, and the process can feel overwhelming at a difficult time.",
    body: [
      "Transmission of shares after death is a documentation exercise. The company or its registrar (RTA) wants proof of death, proof of who is entitled to the shares, and identity and address documents of the claimants. The exact set depends on whether a nominee was registered, whether there is a will, and whether there are several legal heirs.",
      "NSSC helps you understand which route applies to your family, prepares the forms and supporting papers, submits them to the company or its registrar and follows up until the request is processed. If the shares are spread across several companies, we handle them together so you deal with one point of contact.",
    ],
    who: [
      "Families who found physical share certificates of a deceased relative",
      "Nominees named in the shareholder's records",
      "Legal heirs where no nominee was registered",
      "Beneficiaries under a will",
      "Families with shares in several companies and no clear list",
    ],
    how: [
      "Review the certificates and records you already have",
      "Identify the transmission route that applies: nominee, will or legal heirs",
      "Prepare the forms, affidavits and declarations required",
      "Submit the documents to the company or registrar",
      "Track queries and keep you updated until completion",
    ],
    documents: [
      "Original share certificates",
      "Death certificate of the shareholder",
      "Identity and address proof of the claimants",
      "Nominee details or will, if available",
      "Legal heir or succession documents where applicable",
      "Bank details and PAN of the claimant",
    ],
    challenges: [
      "Missing or unclear records of who held which shares, especially when the holder managed everything personally.",
      "Disagreement or uncertainty among family members about who is entitled, which affects the documents a registrar will ask for.",
      "Several companies, each with a different registrar and its own format for forms and declarations.",
    ],
    related: [
      "physical-to-demat-conversion",
      "duplicate-share-certificate",
      "compliance-and-documentation",
    ],
    faqs: [
      {
        q: "Is a nominee needed for transmission?",
        a: "Not always. If a nominee is registered the process is usually simpler. Without one, the company may ask for additional documents to establish who the legal heirs are.",
      },
      {
        q: "Can shares in several companies be handled together?",
        a: "Yes. We prepare the paperwork for each company or registrar and track them in parallel.",
      },
      {
        q: "Can the shares be moved to demat after transmission?",
        a: "Often yes. Many families choose to convert to demat once the shares are in their names. See our physical to demat conversion service.",
      },
    ],
  },
  {
    // TODO: owner to review
    slug: "duplicate-share-certificate",
    name: "Duplicate share certificate",
    short: "Replacement of lost, stolen, damaged or destroyed share certificates.",
    icon: "duplicate",
    metaTitle: "Duplicate Share Certificate Help | NSSC Mumbai",
    metaDescription:
      "Lost or damaged share certificate? Get help with the documents and follow-up needed to apply for a duplicate share certificate. Based in Mumbai.",
    intro:
      "A lost, stolen, torn or burnt share certificate does not mean the shares are lost. Companies generally allow a duplicate share certificate to be issued after certain formalities are completed.",
    body: [
      "The usual steps involve informing the company or registrar about the loss, completing a set of declarations such as an affidavit and indemnity, and in some cases publishing a notice or filing a police complaint. What each company asks for differs, and a small mistake in the paperwork can send the application back.",
      "NSSC checks what you hold, finds out the requirement for the specific company, prepares the documents in the correct format and follows the application with the registrar. We also help when only part of the information is available, such as a missing folio number or certificate number, by guiding you on how to trace it.",
    ],
    who: [
      "Shareholders who have misplaced their certificates",
      "Families whose certificates were damaged by water, fire or age",
      "Holders of certificates that were stolen or destroyed",
      "People who know they own shares but have no records",
    ],
    how: [
      "Collect whatever details you have: company, folio, old statements",
      "Confirm the company's requirements for a duplicate",
      "Prepare the affidavit, indemnity and application forms",
      "Submit the request to the company or its registrar",
      "Follow up until the duplicate is issued or credited",
    ],
    documents: [
      "Details of the lost or damaged certificate, if known",
      "Identity and address proof of the shareholder",
      "Affidavit and indemnity in the company's format",
      "Police complaint or newspaper notice, where required",
      "PAN and bank details",
      "Damaged certificate, if it still exists",
    ],
    challenges: [
      "Not knowing the folio number, certificate numbers or even the exact company name, which makes the first enquiry hard.",
      "Differences between companies in whether they ask for a police complaint, a newspaper notice or an indemnity bond.",
      "Delays caused by small errors in affidavits or indemnity formats that lead the registrar to return the application.",
    ],
    related: [
      "physical-to-demat-conversion",
      "name-change-and-correction",
      "transmission-of-shares",
    ],
    faqs: [
      {
        q: "What if I do not remember the folio or certificate number?",
        a: "We can guide you on how to trace the details through the company or registrar using your name, address and other records.",
      },
      {
        q: "Is a police complaint always required?",
        a: "Not always. It depends on the company and the circumstances of the loss.",
      },
    ],
  },
  {
    // TODO: owner to review
    slug: "name-change-and-correction",
    name: "Name change and name correction",
    short: "Fix spelling differences, marriage name changes and mismatches on share records.",
    icon: "name",
    metaTitle: "Name Change in Share Certificate | NSSC Mumbai",
    metaDescription:
      "Name change or correction in share certificate and company records. Help with documents for spelling mismatches and marriage name changes. Mumbai.",
    intro:
      "A name that differs between your share certificate and your identity documents can block transfers, claims and conversion to demat. Name change and name correction bring the company's records in line with your current legal name.",
    body: [
      "Differences arise in many ways: a spelling variation, initials written in a different order, a surname changed after marriage, or a name changed by gazette notification. Old certificates are especially prone to such variations.",
      "Companies and registrars usually need proof that the person on the certificate and the person applying are the same individual. NSSC reviews the mismatch, explains which supporting documents are likely to be accepted, prepares the affidavit and request letters and follows the application with the registrar.",
    ],
    who: [
      "Shareholders whose name is spelled differently across documents",
      "Women who changed their surname after marriage",
      "People who changed their name by gazette notification",
      "Holders of old certificates with initials or order differences",
    ],
    how: [
      "Compare the certificate with your current identity documents",
      "Identify the type of mismatch and the proof needed",
      "Prepare the affidavit, request letter and forms",
      "Submit to the company or its registrar",
      "Track the update until the records are corrected",
    ],
    documents: [
      "Original share certificates",
      "Identity proof showing the current name",
      "Marriage certificate or gazette notification, where relevant",
      "Affidavit confirming the name variation",
      "Address proof and PAN",
    ],
    challenges: [
      "Old certificates that carry initials, a maiden name or a spelling that no longer matches current identity documents.",
      "Uncertainty about which supporting proof a particular registrar will accept for the same person.",
      "The need to correct the name before related steps such as transmission or demat can move forward.",
    ],
    related: [
      "physical-to-demat-conversion",
      "duplicate-share-certificate",
      "compliance-and-documentation",
    ],
    faqs: [
      {
        q: "Can a small spelling difference really cause a problem?",
        a: "It can. Registrars match names closely, so even minor differences may need an affidavit or other proof before the request is accepted.",
      },
      {
        q: "Do I need to correct the name before demat conversion?",
        a: "Usually the name on the certificate and on the demat account should match, so a correction may be needed first.",
      },
    ],
  },
  {
    // TODO: owner to review
    slug: "iepf-claim-assistance",
    name: "IEPF claim assistance",
    short:
      "Help claiming shares and dividends transferred to the Investor Education and Protection Fund.",
    icon: "iepf",
    metaTitle: "IEPF Claim Help for Unclaimed Shares | NSSC",
    metaDescription:
      "Assistance with IEPF claim for unclaimed shares and unclaimed dividend recovery. Documentation, filing support and follow-up. Mumbai-based.",
    intro:
      "When dividends remain unclaimed for a long period, companies are required to transfer the dividend and in some cases the underlying shares to the Investor Education and Protection Fund (IEPF). You can still claim them back through the prescribed process.",
    body: [
      "An IEPF claim is a multi-step process. It involves filing an online form with the IEPF Authority, sending the physical documents to the company's nodal officer and having the company verify the claim before it is forwarded for processing. Errors or missing documents commonly delay the process.",
      "NSSC helps you work out whether your shares or dividends may have been transferred, prepares the claim documents, guides you through the steps and follows up with the company. We are an independent consultancy and are not affiliated with the IEPF Authority. Whether a claim is accepted is decided by the authority concerned.",
    ],
    who: [
      "Shareholders who have not received dividends for several years",
      "Families who discovered old holdings with unclaimed dividends",
      "Legal heirs of a shareholder whose shares moved to IEPF",
      "Shareholders who changed address and missed company communication",
    ],
    how: [
      "Identify the companies and holdings that may be affected",
      "Check the status of the shares and dividends",
      "Prepare the claim form and supporting documents",
      "Guide the online filing and physical submission",
      "Follow up with the company and keep you updated",
    ],
    documents: [
      "Share certificate copies or folio and demat details",
      "Identity, address and PAN proof",
      "Cancelled cheque or bank proof",
      "Indemnity bond and other declarations in the prescribed format",
      "Death certificate and legal heir proof, if the holder has passed away",
    ],
    challenges: [
      "Not knowing which companies may have transferred your shares or dividends to the fund in the first place.",
      "A multi-stage process that combines an online filing with physical documents sent to the company.",
      "Delays when the claim documents are incomplete or do not match the records held by the company.",
    ],
    related: [
      "transmission-of-shares",
      "physical-to-demat-conversion",
      "compliance-and-documentation",
    ],
    faqs: [
      {
        q: "Can I get back shares that were moved to IEPF?",
        a: "A claim can be made through the prescribed process. Acceptance depends on the authority concerned, and we do not guarantee any outcome.",
      },
      {
        q: "Do you work for the IEPF Authority?",
        a: "No. NSSC is independent and assists with documentation and follow-up only.",
      },
    ],
  },
  {
    // TODO: owner to review
    slug: "physical-to-demat-conversion",
    name: "Physical to demat conversion",
    short: "Move physical share certificates into your demat account.",
    icon: "demat",
    metaTitle: "Demat of Physical Shares | NSSC Mumbai",
    metaDescription:
      "Help with demat of physical shares: documents, requests and follow-up to convert physical share certificates into your demat account. Mumbai.",
    intro:
      "Physical certificates are easy to lose and hard to sell. Converting them to demat, called dematerialisation, holds the shares electronically in your demat account and makes them easier to manage.",
    body: [
      "Dematerialisation is requested through a depository participant (DP), which sends the request and the certificates to the company's registrar. The request can be rejected if the names do not match, the certificates are damaged, or records are incomplete.",
      "NSSC reviews your certificates before you apply and flags anything that could cause rejection, such as a name mismatch, a lost certificate or a deceased holder. We then help you fix those points first, prepare the demat request and follow it up with the DP and registrar. Where the holding is in the name of someone who has passed away, transmission is usually needed first.",
    ],
    who: [
      "Investors holding old paper certificates",
      "Families who want to consolidate holdings into one demat account",
      "Shareholders who want to sell but hold physical shares",
      "Heirs who have completed transmission and want the shares in demat",
    ],
    how: [
      "Review the certificates and check for issues",
      "Resolve any name, loss or transmission problems first",
      "Prepare the demat request and supporting papers",
      "Coordinate with your depository participant and the registrar",
      "Track until the shares are credited to your demat account",
    ],
    documents: [
      "Original share certificates",
      "Demat account details",
      "Demat request form from your DP",
      "Identity proof and PAN",
      "Documents for any name correction or transmission, if needed",
    ],
    challenges: [
      "Rejections caused by name or signature mismatches between the certificate and the demat account.",
      "Old certificates that are damaged, torn or have missing details that the registrar cannot verify.",
      "Holdings still in the name of a deceased holder, which must be transmitted before conversion can proceed.",
    ],
    related: [
      "name-change-and-correction",
      "transmission-of-shares",
      "duplicate-share-certificate",
    ],
    faqs: [
      {
        q: "Why was my demat request rejected?",
        a: "Common reasons include name mismatches, signature differences and damaged or incomplete certificates. We review the rejection reason and help fix it.",
      },
      {
        q: "Do I need a demat account first?",
        a: "Yes. Shares are credited to a demat account in your name, which you can open through a depository participant.",
      },
    ],
  },
  {
    // TODO: owner to review
    slug: "mutual-funds-and-bonds",
    name: "Mutual funds and bonds",
    short: "Help with mutual fund units, bonds and related investor paperwork.",
    icon: "funds",
    metaTitle: "Mutual Funds and Bonds Paperwork Help | NSSC",
    metaDescription:
      "Assistance with mutual fund and bond related paperwork, claims and updates for investors and families. Documentation support from Mumbai.",
    intro:
      "Families often find mutual fund statements, bond certificates and old investment papers along with share certificates. We help you understand and complete the paperwork connected with them.",
    body: [
      "Mutual fund units and bonds each have their own procedures with the fund house, the issuer and its registrar. Typical tasks include updating contact details, claiming units of a deceased investor, replacing lost documents and redeeming matured holdings.",
      "NSSC helps you list what you hold, identify who to approach, prepare the forms and follow up. We do not give investment advice or recommend products. Our work is limited to documentation and process support.",
    ],
    who: [
      "Families who found old mutual fund or bond papers",
      "Legal heirs claiming units of a deceased investor",
      "Investors with matured bonds or unclaimed redemption amounts",
      "Holders who need to update address, bank or nominee details",
    ],
    how: [
      "List the funds and bonds you have papers for",
      "Identify the fund house, issuer or registrar for each",
      "Prepare the claim, update or redemption forms",
      "Submit the documents and follow up",
      "Update you on each request until it is closed",
    ],
    documents: [
      "Account statements or certificates",
      "Identity, address and PAN proof",
      "Bank details",
      "Death certificate and legal heir or nominee proof, where applicable",
      "Forms prescribed by the fund house or issuer",
    ],
    challenges: [
      "Papers that are decades old and no longer show the current name of the fund house or issuer after mergers or renames.",
      "Different procedures for each fund house, issuer and registrar, even for the same type of request.",
      "Unclaimed redemption amounts that are hard to trace without the right identity details.",
    ],
    related: ["transmission-of-shares", "compliance-and-documentation", "iepf-claim-assistance"],
    faqs: [
      {
        q: "Do you recommend which funds or bonds to buy?",
        a: "No. We provide documentation and process support only, not investment or financial advice.",
      },
      {
        q: "Can you help trace old mutual fund holdings?",
        a: "We can guide you on how to trace holdings using your identity details and old statements.",
      },
    ],
  },
  {
    // TODO: owner to review
    slug: "nri-oci-pio-support",
    name: "NRI / OCI / PIO support",
    short: "Remote assistance for overseas shareholders and families.",
    icon: "nri",
    metaTitle: "NRI Share Transfer India Support | NSSC Mumbai",
    metaDescription:
      "Remote help for NRI, OCI and PIO shareholders with physical shares in India: documents, filing and follow-up without travelling. Mumbai-based.",
    intro:
      "If you live outside India, dealing with physical shares in person can be difficult and expensive. NSSC supports NRI, OCI and PIO shareholders remotely, so most of the work can be done without you visiting India.",
    body: [
      "Overseas shareholders often face extra requirements such as attested identity documents, proof of overseas address and, in some cases, special declarations about their residential status. Rules for NRI share transfer in India also have their own conditions, which the company or registrar will apply.",
      "We communicate by phone, email and WhatsApp, explain what needs to be signed and attested abroad, receive the documents by courier and handle submission and follow-up in India. You stay informed at each stage and sign only what is needed.",
    ],
    who: [
      "NRIs with inherited or old physical shares in India",
      "OCI and PIO cardholders with Indian holdings",
      "Overseas families dealing with a relative's estate in India",
      "Shareholders who cannot travel to India for paperwork",
    ],
    how: [
      "Discuss your case by call or message in your time zone",
      "List the documents and the attestation needed abroad",
      "Receive the signed documents by courier or scan",
      "Submit and follow up in India on your behalf",
      "Update you at every step until completion",
    ],
    documents: [
      "Passport, OCI or PIO card copies",
      "Overseas address proof",
      "Attested or notarised declarations, where required",
      "Share certificates or holding details",
      "Indian bank and PAN details, if available",
    ],
    challenges: [
      "Attesting documents abroad, which often involves a notary or an embassy and takes coordination.",
      "Extra conditions that can apply to non-resident holders, which each company or registrar interprets in its own way.",
      "Time zone differences that slow down back-and-forth when queries arise.",
    ],
    related: [
      "transmission-of-shares",
      "physical-to-demat-conversion",
      "compliance-and-documentation",
    ],
    faqs: [
      {
        q: "Do I need to travel to India?",
        a: "In many cases no, but it depends on the company and the type of request. We tell you early if a personal visit may be needed.",
      },
      {
        q: "How do you handle time differences?",
        a: "We schedule calls at times that suit you and keep updates in writing so nothing is missed.",
      },
    ],
  },
  {
    // TODO: owner to review
    slug: "compliance-and-documentation",
    name: "Compliance and documentation support",
    short: "Identity document verification and paperwork guidance for any share-related request.",
    icon: "compliance",
    metaTitle: "Share Documentation & Compliance Support | NSSC",
    metaDescription:
      "Paperwork guidance and identity document verification for share-related requests. Clear checklists, correct forms and follow-up. Mumbai.",
    intro:
      "Most share requests are delayed not because the claim is wrong, but because a document is missing, mismatched or in the wrong format. Compliance and documentation support helps you get the paperwork right before it is submitted.",
    body: [
      "We review your identity documents, check that names, addresses and signatures are consistent, and tell you what each company or registrar is likely to require. We then prepare the forms, affidavits and covering letters in an orderly set that is easy for the registrar to process.",
      "This service can be used on its own, for example if you want a second pair of eyes before you submit a request, or alongside any of our other services. We guide you on the paperwork. We do not provide legal advice, and for legal questions you should consult a qualified lawyer.",
    ],
    who: [
      "Shareholders who want their documents checked before submission",
      "Applicants whose request was returned with objections",
      "Families unsure which forms apply to their situation",
      "Anyone dealing with several companies and registrars at once",
    ],
    how: [
      "Collect and review your identity and holding documents",
      "Check for mismatches, gaps and missing items",
      "Prepare a clear checklist for each company or registrar",
      "Help complete forms, affidavits and covering letters",
      "Assist with replies if the registrar raises objections",
    ],
    documents: [
      "Identity proof such as Aadhaar, passport or voter ID",
      "PAN card",
      "Address proof",
      "Bank proof such as a cancelled cheque",
      "Existing share certificates or correspondence",
      "Any rejection or objection letter received",
    ],
    challenges: [
      "Documents that look correct to you but do not match each other closely enough for a registrar to accept.",
      "Not knowing which forms apply, or receiving an objection letter written in technical language.",
      "Repeated resubmissions that stretch a simple request over a long period.",
    ],
    related: ["name-change-and-correction", "transmission-of-shares", "iepf-claim-assistance"],
    faqs: [
      {
        q: "Can you check my documents before I submit them?",
        a: "Yes. We review them and point out issues that could lead to delay or rejection.",
      },
      {
        q: "Is this legal advice?",
        a: "No. We provide documentation and process guidance. For legal advice, please consult a qualified lawyer.",
      },
    ],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);

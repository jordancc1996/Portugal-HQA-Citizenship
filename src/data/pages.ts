export interface SitePage {
  url: string;
  title: string;
  lastVerified: string;
  listOnHome?: boolean;
}

export const pages: SitePage[] = [
  {
    url: "/",
    title: "Portugal HQA Visa: An Independent, Verified Guide",
    lastVerified: "2026-10-19",
  },
  {
    url: "/guides",
    title: "HQA Visa Guides - Independent, Verified Answers",
    lastVerified: "2026-10-20",
    listOnHome: false,
  },
  {
    url: "/guides/what-is-hqa-visa",
    title: "What is the HQA visa? The legal basis in plain English",
    lastVerified: "2026-10-19",
  },
  {
    url: "/portugal-hqa-visa-investment",
    title: "Portugal HQA Visa Investment: What €175,000 Actually Buys",
    lastVerified: "2026-10-19",
  },
  {
    url: "/hqa-visa-cost",
    title: "HQA visa cost: the full breakdown",
    lastVerified: "2026-10-19",
  },
  {
    url: "/hqa-visa-requirements",
    title: "HQA visa requirements and who qualifies",
    lastVerified: "2026-10-19",
  },
  {
    url: "/guides/hqa-visa-citizenship-10-year-rule",
    title: "HQA visa citizenship under the 10-year rule",
    lastVerified: "2026-10-19",
  },
  {
    url: "/guides/hqa-visa-presence-requirements",
    title: "HQA visa presence rules: how long you must stay",
    lastVerified: "2026-10-19",
  },
  {
    url: "/guides/hqa-visa-ifici-tax",
    title: "HQA visa and IFICI tax: who actually qualifies",
    lastVerified: "2026-10-20",
  },
  {
    url: "/portugal-hqa-vs-golden-visa",
    title: "Portugal HQA vs Golden Visa",
    lastVerified: "2026-10-19",
  },
  {
    url: "/hqa-visa-family",
    title: "HQA visa family: spouse, children and parents",
    lastVerified: "2026-10-19",
  },
  {
    url: "/hqa-visa-due-diligence",
    title: "Is the HQA visa legit? A due diligence guide",
    lastVerified: "2026-10-19",
  },
  {
    url: "/hqa-visa-for-americans",
    title: "Portugal HQA visa for Americans",
    lastVerified: "2026-10-20",
  },
  {
    url: "/hqa-vs-startup-visa-tech-visa",
    title: "HQA vs StartUP Visa and Tech Visa",
    lastVerified: "2026-10-20",
  },
  {
    url: "/guides/hqa-visa-permanent-residency",
    title: "HQA visa permanent residency after 5 years",
    lastVerified: "2026-10-20",
  },
  {
    url: "/hqa-visa-status",
    title: "HQA visa status and law changes",
    lastVerified: "2026-10-20",
  },
  {
    url: "/methodology",
    title: "Methodology: How We Verify HQA Visa Information",
    lastVerified: "2026-10-20",
    listOnHome: false,
  },
  {
    url: "/about",
    title: "About Portugal HQA Citizenship: Independent Information",
    lastVerified: "2026-10-20",
    listOnHome: false,
  },
  {
    url: "/contact",
    title: "Contact Portugal HQA Citizenship",
    lastVerified: "2026-10-20",
    listOnHome: false,
  },
  {
    url: "/consultation",
    title: "HQA Visa Consultation: Request a Private Introduction",
    lastVerified: "2026-10-20",
    listOnHome: false,
  },
  {
    url: "/privacy",
    title: "Privacy Policy",
    lastVerified: "2026-10-20",
    listOnHome: false,
  },
  {
    url: "/terms",
    title: "Terms of Use",
    lastVerified: "2026-10-20",
    listOnHome: false,
  },
  {
    url: "/image-credits",
    title: "Image Credits",
    lastVerified: "2026-10-20",
    listOnHome: false,
  },
];

export function verifiedOn(url: string): string {
  const found = pages.find((item) => item.url === url);
  if (!found) {
    throw new Error(`Missing pages.ts entry for ${url}`);
  }
  return found.lastVerified;
}

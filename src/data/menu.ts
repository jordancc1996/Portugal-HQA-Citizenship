import { isNoindex } from "./reviews";

const allLinks = [
  { href: "/", label: "Home" },
  { href: "/portugal-hqa-visa-investment", label: "Investment" },
  { href: "/hqa-visa-cost", label: "Costs" },
  { href: "/hqa-visa-requirements", label: "Requirements" },
  { href: "/guides/hqa-visa-citizenship-10-year-rule", label: "Citizenship" },
  { href: "/guides", label: "Guides" },
  { href: "/reports", label: "Reports", whenReady: true },
  { href: "/press", label: "Press", whenReady: true },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const menuLinks = allLinks.filter((link) => !link.whenReady || !isNoindex(link.href));

export const reportsReady = !isNoindex("/reports");

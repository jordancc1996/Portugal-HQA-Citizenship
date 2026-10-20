const pageFiles = import.meta.glob("../pages/**/*.astro");

export function pageExists(href: string) {
  const slug = href.replace(/^\//, "");
  if (!slug) return true;
  return Object.keys(pageFiles).some((file) => {
    const path = file.replaceAll("\\", "/");
    return path.endsWith(`/pages/${slug}.astro`) || path.endsWith(`/pages/${slug}/index.astro`);
  });
}

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

export const menuLinks = allLinks.filter((link) => !link.whenReady || pageExists(link.href));

export const reportsReady = pageExists("/reports");

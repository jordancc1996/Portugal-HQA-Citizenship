// Fill only with real review dates. null means the lawyer has not reviewed the page.
const reviewDate = /^\d{4}-\d{2}-\d{2}$/;

export const reviews: Record<string, string | null> = {
  "/": null,
  "/guides": null,
  "/portugal-hqa-visa-investment": null,
  "/hqa-visa-cost": null,
  "/hqa-visa-requirements": null,
  "/hqa-visa-family": null,
  "/portugal-hqa-vs-golden-visa": null,
  "/hqa-vs-startup-visa-tech-visa": null,
  "/hqa-visa-for-americans": null,
  "/hqa-visa-due-diligence": null,
  "/hqa-visa-status": null,
  "/guides/hqa-visa-citizenship-10-year-rule": null,
  "/guides/hqa-visa-permanent-residency": null,
  "/guides/hqa-visa-presence-requirements": null,
  "/guides/hqa-visa-ifici-tax": null,
  "/guides/what-is-hqa-visa": null,
  "/methodology": null,
  "/about": null,
  "/contact": null,
  "/consultation": null,
  "/privacy": null,
  "/terms": null,
  "/image-credits": null,
};

export function hasReviewDate(path: string): boolean {
  const value = reviews[path];
  return typeof value === "string" && reviewDate.test(value);
}

export function isNoindex(path: string): boolean {
  if (path === "/styleguide" || path === "/404") return true;
  if (path === "/privacy" || path === "/terms") return !hasReviewDate(path);
  return false;
}

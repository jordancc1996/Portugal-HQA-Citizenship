import fs from "node:fs";
import path from "node:path";

type PublicationFolder = "reports" | "press";

function contentDir(folder: PublicationFolder): string {
  return path.join(process.cwd(), "src", "content", folder);
}

function markdownFiles(folder: PublicationFolder): string[] {
  const dir = contentDir(folder);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((name) => name.endsWith(".md") || name.endsWith(".mdx"))
    .sort();
}

function publicationCount(folder: PublicationFolder): number {
  return markdownFiles(folder).length;
}

export function publicationPaths(): string[] {
  const paths: string[] = [];
  for (const folder of ["reports", "press"] as const) {
    for (const name of markdownFiles(folder)) {
      const text = fs.readFileSync(path.join(contentDir(folder), name), "utf8");
      const match = text.match(/^slug:\s*["']?([a-z0-9]+(?:-[a-z0-9]+)*)["']?\s*$/m);
      const slug = match?.[1];
      if (!slug) throw new Error(`Missing slug in src/content/${folder}/${name}`);
      if (/\d{4}/.test(slug)) throw new Error(`Slug includes a date: ${slug}`);
      paths.push(`/${folder}/${slug}`);
    }
  }
  return paths;
}

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
  "/reports": null,
  "/press": null,
};

export function hasReviewDate(path: string): boolean {
  const value = reviews[path];
  return typeof value === "string" && reviewDate.test(value);
}

export function isNoindex(path: string): boolean {
  if (path === "/styleguide" || path === "/404") return true;
  if (path === "/privacy" || path === "/terms") return !hasReviewDate(path);
  if (path === "/reports") return publicationCount("reports") === 0;
  if (path === "/press") return publicationCount("press") === 0;
  return false;
}

import fs from "node:fs";
import path from "node:path";
import { pages } from "../src/data/pages.ts";
import { isNoindex } from "../src/data/reviews.ts";
import { markdownPublicPath } from "../src/lib/markdown-path.ts";

const SITE = "https://portugalhqacitizenship.com";
const dist = "dist";

function fail(message: string): never {
  console.error(message);
  process.exit(1);
}

function readJson(file: string): { facts: Record<string, { value: string }> } {
  return JSON.parse(fs.readFileSync(file, "utf8")) as { facts: Record<string, { value: string }> };
}

function token(value: string, pattern: RegExp, label: string): string {
  const match = value.match(pattern);
  const found = match?.[1];
  if (!found) fail(`Could not read ${label} from docs/facts.json`);
  return found;
}

function htmlText(route: string): string {
  const file = route === "/" ? path.join(dist, "index.html") : path.join(dist, route.slice(1), "index.html");
  if (!fs.existsSync(file)) fail(`Missing built HTML for ${route}`);
  return fs.readFileSync(file, "utf8").replace(/<script[\s\S]*?<\/script>/gi, " ").replace(/<[^>]+>/g, " ");
}

function requireText(route: string, needles: string[]) {
  const text = htmlText(route);
  for (const needle of needles) {
    if (!text.includes(needle)) fail(`${route} does not contain "${needle}" from docs/facts.json`);
  }
}

const facts = readJson("docs/facts.json").facts;
const yearMatches = [...facts.citizenshipYears.value.matchAll(/(\d+)\s+years/g)].map((match) => match[1]);
if (yearMatches.length < 2) fail("Could not read both citizenship year counts from docs/facts.json");
const consecutive = token(facts.absenceLimit.value, /(\d+)\s+consecutive months/, "absence consecutive months");
const nonConsecutive = token(facts.absenceLimit.value, /(\d+)\s+non-consecutive months/, "absence non-consecutive months");
const ificiRate = token(facts.ificiRate.value, /(\d+%)/, "IFICI rate");
const ificiDeadline = token(facts.ificiDeadline.value, /(\d+\s+January)/, "IFICI deadline");
const aimaDays = token(facts.aimaDecisionDeadline.value, /(\d+)\s+days/, "AIMA decision days");

requireText("/guides/hqa-visa-citizenship-10-year-rule", [`${yearMatches[0]} years`, `${yearMatches[1]} years`]);
requireText("/guides/hqa-visa-presence-requirements", [`${consecutive} consecutive`, `${nonConsecutive} non-consecutive`]);
requireText("/guides/hqa-visa-ifici-tax", [ificiRate, ificiDeadline]);
requireText("/hqa-visa-status", [`${aimaDays} days`]);

const sitemap = fs.readFileSync(path.join(dist, "sitemap-0.xml"), "utf8");
const sitemapRoutes = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => new URL(match[1] ?? "").pathname.replace(/\/$/, "") || "/");
const index = JSON.parse(fs.readFileSync(path.join(dist, "content-index.json"), "utf8")) as {
  pages: { canonical_url: string; markdown_url: string; dateModified: string; datePublished?: string }[];
};
const indexRoutes = index.pages.map((page) => new URL(page.canonical_url).pathname.replace(/\/$/, "") || "/");
const llms = fs.readFileSync(path.join(dist, "llms.txt"), "utf8");
const llmsRoutes = [...llms.matchAll(/\]\((https:\/\/portugalhqacitizenship\.com[^)]*)\)/g)].map(
  (match) => new URL(match[1] ?? "").pathname.replace(/\/$/, "") || "/",
);

function sameSet(left: string[], right: string[], label: string) {
  const a = [...left].sort();
  const b = [...right].sort();
  if (a.join("\n") !== b.join("\n")) fail(`${label} do not match.\nLeft: ${a.join(", ")}\nRight: ${b.join(", ")}`);
}

sameSet(sitemapRoutes, indexRoutes, "Sitemap URLs and content index");
sameSet(sitemapRoutes, llmsRoutes, "Sitemap URLs and llms.txt");

for (const route of ["/privacy", "/terms", "/styleguide", "/404", "/reports", "/press"]) {
  if (!isNoindex(route)) continue;
  if (sitemapRoutes.includes(route) || indexRoutes.includes(route) || llmsRoutes.includes(route)) {
    fail(`${route} is noindex but appears in the machine layer or sitemap`);
  }
  const markdownFile = path.join(dist, markdownPublicPath(route).slice(1));
  if (fs.existsSync(markdownFile)) fail(`${route} has a Markdown file while noindex`);
}

for (const route of sitemapRoutes) {
  const markdownFile = path.join(dist, markdownPublicPath(route).slice(1));
  if (!fs.existsSync(markdownFile)) fail(`Missing Markdown for ${route}`);
  const html = fs.readFileSync(route === "/" ? path.join(dist, "index.html") : path.join(dist, route.slice(1), "index.html"), "utf8");
  const href = new URL(markdownPublicPath(route), SITE).href;
  if (!html.includes('type="text/markdown"') || !html.includes(href)) {
    fail(`${route} is missing its Markdown alternate link`);
  }
  const record = index.pages.find((page) => page.canonical_url === new URL(route, SITE).href);
  const expected = pages.find((page) => page.url === route)?.lastVerified;
  if (!record || !/^\d{4}-\d{2}-\d{2}$/.test(record.dateModified)) fail(`dateModified for ${route} is missing`);
  if (expected && record.dateModified !== expected) fail(`dateModified for ${route} does not match pages.ts`);
  if (!expected && !route.startsWith("/reports/") && !route.startsWith("/press/")) {
    fail(`dateModified for ${route} does not match pages.ts`);
  }
  if ("datePublished" in record) fail(`content index invented datePublished for ${route}`);
}

if (sitemap.includes("/markdown/") || sitemap.includes("llms.txt")) fail("Sitemap lists a machine-readable file");

console.log(`Fact drift checks passed for ${sitemapRoutes.length} indexable pages.`);

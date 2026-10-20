import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { parse, NodeType, type HTMLElement, type Node } from "node-html-parser";
import { pages } from "../src/data/pages.ts";
import { isNoindex } from "../src/data/reviews.ts";
import { markdownPublicPath } from "../src/lib/markdown-path.ts";

const SITE = "https://portugalhqacitizenship.com";

const sections: { heading: string; paths: string[] }[] = [
  {
    heading: "Start here",
    paths: [
      "/",
      "/guides/what-is-hqa-visa",
      "/portugal-hqa-visa-investment",
      "/hqa-visa-due-diligence",
      "/guides",
    ],
  },
  {
    heading: "Costs and eligibility",
    paths: ["/hqa-visa-cost", "/hqa-visa-requirements", "/hqa-visa-for-americans"],
  },
  {
    heading: "Family and living in Portugal",
    paths: [
      "/hqa-visa-family",
      "/guides/hqa-visa-presence-requirements",
      "/guides/hqa-visa-permanent-residency",
    ],
  },
  {
    heading: "Citizenship and tax",
    paths: ["/guides/hqa-visa-citizenship-10-year-rule", "/guides/hqa-visa-ifici-tax"],
  },
  {
    heading: "Comparisons",
    paths: ["/portugal-hqa-vs-golden-visa", "/hqa-vs-startup-visa-tech-visa"],
  },
  {
    heading: "Updates and method",
    paths: [
      "/hqa-visa-status",
      "/methodology",
      "/about",
      "/contact",
      "/consultation",
      "/image-credits",
      "/privacy",
      "/terms",
    ],
  },
];

interface PageRecord {
  route: string;
  title: string;
  description: string;
  canonicalUrl: string;
  markdownUrl: string;
  contentType: string;
  dateModified: string;
  markdown: string;
}

function isElement(node: Node): node is HTMLElement {
  return node.nodeType === NodeType.ELEMENT_NODE;
}

function htmlFile(dist: string, route: string): string {
  if (route === "/") return path.join(dist, "index.html");
  return path.join(dist, route.slice(1), "index.html");
}

function absolute(href: string): string {
  if (!href || href.startsWith("mailto:") || href.startsWith("http://") || href.startsWith("https://")) {
    return href;
  }
  return new URL(href, SITE).href;
}

function renderInline(node: HTMLElement): string {
  let out = "";
  for (const child of node.childNodes) {
    if (child.nodeType === NodeType.TEXT_NODE) {
      out += child.text.replace(/\s+/g, " ");
      continue;
    }
    if (isElement(child)) out += renderInlineTag(child);
  }
  return out;
}

function renderInlineTag(el: HTMLElement): string {
  const tag = el.tagName.toLowerCase();
  if (tag === "br") return " ";
  if (tag === "script" || tag === "style") return "";
  if (tag === "a") {
    if (el.classList.contains("solid")) return "";
    const href = el.getAttribute("href") ?? "";
    if (!href || href.startsWith("#")) return "";
    const label = renderInline(el).replace(/\s+/g, " ").trim();
    if (!label) return "";
    const safe = label.replaceAll("[", "\\[").replaceAll("]", "\\]");
    return `[${safe}](${absolute(href)})`;
  }
  if (tag === "strong" || tag === "b") {
    const inner = renderInline(el).replace(/\s+/g, " ").trim();
    return inner ? `**${inner}**` : "";
  }
  if (tag === "em" || tag === "i") {
    const inner = renderInline(el).replace(/\s+/g, " ").trim();
    return inner ? `*${inner}*` : "";
  }
  if (tag === "code") {
    const inner = renderInline(el).replace(/\s+/g, " ").trim();
    return inner ? `\`${inner}\`` : "";
  }
  return renderInline(el);
}

function renderListItem(li: HTMLElement): string {
  const parts: string[] = [];
  for (const child of li.childNodes) {
    if (!isElement(child)) {
      const text = child.text.replace(/\s+/g, " ").trim();
      if (text) parts.push(text);
      continue;
    }
    const tag = child.tagName.toLowerCase();
    if (tag === "p") {
      const text = renderInline(child).replace(/\s+/g, " ").trim();
      if (text) parts.push(text);
    } else if (tag === "ul" || tag === "ol") {
      const nested = renderList(child, tag === "ol").trim();
      if (nested) parts.push(nested);
    } else {
      const text = renderBlock(child).trim();
      if (text) parts.push(text);
    }
  }
  return parts.join("\n");
}

function renderList(el: HTMLElement, ordered: boolean): string {
  const items = [...el.childNodes].filter(isElement).filter((node) => node.tagName.toLowerCase() === "li");
  let number = 1;
  const lines: string[] = [];
  for (const li of items) {
    const body = renderListItem(li).trim();
    if (!body) continue;
    const prefix = ordered ? `${number}. ` : "- ";
    number += 1;
    const indented = body
      .split("\n")
      .map((line, index) => (index === 0 ? prefix + line : `  ${line}`))
      .join("\n");
    lines.push(indented);
  }
  if (!lines.length) return "";
  return `\n\n${lines.join("\n")}\n\n`;
}

function cellText(cell: HTMLElement): string {
  return renderInline(cell).replace(/\s+/g, " ").replaceAll("|", "\\|").trim();
}

function rowCells(tr: HTMLElement): string[] {
  return [...tr.childNodes]
    .filter(isElement)
    .filter((el) => {
      const tag = el.tagName.toLowerCase();
      return tag === "td" || tag === "th";
    })
    .map(cellText);
}

function renderTable(table: HTMLElement): string {
  const headRows = [...table.querySelectorAll("thead tr")];
  const bodyRows = [...table.querySelectorAll("tbody tr")];
  const rows = headRows.length || bodyRows.length ? [...headRows, ...bodyRows] : [...table.querySelectorAll("tr")];
  if (!rows.length) return "";
  const matrix = rows.map((row) => rowCells(row));
  const width = Math.max(...matrix.map((row) => row.length));
  if (width === 0) return "";
  const normalized = matrix.map((row) => {
    const copy = row.slice();
    while (copy.length < width) copy.push("");
    return copy;
  });
  const line = (row: string[]) => `| ${row.map((cell) => cell || " ").join(" | ")} |`;
  const header = normalized[0] ?? [];
  const separator = `| ${header.map(() => "---").join(" | ")} |`;
  const body = normalized.slice(1).map(line);
  return `\n\n${[line(header), separator, ...body].join("\n")}\n\n`;
}

function renderBlock(el: HTMLElement): string {
  const tag = el.tagName.toLowerCase();
  if (tag === "script" || tag === "style" || tag === "noscript") return "";
  if (/^h[1-6]$/.test(tag)) {
    const text = renderInline(el).replace(/\s+/g, " ").trim();
    if (!text) return "";
    return `\n\n${"#".repeat(Number(tag[1]))} ${text}\n\n`;
  }
  if (tag === "p") {
    const text = renderInline(el).replace(/\s+/g, " ").trim();
    if (!text) return "";
    return `\n\n${text}\n\n`;
  }
  if (tag === "ul" || tag === "ol") return renderList(el, tag === "ol");
  if (tag === "table") return renderTable(el);
  if (tag === "details") {
    const summary = el.querySelector("summary");
    const answer = el.querySelector("p");
    const question = summary ? renderInline(summary).replace(/\s+/g, " ").trim() : "";
    const reply = answer ? renderInline(answer).replace(/\s+/g, " ").trim() : "";
    if (!question && !reply) return "";
    return `\n\n**Q:** ${question}\n\n**A:** ${reply}\n\n`;
  }
  if (tag === "blockquote") {
    const text = renderChildren(el).trim();
    if (!text) return "";
    return `\n\n${text
      .split("\n")
      .map((line) => (line.trim() ? `> ${line}` : ">"))
      .join("\n")}\n\n`;
  }
  return renderChildren(el);
}

function renderChildren(el: HTMLElement): string {
  return el.childNodes
    .map((child) => {
      if (child.nodeType === NodeType.TEXT_NODE) {
        const text = child.text.replace(/\s+/g, " ").trim();
        return text ? `\n\n${text}\n\n` : "";
      }
      if (isElement(child)) return renderBlock(child);
      return "";
    })
    .join("");
}

function tidy(markdown: string): string {
  return `${markdown.replace(/[ \t]+\n/g, "\n").replace(/\n{3,}/g, "\n\n").trim()}\n`;
}

function stripChrome(main: HTMLElement): void {
  const selectors = [
    "script",
    "style",
    "noscript",
    "form",
    ".form-block",
    ".band",
    ".crumbs-wrap",
    "nav",
    "img",
    "picture",
    "svg",
    "figure",
    ".table-hint",
    "a.solid",
    "button",
  ];
  for (const selector of selectors) {
    for (const node of [...main.querySelectorAll(selector)]) node.remove();
  }
  const sections = [...main.querySelectorAll("section")].reverse();
  for (const section of sections) {
    const heading = section.querySelector("h1, h2, h3, h4, h5, h6");
    const text = section.text.replace(/\s+/g, " ").trim();
    const headingText = heading?.text.replace(/\s+/g, " ").trim() ?? "";
    if (!text || text === headingText) section.remove();
  }
}

function contentTypeFrom(root: HTMLElement): string {
  const types = new Set<string>();
  for (const script of root.querySelectorAll('script[type="application/ld+json"]')) {
    try {
      const data = JSON.parse(script.text) as { "@type"?: string | string[]; "@graph"?: { "@type"?: string | string[] }[] };
      const collect = (value: { "@type"?: string | string[] } | undefined) => {
        const type = value?.["@type"];
        if (typeof type === "string") types.add(type);
        if (Array.isArray(type)) type.forEach((item) => types.add(item));
      };
      collect(data);
      data["@graph"]?.forEach(collect);
    } catch {
      continue;
    }
  }
  if (types.has("Article")) return "Article";
  if (types.has("CollectionPage")) return "CollectionPage";
  return "WebPage";
}

function pageMarkdown(main: HTMLElement, canonicalUrl: string): string {
  stripChrome(main);
  const body = tidy(renderChildren(main));
  return tidy(`Canonical: ${canonicalUrl}\n\n${body}`);
}

function readPage(dist: string, route: string): PageRecord {
  const file = htmlFile(dist, route);
  const html = fs.readFileSync(file, "utf8");
  const root = parse(html);
  const main = root.querySelector("main");
  if (!main) throw new Error(`No main element in ${file}`);
  const title = root.querySelector('meta[property="og:title"]')?.getAttribute("content")?.trim() ?? "";
  const description = root.querySelector('meta[name="description"]')?.getAttribute("content")?.trim() ?? "";
  const canonicalUrl = root.querySelector('link[rel="canonical"]')?.getAttribute("href")?.trim() ?? "";
  if (!title || !description || !canonicalUrl) {
    throw new Error(`Missing title, description, or canonical in ${file}`);
  }
  const page = pages.find((item) => item.url === route);
  if (!page) throw new Error(`No pages.ts date for ${route}`);
  const markdownPath = markdownPublicPath(route);
  return {
    route,
    title,
    description,
    canonicalUrl,
    markdownUrl: new URL(markdownPath, SITE).href,
    contentType: contentTypeFrom(root),
    dateModified: page.lastVerified,
    markdown: pageMarkdown(main, canonicalUrl),
  };
}

function llmsText(records: Map<string, PageRecord>): string {
  const lines = [
    "# Portugal HQA Citizenship",
    "",
    "Portugal HQA Citizenship explains the Portuguese residence route for highly qualified activity, and the private packages sold around it.",
    "",
    "This site is independent, and program facts are checked against Portuguese law with the date shown on each page.",
    "",
  ];
  for (const section of sections) {
    const entries = section.paths.flatMap((route) => {
      const record = records.get(route);
      return record ? [record] : [];
    });
    if (!entries.length) continue;
    lines.push(`## ${section.heading}`, "");
    for (const record of entries) {
      lines.push(`- [${record.title}](${record.canonicalUrl}): ${record.description}`);
    }
    lines.push("");
  }
  return `${lines.join("\n").trim()}\n`;
}

export async function generateMachineLayer(dir: URL): Promise<void> {
  const dist = fileURLToPath(dir);
  const builtRoutes: string[] = [];
  const walk = (directory: string) => {
    for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
      const full = path.join(directory, entry.name);
      if (entry.isDirectory()) {
        if (entry.name === "markdown") continue;
        walk(full);
        continue;
      }
      if (entry.name !== "index.html") continue;
      const rel = path.relative(dist, full).replaceAll(path.sep, "/");
      builtRoutes.push(rel === "index.html" ? "/" : `/${rel.replace(/\/index\.html$/, "")}`);
    }
  };
  walk(dist);

  const indexable = builtRoutes.filter((route) => !isNoindex(route)).sort();
  const classified = new Set(sections.flatMap((section) => section.paths));
  const missing = indexable.filter((route) => !classified.has(route));
  if (missing.length) {
    throw new Error(`Indexable routes missing from the llms.txt section map: ${missing.join(", ")}`);
  }

  const records = new Map<string, PageRecord>();
  for (const route of indexable) records.set(route, readPage(dist, route));

  const markdownRoot = path.join(dist, "markdown");
  fs.rmSync(markdownRoot, { recursive: true, force: true });
  for (const record of records.values()) {
    const file = path.join(dist, markdownPublicPath(record.route).slice(1));
    fs.mkdirSync(path.dirname(file), { recursive: true });
    fs.writeFileSync(file, record.markdown);
  }

  fs.writeFileSync(path.join(dist, "llms.txt"), llmsText(records));

  const ordered = sections.flatMap((section) => section.paths.flatMap((route) => {
    const record = records.get(route);
    return record ? [record] : [];
  }));
  const index = {
    pages: ordered.map((record) => ({
      title: record.title,
      canonical_url: record.canonicalUrl,
      markdown_url: record.markdownUrl,
      content_type: record.contentType,
      description: record.description,
      dateModified: record.dateModified,
    })),
  };
  fs.writeFileSync(path.join(dist, "content-index.json"), `${JSON.stringify(index, null, 2)}\n`);
}

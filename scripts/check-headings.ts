import fs from "node:fs";
import path from "node:path";
import { parse } from "node-html-parser";

const SITE = "https://portugalhqacitizenship.com";
const dist = path.resolve("dist");

/** Words that keep this spelling in every heading. Longer phrases are matched first. */
export const headingExceptions = [
  "Lei Orgânica",
  "StartUP Visa",
  "Golden Visa",
  "Tech Visa",
  "Acórdão",
  "Portuguese",
  "Portugal",
  "Formcarry",
  "Unsplash",
  "Coimbra",
  "Cascais",
  "Alfama",
  "Lisbon",
  "Portaria",
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
  "Americans",
  "IFICI",
  "ISCED",
  "CPLP",
  "AIMA",
  "HQA",
  "IAS",
  "Lei",
  "D3",
  "D7",
  "EU",
  "US",
];

const smallWords = new Set(["a", "an", "the", "and", "but", "or", "in", "on", "at", "to", "for", "of", "vs"]);

type Atom =
  | { kind: "space"; text: string }
  | { kind: "mark"; text: string }
  | { kind: "word"; text: string; fixed: string | null };

function escapeRegExp(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

const exceptionPattern = headingExceptions
  .slice()
  .sort((left, right) => right.length - left.length)
  .map(escapeRegExp)
  .join("|");

const tokenPattern = new RegExp(
  `(?<![\\p{L}\\p{N}])(?:${exceptionPattern}|article\\s+\\d+(?:-[A-Za-z])?)(?![\\p{L}\\p{N}])|([\\p{L}\\p{N}]+(?:-[\\p{L}\\p{N}]+)*)|(\\s+)|([^\\s])`,
  "giu",
);

function articleForm(match: string, titleCase: boolean, atStart: boolean): string {
  const number = match.replace(/^article\s+/i, "");
  if (titleCase || atStart) return `Article ${number}`;
  return `article ${number}`;
}

function isAllCapsToken(value: string): boolean {
  return /^\p{Lu}{2,}$/u.test(value);
}

/** Two-letter acronyms and the month May are also ordinary words. Match those only when the source already uses the exception spelling. */
function matchesException(token: string, exception: string): boolean {
  if (isAllCapsToken(exception) && exception.length === 2) return token === exception;
  if (exception === "May") return token === "May";
  return token.toLocaleLowerCase("en") === exception.toLocaleLowerCase("en");
}

function exceptionForm(match: string): string | null {
  const found = headingExceptions.find((item) => matchesException(match, item));
  return found ?? null;
}

function capitalizePart(part: string): string {
  if (!/\p{L}/u.test(part)) return part;
  const lower = part.toLocaleLowerCase("en");
  return lower.charAt(0).toLocaleUpperCase("en") + lower.slice(1);
}

function titleCaseWord(word: string): string {
  return word.split("-").map(capitalizePart).join("-");
}

function sentenceCaseWord(word: string, isFirst: boolean): string {
  if (word === "I" || word === "i") return "I";
  return word
    .split("-")
    .map((part, index) => {
      if (part === "I" || part === "i") return "I";
      return isFirst && index === 0 ? capitalizePart(part) : part.toLocaleLowerCase("en");
    })
    .join("-");
}

function isAcronym(word: string): boolean {
  return /^\p{Lu}{2,}$/u.test(word);
}

function tokenize(heading: string): Atom[] {
  const atoms: Atom[] = [];
  for (const match of heading.matchAll(tokenPattern)) {
    const text = match[0];
    if (match[2]) {
      atoms.push({ kind: "space", text });
      continue;
    }
    if (match[3]) {
      atoms.push({ kind: "mark", text });
      continue;
    }
    const canonical = exceptionForm(text);
    if (canonical) {
      atoms.push({ kind: "word", text, fixed: canonical });
      continue;
    }
    if (/^article\s+\d+/i.test(text)) {
      const atStart = atoms.every((atom) => atom.kind === "space");
      atoms.push({ kind: "word", text, fixed: `__ARTICLE__${atStart ? "1" : "0"}__${text}` });
      continue;
    }
    atoms.push({ kind: "word", text, fixed: null });
  }
  return atoms;
}

function isSegmentBreak(atom: Atom): boolean {
  return atom.kind === "mark" && (atom.text === ":" || atom.text === "?" || atom.text === "!");
}

function suggestHeading(heading: string, level: number): string {
  const atoms = tokenize(heading);

  if (level === 1) {
    let segmentStart = 0;
    const segments: number[][] = [];
    atoms.forEach((atom, index) => {
      if (isSegmentBreak(atom)) {
        const indexes = atoms
          .slice(segmentStart, index)
          .map((item, offset) => (item.kind === "word" ? segmentStart + offset : -1))
          .filter((item) => item >= 0);
        if (indexes.length > 0) segments.push(indexes);
        segmentStart = index + 1;
      }
    });
    const tail = atoms
      .slice(segmentStart)
      .map((item, offset) => (item.kind === "word" ? segmentStart + offset : -1))
      .filter((item) => item >= 0);
    if (tail.length > 0) segments.push(tail);

    const force = new Set<number>();
    for (const indexes of segments) {
      force.add(indexes[0]);
      force.add(indexes[indexes.length - 1]);
    }

    return atoms
      .map((atom, index) => {
        if (atom.kind !== "word") return atom.text;
        if (atom.fixed?.startsWith("__ARTICLE__")) {
          return articleForm(atom.text, true, force.has(index));
        }
        if (atom.fixed) return atom.fixed;
        if (isAcronym(atom.text)) return atom.text;
        const lower = atom.text.toLocaleLowerCase("en");
        if (!force.has(index) && smallWords.has(lower)) return lower;
        return titleCaseWord(atom.text);
      })
      .join("");
  }

  let seenWord = false;
  return atoms
    .map((atom) => {
      if (atom.kind !== "word") return atom.text;
      const isFirst = !seenWord;
      seenWord = true;
      if (atom.fixed?.startsWith("__ARTICLE__")) return articleForm(atom.text, false, isFirst);
      if (atom.fixed) return atom.fixed;
      if (isAcronym(atom.text)) return atom.text;
      return sentenceCaseWord(atom.text, isFirst);
    })
    .join("");
}

function walk(dir: string): string[] {
  const files: string[] = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) files.push(...walk(full));
    else if (entry.name.endsWith(".html")) files.push(full);
  }
  return files;
}

function pageUrl(file: string): string {
  const relative = path.relative(dist, file).replaceAll("\\", "/");
  if (relative === "index.html") return `${SITE}/`;
  return `${SITE}/${relative.replace(/\/index\.html$/, "")}`;
}

if (!fs.existsSync(dist)) {
  console.error("dist/ is missing. Run the site build before check:headings.");
  process.exit(1);
}

const violations: string[] = [];
let inspected = 0;

for (const file of walk(dist)) {
  const root = parse(fs.readFileSync(file, "utf8"));
  const headings = root.querySelectorAll("h1, h2, h3, h4, h5, h6");
  for (const node of headings) {
    const level = Number(node.tagName.slice(1));
    const heading = node.text.replace(/\s+/g, " ").trim();
    inspected += 1;
    const suggested = suggestHeading(heading, level);
    if (heading !== suggested) {
      violations.push(`${file}\t${pageUrl(file)}\tH${level}\t${heading}\t${suggested}`);
    }
  }
}

if (violations.length > 0) {
  console.error("file\turl\tlevel\theading\tsuggested");
  for (const line of violations) console.error(line);
  console.error(`${violations.length} heading ${violations.length === 1 ? "violation" : "violations"} in ${inspected} headings.`);
  process.exit(1);
}

console.log(`Heading case checks passed for ${inspected} headings.`);

const emptyMessage = "Please enter your LinkedIn profile URL.";
const invalidMessage = "Please enter a valid LinkedIn profile URL.";

const hostPattern = /^(?:(?:www|m|[a-z]{2})\.)?linkedin\.com$/;
const slugPattern = /^[\p{L}\p{N}\-_%]+$/u;

export type LinkedInResult =
  | { ok: true; url: string }
  | { ok: false; message: string };

export function normalizeLinkedInProfile(value: string): LinkedInResult {
  const trimmed = value.trim();
  if (!trimmed) {
    return { ok: false, message: emptyMessage };
  }

  const withProtocol = /^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`;

  let url: URL;
  try {
    url = new URL(withProtocol);
  } catch {
    return { ok: false, message: invalidMessage };
  }

  const host = url.hostname.toLowerCase().replace(/\.$/, "");
  if (!hostPattern.test(host)) {
    return { ok: false, message: invalidMessage };
  }

  const parts = url.pathname.split("/").filter(Boolean);
  const section = parts[0]?.toLowerCase() ?? "";
  if (section === "company" || section !== "in" || parts.length < 2) {
    return { ok: false, message: invalidMessage };
  }

  const slug = parts[1];
  if (!slug || !slugPattern.test(slug)) {
    return { ok: false, message: invalidMessage };
  }

  return { ok: true, url: `https://www.linkedin.com/in/${slug}` };
}

export function markdownPublicPath(canonicalPath: string): string {
  const path = canonicalPath.replace(/\/$/, "") || "/";
  if (path === "/") return "/markdown/index.md";
  return `/markdown${path}.md`;
}

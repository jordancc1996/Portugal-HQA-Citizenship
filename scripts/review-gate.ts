import { spawnSync } from "node:child_process";

if (process.env.VERCEL_ENV === "production") {
  const result = spawnSync("npm run check:reviews", {
    encoding: "utf8",
    shell: true,
    env: process.env,
  });
  const output = `${result.stdout ?? ""}${result.stderr ?? ""}`.trim();
  if ((result.status ?? 1) !== 0) {
    console.warn("Warning: check:reviews found pages without a review date. The build continues.");
    if (output) console.warn(output);
  } else if (output) {
    console.log(output);
  }
} else {
  console.log("Skipped check:reviews because VERCEL_ENV is not production.");
}

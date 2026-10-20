import { spawnSync } from "node:child_process";

if (process.env.VERCEL_ENV === "production") {
  const result = spawnSync("npm run check:reviews", {
    stdio: "inherit",
    shell: true,
    env: process.env,
  });
  process.exit(result.status ?? 1);
}

console.log("Skipped check:reviews because VERCEL_ENV is not production.");

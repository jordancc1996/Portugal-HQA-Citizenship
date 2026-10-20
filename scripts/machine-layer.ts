import type { AstroIntegration } from "astro";
import { generateMachineLayer } from "./generate-machine";

export function machineLayer(): AstroIntegration {
  return {
    name: "machine-readable-layer",
    hooks: {
      "astro:build:done": async ({ dir }) => {
        await generateMachineLayer(dir);
      },
    },
  };
}

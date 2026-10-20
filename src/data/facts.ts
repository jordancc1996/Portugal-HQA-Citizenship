import factsFile from "../../docs/facts.json";

export type FactStatus = "CONFIRMED" | "REPORTED" | "CURRENT" | "UNVERIFIED";

export interface Fact {
  value: string;
  status: FactStatus;
  source: string;
}

export type FactKey = keyof typeof factsFile.facts;

export const facts = factsFile.facts as Record<FactKey, Fact>;

export const lastVerified: string = factsFile.lastVerified;

import { pages } from "../src/data/pages.ts";
import { hasReviewDate, isNoindex, reviews } from "../src/data/reviews.ts";

const missingFromRegistry = pages.filter((page) => !(page.url in reviews)).map((page) => page.url);
const missingDates = pages.map((page) => page.url).filter((url) => !isNoindex(url) && !hasReviewDate(url));
const withheld = pages.map((page) => page.url).filter((url) => isNoindex(url));

if (missingFromRegistry.length > 0 || missingDates.length > 0) {
  if (missingFromRegistry.length > 0) {
    console.error("Routes missing from reviews.ts:");
    for (const url of missingFromRegistry) console.error(`- ${url}`);
  }
  if (missingDates.length > 0) {
    console.error("Indexable routes without a legal review date:");
    for (const url of missingDates) console.error(`- ${url}`);
  }
  if (withheld.length > 0) {
    console.error("Withheld from the index until a review date exists:");
    for (const url of withheld) console.error(`- ${url}`);
  }
  process.exit(1);
}

console.log("Every indexable route has a legal review date.");

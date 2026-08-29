import "./load-env.mjs";
import { seedExpertsAndResearchFromCatalog } from "../lib/cms/expertsRepository.js";

console.log("Seeding experts and research from catalog…");

try {
  const counts = await seedExpertsAndResearchFromCatalog();
  console.log("\nSeed complete:");
  console.log(`  Experts: ${counts.experts}`);
  console.log(`  Expert localizations: ${counts.expert_locales}`);
  console.log(`  Research papers: ${counts.research}`);
  console.log(`  Team members: ${counts.team_members}`);
} catch (err) {
  console.error("\nSeed failed:", err.message);
  process.exit(1);
}

import { rm } from "node:fs/promises";

const artifactDirs = ["allure-results", "allure-report", "test-results"];

for (const dir of artifactDirs) {
  await rm(dir, { recursive: true, force: true });
}

console.log(`Removed artifacts: ${artifactDirs.join(", ")}`);

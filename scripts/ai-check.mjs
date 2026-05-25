import { access } from "node:fs/promises";

const requiredPaths = [
  ".ai/core.md",
  ".ai/context.md",
  ".ai/skills/playwright-test-authoring/SKILL.md",
  ".ai/skills/page-object-maintenance/SKILL.md",
  ".ai/skills/qa-debugging/SKILL.md",
  ".ai/skills/allure-reporting/SKILL.md",
  "AGENTS.md",
  "CLAUDE.md"
];

const missing = [];

for (const path of requiredPaths) {
  try {
    await access(path);
  } catch {
    missing.push(path);
  }
}

if (missing.length > 0) {
  console.error(`Missing AI project files:\n${missing.map((path) => `- ${path}`).join("\n")}`);
  process.exit(1);
}

console.log("AI project files are present.");

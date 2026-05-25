# Codex Agent Instructions

Use the shared project instructions first:

- `.ai/core.md`
- `.ai/context.md`
- `.ai/tasks.md`

Relevant project skills live in `.ai/skills/`. Prefer those skills before inventing new conventions.

## Project skills

Before changing tests, read:

- `.ai/skills/playwright-test-authoring/SKILL.md`

Before changing page objects, read:

- `.ai/skills/page-object-maintenance/SKILL.md`

Before debugging failures, read:

- `.ai/skills/qa-debugging/SKILL.md`

Before changing Allure metadata or reporting behavior, read:

- `.ai/skills/allure-reporting/SKILL.md`

Before changing MCP or agent integration behavior, read:

- `.ai/skills/mcp-usage/SKILL.md`

For implementation work, keep changes scoped, preserve generated artifacts out of git, and verify with `npm run typecheck` plus the smallest relevant Playwright command.

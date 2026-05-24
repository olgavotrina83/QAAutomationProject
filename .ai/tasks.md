# Agent Task Playbook

## Add a new test
1. Choose the closest spec under `test/tests/`.
2. Reuse page objects from `src/pages/`.
3. Add or reuse data from `test/data/`.
4. Add Allure metadata through `applyAllureMetadata`.
5. Run `npm run typecheck` and the smallest relevant test command.

## Update a page object
1. Keep locators private to the page object unless tests need direct assertions.
2. Prefer action methods named after user intent.
3. Do not add sleeps; use Playwright assertions and auto-waiting.

## Debug a failing test
1. Read the error, screenshot, trace, video, and Allure attachments.
2. Identify whether the issue is app behavior, selector drift, data, or timing.
3. Fix the smallest layer that owns the problem.

## Extend MCP
1. Document the server in `docs/mcp.md`.
2. Keep secrets in local environment variables.
3. Add agent instructions in `.ai/skills/mcp-usage/SKILL.md` only when behavior changes.

# Playwright Test Authoring

Use this skill when adding or changing Playwright tests.

## Workflow
- Put specs in `test/tests/`.
- Import fixtures from `@src/fixtures/test`.
- Use page objects instead of raw page interactions when a page object already exists.
- Store reusable scenario data in `test/data/`.
- Add Allure metadata with `applyAllureMetadata` at the start of the test.
- Tag tests in the title, for example `@smoke @auth`.

## Verification
- Run `npm run typecheck`.
- Run the smallest relevant test command, such as `npm run test:smoke` or `playwright test test/tests/auth.spec.ts`.

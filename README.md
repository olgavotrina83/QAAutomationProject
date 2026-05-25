# QAAutomationProject

Agent-first QA automation framework for https://www.saucedemo.com/.

## Stack

- TypeScript
- Playwright Test
- Allure reports
- Vendor-neutral AI instructions and project skills

## Setup

```bash
npm install
npx playwright install
cp .env.example .env
```

## Commands

```bash
npm test
npm run test:smoke
npm run test:ui
npm run typecheck
npm run allure:generate
npm run allure:open
npm run allure:clean
npm run ai:check
```

## Run by tags

```bash
npx playwright test --grep @smoke
npx playwright test --grep @regression
npx playwright test --grep @auth
npx playwright test --grep @inventory
npx playwright test --grep @cart
npx playwright test --grep @checkout
```

Run tagged tests in headed mode:

```bash
npx playwright test --grep @regression --headed
```

Run tagged tests in one browser project:

```bash
npx playwright test --grep @regression --project=chromium
```

## Structure

- `test/tests/` - Playwright specs.
- `test/data/` - reusable test data.
- `src/pages/` - page objects.
- `src/fixtures/` - Playwright fixtures and Allure helpers.
- `src/assertions/` - reusable domain assertions.
- `.ai/` - shared agent rules, context, task playbooks, and skills.
- `docs/mcp.md` - MCP conventions for agent vendors.

Generated report artifacts are ignored by git: `allure-results/`, `allure-report/`, and `test-results/`.

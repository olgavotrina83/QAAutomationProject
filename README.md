# QAAutomationProject

Agent-first QA automation framework for https://www.saucedemo.com/.

## Stack

- TypeScript
- Playwright Test
- Allure reports
- Vendor-neutral AI instructions and project skills

## Prerequisites

- Node.js 20 or newer.
- npm.
- Java Runtime for generating Allure HTML reports.

## Setup

```bash
npm install
npx playwright install
cp .env.example .env
```

Allure CLI requires Java Runtime to generate HTML reports. On macOS, install it with Homebrew:

```bash
brew install openjdk
echo 'export PATH="/opt/homebrew/opt/openjdk/bin:$PATH"' >> ~/.zshrc
source ~/.zshrc
java -version
```

If `java -version` still cannot find Java, link the JDK:

```bash
sudo ln -sfn /opt/homebrew/opt/openjdk/libexec/openjdk.jdk /Library/Java/JavaVirtualMachines/openjdk.jdk
```

## Quick start

Run smoke tests and generate the Allure report:

```bash
npm run allure:clean
npm run test:smoke
npm run allure:generate
npm run allure:open
```

## Commands

- `npm test` - run the full Playwright test suite.
- `npm run test:smoke` - run tests tagged with `@smoke`.
- `npm run test:ui` - open Playwright UI mode for interactive test development and debugging.
- `npm run typecheck` - run TypeScript checks without emitting files.
- `npm run allure:generate` - build the HTML Allure report from `allure-results/`.
- `npm run allure:open` - open the generated Allure report.
- `npm run allure:clean` - remove generated test and Allure artifacts.
- `npm run ai:check` - verify that required AI instruction and skill files exist.

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

## Reports

- `allure-results/` - raw Allure results created by Playwright test runs.
- `allure-report/` - generated HTML Allure report.
- `test-results/` - Playwright traces, screenshots, and videos.

Generate a fresh report:

```bash
npm run allure:clean
npm run test:smoke
npm run allure:generate
```

Open the report:

```bash
npm run allure:open
```

## Structure

- `test/tests/` - Playwright specs.
- `test/data/` - reusable test data.
- `src/pages/` - page objects.
- `src/fixtures/` - Playwright fixtures and Allure helpers.
- `src/assertions/` - reusable domain assertions.
- `.ai/` - shared agent rules, context, and skills.
- `docs/mcp.md` - MCP conventions for agent vendors.

Generated report artifacts are ignored by git: `allure-results/`, `allure-report/`, and `test-results/`.

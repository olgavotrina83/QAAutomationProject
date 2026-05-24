# Core QA Automation Rules

This repository is an agent-first Playwright framework for SauceDemo.

## Test style
- Keep specs in `test/tests/` and test data in `test/data/`.
- Write user-visible scenarios, not implementation checks.
- Prefer stable `data-test` selectors through Playwright `getByTestId`.
- Use page objects from `src/pages/` for navigation and page interactions.
- Keep assertions close to user outcomes and reusable assertions in `src/assertions/`.

## Allure
- Every test must set `epic`, `feature`, `story`, `severity`, `owner`, and tags.
- Use tags that match suites such as `smoke`, `regression`, `auth`, `cart`, `checkout`, and `inventory`.
- Preserve screenshots, traces, and videos on failure through Playwright config.

## Definition of done
- New behavior has a test or a clear reason why it does not need one.
- `npm run typecheck` passes.
- Relevant Playwright suite passes locally or the failure is documented.
- Generated folders stay out of git: `allure-results/`, `allure-report/`, `test-results/`.

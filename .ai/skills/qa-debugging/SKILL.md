# QA Debugging

Use this skill when investigating a failing test.

## Workflow
- Start with the Playwright error and the failing step.
- Inspect `test-results/` for screenshots, traces, and videos.
- Generate Allure with `npm run allure:generate` when `allure-results/` exists.
- Categorize the failure as app behavior, selector drift, timing, environment, or test data.
- Fix the owning layer: config, data, page object, assertion, or spec.

# Allure Reporting

Use this skill when changing test metadata or reporting behavior.

## Metadata
- Set `epic`, `feature`, `story`, `severity`, `owner`, and tags for every test.
- Use meaningful features such as `Authentication`, `Inventory`, `Cart`, and `Checkout`.
- Keep severity aligned with business impact.

## Artifacts
- Generated folders are `allure-results/` and `allure-report/`.
- Do not commit generated reports.
- Use `npm run allure:clean` before a fresh reporting run when old data could confuse results.

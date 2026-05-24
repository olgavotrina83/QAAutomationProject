# Page Object Maintenance

Use this skill when adding or changing page objects.

## Rules
- Keep page objects in `src/pages/`.
- Prefer `getByTestId`, `getByRole`, and user-facing locators.
- Name methods by user intent: `login`, `openCart`, `finishOrder`.
- Keep test assertions in tests unless the assertion defines page readiness or a reusable page outcome.
- Avoid hard waits and selector strings that duplicate existing page object locators.

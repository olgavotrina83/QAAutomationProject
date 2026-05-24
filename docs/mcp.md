# MCP

MCP support is documented in-repo so different AI vendors can reuse the same project conventions.

## Recommended servers

### Browser / Playwright automation
- Purpose: inspect SauceDemo, reproduce UI behavior, and validate local browser flows.
- Use for interactive debugging before changing tests or page objects.

### Filesystem / repo context
- Purpose: read project rules, skills, tests, and docs.
- Scope access to this repository.

### GitHub, optional
- Purpose: inspect pull requests, issues, and CI failures.
- Keep tokens outside the repository.

### Report analysis, optional
- Purpose: read Allure artifacts and summarize failures.
- Add this only after Allure history or CI artifacts become part of the workflow.

## Secrets

Do not commit tokens, credentials, or vendor-specific MCP secrets. Use local environment variables or vendor-managed secret storage.

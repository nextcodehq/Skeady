# Contributing to Skeady

## Commit messages

Use the Conventional Commits format:

`type(scope): description`

The scope is optional. Use lowercase scopes when present.

Examples:

- `feat(skeady): add task list`
- `fix(api): handle expired tokens`
- `refactor(domain): simplify task state`
- `docs: document environment variables`
- `build: configure commitlint and husky`
- `chore: initialize Skeady workspace`

Guidelines:

- Write concise descriptions in English.
- Do not end the description with a period.
- Keep each commit focused on one purpose.
- Use `!` for breaking changes and explain them with `BREAKING CHANGE:` when appropriate.
- Review the staged diff before committing.

The commit-msg hook validates the Conventional Commits format.
The language and single-purpose guidelines are reviewed by the contributor.

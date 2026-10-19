# Skeady

Schedule and task management.

## Apps

- `apps/skeady` React, Vite, Tauri 2
- `apps/dashboard` TanStack Start
- `apps/api` Elysia
- `apps/docs` Fumadocs

## Packages

- `packages/tsconfig` shared TypeScript configuration
- `packages/domain` shared domain logic (planned)
- `packages/contracts` shared API contracts (planned)
- `packages/api-client` shared API client (planned)
- `packages/ui` shared UI components (planned)

## Commands

- `bun run tauri:dev` launch the Tauri app
- `bun run tauri:build` build the Tauri app
- `bun run dev` run development tasks through Turborepo
- `bun run build` build workspaces
- `bun run format` format supported files with Oxfmt
- `bun run format:rust` format Rust code
- `bun run lint` run Oxlint
- `bun run check-types` check TypeScript types
- `bun run check` run the configured checks and build

## License

GNU Affero General Public License v3.0 See [LICENSE](./LICENSE).

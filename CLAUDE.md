# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
bun run dev         # Start dev server on port 3000
bun run build       # Production build
bun run preview     # Preview production build
bun run test        # Run tests (vitest run)
bun run lint        # Lint with Biome
bun run format      # Format with Biome
bun run check       # Full Biome check (lint + format)
```

Package manager is **Bun** (enforced via `packageManager` field). Use `bun add` / `bun install` for dependencies.

Add shadcn components with: `pnpm dlx shadcn@latest add <component>`

## Architecture

**TanStack Start** full-stack app with React 19, file-based routing, and oRPC for type-safe client-server communication.

### Stack

- **Framework**: TanStack Start (SSR) + TanStack Router (file-based routing)
- **RPC**: oRPC — type-safe endpoints with Zod validation
- **Data fetching**: TanStack Query v5 via `@orpc/tanstack-query` utils
- **Styling**: Tailwind CSS v4 + shadcn/ui (OKLch color space theme in `src/styles.css`)
- **Validation**: Zod v4
- **Build**: Vite v7 with TanStack Start plugin
- **Linting/Formatting**: Biome (140 char line width, double quotes, spaces)
- **Testing**: Vitest + Testing Library

### Key patterns

**Isomorphic oRPC client** (`src/orpc/client.ts`): Uses `createIsomorphicFn()` — on the server it calls router handlers directly; on the client it uses `RPCLink` to hit `/api/rpc`. Both export a typed `client` and `orpc` (TanStack Query utils).

**Dual API endpoints**: `/api/*` serves OpenAPI (auto-generated from oRPC definitions), `/api/rpc/*` serves JSON-RPC. Both are catchall routes in `src/routes/`.

**Router context**: The TanStack Router provides `QueryClient` via context (`src/router.tsx`), available in all route loaders.

**Environment variables**: Defined in `src/env.ts` using T3Env with Zod validation. Client vars must be prefixed with `VITE_`. Import via `import { env } from "#/env"`.

### Path aliases

- `#/*` → `./src/*` (package.json imports, preferred)
- `@/*` → `./src/*` (tsconfig paths)

### Adding features

**New route**: Add `.tsx` file in `src/routes/` — TanStack Router auto-generates the route tree (`routeTree.gen.ts` is generated, do not edit).

**New API handler**: Define handler in `src/orpc/router/` using `os.input(zodSchema).handler()`, export from `src/orpc/router/index.ts`. Access via `client.<handler>()` or `orpc` query utils.

**New env var**: Add to `src/env.ts` with Zod schema. Client vars need `VITE_` prefix.

## Code Standards

### Biome rules to be aware of

- Self-closing JSX elements required (error)
- No inferrable types (error) — don't annotate what TS can infer
- `useOptionalChain` (error) — use `?.` over `&&` chains
- `useSortedClasses` (warn) — Tailwind classes must be sorted
- `noExplicitAny` (warn)
- `useExhaustiveDependencies` (warn)
- Allowed: `noParameterAssign`, `noNonNullAssertion`, `noDangerouslySetInnerHtml` are disabled

### TypeScript

Strict mode enabled. ESM modules (`"type": "module"`). Use `#/` imports for project files.

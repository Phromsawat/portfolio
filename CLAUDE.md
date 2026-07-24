# CLAUDE.md — Portfolio

## Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript (strict)
- **Styling**: Tailwind CSS 4
- **Runtime**: Bun
- **Repo**: https://github.com/Phromsawat/portfolio

## Commands

```bash
bun dev          # dev server
bun build        # production build
bun start        # production server
bun lint         # eslint
```

## Project Structure

```
src/
  app/
    layout.tsx   # root layout + metadata
    page.tsx     # home page
    globals.css  # tailwind import
```

## Conventions

- App Router only — no Pages Router
- Server Components by default; `"use client"` only when needed
- File naming: `kebab-case` for folders, `PascalCase` for components
- No default exports except pages and layouts
- Tailwind utility classes only — no custom CSS unless unavoidable
- No `any` type — use `unknown` and narrow

## Git Workflow

```bash
git add .
git commit -m "type: description"
git push
```

Commit types: `feat` / `fix` / `style` / `refactor` / `docs` / `chore`

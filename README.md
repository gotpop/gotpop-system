# gotpop-system

Design system monorepo for gotpop projects.

## Quick Start

```bash
# Install dependencies
yarn install

# Start development
yarn dev

# Build all packages
yarn build

# Lint all packages
yarn lint
```

## Structure

- `packages/ui` - React components
- `packages/server` - Server-only components  
- `packages/icons` - Icon components
- `packages/tokens` - Design tokens
- `packages/utils` - Shared utilities
- `apps/website` - Next.js website (system.gotpop.io)
- `apps/storybook` - Component documentation

## Development

See individual package READMEs for specific development instructions.

## Publishing

Packages are published to GitHub Packages under the `@gotpop` scope.

```bash
yarn publish-packages
```
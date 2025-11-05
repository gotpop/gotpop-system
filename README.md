# gotpop-system

[![JSR](https://jsr.io/badges/@gotpop/system)](https://jsr.io/@gotpop/system) [![JSR Score](https://jsr.io/badges/@gotpop/system/score)](https://jsr.io/@gotpop/system)

Design system monorepo for gotpop projects with TypeScript-first distribution via JSR.

## 📦 Published Package

**[@gotpop/system](https://jsr.io/@gotpop/system)** - Available on JSR (JavaScript Registry)

```bash
# Install via JSR
npx jsr add @gotpop/system

# Or via npm
npm install @gotpop/system
```

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

- `packages/system` - **Main package published to JSR** 🚀
- `packages/ui` - Shared UI components
- `packages/icons` - Icon components  
- `packages/tokens` - Design tokens
- `packages/utils` - Shared utilities
- `apps/storybook` - Component documentation

## Development

See individual package READMEs for specific development instructions.

## Publishing

The main package is published to **JSR** (JavaScript Registry) for modern TypeScript distribution:

```bash
# Publish to JSR (from packages/system directory)
cd packages/system
npx jsr publish
```

Visit [@gotpop/system on JSR](https://jsr.io/@gotpop/system) for the published package.
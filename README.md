# gotpop-system

[![JSR](https://jsr.io/badges/@gotpop/system)](https://jsr.io/@gotpop/system) [![JSR Score](https://jsr.io/badges/@gotpop/system/score)](https://jsr.io/@gotpop/system)

[![Lint](https://github.com/gotpop/gotpop-system/actions/workflows/lint.yml/badge.svg?branch=main)](https://github.com/gotpop/gotpop-system/actions/workflows/lint.yml) [![Format Check](https://github.com/gotpop/gotpop-system/actions/workflows/format-check.yml/badge.svg?branch=main)](https://github.com/gotpop/gotpop-system/actions/workflows/format-check.yml) [![Type Check](https://github.com/gotpop/gotpop-system/actions/workflows/type-check.yml/badge.svg?branch=main)](https://github.com/gotpop/gotpop-system/actions/workflows/type-check.yml)

Design system monorepo for gotpop projects with TypeScript-first distribution via JSR

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
- `apps/storybook` - Component documentation

## Development

See individual package READMEs for specific development instructions.

## Publishing

The main package is published to **JSR** (JavaScript Registry) for modern TypeScript distribution:

### Manual Publishing

```bash
# From root directory
yarn jsr:publish

# Or from packages/system directory
cd packages/system
npx jsr publish

# Dry run to test
yarn jsr:publish:dry
```

### Automated Publishing

Publishing happens automatically via GitHub Actions when:
- Changes are pushed to `master` branch in `packages/system/`
- Version is auto-incremented (patch version)
- Package is published to JSR after successful type checking

### JSR Features

- **Raw TypeScript**: No build step required, consume directly from TypeScript source
- **Tree-shaking**: Import only what you need
- **Type safety**: Full TypeScript support with strict checking
- **Modern imports**: ESM-first with proper exports mapping

Visit [@gotpop/system on JSR](https://jsr.io/@gotpop/system) for the published package.
# gotpop-system

[![GitHub Package](https://img.shields.io/github/v/release/gotpop/gotpop-system?label=package&logo=github)](https://github.com/gotpop/gotpop-system/packages) [![npm version](https://img.shields.io/npm/v/@gotpop/system?logo=npm)](https://www.npmjs.com/package/@gotpop/system)

[![Lint](https://github.com/gotpop/gotpop-system/actions/workflows/lint.yml/badge.svg?branch=main)](https://github.com/gotpop/gotpop-system/actions/workflows/lint.yml) [![Format Check](https://github.com/gotpop/gotpop-system/actions/workflows/format-check.yml/badge.svg?branch=main)](https://github.com/gotpop/gotpop-system/actions/workflows/format-check.yml) [![Type Check](https://github.com/gotpop/gotpop-system/actions/workflows/type-check.yml/badge.svg?branch=main)](https://github.com/gotpop/gotpop-system/actions/workflows/type-check.yml)

Design system monorepo for gotpop projects with TypeScript-first distribution via GitHub Packages

## 📦 Published Package

**[@gotpop/system](https://github.com/gotpop/gotpop-system/packages)** - Available on GitHub Packages

```bash
# Configure .npmrc to use GitHub Packages
echo "@gotpop:registry=https://npm.pkg.github.com" >> .npmrc

# Install via npm
npm install @gotpop/system

# Or via yarn
yarn add @gotpop/system
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

The main package is published to **GitHub Packages** for private distribution:

### Manual Publishing

```bash
# From root directory
yarn publish:github

# Or from packages/system directory
cd packages/system
npm publish
```

### Automated Publishing

Publishing happens automatically via GitHub Actions when:
- Changes are pushed to `master` branch in `packages/system/`
- Version is auto-incremented (patch version)
- Package is published to GitHub Packages after successful type checking

### GitHub Packages Features

- **Private registry**: Secure package distribution within your organization
- **GitHub integration**: Seamless authentication with GitHub tokens
- **Version management**: Full npm-compatible versioning
- **TypeScript support**: Full TypeScript support with type definitions

Visit [@gotpop/system on GitHub Packages](https://github.com/gotpop/gotpop-system/packages) for the published package.
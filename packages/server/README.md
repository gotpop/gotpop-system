# @gotpop/server

Server-only React components for the gotpop design system, optimized for Next.js Server Components and Storyblok CMS.

## Installation

### Setup GitHub Packages Authentication

Create or update `.npmrc` in your consuming project:

```
@gotpop:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}
```

### Install Package

```bash
yarn add @gotpop/server
# or
npm install @gotpop/server
```

## Usage

### Import Components

```typescript
// Import all components
import { LogoDefault, HeroDefault, components } from "@gotpop/server"

// Import specific components
import { LogoDefault } from "@gotpop/server"

// Import utilities
import { getStoryblokLinkProps } from "@gotpop/server"
```

### Storyblok Integration

```typescript
// Register components for Storyblok
import { components } from "@gotpop/server"
import { storyblokInit } from "@storyblok/react/rsc"

storyblokInit({
  accessToken: process.env.STORYBLOK_ACCESS_TOKEN,
  components,
})
```

### Component Usage

```tsx
import type { LogoDefaultStoryblok } from "@gotpop/server"
import { LogoDefault } from "@gotpop/server"

interface MyPageProps {
  logoData: LogoDefaultStoryblok
}

export default function MyPage({ logoData }: MyPageProps) {
  return <LogoDefault blok={logoData} />
}
```

## Features

- ✅ Server Components optimized
- ✅ TypeScript types included
- ✅ CSS imports handled
- ✅ Storyblok CMS integration
- ✅ Next.js 15+ compatible

## Requirements

- React 19+
- Next.js 15+
- TypeScript (recommended)

## Development

This package is part of the gotpop-system monorepo. See the main README for development instructions.

## Test Publishing

This line added to trigger workflow via packages/ change.
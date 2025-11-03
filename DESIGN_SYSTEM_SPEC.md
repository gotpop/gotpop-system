# GotPop Design System Specification

## 🎯 Project Overview

A monorepo design system for Next.js 16 components, utilities, and design tokens that can be shared across multiple projects. Components will be published to GitHub Packages for easy consumption.

## 📁 Monorepo Structure

```
gotpop-system/
├── packages/
│   ├── ui/                    # Client-safe UI components
│   ├── server/                # Server-only components  
│   ├── icons/                 # Icon components & SVGs
│   ├── tokens/                # Design tokens (colors, spacing, etc.)
│   ├── utils/                 # Shared utilities
│   └── themes/                # Theme configurations
├── apps/
│   ├── storybook/             # Component documentation
│   ├── playground/            # Development testing environment
│   └── website/               # Public design system website (Netlify)
├── tools/
│   ├── build/                 # Build configurations
│   └── eslint-config/         # Shared ESLint config
└── docs/
    ├── migration-guide.md
    └── component-api.md
```

## 📦 Package Architecture

### `@gotpop/ui` - Client Components
**Purpose**: Browser-safe React components for UI interactions

**Components to migrate from blog**:
- `ButtonToggleMenu` → `@gotpop/ui/Button`
- `Typography` → `@gotpop/ui/Typography` 
- `Icon` → `@gotpop/ui/Icon`
- Form components (if any)
- Layout primitives

**Features**:
- Tree-shakeable exports
- TypeScript definitions
- CSS custom properties for theming
- Zero server dependencies

### `@gotpop/server` - Server Components  
**Purpose**: Next.js server components with Node.js dependencies

**Components to migrate from blog**:
- `BaselineStatusBlock` → `@gotpop/server/BaselineStatus`
- `PageLayout` → `@gotpop/server/PageLayout`
- Any data-fetching components
- Server-side rendering utilities

**Features**:
- Marked with `"server-only"`
- Can use Node.js APIs
- Async components supported

### `@gotpop/icons`
**Purpose**: Centralized icon system

**Icons to migrate from blog**:
- `IconChrome`, `IconEdge`, `IconFirefox`, `IconSafari` → Browser icons
- `IconLogo` → Brand icons
- Custom SVG components

**Features**:
- Individual icon exports
- SVG optimization
- Consistent sizing system
- Accessibility attributes

### `@gotpop/tokens`
**Purpose**: Design system foundation

**Tokens to extract from blog**:
- Color palette from CSS custom properties
- Typography scales
- Spacing system
- Breakpoints
- Animation timings

**Output formats**:
- CSS custom properties
- JSON for JS consumption
- TypeScript types

### `@gotpop/utils`
**Purpose**: Shared utility functions

**Split into**:
- `@gotpop/utils/client` - Browser-safe utilities
- `@gotpop/utils/server` - Server-only utilities

**Utilities to migrate**:
- `cn()` classname utility → `@gotpop/utils/client`
- `formatDate()` → `@gotpop/utils/client`  
- `getInlineStyles()` → `@gotpop/utils/server`
- Storyblok utilities → `@gotpop/utils/server`

## 🚀 Technology Stack

- **Build System**: Turborepo + Vite
- **TypeScript**: Strict configuration with shared tsconfig
- **Styling**: CSS custom properties + colocated CSS files
- **Testing**: Vitest + Testing Library
- **Documentation**: Storybook 8
- **Linting**: Biome (consistent with blog)
- **Package Manager**: Yarn workspaces
- **Publishing**: GitHub Packages
- **Website Hosting**: Netlify (design system showcase)

## 🌐 Design System Website

### Public Website (`apps/website/`)
**Purpose**: Standalone showcase of the design system hosted on Netlify

**Features**:
- **Component Gallery** - Interactive examples of all components
- **Design Tokens** - Color palettes, typography, spacing reference
- **Usage Guidelines** - How to implement components correctly
- **Code Examples** - Copy/paste code snippets
- **Migration Guides** - How to upgrade between versions
- **Download Center** - Access to packages and resources

**Technology Stack**:
- **Framework**: Next.js 16 (static export for Netlify)
- **Styling**: Same CSS system as packages
- **Components**: Uses the actual design system packages
- **Content**: MDX for documentation pages
- **Search**: Algolia DocSearch or simple client-side search

**Site Structure**:
```
apps/website/
├── pages/
│   ├── index.tsx              # Homepage with overview
│   ├── components/
│   │   ├── typography.tsx     # Typography showcase
│   │   ├── buttons.tsx        # Button variants
│   │   └── icons.tsx          # Icon library
│   ├── tokens/
│   │   ├── colors.tsx         # Color palette
│   │   ├── spacing.tsx        # Spacing system
│   │   └── typography.tsx     # Type scale
│   ├── guides/
│   │   ├── installation.tsx   # Getting started
│   │   ├── migration.tsx      # Version migration
│   │   └── theming.tsx        # Customization guide
│   └── changelog.tsx          # Version history
├── components/
│   ├── ComponentShowcase.tsx  # Reusable demo component
│   ├── CodeBlock.tsx          # Syntax highlighted code
│   ├── ColorSwatch.tsx        # Color documentation
│   └── Layout.tsx             # Site layout
└── content/
    └── docs/                  # MDX documentation files
```

**Deployment**:
- **Automatic deploys** from main branch via Netlify
- **Preview deploys** for pull requests
- **Custom domain**: `system.gotpop.io` (subdomain via Route 53)
- **CDN distribution** for fast global access

**Content Strategy**:
- **Live examples** using actual components
- **Interactive playground** for testing props
- **Copy-to-clipboard** code examples
- **Version picker** for different releases
- **Search functionality** across all documentation

### Development Workflow
```bash
# Start local development
yarn dev:website              # Next.js dev server

# Build for production
yarn build:website             # Static export for Netlify

# Content editing
yarn dev:content              # MDX with hot reload
```

### Netlify Configuration
```toml
# netlify.toml
[build]
  base = "apps/website"
  command = "yarn build"
  publish = "out"

[build.environment]
  NODE_VERSION = "22"

[[redirects]]
  from = "/storybook/*"
  to = "https://storybook.gotpop.io/:splat"
  status = 200
```

## 📋 Migration Plan - Phase 1 (Components Only)

### High Priority Components
1. **Typography** - Foundation component used everywhere
2. **Icon** - Used by many other components  
3. **ButtonToggleMenu** - Interactive component
4. **BaselineStatusBlock** - Complex server component example

### Medium Priority
5. **PageLayout** - Page structure component
6. **Browser Icons** (Chrome, Edge, Firefox, Safari)
7. **Logo components**

### Low Priority  
8. **Storyblok-specific components** (can stay in blog initially)
9. **Page components** (PostsPage, etc.)

## 🔧 Build Configuration

### Package.json Structure
```json
{
  "name": "@gotpop/ui",
  "version": "1.0.0",
  "main": "./dist/index.js",
  "module": "./dist/index.esm.js", 
  "types": "./dist/index.d.ts",
  "exports": {
    ".": {
      "import": "./dist/index.esm.js",
      "require": "./dist/index.js",
      "types": "./dist/index.d.ts"
    },
    "./styles": "./dist/styles.css"
  },
  "peerDependencies": {
    "react": "^19.0.0",
    "next": "^16.0.0"
  }
}
```

### Publishing Strategy
- Automated via GitHub Actions
- Semantic versioning
- Changesets for version management  
- Published to GitHub Packages under `@gotpop` scope

## 🎨 Styling Strategy

### CSS Architecture
- **CSS Custom Properties** for theming
- **Colocated CSS** files with components
- **No CSS-in-JS** (matches current blog approach)
- **BEM-like** naming conventions

### Example Component Structure
```
packages/ui/src/Button/
├── Button.tsx
├── Button.css
├── Button.test.tsx
├── Button.stories.tsx
└── index.ts
```

## 🧪 Development Workflow

### Local Development with Live Blog Updates
```bash
# 1. Start design system in watch mode
cd gotpop-system
yarn dev:packages    # Builds packages in watch mode

# 2. Link packages to blog (in separate terminal)
cd ../gotpop-blog
yarn link:design-system   # Links local packages

# 3. Start blog dev server
yarn dev             # Blog now uses live design system packages
```

**Result**: Edit a component in `gotpop-system` → See changes instantly in `gotpop-blog`

### Development Commands
```bash
# Install dependencies
yarn install

# Watch mode for package development
yarn dev:packages    # Rebuilds packages on changes

# Start Storybook for component testing
yarn dev:storybook   # Isolated component development

# Run playground app for integration testing
yarn dev:playground  # Full app testing environment

# Build all packages
yarn build

# Test all packages  
yarn test
```

### Integrated Development Experience

**Workflow 1: Component Development**
1. Edit component in `packages/ui/src/Button/Button.tsx`
2. See changes instantly in:
   - Storybook (component isolation)
   - Playground app (integration testing)
   - Blog app (real usage)

**Workflow 2: Blog Integration**
1. Work on component in design system
2. Changes automatically appear in blog
3. No manual rebuilding or republishing needed
4. Perfect for rapid iteration

### Package Linking Strategy
```json
// gotpop-blog/package.json
{
  "scripts": {
    "link:design-system": "yarn link ../gotpop-system/packages/ui && yarn link ../gotpop-system/packages/server && yarn link ../gotpop-system/packages/icons",
    "unlink:design-system": "yarn unlink @gotpop/ui @gotpop/server @gotpop/icons"
  }
}

// gotpop-system/package.json  
{
  "scripts": {
    "dev:packages": "turbo watch build --filter='@gotpop/*'",
    "prepare:link": "turbo build && yarn workspaces foreach run link"
  }
}
```

### Testing Strategy
- **Unit tests** for utilities
- **Component tests** for UI components
- **Integration tests** for complex components
- **Visual regression** via Storybook

## 📤 Export Strategy

### Safe Barrel Files
```typescript
// @gotpop/ui/index.ts - Safe: all client components
export { Button } from './Button'
export { Typography } from './Typography'
export { Icon } from './Icon'

// @gotpop/server/index.ts - Safe: all server components  
export { PageLayout } from './PageLayout'
export { BaselineStatus } from './BaselineStatus'
```

### Direct Exports (when needed)
```typescript
// For hybrid components or special cases
import { SpecialComponent } from '@gotpop/ui/SpecialComponent'
```

## 🔄 Integration with Blog

### Installation
```bash
yarn add @gotpop/ui @gotpop/server @gotpop/icons @gotpop/tokens
```

### Usage in Blog
```typescript
// Replace current imports
import { Typography, Icon } from '@gotpop/ui'
import { PageLayout } from '@gotpop/server'  
import { IconChrome } from '@gotpop/icons'
```

### CSS Integration
```css
/* Import design tokens */
@import '@gotpop/tokens/dist/tokens.css';
@import '@gotpop/ui/dist/styles.css';
```

## 🎯 Success Metrics

- [ ] All target components migrated and working
- [ ] Blog successfully uses packages instead of local components
- [ ] Storybook documentation complete
- [ ] Build system producing optimized bundles
- [ ] Packages published to GitHub registry
- [ ] Zero breaking changes in blog after migration

## 🚧 Future Phases

### Phase 2: Utilities & Tokens
- Extract design tokens
- Migrate utility functions
- Theme system

### Phase 3: Advanced Features  
- Advanced components (forms, data display)
- Animation system
- Accessibility utilities

### Phase 4: Documentation & Tools
- Design guidelines
- Figma integration
- CLI tools for scaffolding

---

## 📝 Review Notes

Please review this specification and provide feedback on:

1. **Package structure** - Does the separation make sense?
2. **Component selection** - Are these the right components to start with?
3. **Build strategy** - Any concerns about the technical approach?
4. **Migration plan** - Is the phasing realistic?
5. **Missing considerations** - What else should be included?

Once approved, I'll scaffold the initial project structure with build configuration and start migrating the first components.
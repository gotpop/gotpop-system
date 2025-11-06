import { dirname, join } from "node:path"
import type { StorybookConfig } from "@storybook/nextjs-vite"

interface StorybookFramework {
  name: string
  options: Record<string, unknown>
}

interface StorybookFeatures {
  experimentalRSC: boolean
}

interface TypeScriptOptions {
  shouldExtractLiteralValuesFromEnum: boolean
  propFilter: (prop: { parent?: { fileName: string } }) => boolean
}

interface StorybookTypeScript {
  check: boolean
  reactDocgen: string
  reactDocgenTypescriptOptions: TypeScriptOptions
}

interface ViteConfig {
  resolve?: {
    alias?: Record<string, string>
  }
}

const config: StorybookConfig = {
  stories: ["../../../packages/system/src/**/*.stories.@(js|jsx|ts|tsx|mdx)"],

  addons: [
    "@storybook/addon-links",
    "@storybook/addon-docs",
    "@storybook/addon-essentials",
  ],

  framework: {
    name: getAbsolutePath("@storybook/nextjs-vite"),
    options: {},
  } satisfies StorybookFramework,

  features: {
    experimentalRSC: true,
  } satisfies StorybookFeatures,

  typescript: {
    check: false,
    reactDocgen: "react-docgen-typescript",
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop: { parent?: { fileName: string } }) =>
        prop.parent ? !/node_modules/.test(prop.parent.fileName) : true,
    },
  } satisfies StorybookTypeScript,

  async viteFinal(config: ViteConfig): Promise<ViteConfig> {
    config.resolve = config.resolve || {}
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": join(__dirname, "../../../packages/system/src"),
      "@storybook-components": join(__dirname, "../src/components"),
    }
    return config
  },
}

export default config

function getAbsolutePath(value: string): string {
  return dirname(require.resolve(join(value, "package.json")))
}

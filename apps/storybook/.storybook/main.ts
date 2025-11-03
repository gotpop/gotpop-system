import { dirname } from "node:path"
import { fileURLToPath } from "node:url"
import type { StorybookConfig } from "@storybook/nextjs-vite"

const config: StorybookConfig = {
  stories: [
    "../../../packages/ui/src/**/*.stories.@(js|jsx|ts|tsx|mdx)",
    "../../../packages/server/src/**/*.stories.@(js|jsx|ts|tsx|mdx)",
    "../../../packages/icons/src/**/*.stories.@(js|jsx|ts|tsx|mdx)",
    "../../../packages/tokens/src/**/*.stories.@(js|jsx|ts|tsx|mdx)",
  ],

  addons: [
    getAbsolutePath("@storybook/addon-links"),
    getAbsolutePath("@storybook/addon-docs"),
  ],

  framework: {
    name: getAbsolutePath("@storybook/nextjs-vite"),
    options: {},
  },

  features: {
    experimentalRSC: true,
  },

  typescript: {
    check: false,
    reactDocgen: "react-docgen-typescript",
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) =>
        prop.parent ? !/node_modules/.test(prop.parent.fileName) : true,
    },
  },
}

export default config

function getAbsolutePath(value: string): any {
  return dirname(fileURLToPath(import.meta.resolve(`${value}/package.json`)))
}

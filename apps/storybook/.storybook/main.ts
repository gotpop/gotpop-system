import { join } from "node:path"
import type { StorybookConfig } from "@storybook/react-vite"

const config: StorybookConfig = {
  stories: ["../../../packages/system/src/**/*.stories.@(js|jsx|ts|tsx|mdx)"],

  addons: ["@storybook/addon-essentials", "@storybook/addon-links"],

  framework: {
    name: "@storybook/react-vite",
    options: {},
  },

  typescript: {
    check: false,
    reactDocgen: "react-docgen-typescript",
  },

  async viteFinal(config) {
    if (config.resolve) {
      config.resolve.alias = {
        ...config.resolve.alias,
        "@": join(__dirname, "../../../packages/system/src"),
      }
    }
    return config
  },
}

export default config

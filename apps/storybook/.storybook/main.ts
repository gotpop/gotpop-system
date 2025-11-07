import { join } from "node:path"
import type { StorybookConfig } from "@storybook/nextjs"

const config: StorybookConfig = {
  stories: ["../../../packages/system/src/**/*.stories.@(js|jsx|ts|tsx|mdx)"],

  addons: [],

  framework: {
    name: "@storybook/nextjs",
    options: {},
  },

  features: {
    experimentalRSC: true,
  },

  typescript: {
    check: false,
    reactDocgen: "react-docgen-typescript",
  },

  webpackFinal: async (config) => {
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

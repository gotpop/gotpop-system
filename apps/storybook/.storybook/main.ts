import type { StorybookConfig } from "@storybook/experimental-nextjs-vite"

const config: StorybookConfig = {
  stories: [
    "../../../packages/ui/src/**/*.stories.@(js|jsx|ts|tsx|mdx)",
    "../../../packages/server/src/**/*.stories.@(js|jsx|ts|tsx|mdx)",
    "../../../packages/icons/src/**/*.stories.@(js|jsx|ts|tsx|mdx)",
    "../../../packages/tokens/src/**/*.stories.@(js|jsx|ts|tsx|mdx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/experimental-nextjs-vite",
    options: {},
  },
  features: {
    experimentalRSC: true,
  },
  typescript: {
    reactDocgen: "react-docgen-typescript",
  },
}

export default config

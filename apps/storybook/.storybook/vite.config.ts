import { resolve } from "path"
import { defineConfig } from "vite"

export default defineConfig({
  define: {
    // Mock server-only for client-side Storybook
    "process.env.NODE_ENV": JSON.stringify("development"),
  },
  resolve: {
    alias: {
      // Mock server-only module for Storybook
      "server-only": resolve(__dirname, "./mocks/server-only.js"),
    },
  },
})

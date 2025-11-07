import { apiPlugin, storyblokInit } from "@storyblok/react/rsc"

// Lazy-load components to avoid circular dependency
// The registry imports components, which may import utilities that depend on this file
function getComponents() {
  const { components } = require("../components/storyblok/storyblok-registry")
  return components
}

// Server-side initialization
export const getStoryblokApi: ReturnType<typeof storyblokInit> = storyblokInit({
  accessToken: process.env.STORYBLOK_ACCESS_TOKEN,
  use: [apiPlugin],
  components: getComponents(),
  apiOptions: {
    region: "eu",
  },
})

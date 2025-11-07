import { apiPlugin, storyblokInit } from "@storyblok/react/rsc"

// Server-side initialization
export const getStoryblokApi: ReturnType<typeof storyblokInit> = storyblokInit({
  accessToken: process.env.STORYBLOK_ACCESS_TOKEN,
  use: [apiPlugin],
  components: {}, // Components are imported directly where needed
  apiOptions: {
    region: "eu",
  },
})

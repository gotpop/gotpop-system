import { apiPlugin, storyblokInit } from "@storyblok/react/rsc"
import { LogoDefault } from "../LogoDefault"

// Only register LogoDefault for testing
// TODO: Add other components as they are copied over
// import {
//   BaselineStatusBlock,
//   Card,
//   Cards,
//   FilterContent,
//   FooterDefault,
//   HeaderDefault,
//   HeroDefault,
//   LinkList,
//   LogoDefault,
//   NavDefault,
//   NavItemDefault,
//   PageDefault,
//   PageFilter,
//   PagePost,
//   RichTextBlock,
//   RichTextCodeBlock,
//   SnippetBlock,
// } from "@/storyblok"

const components = {
  // Only LogoDefault is available for testing
  logo_default: LogoDefault,

  // TODO: Add other components as they are copied over
  // baseline_status_block: BaselineStatusBlock,
  // card: Card,
  // cards: Cards,
  // filter_content: FilterContent,
  // footer_default: FooterDefault,
  // header_default: HeaderDefault,
  // hero_default: HeroDefault,
  // link_list: LinkList,
  // nav_default: NavDefault,
  // nav_item_default: NavItemDefault,
  // page_default: PageDefault,
  // page_filter: PageFilter,
  // page_post: PagePost,
  // rich_text_block: RichTextBlock,
  // rich_text_code_block: RichTextCodeBlock,
  // snippet_block: SnippetBlock,
}

// Server-side initialization
export const getStoryblokApi = storyblokInit({
  accessToken: process.env.STORYBLOK_ACCESS_TOKEN,
  use: [apiPlugin],
  components,
  apiOptions: {
    region: "eu",
  },
})

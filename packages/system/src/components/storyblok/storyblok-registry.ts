/**
 * Storyblok Component Registry
 *
 * This file should ONLY be imported in server-side contexts (lib/storyblok.ts).
 * DO NOT import this in Storybook stories or client components.
 *
 * For stories, import view components directly from their component folders.
 */

import "server-only"

import { BaselineStatusBlock } from "./BaselineStatusBlock"
import { Card, Cards } from "./Cards"
import { FilterContent } from "./FilterContent"
import { FooterDefaultBlock } from "./FooterDefaultBlock/FooterDefaultBlockHOC"
import { HeaderDefault } from "./HeaderDefault"
import { HeroDefault } from "./HeroDefault"
import { LinkList } from "./LinkList"
import { LogoDefault } from "./LogoDefault"
import { NavDefault, NavItemDefault } from "./NavDefault"
import { PageDefault, PageFilter, PagePost } from "./Pages"
import { RichTextBlock } from "./RichTextBlock"
import { RichTextCodeBlock } from "./RichTextCodeBlock"
import { SnippetBlock } from "./SnippetBlock"

export const components = {
  baseline_status_block: BaselineStatusBlock,
  card: Card,
  cards: Cards,
  filter_content: FilterContent,
  footer_default: FooterDefaultBlock,
  header_default: HeaderDefault,
  hero_default: HeroDefault,
  link_list: LinkList,
  logo_default: LogoDefault,
  nav_default: NavDefault,
  nav_item_default: NavItemDefault,
  page_default: PageDefault,
  page_filter: PageFilter,
  page_post: PagePost,
  rich_text_block: RichTextBlock,
  rich_text_code_block: RichTextCodeBlock,
  snippet_block: SnippetBlock,
}

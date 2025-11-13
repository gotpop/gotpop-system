import "server-only"

import type { ConfigStoryblok, NavDefaultStoryblok } from "@gotpop/system"
import type { SbBlokData } from "@storyblok/react/rsc"
import type { ReactNode } from "react"
import { getConfig } from "../config/runtime-config"
import { StoryblokServerComponent } from "./StoryblokServerComponent"

interface NavBlok {
  nav_items?: NavDefaultStoryblok["nav_items"]
  [key: string]: unknown
}

interface WithNavDataProps<T extends NavBlok> {
  blok: T
  blocks: ReactNode
  config: ConfigStoryblok | null
}

type ComponentMap = Record<
  string,
  React.ComponentType<{ blok: SbBlokData; config?: ConfigStoryblok | null }>
>

/** Higher-Order Component that renders navigation items for the Nav component */
export function withNavData<T extends NavBlok>(
  ViewComponent: React.ComponentType<WithNavDataProps<T>>,
  components: ComponentMap
) {
  return async ({
    blok,
    config: providedConfig,
  }: {
    blok: T
    config?: ConfigStoryblok | null
  }) => {
    // Use provided config or fetch from cache
    const config = providedConfig ?? (await getConfig())

    const blocks = blok.nav_items?.map((nestedBlok) => (
      <StoryblokServerComponent
        blok={nestedBlok}
        key={nestedBlok._uid}
        config={config}
        components={components}
      />
    ))

    return <ViewComponent blok={blok} blocks={blocks} config={config} />
  }
}

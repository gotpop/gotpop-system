import "server-only"

import type { ConfigStoryblok, HeaderDefaultStoryblok } from "@gotpop/system"
import type { SbBlokData } from "@storyblok/react/rsc"
import type { ReactNode } from "react"
import { getConfig } from "../config/runtime-config"
import { StoryblokServerComponent } from "./StoryblokServerComponent"

interface WithHeaderDataProps {
  blok: HeaderDefaultStoryblok
  nav: ReactNode
  logo: ReactNode
  config: ConfigStoryblok | null
}

type ComponentMap = Record<
  string,
  React.ComponentType<{ blok: SbBlokData; config?: ConfigStoryblok | null }>
>

/** Higher-Order Component that renders nav and logo components for the Header */
export function withHeaderData(
  ViewComponent: React.ComponentType<WithHeaderDataProps>,
  components: ComponentMap
) {
  return async ({
    blok,
    config: providedConfig,
  }: {
    blok: HeaderDefaultStoryblok
    config?: ConfigStoryblok | null
  }) => {
    // Use provided config or fetch from cache
    const config = providedConfig ?? (await getConfig())

    const nav = blok.nav?.[0] ? (
      <StoryblokServerComponent
        blok={blok.nav[0]}
        config={config}
        components={components}
      />
    ) : null

    const logo = blok.logo?.[0] ? (
      <StoryblokServerComponent
        blok={blok.logo[0]}
        config={config}
        components={components}
      />
    ) : null

    return <ViewComponent blok={blok} nav={nav} logo={logo} config={config} />
  }
}

import "server-only"

import type { ConfigStoryblok } from "@gotpop/system"
import type { SbBlokData } from "@storyblok/react/rsc"

type ComponentMap = Record<
  string,
  React.ComponentType<{ blok: SbBlokData; config?: ConfigStoryblok | null }>
>

interface StoryblokServerComponentProps {
  blok: SbBlokData | null | undefined
  config: ConfigStoryblok | null
  components: ComponentMap
}

export function StoryblokServerComponent({
  blok,
  config,
  components,
}: StoryblokServerComponentProps): React.JSX.Element | null {
  if (!blok) {
    return null
  }

  if (typeof blok !== "object" || !blok.component) {
    return null
  }

  const Component = components[blok.component as keyof typeof components]

  if (!Component) {
    console.warn(`Component ${blok.component} doesn't exist.`)

    return null
  }

  // TypeScript can't infer the correct blok type for each component
  // Safe to cast since we're checking the component exists
  return <Component blok={blok as never} config={config} />
}

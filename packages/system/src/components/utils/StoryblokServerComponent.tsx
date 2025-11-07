import type { SbBlokData } from "@storyblok/react/rsc"

interface StoryblokServerComponentProps {
  blok: SbBlokData | null | undefined
}

/**
 * Placeholder for server-side component rendering.
 * In a design system, components are imported directly.
 * This is kept for compatibility with existing code.
 */
export function StoryblokServerComponent({
  blok,
}: StoryblokServerComponentProps): React.JSX.Element | null {
  if (!blok) {
    return null
  }

  if (typeof blok !== "object" || !blok.component) {
    return null
  }

  console.warn(
    `StoryblokServerComponent: Component ${blok.component} cannot be dynamically rendered. Import components directly.`
  )

  return null
}

import { useId } from "react"
import type { HeroDefaultStoryblok } from "../../types/storyblok-components"
import { Typography } from "./Typography"

interface HeroDefaultProps {
  blok: HeroDefaultStoryblok
}

export function HeroDefault({ blok }: HeroDefaultProps) {
  const { heading, subheading } = blok
  const id = useId()

  return (
    <section aria-labelledby={id}>
      <Typography
        className="hero-home-heading"
        id={id}
        shade="dark"
        tag="h1"
        variant="hero"
      >
        {heading}
      </Typography>
      {subheading && (
        <Typography tag="p" variant="text-lg">
          {subheading}
        </Typography>
      )}
    </section>
  )
}

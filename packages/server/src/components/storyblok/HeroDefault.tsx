import { useId } from "react"
import type { HeroDefaultStoryblok } from "../../types/storyblok-components"
import { RichText } from "../ui/RichText"
import { Typography } from "./Typography"

interface HeroDefaultProps {
  blok: HeroDefaultStoryblok
}

export function HeroDefault({ blok }: HeroDefaultProps): unknown {
  const { heading, subheading } = blok
  const id = useId()

  return (
    <div aria-labelledby={id}>
      <Typography
        className="hero-home-heading"
        id={id}
        shade="dark"
        tag="h1"
        variant="hero"
      >
        {heading}
      </Typography>
      {subheading && <RichText content={subheading} />}
    </div>
  )
}

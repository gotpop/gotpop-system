import { Typography } from "../Typography"
import type { CardStoryblok } from "../../../types/storyblok-components"

interface CardProps {
  blok: CardStoryblok
}

export function Card({ blok }: CardProps) {
  const { cards } = blok
  const card = cards?.[0]

  if (!card) {
    return null
  }

  // Simplified version without async data fetching for now
  return (
    <box-grid>
      <Typography tag="h3" variant="text-xl" shade="dark">
        Card Title
      </Typography>
      <Typography tag="p" variant="text-base" shade="charcoal">
        Card description placeholder
      </Typography>
      <span className="link-simple">
        Read more
      </span>
    </box-grid>
  )
}
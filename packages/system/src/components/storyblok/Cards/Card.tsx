// import Link from "next/link"
import { getStoryPath } from "../../../lib/storyblok-utils"
import type { CardStoryblok } from "../../../types/storyblok-components"
import { fetchStoryByUuid } from "../../../utils/storyblok-fetch"
import { Typography } from "../Typography"

interface CardProps {
  blok: CardStoryblok
}

export async function Card({
  blok,
}: CardProps): Promise<React.JSX.Element | null> {
  const { cards } = blok
  const card = cards?.[0]

  if (!card) {
    return null
  }

  const story = await fetchStoryByUuid(card)

  if (!story) {
    return null
  }

  const { full_slug, content, name } = story as {
    full_slug: string
    content: {
      Heading?: string
      description?: string
      view_transition_name?: string
    }
    name: string
  }
  const linkPath = getStoryPath(full_slug)
  const title = content?.Heading || name || ""
  const description = content?.description || ""

  return (
    <div
      style={{
        viewTransitionName: content?.view_transition_name,
      }}
    >
      <Typography tag="h3" variant="text-xl" shade="dark">
        {title}
      </Typography>
      <Typography tag="p" variant="text-base" shade="charcoal">
        {description}
      </Typography>
      <a href={linkPath} className="link-simple">
        Read more
      </a>
    </div>
  )
}

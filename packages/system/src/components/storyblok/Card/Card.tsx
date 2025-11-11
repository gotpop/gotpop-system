import type {
  ConfigStoryblok,
  PagePostStoryblok,
} from "../../../types/storyblok-components"
import { formatDate } from "../../../utils/date-formatter"
import { getStoryPath } from "../../../utils/storyblok-utils"
import { CustomElement } from "../../ui/CustomElement"
import { Typography } from "../Typography"
import "./Card.css"

export interface PostProps {
  uuid: string
  full_slug: string
  name: string
  published_at: string
  content: PagePostStoryblok
}

export interface CardProps {
  post: PostProps
  config?: ConfigStoryblok | null
}

export function Card({ post }: CardProps) {
  const { full_slug, name, published_at, content } = post
  const {
    Heading,
    description,
    published_date,
    tags = [],
    view_transition_name: viewTransitionName,
  } = content || {}

  const dateToUse = published_date || published_at
  const formattedDate = formatDate(dateToUse)
  const linkPath = getStoryPath(full_slug)
  const title = Heading || name || "Untitled"

  const tagList = tags.map((tag) => (
    <span key={tag} className="tag">
      {tag}
    </span>
  ))

  return (
    <CustomElement
      tag="box-grid"
      style={{
        viewTransitionName: viewTransitionName,
      }}
    >
      <div className="meta">
        <Typography
          tag="time"
          variant="text-sm"
          shade="charcoal"
          dateTime={formattedDate}
          className="margin-none"
        >
          {formattedDate}
        </Typography>
        <div className="tags">{tagList}</div>
      </div>
      <Typography tag="h3" variant="text-xl" shade="dark">
        <a href={linkPath} className="title-link">
          {title}
        </a>
      </Typography>
      <Typography tag="p" variant="text-base" shade="charcoal">
        {description}
      </Typography>
      <a href={linkPath} className="link-simple">
        Read more
      </a>
    </CustomElement>
  )
}

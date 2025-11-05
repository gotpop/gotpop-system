import type { LinkListStoryblok } from "../../../types/storyblok-components"
import { Typography } from "../Typography"

// Only import CSS when not in JSR/Deno environment
if (typeof window !== "undefined") {
  await import("./LinkList.css")
}

interface LinkListProps {
  blok: LinkListStoryblok
}

export function LinkList({ blok }: LinkListProps): unknown {
  return (
    <div>
      <div className="link-list-heading">
        <Typography tag="h4" variant="text-xl" shade="light">
          {blok.heading}
        </Typography>
      </div>

      {blok.links && blok.links.length > 0 && (
        <ul className="link-list-items">
          {blok.links.map((linkItem) => (
            <li key={linkItem._uid}>
              <a href={linkItem.link.url} className="link-list-item">
                {linkItem.link_text}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

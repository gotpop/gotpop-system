import type { LinkListStoryblok } from "../../../types/storyblok-components"
import { Typography } from "../Typography"

interface LinkListProps {
  blok: LinkListStoryblok
}

export function LinkList({ blok }: LinkListProps) {
  return (
    <div className="link-list">
      {blok.heading && (
        <div className="link-list-heading">
          <Typography tag="h4" variant="text-xl" shade="light">
            {blok.heading}
          </Typography>
        </div>
      )}

      {blok.links && blok.links.length > 0 && (
        <ul
          className="link-list-items"
          style={{
            listStyle: "none",
            padding: 0,
            margin: 0,
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
          }}
        >
          {blok.links.map((linkItem) => (
            <li key={linkItem._uid}>
              <a
                href={linkItem.link?.url || linkItem.link?.cached_url || "#"}
                className="link-list-item"
                target={linkItem.link?.target || "_self"}
                rel={
                  linkItem.link?.linktype === "url"
                    ? "noopener noreferrer"
                    : undefined
                }
                style={{
                  textDecoration: "none",
                  color: "currentColor",
                  padding: "0.5rem",
                  display: "block",
                  borderRadius: "4px",
                  transition: "background-color 0.2s",
                }}
              >
                {linkItem.link_text || "Link"}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

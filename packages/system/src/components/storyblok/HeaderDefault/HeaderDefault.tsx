import type { HeaderDefaultStoryblok } from "../../../types/storyblok-components"
import { StoryblokServerComponent } from "../../"

// Only import CSS when not in JSR/Deno environment
if (typeof window !== "undefined") {
  await import("./HeaderDefault.css")
}

import { fetchStoryByUuid } from "../../../utils/storyblok-fetch"

interface HeaderDefaultProps {
  blok?: HeaderDefaultStoryblok | null
  uuid?: string
}

export async function HeaderDefault({
  blok,
  uuid,
}: HeaderDefaultProps): Promise<React.JSX.Element | null> {
  let headerData = blok

  if (uuid && !blok) {
    const story = await fetchStoryByUuid(uuid)
    headerData = story?.content as HeaderDefaultStoryblok
  }

  if (!headerData) {
    return null
  }

  const { nav, logo } = headerData

  return (
    <header className="header">
      {logo?.[0] && <StoryblokServerComponent blok={logo[0]} />}
      {nav?.[0] && <StoryblokServerComponent blok={nav[0]} />}
    </header>
  )
}

import type { CardsStoryblok } from "../../../types/storyblok-components"
import { StoryblokServerComponent } from "../../utils/StoryblokServerComponent"
// Only import CSS when not in JSR/Deno environment
if (typeof window !== "undefined") {
  await import("./Cards.css")
}

interface CardsProps {
  blok: CardsStoryblok
}

export function Cards({ blok }: CardsProps): unknown {
  return (
    <div className="cards-grid">
      {blok.cards?.map((nestedBlok) => (
        <StoryblokServerComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </div>
  )
}

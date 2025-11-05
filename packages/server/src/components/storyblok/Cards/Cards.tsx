import type { CardsStoryblok } from "../../../types/storyblok-components"
import { StoryblokServerComponent } from "../../utils/StoryblokServerComponent"
import "./Cards.css"

interface CardsProps {
  blok: CardsStoryblok
}

export function Cards({ blok }: CardsProps) {
  return (
    <div className="cards-grid">
      {blok.cards?.map((nestedBlok) => (
        <StoryblokServerComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </div>
  )
}

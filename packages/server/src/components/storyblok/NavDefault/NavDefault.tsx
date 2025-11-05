import { useId } from "react"
import type { NavDefaultStoryblok } from "../../../types/storyblok-components"
import { ButtonToggleMenu } from "../../"
import { StoryblokServerComponent } from "../../utils/StoryblokServerComponent"
import "./NavDefault.css"

interface NavDefaultProps {
  blok: NavDefaultStoryblok
}

export function NavDefault({ blok }: NavDefaultProps) {
  const navId = useId()

  return (
    <>
      <ButtonToggleMenu navId={navId} />
      <nav className="nav" id={navId} aria-hidden="true" hidden>
        {blok.nav_items?.map((nestedBlok) => (
          <StoryblokServerComponent blok={nestedBlok} key={nestedBlok._uid} />
        ))}
      </nav>
    </>
  )
}

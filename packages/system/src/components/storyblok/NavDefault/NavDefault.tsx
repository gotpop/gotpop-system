import { useId } from "react"
import type {
  NavDefaultStoryblok,
  NavItemDefaultStoryblok,
} from "../../../types/storyblok-components"
import { ButtonToggleMenu, NavItemDefault } from "../../"
import "./NavDefault.css"

interface NavDefaultProps {
  blok: NavDefaultStoryblok
}

export function NavDefault({ blok }: NavDefaultProps): React.JSX.Element {
  const navId = useId()

  return (
    <>
      <ButtonToggleMenu navId={navId} />
      <nav className="nav" id={navId} aria-hidden="true" hidden>
        {blok.nav_items?.map((nestedBlok) => (
          <NavItemDefault
            blok={nestedBlok as NavItemDefaultStoryblok}
            key={nestedBlok._uid}
          />
        ))}
      </nav>
    </>
  )
}

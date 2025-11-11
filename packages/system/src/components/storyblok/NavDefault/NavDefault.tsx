import { useId } from "react"
import type {
  ConfigStoryblok,
  NavDefaultStoryblok,
  NavItemDefaultStoryblok,
} from "../../../types/storyblok-components"
import { ButtonToggleMenu } from "../../"
import { NavItemDefault } from "../NavItemDefault"
import "./NavDefault.css"

interface NavDefaultProps {
  blok: NavDefaultStoryblok
  config?: ConfigStoryblok | null
}

export function NavDefault({
  blok,
  config,
}: NavDefaultProps): React.JSX.Element {
  const navId = useId()

  console.log("NavDefault config:", config)

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

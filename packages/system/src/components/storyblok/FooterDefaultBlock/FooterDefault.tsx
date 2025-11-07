import type {
  LogoDefaultStoryblok,
  NavItemDefaultStoryblok,
} from "../../../types/storyblok-components"
import { StoryblokServerComponent } from "../../"
import { Typography } from "../Typography"
import "./FooterDefault.css"

export interface FooterData {
  logo: LogoDefaultStoryblok | null
  nav: NavItemDefaultStoryblok[]
  copyright: string
}

interface FooterDefaultProps {
  data: FooterData
}

export function FooterDefault({ data }: FooterDefaultProps): React.JSX.Element {
  const { logo, nav, copyright } = data
  const hasNav = nav.length > 0
  const hasLogo = logo !== null

  return (
    <footer className="footer">
      <div className="footer-content">
        {hasLogo && <StoryblokServerComponent blok={logo} />}
        {hasNav && (
          <nav className="footer-nav">
            {nav.map((navItem) => (
              <StoryblokServerComponent key={navItem._huid} blok={navItem} />
            ))}
          </nav>
        )}
      </div>

      <Typography
        className="copyright"
        tag="small"
        variant="text-xs"
        shade="dimmed"
      >
        {copyright}
      </Typography>
    </footer>
  )
}

import type {
  LinkListStoryblok,
  LogoDefaultStoryblok,
} from "../../../types/storyblok-components"
import { LinkList } from "../LinkList/LinkList"
import { LogoDefault } from "../LogoDefault/LogoDefault"
import { Typography } from "../Typography"
import "./FooterDefault.css"

export interface FooterData {
  logo: LogoDefaultStoryblok | null
  nav: LinkListStoryblok[]
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
        {hasLogo && <LogoDefault blok={logo} />}
        {hasNav && (
          <nav className="footer-nav">
            {nav.map((linkList) => (
              <LinkList key={linkList._uid} blok={linkList} />
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

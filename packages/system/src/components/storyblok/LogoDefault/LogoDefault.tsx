import type { ReactNode } from "react"
import type { LogoDefaultStoryblok } from "../../../types/storyblok-components"
import { getStoryblokLinkProps } from "../../../utils/storyblok"
import { IconLogoSVG } from "../../icons"
import "./LogoDefault.css"

type ValidTag = "section" | "logo-main"

interface LogoDefaultProps {
  blok: LogoDefaultStoryblok
}

const CustomElement = ({
  children,
  tag,
  className = "",
}: {
  children: ReactNode
  tag: ValidTag
  className?: string
}) => {
  const Tag = tag as ValidTag

  // @ts-expect-error - Custom elements not recognized by TypeScript
  return <Tag className={className}>{children}</Tag>
}

export function LogoDefault({
  blok: { link },
}: LogoDefaultProps): React.JSX.Element {
  const linkProps = getStoryblokLinkProps(link)

  return (
    <CustomElement tag="logo-main" className="logo-main">
      <a
        className="link-logo"
        href={linkProps.href}
        rel={linkProps.rel}
        target={linkProps.target}
      >
        <IconLogoSVG />
        <span className="logo-text">GotPop</span>
      </a>
    </CustomElement>
  )
}

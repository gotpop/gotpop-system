import type { LogoDefaultStoryblok } from "../../../types/storyblok-components"
import { getStoryblokLinkProps } from "../../../utils/storyblok"
import { IconLogoSVG } from "../../icons"
// Only import CSS when not in JSR/Deno environment
if (typeof window !== "undefined") {
  await import("./LogoDefault.css")
}

interface LogoDefaultProps {
  blok: LogoDefaultStoryblok
}

export function LogoDefault({ blok: { link } }: LogoDefaultProps): unknown {
  const linkProps = getStoryblokLinkProps(link)

  return (
    <div>
      <a
        className="link-logo"
        href={linkProps.href}
        rel={linkProps.rel}
        target={linkProps.target}
      >
        <IconLogoSVG />
        <span className="logo-text">GotPop</span>
      </a>
    </div>
  )
}

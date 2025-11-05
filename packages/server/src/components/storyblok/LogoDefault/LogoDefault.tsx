import type {
  LogoDefaultStoryblok,
  MultilinkStoryblok,
} from "../../../types/storyblok-components"

interface LogoDefaultProps {
  blok: LogoDefaultStoryblok
}

function getStoryblokLinkProps(link?: MultilinkStoryblok) {
  // Simplified link handling for design system
  if (!link) return { href: "/", target: "_self", rel: undefined }

  if (link.linktype === "url") {
    return {
      href: link.url || "/",
      target: link.target || "_blank",
      rel: "noopener noreferrer",
    }
  }

  return {
    href: link.cached_url || "/",
    target: "_self",
    rel: undefined,
  }
}

export function LogoDefault({ blok: { link } }: LogoDefaultProps) {
  const linkProps = getStoryblokLinkProps(link)

  return (
    <div className="logo-main">
      <a
        className="link-logo"
        href={linkProps.href}
        rel={linkProps.rel}
        target={linkProps.target}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
          textDecoration: "none",
          color: "inherit",
        }}
      >
        {/* Placeholder SVG icon */}
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="10" />
        </svg>
        <span className="logo-text">GotPop</span>
      </a>
    </div>
  )
}

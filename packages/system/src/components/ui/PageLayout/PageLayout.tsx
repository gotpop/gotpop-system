import type { ReactNode } from "react"
import { FooterDefault } from "../../storyblok/FooterDefault/FooterDefault"
import { HeaderDefault } from "../../storyblok/HeaderDefault/HeaderDefault"

// Only import CSS when not in JSR/Deno environment
if (typeof window !== "undefined") {
  await import("./PageLayout.css")
}

interface PageLayoutProps {
  children?: ReactNode
  className?: string
  header?: string
  footer?: string
}

export function PageLayout({
  children,
  header,
  footer,
}: PageLayoutProps): React.JSX.Element {
  return (
    <div className="page-layout">
      <HeaderDefault uuid={header} />
      <main>
        <div className="box-crosshatch">{children}</div>
      </main>
      <FooterDefault uuid={footer} />
    </div>
  )
}

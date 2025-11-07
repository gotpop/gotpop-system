import "server-only"
import type { ReactNode } from "react"
import { FooterDefaultBlock } from "../../storyblok/FooterDefaultBlock/FooterDefaultBlockHOC"
import { HeaderDefault } from "../../storyblok/HeaderDefault/HeaderDefault"
import "./PageLayout.css"
import { GridMaster } from "../GridMaster"

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
    <GridMaster>
      <HeaderDefault uuid={header} />
      <main>
        <div className="box-crosshatch">{children}</div>
      </main>
      <FooterDefaultBlock uuid={footer} />
    </GridMaster>
  )
}

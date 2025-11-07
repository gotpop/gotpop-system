import type { ReactNode } from "react"

type ValidTag =
  | "section"
  | "logo-main"
  | "snippet-block"
  | "baseline-status"
  | "box-grid"
  | "code-block"
  | "link-list"
  | "grid-master"
  | "main-content"

interface CustomElementProps {
  children: ReactNode
  tag: ValidTag
  className?: string
  style?: React.CSSProperties
}

export function CustomElement({
  children,
  tag,
  className = "",
  style = {},
}: CustomElementProps) {
  const Tag = tag as ValidTag

  return (
    // @ts-expect-error - Custom elements not recognized by TypeScript
    <Tag className={className} style={style}>
      {children}
    </Tag>
  )
}

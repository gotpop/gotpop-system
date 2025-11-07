import type { ReactNode } from "react"

type ValidTag =
  | "section"
  | "logo-main"
  | "snippet-block"
  | "baseline-status"
  | "box-grid"
  | "code-block"

interface CustomElementProps {
  children: ReactNode
  tag: ValidTag
  className?: string
}

export function CustomElement({
  children,
  tag,
  className = "",
}: CustomElementProps) {
  const Tag = tag as ValidTag

  // @ts-expect-error - Custom elements not recognized by TypeScript
  return <Tag className={className}>{children}</Tag>
}

import React from "react"

export interface TextProps {
  children: React.ReactNode
  as?: "p" | "span" | "div" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
  size?: "xs" | "sm" | "base" | "lg" | "xl"
  weight?: "normal" | "medium" | "semibold" | "bold"
  color?: "default" | "muted" | "primary"
  className?: string
  style?: React.CSSProperties
}

export function Text({
  children,
  as: Component = "p",
  size = "base",
  weight = "normal",
  color = "default",
  className = "",
  style,
}: TextProps) {
  const sizeClasses = {
    xs: "text-xs",
    sm: "text-sm",
    base: "text-base",
    lg: "text-lg",
    xl: "text-xl",
  }

  const weightClasses = {
    normal: "font-normal",
    medium: "font-medium",
    semibold: "font-semibold",
    bold: "font-bold",
  }

  const colorClasses = {
    default: "text-gray-900",
    muted: "text-gray-600",
    primary: "text-blue-600",
  }

  const classes =
    `${sizeClasses[size]} ${weightClasses[weight]} ${colorClasses[color]} ${className}`.trim()

  return (
    <Component className={classes} style={style}>
      {children}
    </Component>
  )
}

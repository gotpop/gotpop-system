import React from "react"

export interface CardProps {
  children: React.ReactNode
  className?: string
  padding?: "sm" | "md" | "lg"
}

export function Card({ children, className = "", padding = "md" }: CardProps) {
  const baseClasses = "bg-white border border-gray-200 rounded-lg shadow-sm"

  const paddingClasses = {
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
  }

  const classes =
    `${baseClasses} ${paddingClasses[padding]} ${className}`.trim()

  return <div className={classes}>{children}</div>
}

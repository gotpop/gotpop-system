import type { ReactNode } from "react"

// Only import CSS when not in JSR/Deno environment
if (typeof window !== "undefined") {
  await import("./StorybookBackground.css")
}

interface StorybookBackgroundProps {
  children: ReactNode
  variant?: "secondary-700" | "primary" | "dark" | "light"
  className?: string
}

/**
 * Reusable background component for Storybook tests
 * Provides consistent background styling for component testing
 */
export function StorybookBackground({
  children,
  variant = "secondary-700",
  className = "",
}: StorybookBackgroundProps) {
  return (
    <div
      className={`storybook-background storybook-background--${variant} ${className}`}
    >
      {children}
    </div>
  )
}

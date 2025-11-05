"use client"

import { useId } from "react"
import { useClickOutside } from "../../../hooks/useClickOutside"
import { useNavigationToggle } from "./useNavigationToggle"
// Only import CSS when not in JSR/Deno environment
if (typeof window !== "undefined") {
  await import("./ButtonToggleMenu.css")
}

interface ButtonToggleMenuClientProps {
  navId: string
}

export function ButtonToggleMenu({ navId }: ButtonToggleMenuClientProps): unknown {
  const { isExpanded, toggleMenu, closeMenu } = useNavigationToggle(navId)
  const id = useId()

  useClickOutside(navId, isExpanded, closeMenu)

  return (
    <button>
      <button
        aria-controls={navId}
        aria-expanded={isExpanded}
        aria-haspopup="true"
        aria-label="Toggle navigation"
        id={id}
        onClick={toggleMenu}
        type="button"
      >
        <span></span>
        <span hidden>Toggle navigation</span>
      </button>
    </button>
  )
}

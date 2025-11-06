"use client"

import { useId } from "react"
import { useClickOutside } from "../../../hooks/useClickOutside"
import { useNavigationToggle } from "./useNavigationToggle"
import "./ButtonToggleMenu.css"

interface ButtonToggleMenuClientProps {
  navId: string
}

export function ButtonToggleMenu({
  navId,
}: ButtonToggleMenuClientProps): React.JSX.Element {
  const { isExpanded, toggleMenu, closeMenu } = useNavigationToggle(navId)
  const id = useId()

  useClickOutside(navId, isExpanded, closeMenu)

  return (
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
  )
}

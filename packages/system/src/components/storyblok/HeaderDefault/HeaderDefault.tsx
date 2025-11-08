import { LogoDefault, NavDefault } from "@/components"
import type {
  HeaderDefaultStoryblok,
  LogoDefaultStoryblok,
  NavDefaultStoryblok,
} from "@/types/storyblok-components"
import "./HeaderDefault.css"

interface HeaderDefaultProps {
  blok?: HeaderDefaultStoryblok | null
}

export async function HeaderDefault({ blok }: HeaderDefaultProps) {
  const { nav, logo } = blok || {}

  return (
    <header className="header">
      {logo?.[0] && <LogoDefault blok={logo[0] as LogoDefaultStoryblok} />}
      {nav?.[0] && <NavDefault blok={nav[0] as NavDefaultStoryblok} />}
    </header>
  )
}

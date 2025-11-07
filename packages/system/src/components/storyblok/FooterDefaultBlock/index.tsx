import "server-only"
import type { FooterDefaultStoryblok } from "../../../types/storyblok-components"
import { fetchStoryByUuid } from "../../../utils/storyblok-fetch"
import type { FooterData } from "./FooterDefault"
import { FooterDefault } from "./FooterDefault"

interface FooterDefaultProps {
  blok?: FooterDefaultStoryblok | null
  uuid?: string
}

export async function FooterDefaultBlock({
  blok,
  uuid,
}: FooterDefaultProps): Promise<React.JSX.Element> {
  let footerData = blok

  if (uuid && !blok) {
    const story = (await fetchStoryByUuid(uuid)) as {
      content?: FooterDefaultStoryblok
    } | null
    footerData = story?.content
  }

  if (!footerData) {
    return <footer className="footer" />
  }

  const { logo, nav } = footerData
  const copyright = `© GotPop ${new Date().getFullYear()}`

  const viewData: FooterData = {
    logo: (logo?.[0] as FooterData["logo"]) || null,
    nav: (nav as FooterData["nav"]) || [],
    copyright,
  }

  return <FooterDefault data={viewData} />
}

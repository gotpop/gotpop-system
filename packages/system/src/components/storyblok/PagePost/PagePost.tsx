import type {
  FooterDefaultStoryblok,
  HeaderDefaultStoryblok,
  PagePostStoryblok,
} from "../../../types/storyblok-components"
import { CustomElement } from "../../ui/CustomElement"
import { PageLayout } from "../PageLayout/PageLayout"
import { PostHeader } from "../PostHeader"

interface PagePostProps {
  header: HeaderDefaultStoryblok
  footer: FooterDefaultStoryblok
  blok: PagePostStoryblok
  blocks: React.ReactNode
}

export function PagePost({ header, footer, blok, blocks }: PagePostProps) {
  return (
    <PageLayout header={header} footer={footer}>
      <PostHeader
        heading={blok.Heading}
        publishedDate={blok.published_date}
        style={{ viewTransitionName: blok.view_transition_name }}
      />
      <CustomElement tag="main-content">{blocks}</CustomElement>
    </PageLayout>
  )
}

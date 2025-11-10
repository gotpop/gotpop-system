import type {
  FooterDefaultStoryblok,
  HeaderDefaultStoryblok,
  PageDefaultStoryblok,
} from "../../../types/storyblok-components"
import { PageLayout } from "../PageLayout/PageLayout"

interface PageDefaultProps {
  header: HeaderDefaultStoryblok
  footer: FooterDefaultStoryblok
  blok: PageDefaultStoryblok
  blocks: React.ReactNode
}

export function PageDefault({ header, footer, blocks }: PageDefaultProps) {
  return (
    <PageLayout header={header} footer={footer}>
      {blocks}
    </PageLayout>
  )
}

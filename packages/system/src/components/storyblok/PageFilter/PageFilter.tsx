import type {
  FooterDefaultStoryblok,
  HeaderDefaultStoryblok,
  PageFilterStoryblok,
} from "../../../types/storyblok-components"
import { PageLayout } from "../PageLayout/PageLayout"

interface PageFilterViewProps {
  header: HeaderDefaultStoryblok
  footer: FooterDefaultStoryblok
  blok: PageFilterStoryblok
  blocks: React.ReactNode
}

export function PageFilter({ header, footer, blocks }: PageFilterViewProps) {
  return (
    <PageLayout header={header} footer={footer}>
      {blocks}
    </PageLayout>
  )
}

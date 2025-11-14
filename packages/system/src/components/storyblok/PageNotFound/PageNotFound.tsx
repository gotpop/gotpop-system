import type { NotFoundStoryblok } from "../../../types/storyblok-components"
import { PageLayout } from "../PageLayout/PageLayout"
import "./PageNotFound.css"

interface PageNotFoundProps {
  header: React.ReactNode
  footer: React.ReactNode
  blok: NotFoundStoryblok
  blocks: React.ReactNode
}

export function PageNotFound({
  header,
  footer,
  blok,
  blocks,
}: PageNotFoundProps) {
  return (
    <PageLayout header={header} footer={footer}>
      <div className="page-not-found">
        <div className="page-not-found__content">
          {blok.title && (
            <h1 className="page-not-found__title">{blok.title}</h1>
          )}
          {blocks}
        </div>
      </div>
    </PageLayout>
  )
}

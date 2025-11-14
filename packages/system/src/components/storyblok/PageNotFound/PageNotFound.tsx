import Link from "next/link"
import type { NotFoundStoryblok } from "../../../types/storyblok-components"
import { PageLayout } from "../PageLayout/PageLayout"
import "./PageNotFound.css"

interface PageNotFoundProps {
  header: React.ReactNode
  footer: React.ReactNode
  blok: NotFoundStoryblok
  blocks: React.ReactNode
  availableStories?: string[]
}

export function PageNotFound({
  header,
  footer,
  blok,
  blocks,
  availableStories,
}: PageNotFoundProps) {
  return (
    <PageLayout header={header} footer={footer}>
      <div className="page-not-found">
        <div className="page-not-found__content">
          {blok.title && (
            <h1 className="page-not-found__title">{blok.title}</h1>
          )}
          {blocks}

          {availableStories && availableStories.length > 0 && (
            <div style={{ marginTop: "3rem" }}>
              <h2>Available Pages:</h2>
              <ul>
                {availableStories.map((slug) => (
                  <li key={slug}>
                    <Link href={`/${slug}`}>{slug}</Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </PageLayout>
  )
}

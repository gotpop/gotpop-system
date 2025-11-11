import { Suspense } from "react"
import type {
  CardsStoryblok,
  PostProps,
  TagDatasourceEntry,
} from "../../../types"
import { CardsFilterClient } from "../../index"
import "./Cards.css"

interface CardsProps {
  blok: CardsStoryblok
  blocks?: React.ReactNode
  posts: PostProps[]
  availableTags: TagDatasourceEntry[]
}

export async function Cards({
  blok,
  blocks,
  posts,
  availableTags,
}: CardsProps) {
  const { use_filters: useClientSideFilters } = blok

  return useClientSideFilters ? (
    <Suspense fallback={<div>Loading posts...</div>}>
      <CardsFilterClient posts={posts} availableTags={availableTags} />
    </Suspense>
  ) : (
    <div className="grid-cards">{blocks}</div>
  )
}

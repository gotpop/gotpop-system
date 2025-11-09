import { Suspense } from "react"
import type {
  CardsStoryblok,
  PostProps,
  TagDatasourceEntry,
} from "../../../types"
import { Card, CardsFilterClient } from "../../index"
import "./Cards.css"

interface CardsProps {
  blok: CardsStoryblok
  fetchPosts: () => Promise<PostProps[]>
  fetchTags: () => Promise<TagDatasourceEntry[]>
}

export async function Cards({ blok, fetchPosts, fetchTags }: CardsProps) {
  const { use_filters: useClientSideFilters } = blok

  const [posts, availableTags] = await Promise.all([fetchPosts(), fetchTags()])

  return useClientSideFilters ? (
    <Suspense fallback={<div>Loading posts...</div>}>
      <CardsFilterClient posts={posts} availableTags={availableTags} />
    </Suspense>
  ) : (
    <div className="grid-cards">
      {posts.map((post) => (
        <Card key={post.uuid} post={post} />
      ))}
    </div>
  )
}

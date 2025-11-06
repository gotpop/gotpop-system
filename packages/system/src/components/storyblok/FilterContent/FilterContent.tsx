import { Suspense } from "react"
import { getAllPostsWithTags, getTagsFromDatasource } from "../../../utils/tags"
import ClientSidePostsApp from "./ClientSidePostsApp"

import("./FilterContent.css")

export async function FilterContent(): Promise<React.JSX.Element> {
  const [posts, availableTags] = await Promise.all([
    getAllPostsWithTags(),
    getTagsFromDatasource(),
  ])

  return (
    <Suspense fallback={<div>Loading posts...</div>}>
      <ClientSidePostsApp posts={posts} availableTags={availableTags} />
    </Suspense>
  )
}

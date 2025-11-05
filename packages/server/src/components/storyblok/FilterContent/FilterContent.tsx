import { Suspense } from "react"
// Only import CSS when not in JSR/Deno environment
if (typeof window !== "undefined") {
  await import("./FilterContent.css")
}
import { getAllPostsWithTags, getTagsFromDatasource } from "../../../utils/tags"
import ClientSidePostsApp from "./ClientSidePostsApp"

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

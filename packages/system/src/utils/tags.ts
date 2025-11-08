import { getStoryblokApi } from "../lib/storyblok"

export interface TagDatasourceEntry {
  name: string
  value: string
  id: number
}

export interface PostStory {
  uuid: string
  name: string
  full_slug: string
  published_at: string
  content: {
    tags?: string[]
    component: string
    Heading?: string
    description?: string
    published_date?: string
    [key: string]: unknown
  }
}

/**
 * Removes duplicate tags based on value (case-insensitive) and keeps the first occurrence
 */
function deduplicateTags(tags: TagDatasourceEntry[]): TagDatasourceEntry[] {
  const seen = new Set<string>()
  return tags.filter((tag) => {
    const normalizedValue = tag.value.toLowerCase()
    if (seen.has(normalizedValue)) {
      return false
    }
    seen.add(normalizedValue)
    return true
  })
}

/**
 * Hardcoded tags that are not included in the API call but should be available for filtering
 */
const HARDCODED_TAGS: TagDatasourceEntry[] = [
  // Add hardcoded tags here as needed
  // {
  //   id: 999001,
  //   name: "example-tag",
  //   value: "example-tag",
  // },
]

/**
 * Fetches all tags from the Storyblok tags datasource
 * Falls back to extracting tags from posts if datasource is not available
 * Includes hardcoded tags that are not in the API
 */
export async function getTagsFromDatasource(): Promise<TagDatasourceEntry[]> {
  try {
    const TAGS_DATASOURCE_ID = process.env.STORYBLOK_TAGS_DATASOURCE_ID
    const PUBLIC_TOKEN = process.env.STORYBLOK_ACCESS_TOKEN

    if (!PUBLIC_TOKEN) {
      const postsTagsStory = await getTagsFromPosts()
      return [...HARDCODED_TAGS, ...postsTagsStory]
    }

    if (!TAGS_DATASOURCE_ID) {
      const postsTagsStory = await getTagsFromPosts()
      return [...HARDCODED_TAGS, ...postsTagsStory]
    }

    const response = await fetch(
      `https://api.storyblok.com/v2/cdn/datasource_entries?datasource=${TAGS_DATASOURCE_ID}&token=${PUBLIC_TOKEN}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )

    if (!response.ok) {
      const postsTagsStory = await getTagsFromPosts()
      return [...HARDCODED_TAGS, ...postsTagsStory]
    }

    const data = await response.json()
    const datasourceTags = data.datasource_entries || []

    // If datasource is empty, fall back to posts
    if (datasourceTags.length === 0) {
      const postsTagsStory = await getTagsFromPosts()
      return [...HARDCODED_TAGS, ...postsTagsStory]
    }

    // Merge hardcoded tags with datasource tags, avoiding duplicates
    const allTags = [...HARDCODED_TAGS, ...datasourceTags]

    return deduplicateTags(allTags)
  } catch {
    const postsTagsStory = await getTagsFromPosts()
    return [...HARDCODED_TAGS, ...postsTagsStory]
  }
}

/**
 * Get all unique tags from published posts
 * This is a fallback method when datasource is not available
 * Also includes hardcoded tags
 */
async function getTagsFromPosts(): Promise<TagDatasourceEntry[]> {
  try {
    const storyblokApi = getStoryblokApi()

    const { data } = await storyblokApi.get("cdn/stories", {
      version: "draft",
      starts_with: "blog/",
      filter_query: {
        component: {
          in: "page_post",
        },
      },
    })

    const allTags = new Set<string>()

    data.stories.forEach((story: PostStory) => {
      if (story.content?.tags && Array.isArray(story.content.tags)) {
        story.content.tags.forEach((tag: string) => {
          if (typeof tag === "string" && tag.trim()) {
            allTags.add(tag.trim())
          }
        })
      }
    })

    // Convert to TagDatasourceEntry format, starting with higher IDs to avoid conflicts
    const postsOnlyTags = Array.from(allTags).map((tag, index) => ({
      id: index + 1000, // Start with higher IDs to avoid conflicts with hardcoded tags
      name: tag,
      value: tag,
    }))

    // Merge hardcoded tags with posts tags, avoiding duplicates
    const allTagsArray = [...HARDCODED_TAGS, ...postsOnlyTags]

    return deduplicateTags(allTagsArray)
  } catch {
    return deduplicateTags(HARDCODED_TAGS) // Return at least the hardcoded tags if everything fails
  }
}

import "server-only";
interface StoryblokStory {
    id: number;
    uuid: string;
    name: string;
    slug: string;
    full_slug: string;
    content: Record<string, unknown>;
    created_at: string;
    published_at: string;
    first_published_at: string;
    tag_list: string[];
    lang: string;
    path: string | null;
    [key: string]: unknown;
}
/**
 * Fetches a story by UUID from Storyblok
 * @param uuid - The UUID of the story to fetch
 * @param version - The version to fetch ("draft" or "published")
 * @returns The story data or null if not found
 */
export declare function fetchStoryByUuid(uuid: string, version?: "draft" | "published"): Promise<StoryblokStory | null>;
/**
 * Fetches multiple stories by their UUIDs from Storyblok
 * @param uuids - Array of UUIDs to fetch
 * @param version - The version to fetch ("draft" or "published")
 * @returns Array of story data
 */
export declare function fetchStoriesByUuids(uuids: string[], version?: "draft" | "published"): Promise<StoryblokStory[]>;
export type { StoryblokStory };
//# sourceMappingURL=storyblok-fetch.d.ts.map
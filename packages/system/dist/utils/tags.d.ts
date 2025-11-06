export interface TagDatasourceEntry {
    name: string;
    value: string;
    id: number;
}
export interface PostStory {
    uuid: string;
    name: string;
    full_slug: string;
    published_at: string;
    content: {
        tags?: string[];
        component: string;
        Heading?: string;
        description?: string;
        published_date?: string;
        [key: string]: unknown;
    };
}
/**
 * Get the list of hardcoded tags
 */
export declare function getHardcodedTags(): TagDatasourceEntry[];
/**
 * Fetches all tags from the Storyblok tags datasource
 * Falls back to extracting tags from posts if datasource is not available
 * Includes hardcoded tags that are not in the API
 */
export declare function getTagsFromDatasource(): Promise<TagDatasourceEntry[]>;
/**
 * Checks if a tag slug is valid (exists in the datasource or is a hardcoded tag)
 */
export declare function isValidTag(tagSlug: string): Promise<boolean>;
/**
 * Converts tag name to URL-safe slug
 * e.g., "JavaScript" -> "javascript", "CSS & HTML" -> "css-html"
 */
export declare function normalizeTagSlug(tagName: string): string;
/**
 * Converts URL slug back to tag name by finding exact match in datasource
 */
export declare function getTagFromSlug(tagSlug: string): Promise<string | null>;
/**
 * Fetches all posts that contain a specific tag with sorting options
 */
export declare function getPostsByTag(tagName: string, sortBy?: "date-desc" | "date-asc" | "title-asc" | "title-desc"): Promise<PostStory[]>;
/**
 * Gets all posts from the blog with their tags
 * Only returns actual blog posts (page_post component) that have tags
 */
export declare function getAllPostsWithTags(): Promise<PostStory[]>;
/**
 * Gets all unique tags used across all posts
 */
export declare function getAllTagsFromPosts(): Promise<string[]>;
//# sourceMappingURL=tags.d.ts.map
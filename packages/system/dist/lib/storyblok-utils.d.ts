/**
 * Normalizes a slug path to work with Storyblok's blog folder structure
 * Handles cases from both direct navigation and Storyblok Visual Editor
 */
export declare function normalizeStoryblokPath(slug?: string[]): string;
/**
 * Checks if a story should be included in static generation
 */
export declare function shouldIncludeStory(fullSlug: string): boolean;
/**
 * Converts a Storyblok full_slug to a clean URL path
 * Removes the 'blog/' prefix and ensures it starts with '/'
 */
export declare function getStoryPath(fullSlug: string): string;
/**
 * Determines the type of page based on the slug array
 */
export declare function determinePageType(slug?: string[]): "home" | "posts-index" | "tag-page" | "individual-post" | "other";
/**
 * Extracts tag slug from URL segments
 * e.g., ["posts", "javascript"] -> "javascript"
 */
export declare function extractTagSlug(slug?: string[]): string | null;
//# sourceMappingURL=storyblok-utils.d.ts.map
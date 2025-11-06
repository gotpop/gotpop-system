import "server-only";
import { getStoryblokApi } from "../lib/storyblok";
export async function getAvailableStoriesForError() {
    try {
        const storyblokApi = getStoryblokApi();
        const { data } = await storyblokApi.get("cdn/stories", {
            version: "draft",
            starts_with: "blog/",
        });
        return data.stories.map((s) => s.full_slug);
    }
    catch {
        // Ignore if we can't fetch stories
        return [];
    }
}
export function getErrorMessage(error) {
    return error instanceof Error ? error.message : "Unknown error";
}
//# sourceMappingURL=error-handling.js.map
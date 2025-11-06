import type { PostStory } from "../../../utils/tags";
export declare function usePostsFilter(posts: PostStory[]): {
    currentTag: string;
    setCurrentTag: import("react").Dispatch<import("react").SetStateAction<string>>;
    currentSort: string;
    setCurrentSort: import("react").Dispatch<import("react").SetStateAction<string>>;
    filteredAndSortedPosts: PostStory[];
};
//# sourceMappingURL=use-posts-filter.d.ts.map
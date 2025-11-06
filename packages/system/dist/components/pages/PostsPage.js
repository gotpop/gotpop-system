import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { getAllPostsWithTags } from "../../utils/tags";
import PostCard from "../storyblok/FilterContent/ClientSidePostCard";
export async function PostsPage({ currentTag = "all", }) {
    const posts = await getAllPostsWithTags();
    const filteredPosts = currentTag === "all"
        ? posts
        : posts.filter((post) => {
            const tags = post.content?.tags || [];
            return tags.includes(currentTag);
        });
    const title = currentTag === "all" ? "All Posts" : `Posts tagged with "${currentTag}"`;
    const description = currentTag === "all"
        ? `Browse our ${posts.length} posts`
        : `Browse all posts tagged with "${currentTag}"`;
    return (_jsxs(_Fragment, { children: [_jsxs("div", { className: "filter-header", children: [_jsx("h1", { children: title }), _jsx("p", { children: description })] }), _jsx("div", { className: "filter-controls", children: _jsx("div", { className: "filter-tags", children: _jsx("span", { className: "filter-label", children: currentTag === "all" ? "All Posts" : `Filtered by: ${currentTag}` }) }) }), _jsxs("div", { className: "posts-grid", children: [filteredPosts.map((post) => (_jsx(PostCard, { post: post }, post.uuid))), filteredPosts.length === 0 && (_jsx("div", { className: "filter-empty", children: _jsxs("p", { children: ["No posts found", currentTag !== "all" && ` with the tag "${currentTag}"`, "."] }) }))] })] }));
}
//# sourceMappingURL=PostsPage.js.map
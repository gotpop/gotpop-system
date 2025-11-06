"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { startTransition, ViewTransition } from "react";
import PostCard from "./ClientSidePostCard";
import ClientSidePostsFilter from "./ClientSidePostsFilter";
import ClientSidePostsSorter from "./ClientSidePostsSorter";
import { usePostsFilter } from "./use-posts-filter";
export default function ClientSidePostsApp({ posts, availableTags, }) {
    const { currentTag, setCurrentTag, currentSort, setCurrentSort, filteredAndSortedPosts, } = usePostsFilter(posts);
    // Wrap filter/sort changes in startTransition for ViewTransition
    const handleTagChange = (tag) => {
        startTransition(() => {
            setCurrentTag(tag);
        });
    };
    const handleSortChange = (sort) => {
        startTransition(() => {
            setCurrentSort(sort);
        });
    };
    const output = filteredAndSortedPosts.length > 0 &&
        filteredAndSortedPosts.map((post) => (_jsx(PostCard, { post: post }, post.uuid)));
    return (_jsxs("div", { className: "filters-with-output", children: [_jsxs("div", { "auto-columns": true, children: [_jsx(ClientSidePostsFilter, { availableTags: availableTags, onTagChange: handleTagChange, currentTag: currentTag }), _jsx(ClientSidePostsSorter, { onSortChange: handleSortChange, currentSort: currentSort })] }), _jsx(ViewTransition, { update: "reorder-list", children: _jsx("output", { className: "posts-grid", "aria-live": "polite", children: output }) })] }));
}
//# sourceMappingURL=ClientSidePostsApp.js.map
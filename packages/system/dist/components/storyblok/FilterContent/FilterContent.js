import { jsx as _jsx } from "react/jsx-runtime";
import { Suspense } from "react";
// Only import CSS when not in JSR/Deno environment
if (typeof window !== "undefined") {
    await import("./FilterContent.css");
}
import { getAllPostsWithTags, getTagsFromDatasource } from "../../../utils/tags";
import ClientSidePostsApp from "./ClientSidePostsApp";
export async function FilterContent() {
    const [posts, availableTags] = await Promise.all([
        getAllPostsWithTags(),
        getTagsFromDatasource(),
    ]);
    return (_jsx(Suspense, { fallback: _jsx("div", { children: "Loading posts..." }), children: _jsx(ClientSidePostsApp, { posts: posts, availableTags: availableTags }) }));
}
//# sourceMappingURL=FilterContent.js.map
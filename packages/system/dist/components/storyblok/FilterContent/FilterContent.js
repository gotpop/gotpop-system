import { jsx as _jsx } from "react/jsx-runtime";
import { Suspense } from "react";
import { getAllPostsWithTags, getTagsFromDatasource } from "../../../utils/tags";
import ClientSidePostsApp from "./ClientSidePostsApp";
import "./FilterContent.css";
export async function FilterContent() {
    const [posts, availableTags] = await Promise.all([
        getAllPostsWithTags(),
        getTagsFromDatasource(),
    ]);
    return (_jsx(Suspense, { fallback: _jsx("div", { children: "Loading posts..." }), children: _jsx(ClientSidePostsApp, { posts: posts, availableTags: availableTags }) }));
}
//# sourceMappingURL=FilterContent.js.map
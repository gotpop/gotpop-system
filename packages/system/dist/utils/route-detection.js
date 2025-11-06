export function isPostsPage(fullPath, slug) {
    return fullPath === "blog/posts" || slug?.join("/") === "posts";
}
export function isTagPage(slug) {
    if (slug && slug.length === 2 && slug[0] === "posts") {
        return { isTagPage: true, tagSlug: slug[1] };
    }
    return { isTagPage: false };
}
//# sourceMappingURL=route-detection.js.map
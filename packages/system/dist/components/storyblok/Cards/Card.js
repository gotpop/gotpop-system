import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// import Link from "next/link"
import { getStoryPath } from "../../../lib/storyblok-utils";
import { fetchStoryByUuid } from "../../../utils/storyblok-fetch";
import { Typography } from "../Typography";
export async function Card({ blok, }) {
    const { cards } = blok;
    const card = cards?.[0];
    if (!card) {
        return null;
    }
    const story = await fetchStoryByUuid(card);
    if (!story) {
        return null;
    }
    const { full_slug, content, name } = story;
    const linkPath = getStoryPath(full_slug);
    const title = content?.Heading || name || "";
    const description = content?.description || "";
    return (_jsxs("div", { style: {
            viewTransitionName: content?.view_transition_name,
        }, children: [_jsx(Typography, { tag: "h3", variant: "text-xl", shade: "dark", children: title }), _jsx(Typography, { tag: "p", variant: "text-base", shade: "charcoal", children: description }), _jsx("a", { href: linkPath, className: "link-simple", children: "Read more" })] }));
}
//# sourceMappingURL=Card.js.map
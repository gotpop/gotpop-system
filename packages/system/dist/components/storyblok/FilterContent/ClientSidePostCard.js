import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { getStoryPath } from "../../../lib/storyblok-utils";
import { formatDate } from "../../../utils/date-formatter";
import { Typography } from "../Typography";
import "./ClientSidePostCard.css";
export default function PostCard({ post }) {
    const { full_slug, name, published_at, content } = post;
    const { Heading, description, published_date, tags = [] } = content || {};
    const dateToUse = published_date || published_at;
    const formattedDate = formatDate(dateToUse);
    const linkPath = getStoryPath(full_slug);
    const title = Heading || name || "Untitled";
    const tagList = tags.map((tag) => (_jsx("span", { className: "tag", children: tag }, tag)));
    return (_jsxs("div", { style: {
            viewTransitionName: `post-${post.uuid}`,
        }, children: [_jsxs("div", { className: "meta", children: [_jsx(Typography, { tag: "time", variant: "text-sm", shade: "charcoal", dateTime: formattedDate, className: "margin-none", children: formattedDate }), _jsx("div", { className: "tags", children: tagList })] }), _jsx(Typography, { tag: "h3", variant: "text-xl", shade: "dark", children: _jsx("a", { href: linkPath, className: "title-link", children: title }) }), _jsx(Typography, { tag: "p", variant: "text-base", shade: "charcoal", children: description }), _jsx("a", { href: linkPath, className: "link-simple", children: "Read more" })] }));
}
//# sourceMappingURL=ClientSidePostCard.js.map
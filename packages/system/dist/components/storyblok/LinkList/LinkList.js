import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Typography } from "../Typography";
import "./LinkList.css";
export function LinkList({ blok }) {
    return (_jsxs("div", { children: [_jsx("div", { className: "link-list-heading", children: _jsx(Typography, { tag: "h4", variant: "text-xl", shade: "light", children: blok.heading }) }), blok.links && blok.links.length > 0 && (_jsx("ul", { className: "link-list-items", children: blok.links.map((linkItem) => (_jsx("li", { children: _jsx("a", { href: linkItem.link.url, className: "link-list-item", children: linkItem.link_text }) }, linkItem._uid))) }))] }));
}
//# sourceMappingURL=LinkList.js.map
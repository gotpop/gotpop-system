"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useId } from "react";
// Only import CSS when not in JSR/Deno environment
if (typeof window !== "undefined") {
    await import("./ClientSidePostsFilter.css");
}
export default function ClientSidePostsFilter({ availableTags, onTagChange, currentTag, }) {
    const tagSelectId = useId();
    return (_jsxs("div", { className: "select-wrap", children: [_jsx("label", { htmlFor: tagSelectId, className: "select-label", children: "Filter:" }), _jsxs("select", { id: tagSelectId, value: currentTag, onChange: (e) => onTagChange(e.target.value), className: "select", children: [_jsx("option", { value: "all", children: "All Posts" }), availableTags.map((tag) => (_jsx("option", { value: tag.value, children: tag.name }, tag.value)))] })] }));
}
//# sourceMappingURL=ClientSidePostsFilter.js.map
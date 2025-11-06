"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useId } from "react";
const SORT_OPTIONS = {
    published_desc: "Newest First",
    published_asc: "Oldest First",
    name_asc: "Title A-Z",
    name_desc: "Title Z-A",
};
export default function ClientSidePostsSorter({ onSortChange, currentSort, }) {
    const sortSelectId = useId();
    return (_jsxs("div", { className: "select-wrap", children: [_jsx("label", { htmlFor: sortSelectId, className: "select-label", children: "Sort:" }), _jsx("select", { id: sortSelectId, value: currentSort, onChange: (e) => onSortChange(e.target.value), className: "select", children: Object.entries(SORT_OPTIONS).map(([value, label]) => (_jsx("option", { value: value, children: label }, value))) })] }));
}
//# sourceMappingURL=ClientSidePostsSorter.js.map
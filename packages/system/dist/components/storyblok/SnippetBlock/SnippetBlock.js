import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { SnippetTextAlignA } from "../../snippets/SnippetTextAlignA/SnippetTextAlignA";
import { SnippetTextAlignB } from "../../snippets/SnippetTextAlignB/SnippetTextAlignB";
// Only import CSS when not in JSR/Deno environment
if (typeof window !== "undefined") {
    await import("./SnippetBlock.css");
}
function renderSnippet(snippetType) {
    switch (snippetType) {
        case "text-align-a":
            return _jsx(SnippetTextAlignA, {});
        case "text-align-b":
            return _jsx(SnippetTextAlignB, {});
        default:
            return (_jsx("div", { className: "snippet-placeholder", children: _jsxs("p", { children: ["Unknown snippet type: ", snippetType || "none"] }) }));
    }
}
export function SnippetBlock({ blok }) {
    const { snippet } = blok;
    return _jsx("div", { children: renderSnippet(snippet) });
}
//# sourceMappingURL=SnippetBlock.js.map
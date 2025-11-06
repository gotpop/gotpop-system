import { jsx as _jsx } from "react/jsx-runtime";
import { RichText } from "../../ui/RichText";
// Only import CSS when not in JSR/Deno environment
if (typeof window !== "undefined") {
    await import("./RichTextCodeBlock.css");
}
export function RichTextCodeBlock({ blok, }) {
    const { content } = blok;
    return _jsx("div", { children: content && _jsx(RichText, { content: content }) });
}
//# sourceMappingURL=RichTextCodeBlock.js.map
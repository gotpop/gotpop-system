import { jsx as _jsx } from "react/jsx-runtime";
import { RichText } from "../../ui/RichText";
export function RichTextBlock({ blok }) {
    const { content } = blok;
    return _jsx("div", { children: content && _jsx(RichText, { content: content }) });
}
//# sourceMappingURL=RichTextBlock.js.map
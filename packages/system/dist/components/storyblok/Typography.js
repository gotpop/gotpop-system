import { jsx as _jsx } from "react/jsx-runtime";
import { cn } from "../../utils/cn";
export function Typography({ children, tag, shade, variant, weight, style, className = "", id = undefined, dateTime = undefined, }) {
    const validTags = [
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "p",
        "small",
        "time",
    ];
    const elementTag = validTags.includes(tag.toLowerCase())
        ? tag.toLowerCase()
        : "p";
    const Element = elementTag;
    const shadeClass = shade || "light";
    const classNames = cn("typography", shadeClass, variant, weight, style, className);
    return (_jsx(Element, { dateTime: dateTime, className: classNames, id: id, children: children }));
}
//# sourceMappingURL=Typography.js.map
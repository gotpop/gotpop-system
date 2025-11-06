import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useId } from "react";
import { formatDate } from "../../utils/date-formatter";
import { Typography } from "./Typography";
export function PostHeader({ heading, publishedDate, style, }) {
    const id = useId();
    if (!publishedDate || !heading)
        return null;
    const formattedDate = formatDate(publishedDate);
    return (_jsxs("section", { "aria-labelledby": id, style: style, children: [_jsx(Typography, { tag: "h1", variant: "text-xl", shade: "dark", id: id, children: heading }), _jsx(Typography, { tag: "time", variant: "text-sm", shade: "charcoal", dateTime: publishedDate, children: formattedDate })] }));
}
//# sourceMappingURL=PostHeader.js.map
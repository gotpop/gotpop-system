import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useId } from "react";
import { RichText } from "../ui/RichText";
import { Typography } from "./Typography";
export function HeroDefault({ blok }) {
    const { heading, subheading } = blok;
    const id = useId();
    return (_jsxs("section", { "aria-labelledby": id, children: [_jsx(Typography, { className: "hero-home-heading", id: id, shade: "dark", tag: "h1", variant: "hero", children: heading }), subheading && _jsx(RichText, { content: subheading })] }));
}
//# sourceMappingURL=HeroDefault.js.map
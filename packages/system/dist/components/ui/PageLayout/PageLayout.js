import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { FooterDefault } from "../../storyblok/FooterDefault/FooterDefault";
import { HeaderDefault } from "../../storyblok/HeaderDefault/HeaderDefault";
import("./PageLayout.css");
export function PageLayout({ children, header, footer, }) {
    return (_jsxs("div", { className: "page-layout", children: [_jsx(HeaderDefault, { uuid: header }), _jsx("main", { children: _jsx("div", { className: "box-crosshatch", children: children }) }), _jsx(FooterDefault, { uuid: footer })] }));
}
//# sourceMappingURL=PageLayout.js.map
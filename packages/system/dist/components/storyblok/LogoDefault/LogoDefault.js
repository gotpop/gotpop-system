import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { getStoryblokLinkProps } from "../../../utils/storyblok";
import { IconLogoSVG } from "../../icons";
import("./LogoDefault.css");
const CustomElement = ({ children, tag, className = "", }) => {
    const Tag = tag;
    // @ts-expect-error - Custom elements not recognized by TypeScript
    return _jsx(Tag, { className: className, children: children });
};
export function LogoDefault({ blok: { link }, }) {
    const linkProps = getStoryblokLinkProps(link);
    return (_jsx(CustomElement, { tag: "logo-main", className: "logo-main", children: _jsxs("a", { className: "link-logo", href: linkProps.href, rel: linkProps.rel, target: linkProps.target, children: [_jsx(IconLogoSVG, {}), _jsx("span", { className: "logo-text", children: "GotPop" })] }) }));
}
//# sourceMappingURL=LogoDefault.js.map
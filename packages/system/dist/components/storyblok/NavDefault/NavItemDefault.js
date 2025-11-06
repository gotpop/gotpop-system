import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { cn } from "../../../utils/cn";
import { getStoryblokLinkProps } from "../../../utils/storyblok";
import { Icon } from "../../";
export function NavItemDefault({ blok, }) {
    const linkProps = getStoryblokLinkProps(blok.link);
    const { href, target, rel } = linkProps;
    const hasText = Boolean(blok.text);
    const hasIcon = Boolean(blok.icon);
    const hasBoth = hasText && hasIcon;
    const hasTextOnly = hasText && !hasIcon;
    const hasIconOnly = hasIcon && !hasText;
    if (!blok.link || href === "#") {
        return _jsx("span", { className: "nav-item", children: blok.text });
    }
    const classNames = cn("nav-item", hasTextOnly && "has-text", hasIconOnly && "has-icon", hasBoth && "has-text-and-icon");
    const renderContent = () => {
        if (hasBoth) {
            return (_jsxs(_Fragment, { children: [_jsx("span", { children: blok.text }), _jsx(Icon, { name: blok.icon, size: 32 })] }));
        }
        if (hasTextOnly) {
            return blok.text;
        }
        if (hasIconOnly) {
            return _jsx(Icon, { name: blok.icon, size: 32 });
        }
        return null;
    };
    return (_jsx("a", { href: href, target: target, rel: rel, className: classNames, children: renderContent() }));
}
//# sourceMappingURL=NavItemDefault.js.map
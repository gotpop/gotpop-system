import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useId } from "react";
import { ButtonToggleMenu } from "../../";
import { StoryblokServerComponent } from "../../utils/StoryblokServerComponent";
// Only import CSS when not in JSR/Deno environment
if (typeof window !== "undefined") {
    await import("./NavDefault.css");
}
export function NavDefault({ blok }) {
    const navId = useId();
    return (_jsxs(_Fragment, { children: [_jsx(ButtonToggleMenu, { navId: navId }), _jsx("nav", { className: "nav", id: navId, "aria-hidden": "true", hidden: true, children: blok.nav_items?.map((nestedBlok) => (_jsx(StoryblokServerComponent, { blok: nestedBlok }, nestedBlok._uid))) })] }));
}
//# sourceMappingURL=NavDefault.js.map
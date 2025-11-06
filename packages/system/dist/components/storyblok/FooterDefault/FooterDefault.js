import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { fetchStoryByUuid } from "../../../utils/storyblok-fetch";
import { StoryblokServerComponent } from "../../";
import { Typography } from "../Typography";
// Only import CSS when not in JSR/Deno environment
if (typeof window !== "undefined") {
    await import("./FooterDefault.css");
}
export async function FooterDefault({ blok, uuid, }) {
    let footerData = blok;
    if (uuid && !blok) {
        const story = (await fetchStoryByUuid(uuid));
        footerData = story?.content;
    }
    if (!footerData) {
        return _jsx("footer", { className: "footer" });
    }
    const { logo, nav } = footerData;
    const hasNav = nav && nav.length > 0;
    const hasLogo = logo?.[0];
    const copyright = `© GotPop ${new Date().getFullYear()}`;
    return (_jsxs("footer", { className: "footer", children: [_jsxs("div", { className: "footer-content", children: [hasLogo && _jsx(StoryblokServerComponent, { blok: logo[0] }), hasNav && (_jsx("nav", { className: "footer-nav", children: nav.map((navItem) => (_jsx(StoryblokServerComponent, { blok: navItem }, navItem._huid))) }))] }), _jsx(Typography, { className: "copyright", tag: "small", variant: "text-xs", shade: "dimmed", children: copyright })] }));
}
//# sourceMappingURL=FooterDefault.js.map
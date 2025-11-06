import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { fetchStoryByUuid } from "../../../utils/storyblok-fetch";
import { StoryblokServerComponent } from "../../";
import("./HeaderDefault.css");
export async function HeaderDefault({ blok, uuid, }) {
    let headerData = blok;
    if (uuid && !blok) {
        const story = await fetchStoryByUuid(uuid);
        headerData = story?.content;
    }
    if (!headerData) {
        return null;
    }
    const { nav, logo } = headerData;
    return (_jsxs("header", { className: "header", children: [logo?.[0] && _jsx(StoryblokServerComponent, { blok: logo[0] }), nav?.[0] && _jsx(StoryblokServerComponent, { blok: nav[0] })] }));
}
//# sourceMappingURL=HeaderDefault.js.map
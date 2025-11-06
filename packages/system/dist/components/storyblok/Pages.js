import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { PageLayout, StoryblokServerComponent } from "../";
import { PostHeader } from "./PostHeader";
async function BasePage({ Header, Footer, body, children }) {
    const blocks = body?.map((nestedBlok) => (_jsx(StoryblokServerComponent, { blok: nestedBlok }, nestedBlok._uid)));
    return (_jsxs(PageLayout, { header: Header, footer: Footer, children: [children, blocks] }));
}
export async function PageDefault({ blok, }) {
    const { Header, Footer, body } = blok;
    return _jsx(BasePage, { Header: Header, Footer: Footer, body: body });
}
export async function PageFilter({ blok, }) {
    const { Header, Footer, body } = blok;
    return _jsx(BasePage, { Header: Header, Footer: Footer, body: body });
}
export async function PagePost({ blok, }) {
    const { Header, Footer, Heading, published_date, body, view_transition_name, } = blok;
    const blocks = body?.map((nestedBlok) => (_jsx(StoryblokServerComponent, { blok: nestedBlok }, nestedBlok._uid)));
    return (_jsxs(PageLayout, { header: Header, footer: Footer, children: [_jsx(PostHeader, { heading: Heading, publishedDate: published_date, style: { viewTransitionName: view_transition_name } }), _jsx("main", { children: blocks })] }));
}
//# sourceMappingURL=Pages.js.map
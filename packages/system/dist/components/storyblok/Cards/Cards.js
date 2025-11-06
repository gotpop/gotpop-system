import { jsx as _jsx } from "react/jsx-runtime";
import { StoryblokServerComponent } from "../../utils/StoryblokServerComponent";
// Only import CSS when not in JSR/Deno environment
if (typeof window !== "undefined") {
    await import("./Cards.css");
}
export function Cards({ blok }) {
    return (_jsx("div", { className: "cards-grid", children: blok.cards?.map((nestedBlok) => (_jsx(StoryblokServerComponent, { blok: nestedBlok }, nestedBlok._uid))) }));
}
//# sourceMappingURL=Cards.js.map
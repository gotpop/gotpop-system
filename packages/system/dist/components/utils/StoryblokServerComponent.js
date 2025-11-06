import { jsx as _jsx } from "react/jsx-runtime";
import { components } from "../storyblok";
export function StoryblokServerComponent({ blok, }) {
    if (!blok) {
        return null;
    }
    if (typeof blok !== "object" || !blok.component) {
        return null;
    }
    const Component = components[blok.component];
    if (!Component) {
        console.warn(`Component ${blok.component} doesn't exist.`);
        return null;
    }
    // TypeScript can't infer the correct blok type for each component
    // Safe to cast since we're checking the component exists
    return _jsx(Component, { blok: blok });
}
//# sourceMappingURL=StoryblokServerComponent.js.map
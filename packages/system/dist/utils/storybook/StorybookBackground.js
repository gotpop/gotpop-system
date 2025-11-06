import { jsx as _jsx } from "react/jsx-runtime";
// Only import CSS when not in JSR/Deno environment
if (typeof window !== "undefined") {
    await import("./StorybookBackground.css");
}
/**
 * Reusable background component for Storybook tests
 * Provides consistent background styling for component testing
 */
export function StorybookBackground({ children, variant = "secondary-700", className = "", }) {
    return (_jsx("div", { className: `storybook-background storybook-background--${variant} ${className}`, children: children }));
}
//# sourceMappingURL=StorybookBackground.js.map
import type { ReactNode } from "react";
import "./StorybookBackground.css";
interface StorybookBackgroundProps {
    children: ReactNode;
    variant?: "secondary-700" | "primary" | "dark" | "light";
    className?: string;
}
/**
 * Reusable background component for Storybook tests
 * Provides consistent background styling for component testing
 */
export declare function StorybookBackground({ children, variant, className, }: StorybookBackgroundProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=StorybookBackground.d.ts.map
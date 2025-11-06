import type { ReactNode } from "react";
type ValidTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "small" | "time";
type TypographyVariant = "text-xs" | "text-sm" | "text-base" | "text-md" | "text-lg" | "text-xl" | "text-xxl" | "text-2xl" | "text-3xl" | "text-4xl" | "text-5xl" | "text-6xl" | "text-7xl" | "text-8xl" | "text-9xl" | "hero";
type FontWeight = "weight-thin" | "weight-light" | "weight-regular" | "weight-medium" | "weight-semibold" | "weight-bold" | "weight-black";
type FontStyle = "style-normal" | "style-italic";
type TypographyShade = "light" | "dark" | "charcoal" | "dimmed";
interface TypographyProps {
    children: ReactNode;
    tag: ValidTag;
    shade?: TypographyShade;
    variant?: TypographyVariant;
    weight?: FontWeight;
    style?: FontStyle;
    className?: string;
    id?: string;
    dateTime?: string;
}
export declare function Typography({ children, tag, shade, variant, weight, style, className, id, dateTime, }: TypographyProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=Typography.d.ts.map
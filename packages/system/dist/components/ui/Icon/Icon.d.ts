/**
 * Icon registry - single source of truth for available icons.
 * Only icons listed here will be bundled (tree-shaking optimization).
 * Add new icons here and run `yarn sync-icons` to update Storyblok datasource.
 */
declare const ICON_REGISTRY: {
    readonly FaBars: import("react-icons/lib").IconType;
    readonly FaChevronLeft: import("react-icons/lib").IconType;
    readonly FaChevronRight: import("react-icons/lib").IconType;
    readonly FaEnvelope: import("react-icons/lib").IconType;
    readonly FaExternalLinkAlt: import("react-icons/lib").IconType;
    readonly FaHome: import("react-icons/lib").IconType;
    readonly FaLink: import("react-icons/lib").IconType;
    readonly FaPhone: import("react-icons/lib").IconType;
    readonly FaQuestionCircle: import("react-icons/lib").IconType;
    readonly FaSearch: import("react-icons/lib").IconType;
    readonly FaSquareGithub: import("react-icons/lib").IconType;
    readonly FaStar: import("react-icons/lib").IconType;
    readonly FaTimes: import("react-icons/lib").IconType;
    readonly FaUser: import("react-icons/lib").IconType;
    readonly TfiGithub: import("react-icons/lib").IconType;
    readonly MdArticle: import("react-icons/lib").IconType;
};
export declare const AVAILABLE_ICONS: Array<keyof typeof ICON_REGISTRY>;
export type IconName = keyof typeof ICON_REGISTRY;
interface IconProps {
    name: IconName;
    size?: number;
    color?: string;
    className?: string;
}
export declare function Icon({ name, size, color, className, }: IconProps): React.JSX.Element | null;
export {};
//# sourceMappingURL=Icon.d.ts.map
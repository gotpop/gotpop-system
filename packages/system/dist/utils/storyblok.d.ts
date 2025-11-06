import type { MultilinkStoryblok } from "../types/storyblok-components";
export interface StoryblokLinkProps {
    href: string;
    target: string;
    rel?: string;
}
/**
 * Process a Storyblok multilink and return props for Next.js Link component
 */
export declare function getStoryblokLinkProps(link: MultilinkStoryblok | undefined | null): StoryblokLinkProps;
//# sourceMappingURL=storyblok.d.ts.map
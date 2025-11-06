import type { SbBlokData } from "@storyblok/react";
export interface StoryblokBlok {
    blok: SbBlokData;
}
export interface StoryblokBridgeEvent {
    action: "input" | "published" | "change";
    story?: unknown;
}
export interface StoryblokBridgeAPI {
    init: (config: {
        accessToken?: string;
    }) => void;
    on: (events: string[], callback: (event: StoryblokBridgeEvent) => void) => void;
    off: (events: string[]) => void;
    pingEditor: (callback: () => void) => void;
    inEditor: boolean;
    enterEditmode: () => void;
}
//# sourceMappingURL=storyblok-bridge.d.ts.map
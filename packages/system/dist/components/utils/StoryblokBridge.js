"use client";
import { useEffect } from "react";
export function StoryblokBridge() {
    useEffect(() => {
        if (typeof window === "undefined")
            return;
        const windowWithStoryblok = window;
        const checkBridge = setInterval(() => {
            if (windowWithStoryblok.storyblok) {
                clearInterval(checkBridge);
                windowWithStoryblok.storyblok.init({
                    accessToken: process.env.NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN,
                });
                windowWithStoryblok.storyblok.on(["input", "published", "change"], (event) => {
                    if (event.action === "input") {
                        window.location.reload();
                    }
                    else if (event.action === "change" ||
                        event.action === "published") {
                        window.location.reload();
                    }
                });
                windowWithStoryblok.storyblok.pingEditor(() => {
                    if (windowWithStoryblok.storyblok?.inEditor) {
                        windowWithStoryblok.storyblok.enterEditmode();
                    }
                });
            }
        }, 100);
        return () => {
            clearInterval(checkBridge);
            if (windowWithStoryblok.storyblok) {
                windowWithStoryblok.storyblok.off(["input", "published", "change"]);
            }
        };
    }, []);
    return null;
}
//# sourceMappingURL=StoryblokBridge.js.map
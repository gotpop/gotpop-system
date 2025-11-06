"use client";
import { Fragment as _Fragment, jsx as _jsx } from "react/jsx-runtime";
import { apiPlugin, storyblokInit } from "@storyblok/react/rsc";
export default function StoryblokProvider({ children, }) {
    if (process.env.NODE_ENV === "development") {
        const accessToken = process.env.NEXT_PUBLIC_STORYBLOK_PREVIEW_TOKEN;
        storyblokInit({
            accessToken,
            use: [apiPlugin],
            apiOptions: {
                region: "eu",
            },
        });
    }
    return _jsx(_Fragment, { children: children });
}
//# sourceMappingURL=StoryblokProvider.js.map
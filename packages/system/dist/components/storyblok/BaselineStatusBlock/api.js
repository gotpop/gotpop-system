import "server-only";
export async function fetchFeatureData(featureId) {
    try {
        const url = new URL("https://api.webstatus.dev");
        url.pathname = `/v1/features/${featureId}`;
        const response = await fetch(url, {
            headers: {
                "User-Agent": "gotpop-blog-baseline-status/1.0",
            },
            // Cache for 24 hours (Next.js specific)
            next: { revalidate: 86400 },
        });
        if (!response.ok) {
            console.warn(`Failed to fetch baseline data for ${featureId}: ${response.status}`);
            return {};
        }
        return await response.json();
    }
    catch (error) {
        console.error(`Error fetching baseline data for ${featureId}:`, error);
        return {};
    }
}
//# sourceMappingURL=api.js.map
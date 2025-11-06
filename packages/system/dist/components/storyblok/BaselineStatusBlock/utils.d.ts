export interface StatusDisplayInfo {
    label: string;
    description: string;
    badgeText: string | null;
    color: string;
}
export declare function getStatusDisplay(status?: string, lowDate?: string): StatusDisplayInfo;
/**
 * Normalizes a feature name by removing hyphens and converting to sentence case
 * @param name - The feature name to normalize (e.g., "container-queries")
 * @returns Normalized name (e.g., "Container Queries") or null if input is null/undefined
 */
export declare function normalizeFeatureName(name?: string): string | null;
//# sourceMappingURL=utils.d.ts.map
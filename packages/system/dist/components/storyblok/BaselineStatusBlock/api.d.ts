import "server-only";
export interface BaselineData {
    name?: string;
    description?: string;
    baseline?: {
        status: "widely" | "newly" | "limited" | "no_data";
        high_date?: string;
        low_date?: string;
    };
    browser_implementations?: {
        chrome?: string;
        chrome_android?: string;
        edge?: string;
        firefox?: string;
        firefox_android?: string;
        safari?: string;
        safari_ios?: string;
    };
}
export declare function fetchFeatureData(featureId: string): Promise<BaselineData>;
//# sourceMappingURL=api.d.ts.map
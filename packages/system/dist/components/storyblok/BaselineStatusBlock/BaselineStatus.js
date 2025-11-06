import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "server-only";
import Link from "next/link";
import { formatMonthYear } from "../../../utils/date-formatter";
import { IconChrome, IconEdge, IconFirefox, IconSafari } from "../../icons";
import { Typography } from "../Typography";
import { fetchFeatureData } from "./api";
import { BaselineIcon } from "./BaselineIcon";
import { SupportStatusIcon } from "./SupportStatusIcon";
import { getStatusDisplay, normalizeFeatureName } from "./utils";
import "./BaselineStatus.css";
export async function BaselineStatusBlock({ blok, }) {
    const featureId = blok.feature;
    if (!featureId)
        return null;
    const data = await fetchFeatureData(featureId);
    const { name } = data;
    const status = data.baseline?.status || "no_data";
    const { label, badgeText } = getStatusDisplay(status, data.baseline?.low_date);
    const normalizedName = normalizeFeatureName(name);
    const featureUrl = `https://github.com/web-platform-dx/web-features/blob/main/features/${featureId}.yml`;
    const lowDateFormatted = data.baseline?.low_date
        ? formatMonthYear(data.baseline.low_date)
        : null;
    const highDateFormatted = data.baseline?.high_date
        ? formatMonthYear(data.baseline.high_date)
        : null;
    const browserImpl = data.browser_implementations || {};
    const browsers = [
        {
            key: "chrome",
            label: "Chrome",
            Icon: IconChrome,
        },
        { key: "edge", label: "Edge", Icon: IconEdge },
        {
            key: "firefox",
            label: "Firefox",
            Icon: IconFirefox,
        },
        {
            key: "safari",
            label: "Safari",
            Icon: IconSafari,
        },
    ];
    function getSupportStatus(status, baseline) {
        if (baseline === "limited") {
            if (status === "available" || status === "widely" || status === "newly")
                return "available";
            if (status === "unavailable")
                return "unavailable";
            return "no_data";
        }
        if (baseline === "widely" || baseline === "newly")
            return "available";
        return "no_data";
    }
    return (_jsx("div", { className: "baseline-status", "data-status": status, children: _jsxs("details", { children: [_jsxs("summary", { children: [_jsx("div", { className: "title", children: normalizedName && (_jsx("h4", { className: "feature-name", children: normalizedName })) }), _jsxs("div", { className: "feature-meta", children: [_jsx(BaselineIcon, { status: status }), _jsx("strong", { children: "Baseline" }), _jsx("span", { children: label }), badgeText && _jsx("span", { className: "baseline-badge", children: badgeText })] }), _jsx("div", { className: "baseline-status-browsers", children: browsers.map(({ key, label, Icon }) => {
                                const browserStatus = browserImpl[key];
                                const support = getSupportStatus(browserStatus, status);
                                return (_jsxs("span", { className: `browser-icon browser-${key}`, title: `${label}: ${support}`, children: [_jsx(Icon, {}), _jsx(SupportStatusIcon, { status: support })] }, key));
                            }) })] }), _jsxs("div", { className: "content", children: [lowDateFormatted && status === "newly" && (_jsxs(Typography, { tag: "p", variant: "text-base", shade: "dark", children: ["Since ", lowDateFormatted, " this feature works across the latest devices and browser versions."] })), highDateFormatted && status === "widely" && (_jsxs(Typography, { tag: "p", variant: "text-base", shade: "dark", children: ["It's been available across browsers since ", highDateFormatted, "."] })), _jsx(Link, { className: "link-simple", href: featureUrl, target: "_blank", rel: "noopener noreferrer", children: "Learn more" })] })] }) }));
}
//# sourceMappingURL=BaselineStatus.js.map
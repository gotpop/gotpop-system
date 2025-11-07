import "server-only"
import type { BaselineStatusBlockStoryblok } from "../../../types/storyblok-components"
import { formatMonthYear } from "../../../utils/date-formatter"
import { fetchFeatureData } from "./api"
import type { BaselineStatusData } from "./BaselineStatus"
import { BaselineStatus } from "./BaselineStatus"
import { getStatusDisplay, normalizeFeatureName } from "./utils"

export * from "./BaselineIcon"
export * from "./BaselineStatus"
export * from "./SupportStatusIcon"

interface BaselineStatusBlockProps {
  blok: BaselineStatusBlockStoryblok
}

function getSupportStatus(
  status: string | undefined,
  baseline: string
): "available" | "unavailable" | "no_data" {
  if (baseline === "limited") {
    if (status === "available" || status === "widely" || status === "newly")
      return "available"
    if (status === "unavailable") return "unavailable"
    return "no_data"
  }
  if (baseline === "widely" || baseline === "newly") return "available"
  return "no_data"
}

export async function BaselineStatusBlock({
  blok,
}: BaselineStatusBlockProps): Promise<React.JSX.Element | null> {
  const featureId = blok.feature

  if (!featureId) return null

  const data = await fetchFeatureData(featureId)
  const { name } = data

  const status = data.baseline?.status || "no_data"
  const { label, badgeText } = getStatusDisplay(status, data.baseline?.low_date)
  const normalizedName = normalizeFeatureName(name)

  const featureUrl = `https://github.com/web-platform-dx/web-features/blob/main/features/${featureId}.yml`

  const lowDateFormatted = data.baseline?.low_date
    ? formatMonthYear(data.baseline.low_date)
    : null

  const highDateFormatted = data.baseline?.high_date
    ? formatMonthYear(data.baseline.high_date)
    : null

  const browserImpl = data.browser_implementations || {}

  const browserConfigs = [
    { key: "chrome" as const, label: "Chrome" },
    { key: "edge" as const, label: "Edge" },
    { key: "firefox" as const, label: "Firefox" },
    { key: "safari" as const, label: "Safari" },
  ]

  const browsers = browserConfigs.map(({ key, label }) => ({
    key,
    label,
    support: getSupportStatus(browserImpl[key], status),
  }))

  const viewData: BaselineStatusData = {
    featureId,
    featureUrl,
    normalizedName,
    status,
    label,
    badgeText,
    lowDateFormatted,
    highDateFormatted,
    browsers,
  }

  return <BaselineStatus data={viewData} />
}

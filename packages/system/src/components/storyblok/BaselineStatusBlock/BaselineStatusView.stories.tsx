import type { Meta, StoryObj } from "@storybook/react"
import type { BaselineStatusData } from "./BaselineStatusView"
import { BaselineStatusView } from "./BaselineStatusView"

const meta: Meta<typeof BaselineStatusView> = {
  title: "Storyblok/BaselineStatusView",
  component: BaselineStatusView,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof meta>

const widelyAvailableData: BaselineStatusData = {
  featureId: "container-queries",
  featureUrl:
    "https://github.com/web-platform-dx/web-features/blob/main/features/container-queries.yml",
  normalizedName: "Container Queries",
  status: "widely",
  label: "Widely available",
  badgeText: null,
  lowDateFormatted: "February 2023",
  highDateFormatted: "September 2023",
  browsers: [
    { key: "chrome", label: "Chrome", support: "available" },
    { key: "edge", label: "Edge", support: "available" },
    { key: "firefox", label: "Firefox", support: "available" },
    { key: "safari", label: "Safari", support: "available" },
  ],
}

const newlyAvailableData: BaselineStatusData = {
  featureId: "view-transitions",
  featureUrl:
    "https://github.com/web-platform-dx/web-features/blob/main/features/view-transitions.yml",
  normalizedName: "View Transitions",
  status: "newly",
  label: "2024",
  badgeText: "newly available",
  lowDateFormatted: "March 2024",
  highDateFormatted: null,
  browsers: [
    { key: "chrome", label: "Chrome", support: "available" },
    { key: "edge", label: "Edge", support: "available" },
    { key: "firefox", label: "Firefox", support: "available" },
    { key: "safari", label: "Safari", support: "available" },
  ],
}

const limitedAvailabilityData: BaselineStatusData = {
  featureId: "popover",
  featureUrl:
    "https://github.com/web-platform-dx/web-features/blob/main/features/popover.yml",
  normalizedName: "Popover API",
  status: "limited",
  label: "Limited availability",
  badgeText: "limited",
  lowDateFormatted: null,
  highDateFormatted: null,
  browsers: [
    { key: "chrome", label: "Chrome", support: "available" },
    { key: "edge", label: "Edge", support: "available" },
    { key: "firefox", label: "Firefox", support: "unavailable" },
    { key: "safari", label: "Safari", support: "available" },
  ],
}

const noDataAvailableData: BaselineStatusData = {
  featureId: "unknown-feature",
  featureUrl:
    "https://github.com/web-platform-dx/web-features/blob/main/features/unknown-feature.yml",
  normalizedName: "Unknown Feature",
  status: "no_data",
  label: "Unknown availability",
  badgeText: null,
  lowDateFormatted: null,
  highDateFormatted: null,
  browsers: [
    { key: "chrome", label: "Chrome", support: "no_data" },
    { key: "edge", label: "Edge", support: "no_data" },
    { key: "firefox", label: "Firefox", support: "no_data" },
    { key: "safari", label: "Safari", support: "no_data" },
  ],
}

export const WidelyAvailable: Story = {
  args: {
    data: widelyAvailableData,
  },
}

export const NewlyAvailable: Story = {
  args: {
    data: newlyAvailableData,
  },
}

export const LimitedAvailability: Story = {
  args: {
    data: limitedAvailabilityData,
  },
}

export const NoData: Story = {
  args: {
    data: noDataAvailableData,
  },
}

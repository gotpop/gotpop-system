import type { Meta, StoryObj } from "@storybook/react"
import { Card } from "./Card"

const meta: Meta<typeof Card> = {
  title: "UI/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    padding: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: "This is a default card with some content inside.",
  },
}

export const SmallPadding: Story = {
  args: {
    padding: "sm",
    children: "Card with small padding.",
  },
}

export const MediumPadding: Story = {
  args: {
    padding: "md",
    children: "Card with medium padding (default).",
  },
}

export const LargePadding: Story = {
  args: {
    padding: "lg",
    children: "Card with large padding.",
  },
}

export const WithComplexContent: Story = {
  args: {
    children: (
      <div>
        <h3 className="text-lg font-semibold mb-2">Card Title</h3>
        <p className="text-gray-600 mb-4">
          This card contains more complex content including a title,
          description, and action buttons.
        </p>
        <div className="flex gap-2">
          <button
            type="button"
            className="px-3 py-1 bg-blue-500 text-white rounded text-sm"
          >
            Action
          </button>
          <button
            type="button"
            className="px-3 py-1 border border-gray-300 rounded text-sm"
          >
            Cancel
          </button>
        </div>
      </div>
    ),
  },
}

export const AllPaddingSizes: Story = {
  render: () => (
    <div className="flex gap-4 items-start flex-wrap max-w-4xl">
      <Card padding="sm">Small Padding</Card>
      <Card padding="md">Medium Padding</Card>
      <Card padding="lg">Large Padding</Card>
    </div>
  ),
}

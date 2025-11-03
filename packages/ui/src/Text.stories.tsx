import type { Meta, StoryObj } from "@storybook/react"
import { Text } from "./Text"

const meta: Meta<typeof Text> = {
  title: "UI/Text",
  component: Text,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    as: {
      control: { type: "select" },
      options: ["p", "span", "div", "h1", "h2", "h3", "h4", "h5", "h6"],
    },
    size: {
      control: { type: "select" },
      options: ["xs", "sm", "base", "lg", "xl"],
    },
    weight: {
      control: { type: "select" },
      options: ["normal", "medium", "semibold", "bold"],
    },
    color: {
      control: { type: "select" },
      options: ["default", "muted", "primary"],
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: "This is default text content.",
  },
}

export const Paragraph: Story = {
  args: {
    as: "p",
    children: "This is paragraph text.",
  },
}

export const Span: Story = {
  args: {
    as: "span",
    children: "This is span text.",
  },
}

export const Heading1: Story = {
  args: {
    as: "h1",
    size: "xl",
    weight: "bold",
    children: "This is an H1 heading",
  },
}

export const ExtraSmall: Story = {
  args: {
    size: "xs",
    children: "Extra small text size",
  },
}

export const Small: Story = {
  args: {
    size: "sm",
    children: "Small text size",
  },
}

export const Base: Story = {
  args: {
    size: "base",
    children: "Base text size (default)",
  },
}

export const Large: Story = {
  args: {
    size: "lg",
    children: "Large text size",
  },
}

export const ExtraLarge: Story = {
  args: {
    size: "xl",
    children: "Extra large text size",
  },
}

export const Normal: Story = {
  args: {
    weight: "normal",
    children: "Normal weight text",
  },
}

export const Medium: Story = {
  args: {
    weight: "medium",
    children: "Medium weight text",
  },
}

export const Semibold: Story = {
  args: {
    weight: "semibold",
    children: "Semibold weight text",
  },
}

export const Bold: Story = {
  args: {
    weight: "bold",
    children: "Bold weight text",
  },
}

export const DefaultColor: Story = {
  args: {
    color: "default",
    children: "Default color text",
  },
}

export const MutedColor: Story = {
  args: {
    color: "muted",
    children: "Muted color text",
  },
}

export const PrimaryColor: Story = {
  args: {
    color: "primary",
    children: "Primary color text",
  },
}

export const AllSizes: Story = {
  render: () => (
    <div className="space-y-4">
      <Text size="xs">Extra small text</Text>
      <Text size="sm">Small text</Text>
      <Text size="base">Base text</Text>
      <Text size="lg">Large text</Text>
      <Text size="xl">Extra large text</Text>
    </div>
  ),
}

export const AllWeights: Story = {
  render: () => (
    <div className="space-y-4">
      <Text weight="normal">Normal weight</Text>
      <Text weight="medium">Medium weight</Text>
      <Text weight="semibold">Semibold weight</Text>
      <Text weight="bold">Bold weight</Text>
    </div>
  ),
}

export const AllColors: Story = {
  render: () => (
    <div className="space-y-4">
      <Text color="default">Default color</Text>
      <Text color="muted">Muted color</Text>
      <Text color="primary">Primary color</Text>
    </div>
  ),
}

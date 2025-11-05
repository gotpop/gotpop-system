import type { Meta, StoryObj } from "@storybook/react"
import { Typography } from "./Typography"

const meta: Meta<typeof Typography> = {
  title: "Storyblok/Typography",
  component: Typography,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    tag: {
      control: "select",
      options: ["h1", "h2", "h3", "h4", "h5", "h6", "p", "small", "time"],
    },
    variant: {
      control: "select",
      options: [
        "text-xs",
        "text-sm",
        "text-base",
        "text-md",
        "text-lg",
        "text-xl",
        "text-xxl",
        "text-2xl",
        "text-3xl",
        "text-4xl",
        "text-5xl",
        "text-6xl",
        "text-7xl",
        "text-8xl",
        "text-9xl",
        "hero",
      ],
    },
    shade: {
      control: "select",
      options: ["light", "dark", "charcoal", "dimmed"],
    },
    weight: {
      control: "select",
      options: [
        "weight-thin",
        "weight-light",
        "weight-regular",
        "weight-medium",
        "weight-semibold",
        "weight-bold",
        "weight-black",
      ],
    },
    style: {
      control: "select",
      options: ["style-normal", "style-italic"],
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Heading1: Story = {
  args: {
    tag: "h1",
    variant: "text-4xl",
    shade: "dark",
    weight: "weight-bold",
    children: "This is a Heading 1",
  },
}

export const Heading2: Story = {
  args: {
    tag: "h2",
    variant: "text-3xl",
    shade: "dark",
    weight: "weight-semibold",
    children: "This is a Heading 2",
  },
}

export const Paragraph: Story = {
  args: {
    tag: "p",
    variant: "text-base",
    shade: "light",
    children:
      "This is a paragraph with normal text content that demonstrates the default styling.",
  },
}

export const Hero: Story = {
  args: {
    tag: "h1",
    variant: "hero",
    shade: "dark",
    weight: "weight-bold",
    children: "Hero Typography",
  },
}

export const SmallText: Story = {
  args: {
    tag: "small",
    variant: "text-xs",
    shade: "dimmed",
    children: "This is small text, often used for captions or footnotes",
  },
}

export const ItalicText: Story = {
  args: {
    tag: "p",
    variant: "text-base",
    shade: "dark",
    style: "style-italic",
    children: "This text is styled in italics",
  },
}

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <Typography tag="h1" variant="hero" shade="dark">
        Hero Text
      </Typography>
      <Typography tag="h1" variant="text-6xl" shade="dark">
        Text 6XL
      </Typography>
      <Typography tag="h2" variant="text-4xl" shade="dark">
        Text 4XL
      </Typography>
      <Typography tag="h3" variant="text-2xl" shade="dark">
        Text 2XL
      </Typography>
      <Typography tag="h4" variant="text-xl" shade="dark">
        Text XL
      </Typography>
      <Typography tag="h5" variant="text-lg" shade="dark">
        Text LG
      </Typography>
      <Typography tag="h6" variant="text-base" shade="dark">
        Text Base
      </Typography>
      <Typography tag="p" variant="text-sm" shade="light">
        Text SM
      </Typography>
      <Typography tag="small" variant="text-xs" shade="dimmed">
        Text XS
      </Typography>
    </div>
  ),
}

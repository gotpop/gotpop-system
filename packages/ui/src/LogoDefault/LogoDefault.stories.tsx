import type { Meta, StoryObj } from "@storybook/react"
import { LogoDefault } from "./LogoDefault"

const meta = {
  title: "UI/LogoDefault",
  component: LogoDefault,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
# LogoDefault

The original LogoDefault component copied from the blog with all its dependencies.

This is a test to see if a proper component works in the design system Storybook.
        `,
      },
    },
  },
  argTypes: {
    blok: {
      description: "Storyblok configuration object",
      control: "object",
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof LogoDefault>

export default meta
type Story = StoryObj<typeof meta>

/**
 * Default logo with basic link configuration
 */
export const Default: Story = {
  args: {
    blok: {
      link: {
        linktype: "story",
        cached_url: "/",
        url: "/",
      },
    },
  },
}

/**
 * Logo with external link
 */
export const ExternalLink: Story = {
  args: {
    blok: {
      link: {
        linktype: "url",
        url: "https://gotpop.com",
        target: "_blank",
      },
    },
  },
}

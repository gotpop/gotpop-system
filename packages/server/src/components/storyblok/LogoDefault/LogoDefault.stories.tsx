import type { Meta, StoryObj } from "@storybook/react"
import type { LogoDefaultStoryblok } from "../../../types/storyblok-components"
import { LogoDefault } from "./LogoDefault"

const meta: Meta<typeof LogoDefault> = {
  title: "Storyblok/LogoDefault",
  component: LogoDefault,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    blok: {
      description: "The Storyblok blok data for the logo component",
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

// Default story with internal link
export const Default: Story = {
  args: {
    blok: {
      _uid: "12345",
      component: "logo_default",
      link: {
        cached_url: "/",
        linktype: "story",
      },
    } satisfies LogoDefaultStoryblok,
  },
}

// Story with external link
export const ExternalLink: Story = {
  args: {
    blok: {
      _uid: "12346",
      component: "logo_default",
      link: {
        url: "https://gotpop.dev",
        linktype: "url",
        target: "_blank",
      },
    } satisfies LogoDefaultStoryblok,
  },
}

// Story with no link (should default to safe href)
export const NoLink: Story = {
  args: {
    blok: {
      _uid: "12347",
      component: "logo_default",
      link: undefined,
    } satisfies LogoDefaultStoryblok,
  },
}

// Story with email link
export const EmailLink: Story = {
  args: {
    blok: {
      _uid: "12348",
      component: "logo_default",
      link: {
        url: "mailto:hello@gotpop.dev",
        linktype: "email",
      },
    } satisfies LogoDefaultStoryblok,
  },
}

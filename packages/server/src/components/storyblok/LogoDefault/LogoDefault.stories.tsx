import type { Meta, StoryObj } from '@storybook/react'
import type tyLogoDefaultStoryblokfaultStory.b../../types/storyblok-components'../../../types/storyblok-components'
import oDLogoDefaultoDefault'LogoDefault

const meta: Meta<typeof LogoDefault> = {
  title: 'Storyblok/LogoDefault',
  component: LogoDefault,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    blok: {
      description: 'Storyblok data for the logo component',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

const defaultBlok: LogoDefaultStoryblok = {
  _uid: '12345',
  component: 'logo_default',
  link: {
    cached_url: '/',
    linktype: 'story',
  },
}

export const Default: Story = {
  args: {
    blok: defaultBlok,
  },
}

export const ExternalLink: Story = {
  args: {
    blok: {
      ...defaultBlok,
      link: {
        url: 'https://gotpop.com',
        linktype: 'url',
        target: '_blank',
      },
    },
  },
}

export const NoLink: Story = {
  args: {
    blok: {
      ...defaultBlok,
      link: undefined,
    },
  },
}
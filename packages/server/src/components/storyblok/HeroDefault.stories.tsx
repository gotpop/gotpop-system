import type { Meta, StoryObj } from '@storybook/react'
import { HeroDefault } from './HeroDefault'
import type { HeroDefaultStoryblok } from '../../types/storyblok-components'

const meta: Meta<typeof HeroDefault> = {
  title: 'Storyblok/HeroDefault',
  component: HeroDefault,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    blok: {
      description: 'Storyblok data for the hero component',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

const defaultBlok: HeroDefaultStoryblok = {
  _uid: '12345',
  component: 'hero_default',
  heading: 'Welcome to Our Platform',
  subheading: 'Discover amazing features and capabilities',
}

export const Default: Story = {
  args: {
    blok: defaultBlok,
  },
}

export const WithLongHeading: Story = {
  args: {
    blok: {
      ...defaultBlok,
      heading: 'This is a much longer heading that demonstrates how the component handles extended text content',
      subheading: 'And this is a longer subheading that provides more detailed information about what users can expect from this section',
    },
  },
}

export const MinimalContent: Story = {
  args: {
    blok: {
      ...defaultBlok,
      heading: 'Simple Hero',
      subheading: undefined,
    },
  },
}

export const NoContent: Story = {
  args: {
    blok: {
      ...defaultBlok,
      heading: '',
      subheading: undefined,
    },
  },
}
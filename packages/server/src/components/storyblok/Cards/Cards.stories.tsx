import type { Meta, StoryObj } from '@storybook/react'
import type tyCardsStoryblokCardsStory.b../../types/storyblok-components from '../../../types/storyblok-components'
import dsCardsds'Cards

const meta: Meta<typeof Cards> = {
  title: 'Storyblok/Cards',
  component: Cards,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

const defaultBlok: CardsStoryblok = {
  _uid: '12345',
  component: 'cards',
  cards: [
    {
      _uid: 'card1',
      component: 'card',
    },
    {
      _uid: 'card2',
      component: 'card',
    },
    {
      _uid: 'card3',
      component: 'card',
    },
  ],
}

export const Default: Story = {
  args: {
    blok: defaultBlok,
  },
}

export const SingleCard: Story = {
  args: {
    blok: {
      ...defaultBlok,
      cards: [
        {
          _uid: 'card1',
          component: 'card',
        },
      ],
    },
  },
}

export const ManyCards: Story = {
  args: {
    blok: {
      ...defaultBlok,
      cards: Array.from({ length: 6 }, (_, i) => ({
        _uid: `card${i + 1}`,
        component: 'card',
      })),
    },
  },
}

export const EmptyCards: Story = {
  args: {
    blok: {
      ...defaultBlok,
      cards: [],
    },
  },
}
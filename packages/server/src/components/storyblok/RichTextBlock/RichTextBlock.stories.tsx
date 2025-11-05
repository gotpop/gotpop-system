import type { Meta, StoryObj } from '@storybook/react'
import type tyRichTextBlockStoryblokBlockStory.b../../types/storyblok-components./../../types/storyblok-components'
import hTRichTextBlockhTextBloc'RichTextBlock

const meta: Meta<typeof RichTextBlock> = {
  title: 'Storyblok/RichTextBlock',
  component: RichTextBlock,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

const sampleRichText = {
  type: 'doc',
  content: [
    {
      type: 'paragraph',
      content: [
        {
          text: 'This is a sample paragraph with rich text content. It demonstrates how the component handles structured text.',
          type: 'text',
        },
      ],
    },
    {
      type: 'heading',
      content: [
        {
          text: 'Sample Heading',
          type: 'text',
        },
      ],
    },
    {
      type: 'paragraph',
      content: [
        {
          text: 'Another paragraph to show multiple content blocks.',
          type: 'text',
        },
      ],
    },
  ],
}

const defaultBlok: RichTextBlockStoryblok = {
  _uid: '12345',
  component: 'rich_text_block',
  content: sampleRichText,
}

export const Default: Story = {
  args: {
    blok: defaultBlok,
  },
}

export const SimpleText: Story = {
  args: {
    blok: {
      ...defaultBlok,
      content: {
        type: 'doc',
        content: [
          {
            type: 'paragraph',
            content: [
              {
                text: 'Simple paragraph of text.',
                type: 'text',
              },
            ],
          },
        ],
      },
    },
  },
}

export const EmptyContent: Story = {
  args: {
    blok: {
      ...defaultBlok,
      content: undefined,
    },
  },
}
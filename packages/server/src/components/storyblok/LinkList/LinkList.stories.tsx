import type { Meta, StoryObj } from '@storybook/react'
import type tyLinkListStoryblokkListStory.b../../types/storyblok-componentsom '../../../types/storyblok-components'
import kLLinkListkList'LinkList

const meta: Meta<typeof LinkList> = {
  title: 'Storyblok/LinkList',
  component: LinkList,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

const defaultBlok: LinkListStoryblok = {
  _uid: '12345',
  component: 'link_list',
  heading: 'Quick Links',
  links: [
    {
      _uid: 'link1',
      component: 'link_list_item',
      link_text: 'Home',
      link: {
        cached_url: '/',
        linktype: 'story',
      },
    },
    {
      _uid: 'link2',
      component: 'link_list_item',
      link_text: 'About',
      link: {
        cached_url: '/about',
        linktype: 'story',
      },
    },
    {
      _uid: 'link3',
      component: 'link_list_item',
      link_text: 'Contact',
      link: {
        url: 'mailto:hello@gotpop.com',
        linktype: 'url',
      },
    },
  ],
}

export const Default: Story = {
  args: {
    blok: defaultBlok,
  },
}

export const WithExternalLinks: Story = {
  args: {
    blok: {
      ...defaultBlok,
      heading: 'External Resources',
      links: [
        {
          _uid: 'ext1',
          component: 'link_list_item',
          link_text: 'GitHub',
          link: {
            url: 'https://github.com',
            linktype: 'url',
            target: '_blank',
          },
        },
        {
          _uid: 'ext2',
          component: 'link_list_item',
          link_text: 'Documentation',
          link: {
            url: 'https://docs.example.com',
            linktype: 'url',
            target: '_blank',
          },
        },
      ],
    },
  },
}

export const NoHeading: Story = {
  args: {
    blok: {
      ...defaultBlok,
      heading: undefined,
    },
  },
}

export const EmptyLinks: Story = {
  args: {
    blok: {
      ...defaultBlok,
      links: [],
    },
  },
}
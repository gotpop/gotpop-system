import type { Meta, StoryObj } from "@storybook/react"
import type { FilterContentStoryblok } from "../../../types/storyblok-components"
import type { PostStory, TagDatasourceEntry } from "../../../utils/tags"
import { FilterContent } from "./FilterContent"

// Sample posts data for stories
const samplePosts: PostStory[] = [
  {
    uuid: "1",
    name: "Getting Started with React",
    full_slug: "blog/getting-started-react",
    published_at: "2024-01-15T10:00:00.000Z",
    content: {
      component: "page_post",
      Heading: "Getting Started with React",
      description: "Learn the basics of React development",
      published_date: "2024-01-15T10:00:00.000Z",
      tags: ["React", "JavaScript", "Frontend"],
    },
  },
  {
    uuid: "2",
    name: "Advanced CSS Techniques",
    full_slug: "blog/advanced-css-techniques",
    published_at: "2024-01-10T14:30:00.000Z",
    content: {
      component: "page_post",
      Heading: "Advanced CSS Techniques",
      description: "Master advanced CSS layouts and animations",
      published_date: "2024-01-10T14:30:00.000Z",
      tags: ["CSS", "Frontend", "Design"],
    },
  },
  {
    uuid: "3",
    name: "Node.js Best Practices",
    full_slug: "blog/nodejs-best-practices",
    published_at: "2024-01-05T09:15:00.000Z",
    content: {
      component: "page_post",
      Heading: "Node.js Best Practices",
      description: "Essential patterns for Node.js development",
      published_date: "2024-01-05T09:15:00.000Z",
      tags: ["Node.js", "JavaScript", "Backend"],
    },
  },
]

// Sample tags data for stories
const sampleTags: TagDatasourceEntry[] = [
  { id: 1, name: "React", value: "React" },
  { id: 2, name: "JavaScript", value: "JavaScript" },
  { id: 3, name: "CSS", value: "CSS" },
  { id: 4, name: "Frontend", value: "Frontend" },
  { id: 5, name: "Backend", value: "Backend" },
  { id: 6, name: "Node.js", value: "Node.js" },
  { id: 7, name: "Design", value: "Design" },
]

const meta: Meta<typeof FilterContent> = {
  title: "Storyblok/FilterContent",
  component: FilterContent,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    blok: {
      _uid: "12345",
      component: "filter_content",
      // Mock the server-side data fetching for Storybook
      posts: samplePosts,
      availableTags: sampleTags,
    } as FilterContentStoryblok,
  },
}

export const EmptyState: Story = {
  args: {
    blok: {
      _uid: "12346",
      component: "filter_content",
      posts: [],
      availableTags: [],
    } as FilterContentStoryblok,
  },
}

export const ManyPosts: Story = {
  args: {
    blok: {
      _uid: "12347",
      component: "filter_content",
      posts: [
        ...samplePosts,
        {
          uuid: "4",
          name: "TypeScript Fundamentals",
          full_slug: "blog/typescript-fundamentals",
          published_at: "2024-01-20T16:45:00.000Z",
          content: {
            component: "page_post",
            Heading: "TypeScript Fundamentals",
            description: "Understanding TypeScript type system",
            published_date: "2024-01-20T16:45:00.000Z",
            tags: ["TypeScript", "JavaScript", "Frontend"],
          },
        },
        {
          uuid: "5",
          name: "Docker for Developers",
          full_slug: "blog/docker-for-developers",
          published_at: "2024-01-25T11:20:00.000Z",
          content: {
            component: "page_post",
            Heading: "Docker for Developers",
            description: "Containerization made simple",
            published_date: "2024-01-25T11:20:00.000Z",
            tags: ["Docker", "DevOps", "Backend"],
          },
        },
      ],
      availableTags: [
        ...sampleTags,
        { id: 8, name: "TypeScript", value: "TypeScript" },
        { id: 9, name: "Docker", value: "Docker" },
        { id: 10, name: "DevOps", value: "DevOps" },
      ],
    } as FilterContentStoryblok,
  },
}

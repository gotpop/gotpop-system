import type { Meta, StoryObj } from "@storybook/react"
import { ServerCard } from "./ServerCard"

const meta: Meta<typeof ServerCard> = {
  title: "Server/ServerCard",
  component: ServerCard,
  parameters: {
    layout: "centered",
    react: { rsc: true },
    docs: {
      description: {
        component: `
**ServerCard** is a React Server Component with \`'server-only'\` directive.

This story tests the actual server component in Storybook's RSC environment.
        `,
      },
    },
  },
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children:
      "This is the actual ServerCard component running in Storybook RSC mode.",
  },
}

export const WithTitle: Story = {
  args: {
    title: "Server Component Test",
    children: "Testing the real server component with title prop.",
  },
}

export const WithComplexContent: Story = {
  args: {
    title: "Real Server Component",
    children: (
      <div>
        <p className="text-gray-600 mb-4">
          This is the actual ServerCard component imported with its
          'server-only' directive.
        </p>
        <div className="bg-blue-50 p-3 rounded border border-blue-200">
          <strong>RSC Test:</strong> If you can see this, Storybook RSC support
          is working!
        </div>
      </div>
    ),
  },
}

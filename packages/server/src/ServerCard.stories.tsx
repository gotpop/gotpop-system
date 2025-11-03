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

This story tests the actual server component in Storybook 10's enhanced RSC environment.

### Features:
- ✅ Actual server component (not a client-safe mock)
- ✅ \`'server-only'\` directive support  
- ✅ Enhanced RSC testing in Storybook 10
- ✅ Improved error handling and async support
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
      "This is the actual ServerCard component running in Storybook 10 RSC mode.",
  },
  parameters: {
    docs: {
      description: {
        story: "Basic ServerCard with default styling and content.",
      },
    },
  },
}

export const WithTitle: Story = {
  args: {
    title: "Storybook 10 RSC Test",
    children:
      "Testing the real server component with enhanced RSC support in Storybook 10.",
  },
  parameters: {
    docs: {
      description: {
        story:
          "ServerCard with title prop demonstrating server component properties.",
      },
    },
  },
}

export const WithComplexContent: Story = {
  args: {
    title: "Enhanced Server Component",
    children: (
      <div>
        <p className="text-gray-600 mb-4">
          This is the actual ServerCard component imported with its
          'server-only' directive. Storybook 10 provides enhanced RSC support.
        </p>
        <div className="bg-green-50 p-3 rounded border border-green-200 mb-3">
          <strong>✅ Storybook 10 RSC:</strong> Enhanced server component
          testing capabilities!
        </div>
        <div className="bg-blue-50 p-3 rounded border border-blue-200">
          <strong>Server Features:</strong>
          <ul className="mt-2 ml-4 list-disc">
            <li>Real server-only imports</li>
            <li>Improved error handling</li>
            <li>Better async component support</li>
          </ul>
        </div>
      </div>
    ),
  },
  parameters: {
    docs: {
      description: {
        story:
          "Complex content example showing Storybook 10's enhanced RSC capabilities.",
      },
    },
  },
}

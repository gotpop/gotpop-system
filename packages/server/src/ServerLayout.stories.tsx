import type { Meta, StoryObj } from "@storybook/react"
import { ServerLayout } from "./ServerLayout"

const meta: Meta<typeof ServerLayout> = {
  title: "Server/ServerLayout",
  component: ServerLayout,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: `
**ServerLayout** is a React Server Component for page layouts with optional sidebar.

This component runs server-side only and provides consistent page structure.
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
    children: (
      <div className="py-8">
        <h1 className="text-2xl font-bold mb-4">Page Content</h1>
        <p className="text-gray-600 mb-4">
          This content is wrapped in the ServerLayout component without a
          sidebar.
        </p>
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h2 className="text-lg font-semibold mb-2">Content Card</h2>
          <p>This demonstrates the default layout behavior.</p>
        </div>
      </div>
    ),
  },
}

export const WithSidebar: Story = {
  args: {
    sidebar: (
      <nav className="py-8">
        <h3 className="text-lg font-semibold mb-4">Navigation</h3>
        <ul className="space-y-2">
          <li>
            <a href="#" className="text-blue-600 hover:text-blue-800">
              Dashboard
            </a>
          </li>
          <li>
            <a href="#" className="text-blue-600 hover:text-blue-800">
              Components
            </a>
          </li>
          <li>
            <a href="#" className="text-blue-600 hover:text-blue-800">
              Settings
            </a>
          </li>
        </ul>
      </nav>
    ),
    children: (
      <div className="py-8">
        <h1 className="text-2xl font-bold mb-4">Main Content Area</h1>
        <p className="text-gray-600 mb-6">
          This layout includes a sidebar for navigation or secondary content.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h2 className="text-lg font-semibold mb-2">Content Block 1</h2>
            <p className="text-gray-600">
              This demonstrates the main content area with sidebar layout.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h2 className="text-lg font-semibold mb-2">Content Block 2</h2>
            <p className="text-gray-600">
              The sidebar provides additional navigation or context.
            </p>
          </div>
        </div>
      </div>
    ),
  },
}

export const CustomClassName: Story = {
  args: {
    className: "bg-blue-50",
    children: (
      <div className="py-8">
        <h1 className="text-2xl font-bold mb-4">Custom Styled Layout</h1>
        <p className="text-gray-600">
          This layout demonstrates custom styling via the className prop.
        </p>
      </div>
    ),
  },
}

export const ComplexSidebar: Story = {
  args: {
    sidebar: (
      <div className="py-8">
        <div className="bg-white p-4 rounded-lg shadow-sm border mb-6">
          <h3 className="text-lg font-semibold mb-3">User Profile</h3>
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
              JD
            </div>
            <div>
              <p className="font-medium">John Doe</p>
              <p className="text-sm text-gray-600">Administrator</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm border">
          <h3 className="text-lg font-semibold mb-3">Quick Stats</h3>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-600">Active Users</span>
              <span className="font-semibold">1,234</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Components</span>
              <span className="font-semibold">42</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Stories</span>
              <span className="font-semibold">156</span>
            </div>
          </div>
        </div>
      </div>
    ),
    children: (
      <div className="py-8">
        <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
        <p className="text-gray-600 mb-6">
          A more complex example with rich sidebar content and main dashboard
          area.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h2 className="text-lg font-semibold mb-2 text-blue-600">
              Total Views
            </h2>
            <p className="text-3xl font-bold">12,345</p>
            <p className="text-sm text-gray-600">+12% from last month</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h2 className="text-lg font-semibold mb-2 text-green-600">
              Revenue
            </h2>
            <p className="text-3xl font-bold">$45,678</p>
            <p className="text-sm text-gray-600">+8% from last month</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h2 className="text-lg font-semibold mb-2 text-purple-600">
              Users
            </h2>
            <p className="text-3xl font-bold">8,901</p>
            <p className="text-sm text-gray-600">+15% from last month</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
          <div className="space-y-3">
            <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span>New component added to UI library</span>
              <span className="text-sm text-gray-500 ml-auto">2 hours ago</span>
            </div>
            <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>User authentication updated</span>
              <span className="text-sm text-gray-500 ml-auto">4 hours ago</span>
            </div>
            <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded">
              <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
              <span>Design tokens synchronized</span>
              <span className="text-sm text-gray-500 ml-auto">1 day ago</span>
            </div>
          </div>
        </div>
      </div>
    ),
  },
}

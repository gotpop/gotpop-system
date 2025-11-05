// Type declarations for React 19 experimental features

declare module "react" {
  interface ViewTransitionProps {
    children: React.ReactNode
    update?: string
  }

  export const ViewTransition: React.ComponentType<ViewTransitionProps>
}

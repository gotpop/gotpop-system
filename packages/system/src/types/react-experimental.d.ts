// Type declarations for React 19 experimental features and missing exports

declare module "react" {
  interface ViewTransitionProps {
    children: React.ReactNode
    update?: string
  }

  export const ViewTransition: React.ComponentType<ViewTransitionProps>

  // Export missing React 19 hooks and utilities that may not be in @types/react yet
  export function useId(): string
  export function startTransition(callback: () => void): void
  export function Suspense(props: {
    children: React.ReactNode
    fallback?: React.ReactNode
  }): JSX.Element
  export function useMemo<T>(
    factory: () => T,
    deps: React.DependencyList | undefined
  ): T
  export function useState<S>(
    initialState: S | (() => S)
  ): [S, React.Dispatch<React.SetStateAction<S>>]
  export function useState<S = undefined>(): [
    S | undefined,
    React.Dispatch<React.SetStateAction<S | undefined>>,
  ]
  export function useEffect(
    effect: React.EffectCallback,
    deps?: React.DependencyList
  ): void
  export function useCallback<T extends (...args: unknown[]) => unknown>(
    callback: T,
    deps: React.DependencyList
  ): T

  // Type exports that might be missing
  export type ReactNode = React.ReactNode
}

// Fix react-icons types to include className
declare module "react-icons/lib" {
  import type { ComponentType } from "react"

  export interface IconBaseProps {
    children?: React.ReactNode
    size?: string | number
    color?: string
    title?: string
    className?: string
    style?: React.CSSProperties
    attr?: React.SVGAttributes<SVGElement>
  }

  export type IconType = ComponentType<IconBaseProps>
}

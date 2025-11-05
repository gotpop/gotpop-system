// Allow custom element names used in the codebase (e.g. <box-grid>, <baseline-status>, etc.)
// This keeps type checking permissive for web-component-like tags used as layout wrappers.
declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any
  }
}

export {}

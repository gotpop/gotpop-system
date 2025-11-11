/**
 * Converts a Storyblok full_slug to a clean URL path
 * Removes the 'blog/' prefix and ensures it starts with '/'
 *
 * Note: This is a simple implementation for the package.
 * For multi-tenant support, projects should implement their own version.
 */
export function getStoryPath(fullSlug: string): string {
  if (!fullSlug) return "/"

  // Remove 'blog/' prefix
  const path = fullSlug.replace(/^blog\//, "")

  // Handle special cases
  if (path === "home" || path === "" || path === "/") {
    return "/"
  }

  // Handle index pages (ending with /) - remove trailing slash
  if (path.endsWith("/") && path !== "/") {
    const cleanPath = path.slice(0, -1) // Remove trailing slash
    return `/${cleanPath}`
  }

  // Ensure leading slash for all other paths
  return path.startsWith("/") ? path : `/${path}`
}

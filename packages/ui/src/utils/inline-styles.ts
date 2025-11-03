import "server-only"

import fs from "node:fs"
import path from "node:path"

/**
 * Read a CSS file from the file system (server-side only) for monorepo context
 * Returns the CSS content as a string to be used in a <style> tag
 *
 * @param cssFileName - The CSS filename (e.g., "LogoDefault.css")
 * @returns The CSS content as a string
 */
export function getInlineStyles(cssFileName: string): string {
  try {
    console.log(`[getInlineStyles] Looking for CSS file: ${cssFileName}`)
    console.log(`[getInlineStyles] Process.cwd(): ${process.cwd()}`)
    console.log(`[getInlineStyles] __dirname: ${__dirname}`)

    // In monorepo context, we know the CSS file should be in packages/ui/src/ComponentName/
    const componentName = cssFileName.replace(".css", "")

    // Construct the path to the UI package from the Storybook app
    const uiPackagePath = path.join(
      process.cwd(),
      "..",
      "..",
      "packages",
      "ui",
      "src"
    )
    console.log(`[getInlineStyles] UI package path: ${uiPackagePath}`)

    // Try the direct component path: packages/ui/src/LogoDefault/LogoDefault.css
    const directPath = path.join(uiPackagePath, componentName, cssFileName)
    console.log(`[getInlineStyles] Trying direct path: ${directPath}`)

    if (fs.existsSync(directPath)) {
      const cssContent = fs.readFileSync(directPath, "utf-8")
      console.log(
        `[getInlineStyles] ✅ Found CSS at: ${directPath} (${cssContent.length} chars)`
      )
      return cssContent
    }

    // If that doesn't work, try other patterns similar to the original blog structure
    const fallbackPaths = [
      path.join(uiPackagePath, "components", "ui", componentName, cssFileName),
      path.join(uiPackagePath, "icons", componentName, cssFileName),
      path.join(uiPackagePath, "storyblok", componentName, cssFileName),
    ]

    for (const fallbackPath of fallbackPaths) {
      console.log(`[getInlineStyles] Trying fallback: ${fallbackPath}`)
      if (fs.existsSync(fallbackPath)) {
        const cssContent = fs.readFileSync(fallbackPath, "utf-8")
        console.log(
          `[getInlineStyles] ✅ Found CSS at fallback: ${fallbackPath} (${cssContent.length} chars)`
        )
        return cssContent
      }
    }

    console.log(`[getInlineStyles] ❌ CSS file not found: ${cssFileName}`)
    return ""
  } catch (error) {
    console.error(`[getInlineStyles] Error loading CSS:`, error)
    return ""
  }
}

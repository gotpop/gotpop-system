import "server-only";
/**
 * Read a CSS file from the file system (server-side only)
 * Returns the CSS content as a string to be used in a <style> tag
 *
 * Supports organized component structure:
 * - Storyblok: src/components/storyblok/ComponentName/ComponentName.css
 * - UI: src/components/ui/ComponentName/ComponentName.css
 * - Icons: src/components/icons/ComponentName/ComponentName.css
 * - Utils: src/components/utils/ComponentName/ComponentName.css
 * - Snippets: src/components/snippets/ComponentName/ComponentName.css
 * - Legacy flat: src/components/storyblok/ComponentName.css
 * - Explicit path: "DirectoryName/FileName.css" (searches in storyblok/)
 *
 * @param cssFileName - The CSS filename (e.g., "ButtonToggleMenu.css") or explicit path (e.g., "BaselineStatusBlock/BaselineStatus.css")
 * @returns The CSS content as a string
 */
export declare function getInlineStyles(cssFileName: string): string;
//# sourceMappingURL=inline-styles.d.ts.map
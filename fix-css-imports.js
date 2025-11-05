#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// List of files with CSS imports that need updating
const filesToUpdate = [
  'packages/server/src/utils/storybook/StorybookBackground.tsx',
  'packages/server/src/components/snippets/SnippetTextAlignA/SnippetTextAlignA.tsx',
  'packages/server/src/components/snippets/SnippetTextAlignB/SnippetTextAlignB.tsx',
  'packages/server/src/components/ui/PageLayout/PageLayout.tsx',
  'packages/server/src/components/ui/ButtonToggleMenu/ButtonToggleMenu.tsx',
  'packages/server/src/components/storyblok/SnippetBlock/SnippetBlock.tsx',
  'packages/server/src/components/storyblok/RichTextCodeBlock/RichTextCodeBlock.tsx',
  'packages/server/src/components/storyblok/HeaderDefault/HeaderDefault.tsx',
  'packages/server/src/components/storyblok/Cards/Cards.tsx',
  'packages/server/src/components/storyblok/BaselineStatusBlock/BaselineStatus.tsx',
  'packages/server/src/components/storyblok/LogoDefault/LogoDefault.tsx',
  'packages/server/src/components/storyblok/NavDefault/NavDefault.tsx',
  'packages/server/src/components/storyblok/FilterContent/FilterContent.tsx',
  'packages/server/src/components/storyblok/FilterContent/ClientSidePostsFilter.tsx',
  'packages/server/src/components/storyblok/FilterContent/ClientSidePostCard.tsx'
];

console.log('🔄 Updating CSS imports for JSR compatibility...\n');

filesToUpdate.forEach(filePath => {
  try {
    if (!fs.existsSync(filePath)) {
      console.log(`⚠️  File not found: ${filePath}`);
      return;
    }

    let content = fs.readFileSync(filePath, 'utf8');
    
    // Replace CSS imports with conditional imports
    const cssImportRegex = /import\s+["']([^"']+\.css)["'](?:\s+with\s+\{[^}]*\})?/g;
    
    let hasChanges = false;
    content = content.replace(cssImportRegex, (match, cssPath) => {
      hasChanges = true;
      return `// Only import CSS when not in JSR/Deno environment
if (typeof window !== "undefined") {
  await import("${cssPath}")
}`;
    });

    if (hasChanges) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✅ Updated: ${filePath}`);
    } else {
      console.log(`ℹ️  No changes needed: ${filePath}`);
    }
  } catch (error) {
    console.log(`❌ Error updating ${filePath}:`, error.message);
  }
});

console.log('\n🎉 CSS import updates complete!');
console.log('📝 Note: CSS files are still included in the package, but imports are now conditional.');
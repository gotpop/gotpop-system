#!/usr/bin/env node

const fs = require('fs');

// Function mappings for return types
const functionPatterns = [
  // Sync React components
  { pattern: /export function (\w+)\([^)]*\)\s*{/, returnType: 'React.JSX.Element' },
  // Async React components  
  { pattern: /export async function (\w+)\([^)]*\)\s*{/, returnType: 'Promise<React.JSX.Element>' },
  // Hooks
  { pattern: /export function (use\w+)\([^)]*\)\s*{/, returnType: 'unknown' },
  // Utility functions - will need manual review
  { pattern: /export function (\w+)\([^)]*\)\s*{/, returnType: 'unknown' }
];

console.log('🔄 Adding explicit return types to exported functions...\n');

const functionFiles = [
  'packages/server/src/components/icons/IconChrome.tsx',
  'packages/server/src/components/icons/IconEdge.tsx',  
  'packages/server/src/components/icons/IconFirefox.tsx',
  'packages/server/src/components/icons/IconSafari.tsx',
  'packages/server/src/components/icons/IconLogoSVG/IconLogoSVG.tsx',
  'packages/server/src/components/pages/PostsPage.tsx',
  'packages/server/src/components/snippets/SnippetTextAlignA/SnippetTextAlignA.tsx',
  'packages/server/src/components/snippets/SnippetTextAlignB/SnippetTextAlignB.tsx',
  'packages/server/src/components/storyblok/BaselineStatusBlock/BaselineStatus.tsx',
  'packages/server/src/components/storyblok/Cards/Card.tsx',
  'packages/server/src/components/storyblok/Cards/Cards.tsx',
  'packages/server/src/components/storyblok/FilterContent/FilterContent.tsx',
  'packages/server/src/components/storyblok/FooterDefault/FooterDefault.tsx',
  'packages/server/src/components/storyblok/HeaderDefault/HeaderDefault.tsx',
  'packages/server/src/components/storyblok/HeroDefault.tsx',
  'packages/server/src/components/storyblok/LinkList/LinkList.tsx',
  'packages/server/src/components/storyblok/LogoDefault/LogoDefault.tsx',
  'packages/server/src/components/storyblok/NavDefault/NavDefault.tsx',
  'packages/server/src/components/storyblok/NavDefault/NavItemDefault.tsx',
  'packages/server/src/components/storyblok/Pages.tsx',
  'packages/server/src/components/storyblok/PostHeader.tsx',
  'packages/server/src/components/storyblok/RichTextBlock/RichTextBlock.tsx',
  'packages/server/src/components/storyblok/RichTextCodeBlock/RichTextCodeBlock.tsx',
  'packages/server/src/components/storyblok/SnippetBlock/SnippetBlock.tsx',
  'packages/server/src/components/ui/ButtonToggleMenu/ButtonToggleMenu.tsx',
  'packages/server/src/components/ui/Icon/Icon.tsx',
  'packages/server/src/components/ui/PageLayout/PageLayout.tsx',
  'packages/server/src/components/ui/RichText/RichText.tsx',
  'packages/server/src/components/utils/StoryNotFound.tsx',
  'packages/server/src/components/utils/StoryblokBridge.tsx',
  'packages/server/src/hooks/useMediaQuery.ts',
  'packages/server/src/utils/static-params.ts',
  'packages/server/src/utils/storyblok-editable.ts',
  'packages/server/src/utils/storyblok-fetch.ts'
];

functionFiles.forEach(filePath => {
  try {
    if (!fs.existsSync(filePath)) {
      console.log(`⚠️  File not found: ${filePath}`);
      return;
    }

    let content = fs.readFileSync(filePath, 'utf8');
    let hasChanges = false;

    // Add return type based on patterns
    if (content.includes('export async function')) {
      content = content.replace(
        /export async function ([^(]+)\(([^)]*)\)(\s*{)/g,
        'export async function $1($2): Promise<React.JSX.Element>$3'
      );
      hasChanges = true;
    } else if (content.includes('export function') && content.includes('return <')) {
      content = content.replace(
        /export function ([^(]+)\(([^)]*)\)(\s*{)/g,
        'export function $1($2): React.JSX.Element$3'
      );
      hasChanges = true;
    } else if (content.includes('export function')) {
      // For non-component functions, we'll be more conservative
      content = content.replace(
        /export function ([^(]+)\(([^)]*)\)(\s*{)/g,
        'export function $1($2): unknown$3'
      );
      hasChanges = true;
    }

    if (hasChanges) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✅ Updated: ${filePath.replace(process.cwd() + '/', '')}`);
    }
  } catch (error) {
    console.log(`❌ Error updating ${filePath}:`, error.message);
  }
});

console.log('\n🎉 Return type updates complete!');
console.log('📝 Note: Some functions may need manual return type refinement.');
#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Custom element mappings to replace with standard elements
const elementMappings = {
  'page-layout': 'div',
  'main-content': 'main', 
  'box-crosshatch': 'div',
  'box-grid': 'div',
  'code-block': 'div',
  'snippet-block': 'div', 
  'baseline-status': 'div',
  'logo-main': 'div',
  'icon-hamburger': 'span',
  'button-toggle': 'button',
  'link-list': 'div'
};

console.log('🔄 Converting custom elements to standard HTML elements for JSR compatibility...\n');

// Find all .tsx files in src directory
function findTsxFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  
  list.forEach(file => {
    file = path.resolve(dir, file);
    const stat = fs.statSync(file);
    
    if (stat && stat.isDirectory()) {
      results = results.concat(findTsxFiles(file));
    } else if (file.endsWith('.tsx')) {
      results.push(file);
    }
  });
  
  return results;
}

const tsxFiles = findTsxFiles('packages/server/src');

tsxFiles.forEach(filePath => {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let hasChanges = false;

    // Replace custom elements with standard ones
    Object.entries(elementMappings).forEach(([customElement, standardElement]) => {
      const openTagRegex = new RegExp(`<${customElement}(\\s[^>]*)?>`, 'g');
      const closeTagRegex = new RegExp(`</${customElement}>`, 'g');
      
      if (content.match(openTagRegex) || content.match(closeTagRegex)) {
        hasChanges = true;
        content = content.replace(openTagRegex, `<${standardElement}$1>`);
        content = content.replace(closeTagRegex, `</${standardElement}>`);
      }
    });

    if (hasChanges) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✅ Updated: ${filePath.replace(process.cwd() + '/', '')}`);
    }
  } catch (error) {
    console.log(`❌ Error updating ${filePath}:`, error.message);
  }
});

console.log('\n🎉 Custom element conversion complete!');
console.log('📝 Note: Custom elements have been replaced with semantic HTML elements.');
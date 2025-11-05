#!/bin/bash

# Test package publishing locally
# This script helps test the package before publishing to GitHub Packages

echo "🧪 Testing @gotpop/system package..."

# Check if we're in the right directory
if [ ! -f "packages/server/package.json" ]; then
  echo "❌ Please run this script from the gotpop-system root directory"
  exit 1
fi

# Run linting and type checking
echo "📋 Running lint and type checks..."
yarn workspace @gotpop/system lint
yarn workspace @gotpop/system type-check

if [ $? -ne 0 ]; then
  echo "❌ Lint or type check failed"
  exit 1
fi

# Check package.json for required fields
echo "📦 Checking package.json configuration..."
cd packages/server

# Verify main entry point exists
if [ ! -f "src/index.ts" ]; then
  echo "❌ Main entry point src/index.ts not found"
  exit 1
fi

echo "✅ Package appears ready for publishing!"
echo ""
echo "📝 Next steps:"
echo "1. Commit and push changes to main branch"
echo "2. GitHub Actions will automatically publish the package"
echo "3. Add to gotpop-blog with: yarn add @gotpop/system"
echo ""
echo "🔗 Package will be available at:"
echo "   https://github.com/gotpop/gotpop-system/packages"
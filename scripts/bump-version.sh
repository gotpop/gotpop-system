#!/bin/bash

# Version bump script for JSR package
# Usage: ./scripts/bump-version.sh [patch|minor|major]

cd "$(dirname "$0")/../packages/system"

# Default to patch if no argument provided
BUMP_TYPE=${1:-patch}

# Get current version
current_version=$(cat jsr.json | grep '"version"' | cut -d'"' -f4)
echo "Current version: $current_version"

# Split version into parts
IFS='.' read -ra PARTS <<< "$current_version"
major=${PARTS[0]}
minor=${PARTS[1]}
patch=${PARTS[2]}

# Bump version based on type
case $BUMP_TYPE in
  "major")
    major=$((major + 1))
    minor=0
    patch=0
    ;;
  "minor")
    minor=$((minor + 1))
    patch=0
    ;;
  "patch")
    patch=$((patch + 1))
    ;;
  *)
    echo "Invalid bump type. Use: patch, minor, or major"
    exit 1
    ;;
esac

new_version="$major.$minor.$patch"
echo "New version: $new_version"

# Update jsr.json
sed -i.bak "s/\"version\": \"$current_version\"/\"version\": \"$new_version\"/" jsr.json
rm jsr.json.bak

echo "✅ Version bumped to $new_version"
echo "🚀 Run 'jsr publish' to publish the new version"
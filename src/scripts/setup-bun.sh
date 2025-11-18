#!/bin/bash

echo "🚀 Setting up Product Engineer Portfolio with Bun..."

# Check if Bun is installed
if ! command -v bun &> /dev/null
then
    echo "❌ Bun is not installed!"
    echo ""
    echo "Install Bun first:"
    echo "  curl -fsSL https://bun.sh/install | bash"
    echo ""
    echo "Or visit: https://bun.sh"
    exit 1
fi

echo "✅ Bun detected: $(bun --version)"

# Update all UI component imports
echo "📦 Updating import paths in UI components..."
find components/ui -name "*.tsx" -type f -exec sed -i '' 's/from "\.\/utils"/from "@\/lib\/utils"/g' {} +

echo "✅ Import paths updated!"

# Install dependencies with Bun
echo "📦 Installing dependencies with Bun..."
bun install

echo "✨ Setup complete!"
echo ""
echo "🚀 Quick start commands:"
echo ""
echo "  # Development (fast!)"
echo "  bun run dev"
echo "  bun --bun run dev    # Even faster with Bun runtime"
echo ""
echo "  # Production build"
echo "  bun run build"
echo ""
echo "  # Run tests"
echo "  bun test             # If you add tests"
echo ""
echo "  # Install packages"
echo "  bun add [package]    # Add dependency"
echo "  bun add -d [package] # Add dev dependency"
echo ""
echo "📚 Bun is 3-10x faster than npm!"
echo ""

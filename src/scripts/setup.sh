#!/bin/bash

echo "🚀 Setting up Product Engineer Portfolio..."

# Update all UI component imports
echo "📦 Updating import paths in UI components..."
find components/ui -name "*.tsx" -type f -exec sed -i '' 's/from "\.\/utils"/from "@\/lib\/utils"/g' {} +

echo "✅ Import paths updated!"

# Ask user for package manager preference
echo ""
echo "Choose your package manager:"
echo "1) npm (default)"
echo "2) bun"
echo "3) yarn"
echo "4) pnpm"
read -p "Enter choice [1-4]: " choice

case $choice in
  2)
    echo "📦 Installing dependencies with Bun..."
    bun install
    echo ""
    echo "To start development server:"
    echo "  bun run dev"
    echo "  # or"
    echo "  bun --bun run dev"
    ;;
  3)
    echo "📦 Installing dependencies with Yarn..."
    yarn install
    echo ""
    echo "To start development server:"
    echo "  yarn dev"
    ;;
  4)
    echo "📦 Installing dependencies with pnpm..."
    pnpm install
    echo ""
    echo "To start development server:"
    echo "  pnpm dev"
    ;;
  *)
    echo "📦 Installing dependencies with npm..."
    npm install
    echo ""
    echo "To start development server:"
    echo "  npm run dev"
    ;;
esac

echo ""
echo "✨ Setup complete!"
echo ""
echo "To build for production:"
echo "  [package-manager] run build"
echo ""

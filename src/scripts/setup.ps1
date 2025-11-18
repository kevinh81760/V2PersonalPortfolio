# PowerShell setup script for Windows

Write-Host "🚀 Setting up Product Engineer Portfolio..." -ForegroundColor Cyan

# Update all UI component imports
Write-Host "📦 Updating import paths in UI components..." -ForegroundColor Yellow
Get-ChildItem -Path components/ui -Filter *.tsx -Recurse | ForEach-Object {
    $content = Get-Content $_.FullName -Raw
    $content = $content -replace 'from "\./utils"', 'from "@/lib/utils"'
    Set-Content -Path $_.FullName -Value $content -NoNewline
}

Write-Host "✅ Import paths updated!" -ForegroundColor Green

# Ask user for package manager preference
Write-Host ""
Write-Host "Choose your package manager:" -ForegroundColor Cyan
Write-Host "1) npm (default)"
Write-Host "2) bun"
Write-Host "3) yarn"
Write-Host "4) pnpm"
$choice = Read-Host "Enter choice [1-4]"

switch ($choice) {
    "2" {
        Write-Host "📦 Installing dependencies with Bun..." -ForegroundColor Yellow
        bun install
        Write-Host ""
        Write-Host "To start development server:" -ForegroundColor Cyan
        Write-Host "  bun run dev"
        Write-Host "  # or"
        Write-Host "  bun --bun run dev"
    }
    "3" {
        Write-Host "📦 Installing dependencies with Yarn..." -ForegroundColor Yellow
        yarn install
        Write-Host ""
        Write-Host "To start development server:" -ForegroundColor Cyan
        Write-Host "  yarn dev"
    }
    "4" {
        Write-Host "📦 Installing dependencies with pnpm..." -ForegroundColor Yellow
        pnpm install
        Write-Host ""
        Write-Host "To start development server:" -ForegroundColor Cyan
        Write-Host "  pnpm dev"
    }
    default {
        Write-Host "📦 Installing dependencies with npm..." -ForegroundColor Yellow
        npm install
        Write-Host ""
        Write-Host "To start development server:" -ForegroundColor Cyan
        Write-Host "  npm run dev"
    }
}

Write-Host ""
Write-Host "✨ Setup complete!" -ForegroundColor Green
Write-Host ""
Write-Host "To build for production:" -ForegroundColor Cyan
Write-Host "  [package-manager] run build"
Write-Host ""

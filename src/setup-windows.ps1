# 🚀 Automated Portfolio Setup Script for Windows
# This script sets up the portfolio application with Bun, Next.js, React, and Tailwind CSS

Write-Host "🎨 Premium Portfolio Setup" -ForegroundColor Cyan
Write-Host "==========================" -ForegroundColor Cyan
Write-Host ""

# Check if Bun is installed
try {
    $bunVersion = bun --version
    Write-Host "✅ Bun is installed ($bunVersion)" -ForegroundColor Green
    Write-Host ""
} catch {
    Write-Host "❌ Bun is not installed!" -ForegroundColor Red
    Write-Host ""
    Write-Host "Please install Bun first:" -ForegroundColor Yellow
    Write-Host "  powershell -c `"irm bun.sh/install.ps1 | iex`"" -ForegroundColor White
    Write-Host ""
    exit 1
}

# Install dependencies
Write-Host "📦 Installing dependencies..." -ForegroundColor Yellow
bun install

Write-Host ""
Write-Host "✅ Setup complete!" -ForegroundColor Green
Write-Host ""
Write-Host "🚀 To start the development server, run:" -ForegroundColor Cyan
Write-Host "   bun run dev" -ForegroundColor White
Write-Host ""
Write-Host "📖 For more information, see SETUP_INSTRUCTIONS.md" -ForegroundColor Gray
Write-Host ""

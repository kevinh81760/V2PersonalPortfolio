# ⚡ Quick Reference Card

Copy-paste commands for instant productivity!

## 🚀 First Time Setup

### Remove Old Files
```bash
rm App.tsx components/figma/ImageWithFallback.tsx components/ui/utils.ts tailwind.config.ts
```

### Setup with Bun (Fastest!)
```bash
curl -fsSL https://bun.sh/install | bash  # Install Bun
chmod +x scripts/setup-bun.sh && ./scripts/setup-bun.sh
bun --bun run dev
```

### Setup with npm
```bash
chmod +x scripts/setup.sh && ./scripts/setup.sh
npm run dev
```

## 💻 Daily Commands

### Bun (Recommended)
```bash
bun run dev              # Start dev server
bun --bun run dev        # Start with Bun runtime (faster!)
bun run build            # Build for production
bun add [package]        # Install package
bun add -d [package]     # Install dev package
bun remove [package]     # Uninstall package
```

### npm
```bash
npm run dev              # Start dev server
npm run build            # Build for production
npm install [package]    # Install package
npm uninstall [package]  # Uninstall package
```

### Yarn
```bash
yarn dev                 # Start dev server
yarn build               # Build for production
yarn add [package]       # Install package
yarn remove [package]    # Uninstall package
```

### pnpm
```bash
pnpm dev                 # Start dev server
pnpm build               # Build for production
pnpm add [package]       # Install package
pnpm remove [package]    # Uninstall package
```

## 📦 Popular Packages to Add

```bash
# UI Components
bun add @radix-ui/react-dialog
bun add react-icons

# Utilities
bun add date-fns
bun add lodash

# State Management
bun add zustand
bun add jotai

# Forms
bun add react-hook-form@7.55.0
bun add zod

# API
bun add axios
bun add swr

# Dev Dependencies
bun add -d @types/node
bun add -d eslint-plugin-react
```

## 🎨 File Locations

### Edit Loading Messages
`components/features/loading/LoadingSequence.tsx`

### Edit Portfolio Content
`components/features/portfolio/Portfolio.tsx`

### Edit Music Playlist
`components/features/music/SpotifyPlaylist.tsx`

### Edit Colors & Styles
`styles/globals.css`

### Add New Components
`components/features/[feature-name]/ComponentName.tsx`

## 🔧 Common Tasks

### Add a New Page
```bash
# Create file
touch app/about/page.tsx

# Add content
echo "'use client';

export default function About() {
  return <div>About Page</div>;
}" > app/about/page.tsx
```

### Add a New Component
```bash
# Create feature folder and component
mkdir -p components/features/newfeature
touch components/features/newfeature/NewComponent.tsx
```

### Clear Cache & Reinstall
```bash
# Bun
rm -rf node_modules bun.lockb
bun install

# npm
rm -rf node_modules package-lock.json
npm install

# Yarn
rm -rf node_modules yarn.lock
yarn install

# pnpm
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

### Fix Import Issues
```bash
# Update all UI component imports
find components/ui -name "*.tsx" -exec sed -i '' 's/from "\.\/utils"/from "@\/lib\/utils"/g' {} +
```

### Check for Errors
```bash
# TypeScript check
npx tsc --noEmit

# Lint check
npm run lint

# Build check
npm run build
```

## 🌐 Deploy to Vercel

### One-Time Setup
```bash
# Install Vercel CLI
npm install -g vercel
# or
bun add -g vercel

# Login
vercel login

# Deploy
vercel
```

### Via GitHub
1. Push to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your repo
5. Click "Deploy"

## 📱 Test Responsive Design

### Browser DevTools
```
Chrome/Edge: F12 → Device Toolbar
Firefox: F12 → Responsive Design Mode
Safari: Cmd+Option+I → Device Mode
```

### Quick Screen Sizes
- Mobile: 375px
- Tablet: 768px
- Desktop: 1440px
- Large: 1920px

## 🐛 Quick Fixes

### Port 3000 in use
```bash
# macOS/Linux
lsof -ti:3000 | xargs kill -9

# Or use different port
npm run dev -- -p 3001
bun run dev -- -p 3001
```

### Module not found
```bash
# Clear Next.js cache
rm -rf .next

# Restart dev server
bun run dev
```

### Tailwind not working
```bash
# Check globals.css is imported
cat app/layout.tsx | grep globals.css

# Clear cache and restart
rm -rf .next
bun run dev
```

## 📊 Performance Check

```bash
# Build and analyze
npm run build

# Check bundle size in output
# Look for: Route (app) Size First Load JS

# Lighthouse audit
# Chrome DevTools → Lighthouse → Generate Report
```

## 🔑 Environment Variables

### Create .env.local
```bash
echo "NEXT_PUBLIC_API_URL=https://api.example.com
API_SECRET_KEY=your-secret-key" > .env.local
```

### Access in Code
```javascript
// Public (client-side)
const apiUrl = process.env.NEXT_PUBLIC_API_URL;

// Secret (server-side only)
const secretKey = process.env.API_SECRET_KEY;
```

## 📚 Useful URLs

| Resource | URL |
|----------|-----|
| Localhost | http://localhost:3000 |
| Next.js Docs | https://nextjs.org/docs |
| Tailwind Docs | https://tailwindcss.com/docs |
| Bun Docs | https://bun.sh/docs |
| Motion Docs | https://motion.dev |
| GSAP Docs | https://greensock.com/docs |
| Lucide Icons | https://lucide.dev |

## 💡 Pro Tips

### Speed Up Development
```bash
# Use Bun runtime mode
bun --bun run dev

# Preload dependencies
bun install --production=false
```

### Better IntelliSense
```bash
# Ensure jsconfig.json exists
cat jsconfig.json

# Reload VS Code/Cursor
# Cmd/Ctrl + Shift + P → "Reload Window"
```

### Hot Reload Not Working?
```bash
# Edit next.config.js and add:
# webpack: (config) => {
#   config.watchOptions = {
#     poll: 1000,
#     aggregateTimeout: 300,
#   }
#   return config
# }
```

## 🎯 Keyboard Shortcuts

### VS Code / Cursor
- `Cmd/Ctrl + P` - Quick file open
- `Cmd/Ctrl + Shift + P` - Command palette
- `Cmd/Ctrl + B` - Toggle sidebar
- `Cmd/Ctrl + J` - Toggle terminal
- `Cmd/Ctrl + \`` - Open terminal
- `Cmd/Ctrl + ,` - Settings

### Browser DevTools
- `F12` - Open DevTools
- `Cmd/Ctrl + Shift + C` - Inspect element
- `Cmd/Ctrl + Shift + M` - Responsive mode
- `Cmd/Ctrl + R` - Reload
- `Cmd/Ctrl + Shift + R` - Hard reload

## 📋 Pre-Deployment Checklist

- [ ] `bun run build` succeeds
- [ ] No console errors in production
- [ ] All pages load correctly
- [ ] Responsive on mobile/tablet
- [ ] Images load properly
- [ ] Environment variables set (if needed)
- [ ] .env.local NOT in git
- [ ] SEO metadata added
- [ ] Analytics configured (if needed)

## 🆘 Get Help

### Documentation
1. Check `README.md`
2. See `BUN_GUIDE.md` for Bun issues
3. See `JAVASCRIPT_SETUP.md` for config issues
4. Check `TROUBLESHOOTING.md` (if exists)

### Community
- Next.js Discord: https://discord.gg/nextjs
- Bun Discord: https://bun.sh/discord
- Stack Overflow: Tag `next.js`

---

**Bookmark this page for quick access!** 🔖

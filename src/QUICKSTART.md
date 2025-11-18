# ⚡ Quick Start

Get up and running in 60 seconds!

## 🚀 Fastest Setup

```bash
# 1. Clone the repo
git clone <your-repo-url>
cd product-engineer-portfolio

# 2. Remove old files
rm App.tsx components/figma/ImageWithFallback.tsx components/ui/utils.ts tailwind.config.ts

# 3. Run setup (choose your package manager)

# With Bun (FASTEST! 🔥):
chmod +x scripts/setup-bun.sh && ./scripts/setup-bun.sh

# With npm/yarn/pnpm (macOS/Linux):
chmod +x scripts/setup.sh && ./scripts/setup.sh

# Windows (PowerShell as Admin):
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass; .\scripts\setup.ps1

# 4. Start dev server
npm run dev
# or with Bun for 3-10x faster startup:
bun run dev

# 5. Open http://localhost:3000
```

## ✨ That's It!

Your portfolio is now running at **http://localhost:3000**

---

## 📋 What Just Happened?

1. **Cleaned up** - Removed old React files
2. **Updated imports** - All UI components now use `@/lib/utils`
3. **Installed deps** - All npm packages downloaded
4. **Ready to code** - Dev server is running

---

## 🎯 Next Steps

### Customize Your Content

**1. Loading Messages**
Edit: `components/features/loading/LoadingSequence.tsx`
```ts
const loadingSteps = [
  { id: 1, text: 'Your message...', duration: 1200 },
];
```

**2. Portfolio Info**
Edit: `components/features/portfolio/Portfolio.tsx`
- Update social links
- Modify sections
- Add your content

**3. Music Playlist**
Edit: `components/features/music/SpotifyPlaylist.tsx`
```ts
const songs = [
  { id: 1, title: 'Song Name', artist: 'Artist', ... },
];
```

**4. Colors**
Edit: `styles/globals.css`
- Change CSS variables
- Adjust theme

---

## 🛠️ Common Commands

### With npm
```bash
npm run dev      # Start development
npm run build    # Build for production
npm run start    # Run production build
npm run lint     # Check code quality
```

### With Bun (Faster! ⚡)
```bash
bun run dev      # Start development
bun --bun run dev # Even faster with Bun runtime
bun run build    # Build for production
bun run start    # Run production build
bun run lint     # Check code quality

# Installing packages
bun add [package]      # Add dependency
bun add -d [package]   # Add dev dependency
bun remove [package]   # Remove package
```

### With Yarn
```bash
yarn dev         # Start development
yarn build       # Build for production
yarn start       # Run production build
yarn lint        # Check code quality
```

### With pnpm
```bash
pnpm dev         # Start development
pnpm build       # Build for production
pnpm start       # Run production build
pnpm lint        # Check code quality
```

---

## 🎨 Key Features

- ✅ **Boot Sequence** - Premium loading animation
- ✅ **Glass UI** - Apple Vision Pro-inspired
- ✅ **Music Player** - Interactive audio player
- ✅ **Smooth Animations** - GSAP + Motion powered
- ✅ **Responsive** - Works on all devices
- ✅ **TypeScript** - Fully typed
- ✅ **Next.js 15** - Latest framework

---

## 📚 More Info?

| Want to... | See this file |
|------------|---------------|
| Understand setup | `SETUP.md` |
| See architecture | `MIGRATION_GUIDE.md` |
| Follow checklist | `CHECKLIST.md` |
| Learn next steps | `NEXT_STEPS.md` |
| Read full docs | `README.md` |

---

## 🐛 Something Not Working?

### Setup script failed?
Run manual update:
```bash
# Find and replace in all UI components
find components/ui -name "*.tsx" -exec sed -i '' 's/from "\.\/utils"/from "@\/lib\/utils"/g' {} +
```

### Port 3000 in use?
Use a different port:
```bash
npm run dev -- -p 3001
```

### Build errors?
Clear cache and rebuild:
```bash
rm -rf .next
npm run dev
```

---

## 🚀 Ready to Deploy?

**Vercel (1-click):**
1. Push to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repo
4. Click Deploy

---

**Questions?** Check `README.md` for full documentation.

**Happy coding!** 🎉

# ✅ Setup Checklist

Use this checklist after cloning the repository to ensure everything is set up correctly.

## Pre-Clone Checklist

- [ ] Node.js 18.17+ installed (`node --version`)
- [ ] npm/yarn/pnpm installed (`npm --version`)
- [ ] Git installed (`git --version`)
- [ ] Code editor ready (VS Code, Cursor, etc.)

---

## Post-Clone Checklist

### Step 1: Clone & Navigate
- [ ] Repository cloned successfully
- [ ] Navigated into project directory (`cd product-engineer-portfolio`)

### Step 2: Clean Up Old Files
```bash
# Run these commands in your terminal
rm App.tsx
rm components/figma/ImageWithFallback.tsx
rm components/ui/utils.ts
rm tailwind.config.ts
```

- [ ] Deleted `App.tsx`
- [ ] Deleted `components/figma/ImageWithFallback.tsx`
- [ ] Deleted `components/ui/utils.ts`
- [ ] Deleted `tailwind.config.ts` (we use .js version)

### Step 3: Run Setup Script

**Choose your package manager:**

**Option A: With Bun (FASTEST! 🔥):**
```bash
# Install Bun first: curl -fsSL https://bun.sh/install | bash
chmod +x scripts/setup-bun.sh
./scripts/setup-bun.sh
```

**Option B: With npm/yarn/pnpm (macOS/Linux):**
```bash
chmod +x scripts/setup.sh
./scripts/setup.sh
# Choose your preferred package manager when prompted
```

**Option C: Windows (PowerShell):**
```powershell
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
.\scripts\setup.ps1
# Choose your preferred package manager when prompted
```

- [ ] Setup script ran without errors
- [ ] Import paths updated in UI components
- [ ] Dependencies installed successfully
- [ ] Chosen package manager works

### Step 4: Verify Installation

**With Bun:**
```bash
bun run dev
# or faster:
bun --bun run dev
```

**With npm:**
```bash
npm run dev
```

**With Yarn:**
```bash
yarn dev
```

**With pnpm:**
```bash
pnpm dev
```

- [ ] Dev server started successfully
- [ ] No errors in terminal
- [ ] Server running on http://localhost:3000

### Step 5: Test in Browser
Open http://localhost:3000

- [ ] Page loads without errors
- [ ] Loading sequence appears
- [ ] "Initializing Product Engineer System…" text visible
- [ ] Loading bars animate
- [ ] No console errors (check browser DevTools)

### Step 6: Test Full Flow
- [ ] Loading sequence completes (all 4 steps)
- [ ] "PRESS START TO LAUNCH PORTFOLIO" button appears
- [ ] Button has glass effect
- [ ] Clicking button triggers expansion animation
- [ ] Portfolio view loads
- [ ] Navigation tabs work (ABOUT, PROJECTS, EXPERIENCE, AUDIO)
- [ ] Music player visible in AUDIO section
- [ ] Playlist items clickable

---

## Configuration Verification

### TypeScript Configuration
```bash
cat tsconfig.json | grep "@/"
```
- [ ] `@/` path alias configured correctly

### Tailwind Configuration
```bash
ls -la tailwind.config.js
```
- [ ] `tailwind.config.js` exists (JavaScript version)
- [ ] No errors when starting dev server

### JavaScript Configuration
```bash
ls -la jsconfig.json
```
- [ ] `jsconfig.json` exists (enables path aliases & IntelliSense)
- [ ] `@/` path alias configured

### Next.js Configuration
```bash
ls -la next.config.js
```
- [ ] `next.config.js` exists
- [ ] Motion package in transpilePackages

### Package.json
```bash
cat package.json | grep "\"next\""
```
- [ ] Next.js dependency present
- [ ] All required scripts available (dev, build, start, lint)

---

## Import Path Verification

Check a few UI components to ensure imports are updated:

**components/ui/button.tsx:**
```bash
head -10 components/ui/button.tsx | grep "@/lib/utils"
```
- [ ] Imports from `@/lib/utils` (not `./utils`)

**components/ui/card.tsx:**
```bash
head -10 components/ui/card.tsx | grep "@/lib/utils"
```
- [ ] Imports from `@/lib/utils` (not `./utils`)

---

## Build Verification

### Development Build
```bash
npm run dev
```
- [ ] Builds successfully
- [ ] Hot reload works (change a file and see updates)

### Production Build
```bash
npm run build
```
- [ ] Builds without errors
- [ ] No TypeScript errors
- [ ] No Tailwind errors
- [ ] Build completes successfully

### Production Server
```bash
npm run start
```
- [ ] Production server starts
- [ ] App works in production mode
- [ ] No runtime errors

---

## Feature Testing

### Loading Sequence
- [ ] Header animation (PRODUCT ENGINEER logo)
- [ ] All 4 loading steps appear sequentially
- [ ] Progress bars animate
- [ ] Checkmarks appear when steps complete
- [ ] Launch button fades in
- [ ] Glass effect on launch button

### Panel Expansion
- [ ] Smooth GSAP animation
- [ ] Panel expands from 600px to 750px
- [ ] Loading content fades out
- [ ] Portfolio content fades in
- [ ] No layout jumps

### Portfolio Navigation
- [ ] ABOUT tab active by default
- [ ] Glass effect on active tab
- [ ] Smooth transitions between tabs
- [ ] Content changes when clicking tabs

### Music Section
- [ ] Music player visible
- [ ] Playlist visible
- [ ] Playlist items have hover effects
- [ ] Active song highlighted
- [ ] Equalizer animation on active song
- [ ] Play/pause button works
- [ ] Progress bar animates when playing

### Responsive Design
Test at different screen sizes:
- [ ] Desktop (1920px+): Full layout
- [ ] Laptop (1440px): Comfortable layout
- [ ] Tablet (768px): Adjusted layout
- [ ] Mobile (375px): Mobile-friendly

### Ambient Glow
- [ ] Horizontal glow visible behind panel
- [ ] Consistent across all screens
- [ ] Subtle and premium-looking

---

## Code Quality

### Linting
```bash
npm run lint
```
- [ ] No ESLint errors
- [ ] No ESLint warnings (or acceptable warnings noted)

### TypeScript
```bash
npx tsc --noEmit
```
- [ ] No TypeScript errors
- [ ] All types properly defined

---

## Git Setup

### Initialize Git (if needed)
```bash
git init
git add .
git commit -m "Initial commit: Next.js portfolio setup"
```

- [ ] Git initialized
- [ ] Initial commit created
- [ ] `.gitignore` working (node_modules not tracked)

### Push to GitHub
```bash
git remote add origin <your-repo-url>
git branch -M main
git push -u origin main
```

- [ ] Repository created on GitHub
- [ ] Code pushed successfully
- [ ] `.next` folder not in repository (check .gitignore)
- [ ] `node_modules` not in repository

---

## Cursor IDE Setup (Optional)

### Extensions
- [ ] ESLint extension installed
- [ ] Tailwind CSS IntelliSense installed
- [ ] TypeScript support enabled
- [ ] Prettier installed (optional)

### Settings
- [ ] `.cursorrules` file created (see NEXT_STEPS.md)
- [ ] Auto-save enabled
- [ ] Format on save enabled (optional)

### AI Context
- [ ] README.md reviewed
- [ ] SETUP.md reviewed
- [ ] MIGRATION_GUIDE.md reviewed
- [ ] Cursor AI knows project structure

---

## Deployment Preparation

### Vercel Setup
- [ ] Vercel account created
- [ ] GitHub connected to Vercel
- [ ] Project imported to Vercel
- [ ] Auto-deployment enabled

### Environment Variables (if needed)
- [ ] `.env.local` created for local secrets
- [ ] Environment variables added to Vercel dashboard
- [ ] `.env.local` in `.gitignore`

### Build Test
```bash
npm run build
npm run start
```
- [ ] Production build successful
- [ ] App works in production mode
- [ ] No errors in production

---

## Final Verification

### All Files Present
```bash
ls -la app/
ls -la components/features/
ls -la lib/
ls -la styles/
```

- [ ] `app/layout.tsx` exists
- [ ] `app/page.tsx` exists
- [ ] `components/features/loading/` has LoadingSequence.tsx
- [ ] `components/features/portfolio/` has Portfolio.tsx
- [ ] `components/features/music/` has MusicPlayer.tsx & SpotifyPlaylist.tsx
- [ ] `lib/utils.ts` exists
- [ ] `styles/globals.css` exists

### Documentation
- [ ] README.md read
- [ ] SETUP.md reviewed
- [ ] MIGRATION_GUIDE.md understood
- [ ] NEXT_STEPS.md noted

### Ready for Development
- [ ] All checkboxes above completed
- [ ] No blocking errors
- [ ] Development environment working
- [ ] Ready to customize and build

---

## Common Issues & Solutions

### Issue: Setup script fails
**Solution:** Run manual import update (see MIGRATION_GUIDE.md)

### Issue: Module not found errors
**Solution:** 
```bash
npm install
rm -rf .next
npm run dev
```

### Issue: Tailwind not working
**Solution:** Check `globals.css` is imported in `app/layout.tsx`

### Issue: TypeScript errors
**Solution:** 
```bash
npm install --save-dev @types/react @types/react-dom @types/node
```

### Issue: Port 3000 in use
**Solution:** 
```bash
npm run dev -- -p 3001
```

---

## 🎉 Completion

If all items are checked, you're ready to:
1. ✅ Start developing
2. ✅ Customize your portfolio
3. ✅ Deploy to production

**Questions?** See:
- `README.md` - Full documentation
- `SETUP.md` - Detailed setup guide
- `NEXT_STEPS.md` - What to do next

---

**Happy coding!** 🚀

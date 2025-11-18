# ⚡ Quick Start Guide

The fastest way to get this portfolio running.

---

## 🚀 Clone & Run (30 seconds)

```bash
# 1. Clone
git clone <your-repo-url>
cd product-engineer-portfolio

# 2. Install (choose one)
bun install     # Fastest ⚡
npm install     # or npm
yarn install    # or yarn
pnpm install    # or pnpm

# 3. Run
bun run dev     # or npm run dev
# Open: http://localhost:3000
```

---

## 📋 Essential Commands

| Command | What it does |
|---------|-------------|
| `bun run dev` | 🔥 Start dev server (hot reload) |
| `bun run build` | 📦 Build for production |
| `bun run start` | 🚀 Run production build |
| `bun run lint` | 🔍 Check code quality |

> Replace `bun` with `npm`, `yarn`, or `pnpm` if using those.

---

## 🔧 Common Tasks

### Change Content
Edit: `components/features/portfolio/Portfolio.tsx`

### Change Colors
Edit: `tailwind.config.js` or `styles/globals.css`

### Add Components
Create in: `components/features/`, `components/layout/`, or `components/shared/`

### Deploy to Vercel
```bash
git push origin main
# Then import repo on vercel.com
```

---

## 🐛 Quick Fixes

**Port in use?**
```bash
lsof -ti:3000 | xargs kill -9
```

**Modules missing?**
```bash
rm -rf node_modules .next
bun install
```

**Styles broken?**
```bash
rm -rf .next
bun run dev
```

---

## 📂 Key Files

```
app/page.tsx              → Home page
components/features/      → Main components
styles/globals.css        → Global styles
tailwind.config.js        → Theme config
next.config.js            → Next.js config
```

---

## 🎯 File Structure

```
app/
├── layout.tsx           # Root layout
└── page.tsx            # Home (renders Portfolio)

components/
├── features/
│   ├── portfolio/      # Portfolio.tsx
│   └── music/          # MusicPlayer.tsx, SpotifyPlaylist.tsx
├── layout/             # AnimatedGradient.tsx
└── shared/             # ImageWithFallback.tsx
```

---

## 🎨 Tech Stack

- ⚛️ **Next.js 15** - React framework
- 🎨 **Tailwind CSS 4** - Styling
- ✨ **Framer Motion** - Animations
- 🎭 **Lucide React** - Icons
- ⚡ **Bun/npm** - Package manager

---

## 📚 More Info

- 📖 **[SETUP_INSTRUCTIONS.md](./SETUP_INSTRUCTIONS.md)** - Full setup guide
- 🏗️ **[PROJECT_STRUCTURE.md](./PROJECT_STRUCTURE.md)** - Architecture details
- 🤝 **[CONTRIBUTING.md](./CONTRIBUTING.md)** - How to contribute

---

**Need more help?** Read [SETUP_INSTRUCTIONS.md](./SETUP_INSTRUCTIONS.md)

**Ready to customize?** Check [PROJECT_STRUCTURE.md](./PROJECT_STRUCTURE.md)

---

🚀 **Happy coding!**

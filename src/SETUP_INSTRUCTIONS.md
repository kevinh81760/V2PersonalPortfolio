# 🚀 Setup Instructions - Clone & Run Guide

This is a premium portfolio built with **Next.js 15**, **React 18**, and **Tailwind CSS 4**. This guide will help you get it running on your machine.

---

## 📋 Prerequisites

You need **one** of the following package managers installed:

### Option 1: Bun (Recommended - Fastest ⚡)
```bash
# macOS/Linux
curl -fsSL https://bun.sh/install | bash

# Windows (PowerShell)
powershell -c "irm bun.sh/install.ps1 | iex"

# Verify
bun --version
```

### Option 2: Node.js + npm
```bash
# Download from: https://nodejs.org
# Verify
node --version
npm --version
```

---

## 🚀 Quick Start (3 Steps)

### Step 1: Clone the Repository
```bash
git clone <your-repo-url>
cd product-engineer-portfolio
```

### Step 2: Install Dependencies

**With Bun (fastest):**
```bash
bun install
```

**With npm:**
```bash
npm install
```

**With yarn:**
```bash
yarn install
```

**With pnpm:**
```bash
pnpm install
```

### Step 3: Start Development Server

```bash
# Bun
bun run dev

# npm
npm run dev

# yarn
yarn dev

# pnpm
pnpm dev
```

**Open your browser:** [http://localhost:3000](http://localhost:3000)

You should see the portfolio loading! 🎉

---

## 🛠️ Available Scripts

| Command | Description |
|---------|-------------|
| `bun run dev` | Start development server at localhost:3000 |
| `bun run build` | Build optimized production bundle |
| `bun run start` | Start production server |
| `bun run lint` | Run ESLint to check code quality |

> Replace `bun` with `npm`, `yarn`, or `pnpm` if using those package managers.

---

## 📂 Project Structure

```
product-engineer-portfolio/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with metadata
│   └── page.tsx           # Home page (Portfolio component)
│
├── components/            # React components
│   ├── features/
│   │   ├── portfolio/    # Main portfolio UI
│   │   └── music/        # Music player components
│   ├── layout/           # AnimatedGradient
│   └── shared/           # ImageWithFallback utility
│
├── styles/
│   └── globals.css       # Tailwind CSS + custom styles
│
├── lib/
│   └── utils.ts          # Utility functions
│
├── next.config.js        # Next.js configuration
├── tailwind.config.js    # Tailwind CSS configuration
├── jsconfig.json         # Path aliases (@/ support)
└── package.json          # Dependencies
```

---

## 🎨 Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| **Next.js** | 15.0+ | React framework |
| **React** | 18.3+ | UI library |
| **Tailwind CSS** | 4.0 | Styling |
| **Framer Motion** | 12.x | Animations |
| **Lucide React** | Latest | Icons |
| **GSAP** | 3.12+ | Advanced animations |

---

## 🔧 Configuration Files

### `jsconfig.json`
Provides path aliases:
```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./*"]
    }
  }
}
```

This allows imports like:
```javascript
import { Portfolio } from '@/components/features/portfolio/Portfolio'
```

### `next.config.js`
Next.js configuration (currently minimal).

### `tailwind.config.js`
Tailwind CSS customization with emerald accent colors.

---

## 🚀 Production Build

### Build for Production
```bash
bun run build
# or: npm run build
```

This creates an optimized build in `.next/` directory.

### Start Production Server
```bash
bun run start
# or: npm start
```

### Deploy to Vercel (Recommended)

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy on Vercel:**
   - Visit [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Select your GitHub repository
   - Vercel will auto-detect Next.js and deploy! ✨

---

## 🐛 Troubleshooting

### Port 3000 Already in Use
```bash
# Kill the process
lsof -ti:3000 | xargs kill -9

# Or use a different port
PORT=3001 bun run dev
```

### Module Not Found Errors
```bash
# Clean install
rm -rf node_modules .next
bun install
bun run dev
```

### Bun Installation Issues
If Bun doesn't work, just use npm:
```bash
npm install
npm run dev
```

### Styling Not Loading
```bash
# Clear Next.js cache
rm -rf .next
bun run dev
```

---

## 📱 Development Tips

### Hot Reload
- Save any file to see changes instantly
- No need to restart the server

### Path Aliases
Use `@/` for cleaner imports:
```javascript
// ❌ Don't do this
import { Portfolio } from '../../../components/features/portfolio/Portfolio'

// ✅ Do this
import { Portfolio } from '@/components/features/portfolio/Portfolio'
```

### Component Structure
```
components/
├── features/     # Feature-specific (Portfolio, MusicPlayer)
├── layout/       # Layout components (AnimatedGradient)
└── shared/       # Reusable utilities (ImageWithFallback)
```

---

## 🎯 Next Steps

1. ✅ **Customize Content:**
   - Edit `components/features/portfolio/Portfolio.tsx`
   - Update your personal info, projects, experience

2. ✅ **Update Styling:**
   - Modify `styles/globals.css` for theme changes
   - Update `tailwind.config.js` for color palette

3. ✅ **Add Your Images:**
   - Replace placeholder images in Portfolio component
   - Use `ImageWithFallback` component for images

4. ✅ **Deploy:**
   - Push to GitHub
   - Deploy on Vercel (free!)

---

## 📚 Learn More

- **[Next.js Documentation](https://nextjs.org/docs)** - Learn Next.js features
- **[Tailwind CSS Docs](https://tailwindcss.com/docs)** - Styling reference
- **[Framer Motion](https://www.framer.com/motion/)** - Animation library
- **[PROJECT_STRUCTURE.md](./PROJECT_STRUCTURE.md)** - Detailed architecture guide

---

## 🙋 Need Help?

- **Check:** [QUICKSTART.md](./QUICKSTART.md) for common commands
- **Read:** [PROJECT_STRUCTURE.md](./PROJECT_STRUCTURE.md) for architecture
- **Issue?** Create a GitHub issue in your repository

---

**Happy coding! 🚀 Built with Next.js**

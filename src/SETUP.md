# 🚀 Quick Setup Guide

Get your Product Engineer Portfolio running in minutes!

## Prerequisites

- **Node.js** 18.17 or later
- **npm**, **yarn**, or **pnpm**
- **Git**

## Setup Steps

### Option 1: Automated Setup (Recommended)

#### macOS/Linux
```bash
chmod +x scripts/setup.sh
./scripts/setup.sh
```

#### Windows (PowerShell)
```powershell
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
.\scripts\setup.ps1
```

### Option 2: Manual Setup

1. **Clone the repository**
```bash
git clone <your-repo-url>
cd product-engineer-portfolio
```

2. **Update import paths in UI components**

**macOS/Linux:**
```bash
find components/ui -name "*.tsx" -type f -exec sed -i '' 's/from "\.\/utils"/from "@\/lib\/utils"/g' {} +
```

**Windows (PowerShell):**
```powershell
Get-ChildItem -Path components/ui -Filter *.tsx -Recurse | ForEach-Object { 
    (Get-Content $_.FullName) -replace 'from "\./utils"', 'from "@/lib/utils"' | Set-Content $_.FullName 
}
```

**Manual alternative:** Update each file in `components/ui/` to change:
```ts
// FROM:
import { cn } from "./utils";

// TO:
import { cn } from "@/lib/utils";
```

3. **Install dependencies**
```bash
npm install
```

4. **Start development server**
```bash
npm run dev
```

5. **Open your browser**
Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
product-engineer-portfolio/
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Root layout with metadata
│   └── page.tsx                 # Homepage (Loading Sequence)
│
├── components/
│   ├── features/                # Feature-specific components
│   │   ├── loading/            # Boot sequence & loading animations
│   │   ├── music/              # Music player & Spotify playlist
│   │   └── portfolio/          # Portfolio views & navigation
│   │
│   ├── layout/                  # Layout components
│   │   └── AnimatedGradient.tsx
│   │
│   ├── shared/                  # Reusable shared components
│   │   └── ImageWithFallback.tsx
│   │
│   └── ui/                      # shadcn/ui component library
│       └── [43 UI components]
│
├── lib/
│   └── utils.ts                 # Utility functions (cn helper)
│
├── styles/
│   └── globals.css              # Global styles & CSS variables
│
├── public/                      # Static assets (images, fonts, etc.)
│
├── scripts/                     # Setup & utility scripts
│   ├── setup.sh                # Automated setup (macOS/Linux)
│   └── setup.ps1               # Automated setup (Windows)
│
├── guidelines/                  # Project documentation
│   └── Guidelines.md
│
├── next.config.js              # Next.js configuration
├── tsconfig.json               # TypeScript configuration
├── tailwind.config.ts          # Tailwind CSS configuration
├── postcss.config.js           # PostCSS configuration
├── package.json                # Dependencies & scripts
├── .gitignore                  # Git ignore rules
├── .eslintrc.json             # ESLint configuration
├── README.md                   # Project documentation
├── SETUP.md                    # This file
└── MIGRATION_GUIDE.md          # Detailed migration guide
```

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server at http://localhost:3000 |
| `npm run build` | Build optimized production bundle |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint to check code quality |

## Development Workflow

1. **Start dev server**: `npm run dev`
2. **Edit components** in `components/features/`
3. **Edit styles** in `styles/globals.css`
4. **View changes** at http://localhost:3000 (hot reload enabled)

## Import Alias

This project uses the `@/` alias for cleaner imports:

```ts
// ✅ Good
import { LoadingSequence } from '@/components/features/loading/LoadingSequence';
import { cn } from '@/lib/utils';

// ❌ Avoid
import { LoadingSequence } from '../../components/features/loading/LoadingSequence';
import { cn } from '../../../lib/utils';
```

## Key Features to Customize

### 1. Loading Messages
Edit `components/features/loading/LoadingSequence.tsx`:
```ts
const loadingSteps: LoadingStep[] = [
  { id: 1, text: 'Your custom message...', duration: 1200 },
  // Add more steps...
];
```

### 2. Portfolio Content
Edit `components/features/portfolio/Portfolio.tsx`:
- Update navigation sections
- Modify about/projects/experience content
- Customize social links

### 3. Music Playlist
Edit `components/features/music/SpotifyPlaylist.tsx`:
```ts
const songs: Song[] = [
  { id: 1, title: 'Your Song', artist: 'Artist Name', ... },
  // Add more songs...
];
```

### 4. Colors & Theme
Edit `styles/globals.css`:
- Modify CSS variables in `:root`
- Update emerald accent colors
- Adjust glassmorphism effects

### 5. Typography
The project uses Helvetica Neue. To change:
1. Update font imports in `app/layout.tsx`
2. Update `fontFamily` values in components

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your repository
5. Click "Deploy"

Vercel will auto-detect Next.js and configure everything.

### Deploy to Other Platforms

Build the project:
```bash
npm run build
```

The production-ready files will be in `.next/` folder.

## Troubleshooting

### Port 3000 already in use
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9

# Or use a different port
npm run dev -- -p 3001
```

### Module not found errors
- Ensure all imports use `@/` alias
- Check that `tsconfig.json` has correct path configuration
- Run `npm install` to ensure all dependencies are installed

### Tailwind styles not applying
- Check `tailwind.config.ts` content paths
- Ensure `globals.css` is imported in `app/layout.tsx`
- Clear Next.js cache: `rm -rf .next`

### TypeScript errors
- Run `npm install` to ensure all types are installed
- Check `tsconfig.json` configuration
- Restart your IDE/editor

## Working in Cursor

### Recommended Cursor Settings

Add to `.cursorrules` (create if doesn't exist):
```
# Product Engineer Portfolio - Cursor Rules

## Code Style
- Use TypeScript for all new files
- Use functional components with hooks
- Follow the existing component structure
- Use Tailwind CSS for styling
- Maintain Helvetica Neue typography

## Import Style
- Always use @/ alias for imports
- Organize imports: React → Next.js → External → Internal → Styles

## Component Structure
- Place feature components in components/features/[feature-name]/
- Place shared components in components/shared/
- Use the UI library components from components/ui/

## Design Philosophy
- Maintain luxury automotive aesthetic (Mercedes-Benz inspired)
- Preserve glassmorphism effects
- Keep emerald accent color (#34d399)
- Maintain horizontal ambient glow signature
```

### Cursor AI Context

When using Cursor AI, reference:
- `README.md` - Project overview
- `MIGRATION_GUIDE.md` - Architecture details
- `guidelines/Guidelines.md` - Design guidelines

## Next Steps

1. ✅ Complete setup (run setup script or manual steps)
2. 🎨 Customize content (portfolio, music, loading messages)
3. 🎭 Adjust styling (colors, typography, animations)
4. 🔧 Add new features (new portfolio sections, integrations)
5. 🚀 Deploy to Vercel

## Getting Help

- 📖 [Next.js Documentation](https://nextjs.org/docs)
- 🎨 [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- ⚡ [Motion Documentation](https://motion.dev/)
- 🎬 [GSAP Documentation](https://greensock.com/docs/)

---

**Ready to build?** Start with `npm run dev` and open http://localhost:3000 🚀

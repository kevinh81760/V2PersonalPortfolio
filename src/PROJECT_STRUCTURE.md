# 📁 Project Structure & Architecture Guide

This document explains how the entire application is organized and how all parts connect together.

---

## 🎯 Application Flow

```
User loads app
    ↓
app/layout.tsx (Root layout with global styles)
    ↓
app/page.tsx (Main entry point)
    ↓
components/features/portfolio/Portfolio.tsx (Main portfolio interface)
    ↓
├── AnimatedGradient (Background effects)
├── Navigation Bar (GitHub, LinkedIn, Mail icons + Time)
├── Tab System (ABOUT, PROJECTS, EXPERIENCE, AUDIO)
└── MusicPlayer (When AUDIO tab is active)
```

---

## 📂 Folder Structure Explained

```
portfolio-app/
│
├── 📱 app/                          # Next.js App Router (Entry Points)
│   ├── layout.tsx                   # Root layout, wraps entire app
│   │                                # - Imports global styles
│   │                                # - Sets up HTML structure
│   │                                # - Provides font configuration
│   │
│   └── page.tsx                     # Home page (/)
│                                    # - Renders Portfolio component
│                                    # - Main entry point for users
│
├── 🧩 components/                   # All React Components
│   │
│   ├── features/                    # Feature-specific components
│   │   │
│   │   ├── portfolio/              # Portfolio interface
│   │   │   └── Portfolio.tsx       # Main portfolio component
│   │   │                           # - Tab navigation system
│   │   │                           # - Social icons + time display
│   │   │                           # - Content sections (About, Projects, etc.)
│   │   │                           # - Connects to MusicPlayer
│   │   │
│   │   └── music/                  # Music player features
│   │       ├── MusicPlayer.tsx     # Music player UI
│   │       │                       # - Play/pause controls
│   │       │                       # - Track progress
│   │       │                       # - Volume control
│   │       │                       # - Connects to SpotifyPlaylist
│   │       │
│   │       └── SpotifyPlaylist.tsx # Playlist display
│   │                               # - Track list
│   │                               # - Track selection
│   │
│   ├── layout/                     # Layout components
│   │   └── AnimatedGradient.tsx    # Ambient glow background
│   │                               # - Used in Portfolio.tsx
│   │                               # - Creates luxury aesthetic
│   │
│   ├── ui/                         # shadcn/ui components (Reusable UI)
│   │   ├── button.tsx              # Button component
│   │   ├── card.tsx                # Card component
│   │   ├── tabs.tsx                # Tab component (used in Portfolio)
│   │   ├── slider.tsx              # Slider (used in MusicPlayer)
│   │   └── ...                     # 40+ other UI components
│   │
│   ├── figma/                      # Figma-specific components
│   │   └── ImageWithFallback.tsx   # Protected system file
│   │
│   └── shared/                     # Shared utility components
│       └── ImageWithFallback.tsx   # Image component with fallback
│
├── 🎨 styles/                       # Global Styles
│   └── globals.css                  # Tailwind CSS + Custom styles
│                                    # - Tailwind v4 imports
│                                    # - CSS variables
│                                    # - Typography system
│                                    # - Dark theme colors
│
├── 🛠️ lib/                          # Utility Functions
│   └── utils.ts                     # Helper functions
│                                    # - cn() for class merging
│                                    # - Used throughout components
│
├── 📜 scripts/                      # Setup Scripts
│   ├── setup.sh                     # macOS/Linux setup
│   ├── setup.ps1                    # Windows PowerShell setup
│   └── setup-bun.sh                 # Bun-specific setup
│
├── 📋 guidelines/                   # Project Guidelines
│   └── Guidelines.md                # Development standards
│
├── ⚙️ Configuration Files
│   ├── next.config.js               # Next.js configuration
│   ├── tailwind.config.js           # Tailwind CSS configuration
│   ├── postcss.config.js            # PostCSS configuration
│   ├── jsconfig.json                # JavaScript path aliases (@/)
│   ├── bunfig.toml                  # Bun configuration
│   └── package.json                 # Dependencies & scripts
│
└── 📖 Documentation
    ├── SETUP_INSTRUCTIONS.md        # 👈 START HERE (Main setup guide)
    ├── QUICKSTART.md                # Quick reference
    ├── BUN_GUIDE.md                 # Bun-specific info
    └── ... (other docs)
```

---

## 🔗 Component Connections

### Main Component Hierarchy

```
app/page.tsx
    └── Portfolio.tsx (Main container)
        ├── AnimatedGradient (Background)
        ├── Navigation (Social links + Time)
        ├── Tabs (shadcn/ui)
        │   ├── About Section
        │   ├── Projects Section
        │   ├── Experience Section
        │   └── Audio Section
        │       └── MusicPlayer.tsx
        │           └── SpotifyPlaylist.tsx
        └── Footer
```

### Import Flow Example

```javascript
// app/page.tsx
import Portfolio from '@/components/features/portfolio/Portfolio'

// Portfolio.tsx
import { AnimatedGradient } from '@/components/layout/AnimatedGradient'
import { MusicPlayer } from '@/components/features/music/MusicPlayer'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

// MusicPlayer.tsx
import { SpotifyPlaylist } from './SpotifyPlaylist'
import { Slider } from '@/components/ui/slider'
import { Button } from '@/components/ui/button'
```

---

## 🎨 Styling System

### How Styles Work Together

```
globals.css (Base styles + Tailwind)
    ↓
Tailwind classes in components (text-zinc-400, bg-black, etc.)
    ↓
Motion animations (Framer Motion)
    ↓
Glassmorphism effects (backdrop-blur, bg-opacity)
```

### Key Style Variables (in `globals.css`)

- **Colors:** Emerald green accents, zinc grays, black backgrounds
- **Typography:** Inter font, custom font sizes per element
- **Effects:** Glassmorphism, ambient glows, smooth transitions

---

## 📦 Key Dependencies

| Package | Purpose | Used In |
|---------|---------|---------|
| `next` | Framework | Entire app |
| `react` | UI library | All components |
| `tailwindcss` | Styling | All components |
| `motion/react` | Animations | Portfolio, MusicPlayer |
| `lucide-react` | Icons | Portfolio navigation |
| `@radix-ui/*` | UI primitives | shadcn/ui components |
| `class-variance-authority` | Variant styling | Button, Badge, etc. |
| `clsx` + `tailwind-merge` | Class merging | utils.ts → all components |

---

## 🚀 Data Flow

### State Management

```
Portfolio.tsx
    ├── activeTab (state) → Controls which tab is visible
    ├── currentTime (state) → Updates every second for clock
    └── Music player state
        ├── isPlaying (state)
        ├── currentTrack (state)
        ├── progress (state)
        └── volume (state)
```

### Event Flow

```
User clicks tab
    → setActiveTab()
    → Tab content updates
    → If AUDIO tab: MusicPlayer renders
    → If music tab: SpotifyPlaylist renders

User clicks play
    → setIsPlaying(true)
    → Audio element plays
    → Progress updates every 100ms
```

---

## 🎯 Adding New Features

### 1. Adding a New Tab to Portfolio

**Location:** `components/features/portfolio/Portfolio.tsx`

```javascript
// 1. Add to tabs array
const tabs = [
  { id: 'about', label: 'ABOUT' },
  { id: 'projects', label: 'PROJECTS' },
  { id: 'experience', label: 'EXPERIENCE' },
  { id: 'audio', label: 'AUDIO' },
  { id: 'new-tab', label: 'NEW TAB' }, // ← Add here
]

// 2. Add TabsContent
<TabsContent value="new-tab">
  <YourNewComponent />
</TabsContent>
```

### 2. Adding a New Feature Component

```bash
# Create new component
components/features/your-feature/YourComponent.tsx

# Import in Portfolio.tsx or page.tsx
import { YourComponent } from '@/components/features/your-feature/YourComponent'
```

### 3. Adding a New UI Component (shadcn/ui)

```bash
# shadcn/ui components are already included
# Use existing components from components/ui/

# Example:
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
```

### 4. Adding New Styles

**Global styles:** Edit `styles/globals.css`
**Component styles:** Use Tailwind classes in JSX
**Animations:** Use `motion` from `motion/react`

---

## 🔍 Key Files to Know

| File | What It Does | When to Edit |
|------|-------------|--------------|
| `app/page.tsx` | Main entry point | Rarely (just renders Portfolio) |
| `components/features/portfolio/Portfolio.tsx` | Main portfolio UI | Often (main content) |
| `styles/globals.css` | Global styles | For theme changes |
| `package.json` | Dependencies | Adding new packages |
| `next.config.js` | Next.js settings | Build configuration |

---

## 🎨 Design System

### Color Palette
- **Primary:** Emerald Green (`emerald-400`, `emerald-500`)
- **Background:** Black (`bg-black`)
- **Text:** Zinc shades (`text-zinc-400`, `text-zinc-500`)
- **Glass:** `backdrop-blur-xl` + `bg-black/40`

### Typography
- **Font:** Inter (loaded in `app/layout.tsx`)
- **Sizes:** Defined in `globals.css` per HTML element
- **Weights:** Light (300), Normal (400), Medium (500)

### Spacing
- **Consistent gaps:** `gap-6`, `gap-8`, `gap-12`
- **Padding:** `p-6`, `p-8`, `px-12`
- **Margins:** `mt-6`, `mb-8`

---

## 🐛 Debugging Tips

### Component Not Showing?
1. Check if imported correctly: `import { Component } from '@/components/...'`
2. Check if component is exported: `export { Component }`
3. Check console for errors: Open DevTools (F12)

### Styles Not Applying?
1. Check if Tailwind class is correct
2. Check if conflicting styles exist
3. Check `globals.css` for overrides
4. Use `!important` sparingly: `!text-red-500`

### Animation Not Working?
1. Check if `motion` is imported: `import { motion } from 'motion/react'`
2. Check if element is `<motion.div>` not `<div>`
3. Check `framer-motion` variant syntax

---

## 📚 Documentation Index

**Essential Reading:**
1. **SETUP_INSTRUCTIONS.md** - Start here for setup
2. **PROJECT_STRUCTURE.md** (this file) - Understand architecture
3. **QUICKSTART.md** - Quick commands reference

**Specialized Guides:**
- **BUN_GUIDE.md** - Bun-specific information
- **MIGRATION_GUIDE.md** - TypeScript to JavaScript migration
- **Guidelines.md** - Coding standards

---

## 🎯 Quick Reference: "I Want To..."

| Task | Location | File |
|------|----------|------|
| Change main content | Portfolio sections | `components/features/portfolio/Portfolio.tsx` |
| Add new music | Playlist data | `components/features/music/SpotifyPlaylist.tsx` |
| Change colors | CSS variables | `styles/globals.css` |
| Add new page | Create page | `app/your-page/page.tsx` |
| Add animation | Motion component | Any `.tsx` file |
| Change background | Gradient component | `components/layout/AnimatedGradient.tsx` |
| Update navigation | Social links | `components/features/portfolio/Portfolio.tsx` |

---

**Questions?** Check the documentation files or examine similar existing code in the project.

**Built with 💚 using Next.js, React, Tailwind CSS, and Bun**

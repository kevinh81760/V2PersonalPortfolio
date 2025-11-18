# 🚀 Portfolio Setup Instructions

This is a premium portfolio application built with **Next.js**, **React**, **Tailwind CSS**, and **Bun** (JavaScript).

---

## Prerequisites

Before you begin, make sure you have **Bun** installed on your system.

### Install Bun

**macOS/Linux:**
```bash
curl -fsSL https://bun.sh/install | bash
```

**Windows (PowerShell):**
```powershell
powershell -c "irm bun.sh/install.ps1 | iex"
```

Verify installation:
```bash
bun --version
```

---

## Quick Start

### 1. Clone the Repository
```bash
git clone <your-repo-url>
cd <your-repo-name>
```

### 2. Install Dependencies
```bash
bun install
```

### 3. Run Development Server
```bash
bun run dev
```

Your app will be running at **http://localhost:3000** 🎉

---

## Available Scripts

| Command | Description |
|---------|-------------|
| `bun run dev` | Start development server |
| `bun run build` | Build for production |
| `bun run start` | Start production server |
| `bun run lint` | Run ESLint |

---

## Tech Stack

- **Framework:** Next.js 14+ (JavaScript)
- **Styling:** Tailwind CSS v4
- **Package Manager:** Bun
- **UI Library:** shadcn/ui components
- **Animations:** Framer Motion (motion/react)
- **Icons:** Lucide React

---

## Project Structure

```
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── features/         # Feature-specific components
│   │   ├── music/       # Music player components
│   │   └── portfolio/   # Portfolio interface
│   ├── layout/          # Layout components
│   └── ui/              # shadcn/ui components
├── styles/              # Global styles
│   └── globals.css      # Tailwind CSS + custom styles
├── lib/                 # Utility functions
└── public/              # Static assets
```

---

## Configuration Files

- **`bunfig.toml`** - Bun configuration
- **`next.config.js`** - Next.js configuration
- **`tailwind.config.js`** - Tailwind CSS configuration
- **`jsconfig.json`** - JavaScript path aliases
- **`postcss.config.js`** - PostCSS configuration

---

## Troubleshooting

### Port Already in Use
If port 3000 is already in use:
```bash
bun run dev -- -p 3001
```

### Clear Cache
If you encounter issues:
```bash
rm -rf .next node_modules bun.lockb
bun install
bun run dev
```

### Bun Not Found
Make sure Bun is in your PATH. Restart your terminal after installation.

---

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Import project on [Vercel](https://vercel.com)
3. Vercel will auto-detect Next.js
4. Deploy! 🚀

### Other Platforms
Build the production version:
```bash
bun run build
bun run start
```

---

## Features

✨ **Premium Loading Sequence** - Mercedes-Benz COMAND inspired UI  
🎨 **Glassmorphism Design** - Apple Vision Pro aesthetic  
🎵 **Music Player** - Integrated Spotify-style player  
📱 **Responsive** - Works on all devices  
⚡ **Fast** - Powered by Bun for instant startup

---

## Support

For issues or questions, please check the documentation files:
- `QUICKSTART.md` - Quick reference guide
- `BUN_GUIDE.md` - Bun-specific information

---

**Built with 💚 using Bun**

# 🎨 Premium Portfolio Application

A luxury portfolio website showcasing Product Engineer identity, blending Mercedes-Benz COMAND system aesthetics with modern minimalism.

![Tech Stack](https://img.shields.io/badge/Next.js-14+-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-18+-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Tailwind](https://img.shields.io/badge/Tailwind-4.0-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Bun](https://img.shields.io/badge/Bun-1.0+-000000?style=for-the-badge&logo=bun)

---

## ✨ Features

🎭 **Mercedes S-Class Dashboard Aesthetic** - Luxury automotive UI  
🌊 **Apple Vision Pro Glass Effects** - Premium glassmorphism  
🎵 **Integrated Music Player** - Spotify-style audio interface  
⚡ **Smooth Animations** - Framer Motion powered  
🎨 **Emerald Green Accents** - Sophisticated color palette  
📱 **Fully Responsive** - Optimized for all devices  
🚀 **Lightning Fast** - Powered by Bun  

---

## 🚀 Quick Start

### Prerequisites
- [Bun](https://bun.sh) installed on your system

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd product-engineer-portfolio

# Install dependencies with Bun
bun install

# OR use npm/yarn if you don't have Bun
npm install
# yarn install

# Start development server
bun run dev   # or: npm run dev

# Open browser
# http://localhost:3000
```

Visit **http://localhost:3000** 🎉

> **Note:** This project works with **npm**, **yarn**, **pnpm**, or **Bun**. Bun is recommended for fastest performance.

---

## 📖 Documentation

| Document | Description |
|----------|-------------|
| **[SETUP_INSTRUCTIONS.md](./SETUP_INSTRUCTIONS.md)** | Complete setup guide with troubleshooting |
| **[PROJECT_STRUCTURE.md](./PROJECT_STRUCTURE.md)** | Architecture guide & how everything connects |
| **[QUICKSTART.md](./QUICKSTART.md)** | Quick reference for common commands |

💡 **New to the project?** Start with [SETUP_INSTRUCTIONS.md](./SETUP_INSTRUCTIONS.md), then read [PROJECT_STRUCTURE.md](./PROJECT_STRUCTURE.md) to understand how the app works.

---

## 🏗️ Tech Stack

- **Framework:** Next.js 14+ (App Router)
- **Language:** JavaScript
- **Styling:** Tailwind CSS v4 (Custom Components)
- **Package Manager:** Bun
- **Animations:** Framer Motion (motion/react)
- **Icons:** Lucide React

---

## 📂 Project Structure

```
portfolio-app/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── features/         # Feature components
│   │   ├── portfolio/   # Main portfolio interface
│   │   └── music/       # Music player
│   ├── layout/          # Layout components (AnimatedGradient)
│   └── shared/          # Shared utilities (ImageWithFallback)
├── styles/              # Global styles
│   └── globals.css      # Tailwind + custom CSS
└── lib/                 # Utilities
```

📖 For detailed structure explanation, see [PROJECT_STRUCTURE.md](./PROJECT_STRUCTURE.md)

---

## 🎨 Design Philosophy

### Visual Aesthetic
- **Mercedes-Benz COMAND** inspired interface
- **Apple Vision Pro** glass effects
- **Swiss precision** in typography and spacing
- **Emerald green** accent color palette

### UX Principles
- **Smooth animations** for premium feel
- **Clear hierarchy** with luxury typography
- **Minimal interactions** for sophistication
- **Immersive experience** with ambient effects

---

## 🛠️ Available Scripts

| Command | Description |
|---------|-------------|
| `bun run dev` | Start development server |
| `bun run build` | Build for production |
| `bun run start` | Start production server |
| `bun run lint` | Run ESLint |

---

## 🎯 Key Features

### 1. Portfolio Interface
- **ABOUT** - Personal introduction
- **PROJECTS** - Showcase of work
- **EXPERIENCE** - Professional history
- **AUDIO** - Integrated music player

### 2. Music Player
- Spotify-style controls
- Track progress visualization
- Volume control
- Playlist management

### 3. Premium Aesthetics
- Ambient glow effects
- Glassmorphism UI
- Smooth tab transitions
- Shake animations on hover

---

## 🚀 Deployment

### Vercel (Recommended)

```bash
# Push to GitHub
git push origin main

# Deploy on Vercel
# Visit vercel.com and import your repository
```

### Manual Deployment

```bash
# Build for production
bun run build

# Start production server
bun run start
```

---

## 📱 Browser Support

- ✅ Chrome (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge

---

## 🤝 Contributing

This is a personal portfolio project, but feel free to fork and adapt for your own use!

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🙏 Acknowledgments

- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library (motion/react)
- **Lucide** - Beautiful icon library
- **Bun** - Lightning-fast JavaScript runtime
- **Next.js** - React framework for production

---

## 🎯 Customization Guide

### 1. Update Personal Information
Edit `components/features/portfolio/Portfolio.tsx`:
- Replace name, title, bio
- Update social links (GitHub, LinkedIn, Email)
- Add your projects and experience

### 2. Change Colors
Edit `tailwind.config.js` or `styles/globals.css`:
- Update emerald accent to your brand color
- Modify glassmorphism effects

### 3. Add Images
Use `ImageWithFallback` component:
```jsx
import { ImageWithFallback } from '@/components/shared/ImageWithFallback'

<ImageWithFallback src="/your-image.jpg" alt="Description" />
```

---

## 📞 Contact

Replace these with your own:
- **GitHub:** [Your GitHub](https://github.com/yourusername)
- **LinkedIn:** [Your LinkedIn](https://linkedin.com/in/yourusername)
- **Email:** your.email@example.com

---

## 🌟 Show Your Support

If you found this helpful:
- ⭐ Star this repository
- 🍴 Fork it for your own portfolio
- 📢 Share it with others

---

**Built with 💚 using Next.js 15, React 18, Tailwind CSS 4, and Framer Motion**

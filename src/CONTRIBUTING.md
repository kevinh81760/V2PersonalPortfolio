# 🤝 Contributing Guide

Thank you for your interest in this project! While this is primarily a personal portfolio, you're welcome to fork and adapt it for your own use.

---

## 🍴 Forking This Project

### For Your Own Portfolio

1. **Fork this repository** on GitHub
2. **Clone your fork:**
   ```bash
   git clone https://github.com/YOUR-USERNAME/product-engineer-portfolio
   cd product-engineer-portfolio
   ```
3. **Install dependencies:**
   ```bash
   bun install  # or npm install
   ```
4. **Customize the content** in `components/features/portfolio/Portfolio.tsx`
5. **Deploy to Vercel** or your preferred hosting

---

## 🛠️ Development Guidelines

### Code Style

- ✅ Use **functional components** with hooks
- ✅ Follow **Next.js App Router** conventions
- ✅ Use **Tailwind CSS** for styling (no inline styles)
- ✅ Use **motion/react** (Framer Motion) for animations
- ✅ Use **lucide-react** for icons
- ✅ Keep components **small and focused**

### File Naming

```
PascalCase.tsx    → Components (Portfolio.tsx, MusicPlayer.tsx)
kebab-case.css    → Stylesheets (globals.css)
camelCase.js      → Utilities (utils.ts)
```

### Folder Structure

```
components/
├── features/     # Feature-specific (Portfolio, Music)
├── layout/       # Layout components
└── shared/       # Reusable utilities
```

---

## 🎨 Design Principles

1. **Luxury First** - Mercedes S-Class dashboard aesthetic
2. **Glassmorphism** - Apple Vision Pro inspired effects
3. **Smooth Animations** - 60fps animations with Framer Motion
4. **Emerald Accents** - Consistent color palette
5. **Responsive** - Mobile-first approach

---

## 🧪 Testing Changes

```bash
# Start dev server
bun run dev

# Test production build
bun run build
bun run start

# Run linting
bun run lint
```

---

## 📝 Pull Request Process

If you have improvements to suggest:

1. **Create an issue first** describing the change
2. **Fork the repo** and create a feature branch
3. **Make your changes** following the code style
4. **Test thoroughly** on localhost
5. **Submit a PR** with a clear description

---

## 🎯 Areas for Contribution

- 🐛 **Bug Fixes** - Report or fix issues
- 📚 **Documentation** - Improve guides
- ♿ **Accessibility** - A11y improvements
- ⚡ **Performance** - Optimization suggestions
- 🎨 **Design** - UI/UX enhancements

---

## 📜 License

This project is licensed under the MIT License. See [LICENSE](./LICENSE) for details.

You're free to:
- ✅ Use this code for your own portfolio
- ✅ Modify and adapt it
- ✅ Deploy it commercially or personally

Please:
- 📌 Give credit if you found this helpful
- 🌟 Star the repo if you like it!

---

## 🙏 Thank You

Thanks for checking out this project! Feel free to adapt it for your own needs.

**Built with 💚 using Next.js, React, and Tailwind CSS**

# 🔥 Bun Guide - Lightning Fast Development

Bun is a fast all-in-one JavaScript runtime & toolkit designed to replace Node.js. It's **3-10x faster** than npm/yarn for most operations!

## Why Use Bun?

- ⚡ **3-10x faster** than npm install
- 🚀 **Instant** module resolution
- 📦 **Drop-in replacement** for npm, yarn, pnpm
- 🔧 **Built-in** test runner, bundler, transpiler
- 💾 **Lower memory usage**
- 🔥 **Hot reload** that actually works

## Installing Bun

### macOS & Linux
```bash
curl -fsSL https://bun.sh/install | bash
```

### Windows
```powershell
powershell -c "irm bun.sh/install.ps1 | iex"
```

### Verify Installation
```bash
bun --version
```

## Quick Start with This Project

### 1. Clone and Setup
```bash
git clone <your-repo-url>
cd product-engineer-portfolio

# Remove old TypeScript config
rm tailwind.config.ts

# Run Bun setup script
chmod +x scripts/setup-bun.sh
./scripts/setup-bun.sh
```

### 2. Start Development
```bash
# Standard mode
bun run dev

# Bun runtime mode (FASTEST! 🔥)
bun --bun run dev
```

## Bun Commands for This Project

### Development
```bash
bun run dev              # Start Next.js dev server (fast)
bun --bun run dev        # Start with Bun runtime (faster!)
```

### Building
```bash
bun run build            # Build for production
bun run start            # Run production build
```

### Package Management
```bash
bun install              # Install all dependencies
bun add [package]        # Add dependency
bun add -d [package]     # Add dev dependency
bun remove [package]     # Remove package
bun update              # Update all packages
```

### Code Quality
```bash
bun run lint            # Run ESLint
```

### Testing (when you add tests)
```bash
bun test                # Run tests with Bun's built-in test runner
bun test --watch        # Watch mode
```

## Performance Comparison

| Operation | npm | Bun | Speedup |
|-----------|-----|-----|---------|
| Install (cold) | ~30s | ~3s | **10x faster** |
| Install (warm) | ~15s | ~0.5s | **30x faster** |
| Dev server start | ~3s | ~1s | **3x faster** |
| Module resolution | Standard | Near-instant | **Much faster** |

## Bun Configuration

This project includes a `bunfig.toml` file with optimized settings:

```toml
[install]
production = false    # Install dev dependencies
peer = true          # Auto-install peer deps
registry = "https://registry.npmjs.org/"

[install.lockfile]
save = true          # Save exact versions
print = "summary"    # Show install summary

[run]
bun = true           # Use Bun runtime by default
```

## Bun Runtime vs Node.js

### Standard Mode (Node.js runtime)
```bash
bun run dev
# Uses Node.js to run Next.js
# Compatible with all Next.js features
# Good compatibility, fast
```

### Bun Runtime Mode (Fastest!)
```bash
bun --bun run dev
# Uses Bun's JavaScript engine
# 2-3x faster startup
# Near-instant module resolution
# May have minor compatibility differences
```

**Recommendation:** Use `bun --bun run dev` for development, standard `bun run build` for production builds.

## Migrating from npm/yarn

### If you have package-lock.json
```bash
rm package-lock.json
bun install
```

### If you have yarn.lock
```bash
rm yarn.lock
bun install
```

### If you have pnpm-lock.yaml
```bash
rm pnpm-lock.yaml
bun install
```

Bun will create a `bun.lockb` file (binary format, faster to read).

## Common Bun Commands

### Package Management
```bash
bun add react              # Add latest version
bun add react@18.3.1       # Add specific version
bun add -d typescript      # Add dev dependency
bun add --global vercel    # Install globally
bun remove package-name    # Uninstall package
bun update                 # Update all packages
bun update package-name    # Update specific package
bun outdated              # Check for outdated packages
```

### Running Scripts
```bash
bun run dev               # Run script from package.json
bun run build
bun run start
bun run lint
```

### Direct File Execution
```bash
bun index.js              # Run JavaScript file
bun --watch index.js      # Run with auto-reload
```

### Testing (when you add tests)
```bash
bun test                  # Run all tests
bun test file.test.js     # Run specific test
bun test --watch          # Watch mode
bun test --coverage       # With coverage
```

## Bun Features for This Project

### 1. Fast Package Installation
```bash
# Instead of:
npm install

# Use:
bun install

# 3-10x faster! ⚡
```

### 2. Instant Development Server
```bash
# Instead of:
npm run dev

# Use:
bun --bun run dev

# Faster startup and hot reload! 🔥
```

### 3. Built-in TypeScript Support
```bash
# Bun automatically handles TypeScript
# No need for ts-node or tsx

bun run file.ts  # Just works!
```

### 4. Environment Variables
```bash
# Bun automatically loads .env files
# No need for dotenv package

# Create .env:
# API_KEY=your-key-here

# Access in code:
console.log(process.env.API_KEY)
```

## Performance Tips

### 1. Use Bun Runtime for Development
```bash
# Faster startup and module resolution
bun --bun run dev
```

### 2. Use CI Cache
```yaml
# In GitHub Actions
- uses: oven-sh/setup-bun@v1
  with:
    bun-version: latest

- name: Install dependencies
  run: bun install --frozen-lockfile
```

### 3. Optimize bunfig.toml
Already configured for you in this project!

### 4. Use Bun's Built-in Tools
```bash
# Instead of webpack/rollup:
bun build ./index.js --outdir ./dist

# Instead of tsx/ts-node:
bun run file.ts
```

## Troubleshooting

### Bun command not found
```bash
# Restart your terminal or run:
source ~/.bashrc
# or
source ~/.zshrc
```

### Permission errors on macOS/Linux
```bash
chmod +x scripts/setup-bun.sh
```

### Compatibility issues
```bash
# If you encounter issues, switch to standard mode:
bun run dev  # Instead of bun --bun run dev
```

### Clear cache
```bash
rm -rf node_modules
rm bun.lockb
bun install
```

## Bun vs npm/yarn/pnpm

| Feature | npm | Yarn | pnpm | Bun |
|---------|-----|------|------|-----|
| Speed | ⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| Disk usage | Medium | Medium | Low | Low |
| TypeScript | External | External | External | Built-in |
| Test runner | External | External | External | Built-in |
| Bundler | External | External | External | Built-in |
| Hot reload | Standard | Standard | Standard | Instant |

## Recommended Workflow

### Development
```bash
# Start dev server with Bun runtime (fastest!)
bun --bun run dev
```

### Adding Packages
```bash
# Add new dependency
bun add motion

# Add dev dependency
bun add -d eslint
```

### Production Build
```bash
# Build (uses Node.js for best Next.js compatibility)
bun run build

# Test production build
bun run start
```

### Deployment
```bash
# Build is compatible with all Node.js environments
bun run build

# Deploy to Vercel/Netlify/etc as usual
```

## Resources

- 📖 [Official Bun Documentation](https://bun.sh/docs)
- 🎯 [Bun GitHub](https://github.com/oven-sh/bun)
- 💬 [Bun Discord](https://bun.sh/discord)
- 📦 [npm to Bun Migration Guide](https://bun.sh/docs/cli/install)

## FAQ

### Is Bun production-ready?
Yes! Bun 1.0 was released in September 2023 and is stable for production use.

### Will my Next.js app work with Bun?
Yes! Bun is compatible with Next.js. Use standard `bun run dev` for full compatibility.

### Can I deploy to Vercel with Bun?
Yes! The build output is standard Next.js, works everywhere.

### Should I use Bun runtime mode?
For development: Yes! (`bun --bun run dev`)  
For production builds: Use standard mode for maximum compatibility.

### What about CI/CD?
Bun works great in CI/CD and can speed up your builds significantly!

---

**Ready to go fast?** 🔥

```bash
bun --bun run dev
```

Enjoy lightning-fast development! ⚡

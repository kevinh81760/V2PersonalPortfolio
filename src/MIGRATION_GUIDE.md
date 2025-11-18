# Migration Guide: Next.js Setup

This project has been converted to Next.js 15 with the App Router. Follow these steps to complete the setup in your local environment.

## Quick Start

After cloning the repository, run this command to update all import paths:

```bash
# macOS/Linux
find components/ui -name "*.tsx" -type f -exec sed -i '' 's/from "\.\/utils"/from "@\/lib\/utils"/g' {} +

# Windows (PowerShell)
Get-ChildItem -Path components/ui -Filter *.tsx -Recurse | ForEach-Object { (Get-Content $_.FullName) -replace 'from "\./utils"', 'from "@/lib/utils"' | Set-Content $_.FullName }
```

Or manually update each file in `/components/ui/` to change:
```ts
// FROM:
import { cn } from "./utils";

// TO:
import { cn } from "@/lib/utils";
```

## Installation Steps

1. **Install Dependencies**
```bash
npm install
```

2. **Run Development Server**
```bash
npm run dev
```

3. **Open Browser**
Navigate to [http://localhost:3000](http://localhost:3000)

## File Structure Changes

### Old Structure (React)
```
├── App.tsx
├── components/
└── styles/
```

### New Structure (Next.js)
```
├── app/
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Homepage
├── components/
│   ├── features/           # Feature components
│   ├── layout/             # Layout components
│   ├── shared/             # Shared components
│   └── ui/                 # UI library
├── lib/
│   └── utils.ts            # Utility functions
├── styles/
│   └── globals.css         # Global styles
└── public/                 # Static assets
```

## Key Changes

1. **Entry Point**: `App.tsx` → `app/page.tsx`
2. **Import Alias**: Relative imports → `@/` alias
3. **Client Components**: Added `'use client'` directive where needed
4. **Utils Location**: `components/ui/utils.ts` → `lib/utils.ts`

## Configuration Files Added

- `next.config.js` - Next.js configuration
- `tsconfig.json` - TypeScript configuration with path aliases
- `tailwind.config.ts` - Tailwind CSS configuration
- `postcss.config.js` - PostCSS configuration
- `.eslintrc.json` - ESLint configuration
- `.gitignore` - Git ignore rules
- `package.json` - Dependencies and scripts

## Path Alias (`@/`)

All imports now use the `@/` alias for cleaner paths:

```ts
// Before
import { LoadingSequence } from './components/LoadingSequence';
import { AnimatedGradient } from '../../layout/AnimatedGradient';

// After
import { LoadingSequence } from '@/components/features/loading/LoadingSequence';
import { AnimatedGradient } from '@/components/layout/AnimatedGradient';
```

## Development Workflow

### Local Development
```bash
npm run dev
```

### Production Build
```bash
npm run build
npm run start
```

### Linting
```bash
npm run lint
```

## Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Import to Vercel
3. Deploy automatically

### Manual Deployment
```bash
npm run build
```
Output will be in `.next/` folder

## Troubleshooting

### Issue: Module not found errors
**Solution**: Make sure all UI components import from `@/lib/utils` instead of `./utils`

### Issue: "use client" errors
**Solution**: Ensure interactive components have `'use client'` directive at the top

### Issue: Path alias not working
**Solution**: Verify `tsconfig.json` has the correct paths configuration:
```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./*"]
    }
  }
}
```

### Issue: Tailwind not working
**Solution**: Ensure `tailwind.config.ts` includes all content paths:
```ts
content: [
  './pages/**/*.{js,ts,jsx,tsx,mdx}',
  './components/**/*.{js,ts,jsx,tsx,mdx}',
  './app/**/*.{js,ts,jsx,tsx,mdx}',
]
```

## Next Steps

1. ✅ Clone repository
2. ✅ Run import update script (above)
3. ✅ Install dependencies
4. ✅ Start development server
5. 🎨 Customize content
6. 🚀 Deploy to Vercel

## Support

For issues or questions:
- Check Next.js docs: https://nextjs.org/docs
- Review App Router guide: https://nextjs.org/docs/app
- Check this project's README.md

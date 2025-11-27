import { motion } from 'motion/react';

interface GridShimmerProps {
  hasPlayedAnimation?: boolean;
}

export function GridShimmer({ hasPlayedAnimation = false }: GridShimmerProps) {
  return (
    <motion.div
      initial={hasPlayedAnimation ? { opacity: 0.12 } : { opacity: 0 }}
      animate={{ opacity: 0.12 }}
      transition={hasPlayedAnimation ? {
        duration: 0
      } : {
        duration: 2,
        delay: 1.8,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="absolute inset-0 pointer-events-none"
      style={{
        maskImage: 'radial-gradient(ellipse 80% 60% at center, black 20%, transparent 70%)',
        WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at center, black 20%, transparent 70%)',
      }}
    >
      {/* SVG Grid Pattern with Glow */}
      <svg
        className="w-full h-full"
        style={{
          filter: 'drop-shadow(0 0 2px rgba(255, 255, 255, 0.4)) drop-shadow(0 0 4px rgba(255, 255, 255, 0.2))',
        }}
      >
        <defs>
          {/* Define the grid pattern */}
          <pattern
            id="grid-pattern"
            x="0"
            y="0"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            {/* Horizontal line */}
            <line
              x1="0"
              y1="0"
              x2="40"
              y2="0"
              stroke="#FFFFFF"
              strokeWidth="0.5"
              opacity="1"
            />
            {/* Vertical line */}
            <line
              x1="0"
              y1="0"
              x2="0"
              y2="40"
              stroke="#FFFFFF"
              strokeWidth="0.5"
              opacity="1"
            />
          </pattern>
          
          {/* Subtle glow filter */}
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="1" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        
        {/* Apply the pattern */}
        <rect
          width="100%"
          height="100%"
          fill="url(#grid-pattern)"
          filter="url(#glow)"
        />
      </svg>
    </motion.div>
  );
}


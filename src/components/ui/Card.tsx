import { ReactNode } from 'react';
import { cn } from '../../lib/utils';

interface CardProps {
  children: ReactNode;
  className?: string;
  variant?: 'glass' | 'glass-nav' | 'default';
}

export function Card({ children, className, variant = 'default' }: CardProps) {
  const variantClasses = {
    glass: 'glass-card',
    'glass-nav': 'glass-nav',
    default: 'bg-zinc-900/40 border border-zinc-800/50',
  };

  return (
    <div className={cn('rounded-xl', variantClasses[variant], className)}>
      {children}
    </div>
  );
}

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  contentClassName?: string;
}

/**
 * GlassCard - Liquid glass effect card with backdrop blur
 * Used for premium UI elements with depth
 */
export function GlassCard({ children, className, contentClassName }: GlassCardProps) {
  return (
    <div 
      className={cn(
        'relative overflow-hidden rounded-xl p-5 border border-white/20',
        'shadow-[0_6px_6px_rgba(0,0,0,0.2),0_0_20px_rgba(0,0,0,0.1)]',
        className
      )} 
      style={{ background: 'transparent' }}
    >
      {/* Liquid Glass background with blur */}
      <div 
        className="absolute inset-0 rounded-xl glass-effect"
      />
      
      {/* Content wrapper */}
      <div className={cn('relative z-10', contentClassName)}>{children}</div>
    </div>
  );
}

/**
 * OLEDDisplay - Premium OLED-style display container
 * Used for music player and other digital displays
 */
export function OLEDDisplay({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn('bg-black rounded-xl p-4 border border-zinc-800/60 shadow-[inset_0_4px_20px_rgba(0,0,0,0.9)]', className)}>
      <div className="oled-display rounded-lg p-3">
        {children}
      </div>
    </div>
  );
}

import { ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '../../lib/utils';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'glass';
  size?: 'sm' | 'md' | 'lg';
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    const baseStyles = 'btn-base transition-smooth';

    const variants = {
      primary: 'bg-linear-to-b from-emerald-400 to-emerald-500 text-black hover:from-emerald-300 hover:to-emerald-400 shadow-2xl shadow-emerald-500/40',
      secondary: 'bg-zinc-900/60 border border-zinc-700/50 text-zinc-300 hover:bg-zinc-800/60 hover:border-zinc-600/50 shadow-lg hover:shadow-xl',
      ghost: 'text-zinc-400 hover:text-white hover:bg-zinc-800/40',
      glass: 'glass-nav border border-white/20 text-white hover:bg-white/20',
};

    const sizes = {
      sm: 'px-3 py-1.5 text-sm',
      md: 'px-4 py-2 text-base',
      lg: 'px-6 py-3 text-lg',
    };

  return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
      </button>
  );
}
);

Button.displayName = 'Button';

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'active';
}

/**
 * IconButton - Circular button for icons
 * Used in music player controls and other icon-based actions
 */
export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ className, size = 'md', variant = 'default', children, ...props }, ref) => {
    const sizes = {
      sm: 'w-8 h-8',
      md: 'w-9 h-9',
      lg: 'w-12 h-12',
    };

    const variants = {
      default: 'bg-zinc-900/60 border border-zinc-700/50 hover:bg-zinc-800/60 hover:border-zinc-600/50',
      active: 'bg-linear-to-b from-emerald-400 to-emerald-500 hover:from-emerald-300 hover:to-emerald-400 shadow-2xl shadow-emerald-500/40',
    };

  return (
    <button
        ref={ref}
        className={cn(
          'rounded-full flex items-center justify-center',
          'transition-all duration-300 shadow-lg hover:shadow-xl',
          sizes[size],
          variants[variant],
          className
        )}
        {...props}
      >
        {children}
    </button>
  );
}
);

IconButton.displayName = 'IconButton';

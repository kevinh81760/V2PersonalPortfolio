import { ReactNode } from 'react';
import { cn } from '../../lib/utils';

interface TypographyProps {
  children: ReactNode;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
}

// Heading Components
export function HeadingPrimary({ children, className, as = 'h1' }: TypographyProps) {
  const Component = as;
  return <Component className={cn('heading-primary', className)}>{children}</Component>;
}

export function HeadingSecondary({ children, className, as = 'h2' }: TypographyProps) {
  const Component = as;
  return <Component className={cn('heading-secondary', className)}>{children}</Component>;
}

export function HeadingTertiary({ children, className, as = 'h3' }: TypographyProps) {
  const Component = as;
  return <Component className={cn('heading-tertiary', className)}>{children}</Component>;
}

export function HeadingSmall({ children, className, as = 'h4' }: TypographyProps) {
  const Component = as;
  return <Component className={cn('heading-small', className)}>{children}</Component>;
}

// Text Components
export function TextBody({ children, className, as = 'p' }: TypographyProps) {
  const Component = as;
  return <Component className={cn('text-body', className)}>{children}</Component>;
}

export function TextSmall({ children, className, as = 'span' }: TypographyProps) {
  const Component = as;
  return <Component className={cn('text-small', className)}>{children}</Component>;
}

export function TextTiny({ children, className, as = 'span' }: TypographyProps) {
  const Component = as;
  return <Component className={cn('text-tiny', className)}>{children}</Component>;
}

// Label Components
export function TextLabel({ children, className, as = 'span' }: TypographyProps) {
  const Component = as;
  return <Component className={cn('text-label', className)}>{children}</Component>;
}

export function TextLabelSmall({ children, className, as = 'span' }: TypographyProps) {
  const Component = as;
  return <Component className={cn('text-label-small', className)}>{children}</Component>;
}

export function TextNav({ children, className, as = 'span' }: TypographyProps) {
  const Component = as;
  return <Component className={cn('text-nav', className)}>{children}</Component>;
}

export function TextBrand({ children, className, as = 'span' }: TypographyProps) {
  const Component = as;
  return <Component className={cn('text-brand', className)}>{children}</Component>;
}

export function TextTime({ children, className, as = 'div' }: TypographyProps) {
  const Component = as;
  return <Component className={cn('text-time tabular-nums', className)}>{children}</Component>;
}

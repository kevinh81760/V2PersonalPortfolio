import { useEffect, useRef } from 'react';
import Lenis from 'lenis';

interface LenisOptions {
  duration?: number;
  easing?: (t: number) => number;
  orientation?: 'vertical' | 'horizontal';
  smoothWheel?: boolean;
  smoothTouch?: boolean;
  wheelMultiplier?: number;
  touchMultiplier?: number;
  infinite?: boolean;
}

/**
 * Custom hook to add Lenis smooth scroll to a specific container element
 * @param containerRef - React ref to the scrollable container
 * @param options - Optional Lenis configuration options
 * @returns Lenis instance (for programmatic control if needed)
 */
export function useLenisScroll(
  containerRef: React.RefObject<HTMLElement | null>,
  options?: LenisOptions
) {
  const lenisRef = useRef<Lenis | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    // Wait for the container to be available
    if (!containerRef.current) return;

    // Default Lenis options optimized for smooth experience
    const defaultOptions: LenisOptions = {
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
      smoothTouch: false, // Disable on touch devices for better native feel
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    };

    // Initialize Lenis with the container element
    lenisRef.current = new Lenis({
      ...defaultOptions,
      ...options,
      wrapper: containerRef.current,
      content: containerRef.current,
    });

    // RAF loop for smooth scroll animation
    function raf(time: number) {
      lenisRef.current?.raf(time);
      rafRef.current = requestAnimationFrame(raf);
    }

    rafRef.current = requestAnimationFrame(raf);

    // Cleanup function
    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      lenisRef.current?.destroy();
      lenisRef.current = null;
    };
  }, [containerRef, options]);

  return lenisRef.current;
}


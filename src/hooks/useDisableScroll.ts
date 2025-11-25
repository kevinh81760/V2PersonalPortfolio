import { useEffect } from 'react';

export default function useDisableScroll() {
  useEffect(() => {
    // Save original overflow value
    const originalOverflow = document.body.style.overflow;
    
    // Disable scrolling
    document.body.style.overflow = 'hidden';

    // Re-enable scrolling when component unmounts
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, []);
}


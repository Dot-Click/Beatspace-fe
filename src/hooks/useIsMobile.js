import { useState, useEffect } from 'react';

/**
 * Hook to detect if the device is a mobile device
 * @returns {boolean} true if mobile device, false otherwise
 */
export const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      // Block on: min-sm (640px+), max-sm (< 640px), min-md (768px+)
      // Show on: min-lg (1024px+), min-xl (1280px+)
      // So block everything below 1024px (lg breakpoint)
      const shouldBlock = window.innerWidth < 1024;
      setIsMobile(shouldBlock);
    };

    // Check on mount
    checkMobile();

    // Check on window resize
    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  return isMobile;
};


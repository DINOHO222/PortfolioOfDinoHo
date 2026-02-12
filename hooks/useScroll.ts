import { useState, useEffect } from 'react';

/**
 * Custom hook to track if the page has been scrolled past a threshold.
 * @param threshold - The scroll Y value to trigger the state change (default: 20px).
 * @returns boolean - True if scrolled past threshold, false otherwise.
 */
export const useScroll = (threshold = 20) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > threshold);
    };

    // Initial check
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return isScrolled;
};

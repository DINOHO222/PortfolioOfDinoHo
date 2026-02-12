import { useCallback } from 'react';

/**
 * Custom hook for smooth scrolling to a specific element ID.
 * Handles offset calculations for fixed headers on different device sizes.
 */
export const useScrollTo = () => {
    const scrollToSection = useCallback((e: React.MouseEvent | React.TouchEvent, id: string) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (!element) return;

        // Offset for the fixed navigation bar only on Desktop
        // On mobile, the nav scrolls away (absolute position), so we don't need a large offset
        // Using 768px as the breakpoint for 'md' in Tailwind
        const isDesktop = window.matchMedia("(min-width: 768px)").matches;
        const headerOffset = isDesktop ? 100 : 0;

        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
    }, []);

    return scrollToSection;
};

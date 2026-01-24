import React, { useEffect, useState, useRef } from 'react';

const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    // Hide default cursor on desktop
    if (window.matchMedia("(min-width: 768px)").matches) {
      document.body.style.cursor = 'none';
      const links = document.querySelectorAll('a, button, input, textarea, [data-cursor="hover"]');
      links.forEach(el => {
        (el as HTMLElement).style.cursor = 'none';
      });
    }

    const moveCursor = (e: MouseEvent) => {
      if (cursorRef.current && followerRef.current) {
        cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
        // Follower has a slight delay handled by CSS transition usually, but here we set position directly
        // For smoother lag, we often use requestAnimationFrame, but simple CSS transition on the follower works for "chic" feel
         followerRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
      
      // Check if hovering over clickable element
      const target = e.target as HTMLElement;
      const isLink = target.closest('a, button, input, textarea, [data-cursor="hover"]');
      setIsHovering(!!isLink);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.body.style.cursor = 'auto';
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  // Only render on non-touch devices to avoid issues
  if (typeof window !== 'undefined' && window.matchMedia && window.matchMedia("(pointer:coarse)").matches) {
      return null;
  }

  return (
    <>
      {/* Main Dot */}
      <div 
        ref={cursorRef}
        className={`fixed top-0 left-0 w-3 h-3 bg-chic-orange rounded-full pointer-events-none z-[9999] -ml-1.5 -mt-1.5 mix-blend-difference transition-transform duration-75 ease-out ${isClicking ? 'scale-75' : ''}`}
      />
      
      {/* Follower Ring */}
      <div 
        ref={followerRef}
        className={`fixed top-0 left-0 border border-chic-black rounded-full pointer-events-none z-[9998] -ml-6 -mt-6 transition-all duration-300 ease-out
        ${isHovering ? 'w-12 h-12 bg-chic-black/10 border-transparent scale-150' : 'w-12 h-12'}
        ${isClicking ? 'scale-90 bg-chic-orange/20 border-chic-orange' : ''}
        `}
      />
    </>
  );
};

export default CustomCursor;
import React, { useRef } from 'react';

const InteractiveTitle: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const text = "PORTFOLIO";

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;

    const letters = containerRef.current.querySelectorAll('.interactive-letter');
    letters.forEach((letter) => {
      const rect = (letter as HTMLElement).getBoundingClientRect();
      const letterCenterX = rect.left + rect.width / 2;
      const letterCenterY = rect.top + rect.height / 2;

      const distanceX = Math.abs(e.clientX - letterCenterX);
      const distanceY = Math.abs(e.clientY - letterCenterY);
      const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

      // Interaction radius
      const maxDistance = 300;
      
      if (distance < maxDistance) {
        const proximity = 1 - distance / maxDistance;
        // Effect: Stretch vertically and change weight based on proximity
        const scaleY = 1 + proximity * 1.5; // Max scale 2.5x
        const translateY = proximity * -20; // Move up slightly
        
        (letter as HTMLElement).style.transform = `scaleY(${scaleY}) translateY(${translateY}px)`;
        (letter as HTMLElement).style.color = proximity > 0.5 ? '#ff4f00' : '#1a1a1a'; // Chic Orange
        (letter as HTMLElement).style.zIndex = '10';
      } else {
        (letter as HTMLElement).style.transform = 'scaleY(1) translateY(0)';
        (letter as HTMLElement).style.color = '#1a1a1a';
        (letter as HTMLElement).style.zIndex = '1';
      }
    });
  };

  const handleMouseLeave = () => {
    if (!containerRef.current) return;
    const letters = containerRef.current.querySelectorAll('.interactive-letter');
    letters.forEach((letter) => {
      (letter as HTMLElement).style.transform = 'scaleY(1) translateY(0)';
      (letter as HTMLElement).style.color = '#1a1a1a';
    });
  };

  return (
    <div 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="flex justify-center items-center cursor-default py-10 select-none perspective-500"
    >
      {text.split('').map((char, i) => (
        <span
          key={i}
          className="interactive-letter inline-block text-[11vw] md:text-[13vw] font-black leading-[0.8] tracking-tighter transition-colors duration-100 ease-out origin-bottom"
          style={{ 
            transition: 'transform 0.1s cubic-bezier(0.2, 0, 0.2, 1), color 0.2s linear',
            willChange: 'transform, color'
          }}
        >
          {char}
        </span>
      ))}
    </div>
  );
};

export default InteractiveTitle;
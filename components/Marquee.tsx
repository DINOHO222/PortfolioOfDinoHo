import React from 'react';

const Marquee: React.FC = () => {
  // Using English keywords for a more "designed" international look
  const content = "CREATIVE • UI/UX DESIGN • FRONTEND DEV • ART • ";
  
  return (
    <div className="relative flex overflow-hidden py-6 md:py-10 border-y border-chic-black bg-chic-white select-none pointer-events-none">
      <div className="animate-marquee whitespace-nowrap flex flex-row items-center">
        {[...Array(4)].map((_, i) => (
            <React.Fragment key={i}>
                <span 
                    className="text-[12vw] leading-none font-black uppercase mx-0 text-transparent"
                    style={{ WebkitTextStroke: '1px #1a1a1a' }}
                >
                    {content}
                </span>
            </React.Fragment>
        ))}
      </div>
      {/* Duplicate for seamless loop effect visual check */}
       <div className="absolute top-6 md:top-10 animate-marquee whitespace-nowrap flex flex-row items-center ml-[100%]">
          {[...Array(4)].map((_, i) => (
            <React.Fragment key={i}>
                <span 
                    className="text-[12vw] leading-none font-black uppercase mx-0 text-transparent"
                    style={{ WebkitTextStroke: '1px #1a1a1a' }}
                >
                    {content}
                </span>
            </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
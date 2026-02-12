import React from 'react';
import FadeIn from './FadeIn';
import InteractiveTitle from './InteractiveTitle';
import { useScrollTo } from '../hooks/useScrollTo';

interface HeroProps {
    onOpenContact: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenContact }) => {
    const scrollTo = useScrollTo();

    return (
        <header className="relative min-h-screen flex items-center justify-center pt-24 md:pt-20 overflow-hidden">
            {/* Abstract Geometric Background */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
                <div className="absolute top-[10%] left-[5%] w-[40vw] h-[40vw] md:w-[30vw] md:h-[30vw] border border-chic-black rounded-full mix-blend-multiply animate-float"></div>
                <div className="absolute bottom-[10%] right-[5%] w-[35vw] h-[35vw] md:w-[25vw] md:h-[25vw] bg-chic-orange rounded-full mix-blend-multiply blur-[80px] md:blur-[100px] animate-pulse"></div>
            </div>
            <div className="absolute inset-0 z-0 opacity-5 pointer-events-none bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

            <div className="container mx-auto px-4 z-10 text-center flex flex-col items-center">

                <FadeIn delay={200} className="w-full relative mt-4 md:mt-0">
                    {/* Background Text Layer */}
                    <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[18vw] md:text-[20vw] font-black text-black/5 whitespace-nowrap select-none pointer-events-none z-[-1]">
                        DESIGNER
                    </h1>
                    <InteractiveTitle />
                </FadeIn>

                <FadeIn direction="up" delay={400} className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-6 mt-12 md:mt-16 w-full md:w-auto">
                    <button
                        onClick={onOpenContact}
                        data-cursor="hover"
                        className="w-full md:w-auto bg-chic-black text-white px-10 py-4 text-lg font-bold uppercase hover:bg-chic-orange hover:scale-105 transition-all shadow-[8px_8px_0px_0px_rgba(255,79,0,1)] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] border border-transparent"
                    >
                        聯絡我
                    </button>
                    <a
                        href="#works"
                        onClick={(e) => scrollTo(e, 'works')}
                        data-cursor="hover"
                        className="w-full md:w-auto border-2 border-chic-black px-10 py-4 text-lg font-bold uppercase hover:bg-chic-black hover:text-white transition-all bg-white hover:scale-105 cursor-pointer flex items-center justify-center shadow-[8px_8px_0px_0px_rgba(0,0,0,0.1)] hover:shadow-none"
                    >
                        瀏覽作品
                    </a>
                </FadeIn>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
                <span className="text-[10px] md:text-xs font-mono uppercase vertical-rl tracking-widest">Scroll</span>
                <div className="w-[1px] h-12 md:h-16 bg-chic-black animate-pulse"></div>
            </div>
        </header>
    );
};

export default Hero;

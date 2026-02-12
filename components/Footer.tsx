import React from 'react';
import FadeIn from './FadeIn';

interface FooterProps {
    onOpenContact: () => void;
}

const Footer: React.FC<FooterProps> = ({ onOpenContact }) => {
    return (
        <footer id="contact" className="bg-chic-white pt-20 md:pt-24 pb-8 px-4 border-t-2 border-chic-black relative">
            <div className="max-w-7xl mx-auto text-center relative z-10">
                <FadeIn direction="up">
                    <h2
                        onClick={onOpenContact}
                        data-cursor="hover"
                        className="text-[12vw] font-black uppercase leading-none mb-8 hover:text-chic-orange transition-colors cursor-pointer tracking-tighter select-none mix-blend-exclusion"
                    >
                        Let's Talk
                    </h2>
                </FadeIn>
                <FadeIn delay={200}>
                    <p className="text-lg md:text-2xl font-serif italic text-gray-600 mb-8 md:mb-12">
                        想進一步了解我的作品或經歷嗎？
                    </p>
                </FadeIn>

                <FadeIn delay={300}>
                    <button
                        onClick={onOpenContact}
                        data-cursor="hover"
                        className="inline-block bg-chic-black text-white px-8 py-4 md:px-12 md:py-6 text-lg md:text-2xl font-bold uppercase hover:bg-chic-orange transition-all hover:scale-105 shadow-[6px_6px_0px_0px_rgba(255,79,0,1)] md:shadow-[8px_8px_0px_0px_rgba(255,79,0,1)] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] border border-transparent mb-12"
                    >
                        CONTACT ME
                    </button>
                </FadeIn>

                <div className="flex justify-center items-center border-t border-chic-black pt-8 w-full">
                    <p className="text-[10px] md:text-sm font-mono uppercase text-gray-500 text-center leading-relaxed">
                        © 2026 DINO HO PORTFOLIO. <br />

                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

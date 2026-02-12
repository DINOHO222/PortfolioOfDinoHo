import React from 'react';
import { X } from 'lucide-react';
import { useScrollTo } from '../hooks/useScrollTo';

interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
    onOpenContact: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose, onOpenContact }) => {
    const scrollToSection = useScrollTo();

    const handleLinkClick = (e: React.MouseEvent, id: string) => {
        onClose();
        scrollToSection(e, id); // Just pass the event and id. The hook handles logic. 
    };

    const handleContactClick = () => {
        onClose();
        onOpenContact();
    };

    return (
        <div className={`fixed inset-0 z-[60] bg-chic-black flex flex-col justify-center items-center transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
            {/* Decorative Background Element */}
            <div className="absolute top-0 left-0 w-full h-2 bg-chic-orange"></div>

            <button
                onClick={onClose}
                className="absolute top-8 right-6 text-white hover:text-chic-orange transition-colors p-2"
            >
                <X className="w-8 h-8" />
            </button>

            <nav className="flex flex-col items-center gap-10">
                <a
                    href="#career"
                    onClick={(e) => handleLinkClick(e, 'career')}
                    className="text-5xl font-black text-white hover:text-chic-orange transition-colors uppercase tracking-widest font-serif italic relative group"
                >
                    About
                    <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-1 bg-chic-orange transition-all duration-300 group-hover:w-full"></span>
                </a>
                <a
                    href="#works"
                    onClick={(e) => handleLinkClick(e, 'works')}
                    className="text-5xl font-black text-white hover:text-chic-orange transition-colors uppercase tracking-widest font-serif italic relative group"
                >
                    Works
                    <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-1 bg-chic-orange transition-all duration-300 group-hover:w-full"></span>
                </a>
                <button
                    onClick={handleContactClick}
                    className="text-5xl font-black text-white hover:text-chic-orange transition-colors uppercase tracking-widest font-serif italic relative group"
                >
                    Contact
                    <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-1 bg-chic-orange transition-all duration-300 group-hover:w-full"></span>
                </button>
            </nav>

            <div className="absolute bottom-10 text-white/30 font-mono text-xs tracking-[0.3em]">
                DINO HO PORTFOLIO
            </div>
        </div>
    );
};

export default MobileMenu;

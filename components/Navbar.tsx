import React from 'react';
import { Menu } from 'lucide-react';
import { useScrollTo } from '../hooks/useScrollTo';

interface NavbarProps {
    isScrolled: boolean;
    onOpenMenu: () => void;
    onOpenContact: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isScrolled, onOpenMenu, onOpenContact }) => {
    const scrollTo = useScrollTo();

    return (
        <nav className={`
      top-0 w-full z-40 px-4 md:px-6 flex justify-between items-center
      /* Layout: Absolute on Mobile (scrolls away), Fixed on Desktop (stays) */
      absolute md:fixed 
      transition-all duration-300
      
      /* Desktop Scroll States */
      ${isScrolled
                ? 'md:bg-chic-white/95 md:backdrop-blur-sm md:border-b md:border-chic-black md:text-chic-black md:py-3'
                : 'md:mix-blend-difference md:text-white md:py-4'
            }

      /* Mobile State (Always maintain initial look, uses mix-blend to see over hero) */
      max-md:mix-blend-difference max-md:text-white max-md:py-4
    `}>
            <div data-cursor="hover" className="text-xl md:text-2xl font-bold tracking-tighter uppercase font-serif hover:scale-105 transition-transform cursor-pointer">
                <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>Dino Ho.</a>
            </div>

            {/* Right aligned navigation */}
            <div className="hidden md:flex gap-8 text-sm font-medium uppercase tracking-widest items-center">
                <a
                    href="#career"
                    onClick={(e) => scrollTo(e, 'career')}
                    data-cursor="hover"
                    className="hover:text-chic-orange transition-colors relative group"
                >
                    關於
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-chic-orange transition-all duration-300 group-hover:w-full"></span>
                </a>
                <a
                    href="#works"
                    onClick={(e) => scrollTo(e, 'works')}
                    data-cursor="hover"
                    className="hover:text-chic-orange transition-colors relative group"
                >
                    作品
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-chic-orange transition-all duration-300 group-hover:w-full"></span>
                </a>
                <button
                    onClick={onOpenContact}
                    data-cursor="hover"
                    className="hover:text-chic-orange transition-colors relative group uppercase tracking-widest font-medium"
                >
                    聯絡
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-chic-orange transition-all duration-300 group-hover:w-full"></span>
                </button>
            </div>

            <div data-cursor="hover" className="md:hidden">
                <button onClick={onOpenMenu} className="p-2 -mr-2">
                    <Menu className="w-6 h-6 md:w-8 md:h-8 cursor-pointer" />
                </button>
            </div>
        </nav>
    );
};

export default Navbar;

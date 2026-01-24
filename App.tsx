import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Marquee from './components/Marquee';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import FadeIn from './components/FadeIn';
import CustomCursor from './components/CustomCursor';
import InteractiveTitle from './components/InteractiveTitle';
import ContactModal from './components/ContactModal';

function App() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Custom smooth scroll function to handle offsets for the fixed header
  const scrollToSection = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      // Offset for the fixed navigation bar only on Desktop
      // On mobile, the nav scrolls away, so we don't need a large offset
      const isDesktop = window.matchMedia("(min-width: 768px)").matches;
      const headerOffset = isDesktop ? 100 : 0;
      
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="min-h-screen bg-chic-white text-chic-black font-sans selection:bg-chic-orange selection:text-white overflow-x-hidden cursor-none relative">
      <CustomCursor />
      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
      
      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-[60] bg-chic-black flex flex-col justify-center items-center transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
         {/* Decorative Background Element */}
         <div className="absolute top-0 left-0 w-full h-2 bg-chic-orange"></div>
         
         <button 
            onClick={() => setIsMobileMenuOpen(false)}
            className="absolute top-8 right-6 text-white hover:text-chic-orange transition-colors p-2"
         >
            <X className="w-8 h-8" />
         </button>

         <nav className="flex flex-col items-center gap-10">
            <a 
                href="#career" 
                onClick={(e) => { setIsMobileMenuOpen(false); scrollToSection(e, 'career'); }}
                className="text-5xl font-black text-white hover:text-chic-orange transition-colors uppercase tracking-widest font-serif italic relative group"
            >
                About
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-1 bg-chic-orange transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a 
                href="#works" 
                onClick={(e) => { setIsMobileMenuOpen(false); scrollToSection(e, 'works'); }}
                className="text-5xl font-black text-white hover:text-chic-orange transition-colors uppercase tracking-widest font-serif italic relative group"
            >
                Works
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-1 bg-chic-orange transition-all duration-300 group-hover:w-full"></span>
            </a>
            <button 
                onClick={() => { setIsMobileMenuOpen(false); setIsContactModalOpen(true); }}
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

      {/* Navigation */}
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
            onClick={(e) => scrollToSection(e, 'career')}
            data-cursor="hover" 
            className="hover:text-chic-orange transition-colors relative group"
          >
            關於
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-chic-orange transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a 
            href="#works" 
            onClick={(e) => scrollToSection(e, 'works')}
            data-cursor="hover" 
            className="hover:text-chic-orange transition-colors relative group"
          >
            作品
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-chic-orange transition-all duration-300 group-hover:w-full"></span>
          </a>
          <button 
            onClick={() => setIsContactModalOpen(true)}
            data-cursor="hover" 
            className="hover:text-chic-orange transition-colors relative group uppercase tracking-widest font-medium"
          >
            聯絡
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-chic-orange transition-all duration-300 group-hover:w-full"></span>
          </button>
        </div>
        
        <div data-cursor="hover" className="md:hidden">
            <button onClick={() => setIsMobileMenuOpen(true)} className="p-2 -mr-2">
                <Menu className="w-6 h-6 md:w-8 md:h-8 cursor-pointer" />
            </button>
        </div>
      </nav>

      {/* Hero Section */}
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
               onClick={() => setIsContactModalOpen(true)}
               data-cursor="hover" 
               className="w-full md:w-auto bg-chic-black text-white px-10 py-4 text-lg font-bold uppercase hover:bg-chic-orange hover:scale-105 transition-all shadow-[8px_8px_0px_0px_rgba(255,79,0,1)] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] border border-transparent"
             >
               聯絡我
             </button>
             <a 
               href="#works"
               onClick={(e) => scrollToSection(e, 'works')}
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

      {/* Marquee Separator */}
      <Marquee />

      {/* About Section */}
      <section id="about" className="py-20 md:py-32 px-4 max-w-7xl mx-auto relative overflow-hidden">
        {/* Large Decorative Background Text */}
        <div className="absolute -left-4 top-20 md:-left-20 md:top-20 text-[20vw] font-black text-gray-200/40 leading-none select-none pointer-events-none writing-vertical-rl md:writing-horizontal-tb font-serif italic z-0 opacity-50 md:opacity-100">
            ABOUT
        </div>

        <div className="flex flex-col md:flex-row gap-12 md:gap-24 items-center md:items-start relative z-10">
          
          {/* Image Column */}
          <div className="w-full md:w-5/12 relative md:sticky md:top-32">
             <FadeIn direction="right">
                <div className="relative group cursor-none w-4/5 md:w-fit mx-auto md:mx-0" data-cursor="hover">
                    {/* Offset Frame Effect */}
                    <div className="absolute top-3 left-3 md:top-4 md:left-4 w-full h-full border-2 border-chic-orange bg-transparent transition-transform duration-500 group-hover:top-2 group-hover:left-2 z-0"></div>
                    <div className="absolute -top-3 -left-3 md:-top-4 md:-left-4 w-full h-full bg-chic-black transition-transform duration-500 group-hover:-top-2 group-hover:-left-2 z-0"></div>
                    
                    {/* Main Image */}
                    <div className="relative z-10 border-2 border-chic-black bg-white p-2">
                        {/* 
                           
                        */}
                        <img 
                          src="https://i.postimg.cc/Twz2Q43q/S-4833430-0.jpg" 
                          alt="Portrait" 
                          className="w-full h-auto grayscale contrast-125 brightness-110 object-cover aspect-[3/4]" 
                        />
                        
                        {/* Decorative Barcode-like element */}
                        <div className="absolute bottom-3 right-3 md:bottom-4 md:right-4 bg-white/90 p-2 border border-chic-black flex flex-col items-center">
                            <div className="h-6 md:h-8 w-16 md:w-24 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9ImJsYWNrIi8+PC9zdmc+')] bg-[length:4px_100%]"></div>
                            <span className="text-[8px] md:text-[10px] font-mono tracking-[0.2em] mt-1">DINO.HO.2025</span>
                        </div>
                    </div>
                </div>
             </FadeIn>
          </div>

          {/* Text Column */}
          <div className="w-full md:w-7/12 pt-4 md:pt-20">
             <FadeIn delay={200}>
                <h2 className="text-3xl md:text-6xl font-black mb-8 md:mb-10 leading-[0.9] tracking-tight uppercase text-center md:text-left">
                    Combining <br/>
                    <span className="text-chic-orange font-serif italic font-normal normal-case">Technology</span> & <br/>
                    Aesthetics.
                </h2>
             </FadeIn>
             
             <div className="space-y-6 md:space-y-8">
                 <FadeIn delay={300}>
                    <p className="text-base md:text-xl leading-relaxed font-serif text-chic-black border-l-4 border-chic-orange pl-4 md:pl-6 font-medium">
                    我是一個對美感和技術都充滿熱情的人<br/>
                    相信好的設計能夠改善人們的使用體驗
                    </p>
                 </FadeIn>

                 <FadeIn delay={400}>
                    <div className="text-gray-600 leading-loose text-justify space-y-4 md:space-y-6 text-sm md:text-base">
                        <p>
                        我是DINO，我熱愛跳舞，享受在律動中表達自我的感受，這培養了我對美感的敏銳度和追求完美的態度。
                        無論是跳舞，還是使用介面的視覺美感，我都追求那份與人息息相關的美好體驗。
                        </p>
                        <p>
                        平時愛好研究 3C 產品和前端設計開發，尤其是 UI/UX 設計領域。我喜歡打造美觀且有溫度的介面。
                        在學習和實作方面，我具備高度執行力。這份對美的執著和實作的熱忱，讓我希望在資訊管理領域中，結合技術與美學，創造更有價值的數位體驗。
                        </p>
                    </div>
                 </FadeIn>
             </div>

             <FadeIn delay={500} className="grid grid-cols-2 gap-x-4 gap-y-8 md:gap-x-8 md:gap-y-12 mt-12 md:mt-16 border-t-2 border-chic-black pt-8 md:pt-12">
               {[
                   { label: 'Role', val: 'Frontend / UI/UX' },
                   { label: 'Passion', val: 'Street Dance / Tech' },
                   { label: 'Vibe', val: 'Self-Starter / Detail-Oriented' },
                   { label: 'Collaboration', val: 'Communicative / Open-Minded' },
               ].map((item, idx) => (
                   <div key={idx} className="relative group">
                       <span className="absolute -left-3 top-2 w-2 h-2 bg-chic-orange rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                       <h4 className="font-bold uppercase text-[10px] md:text-xs tracking-[0.2em] mb-1 text-gray-400 group-hover:text-chic-black transition-colors">{item.label}</h4>
                       <p className="text-sm md:text-xl font-bold font-serif">{item.val}</p>
                   </div>
               ))}
             </FadeIn>
          </div>
        </div>
      </section>

      {/* Resume Section with ID for navigation */}
      <section id="career" className="bg-white border-y-2 border-chic-black" data-cursor="hover">
        <Resume />
      </section>

      {/* Portfolio Section */}
      <section id="works" className="relative">
         {/* Decorative grid overlay for portfolio */}
         <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
        <Portfolio />
      </section>

      {/* Footer / Contact */}
      <footer id="contact" className="bg-chic-white pt-20 md:pt-24 pb-8 px-4 border-t-2 border-chic-black relative">
        <div className="max-w-7xl mx-auto text-center relative z-10">
           <FadeIn direction="up">
             <h2 
               onClick={() => setIsContactModalOpen(true)}
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
                    onClick={() => setIsContactModalOpen(true)}
                    data-cursor="hover" 
                    className="inline-block bg-chic-black text-white px-8 py-4 md:px-12 md:py-6 text-lg md:text-2xl font-bold uppercase hover:bg-chic-orange transition-all hover:scale-105 shadow-[6px_6px_0px_0px_rgba(255,79,0,1)] md:shadow-[8px_8px_0px_0px_rgba(255,79,0,1)] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] border border-transparent mb-12"
                >
                    CONTACT ME
                </button>
           </FadeIn>

           <div className="flex justify-center items-center border-t border-chic-black pt-8 w-full">
             <p className="text-[10px] md:text-sm font-mono uppercase text-gray-500 text-center leading-relaxed">
                 © 2026 DINO HO PORTFOLIO. <br/>
                
             </p>
           </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
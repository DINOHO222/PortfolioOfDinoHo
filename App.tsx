import React, { useState } from 'react';
import Marquee from './components/Marquee';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import CustomCursor from './components/CustomCursor';
import ContactModal from './components/ContactModal';

// Components
import Navbar from './components/Navbar';
import MobileMenu from './components/MobileMenu';
import Hero from './components/Hero';
import About from './components/About';
import Footer from './components/Footer';

// Hooks
import { useScroll } from './hooks/useScroll';

function App() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isScrolled = useScroll(20);

  return (
    <div className="min-h-screen bg-chic-white text-chic-black font-sans selection:bg-chic-orange selection:text-white overflow-x-hidden cursor-none relative">
      <CustomCursor />
      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />

      {/* Navigation & Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        onOpenContact={() => setIsContactModalOpen(true)}
      />

      <Navbar
        isScrolled={isScrolled}
        onOpenMenu={() => setIsMobileMenuOpen(true)}
        onOpenContact={() => setIsContactModalOpen(true)}
      />

      {/* Hero Section */}
      <Hero onOpenContact={() => setIsContactModalOpen(true)} />

      {/* Marquee Separator */}
      <Marquee />

      {/* About Section */}
      <About />

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
      <Footer onOpenContact={() => setIsContactModalOpen(true)} />
    </div>
  );
}

export default App;

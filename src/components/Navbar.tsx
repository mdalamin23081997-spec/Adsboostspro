import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, MessageCircle } from 'lucide-react';

interface NavbarProps {
  onNavClick: (sectionId: string) => void;
}

export default function Navbar({ onNavClick }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Services', id: 'services' },
    { label: 'Interactive ROI Tool', id: 'calculator' },
    { label: 'Case Studies', id: 'portfolio' },
    { label: 'Testimonials', id: 'testimonials' },
    { label: 'Inquire', id: 'contact' },
  ];

  const handleLinkClick = (id: string) => {
    onNavClick(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 backdrop-blur-md border-b border-zinc-100 shadow-sm py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo / Brand */}
        <button
          onClick={() => handleLinkClick('hero')}
          className="flex items-center space-x-2 font-display font-bold text-xl text-zinc-950 tracking-tight text-left cursor-pointer transition-opacity hover:opacity-90"
        >
          <span className="bg-black text-white w-8 h-8 rounded-xs flex items-center justify-center font-display text-base font-bold">
            F
          </span>
          <span className="tracking-tight text-gray-900">
            AdScale<span className="text-zinc-400 font-light">Pro</span>
          </span>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleLinkClick(item.id)}
              className="text-sm font-medium text-gray-500 hover:text-black transition-colors cursor-pointer"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Desktop CTA Callouts */}
        <div className="hidden md:flex items-center space-x-4">
          <a
            href="https://wa.me/8801746835448"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1.5 text-xs text-emerald-600 font-medium hover:text-emerald-700 transition-colors"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Live Chat</span>
          </a>
          <button
            onClick={() => handleLinkClick('contact')}
            className="btn-primary text-sm !px-5 !py-2 rounded-full flex items-center space-x-1 cursor-pointer"
          >
            <span>Start Campaign</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-zinc-700 p-1 cursor-pointer"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile nav drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed top-[72px] left-0 right-0 bottom-0 bg-white z-40 border-t border-zinc-100 flex flex-col p-6 animate-fadeIn">
          <nav className="flex flex-col space-y-5 mb-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleLinkClick(item.id)}
                className="text-lg font-semibold text-zinc-800 text-left py-2 border-b border-zinc-50 hover:text-zinc-900 cursor-pointer"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="flex flex-col gap-4 mt-auto">
            <a
              href="https://wa.me/8801746835448"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center p-4 rounded-xl border border-emerald-100 bg-emerald-50 text-emerald-700 text-sm font-semibold transition-colors hover:bg-emerald-100"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Direct WhatsApp chat
            </a>
            <button
              onClick={() => handleLinkClick('contact')}
              className="btn-primary w-full p-4 justify-center"
            >
              Request Campaign Proposal
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

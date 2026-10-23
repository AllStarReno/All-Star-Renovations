import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Star, ShieldCheck, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Section } from '../types';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: `/#${Section.SERVICES}` },
    { name: 'Process', href: '/#process' },
    { name: 'Gallery', href: `/#${Section.GALLERY}` },
    { name: 'Testimonials', href: `/#${Section.TESTIMONIALS}` },
    { name: 'FAQ', href: `/#${Section.FAQ}` },
    { name: 'Contact', href: `/#${Section.CONTACT}` },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Sticky High-Contrast Top Phone Bar */}
      <div className="bg-slate-900 text-white py-2 px-4 border-b border-slate-800 text-xs sm:text-sm font-medium">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4 text-slate-300">
            <span className="hidden sm:inline-flex items-center gap-1.5 text-brand-secondary font-semibold">
              <Clock className="w-3.5 h-3.5" /> 1-2 Day Bathroom Remodeling
            </span>
            <span className="hidden md:inline-flex items-center gap-1 text-slate-300">
              <ShieldCheck className="w-3.5 h-3.5 text-green-400" /> Licensed & Insured Contractor
            </span>
          </div>
          <div className="flex items-center gap-4 ml-auto sm:ml-0">
            <span className="text-slate-300 font-semibold">Call For Free Estimate:</span>
            <a
              href="tel:5015043398"
              className="text-brand-secondary hover:text-amber-400 font-bold flex items-center gap-1.5 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 fill-current" />
              (501) 504-3398
            </a>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <nav
        className={`transition-all duration-300 ${
          isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-white/80 backdrop-blur-sm py-4 border-b border-slate-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-full bg-brand-primary flex items-center justify-center text-brand-secondary group-hover:scale-105 transition-transform shadow-md">
              <Star className="w-5 h-5 fill-current text-brand-secondary" />
            </div>
            <span className="text-2xl font-serif font-bold tracking-tight text-brand-primary">
              ALL-STAR <span className="text-brand-secondary">RENOVATIONS</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-semibold text-slate-700 hover:text-brand-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href={`/#${Section.CONTACT}`}
              className="bg-brand-primary text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-brand-primary/90 transition-all flex items-center gap-2 shadow-md shadow-brand-primary/20"
            >
              Get Free Estimate
            </a>
          </div>

          {/* Mobile Toggle & Direct Phone */}
          <div className="flex items-center gap-3 md:hidden">
            <a
              href="tel:5015043398"
              className="bg-brand-secondary text-slate-900 p-2.5 rounded-full font-bold text-xs flex items-center justify-center"
              aria-label="Call All-Star Renovations"
            >
              <Phone className="w-4 h-4 fill-current" />
            </a>
            <button
              className="text-slate-900 p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-slate-100 overflow-hidden shadow-xl"
            >
              <div className="flex flex-col p-6 gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-lg font-semibold text-slate-900 hover:text-brand-primary"
                  >
                    {link.name}
                  </a>
                ))}
                <a
                  href={`/#${Section.CONTACT}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="bg-brand-primary text-white px-6 py-3.5 rounded-xl text-center font-bold shadow-lg"
                >
                  Get Free Estimate
                </a>
                <a
                  href="tel:5015043398"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="bg-brand-secondary text-slate-900 px-6 py-3.5 rounded-xl text-center font-bold flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 fill-current" /> Call (501) 504-3398
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Navbar;

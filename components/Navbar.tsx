import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Section } from '../types';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: `/#${Section.SERVICES}` },
    { name: 'Gallery', href: `/#${Section.GALLERY}` },
    { name: 'Testimonials', href: `/#${Section.TESTIMONIALS}` },
    { name: 'FAQ', href: `/#${Section.FAQ}` },
    { name: 'Contact', href: `/#${Section.CONTACT}` },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 group">
          <img 
            src="https://logo.clearbit.com/allstarreno.com" 
            alt="All-Star Renovations Logo - Bathroom Remodeling in Conway, AR" 
            title="All-Star Renovations - Conway, Arkansas"
            className="w-10 h-10 object-contain rounded-full bg-white"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              target.nextElementSibling?.classList.remove('hidden');
            }}
          />
          <div className="hidden w-8 h-8 rounded-full bg-brand-primary flex items-center justify-center text-brand-secondary group-hover:scale-110 transition-transform">
            <Star className="w-5 h-5 fill-current" />
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
              className="text-sm font-medium text-slate-600 hover:text-brand-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href={`/#${Section.CONTACT}`}
            className="bg-brand-primary text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-brand-primary/90 transition-all flex items-center gap-2"
          >
            <Phone className="w-4 h-4" />
            Free Quote
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-slate-900"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-slate-100 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium text-slate-900"
                >
                  {link.name}
                </a>
              ))}
              <a
                href={`/#${Section.CONTACT}`}
                onClick={() => setIsMobileMenuOpen(false)}
                className="bg-brand-primary text-white px-6 py-3 rounded-xl text-center font-semibold"
              >
                Get a Free Quote
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

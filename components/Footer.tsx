import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Facebook, Instagram } from 'lucide-react';
import { Section } from '../types';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-6 group">
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
              <div className="hidden w-8 h-8 rounded-full bg-brand-secondary flex items-center justify-center text-brand-primary group-hover:scale-110 transition-transform">
                <Star className="w-5 h-5 fill-current" />
              </div>
              <span className="text-2xl font-serif font-bold tracking-tight">
                ALL-STAR <span className="text-brand-secondary">RENOVATIONS</span>
              </span>
            </Link>
            <p className="text-slate-400 max-w-md leading-relaxed mb-4">
              Faulkner & Pulaski Counties' #1 Kitchen & Bathroom Remodeler. We combine expert craftsmanship with high-quality materials to deliver stunning results.
            </p>
            <p className="text-slate-400 text-sm mb-8">
              Proudly serving Conway, Greenbrier, Vilonia, Maumelle, Little Rock, North Little Rock, and Sherwood.
            </p>
            <div className="flex gap-4">
              <a href="#" aria-label="Facebook" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-brand-secondary hover:text-white transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-brand-secondary hover:text-white transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" aria-label="Houzz" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-brand-secondary hover:text-white transition-all">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.27 0V7.32H8.54V0H1.27ZM8.54 7.32V24H15.81V7.32H8.54ZM15.81 0V7.32H23.08V0H15.81Z" />
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 uppercase tracking-widest text-xs text-brand-secondary">Quick Links</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><a href={`/#${Section.SERVICES}`} className="hover:text-white transition-colors">Services</a></li>
              <li><a href={`/#${Section.GALLERY}`} className="hover:text-white transition-colors">Gallery</a></li>
              <li><a href={`/#${Section.TESTIMONIALS}`} className="hover:text-white transition-colors">Testimonials</a></li>
              <li><a href={`/#${Section.FAQ}`} className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href={`/#${Section.CONTACT}`} className="hover:text-white transition-colors">Free Quote</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase tracking-widest text-xs text-brand-secondary">Service Areas</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><Link to="/location/conway" className="hover:text-white transition-colors">Conway</Link></li>
              <li><Link to="/location/greenbrier" className="hover:text-white transition-colors">Greenbrier</Link></li>
              <li><Link to="/location/vilonia" className="hover:text-white transition-colors">Vilonia</Link></li>
              <li><Link to="/location/maumelle" className="hover:text-white transition-colors">Maumelle</Link></li>
              <li><Link to="/location/little-rock" className="hover:text-white transition-colors">Little Rock</Link></li>
              <li><Link to="/location/north-little-rock" className="hover:text-white transition-colors">North Little Rock</Link></li>
              <li><Link to="/location/sherwood" className="hover:text-white transition-colors">Sherwood</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase tracking-widest text-xs text-brand-secondary">Legal</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Licensing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Accessibility</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-xs">
          <p>© {new Date().getFullYear()} All-Star Renovations. All rights reserved.</p>
          <p>Licensed & Insured • BBB Accredited A+</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

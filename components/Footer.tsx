import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Facebook, Instagram, Phone, MapPin, Mail } from 'lucide-react';
import { Section } from '../types';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white py-16 px-6 md:px-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-6 group">
              <div className="w-10 h-10 rounded-full bg-brand-primary flex items-center justify-center text-brand-secondary group-hover:scale-105 transition-transform">
                <Star className="w-5 h-5 fill-current text-brand-secondary" />
              </div>
              <span className="text-2xl font-serif font-bold tracking-tight text-white">
                ALL-STAR <span className="text-brand-secondary">RENOVATIONS</span>
              </span>
            </Link>
            <p className="text-slate-300 text-sm max-w-md leading-relaxed mb-4">
              Conway & Central Arkansas' trusted local bathroom remodeling specialist. From walk-in shower replacements and tub conversions to safety walk-in tubs, we deliver luxury in 1-2 days.
            </p>
            <div className="text-xs text-slate-400 space-y-1 mb-6">
              <p className="flex items-center gap-2"><MapPin className="w-3.5 h-3.5 text-brand-secondary" /> 11 Arnett Ln, Conway, AR 72032</p>
              <p className="flex items-center gap-2"><Phone className="w-3.5 h-3.5 text-brand-secondary" /> <a href="tel:5015043398" className="hover:text-brand-secondary">(501) 504-3398</a></p>
              <p className="flex items-center gap-2"><Mail className="w-3.5 h-3.5 text-brand-secondary" /> info@allstarreno.com</p>
            </div>
            <div className="flex gap-3">
              <a href="#" aria-label="Facebook Page for All-Star Renovations" className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 hover:bg-brand-secondary hover:text-slate-900 transition-all">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" aria-label="Instagram Profile for All-Star Renovations" className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 hover:bg-brand-secondary hover:text-slate-900 transition-all">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 uppercase tracking-widest text-xs text-brand-secondary">Remodeling Services</h4>
            <ul className="space-y-3 text-slate-300 text-xs font-medium">
              <li><a href={`/#${Section.SERVICES}`} className="hover:text-brand-secondary transition-colors">Conway Shower Replacements</a></li>
              <li><a href={`/#${Section.SERVICES}`} className="hover:text-brand-secondary transition-colors">Tub-to-Shower Conversions</a></li>
              <li><a href={`/#${Section.SERVICES}`} className="hover:text-brand-secondary transition-colors">Walk-In Tubs Installation</a></li>
              <li><a href={`/#${Section.SERVICES}`} className="hover:text-brand-secondary transition-colors">Aging-in-Place Renovations</a></li>
              <li><a href="/#process" className="hover:text-brand-secondary transition-colors">1-2 Day Installation Process</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase tracking-widest text-xs text-brand-secondary">Local Service Areas</h4>
            <ul className="space-y-3 text-slate-300 text-xs font-medium">
              <li><Link to="/location/conway#services" className="hover:text-brand-secondary transition-colors">Bathroom Remodeling Conway AR</Link></li>
              <li><Link to="/location/greenbrier#services" className="hover:text-brand-secondary transition-colors">Bathroom Remodeling Greenbrier AR</Link></li>
              <li><Link to="/location/vilonia#services" className="hover:text-brand-secondary transition-colors">Bathroom Remodeling Vilonia AR</Link></li>
              <li><Link to="/location/maumelle#services" className="hover:text-brand-secondary transition-colors">Bathroom Remodeling Maumelle AR</Link></li>
              <li><Link to="/location/little-rock#services" className="hover:text-brand-secondary transition-colors">Bathroom Remodeling Little Rock AR</Link></li>
              <li><Link to="/location/north-little-rock#services" className="hover:text-brand-secondary transition-colors">North Little Rock Bathroom Remodels</Link></li>
              <li><Link to="/location/sherwood#services" className="hover:text-brand-secondary transition-colors">Sherwood Bathroom Remodels</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase tracking-widest text-xs text-brand-secondary">Trust & Security</h4>
            <ul className="space-y-3 text-slate-300 text-xs font-medium">
              <li><a href={`/#${Section.FAQ}`} className="hover:text-brand-secondary transition-colors">Financing & Pre-Qualification</a></li>
              <li><a href={`/#${Section.FAQ}`} className="hover:text-brand-secondary transition-colors">Lifetime Limited Warranty</a></li>
              <li><a href="#" className="hover:text-brand-secondary transition-colors">Arkansas Contractor Licensing</a></li>
              <li><a href="#" className="hover:text-brand-secondary transition-colors">Privacy Policy & Terms</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-400 text-xs">
          <p>© {new Date().getFullYear()} All-Star Renovations. All rights reserved. Premium Bathroom Remodeling Hub.</p>
          <p>Licensed & Insured • BBB Accredited A+ • Faulkner & Pulaski Counties</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

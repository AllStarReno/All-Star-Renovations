import React from 'react';
import { motion } from 'framer-motion';
import { Section } from '../types';

const GALLERY_IMAGES = [
  {
    src: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=800&auto=format&fit=crop',
    alt: 'Modern walk-in shower remodeling project in Conway, AR by All-Star Renovations',
    title: 'Modern Walk-In Shower Remodel - Conway, Arkansas'
  },
  {
    src: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=800&auto=format&fit=crop',
    alt: 'Custom tub-to-shower conversion installation in Conway, AR',
    title: 'Custom Tub-to-Shower Conversion - Conway, Arkansas'
  },
  {
    src: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800&auto=format&fit=crop',
    alt: 'Luxury master bathroom renovation in Little Rock metro area',
    title: 'Luxury Master Bathroom - Little Rock, Arkansas'
  },
  {
    src: 'https://images.unsplash.com/photo-1600566752355-397921163bc3?q=80&w=800&auto=format&fit=crop',
    alt: 'Accessible walk-in tub installation in Greenbrier, AR',
    title: 'Accessible Walk-In Tub - Greenbrier, Arkansas'
  },
  {
    src: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?q=80&w=800&auto=format&fit=crop',
    alt: 'High-end acrylic shower wall surround installation in Maumelle, AR',
    title: 'Acrylic Wall Surround - Maumelle, Arkansas'
  },
  {
    src: 'https://images.unsplash.com/photo-1584622781564-1d987f7333c1?q=80&w=800&auto=format&fit=crop',
    alt: 'Complete aging-in-place bathroom transformation in Central Arkansas',
    title: 'Aging-in-Place Bathroom Remodel - Central Arkansas'
  },
];

const Gallery: React.FC = () => {
  return (
    <section id={Section.GALLERY} className="section-padding bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-secondary block mb-2">Our Work</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-primary mb-4">
              Real Bathroom Transformations
            </h2>
            <p className="text-slate-600 text-lg">
              Explore our portfolio of recent walk-in shower replacements and tub conversions completed across Conway, Faulkner County, and Pulaski County.
            </p>
          </div>
          <a
            href={`/#${Section.CONTACT}`}
            className="btn-primary text-sm font-bold shrink-0"
          >
            Schedule Free Design Session
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_IMAGES.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="aspect-square overflow-hidden rounded-3xl group cursor-pointer relative shadow-sm border border-slate-200"
            >
              <img
                src={img.src}
                alt={img.alt}
                title={img.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-brand-primary/80 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-6 text-center text-white">
                <span className="font-serif font-bold text-lg mb-2">{img.title}</span>
                <span className="text-xs text-brand-secondary font-semibold border-b border-brand-secondary pb-0.5">Installed in 1-2 Days</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;

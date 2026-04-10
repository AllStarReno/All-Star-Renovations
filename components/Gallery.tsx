import React from 'react';
import { motion } from 'framer-motion';
import { Section } from '../types';

const GALLERY_IMAGES = [
  {
    src: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=800&auto=format&fit=crop',
    alt: 'Modern Bathroom Remodel in Conway, AR by All-Star Renovations',
    title: 'Modern Bathroom Remodel - Conway, Arkansas'
  },
  {
    src: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=800&auto=format&fit=crop',
    alt: 'Custom Walk-In Shower Installation in Conway, AR',
    title: 'Custom Walk-In Shower - Conway, Arkansas'
  },
  {
    src: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800&auto=format&fit=crop',
    alt: 'Luxury Master Bathroom Renovation in Little Rock Metro Area',
    title: 'Luxury Master Bathroom - Little Rock, Arkansas'
  },
  {
    src: 'https://images.unsplash.com/photo-1600566752355-397921163bc3?q=80&w=800&auto=format&fit=crop',
    alt: 'Accessible Bathroom with Walk-In Tub in Greenbrier, AR',
    title: 'Accessible Bathroom - Greenbrier, Arkansas'
  },
  {
    src: 'https://images.unsplash.com/photo-1507652313519-d4c917100f45?q=80&w=800&auto=format&fit=crop',
    alt: 'Beautiful Bathroom Vanity and Tile Work in Vilonia, AR',
    title: 'Bathroom Vanity and Tile - Vilonia, Arkansas'
  },
  {
    src: 'https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?q=80&w=800&auto=format&fit=crop',
    alt: 'Complete Bathroom Transformation by All-Star Renovations',
    title: 'Complete Bathroom Transformation - Central Arkansas'
  },
];

const Gallery: React.FC = () => {
  return (
    <section id={Section.GALLERY} className="section-padding bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-primary mb-4">
              Real Transformations
            </h2>
            <p className="text-slate-600 text-lg">
              Browse our portfolio of recently completed bathroom renovations. From modern minimalist to classic luxury.
            </p>
          </div>
          <button className="bg-white text-brand-primary border border-slate-200 px-8 py-3 rounded-full font-bold hover:bg-slate-50 transition-all">
            View All Projects
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_IMAGES.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="aspect-square overflow-hidden rounded-2xl group cursor-pointer relative"
            >
              <img
                src={img.src}
                alt={img.alt}
                title={img.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-brand-primary/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white font-bold border-b-2 border-white pb-1">View Details</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;

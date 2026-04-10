import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { Section, Testimonial } from '../types';

const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Jenkins',
    location: 'Conway, AR',
    text: "I couldn't believe they finished my tub-to-shower conversion in just one day! The crew was professional, clean, and the result is absolutely stunning.",
    rating: 5,
  },
  {
    id: '2',
    name: 'Michael Chen',
    location: 'Little Rock, AR',
    text: "The walk-in tub has been a lifesaver for my father. It's safe, easy to use, and looks like it belongs in a high-end hotel. Highly recommend All-Star!",
    rating: 5,
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    location: 'Maumelle, AR',
    text: "From the initial consultation to the final walkthrough, the experience was seamless. Star, their AI assistant, even helped me pick colors!",
    rating: 5,
  },
];

const Testimonials: React.FC = () => {
  return (
    <section id={Section.TESTIMONIALS} className="section-padding bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-primary mb-4">
            What Our Clients Say
          </h2>
          <div className="flex justify-center gap-1 text-brand-secondary">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-current" />
            ))}
          </div>
          <p className="mt-4 text-slate-500 font-medium uppercase tracking-widest text-xs">
            Over 500+ Five-Star Reviews
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS_DATA.map((t, index) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-slate-50 p-8 rounded-3xl relative"
            >
              <Quote className="absolute top-6 right-8 w-12 h-12 text-brand-primary/5" />
              <div className="flex gap-1 text-brand-secondary mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-slate-700 italic mb-8 leading-relaxed">
                "{t.text}"
              </p>
              <div>
                <h4 className="font-bold text-brand-primary">{t.name}</h4>
                <p className="text-sm text-slate-500">{t.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

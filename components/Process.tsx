import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Hammer, Sparkles, CheckCircle, ShieldCheck, Clock, Award, Star } from 'lucide-react';
import { Section } from '../types';

const STEPS = [
  {
    step: '01',
    title: 'Design & Selection',
    subtitle: 'Free In-Home Consultation',
    description: 'Our expert designers visit your home to measure, show sample swatches, and help you select colors, wall surrounds, and luxury fixtures.',
    icon: Compass,
    details: ['3D Design Visualization', 'Custom Material Selection', 'On-the-Spot Exact Quote']
  },
  {
    step: '02',
    title: 'Clean Demolition',
    subtitle: 'Safe & Respectful Prep',
    description: 'We carefully protect your home with floor runners and dust barriers, safely remove old fixtures down to the studs, and inspect for subfloor integrity.',
    icon: Hammer,
    details: ['Full Property Protection', 'Eco-Friendly Disposal', 'Structural & Plumbing Check']
  },
  {
    step: '03',
    title: 'Precision Build',
    subtitle: 'Fast 1-2 Day Installation',
    description: 'Our factory-certified master craftsmen install your custom non-porous acrylic or luxury tile surround with leak-proof sealants and lifetime warranty.',
    icon: Sparkles,
    details: ['1-2 Day Completion', 'Mold & Mildew Resistant', 'Lifetime Warranty Backed']
  }
];

const TRUST_BADGES = [
  { icon: Clock, title: '1-2 Day Express Install', desc: 'Minimal disruption to your home' },
  { icon: ShieldCheck, title: 'Lifetime Limited Warranty', desc: 'Guaranteed quality for decades' },
  { icon: Award, title: 'Licensed & Fully Insured', desc: 'Arkansas Contractor License' },
  { icon: Star, title: '5-Star Rated Craftsmen', desc: 'Over 500+ satisfied local homeowners' },
];

const Process: React.FC = () => {
  return (
    <section id="process" className="section-padding bg-slate-900 text-white relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-primary/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-brand-secondary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-brand-secondary/20 text-brand-secondary rounded-full text-xs font-bold uppercase tracking-widest mb-4 border border-brand-secondary/30">
            Proven 3-Step Process
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
            From Concept to Dream Bathroom
          </h2>
          <p className="text-slate-300 text-lg leading-relaxed">
            Our streamlined remodeling methodology eliminates stress, delays, and mess. Here is how we deliver perfection in as little as 1 to 2 days.
          </p>
        </div>

        {/* Process Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {STEPS.map((s, idx) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="bg-slate-800/80 backdrop-blur-md rounded-3xl p-8 border border-slate-700/60 flex flex-col justify-between relative group hover:border-brand-secondary/50 transition-colors"
            >
              <div>
                <div className="flex justify-between items-center mb-6">
                  <span className="text-4xl font-serif font-bold text-brand-secondary/60 group-hover:text-brand-secondary transition-colors">
                    {s.step}
                  </span>
                  <div className="w-12 h-12 rounded-2xl bg-brand-primary/50 text-brand-secondary flex items-center justify-center border border-brand-primary/60">
                    <s.icon className="w-6 h-6" />
                  </div>
                </div>

                <h3 className="text-2xl font-serif font-bold text-white mb-1">
                  {s.title}
                </h3>
                <p className="text-xs font-bold text-brand-secondary uppercase tracking-wider mb-4">
                  {s.subtitle}
                </p>
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  {s.description}
                </p>
              </div>

              <ul className="space-y-2.5 pt-4 border-t border-slate-700/60 text-xs text-slate-300">
                {s.details.map((detail, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-secondary shrink-0" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Trust Badges Banner */}
        <div className="bg-gradient-to-r from-slate-800 via-slate-800/90 to-slate-800 rounded-3xl p-8 border border-slate-700 shadow-2xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {TRUST_BADGES.map((badge, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-brand-secondary/20 text-brand-secondary flex items-center justify-center shrink-0 border border-brand-secondary/30">
                  <badge.icon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-base mb-1">{badge.title}</h4>
                  <p className="text-xs text-slate-400">{badge.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Banner */}
        <div className="text-center mt-12">
          <a
            href={`/#${Section.CONTACT}`}
            className="btn-secondary"
          >
            Start Your Remodel Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default Process;

import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, ShieldCheck, Clock, Award, Star, Phone } from 'lucide-react';
import { Section } from '../types';

const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
  };

  return (
    <section id={Section.HERO} className="relative min-h-[92vh] flex items-center pt-28 pb-16 overflow-hidden bg-slate-900">
      {/* Background Video & Overlays */}
      <div className="absolute inset-0 z-0">
        <motion.video
          initial={{ scale: 1.08, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.65 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2000&auto=format&fit=crop"
          aria-label="Walk-in shower replacement and custom bathroom remodeling in Conway, Arkansas by All-Star Renovations"
        >
          <source src="https://videos.pexels.com/video-files/7002970/7002970-uhd_2560_1440_30fps.mp4" type="video/mp4" />
        </motion.video>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-900/85 to-transparent md:via-slate-900/75" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 z-10 w-full">
        <div className="max-w-2xl text-white">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-brand-secondary/20 text-brand-secondary rounded-full text-xs font-bold uppercase tracking-widest mb-6 border border-brand-secondary/30">
                <Star className="w-3.5 h-3.5 fill-current" /> Conway & Central Arkansas Premier Remodeler
              </span>
            </motion.div>
            
            <motion.h1 variants={itemVariants} className="text-4xl sm:text-6xl md:text-7xl font-serif font-bold leading-[1.1] mb-6 text-white">
              Your Dream Bathroom, <br />
              <span className="italic text-brand-secondary">Installed in 1-2 Days.</span>
            </motion.h1>
            
            <motion.p variants={itemVariants} className="text-base sm:text-lg text-slate-200 mb-10 leading-relaxed font-normal">
              Specializing in premium walk-in shower replacements, tub-to-shower conversions, and safety walk-in bathtubs across Conway, Greenbrier, Maumelle, and Little Rock. Built to last with a lifetime warranty.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href={`/#${Section.CONTACT}`}
                className="btn-secondary text-slate-900 font-bold px-8 py-4 text-base"
              >
                Get Free Conway Estimate
                <ChevronRight className="w-5 h-5" />
              </a>
              <a
                href="tel:5015043398"
                className="btn-primary px-8 py-4 text-base"
              >
                <Phone className="w-4 h-4 fill-current" />
                Call (501) 504-3398
              </a>
            </motion.div>

            <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-slate-700/80 pt-8">
              {[
                { icon: Clock, text: "1-2 Day Express Setup" },
                { icon: ShieldCheck, text: "Lifetime Limited Warranty" },
                { icon: Award, text: "Certified Master Pros" }
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 bg-slate-800/80 p-3 rounded-2xl border border-slate-700/60 shadow-sm"
                >
                  <div className="w-9 h-9 rounded-full bg-brand-secondary/20 flex items-center justify-center text-brand-secondary shrink-0">
                    <item.icon className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-semibold text-slate-100">{item.text}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

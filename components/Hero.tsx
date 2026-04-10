import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, ShieldCheck, Clock, Award } from 'lucide-react';
import { Section } from '../types';

const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } },
  };

  return (
    <section id={Section.HERO} className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Video with Overlay */}
      <div className="absolute inset-0 z-0 bg-slate-900">
        <motion.video
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-60"
          poster="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2000&auto=format&fit=crop"
          aria-label="Beautifully remodeled bathroom in Conway, Arkansas by All-Star Renovations"
        >
          <source src="https://videos.pexels.com/video-files/7002970/7002970-uhd_2560_1440_30fps.mp4" type="video/mp4" />
        </motion.video>
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-transparent md:via-white/70" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 z-10 w-full">
        <div className="max-w-2xl">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants}>
              <span className="inline-block px-4 py-1.5 bg-brand-secondary/10 text-brand-secondary rounded-full text-xs font-bold uppercase tracking-widest mb-6 border border-brand-secondary/20 shadow-sm">
                Creating Perfection
              </span>
            </motion.div>
            
            <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-serif font-bold text-brand-primary leading-[1.1] mb-6">
              Your Dream Bathroom, <br />
              <span className="italic text-brand-secondary">In Just 1-2 Days.</span>
            </motion.h1>
            
            <motion.p variants={itemVariants} className="text-lg text-slate-700 mb-10 leading-relaxed font-medium">
              Transform your outdated bathroom into a spa-like oasis with our premium shower replacements, tub conversions, and accessibility solutions. Quality you can trust, speed you'll love.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href={`/#${Section.CONTACT}`}
                className="bg-brand-primary text-white px-8 py-4 rounded-full font-bold hover:bg-brand-primary/90 transition-all flex items-center justify-center gap-2 group shadow-xl shadow-brand-primary/20"
              >
                Get Your Free Quote
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href={`/#${Section.SERVICES}`}
                className="bg-white text-brand-primary border border-slate-200 px-8 py-4 rounded-full font-bold hover:bg-slate-50 transition-all text-center shadow-sm"
              >
                Explore Services
              </a>
            </motion.div>

            <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-slate-200/60 pt-8">
              {[
                { icon: Clock, text: "1-2 Day Install" },
                { icon: ShieldCheck, text: "Lifetime Warranty" },
                { icon: Award, text: "Certified Pros" }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ y: -5 }}
                  className="flex items-center gap-3 bg-white/50 p-3 rounded-2xl backdrop-blur-sm border border-white/60 shadow-sm"
                >
                  <div className="w-10 h-10 rounded-full bg-brand-primary/5 flex items-center justify-center text-brand-primary shrink-0">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <span className="text-sm font-semibold text-slate-800">{item.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

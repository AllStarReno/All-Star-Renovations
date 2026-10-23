import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShowerHead, Bath, Accessibility, HeartPulse, X, Quote, CheckCircle } from 'lucide-react';
import { Section, Service } from '../types';

type Testimonial = {
  text: string;
  author: string;
};

type ExtendedService = Service & {
  imgAlt: string;
  imgTitle: string;
  detailedDescription: string;
  additionalImages: string[];
  testimonials: Testimonial[];
  ctaAnchorText: string;
};

const SERVICES_DATA: ExtendedService[] = [
  {
    id: '1',
    title: 'Shower Replacement',
    description: 'Upgrade your outdated shower with a non-porous, mold-resistant acrylic or custom tile system. Installed in as little as 1 day.',
    image: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=800&auto=format&fit=crop',
    icon: 'shower',
    imgAlt: 'Walk-in shower replacement renovation in Conway, AR by All-Star Renovations',
    imgTitle: 'Conway AR Walk-in Shower Replacement Services',
    ctaAnchorText: 'Explore Conway Shower Replacements',
    detailedDescription: 'Our shower replacement process is engineered for speed and longevity. We strip away old, deteriorating material and install factory-customized wall surrounds and low-barrier pans. Our non-porous materials prevent mold and mildew growth without harsh scrubbing, backed by our lifetime warranty.',
    additionalImages: [
      'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?q=80&w=800&auto=format&fit=crop'
    ],
    testimonials: [
      { text: "All-Star Renovations completely transformed our master bath in Conway. The new shower is stunning and so easy to keep clean!", author: "Sarah M., Conway AR" }
    ]
  },
  {
    id: '2',
    title: 'Tub-to-Shower Conversion',
    description: 'Convert your dangerous or underutilized high-step bathtub into a modern, accessible walk-in shower.',
    image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=800&auto=format&fit=crop',
    icon: 'conversion',
    imgAlt: 'Tub-to-shower conversion in Conway, AR by All-Star Renovations',
    imgTitle: 'Conway AR Tub-to-Shower Conversion Services',
    ctaAnchorText: 'Explore Tub-to-Shower Conversions',
    detailedDescription: 'If stepping over a tall bathtub wall is a safety hazard or inconvenience, our tub-to-shower conversion provides a spacious walk-in shower conversion. We custom manufacture shower pans to fit your exact footprint, complete with corner caddies, grab bars, and frameless glass doors.',
    additionalImages: [
      'https://images.unsplash.com/photo-1604709177225-055f99402ea3?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1584622781564-1d987f7333c1?q=80&w=800&auto=format&fit=crop'
    ],
    testimonials: [
      { text: "Getting rid of our old tub was the best decision. The new walk-in shower feels so much more spacious and safe.", author: "James T., Little Rock AR" }
    ]
  },
  {
    id: '3',
    title: 'Walk-In Tubs Installation',
    description: 'Combine safety and hydrotherapy luxury with quick-drain walk-in bathtubs featuring low step-ins and heated seating.',
    image: 'https://images.unsplash.com/photo-1600566752355-397921163bc3?q=80&w=800&auto=format&fit=crop',
    icon: 'walkin',
    imgAlt: 'Accessible walk-in tub installation in Conway, AR by All-Star Renovations',
    imgTitle: 'Conway AR Safety Walk-In Tub Installations',
    ctaAnchorText: 'Explore Walk-In Tub Solutions',
    detailedDescription: 'Enjoy independent bathing without fear of slipping. Our walk-in tubs feature watertight swinging doors, heated backrests, targeted air and water massage jets, and fast dual-drain systems so you never wait cold in the tub.',
    additionalImages: [
      'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800&auto=format&fit=crop'
    ],
    testimonials: [
      { text: "The walk-in tub has been a lifesaver for my mother. She can finally bathe safely and comfortably again.", author: "Emily R., Greenbrier AR" }
    ]
  },
  {
    id: '4',
    title: 'Aging-in-Place Renovations',
    description: 'Ensure long-term independence with ADA-compliant grab bars, barrier-free zero-threshold entries, and anti-slip floors.',
    image: 'https://images.unsplash.com/photo-1584622781564-1d987f7333c1?q=80&w=800&auto=format&fit=crop',
    icon: 'aging',
    imgAlt: 'Aging-in-place ADA compliant bathroom renovation in Conway, AR by All-Star Renovations',
    imgTitle: 'Conway AR Aging-in-Place Bathroom Renovations',
    ctaAnchorText: 'Explore Aging-in-Place Options',
    detailedDescription: 'We design accessible bathrooms that do not look institutional. By incorporating designer grab bars, handheld shower sprayers, roll-in or low-threshold bases, and comfort-height fixtures, we craft elegant spaces that protect mobility.',
    additionalImages: [
      'https://images.unsplash.com/photo-1604709177225-055f99402ea3?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=800&auto=format&fit=crop'
    ],
    testimonials: [
      { text: "The team at All-Star Renovations was thoughtful about our accessibility needs. The bathroom is beautiful and functional.", author: "Robert & Linda W., Maumelle AR" }
    ]
  },
];

const IconWrapper = ({ type }: { type: string }) => {
  switch (type) {
    case 'shower': 
      return <ShowerHead className="w-6 h-6" />;
    case 'conversion': 
      return <Bath className="w-6 h-6" />;
    case 'walkin': 
      return <Accessibility className="w-6 h-6" />;
    case 'aging': 
      return <HeartPulse className="w-6 h-6" />;
    default: return null;
  }
};

const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<ExtendedService | null>(null);

  React.useEffect(() => {
    if (selectedService) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedService]);

  return (
    <section id={Section.SERVICES} className="section-padding bg-white relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-secondary block mb-2">Our Core Remodeling Solutions</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-primary mb-6">
            Premium Bathroom Remodeling Services
          </h2>
          <p className="text-slate-600 text-lg">
            We specialize in high-impact bathroom transformations that enhance beauty, safety, and home equity in as little as 1 to 2 days.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {SERVICES_DATA.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-3xl bg-slate-50 border border-slate-200/80 hover:border-brand-primary/30 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="aspect-[16/10] overflow-hidden relative">
                  <img
                    src={service.image}
                    alt={service.imgAlt}
                    title={service.imgTitle}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 border border-white/20">
                    <CheckCircle className="w-3.5 h-3.5 text-brand-secondary" /> 1-2 Day Install
                  </div>
                </div>
                <div className="p-8">
                  <div className="w-12 h-12 rounded-2xl bg-brand-primary text-white flex items-center justify-center mb-6 shadow-md shadow-brand-primary/20">
                    <IconWrapper type={service.icon} />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-brand-primary mb-4">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-6 text-sm">
                    {service.description}
                  </p>
                </div>
              </div>

              <div className="p-8 pt-0">
                <button
                  onClick={() => setSelectedService(service)}
                  className="inline-flex items-center gap-2 text-brand-primary font-bold hover:text-brand-secondary transition-all text-sm cursor-pointer"
                >
                  <span>{service.ctaAnchorText}</span> &rarr;
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="absolute inset-0 bg-slate-900/70 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col z-10"
            >
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 z-20 p-2 bg-slate-900/80 hover:bg-slate-900 text-white rounded-full backdrop-blur-md transition-colors"
                aria-label="Close modal"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="overflow-y-auto">
                <div className="relative h-64 sm:h-80 w-full">
                  <img
                    src={selectedService.image}
                    alt={selectedService.imgAlt}
                    title={selectedService.imgTitle}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-8 flex items-end gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-brand-primary text-white flex items-center justify-center shadow-lg">
                      <IconWrapper type={selectedService.icon} />
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-widest text-brand-secondary">All-Star Remodeling Standard</span>
                      <h3 className="text-3xl sm:text-4xl font-serif font-bold text-white mb-1">
                        {selectedService.title}
                      </h3>
                    </div>
                  </div>
                </div>

                <div className="p-8 sm:p-10">
                  <div className="prose prose-lg max-w-none text-slate-600 mb-10">
                    <p className="text-lg font-medium text-slate-800 mb-4">
                      {selectedService.description}
                    </p>
                    <p className="text-sm leading-relaxed">
                      {selectedService.detailedDescription}
                    </p>
                  </div>

                  <div className="mb-10">
                    <h4 className="text-2xl font-serif font-bold text-brand-primary mb-6">Installation Portfolio Examples</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {selectedService.additionalImages.map((img, idx) => (
                        <div key={idx} className="aspect-video rounded-2xl overflow-hidden">
                          <img
                            src={img}
                            alt={`${selectedService.title} installation in Conway AR sample ${idx + 1}`}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  {selectedService.testimonials.length > 0 && (
                    <div className="mb-8">
                      <h4 className="text-2xl font-serif font-bold text-brand-primary mb-6">Verified Client Feedback</h4>
                      <div className="grid gap-6">
                        {selectedService.testimonials.map((testimonial, idx) => (
                          <div key={idx} className="bg-slate-50 rounded-2xl p-6 border border-slate-200 relative">
                            <Quote className="absolute top-6 right-6 w-8 h-8 text-brand-secondary/30" />
                            <p className="text-slate-700 italic text-sm mb-3 relative z-10">"{testimonial.text}"</p>
                            <p className="text-xs font-bold text-brand-primary">— {testimonial.author}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="mt-8 pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-6">
                    <div>
                      <h4 className="text-xl font-serif font-bold text-slate-900 mb-1">Ready for Your Free In-Home Estimate?</h4>
                      <p className="text-slate-600 text-xs">Our experts bring material swatches directly to your doorstep.</p>
                    </div>
                    <a
                      href={`/#${Section.CONTACT}`}
                      onClick={() => setSelectedService(null)}
                      className="btn-secondary text-slate-900 w-full sm:w-auto text-center font-bold"
                    >
                      Request Free Estimate
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Services;

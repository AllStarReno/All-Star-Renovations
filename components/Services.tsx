import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShowerHead, Bath, Accessibility, HeartPulse, X, Quote } from 'lucide-react';
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
};

const SERVICES_DATA: ExtendedService[] = [
  {
    id: '1',
    title: 'Shower Replacement',
    description: 'Upgrade your old, dingy shower with a modern, low-maintenance system. Choose from dozens of colors and textures.',
    image: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=800&auto=format&fit=crop',
    icon: 'shower',
    imgAlt: 'Premium Shower Replacement in Conway AR by All-Star Renovations',
    imgTitle: 'Shower Replacement Services - Conway, Arkansas',
    detailedDescription: 'Our shower replacement process is designed to be seamless and stress-free. We remove your old, outdated shower and replace it with a beautiful, custom-fitted system that is easy to clean and built to last. With our wide selection of colors, patterns, and accessories, you can design the perfect shower to match your style and needs. Most installations are completed in just one to two days!',
    additionalImages: [
      'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?q=80&w=800&auto=format&fit=crop'
    ],
    testimonials: [
      { text: "All-Star Renovations completely transformed our master bath. The new shower is stunning and so easy to keep clean!", author: "Sarah M., Conway AR" }
    ]
  },
  {
    id: '2',
    title: 'Tub-to-Shower Conversion',
    description: 'Maximize your space and safety by converting your rarely used bathtub into a spacious, walk-in shower.',
    image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=800&auto=format&fit=crop',
    icon: 'conversion',
    imgAlt: 'Tub-to-Shower Conversion in Conway AR by All-Star Renovations',
    imgTitle: 'Tub-to-Shower Conversion - Conway, Arkansas',
    detailedDescription: 'If you have a bathtub that you rarely use, or if stepping over a high tub wall has become difficult, our tub-to-shower conversion is the perfect solution. We expertly remove your old tub and install a sleek, accessible walk-in shower in its place. This not only makes your bathroom safer but also creates a more open and modern feel.',
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
    title: 'Walk-In Tubs',
    description: 'Combine safety and luxury with our walk-in tubs, featuring easy-entry doors, hydrotherapy jets, and heated seating.',
    image: 'https://images.unsplash.com/photo-1600566752355-397921163bc3?q=80&w=800&auto=format&fit=crop',
    icon: 'walkin',
    imgAlt: 'Safe Walk-In Tub Installation in Conway AR by All-Star Renovations',
    imgTitle: 'Walk-In Tubs - Conway, Arkansas',
    detailedDescription: 'Regain your bathing independence with a premium walk-in tub. Designed with your safety and comfort in mind, our walk-in tubs feature ultra-low step-in heights, secure grab bars, and comfortable built-in seating. Enjoy the therapeutic benefits of hydrotherapy jets and heated surfaces, turning your daily bath into a spa-like experience right in your own home.',
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
    title: 'Aging-in-Place',
    description: 'Ensure your bathroom remains safe and accessible for years to come with grab bars, slip-resistant flooring, and more.',
    image: 'https://images.unsplash.com/photo-1584622781564-1d987f7333c1?q=80&w=800&auto=format&fit=crop',
    icon: 'aging',
    imgAlt: 'Aging-in-Place Bathroom Renovation in Conway AR by All-Star Renovations',
    imgTitle: 'Aging-in-Place Renovations - Conway, Arkansas',
    detailedDescription: 'Our aging-in-place renovations are tailored to help you stay in the home you love safely and comfortably. We offer a range of accessible solutions, including strategically placed grab bars, slip-resistant flooring, ADA-compliant toilets, and barrier-free showers. We work closely with you to design a bathroom that meets your current needs and anticipates future ones, without sacrificing style.',
    additionalImages: [
      'https://images.unsplash.com/photo-1604709177225-055f99402ea3?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=800&auto=format&fit=crop'
    ],
    testimonials: [
      { text: "The team at All-Star Renovations was incredibly thoughtful about our accessibility needs. The bathroom is beautiful and functional.", author: "Robert & Linda W., Maumelle AR" }
    ]
  },
];

const IconWrapper = ({ type }: { type: string }) => {
  switch (type) {
    case 'shower': 
      return (
        <motion.div
          variants={{
            hover: { y: [0, -3, 0], transition: { duration: 0.6, repeat: Infinity } }
          }}
        >
          <ShowerHead className="w-6 h-6" />
        </motion.div>
      );
    case 'conversion': 
      return (
        <motion.div
          variants={{
            hover: { rotate: [0, -15, 15, -15, 0], transition: { duration: 0.8, repeat: Infinity } }
          }}
        >
          <Bath className="w-6 h-6" />
        </motion.div>
      );
    case 'walkin': 
      return (
        <motion.div
          variants={{
            hover: { x: [0, 4, -4, 0], transition: { duration: 0.8, repeat: Infinity } }
          }}
        >
          <Accessibility className="w-6 h-6" />
        </motion.div>
      );
    case 'aging': 
      return (
        <motion.div
          variants={{
            hover: { scale: [1, 1.2, 1, 1.2, 1], transition: { duration: 1, repeat: Infinity } }
          }}
        >
          <HeartPulse className="w-6 h-6" />
        </motion.div>
      );
    default: return null;
  }
};

const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<ExtendedService | null>(null);

  // Prevent scrolling when modal is open
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
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-primary mb-6">
            Complete Bathroom Solutions
          </h2>
          <p className="text-slate-600 text-lg">
            We specialize in high-impact renovations that improve the beauty, safety, and value of your home in record time.
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
              whileHover="hover"
              className="group relative overflow-hidden rounded-3xl bg-slate-50 border border-slate-100"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.imgAlt}
                  title={service.imgTitle}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8">
                <div className="w-12 h-12 rounded-2xl bg-brand-primary text-white flex items-center justify-center mb-6 shadow-lg shadow-brand-primary/20">
                  <IconWrapper type={service.icon} />
                </div>
                <h3 className="text-2xl font-serif font-bold text-brand-primary mb-4">
                  {service.title}
                </h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  {service.description}
                </p>
                <button
                  onClick={() => setSelectedService(service)}
                  className="inline-flex items-center gap-2 text-brand-secondary font-bold hover:gap-3 transition-all"
                >
                  Learn More <span>&rarr;</span>
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
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col z-10"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 z-20 p-2 bg-white/80 hover:bg-white text-slate-900 rounded-full backdrop-blur-md transition-colors"
                aria-label="Close modal"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="overflow-y-auto">
                {/* Hero Image */}
                <div className="relative h-64 sm:h-80 w-full">
                  <img
                    src={selectedService.image}
                    alt={selectedService.imgAlt}
                    title={selectedService.imgTitle}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-8 flex items-end gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-brand-primary text-white flex items-center justify-center shadow-lg">
                      <IconWrapper type={selectedService.icon} />
                    </div>
                    <h3 className="text-3xl sm:text-4xl font-serif font-bold text-white mb-1">
                      {selectedService.title}
                    </h3>
                  </div>
                </div>

                <div className="p-8 sm:p-10">
                  {/* Description */}
                  <div className="prose prose-lg max-w-none text-slate-600 mb-12">
                    <p className="text-xl font-medium text-slate-800 mb-4">
                      {selectedService.description}
                    </p>
                    <p>
                      {selectedService.detailedDescription}
                    </p>
                  </div>

                  {/* Additional Images Grid */}
                  <div className="mb-12">
                    <h4 className="text-2xl font-serif font-bold text-brand-primary mb-6">Gallery</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {selectedService.additionalImages.map((img, idx) => (
                        <div key={idx} className="aspect-video rounded-2xl overflow-hidden">
                          <img
                            src={img}
                            alt={`${selectedService.title} Example ${idx + 1}`}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Testimonials */}
                  {selectedService.testimonials.length > 0 && (
                    <div className="mb-10">
                      <h4 className="text-2xl font-serif font-bold text-brand-primary mb-6">What Our Clients Say</h4>
                      <div className="grid gap-6">
                        {selectedService.testimonials.map((testimonial, idx) => (
                          <div key={idx} className="bg-slate-50 rounded-2xl p-6 border border-slate-100 relative">
                            <Quote className="absolute top-6 right-6 w-8 h-8 text-brand-secondary/20" />
                            <p className="text-slate-700 italic mb-4 relative z-10">"{testimonial.text}"</p>
                            <p className="text-sm font-bold text-brand-primary">— {testimonial.author}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* CTA */}
                  <div className="mt-8 pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-6">
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 mb-1">Ready to get started?</h4>
                      <p className="text-slate-600">Contact us today for a free, no-obligation estimate.</p>
                    </div>
                    <a
                      href={`/#${Section.CONTACT}`}
                      onClick={() => setSelectedService(null)}
                      className="btn-primary w-full sm:w-auto text-center"
                    >
                      Get a Free Quote
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

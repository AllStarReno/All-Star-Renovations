import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Phone, Mail, MapPin, CheckCircle2, ShieldCheck, Clock, Award } from 'lucide-react';
import { Section } from '../types';

const Contact: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: 'Shower Replacement',
    timeline: 'Immediate (1-2 Weeks)',
    budget: '$5,000 - $10,000'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id={Section.CONTACT} className="section-padding bg-brand-primary text-white relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block px-4 py-1.5 bg-brand-secondary/20 text-brand-secondary rounded-full text-xs font-bold uppercase tracking-widest mb-6 border border-brand-secondary/30">
              Get Your Free Estimate
            </span>
            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8 leading-tight">
              Ready to <span className="italic text-brand-secondary">Transform</span> Your Bathroom?
            </h2>
            <p className="text-slate-200 text-lg mb-10 leading-relaxed font-normal">
              Schedule your free, no-obligation in-home consultation. Our design specialists will assess your space, showcase premium sample materials, and provide an exact, all-inclusive price lock estimate on the spot.
            </p>

            {/* Direct Phone Call Button */}
            <div className="mb-10 p-6 bg-white/10 rounded-2xl border border-white/15 backdrop-blur-md">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-widest text-brand-secondary font-bold">Need Immediate Help?</p>
                  <p className="text-2xl font-bold text-white">(501) 504-3398</p>
                </div>
                <a
                  href="tel:5015043398"
                  className="bg-brand-secondary text-slate-900 font-bold px-6 py-3 rounded-full hover:bg-brand-secondary/90 transition-all flex items-center gap-2 shadow-md shrink-0"
                >
                  <Phone className="w-4 h-4 fill-current" />
                  Call Now
                </a>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-brand-secondary shrink-0 border border-white/20">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-white">Direct Line</h4>
                  <a href="tel:5015043398" className="text-slate-300 hover:text-brand-secondary transition-colors">1 (501) 504-3398</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-brand-secondary shrink-0 border border-white/20">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-white">Email Us</h4>
                  <a href="mailto:info@allstarreno.com" className="text-slate-300 hover:text-brand-secondary transition-colors">info@allstarreno.com</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-brand-secondary shrink-0 border border-white/20">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-white">Main Office & Showroom</h4>
                  <p className="text-slate-300">11 Arnett Ln, Conway, AR 72032</p>
                </div>
              </div>
            </div>
          </div>

          {/* Conversion Optimized Lead Form */}
          <div className="bg-white rounded-3xl p-8 md:p-12 text-slate-900 shadow-2xl border border-slate-100">
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-3xl font-serif font-bold text-brand-primary mb-4">Request Received!</h3>
                <p className="text-slate-600 mb-8 leading-relaxed">
                  Thank you for reaching out, <strong>{formData.firstName}</strong>. One of our master design consultants will contact you within 15 minutes to confirm your free in-home consultation.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="text-brand-primary font-bold hover:underline"
                >
                  Send another request
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="border-b border-slate-100 pb-4 mb-2">
                  <h3 className="text-2xl font-serif font-bold text-brand-primary">Get Your Free Estimate</h3>
                  <p className="text-xs text-slate-500 mt-1">No pressure. Guaranteed exact quote in 30 minutes or less.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">First Name *</label>
                    <input
                      required
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/10 outline-none transition-all text-sm"
                      placeholder="John"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Last Name *</label>
                    <input
                      required
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/10 outline-none transition-all text-sm"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Phone Number *</label>
                    <input
                      required
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/10 outline-none transition-all text-sm"
                      placeholder="(501) 000-0000"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Email Address *</label>
                    <input
                      required
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/10 outline-none transition-all text-sm"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Service Interested In</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/10 outline-none transition-all bg-white text-sm"
                  >
                    <option value="Shower Replacement">Shower Replacement</option>
                    <option value="Tub-to-Shower Conversion">Tub-to-Shower Conversion</option>
                    <option value="Walk-In Tub Installation">Walk-In Tub Installation</option>
                    <option value="Aging-in-Place Renovation">Aging-in-Place Renovation</option>
                    <option value="Full Bathroom Remodel">Full Bathroom Remodel</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Remodel Timeline</label>
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/10 outline-none transition-all bg-white text-sm"
                    >
                      <option value="Immediate (1-2 Weeks)">Immediate (1-2 Weeks)</option>
                      <option value="Within 1 Month">Within 1 Month</option>
                      <option value="1 to 3 Months">1 to 3 Months</option>
                      <option value="Planning / Flexible">Planning / Flexible</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Estimated Budget</label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/10 outline-none transition-all bg-white text-sm"
                    >
                      <option value="Under $5,000">Under $5,000</option>
                      <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                      <option value="$10,000 - $20,000">$10,000 - $20,000</option>
                      <option value="$20,000+">$20,000+</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full btn-secondary py-4 rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-brand-secondary/20 text-slate-900 text-base"
                >
                  Request Free Estimate
                  <Send className="w-4 h-4" />
                </button>

                <div className="flex items-center justify-between text-[11px] text-slate-500 pt-2 border-t border-slate-100">
                  <span className="flex items-center gap-1"><ShieldCheck className="w-3.5 h-3.5 text-green-600" /> 100% Privacy Protected</span>
                  <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5 text-brand-primary" /> Free Consultation</span>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

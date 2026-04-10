import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { Section } from '../types';

interface FAQItem {
  question: string;
  answer: React.ReactNode;
}

const FAQ_DATA: FAQItem[] = [
  {
    question: "How long does a typical bathroom remodel take?",
    answer: "Most of our premium bathroom remodeling projects, including shower replacements and tub-to-shower conversions, are completed in just 1 to 2 days. We prioritize efficiency without compromising on our high-quality craftsmanship."
  },
  {
    question: "Do you offer financing options?",
    answer: (
      <div className="space-y-4">
        <p>Yes, we do! We partner with top financial institutions to offer flexible financing options. You can easily apply for pre-qualification through the links below:</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
          <a href="https://www.hfsfinancial.net/promo/694b39a1cf56ce5beb1df002/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center p-4 border border-slate-200 rounded-xl hover:border-brand-secondary transition-colors bg-white">
            <img src="https://logo.clearbit.com/hfsfinancial.net" alt="HFS Financial Logo - Financing Partner for All-Star Renovations" title="HFS Financial - Conway AR" className="h-12 object-contain mb-3" referrerPolicy="no-referrer" />
            <span className="text-sm font-semibold text-brand-primary text-center">HFS Financial</span>
          </a>
          <a href="https://my.acornfinance.com/open-overview" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center p-4 border border-slate-200 rounded-xl hover:border-brand-secondary transition-colors bg-white">
            <img src="https://logo.clearbit.com/acornfinance.com" alt="Acorn Finance Logo - Financing Partner for All-Star Renovations" title="Acorn Finance - Conway AR" className="h-12 object-contain mb-3" referrerPolicy="no-referrer" />
            <span className="text-sm font-semibold text-brand-primary text-center">Acorn Finance</span>
          </a>
          <a href="https://pros.renofi.com/pros/all-star-renovations" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center p-4 border border-slate-200 rounded-xl hover:border-brand-secondary transition-colors bg-white">
            <img src="https://logo.clearbit.com/renofi.com" alt="RenoFi Logo - Financing Partner for All-Star Renovations" title="RenoFi - Conway AR" className="h-12 object-contain mb-3" referrerPolicy="no-referrer" />
            <span className="text-sm font-semibold text-brand-primary text-center">RenoFi</span>
          </a>
        </div>
      </div>
    )
  },
  {
    question: "How much does a bathroom remodel cost?",
    answer: "Pricing varies depending on the scope of the project, materials selected, and specific requirements like accessibility features. We offer free, no-obligation in-home consultations where our experts will provide you with an exact quote on the spot."
  },
  {
    question: "Are your materials mold and mildew resistant?",
    answer: "Absolutely. We use high-quality, durable, and non-porous materials that are specifically designed to resist mold and mildew, making your new bathroom incredibly easy to clean and maintain."
  },
  {
    question: "Do you provide a warranty for your work?",
    answer: "Yes, we stand behind our craftsmanship and materials. We offer a Lifetime Warranty on our installations, ensuring your peace of mind and the long-lasting beauty of your new bathroom."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id={Section.FAQ} className="section-padding bg-slate-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="w-16 h-16 bg-brand-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <HelpCircle className="w-8 h-8 text-brand-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-primary mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Everything you need to know about our renovation process, pricing, and financing options.
          </p>
        </div>

        <div className="space-y-4">
          {FAQ_DATA.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none"
              >
                <span className="font-bold text-lg text-brand-primary pr-8">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="shrink-0 w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-brand-secondary"
                >
                  <ChevronDown className="w-5 h-5" />
                </motion.div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 pt-2 text-slate-600 leading-relaxed border-t border-slate-100">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;

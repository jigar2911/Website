"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "How long does a typical web project take?",
    answer: "For most Kiwi businesses, a custom high-performance website takes between 4-8 weeks from initial strategy to launch, depending on complexity and features."
  },
  {
    question: "Do you handle SEO and hosting as well?",
    answer: "Absolutely. We provide full-service solutions including local NZ hosting, technical SEO setup, and ongoing performance optimization to ensure you rank well in Google NZ."
  },
  {
    question: "Can I update the content myself after launch?",
    answer: "Yes! We build on top of user-friendly CMS platforms (like Sanity or custom Next.js setups) so you can easily edit text, images, and blog posts without touching code."
  },
  {
    question: "What makes Oncall different from other NZ agencies?",
    answer: "We combine cutting-edge technology (like the interactive smoke effect you see here) with a conversion-first mindset. We don't just build websites; we build business tools that drive revenue."
  },
  {
    question: "How do we get started?",
    answer: "Simply click the 'Get Started' or 'Get Free Consultation' button. We'll set up a discovery call to learn about your business and provide a transparent quote."
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6">FREQUENTLY ASKED <span className="text-brand-orange">QUESTIONS</span></h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-sm">
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
              >
                <span className="text-xl font-bold text-white pr-8">{faq.question}</span>
                {activeIndex === index ? <Minus className="text-brand-orange shrink-0" /> : <Plus className="text-brand-orange shrink-0" />}
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-8 pb-8 text-gray-400 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;

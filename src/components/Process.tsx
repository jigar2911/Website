"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Search, PenTool, Code2, Rocket, Headphones } from 'lucide-react';

const steps = [
  {
    title: "Discovery & Strategy",
    description: "We dive deep into your business goals, target audience, and local NZ market competition to craft a winning digital strategy.",
    icon: Search,
    color: "bg-blue-500"
  },
  {
    title: "UX/UI Design",
    description: "Our designers create stunning, high-converting layouts that reflect your brand and provide a seamless experience across all devices.",
    icon: PenTool,
    color: "bg-purple-500"
  },
  {
    title: "Agile Development",
    description: "We build your site using the latest tech (Next.js, Tailwind) ensuring it is lightning fast, secure, and SEO-friendly from day one.",
    icon: Code2,
    color: "bg-orange-500"
  },
  {
    title: "Testing & Launch",
    description: "Rigorous quality assurance testing ensures everything is perfect before we go live on your custom NZ domain.",
    icon: Rocket,
    color: "bg-green-500"
  },
  {
    title: "Ongoing Support",
    description: "We don't just launch and leave. We provide local NZ support, maintenance, and marketing updates to keep you ahead.",
    icon: Headphones,
    color: "bg-red-500"
  }
];

const Process = () => {
  return (
    <section id="process" className="py-24 bg-black/50 backdrop-blur-sm relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6">OUR <span className="text-brand-orange">PROCESS</span></h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">From concept to conversion, we follow a proven 5-step roadmap to digital success.</p>
        </div>

        <div className="relative">
          {/* Connection Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-y-1/2" />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative flex flex-col items-center text-center group"
              >
                <div className={`w-20 h-20 ${step.color} rounded-2xl flex items-center justify-center mb-6 transform group-hover:rotate-12 transition-transform shadow-lg shadow-black/50 relative z-20`}>
                  <step.icon className="w-10 h-10 text-white" />
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-white text-black font-black rounded-full flex items-center justify-center text-sm border-4 border-black">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;

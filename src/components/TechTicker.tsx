"use client";
import React from 'react';
import { motion } from 'framer-motion';

const tech = [
  "#nodejs", "#wordpress", "#reactjs", "#nextjs", "#typescript",
  "#tailwindcss", "#webdesign", "#seo", "#marketing", "#branding",
  "#ecommerce", "#saas", "#automation", "#php", "#mysql", "#aws"
];

const TechTicker = () => {
  return (
    <div className="py-10 bg-brand-orange overflow-hidden whitespace-nowrap relative border-y-4 border-black">
      <motion.div
        className="inline-block"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 30,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {[...tech, ...tech].map((item, index) => (
          <span key={index} className="text-3xl md:text-5xl font-black text-black mx-8 uppercase tracking-tighter italic inline-flex items-center">
            {item} <span className="text-white ml-8">•</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default TechTicker;

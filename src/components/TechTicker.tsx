"use client";
import React from 'react';
import { motion } from 'framer-motion';

const tech = [
  "#css", "#html", "#php", "#react", "#nextjs", "#webdesign", "#seo",
  "#marketing", "#branding", "#ecommerce", "#saas", "#automation"
];

const TechTicker = () => {
  return (
    <div className="py-10 bg-brand-orange overflow-hidden whitespace-nowrap relative border-y-4 border-black">
      <motion.div
        className="inline-block"
        animate={{ x: [0, -1000] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear"
          }
        }}
      >
        {[...tech, ...tech, ...tech].map((item, index) => (
          <span key={index} className="text-3xl md:text-5xl font-black text-black mx-8 uppercase tracking-tighter italic">
            {item} <span className="text-white ml-8">•</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default TechTicker;

"use client";
import React from 'react';
import { Phone } from 'lucide-react';
import { motion } from 'framer-motion';

const CallButton = () => {
  return (
    <motion.a
      href="tel:+6400000000" // Placeholder NZ number
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-50 bg-white text-black p-4 rounded-full shadow-2xl flex items-center justify-center border-4 border-brand-orange group hover:bg-brand-orange hover:text-white transition-colors"
      title="Call NZ Support"
    >
      <Phone className="w-8 h-8 group-hover:animate-bounce" />
      <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs group-hover:ml-3 transition-all duration-500 font-bold">
        NZ SUPPORT
      </span>
    </motion.a>
  );
};

export default CallButton;

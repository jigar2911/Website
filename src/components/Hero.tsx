import { ArrowRight } from 'lucide-react';
import FloatingShapes from './FloatingShapes';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 px-4 overflow-hidden">
      <FloatingShapes />
      <div className="max-w-7xl mx-auto text-center z-10">
        <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full mb-8 backdrop-blur-sm">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-orange opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-orange"></span>
          </span>
          <span className="text-white text-sm font-medium">New Zealand&apos;s Premier Digital Studio</span>
        </div>

        <h1 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tight leading-[0.9]">
          WE BUILD <br />
          <span className="text-brand-orange">FUTURE-PROOF</span> <br />
          WEBSITES
        </h1>

        <p className="text-lg md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto font-medium relative group">
          Specializing in high-performance
          <span className="text-white px-2 py-1 bg-white/5 border border-white/10 rounded-lg mx-1 inline-block hover:border-brand-orange/50 transition-colors">Web Apps</span>,
          <span className="text-white px-2 py-1 bg-white/5 border border-white/10 rounded-lg mx-1 inline-block hover:border-brand-orange/50 transition-colors">SEO</span>, and
          <span className="text-white px-2 py-1 bg-white/5 border border-white/10 rounded-lg mx-1 inline-block hover:border-brand-orange/50 transition-colors">Marketing</span> solutions
          that drive real growth for Kiwi businesses.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <a href="#contact" className="group flex items-center space-x-3 px-10 py-5 bg-brand-orange hover:bg-orange-600 text-white text-xl font-bold rounded-full transition-all transform hover:scale-105">
            <span>Start a Project</span>
            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#services" className="px-10 py-5 bg-white/5 hover:bg-white/10 text-white text-xl font-bold rounded-full transition-all border border-white/20 backdrop-blur-md">
            View Our Work
          </a>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-brand-orange rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

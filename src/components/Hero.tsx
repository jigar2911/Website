import { ArrowRight, MapPin } from 'lucide-react';
import FloatingShapes from './FloatingShapes';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 px-4 overflow-hidden">
      <FloatingShapes />
      <div className="max-w-7xl mx-auto text-center z-10">
        <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full mb-8 backdrop-blur-sm">
          <MapPin className="w-4 h-4 text-brand-orange" />
          <span className="text-white text-sm font-medium">Serving All of New Zealand</span>
        </div>

        <h1 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tight leading-[0.9]">
          PREMIER <br />
          <span className="text-brand-orange">KIWI DIGITAL</span> <br />
          SOLUTIONS
        </h1>

        <p className="text-lg md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto font-medium relative group">
          Specializing in high-performance
          <span className="text-white px-2 py-1 bg-white/5 border border-white/10 rounded-lg mx-1 inline-block hover:border-brand-orange/50 transition-colors">Web Design</span>,
          <span className="text-white px-2 py-1 bg-white/5 border border-white/10 rounded-lg mx-1 inline-block hover:border-brand-orange/50 transition-colors">NZ SEO</span>, and
          <span className="text-white px-2 py-1 bg-white/5 border border-white/10 rounded-lg mx-1 inline-block hover:border-brand-orange/50 transition-colors">Support</span> solutions
          tailored for local businesses from Auckland to Invercargill.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <a href="#contact" className="group flex items-center space-x-3 px-10 py-5 bg-brand-orange hover:bg-orange-600 text-white text-xl font-bold rounded-full transition-all transform hover:scale-105">
            <span>Get Free Consultation</span>
            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#services" className="px-10 py-5 bg-white/5 hover:bg-white/10 text-white text-xl font-bold rounded-full transition-all border border-white/20 backdrop-blur-md">
            Our Services
          </a>
        </div>
      </div>

      {/* Decorative NZ Map Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20 flex items-center justify-center">
        <svg viewBox="0 0 500 800" className="w-[600px] h-auto fill-none stroke-white/20 stroke-[0.5]" xmlns="http://www.w3.org/2000/svg">
          {/* Rough path for NZ North Island */}
          <path d="M330,80 C350,90 380,120 400,160 C420,200 410,250 380,280 C350,310 320,320 280,310 C240,300 220,270 200,240 C180,210 190,170 210,130 C230,90 270,70 330,80 Z" />
          {/* Rough path for NZ South Island */}
          <path d="M220,360 C250,380 270,420 280,480 C290,540 280,620 240,680 C200,740 150,780 100,770 C50,760 40,700 60,620 C80,540 120,460 170,400 C200,370 210,350 220,360 Z" />
          {/* Connection bits/Stewart Island */}
          <circle cx="80" cy="780" r="10" />
        </svg>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-brand-orange rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

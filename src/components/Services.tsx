import { Monitor, Smartphone, Search, Rocket, Code2, Globe, Cpu, Zap } from 'lucide-react';

const services = [
  {
    title: "Web Development",
    description: "Lightning-fast websites built with Next.js 14 and modern architectures for optimal user experience.",
    icon: Globe,
    color: "blue"
  },
  {
    title: "App Solutions",
    description: "Custom web applications and enterprise software tailored to automate and grow your business.",
    icon: Cpu,
    color: "orange"
  },
  {
    title: "SEO Strategy",
    description: "Dominating search rankings with data-backed SEO that puts your business in front of the right audience.",
    icon: Search,
    color: "blue"
  },
  {
    title: "Digital Growth",
    description: "Full-stack marketing and lead generation strategies designed to maximize your ROI and scaling.",
    icon: Rocket,
    color: "orange"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-32 px-4 relative bg-black/60">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-brand-orange font-bold tracking-widest uppercase mb-4">What We Do</h2>
            <p className="text-4xl md:text-6xl font-bold text-white leading-tight">
              Bespoke Digital <br /> Solutions for Modern <br /> Enterprise.
            </p>
          </div>
          <p className="text-gray-400 text-lg max-w-md">
            We bridge the gap between complex technology and business results,
            delivering premium digital assets that perform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group p-10 rounded-[2rem] bg-white/5 border border-white/10 hover:bg-white/[0.08] transition-all duration-500 flex flex-col justify-between min-h-[320px]">
              <div>
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-8 bg-black/40 border border-white/10 group-hover:border-brand-orange/50 transition-colors">
                  <service.icon className="text-white group-hover:text-brand-orange transition-colors" size={32} />
                </div>
                <h3 className="text-3xl font-bold text-white mb-4 tracking-tight">{service.title}</h3>
                <p className="text-gray-400 text-lg leading-relaxed">
                  {service.description}
                </p>
              </div>
              <div className="mt-8">
                <div className="h-1 w-12 bg-brand-orange/30 group-hover:w-full transition-all duration-700"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

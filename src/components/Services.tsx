import { Monitor, Smartphone, Search, Rocket, Code2, Globe, Cpu, Zap, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    title: "Web Design",
    slug: "web-design",
    description: "Lightning-fast, mobile-responsive websites built with Next.js 14 for optimal performance and conversion.",
    icon: Globe,
    image: "/assets/services1.png"
  },
  {
    title: "SEO Strategy",
    slug: "seo",
    description: "Data-driven SEO solutions to help Christchurch businesses dominate search rankings and attract more leads.",
    icon: Search,
    image: "/assets/digital marketing.png"
  },
  {
    title: "Software Solutions",
    slug: "software-solutions",
    description: "Custom web applications and enterprise software tailored to automate and streamline your business operations.",
    icon: Cpu,
    image: "/assets/services 2.png"
  },
  {
    title: "Ongoing Support",
    slug: "support",
    description: "Dedicated maintenance and technical support to keep your digital assets running smoothly 24/7.",
    icon: Rocket,
    image: "/assets/pic 3.png"
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
            <Link
              href={`/services/${service.slug}`}
              key={index}
              className="group p-10 rounded-[2rem] bg-white/5 border border-white/10 hover:bg-white/[0.08] transition-all duration-500 flex flex-col justify-between min-h-[320px] cursor-pointer"
            >
              <div>
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-8 bg-black/40 border border-white/10 group-hover:border-brand-orange/50 transition-colors">
                  <service.icon className="text-white group-hover:text-brand-orange transition-colors" size={32} />
                </div>
                <div className="flex items-center justify-between">
                  <h3 className="text-3xl font-bold text-white mb-4 tracking-tight">{service.title}</h3>
                  <ArrowRight className="text-brand-orange opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" size={24} />
                </div>
                <p className="text-gray-400 text-lg leading-relaxed mb-6">
                  {service.description}
                </p>
                {service.image && (
                  <div className="mt-4 rounded-xl overflow-hidden border border-white/10 group-hover:border-brand-orange/30 transition-colors h-48 relative">
                    <img src={service.image} alt={service.title} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                )}
              </div>
              <div className="mt-8">
                <div className="h-1 w-12 bg-brand-orange/30 group-hover:w-full transition-all duration-700"></div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

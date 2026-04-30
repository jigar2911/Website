import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SmokeBackground from '@/components/SmokeBackground';
import CallButton from '@/components/CallButton';
import { ArrowRight, Code2, Database, ShieldCheck, Zap } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Custom Software Development NZ | Oncall Websites Christchurch',
  description: 'Custom web applications, enterprise software, and automation solutions for New Zealand businesses. Built for scale and reliability.',
};

export default function SoftwareSolutionsPage() {
  return (
    <main className="min-h-screen">
      <SmokeBackground />
      <Navbar />

      <div className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-20 mb-32 items-center">
            <div className="lg:w-1/2">
              <h1 className="text-brand-orange font-bold tracking-widest uppercase mb-4">Software Solutions</h1>
              <h2 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-8">
                Enterprise <br /> Power. <br /> Local Focus.
              </h2>
              <p className="text-gray-400 text-xl leading-relaxed mb-10">
                Off-the-shelf software often fails to meet unique business needs. We build custom
                web applications and digital tools designed specifically for your workflows
                and Christchurch business goals.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { title: "Scalable", icon: Zap },
                  { title: "Secure", icon: ShieldCheck },
                  { title: "Bespoke", icon: Code2 },
                  { title: "Data-Driven", icon: Database }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 bg-white/5 rounded-2xl border border-white/10">
                    <item.icon className="text-brand-orange" size={20} />
                    <span className="text-white font-medium">{item.title}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 relative h-[500px] w-full rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=2070"
                alt="Software Development Code"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-[3rem] p-12 mb-32">
            <h3 className="text-3xl font-bold text-white mb-12 text-center text-brand-orange">Our Tech Stack</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { name: "Next.js", desc: "For frontend speed" },
                { name: "TypeScript", desc: "For robust code" },
                { name: "Node.js", desc: "For powerful APIs" },
                { name: "PostgreSQL", desc: "For reliable data" }
              ].map((tech, i) => (
                <div key={i} className="space-y-2">
                  <div className="text-2xl font-bold text-white">{tech.name}</div>
                  <div className="text-gray-400 text-sm">{tech.desc}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="max-w-4xl">
            <h3 className="text-3xl font-bold text-white mb-8">Custom Application Development in NZ</h3>
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>
                Whether you need a custom CRM, a member portal, or a complex automation engine,
                our software engineers are here to help. We follow Agile methodologies, ensuring
                you are involved in every sprint and that the final product aligns perfectly
                with your vision.
              </p>
              <p>
                Security and data sovereignty are at the heart of our software development process.
                We ensure your applications are compliant with New Zealand data regulations
                while providing a seamless experience for your end users.
              </p>
              <div className="pt-8">
                <Link
                  href="/#contact"
                  className="bg-brand-orange text-white px-12 py-5 rounded-full font-bold hover:bg-white hover:text-black transition-all duration-300"
                >
                  Consult an Expert
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <CallButton />
    </main>
  );
}

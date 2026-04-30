import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SmokeBackground from '@/components/SmokeBackground';
import CallButton from '@/components/CallButton';
import { ArrowRight, LifeBuoy, Clock, ShieldCheck, HeartHandshake } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Website Support & Maintenance Christchurch | Oncall Websites',
  description: 'Reliable 24/7 technical support and maintenance for your website and apps. Christchurch-based experts keeping your digital assets secure and up-to-date.',
};

export default function SupportPage() {
  return (
    <main className="min-h-screen">
      <SmokeBackground />
      <Navbar />

      <div className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h1 className="text-brand-orange font-bold tracking-widest uppercase mb-4">Ongoing Support</h1>
            <h2 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-8">
              We&apos;ve Got <br /> Your Back.
            </h2>
            <p className="text-gray-400 text-xl max-w-3xl leading-relaxed">
              Launch is just the beginning. Our Christchurch-based technical support team ensures
              your digital infrastructure remains secure, fast, and operational 24/7.
              Peace of mind is just a phone call away.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
            {[
              {
                title: "Security Patches",
                desc: "Real-time monitoring and updates to protect against vulnerabilities.",
                icon: ShieldCheck
              },
              {
                title: "Speed Optimization",
                desc: "Continuous performance tuning to maintain high search rankings.",
                icon: Clock
              },
              {
                title: "Dedicated Helpdesk",
                desc: "Local Christchurch support for any changes or technical issues.",
                icon: LifeBuoy
              }
            ].map((item, i) => (
              <div key={i} className="p-10 rounded-[2rem] bg-white/5 border border-white/10 hover:border-brand-orange/50 transition-all">
                <item.icon className="text-brand-orange mb-6" size={40} />
                <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col lg:flex-row gap-16 items-center mb-20">
            <div className="lg:w-1/2 relative h-[400px] w-full rounded-[2rem] overflow-hidden border border-white/10">
              <Image
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=2070"
                alt="Technical Support Team"
                fill
                className="object-cover"
              />
            </div>
            <div className="lg:w-1/2">
              <h3 className="text-3xl font-bold text-white mb-6">Support That Scales with You</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                As your business grows, your digital needs evolve. We don&apos;t just fix bugs;
                we provide strategic advice on how to improve your site over time.
                Whether it&apos;s adding new features, optimizing for a new marketing campaign,
                or scaling your infrastructure, we are your long-term digital partner.
              </p>
              <div className="flex items-center gap-6">
                <Link
                  href="/#contact"
                  className="bg-brand-orange text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-black transition-all duration-300"
                >
                  View Support Plans
                </Link>
                <a href="tel:+64277777728" className="text-white font-bold flex items-center gap-2 hover:text-brand-orange">
                  <LifeBuoy size={20} /> Call Now
                </a>
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

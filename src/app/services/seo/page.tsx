import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SmokeBackground from '@/components/SmokeBackground';
import CallButton from '@/components/CallButton';
import { ArrowRight, CheckCircle2, TrendingUp, Search, BarChart } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'SEO Christchurch | Search Engine Optimization NZ | Oncall Websites',
  description: 'Boost your business visibility with expert SEO services in Christchurch. We focus on local SEO, technical optimization, and high-quality lead generation.',
};

export default function SEOPage() {
  return (
    <main className="min-h-screen">
      <SmokeBackground />
      <Navbar />

      <div className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="mb-20 text-center lg:text-left">
            <h1 className="text-brand-orange font-bold tracking-widest uppercase mb-4">SEO Strategy</h1>
            <h2 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-8">
              Rank Higher. <br /> Sell More.
            </h2>
            <p className="text-gray-400 text-xl max-w-3xl leading-relaxed lg:mx-0 mx-auto">
              Be found by the people searching for your services. Our Christchurch SEO experts use
              ethical, data-driven strategies to climb search engine results and stay there.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">Our SEO Methodology</h3>
              <div className="space-y-8">
                {[
                  {
                    title: "Local SEO Mastery",
                    desc: "Dominating Christchurch search results for local intent queries.",
                    icon: Search
                  },
                  {
                    title: "Technical Optimization",
                    desc: "Ensuring search engines can crawl and index your site perfectly.",
                    icon: BarChart
                  },
                  {
                    title: "ROI-Focused Strategy",
                    desc: "Focusing on keywords that actually drive sales and enquiries.",
                    icon: TrendingUp
                  }
                ].map((item, i) => (
                  <div key={i} className="flex gap-5">
                    <div className="w-12 h-12 rounded-xl bg-brand-orange/20 flex items-center justify-center shrink-0">
                      <item.icon className="text-brand-orange" size={24} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                      <p className="text-gray-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-[400px] md:h-[500px] rounded-[2rem] overflow-hidden border border-white/10">
              <Image
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070"
                alt="SEO Analytics and Growth"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-[3rem] p-12 mb-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
              <div>
                <div className="text-4xl font-bold text-brand-orange mb-2">#1</div>
                <div className="text-gray-400">Search Rankings</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-brand-orange mb-2">150%</div>
                <div className="text-gray-400">Traffic Growth</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-brand-orange mb-2">24/7</div>
                <div className="text-gray-400">Monitoring</div>
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-white mb-8">Christchurch SEO Company That Delivers</h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-10">
              SEO is not a one-time setup; it&apos;s a competitive race. We provide transparent monthly reporting
              so you know exactly where your investment is going and how your rankings are improving.
              Partner with Christchurch&apos;s leading digital agency for sustainable online growth.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-3 bg-brand-orange text-white px-10 py-5 rounded-full font-bold hover:bg-white hover:text-black transition-all duration-300"
            >
              Get a Free SEO Audit <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </div>

      <Footer />
      <CallButton />
    </main>
  );
}

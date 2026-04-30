import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SmokeBackground from '@/components/SmokeBackground';
import CallButton from '@/components/CallButton';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Web Design & Development Christchurch | Oncall Websites NZ',
  description: 'Professional web design services in Christchurch. We build high-performance, SEO-friendly websites using Next.js 14 and modern web standards.',
};

export default function WebDesignPage() {
  return (
    <main className="min-h-screen">
      <SmokeBackground />
      <Navbar />

      <div className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="mb-20">
            <h1 className="text-brand-orange font-bold tracking-widest uppercase mb-4">Web Design Services</h1>
            <h2 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-8">
              Stunning Websites <br /> That Convert.
            </h2>
            <p className="text-gray-400 text-xl max-w-3xl leading-relaxed">
              In the competitive Christchurch digital landscape, your website is your strongest asset.
              We specialize in creating high-performance, mobile-responsive websites that don&apos;t just look good
              but drive real business growth for New Zealand companies.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
            <div className="relative h-[400px] md:h-[600px] rounded-[2rem] overflow-hidden border border-white/10">
              <Image
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426"
                alt="Modern Web Design Showcase"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">Why Choose Our Web Design?</h3>
              <ul className="space-y-6">
                {[
                  "Mobile-First Responsive Design",
                  "Built with Next.js 14 for Ultimate Speed",
                  "Conversion Rate Optimized (CRO)",
                  "Christchurch-based Support",
                  "SEO-Ready Architecture"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <CheckCircle2 className="text-brand-orange mt-1" size={24} />
                    <span className="text-gray-300 text-lg">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-10">
                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-3 bg-brand-orange text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-black transition-all duration-300"
                >
                  Start Your Project <ArrowRight size={20} />
                </Link>
              </div>
            </div>
          </div>

          {/* Detailed Content */}
          <div className="bg-white/5 border border-white/10 rounded-[3rem] p-12 mb-20">
            <div className="max-w-4xl">
              <h3 className="text-3xl font-bold text-white mb-8 text-brand-orange">Professional Web Development Christchurch</h3>
              <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                <p>
                  At Oncall Websites NZ, we understand that a local business needs more than just a digital brochure.
                  You need a platform that communicates your value proposition effectively. Our team of expert
                  developers in Christchurch uses the latest technologies, including React and Next.js, to
                  ensure your site loads instantly across all devices.
                </p>
                <p>
                  We focus on Core Web Vitals and user experience (UX) design to ensure your visitors stay longer
                  and engage more. From E-commerce platforms to bespoke corporate portals, our web design
                  solutions are tailored to the unique needs of the New Zealand market.
                </p>
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

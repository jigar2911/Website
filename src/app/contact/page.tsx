import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SmokeBackground from '@/components/SmokeBackground';
import ContactForm from '@/components/ContactForm';
import CallButton from '@/components/CallButton';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export const metadata = {
  title: 'Contact Us | Web Design Christchurch | Oncall Websites NZ',
  description: 'Get in touch with Oncall Websites NZ. Based in Christchurch, we provide expert web development and SEO services across New Zealand. Book your free consultation today.',
};

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <SmokeBackground />
      <Navbar />

      <div className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h1 className="text-brand-orange font-bold tracking-widest uppercase mb-4">Get In Touch</h1>
            <h2 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-8">
              Let&apos;s Build Something <br /> Remarkable.
            </h2>
            <p className="text-gray-400 text-xl max-w-2xl mx-auto">
              Based in the heart of Christchurch, we&apos;re ready to take your digital presence to the next level.
              Fill out the form below or reach out directly.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-32">
            {/* Contact Information */}
            <div className="space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
                  <Phone className="text-brand-orange mb-4" size={32} />
                  <h3 className="text-xl font-bold text-white mb-2">Call Us</h3>
                  <a href="tel:+64277777728" className="text-gray-400 hover:text-brand-orange transition-colors">
                    +64 27 777 7728
                  </a>
                </div>
                <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
                  <Mail className="text-brand-orange mb-4" size={32} />
                  <h3 className="text-xl font-bold text-white mb-2">Email Us</h3>
                  <a href="mailto:hello@oncallwebsites.co.nz" className="text-gray-400 hover:text-brand-orange transition-colors">
                    hello@oncallwebsites.co.nz
                  </a>
                </div>
                <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
                  <MapPin className="text-brand-orange mb-4" size={32} />
                  <h3 className="text-xl font-bold text-white mb-2">Location</h3>
                  <p className="text-gray-400">Christchurch, <br /> New Zealand</p>
                </div>
                <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
                  <Clock className="text-brand-orange mb-4" size={32} />
                  <h3 className="text-xl font-bold text-white mb-2">Hours</h3>
                  <p className="text-gray-400">Mon - Fri: 9am - 5pm <br /> 24/7 Support for Clients</p>
                </div>
              </div>

              {/* Google Maps Embed - Christchurch */}
              <div className="w-full h-[400px] rounded-[2rem] overflow-hidden border border-white/10">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d185220.89973274313!2d172.48424423180234!3d-43.51306894086111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d318a4d05591571%3A0x500ef8684799940!2sChristchurch%2C%20New%20Zealand!5e0!3m2!1sen!2sus!4v1715850000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale invert contrast-125 opacity-80"
                ></iframe>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:bg-white/5 lg:p-12 rounded-[3rem] border lg:border-white/10">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <CallButton />
    </main>
  );
}

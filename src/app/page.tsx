import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TechTicker from '@/components/TechTicker';
import Services from '@/components/Services';
import Process from '@/components/Process';
import About from '@/components/About';
import FAQ from '@/components/FAQ';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import SmokeBackground from '@/components/SmokeBackground';
import CallButton from '@/components/CallButton';

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <SmokeBackground />
      <Navbar />
      <Hero />
      <TechTicker />
      <Services />
      <Process />
      <About />
      <FAQ />
      <ContactForm />
      <Footer />
      <CallButton />
    </main>
  );
}

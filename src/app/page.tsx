import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import SmokeBackground from "@/components/SmokeBackground";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <SmokeBackground />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Services />
        <About />
        <section id="contact" className="py-32 px-4">
          <div className="max-w-4xl mx-auto">
            <ContactForm />
          </div>
        </section>
        <Footer />
      </div>
    </main>
  );
}

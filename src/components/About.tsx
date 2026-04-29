const About = () => {
  return (
    <section id="about" className="py-32 px-4 bg-black/40">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="aspect-square rounded-[3rem] bg-gradient-to-br from-brand-blue to-brand-orange opacity-20 absolute -inset-4 blur-2xl"></div>
            <div className="relative aspect-square rounded-[3rem] bg-white/5 border border-white/10 flex items-center justify-center p-12 overflow-hidden">
                <div className="text-[12rem] font-black text-white/5 select-none absolute">OCW</div>
                <div className="text-center">
                    <p className="text-8xl font-black text-brand-orange leading-none">100%</p>
                    <p className="text-2xl font-bold text-white mt-2">New Zealand Owned</p>
                </div>
            </div>
          </div>

          <div>
            <h2 className="text-brand-orange font-bold tracking-widest uppercase mb-4">About Us</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
                Christchurch Based, <br /> Globally Focused.
            </h3>
            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>
                At Oncall Websites NZ, we believe that a website should be more than just a digital business card.
                It should be your hardest-working employee.
              </p>
              <p>
                Our team of expert developers and strategists work closely with local businesses to craft
                custom digital solutions that aren&apos;t just visually stunning, but engineered for performance
                and conversion.
              </p>
              <p>
                From rapid-load landing pages to complex enterprise applications, we bring a deep tech
                approach to everything we build.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-8 border-t border-white/10 pt-12">
                <div>
                    <p className="text-3xl font-bold text-white">0.5s</p>
                    <p className="text-gray-500 uppercase text-xs font-bold tracking-widest mt-1">Avg Load Speed</p>
                </div>
                <div>
                    <p className="text-3xl font-bold text-white">24/7</p>
                    <p className="text-gray-500 uppercase text-xs font-bold tracking-widest mt-1">Local Support</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

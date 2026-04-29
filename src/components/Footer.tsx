const Footer = () => {
  return (
    <footer className="bg-black/80 backdrop-blur-xl text-white pt-16 pb-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <span className="text-2xl font-bold tracking-tighter">
              ONCALL<span className="text-brand-orange">WEBSITES</span>
            </span>
            <p className="mt-4 text-gray-400">
              Premium web development and digital strategies for Christchurch and beyond.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4 text-brand-orange">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          <div id="contact">
            <h3 className="text-lg font-bold mb-4 text-brand-orange">Get in Touch</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Christchurch, New Zealand</li>
              <li>sales@oncallsupport.co.nz</li>
              <li>027 777 7728</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Oncall Websites NZ. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

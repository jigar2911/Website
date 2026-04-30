import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="fixed w-full top-0 z-50 bg-white/10 backdrop-blur-md border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <img src="/logo.png" alt="Oncall Websites Logo" className="h-10 w-auto" />
              <span className="text-2xl font-bold text-white tracking-tighter hidden sm:block">
                ONCALL<span className="text-brand-orange">WEBSITES</span>
              </span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href="/" className="text-white hover:text-brand-orange px-3 py-2 transition-colors font-medium">Home</Link>
              <Link href="/#services" className="text-white hover:text-brand-orange px-3 py-2 transition-colors font-medium">Services</Link>
              <Link href="/#about" className="text-white hover:text-brand-orange px-3 py-2 transition-colors font-medium">About</Link>
              <Link href="/contact" className="bg-brand-orange hover:bg-orange-600 text-white px-6 py-2 rounded-full transition-colors font-bold">Get Started</Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

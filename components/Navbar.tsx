import React, { useState, useEffect } from 'react';
import { Menu, X, Construction } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Beranda', href: '#' },
    { name: 'Layanan', href: '#services' },
    { name: 'Tentang', href: '#about' },
    { name: 'Hubungi Kami', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled 
          ? 'bg-bgDark/90 backdrop-blur-md border-borderDark py-4' 
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-8 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="p-2 bg-primary rounded text-bgDark group-hover:bg-white transition-colors">
            <Construction size={24} />
          </div>
          <span className="font-display font-bold text-2xl text-textMain tracking-tight">
            Mulya Diesel<span className="text-primary"> Pratama</span>
          </span>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-textSecondary text-sm font-medium hover:text-primary transition-colors uppercase tracking-wide"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <button className="bg-surfaceDark border border-borderDark text-textMain px-6 py-2 rounded-full text-sm font-semibold hover:border-primary hover:text-primary transition-all">
            Dapatkan Penawaran
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-textMain"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-surfaceDark border-b border-borderDark p-6 flex flex-col gap-4 shadow-xl">
           {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-textMain text-lg font-medium hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
           <button className="w-full bg-primary text-bgDark px-6 py-3 rounded-lg font-bold mt-2">
            Dapatkan Penawaran
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
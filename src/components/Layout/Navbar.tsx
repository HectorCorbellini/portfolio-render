import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navKeys = ['home','projects','skills','about','contact'] as const;
  const navLinks = navKeys.map((key) => ({ name: t(`nav.${key}`), href: `#${key}`, key }));

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-indigo-900 shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <a 
            href="#home" 
            className="text-2xl font-bold text-white flex items-center"
          >
            <span className="text-indigo-300 mr-1">HC</span>
            <span className="hidden sm:inline">Portfolio</span>
          </a>
          <div className="hidden md:flex items-center space-x-4">
            <button onClick={() => i18n.changeLanguage('en')} className="text-white hover:text-indigo-300">EN</button>
            <button onClick={() => i18n.changeLanguage('es')} className="text-white hover:text-indigo-300">ES</button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.key}
                href={link.href}
                className="text-white hover:text-indigo-300 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-indigo-900 shadow-md p-4 transition-all transform duration-300">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.key}
                  href={link.href}
                  className="text-white hover:text-indigo-300 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              
              <div className="flex space-x-4 pt-2 border-t border-indigo-800">
                <span className="text-white">Language:</span>
                <button 
                  onClick={() => {
                    i18n.changeLanguage('en');
                    setIsOpen(false);
                  }} 
                  className="text-white hover:text-indigo-300"
                >
                  EN
                </button>
                <button 
                  onClick={() => {
                    i18n.changeLanguage('es');
                    setIsOpen(false);
                  }} 
                  className="text-white hover:text-indigo-300"
                >
                  ES
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
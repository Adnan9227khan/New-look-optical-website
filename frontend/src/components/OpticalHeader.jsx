import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, Glasses } from 'lucide-react';
import { storeInfo } from '../data/opticalMock';

export const OpticalHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-lg' 
          : 'bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className={`p-2 rounded-lg ${isScrolled ? 'bg-blue-100' : 'bg-white/20'}`}>
              <Glasses className={`w-6 h-6 ${isScrolled ? 'text-blue-600' : 'text-white'}`} />
            </div>
            <div className="flex flex-col">
              <span className={`font-bold text-xl leading-tight ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
                {storeInfo.name}
              </span>
              <span className={`text-xs ${isScrolled ? 'text-gray-600' : 'text-blue-200'}`}>
                Premium Eyewear & Perfumes
              </span>
            </div>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8">
            {['Home', 'About', 'Services', 'Products', 'Contact'].map((item) => (
              <li key={item}>
                <button
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`font-medium transition-colors duration-300 ${
                    isScrolled 
                      ? 'text-gray-700 hover:text-blue-600' 
                      : 'text-white hover:text-blue-300'
                  }`}
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>

          {/* Call Button */}
          <div className="hidden md:block">
            <a
              href={`tel:${storeInfo.phone}`}
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2"
          >
            {isMobileMenuOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? 'text-gray-900' : 'text-white'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? 'text-gray-900' : 'text-white'}`} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 bg-white rounded-b-lg shadow-lg">
            <ul className="flex flex-col gap-2">
              {['Home', 'About', 'Services', 'Products', 'Contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                  >
                    {item}
                  </button>
                </li>
              ))}
              <li className="px-4 py-2">
                <a
                  href={`tel:${storeInfo.phone}`}
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-full font-semibold w-full justify-center"
                >
                  <Phone className="w-4 h-4" />
                  Call Now
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

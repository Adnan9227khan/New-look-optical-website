import React from 'react';
import { Phone, Mail, MapPin, Instagram } from 'lucide-react';
import { storeInfo } from '../data/opticalMock';

export const OpticalFooter = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-blue-300">
              {storeInfo.name}
            </h3>
            <p className="text-blue-200 text-sm leading-relaxed">
              Your trusted optical store in Surat for premium eyewear, contact lenses, and authentic perfumes. Quality products at affordable prices.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-blue-300">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Services', 'Products', 'Contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="text-blue-200 hover:text-white transition-colors text-sm"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-blue-300">Our Services</h3>
            <ul className="space-y-2 text-blue-200 text-sm">
              <li>Eye Testing</li>
              <li>Eyeglasses</li>
              <li>Contact Lenses</li>
              <li>Vision Consultation</li>
              <li>Perfumes & Attar</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-blue-300">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-blue-300 mt-1 flex-shrink-0" />
                <a 
                  href={`tel:${storeInfo.phone}`}
                  className="text-blue-200 hover:text-white text-sm"
                >
                  {storeInfo.phone}
                </a>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-blue-300 mt-1 flex-shrink-0" />
                <a 
                  href={`mailto:${storeInfo.email}`}
                  className="text-blue-200 hover:text-white text-sm"
                >
                  {storeInfo.email}
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-blue-300 mt-1 flex-shrink-0" />
                <p className="text-blue-200 text-sm">
                  {storeInfo.address.area}, {storeInfo.address.city}
                </p>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-6">
              <h4 className="font-semibold mb-3 text-blue-300">Follow Us</h4>
              <div className="flex gap-3">
                <a
                  href={storeInfo.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-blue-600 hover:bg-blue-700 rounded-full transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
              <p className="text-sm text-blue-200 mt-3">{storeInfo.instagramHandle}</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-800 pt-8 text-center">
          <p className="text-blue-200 text-sm mb-2">
            © {new Date().getFullYear()} {storeInfo.name}. All rights reserved.
          </p>
          <p className="text-blue-300 text-xs">
            Best Optical Shop in Surat | Eyeglasses Store Nanavat Surat | Contact Lens Store Surat
          </p>
        </div>
      </div>
    </footer>
  );
};

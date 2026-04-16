import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';
import { hospitalInfo } from '../data/mock';

export const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-blue-900 to-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-green-400">
              {hospitalInfo.name}
            </h3>
            <p className="text-blue-200 text-sm leading-relaxed">
              Trusted eye care and maternity services in Surat. Serving the community with excellence and compassion.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-green-400">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Services', 'Contact'].map((item) => (
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

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-green-400">Our Services</h3>
            <ul className="space-y-2 text-blue-200 text-sm">
              <li>Eye Care Services</li>
              <li>Contact Lens Solutions</li>
              <li>Maternity Care</li>
              <li>Vision Testing</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-green-400">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                <a 
                  href={`tel:${hospitalInfo.phone}`}
                  className="text-blue-200 hover:text-white text-sm"
                >
                  {hospitalInfo.phone}
                </a>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                <a 
                  href={`mailto:${hospitalInfo.email}`}
                  className="text-blue-200 hover:text-white text-sm"
                >
                  {hospitalInfo.email}
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                <p className="text-blue-200 text-sm">
                  {hospitalInfo.address.area}, {hospitalInfo.address.city}
                </p>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-6">
              <h4 className="font-semibold mb-3 text-green-400">Follow Us</h4>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="p-2 bg-green-500 hover:bg-green-600 rounded-full transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="p-2 bg-green-500 hover:bg-green-600 rounded-full transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="p-2 bg-green-500 hover:bg-green-600 rounded-full transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-700 pt-8 text-center">
          <p className="text-blue-200 text-sm">
            © {new Date().getFullYear()} {hospitalInfo.name}. All rights reserved.
          </p>
          <p className="text-blue-300 text-xs mt-2">
            Best Eye Hospital in Surat | Contact Lens Store Surat | Maternity Care
          </p>
        </div>
      </div>
    </footer>
  );
};

import React from 'react';
import { Phone, Star, MapPin, Clock, MessageCircle } from 'lucide-react';
import { storeInfo } from '../data/opticalMock';

export const OpticalHero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent(`Hello! I'm interested in your optical services.`);
    window.open(`https://wa.me/${storeInfo.phone.replace(/\D/g, '')}?text=${message}`, '_blank');
  };

  return (
    <section id="home" className="relative pt-24 pb-16 overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100"></div>
      
      {/* Hero Image Background */}
      <div className="absolute inset-0 opacity-10">
        <img 
          src="https://images.unsplash.com/photo-1775825094939-3759ede3dec2" 
          alt="Optical Store" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Urgency Banner */}
          <div className="inline-flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6 animate-pulse">
            🔥 Visit Today – Special Offers Available!
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight">
            Clear Vision Starts Here
            <span className="block text-blue-600 mt-2">Trusted Optical Store in Surat</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            {storeInfo.subtitle}
          </p>

          {/* Trust Signals */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <div className="flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-shadow">
              <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
              <span className="font-semibold text-gray-900">{storeInfo.rating}</span>
              <span className="text-gray-600">Rating</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-shadow">
              <MapPin className="w-5 h-5 text-blue-600" />
              <span className="text-gray-700">{storeInfo.address.landmark}</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-shadow">
              <Clock className="w-5 h-5 text-green-600" />
              <span className="text-gray-700">{storeInfo.hours}</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={`tel:${storeInfo.phone}`}
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </a>
            <button
              onClick={scrollToContact}
              className="inline-flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Book Eye Test
            </button>
            <button
              onClick={handleWhatsApp}
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <MessageCircle className="w-5 h-5" />
              Chat on WhatsApp
            </button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-sm text-gray-600">Frame Styles</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-3xl font-bold text-gray-900 mb-2">1000+</div>
              <div className="text-sm text-gray-600">Happy Customers</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-3xl font-bold text-blue-600 mb-2">10+</div>
              <div className="text-sm text-gray-600">Years Experience</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-3xl font-bold text-gray-900 mb-2">24/7</div>
              <div className="text-sm text-gray-600">WhatsApp Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

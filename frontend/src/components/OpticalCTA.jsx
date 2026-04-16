import React from 'react';
import { Phone, ArrowRight } from 'lucide-react';
import { storeInfo } from '../data/opticalMock';

export const OpticalCTA = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-gray-900 text-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl sm:text-5xl font-bold mb-6">
          Ready for Better Vision?
        </h2>
        <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
          Visit us today or call now for instant assistance. Our expert team is ready to help you find the perfect eyewear!
        </p>

        {/* Phone Number Highlight */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 mb-8 inline-block">
          <div className="text-sm text-blue-200 mb-2">Call Us Now</div>
          <a 
            href={`tel:${storeInfo.phone}`}
            className="text-4xl sm:text-5xl font-bold text-white hover:text-blue-200 transition-colors"
          >
            {storeInfo.phone}
          </a>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href={`tel:${storeInfo.phone}`}
            className="inline-flex items-center gap-2 bg-white text-blue-600 hover:bg-blue-50 px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            <Phone className="w-6 h-6" />
            Call Now
          </a>
          <button
            onClick={scrollToContact}
            className="inline-flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            Book Appointment
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        {/* Trust Badge */}
        <div className="mt-12 text-blue-100">
          <p className="text-lg">⭐ {storeInfo.rating} Rating • Open {storeInfo.daysOpen} • {storeInfo.hours}</p>
        </div>
      </div>
    </section>
  );
};

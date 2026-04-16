import React, { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';
import { storeInfo } from '../data/opticalMock';

export const OpticalWhatsApp = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  const whatsappMessage = encodeURIComponent(
    `Hello Anas Optical! I'm interested in your eyewear services.`
  );
  const whatsappUrl = `https://wa.me/${storeInfo.phone.replace(/\D/g, '')}?text=${whatsappMessage}`;

  if (!isVisible) return null;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
    >
      <div className="relative">
        <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75"></div>
        <div className="relative bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110">
          <MessageCircle className="w-7 h-7" />
        </div>
      </div>
      <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg">
        Chat with us on WhatsApp
      </div>
    </a>
  );
};

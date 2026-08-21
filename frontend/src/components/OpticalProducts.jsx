import React, { useState, useEffect } from 'react';
import { storeInfo } from '../data/opticalMock';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

export const OpticalProducts = () => {
  const [frames, setFrames] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchFrames();
  }, []);

  const fetchFrames = async () => {
    try {
      const response = await axios.get(`${BACKEND_URL}/api/frames`);
      setFrames(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching frames:', error);
      setLoading(false);
    }
  };

  const handleExploreFrame = (frame) => {
    // Create WhatsApp message for the specific frame
    const message = encodeURIComponent(
      `Hello New Look Opticals! I'm interested in the ${frame.name}${frame.brand ? ` by ${frame.brand}` : ''} (₹${frame.price}). Is it available?`
    );
    const whatsappUrl = `https://wa.me/${storeInfo.phone.replace(/\D/g, '')}?text=${message}`;
    
    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank');
  };

  // Group frames by category for display
  const groupedFrames = frames.reduce((acc, frame) => {
    if (!acc[frame.category]) {
      acc[frame.category] = [];
    }
    acc[frame.category].push(frame);
    return acc;
  }, {});

  const categoryNames = {
    'men': "Men's Frames",
    'women': "Women's Frames",
    'kids': "Kids Collection",
    'contact_lenses': "Contact Lenses",
    'sunglasses': "Sunglasses",
    'perfumes': "Perfumes & Attar"
  };

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Collection</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our wide range of premium eyewear and fragrances
          </p>
        </div>

        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            <p className="mt-4 text-gray-600">Loading frames...</p>
          </div>
        ) : frames.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-2xl shadow-lg">
            <p className="text-xl text-gray-600 mb-4">No frames added yet.</p>
            <p className="text-gray-500">Login to admin panel to add your first frame!</p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {frames.map((frame) => (
              <div 
                key={frame.id}
                onClick={() => handleExploreFrame(frame)}
                className="group cursor-pointer overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 bg-white"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={frame.image_url} 
                    alt={frame.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {!frame.in_stock && (
                    <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Out of Stock
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <h3 className="text-xl font-bold mb-1">{frame.name}</h3>
                    {frame.brand && (
                      <p className="text-sm text-gray-200 mb-2">{frame.brand}</p>
                    )}
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold">₹{frame.price}</span>
                      <span className="text-xs bg-blue-600 px-2 py-1 rounded-full capitalize">
                        {categoryNames[frame.category] || frame.category}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-4 text-center bg-gradient-to-br from-blue-600 to-gray-900 text-white group-hover:from-blue-700 group-hover:to-black transition-colors duration-300">
                  <span className="font-semibold">Inquire on WhatsApp →</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {frames.length > 0 && (
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">Can't find what you're looking for?</p>
            <a 
              href={`https://wa.me/${storeInfo.phone.replace(/\D/g, '')}?text=Hello%20New%20Look%20Opticals!%20I'd%20like%20to%20know%20more%20about%20your%20eyewear%20collection.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300"
            >
              💬 Chat with us on WhatsApp
            </a>
            /div>
        )}
      </div>
    </section>
  );
};

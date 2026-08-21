import React, { useState, useEffect } from 'react';
import { storeInfo } from '../data/opticalMock';
import axios from 'axios';
import { X } from 'lucide-react';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

export const OpticalProducts = () => {
  const [frames, setFrames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const productCategories = [
    {
      id: 1,
      title: "Men's Frames",
      description: "Stylish eyeglasses for men",
      category: "men",
      image: "https://images.unsplash.com/photo-1766998224439-9f048ed4d687"
    },
    {
      id: 2,
      title: "Women's Frames",
      description: "Elegant eyewear for women",
      category: "women",
      image: "https://images.unsplash.com/photo-1755519024779-ff6e5016db0b"
    },
    {
      id: 3,
      title: "Kids Collection",
      description: "Colorful & durable frames for kids",
      category: "kids",
      image: "https://images.pexels.com/photos/13430474/pexels-photo-13430474.jpeg"
    },
    {
      id: 4,
      title: "Contact Lenses",
      description: "Premium quality contact lenses",
      category: "contact_lenses",
      image: "https://images.pexels.com/photos/12700452/pexels-photo-12700452.jpeg"
    },
    {
      id: 5,
      title: "Sunglasses",
      description: "Stylish sunglasses collection",
      category: "sunglasses",
      image: "https://images.pexels.com/photos/701877/pexels-photo-701877.jpeg"
    },
    {
      id: 6,
      title: "Premium Perfumes",
      description: "Designer & luxury fragrances",
      category: "perfumes",
      image: "https://images.pexels.com/photos/7703038/pexels-photo-7703038.jpeg"
    }
  ];

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

  const handleExploreCollection = (category) => {
    setSelectedCategory(category);
    setShowModal(true);
  };

  const getCategoryFrames = () => {
    if (!selectedCategory) return [];
    return frames.filter(frame => frame.category === selectedCategory.category);
  };

  const handleWhatsAppInquiry = (frame) => {
    const message = encodeURIComponent(
      `Hello New Look Opticals! I'm interested in ${frame.name}${frame.brand ? ` by ${frame.brand}` : ''} (₹${frame.price}). Is it available?`
    );
    window.open(`https://wa.me/${storeInfo.phone.replace(/\D/g, '')}?text=${message}`, '_blank');
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

        {/* Category Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {productCategories.map((category) => (
            <div 
              key={category.id}
              className="group cursor-pointer overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 bg-white"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={category.image} 
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">{category.title}</h3>
                  <p className="text-sm text-gray-200">{category.description}</p>
                </div>
              </div>
              <div 
                onClick={() => handleExploreCollection(category)}
                className="p-6 text-center bg-gradient-to-br from-blue-600 to-gray-900 text-white group-hover:from-blue-700 group-hover:to-black transition-colors duration-300"
              >
                <span className="font-semibold">Explore Collection →</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for displaying frames */}
      {showModal && selectedCategory && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden shadow-2xl">
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-blue-600 to-gray-900 text-white p-6 flex justify-between items-center">
              <div>
                <h3 className="text-2xl font-bold">{selectedCategory.title}</h3>
                <p className="text-blue-100">{selectedCategory.description}</p>
              </div>
              <button 
                onClick={() => setShowModal(false)}
                className="p-2 hover:bg-white/20 rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
              {loading ? (
                <div className="text-center py-12">
                  <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
                  <p className="mt-4 text-gray-600">Loading frames...</p>
                </div>
              ) : getCategoryFrames().length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-xl text-gray-600 mb-4">No frames available in this category yet.</p>
                  <p className="text-gray-500">Please check back soon or contact us for availability.</p>
                  <button
                    onClick={() => {
                      const message = encodeURIComponent(`Hello! I'm interested in ${selectedCategory.title}. Do you have any available?`);
                      window.open(`https://wa.me/${storeInfo.phone.replace(/\D/g, '')}?text=${message}`, '_blank');
                    }}
                    className="mt-4 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-semibold"
                  >
                    💬 Ask on WhatsApp
                  </button>
                </div>
              ) : (
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {getCategoryFrames().map((frame) => (
                    <div 
                      key={frame.id}
                      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                    >
                      <div className="relative h-48 overflow-hidden">
                        <img 
                          src={frame.image_url} 
                          alt={frame.name}
                          className="w-full h-full object-cover"
                        />
                        {!frame.in_stock && (
                          <div className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                            Out of Stock
                          </div>
                        )}
                      </div>
                      <div className="p-4">
                        <h4 className="font-bold text-lg text-gray-900 mb-1">{frame.name}</h4>
                        {frame.brand && (
                          <p className="text-sm text-gray-600 mb-2">{frame.brand}</p>
                        )}
                        {frame.description && (
                          <p className="text-sm text-gray-500 mb-3">{frame.description}</p>
                        )}
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-2xl font-bold text-blue-600">₹{frame.price}</span>
                          {frame.in_stock && (
                            <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                              In Stock
                            </span>
                          )}
                        </div>
                        {frame.in_stock && (
                          <button
                            onClick={() => handleWhatsAppInquiry(frame)}
                            className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg font-semibold transition-colors"
                          >
                            💬 Inquire on WhatsApp
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
    );
};

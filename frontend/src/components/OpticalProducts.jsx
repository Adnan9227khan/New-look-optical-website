import React from 'react';
import { productCategories } from '../data/opticalMock';

export const OpticalProducts = () => {
  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Collection</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our wide range of premium eyewear and fragrances
          </p>
        </div>

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
              <div className="p-6 text-center bg-gradient-to-br from-blue-600 to-gray-900 text-white">
                <span className="font-semibold">Explore Collection →</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

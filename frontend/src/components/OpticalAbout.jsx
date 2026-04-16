import React from 'react';
import { Store, Shield, Award, Heart } from 'lucide-react';
import { storeInfo } from '../data/opticalMock';

export const OpticalAbout = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            About {storeInfo.name}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Your trusted partner for clear vision and premium eyewear
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Quality Eyewear You Can Trust
            </h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              At {storeInfo.name}, we are committed to providing high-quality eyewear and exceptional customer service. Located near Lakhpati Hospital in Nanavat, Surat, we have been serving the community with premium eyeglasses, contact lenses, and authentic perfumes.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Our experienced opticians understand that choosing the right eyewear is about more than just vision correction—it's about style, comfort, and confidence. We offer a curated selection of frames from budget-friendly to designer brands.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              With a {storeInfo.rating}-star rating and hundreds of satisfied customers, {storeInfo.name} has become the go-to optical store in Nanavat and surrounding areas.
            </p>

            {/* Key Points */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Shield className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Authentic Products</h4>
                  <p className="text-gray-600 text-sm">All products are 100% genuine with warranty</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-2 bg-gray-100 rounded-lg">
                  <Heart className="w-5 h-5 text-gray-900" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Customer Satisfaction</h4>
                  <p className="text-gray-600 text-sm">Your comfort and satisfaction is our priority</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Award className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Expert Guidance</h4>
                  <p className="text-gray-600 text-sm">Professional advice on frame and lens selection</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Visual */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.pexels.com/photos/5621833/pexels-photo-5621833.jpeg" 
                alt="Optical Store Interior"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl max-w-xs">
              <div className="flex items-center gap-4 mb-3">
                <div className="p-3 bg-blue-100 rounded-full">
                  <Store className="w-8 h-8 text-blue-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">4.6 ⭐</div>
                  <div className="text-sm text-gray-600">Customer Rating</div>
                </div>
              </div>
              <p className="text-sm text-gray-600">
                Trusted by hundreds of customers in Surat
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

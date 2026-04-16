import React from 'react';
import { Hospital, Award, Shield, Heart } from 'lucide-react';
import { hospitalInfo } from '../data/mock';

export const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            About {hospitalInfo.name}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Your trusted healthcare partner in Surat
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Your Trusted Healthcare Partner
            </h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              At {hospitalInfo.name}, we provide comprehensive eye care and maternity services with a commitment to excellence. Our experienced team of professionals ensures that every patient receives personalized care and attention.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Located in the heart of Nanavat, Surat, we have been serving the community with state-of-the-art facilities and modern equipment. Our mission is to provide affordable, quality healthcare that you can trust.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              With a {hospitalInfo.rating}-star rating and countless satisfied patients, we continue to be the preferred choice for eye care and maternity services in Surat.
            </p>

            {/* Key Points */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Shield className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Licensed & Certified</h4>
                  <p className="text-gray-600 text-sm">All our professionals are qualified and certified</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-2 bg-green-100 rounded-lg">
                  <Heart className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Patient-Centered Care</h4>
                  <p className="text-gray-600 text-sm">Your comfort and well-being is our priority</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Award className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Excellence in Service</h4>
                  <p className="text-gray-600 text-sm">Committed to highest standards of care</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Decorative */}
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-50 to-green-50 p-12 rounded-3xl shadow-xl">
              <div className="text-center">
                <div className="inline-block p-6 bg-white rounded-full shadow-lg mb-6">
                  <Hospital className="w-20 h-20 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Modern Healthcare Facility
                </h3>
                <p className="text-gray-600">
                  Equipped with latest medical technology and a compassionate team dedicated to your health
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="bg-white p-4 rounded-xl text-center shadow-md">
                  <div className="text-3xl font-bold text-blue-600 mb-1">100%</div>
                  <div className="text-sm text-gray-600">Patient Satisfaction</div>
                </div>
                <div className="bg-white p-4 rounded-xl text-center shadow-md">
                  <div className="text-3xl font-bold text-green-600 mb-1">Expert</div>
                  <div className="text-sm text-gray-600">Medical Team</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

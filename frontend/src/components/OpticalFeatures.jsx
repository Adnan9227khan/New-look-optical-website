import React from 'react';
import { Award, IndianRupee, Users, MapPin } from 'lucide-react';
import { features } from '../data/opticalMock';

const iconMap = {
  Award: Award,
  IndianRupee: IndianRupee,
  Users: Users,
  MapPin: MapPin
};

export const OpticalFeatures = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose Anas Optical?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience the difference with our premium service and quality products
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => {
            const IconComponent = iconMap[feature.icon];
            return (
              <div 
                key={feature.id} 
                className="text-center p-8 rounded-2xl bg-gradient-to-br from-slate-50 to-blue-50 hover:from-blue-50 hover:to-slate-100 transition-all duration-300 group"
              >
                <div className="inline-flex p-4 bg-gradient-to-br from-blue-600 to-gray-900 rounded-full mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

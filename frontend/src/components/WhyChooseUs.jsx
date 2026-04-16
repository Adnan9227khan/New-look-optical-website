import React from 'react';
import { UserCheck, IndianRupee, Heart, Settings } from 'lucide-react';
import { features } from '../data/mock';

const iconMap = {
  UserCheck: UserCheck,
  IndianRupee: IndianRupee,
  Heart: Heart,
  Settings: Settings
};

export const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose Lakhpati Hospital?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience healthcare that puts you first
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => {
            const IconComponent = iconMap[feature.icon];
            return (
              <div 
                key={feature.id} 
                className="text-center p-6 rounded-2xl hover:bg-blue-50 transition-colors duration-300"
              >
                <div className="inline-flex p-4 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full mb-4 shadow-lg">
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

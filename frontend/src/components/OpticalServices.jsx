import React from 'react';
import { Eye, Glasses, Circle, UserCheck, Sparkles, RefreshCw } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from './ui/card';
import { services } from '../data/opticalMock';

const iconMap = {
  Eye: Eye,
  Glasses: Glasses,
  Circle: Circle,
  UserCheck: UserCheck,
  Sparkles: Sparkles,
  RefreshCw: RefreshCw
};

export const OpticalServices = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Complete eye care and lifestyle solutions under one roof
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const IconComponent = iconMap[service.icon];
            return (
              <Card 
                key={service.id} 
                className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-none bg-white group"
              >
                <CardHeader className="text-center">
                  <div className="inline-flex p-4 bg-gradient-to-br from-blue-100 to-gray-100 rounded-full mx-auto mb-4 group-hover:from-blue-600 group-hover:to-gray-900 transition-all duration-300">
                    <IconComponent className="w-10 h-10 text-blue-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <CardTitle className="text-xl text-gray-900 mb-2">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-center leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

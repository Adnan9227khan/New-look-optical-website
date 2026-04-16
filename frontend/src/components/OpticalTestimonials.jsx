import React from 'react';
import { Star } from 'lucide-react';
import { Card, CardHeader, CardContent } from './ui/card';
import { testimonials } from '../data/opticalMock';

export const OpticalTestimonials = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real reviews from our valued customers
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial) => (
            <Card 
              key={testimonial.id} 
              className="hover:shadow-xl transition-shadow duration-300 border-none bg-gradient-to-br from-slate-50 to-blue-50"
            >
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-gray-900 flex items-center justify-center text-white font-bold text-lg shadow-md">
                    {testimonial.initials}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <div className="flex gap-0.5">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                      ))}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed text-sm">"{testimonial.text}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { Phone, MapPin, Clock, Mail, Loader2 } from 'lucide-react';
import { storeInfo, requirementOptions } from '../data/opticalMock';
import { Button } from './ui/button';
import { useToast } from '../hooks/use-toast';

export const OpticalContact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    requirement: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      console.log('Contact Form Data:', formData);
      toast({
        title: "Request Received!",
        description: "We'll contact you shortly. Thank you for choosing Anas Optical!",
      });
      setFormData({ name: '', phone: '', requirement: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Visit Us or Get in Touch</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We're here to help you with all your eyewear needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
            
            <div className="flex items-start gap-4 p-5 bg-gradient-to-br from-blue-50 to-slate-50 rounded-xl hover:shadow-lg transition-shadow">
              <div className="p-3 bg-blue-600 rounded-full">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Phone Number</h4>
                <a 
                  href={`tel:${storeInfo.phone}`} 
                  className="text-blue-600 hover:text-blue-700 font-medium text-lg"
                >
                  {storeInfo.phone}
                </a>
                <p className="text-sm text-gray-600 mt-1">Call anytime during business hours</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl hover:shadow-lg transition-shadow">
              <div className="p-3 bg-gray-900 rounded-full">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Address</h4>
                <p className="text-gray-600">
                  {storeInfo.address.street}<br />
                  {storeInfo.address.landmark}<br />
                  {storeInfo.address.area}, {storeInfo.address.city}<br />
                  {storeInfo.address.state} – {storeInfo.address.pincode}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 bg-gradient-to-br from-blue-50 to-slate-50 rounded-xl hover:shadow-lg transition-shadow">
              <div className="p-3 bg-blue-600 rounded-full">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Store Hours</h4>
                <p className="text-gray-600">
                  {storeInfo.hours}<br />
                  {storeInfo.daysOpen}
                </p>
              </div>
            </div>

            {/* Google Maps */}
            <div className="rounded-xl overflow-hidden shadow-lg mt-8">
              <iframe
                src={storeInfo.mapEmbedUrl}
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Anas Optical Location"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gradient-to-br from-blue-50 via-slate-50 to-blue-50 p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Quick Contact Form</h3>
            <p className="text-gray-600 mb-6">Fill the form and we'll get back to you soon!</p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors bg-white"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  pattern="[0-9]{10}"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors bg-white"
                  placeholder="10-digit mobile number"
                />
              </div>

              <div>
                <label htmlFor="requirement" className="block text-sm font-semibold text-gray-900 mb-2">
                  Your Requirement *
                </label>
                <select
                  id="requirement"
                  name="requirement"
                  value={formData.requirement}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors bg-white"
                >
                  {requirementOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-gray-900 hover:from-blue-700 hover:to-black text-white py-6 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  'Submit Request'
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { Mail, Phone, MessageCircle, Send, MapPin, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      detail: "teacher@example.com",
      description: "Best way to reach me for detailed inquiries"
    },
    {
      icon: Phone,
      title: "Phone",
      detail: "(555) 123-4567",
      description: "Available for calls during business hours"
    },
    {
      icon: MessageCircle,
      title: "Text Message",
      detail: "(555) 123-4567",
      description: "Quick questions and scheduling"
    }
  ];

  const availability = [
    {
      icon: Clock,
      title: "Weekdays",
      detail: "3:00 PM - 8:00 PM",
      description: "After school tutoring sessions"
    },
    {
      icon: Clock,
      title: "Weekends",
      detail: "9:00 AM - 5:00 PM",
      description: "Extended sessions and exam prep"
    },
    {
      icon: MapPin,
      title: "Service Area",
      detail: "Local & Online",
      description: "In-home tutoring and virtual sessions"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Get Started Today
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to help your child succeed? Contact me to discuss your educational 
            needs and schedule a consultation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-sm p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select a subject</option>
                  <option value="tutoring">General Tutoring</option>
                  <option value="math">Mathematics Help</option>
                  <option value="french">French Language Learning</option>
                  <option value="esol">ESOL/Multilingual Support</option>
                  <option value="exam">Exam Preparation</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Tell me about your educational needs, student's grade level, and any specific challenges..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-blue-900 text-white py-3 px-6 rounded-lg hover:bg-blue-800 transition-colors font-semibold flex items-center justify-center space-x-2"
              >
                <Send className="h-5 w-5" />
                <span>Send Message</span>
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-blue-100 rounded-lg p-3 flex-shrink-0">
                      <info.icon className="h-5 w-5 text-blue-900" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{info.title}</h4>
                      <p className="text-blue-600 font-medium">{info.detail}</p>
                      <p className="text-sm text-gray-600">{info.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Availability</h3>
              <div className="space-y-6">
                {availability.map((avail, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-green-100 rounded-lg p-3 flex-shrink-0">
                      <avail.icon className="h-5 w-5 text-green-700" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{avail.title}</h4>
                      <p className="text-green-600 font-medium">{avail.detail}</p>
                      <p className="text-sm text-gray-600">{avail.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-blue-50 rounded-lg p-6 border border-blue-100">
              <h4 className="font-semibold text-gray-900 mb-2">Free Consultation</h4>
              <p className="text-gray-600 text-sm">
                Schedule a complimentary 15-minute consultation to discuss your child's 
                educational needs and how I can help them succeed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
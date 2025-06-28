import React from 'react';
import { Clock, MapPin, Users, Target, BookOpen, Calculator } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Users,
      title: "One-on-One Tutoring",
      description: "Personalized instruction tailored to your child's specific learning needs and pace.",
      features: ["Customized lesson plans", "Flexible scheduling", "Progress tracking", "Parent updates"],
      price: "Starting at $50/hour"
    },
    {
      icon: Target,
      title: "Exam Preparation",
      description: "Comprehensive preparation for standardized tests, entrance exams, and academic assessments.",
      features: ["Test strategies", "Practice materials", "Timed sessions", "Score improvement focus"],
      price: "Starting at $60/hour"
    },
    {
      icon: BookOpen,
      title: "Subject Specialization",
      description: "Expert instruction in Mathematics, French, and ESOL/Multilingual programs.",
      features: ["Advanced curriculum", "Cultural context", "Language immersion", "Academic standards"],
      price: "Starting at $55/hour"
    },
    {
      icon: Calculator,
      title: "Homework Support",
      description: "Regular assistance with daily assignments and long-term projects across all subjects.",
      features: ["Study skills training", "Organization techniques", "Time management", "Academic confidence"],
      price: "Starting at $45/hour"
    }
  ];

  const locations = [
    {
      icon: MapPin,
      title: "In-Home Tutoring",
      description: "Convenient learning in your comfortable home environment"
    },
    {
      icon: Clock,
      title: "Flexible Scheduling",
      description: "Evening and weekend sessions available to fit your schedule"
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Educational Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive tutoring and educational support services designed to help 
            every student reach their full academic potential.
          </p>
        </div>

        {/* Service Options */}
        <div className="grid lg:grid-cols-2 gap-6 mb-16">
          {locations.map((location, index) => (
            <div key={index} className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
              <div className="flex items-center space-x-4">
                <div className="bg-blue-100 rounded-lg p-3">
                  <location.icon className="h-6 w-6 text-blue-900" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{location.title}</h3>
                  <p className="text-gray-600">{location.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-blue-100 rounded-lg p-3">
                  <service.icon className="h-6 w-6 text-blue-900" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                  <p className="text-blue-600 font-medium">{service.price}</p>
                </div>
              </div>
              
              <p className="text-gray-600 mb-6">{service.description}</p>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button className="w-full bg-blue-900 text-white py-3 rounded-lg hover:bg-blue-800 transition-colors font-semibold">
                Learn More
              </button>
            </div>
          ))}
        </div>

        {/* Subject Expertise Highlight */}
        <div className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-2xl p-8 md:p-12 text-white text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Specialized in Key Academic Areas
          </h3>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Years of focused experience in mathematics, French language instruction, 
            and ESOL/Multilingual programs for students of all backgrounds.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
              <Calculator className="h-8 w-8 mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Mathematics</h4>
              <p className="text-sm text-blue-100">K-12 math instruction with focus on problem-solving and conceptual understanding</p>
            </div>
            <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
              <BookOpen className="h-8 w-8 mx-auto mb-3" />
              <h4 className="font-semibold mb-2">French Language</h4>
              <p className="text-sm text-blue-100">Comprehensive French instruction from beginner to advanced levels</p>
            </div>
            <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
              <Users className="h-8 w-8 mx-auto mb-3" />
              <h4 className="font-semibold mb-2">ESOL/Multilingual</h4>
              <p className="text-sm text-blue-100">Specialized support for English language learners and multilingual students</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
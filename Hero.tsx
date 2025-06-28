import React from 'react';
import { GraduationCap, Award, Users } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-blue-50 to-indigo-100 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Dedicated to 
              <span className="block text-blue-900">Educational Excellence</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Experienced educator specializing in Mathematics, French, and ESOL/Multilingual programs. 
              Committed to helping students from Grade 1 to 12 achieve their academic goals through 
              personalized learning and comprehensive exam preparation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-blue-900 text-white px-8 py-3 rounded-lg hover:bg-blue-800 transition-colors font-semibold"
              >
                Get Started
              </button>
              <button 
                onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-blue-900 text-blue-900 px-8 py-3 rounded-lg hover:bg-blue-900 hover:text-white transition-colors font-semibold"
              >
                View Experience
              </button>
            </div>
            
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-white rounded-lg p-4 shadow-sm mb-2">
                  <GraduationCap className="h-8 w-8 text-blue-900 mx-auto" />
                </div>
                <div className="text-2xl font-bold text-gray-900">K-12</div>
                <div className="text-sm text-gray-600">All Levels</div>
              </div>
              <div className="text-center">
                <div className="bg-white rounded-lg p-4 shadow-sm mb-2">
                  <Award className="h-8 w-8 text-blue-900 mx-auto" />
                </div>
                <div className="text-2xl font-bold text-gray-900">15+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="bg-white rounded-lg p-4 shadow-sm mb-2">
                  <Users className="h-8 w-8 text-blue-900 mx-auto" />
                </div>
                <div className="text-2xl font-bold text-gray-900">500+</div>
                <div className="text-sm text-gray-600">Students Taught</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <img 
                src="https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Teacher in classroom" 
                className="w-full h-96 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
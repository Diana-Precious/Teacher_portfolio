import React from 'react';
import { Globe, Calculator, BookOpen, Target } from 'lucide-react';

const About: React.FC = () => {
  const specializations = [
    {
      icon: Calculator,
      title: "Mathematics",
      description: "Comprehensive math instruction from basic arithmetic to advanced calculus, tailored to each student's learning style."
    },
    {
      icon: Globe,
      title: "French Language",
      description: "Native-level French instruction focusing on conversation, grammar, and cultural understanding for all proficiency levels."
    },
    {
      icon: BookOpen,
      title: "ESOL/Multilingual",
      description: "Specialized programs for English language learners, supporting students in their academic and social language development."
    },
    {
      icon: Target,
      title: "Exam Preparation",
      description: "Targeted preparation for standardized tests, entrance exams, and academic assessments with proven success rates."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About My Teaching Philosophy
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Every student has unique potential. My approach combines proven pedagogical methods 
            with personalized attention to help each learner achieve their academic goals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {specializations.map((spec, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="bg-blue-100 rounded-lg p-3 w-fit mb-4">
                <spec.icon className="h-6 w-6 text-blue-900" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{spec.title}</h3>
              <p className="text-gray-600">{spec.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-2xl p-8 md:p-12 text-white">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Why Choose Personalized Education?
              </h3>
              <p className="text-blue-100 mb-6">
                With over 15 years of teaching experience across all grade levels, I understand that 
                one size doesn't fit all. My personalized approach ensures that each student receives 
                the attention and support they need to excel.
              </p>
              <ul className="space-y-2 text-blue-100">
                <li>• Customized learning plans for individual needs</li>
                <li>• Flexible scheduling for busy families</li>
                <li>• Regular progress assessments and feedback</li>
                <li>• Proven track record of student success</li>
              </ul>
            </div>
            <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
              <h4 className="text-xl font-semibold mb-4">Success Metrics</h4>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>Student Satisfaction</span>
                  <span className="font-bold">98%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Exam Pass Rate</span>
                  <span className="font-bold">95%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Grade Improvement</span>
                  <span className="font-bold">2+ Levels</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
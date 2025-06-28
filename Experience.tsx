import React from 'react';
import { School, Home, Users, Trophy } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      icon: School,
      title: "Classroom Teaching",
      subtitle: "Grades 1-12 • All Subjects",
      description: "Extensive experience teaching in traditional classroom settings, adapting curriculum to meet diverse learning needs and state standards.",
      highlights: ["Curriculum Development", "Differentiated Instruction", "Assessment Design", "Parent Communication"]
    },
    {
      icon: Home,
      title: "Private Tutoring",
      subtitle: "One-on-One & Small Groups",
      description: "Personalized tutoring sessions tailored to individual learning styles, focusing on building confidence and academic achievement.",
      highlights: ["Personalized Learning Plans", "Flexible Scheduling", "Progress Tracking", "Homework Support"]
    },
    {
      icon: Users,
      title: "ESOL/Multilingual Programs",
      subtitle: "English Language Development",
      description: "Specialized instruction for English language learners, supporting academic success while preserving cultural identity.",
      highlights: ["Language Assessment", "Cultural Sensitivity", "Academic English", "Family Engagement"]
    },
    {
      icon: Trophy,
      title: "Exam Preparation",
      subtitle: "Standardized Tests & Entrance Exams",
      description: "Comprehensive test preparation programs with proven strategies and techniques for academic success.",
      highlights: ["Test Strategy", "Content Review", "Practice Tests", "Stress Management"]
    }
  ];

  const gradeRanges = [
    { range: "K-2", subjects: ["Basic Math", "Reading", "Phonics", "Writing"], color: "bg-green-100 text-green-800" },
    { range: "3-5", subjects: ["Elementary Math", "Reading Comp", "Science", "Social Studies"], color: "bg-blue-100 text-blue-800" },
    { range: "6-8", subjects: ["Pre-Algebra", "French I-II", "ESOL", "Study Skills"], color: "bg-purple-100 text-purple-800" },
    { range: "9-12", subjects: ["Algebra", "Geometry", "French III-IV", "SAT/ACT Prep"], color: "bg-orange-100 text-orange-800" }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Teaching Experience & Expertise
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive educational experience across all grade levels and learning environments, 
            with specialized expertise in key subject areas.
          </p>
        </div>

        {/* Grade Level Expertise */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Grade Level Expertise</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {gradeRanges.map((grade, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className={`inline-block px-3 py-1 rounded-full text-sm font-semibold mb-4 ${grade.color}`}>
                  Grade {grade.range}
                </div>
                <ul className="space-y-2">
                  {grade.subjects.map((subject, idx) => (
                    <li key={idx} className="text-gray-600 flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                      {subject}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Teaching Experience Cards */}
        <div className="grid lg:grid-cols-2 gap-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 rounded-lg p-3 flex-shrink-0">
                  <exp.icon className="h-6 w-6 text-blue-900" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{exp.title}</h3>
                  <p className="text-blue-600 font-medium mb-3">{exp.subtitle}</p>
                  <p className="text-gray-600 mb-4">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.highlights.map((highlight, idx) => (
                      <span key={idx} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
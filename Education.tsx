import React from 'react';
import { GraduationCap, Award, Calendar } from 'lucide-react';

const Education: React.FC = () => {
  const education = [
    {
      degree: "Master of Science in Computer Science",
      school: "Stanford University",
      location: "Stanford, CA",
      period: "2017 - 2019",
      gpa: "3.8/4.0",
      description: "Specialized in Software Engineering and Machine Learning. Thesis on distributed systems architecture.",
      achievements: [
        "Dean's List for Academic Excellence",
        "Graduate Research Assistant",
        "Published 2 papers in peer-reviewed conferences"
      ]
    },
    {
      degree: "Bachelor of Science in Software Engineering",
      school: "University of California, Berkeley",
      location: "Berkeley, CA",
      period: "2013 - 2017",
      gpa: "3.7/4.0",
      description: "Comprehensive study of software development, algorithms, and computer systems.",
      achievements: [
        "Summa Cum Laude Graduate",
        "President of Computer Science Club",
        "Hackathon Winner (2016, 2017)"
      ]
    }
  ];

  const certifications = [
    {
      name: "AWS Certified Developer - Associate",
      issuer: "Amazon Web Services",
      date: "2023",
      credentialId: "AWS-CDA-123456"
    },
    {
      name: "Google Cloud Professional Developer",
      issuer: "Google Cloud",
      date: "2022",
      credentialId: "GCP-PD-789012"
    },
    {
      name: "Certified Kubernetes Administrator",
      issuer: "Cloud Native Computing Foundation",
      date: "2022",
      credentialId: "CKA-345678"
    },
    {
      name: "MongoDB Certified Developer",
      issuer: "MongoDB University",
      date: "2021",
      credentialId: "MDB-901234"
    }
  ];

  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Education & Certifications</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Continuous learning and professional development journey
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
              <GraduationCap className="w-8 h-8 mr-3 text-blue-600" />
              Education
            </h3>
            
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-gray-900 mb-2">
                        {edu.degree}
                      </h4>
                      <p className="text-blue-600 font-semibold text-lg mb-1">
                        {edu.school}
                      </p>
                      <p className="text-gray-500 mb-2">{edu.location}</p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center text-gray-500 mb-1">
                        <Calendar className="w-4 h-4 mr-2" />
                        {edu.period}
                      </div>
                      <p className="text-green-600 font-semibold">GPA: {edu.gpa}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {edu.description}
                  </p>
                  
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-2">Key Achievements:</h5>
                    <ul className="space-y-1">
                      {edu.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
              <Award className="w-8 h-8 mr-3 text-blue-600" />
              Certifications
            </h3>
            
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 rounded-xl p-6 hover:from-blue-100 hover:to-indigo-100 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="text-lg font-bold text-gray-900 flex-1">
                      {cert.name}
                    </h4>
                    <span className="text-sm text-gray-500 bg-white px-3 py-1 rounded-full">
                      {cert.date}
                    </span>
                  </div>
                  
                  <p className="text-blue-600 font-semibold mb-2">
                    {cert.issuer}
                  </p>
                  
                  <p className="text-gray-500 text-sm">
                    Credential ID: {cert.credentialId}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl border border-green-100">
              <h4 className="text-lg font-bold text-gray-900 mb-3">
                Continuous Learning
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                I believe in lifelong learning and staying current with technology trends. 
                I regularly attend conferences, complete online courses, and participate in 
                developer communities to enhance my skills and knowledge.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
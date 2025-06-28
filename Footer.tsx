import React from 'react';
import { Github, Linkedin, Mail, Twitter, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: <Github className="w-5 h-5" />,
      url: 'https://github.com',
      color: 'hover:text-gray-900'
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin className="w-5 h-5" />,
      url: 'https://linkedin.com',
      color: 'hover:text-blue-600'
    },
    {
      name: 'Twitter',
      icon: <Twitter className="w-5 h-5" />,
      url: 'https://twitter.com',
      color: 'hover:text-blue-400'
    },
    {
      name: 'Email',
      icon: <Mail className="w-5 h-5" />,
      url: 'mailto:john.doe@example.com',
      color: 'hover:text-green-600'
    }
  ];

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div className="space-y-4">
            <button
              onClick={scrollToTop}
              className="text-2xl font-bold hover:text-blue-400 transition-colors duration-200"
            >
              John Doe
            </button>
            <p className="text-gray-400 leading-relaxed">
              Full Stack Developer passionate about creating innovative solutions 
              and building exceptional digital experiences with cutting-edge technologies.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 bg-gray-800 rounded-lg text-gray-400 ${link.color} transition-all duration-300 hover:scale-110`}
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">Get In Touch</h3>
            <div className="space-y-3">
              <a
                href="mailto:john.doe@example.com"
                className="block text-gray-400 hover:text-white transition-colors duration-200"
              >
                john.doe@example.com
              </a>
              <a
                href="tel:+15551234567"
                className="block text-gray-400 hover:text-white transition-colors duration-200"
              >
                +1 (555) 123-4567
              </a>
              <p className="text-gray-400">
                San Francisco, CA
              </p>
            </div>
            <div className="mt-6">
              <p className="text-sm text-gray-400 mb-2">Available for:</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-600 text-white text-xs rounded-full">
                  Full-time
                </span>
                <span className="px-3 py-1 bg-green-600 text-white text-xs rounded-full">
                  Freelance
                </span>
                <span className="px-3 py-1 bg-purple-600 text-white text-xs rounded-full">
                  Consulting
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-400">
              <span>&copy; {new Date().getFullYear()} John Doe. All rights reserved.</span>
            </div>
            
            <div className="flex items-center space-x-2 text-gray-400">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>using React & TypeScript</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
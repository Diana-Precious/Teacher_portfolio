import React from 'react';
import { BookOpen, Menu, X } from 'lucide-react';

interface HeaderProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ isMenuOpen, setIsMenuOpen }) => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <BookOpen className="h-8 w-8 text-blue-900" />
            <span className="text-xl font-bold text-blue-900">Teaching Excellence</span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-blue-900 transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-blue-900 transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('experience')} className="text-gray-700 hover:text-blue-900 transition-colors">
              Experience
            </button>
            <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-blue-900 transition-colors">
              Services
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-blue-900 transition-colors">
              Contact
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-blue-900 transition-colors text-left">
                Home
              </button>
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-blue-900 transition-colors text-left">
                About
              </button>
              <button onClick={() => scrollToSection('experience')} className="text-gray-700 hover:text-blue-900 transition-colors text-left">
                Experience
              </button>
              <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-blue-900 transition-colors text-left">
                Services
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-blue-900 transition-colors text-left">
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
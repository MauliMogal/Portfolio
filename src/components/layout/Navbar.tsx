import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Download } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact', path: '/contact' },
];

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Add scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle downloading the resume
  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = '/src/assets/resume.pdf';
    link.download = 'mauli-mogal-resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-dark-950/90 backdrop-blur-sm shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container-custom mx-auto">
        <nav className="flex items-center justify-between py-4">
          {/* Logo */}
          <NavLink to="/" className="text-white font-medium text-xl">
            <span className="gradient-text">Mauli Mogal</span>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `text-sm font-medium py-2 border-b-2 ${
                        isActive
                          ? 'text-primary-400 border-primary-400'
                          : 'text-gray-300 border-transparent hover:text-white hover:border-gray-700'
                      } transition-all duration-200`
                    }
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>

            <button
              onClick={handleResumeDownload}
              className="btn-primary text-sm flex items-center space-x-2"
            >
              <span>Resume</span>
              <Download size={16} />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-300 hover:text-white transition-colors"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden glass-effect"
          >
            <div className="container-custom mx-auto py-4">
              <ul className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <NavLink
                      to={link.path}
                      className={({ isActive }) =>
                        `block py-2 px-4 rounded-lg ${
                          isActive
                            ? 'bg-primary-900/20 text-primary-400'
                            : 'text-gray-300 hover:bg-dark-800 hover:text-white'
                        } transition-colors`
                      }
                    >
                      {link.name}
                    </NavLink>
                  </li>
                ))}
                <li>
                  <button
                    onClick={handleResumeDownload}
                    className="w-full text-left flex items-center justify-between py-2 px-4 text-gray-300 hover:bg-dark-800 hover:text-white rounded-lg transition-colors"
                  >
                    <span>Resume</span>
                    <Download size={16} />
                  </button>
                </li>
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
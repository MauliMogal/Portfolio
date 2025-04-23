import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { 
      name: 'GitHub', 
      icon: <Github size={18} />, 
      url: 'https://github.com/maulimogal' 
    },
    { 
      name: 'LinkedIn', 
      icon: <Linkedin size={18} />, 
      url: 'https://linkedin.com/in/maulimogal' 
    },
    { 
      name: 'Twitter', 
      icon: <Twitter size={18} />, 
      url: 'https://twitter.com/maulimogal' 
    },
    { 
      name: 'Email', 
      icon: <Mail size={18} />, 
      url: 'mailto:maulimogal@gmail.com' 
    },
  ];

  return (
    <footer className="bg-dark-950 border-t border-dark-800">
      <div className="container-custom mx-auto py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="text-xl font-medium gradient-text mb-2">Mauli Mogal</div>
            <p className="text-gray-400 text-sm">Full Stack Web Developer</p>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary-400 transition-colors"
                  aria-label={link.name}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="border-t border-dark-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <div>© {currentYear} Mauli Mogal. All rights reserved.</div>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6">
              <li><a href="#" className="hover:text-primary-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
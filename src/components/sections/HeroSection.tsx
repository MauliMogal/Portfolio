import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center pt-16 relative overflow-hidden">
      {/* Background gradient elements */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary-600/10 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[100px] -z-10"></div>
      
      <div className="container-custom mx-auto">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto"
          >
            <span className="text-primary-400 font-medium mb-2 block">Hello, I'm</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              Mauli Mogal
              <span className="block mt-2 gradient-text">Full Stack Web Developer</span>
            </h1>
            
            <p className="text-gray-300 text-lg md:text-xl mb-8">
            I specialize in building modern, responsive web applications that prioritize simplicity, usability, and real-world impact. My goal is to create seamless digital experiences that solve problems and make users’ lives easier.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/projects" className="btn-primary">
                View My Work
              </Link>
              <Link to="/contact" className="btn-outline">
                Get In Touch
              </Link>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:flex flex-col items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <span className="text-gray-400 text-sm mb-2">Scroll Down</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ArrowDown size={20} className="text-primary-400" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
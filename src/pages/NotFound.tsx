import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Home } from 'lucide-react';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center">
      <div className="container-custom mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-8xl font-bold mb-6 gradient-text">404</h1>
          <h2 className="text-3xl md:text-4xl font-medium mb-4">Page Not Found</h2>
          <p className="text-gray-400 mb-8 max-w-lg mx-auto">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/" 
              className="btn-primary flex items-center"
            >
              <Home size={16} className="mr-2" />
              <span>Back to Home</span>
            </Link>
            
            <button 
              onClick={() => window.history.back()}
              className="btn-outline flex items-center"
            >
              <ArrowLeft size={16} className="mr-2" />
              <span>Go Back</span>
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
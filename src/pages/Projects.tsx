import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../assets/projectData';
import ProjectCard from '../components/ui/ProjectCard';

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  
  // Extract unique technologies for filter
  const allTechnologies = projects.flatMap(project => project.technologies);
  const uniqueTechnologies = Array.from(new Set(allTechnologies)).sort();
  
  // Filter projects based on selected technology
  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.technologies.includes(activeFilter));
  
  return (
    <div className="pt-24 pb-16">
      <div className="container-custom mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-primary-400 text-sm font-medium uppercase tracking-wider">Portfolio</span>
          <h1 className="text-3xl md:text-4xl font-bold mt-2">My Projects</h1>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            Here's a collection of my recent work. Browse through to see the various projects I've developed using different technologies.
          </p>
        </motion.div>
        
        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center mb-12 gap-3">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveFilter('all')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeFilter === 'all'
                ? 'bg-primary-600 text-white'
                : 'bg-dark-800 text-gray-300 hover:bg-dark-700'
            }`}
          >
            All
          </motion.button>
          
          {uniqueTechnologies.slice(0, 7).map((tech) => (
            <motion.button
              key={tech}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(tech)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeFilter === tech
                  ? 'bg-primary-600 text-white'
                  : 'bg-dark-800 text-gray-300 hover:bg-dark-700'
              }`}
            >
              {tech}
            </motion.button>
          ))}
        </div>
        
        {/* Projects grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {filteredProjects.length > 0 ? (
                filteredProjects.map((project, index) => (
                  <ProjectCard key={project.id} project={project} index={index} />
                ))
              ) : (
                <div className="col-span-full text-center py-16">
                  <p className="text-gray-400 text-lg">No projects found with the selected filter.</p>
                </div>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Projects;
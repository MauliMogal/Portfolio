import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { projects } from '../../assets/projectData';
import ProjectCard from '../ui/ProjectCard';

const FeaturedProjects: React.FC = () => {
  // Get only featured projects
  const featuredProjects = projects.filter(project => project.featured).slice(0, 3);
  
  return (
    <section className="section">
      <div className="container-custom mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-10"
        >
          <div>
            <span className="text-primary-400 text-sm font-medium uppercase tracking-wider">My Work</span>
            <h2 className="section-title mt-2">Featured Projects</h2>
          </div>
          
          <Link 
            to="/projects" 
            className="text-primary-400 hover:text-primary-300 font-medium inline-flex items-center group mt-4 md:mt-0"
          >
            <span>View All Projects</span>
            <ArrowRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
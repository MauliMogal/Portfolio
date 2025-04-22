import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Github, ChevronRight, ChevronLeft } from 'lucide-react';
import { projects, ProjectType } from '../assets/projectData';

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [project, setProject] = useState<ProjectType | null>(null);
  const [nextProject, setNextProject] = useState<ProjectType | null>(null);
  const [prevProject, setPrevProject] = useState<ProjectType | null>(null);
  
  useEffect(() => {
    if (id) {
      const projectId = parseInt(id);
      const currentProject = projects.find(p => p.id === projectId) || null;
      setProject(currentProject);
      
      if (currentProject) {
        const currentIndex = projects.findIndex(p => p.id === projectId);
        setPrevProject(currentIndex > 0 ? projects[currentIndex - 1] : null);
        setNextProject(currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null);
      }
    }
  }, [id]);
  
  if (!project) {
    return (
      <div className="pt-24 pb-16 text-center">
        <div className="container-custom mx-auto">
          <h1 className="text-2xl font-bold mb-4">Project not found</h1>
          <p className="text-gray-400 mb-6">The project you're looking for doesn't exist or has been removed.</p>
          <Link to="/projects" className="btn-primary inline-flex items-center">
            <ArrowLeft size={16} className="mr-2" />
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <div className="pt-24 pb-16">
      <div className="container-custom mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Back to projects link */}
          <Link 
            to="/projects" 
            className="inline-flex items-center text-gray-400 hover:text-primary-400 mb-8 transition-colors"
          >
            <ArrowLeft size={16} className="mr-1" />
            <span>Back to All Projects</span>
          </Link>
          
          {/* Project Hero */}
          <div className="glass-effect rounded-xl overflow-hidden mb-12">
            <div className="aspect-[16/9] md:aspect-[21/9]">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          {/* Project Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h1 className="text-3xl md:text-4xl font-bold mb-6">{project.title}</h1>
                
                <div className="mb-8">
                  <h2 className="text-xl font-medium mb-3">Project Overview</h2>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  
                  {/* Extended description - this would be part of your actual data model */}
                  <p className="text-gray-300">
                    This project was developed to solve real-world problems by providing users with an intuitive interface and robust functionality. 
                    I focused on performance optimization, responsive design, and clean code architecture to ensure a seamless user experience 
                    across all devices.
                  </p>
                </div>
                
                <div className="mb-8">
                  <h2 className="text-xl font-medium mb-3">Key Features</h2>
                  <ul className="list-disc pl-5 text-gray-300 space-y-2">
                    <li>Responsive design that works on all devices</li>
                    <li>Intuitive user interface with smooth animations</li>
                    <li>Optimized performance for fast load times</li>
                    <li>Secure authentication and data handling</li>
                    <li>Comprehensive error handling and user feedback</li>
                  </ul>
                </div>
                
                <div className="mb-8">
                  <h2 className="text-xl font-medium mb-3">Development Process</h2>
                  <p className="text-gray-300">
                    The development process involved extensive planning, wireframing, and prototyping before moving to the implementation phase. 
                    I followed an agile methodology, breaking down the project into manageable sprints and constantly iterating based on feedback.
                  </p>
                </div>
              </motion.div>
            </div>
            
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="glass-effect rounded-xl p-6"
              >
                <h2 className="text-xl font-medium mb-4">Project Details</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-sm text-gray-400 mb-2">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="bg-dark-800 text-gray-300 px-3 py-1 text-xs rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-sm text-gray-400 mb-2">Project Links</h3>
                    <div className="space-y-3">
                      {project.demoLink && (
                        <a
                          href={project.demoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-primary-400 hover:text-primary-300 transition-colors"
                        >
                          <ExternalLink size={16} className="mr-2" />
                          <span>Live Demo</span>
                        </a>
                      )}
                      
                      {project.githubLink && (
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-primary-400 hover:text-primary-300 transition-colors"
                        >
                          <Github size={16} className="mr-2" />
                          <span>GitHub Repository</span>
                        </a>
                      )}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-sm text-gray-400 mb-2">Completion Date</h3>
                    <p className="text-gray-300">January 2025</p>
                  </div>
                  
                  <div>
                    <h3 className="text-sm text-gray-400 mb-2">Client/Project Type</h3>
                    <p className="text-gray-300">Personal Project</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
          
          {/* Navigation between projects */}
          <div className="mt-16 flex justify-between items-center border-t border-dark-800 pt-8">
            <div>
              {prevProject && (
                <Link
                  to={`/projects/${prevProject.id}`}
                  className="flex items-center text-gray-300 hover:text-primary-400 transition-colors"
                >
                  <ChevronLeft size={20} className="mr-1" />
                  <span>Previous Project</span>
                </Link>
              )}
            </div>
            
            <div>
              {nextProject && (
                <Link
                  to={`/projects/${nextProject.id}`}
                  className="flex items-center text-gray-300 hover:text-primary-400 transition-colors"
                >
                  <span>Next Project</span>
                  <ChevronRight size={20} className="ml-1" />
                </Link>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectDetail;
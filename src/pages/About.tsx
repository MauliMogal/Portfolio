import React from 'react';
import { motion } from 'framer-motion';
import { Download, Briefcase, Code2, Database, Globe, Server } from 'lucide-react';
import { skillsData } from '../assets/skillsData';
import mauliImage from '../assets/mauli.jpeg'; // adjust the path as needed


const experience = [
  {
    period: "April 2024 - Present",
    title: "Full Stack Developer",
    company: "BVT InfoTech Private Limited",
    description: "Lead the development of modern web applications, implementing best practices, and mentoring junior developers."
  },
  {
    period: "June 2022 - Feb 2024",
    title: "Web Developer",
    company: "SDLC Corp",
    description: "Developed and maintained full stack web applications using React, Node.js, and MongoDB."
  },
  {
    period: "Dec 2021 - May 2022",
    title: "Web Development Intern",
    company: "Techinvento",
    description: "Assisted in the development of web applications and learned modern development practices."
  }
];

const skillIcons = {
  Frontend: <Code2 size={24} />,
  Backend: <Server size={24} />,
  "DevOps/Tools": <Database size={24} />,
  Other: <Globe size={24} />
};

const About: React.FC = () => {
  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = '/src/assets/resume-placeholder.pdf';
    link.download = 'developer-resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="pt-24 pb-16">
      <div className="container-custom mx-auto">
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <span className="text-primary-400 text-sm font-medium uppercase tracking-wider">About Me</span>
            <h1 className="text-3xl md:text-4xl font-bold mt-2">My Journey</h1>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="glass-effect rounded-xl overflow-hidden max-w-md mx-auto">
                <img 
                  src={mauliImage} 
                  alt="Developer Portrait" 
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h2 className="text-2xl font-bold mb-4">Hello, I'm Mauli Mogal</h2>
              <p className="text-gray-300 mb-4">
                I'm a passionate full stack developer with over 3 years of experience creating modern web applications. I specialize in building scalable, user-friendly applications using cutting-edge technologies.
              </p>
              <p className="text-gray-300 mb-6">
                My journey in web development began during my university years, and since then, I've worked with various companies and clients to bring their ideas to life. I believe in clean code, intuitive design, and staying up-to-date with the latest industry trends.
              </p>
              
              <button
                onClick={handleResumeDownload}
                className="btn-primary flex items-center space-x-2"
              >
                <span>Download Resume</span>
                <Download size={16} />
              </button>
            </motion.div>
          </div>
        </section>
        
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <span className="text-primary-400 text-sm font-medium uppercase tracking-wider">My Skills</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">Technical Expertise</h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
            {skillsData.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                className="glass-effect rounded-xl p-6"
              >
                <div className="flex items-center gap-3 mb-6">
                  {skillIcons[category.category]}
                  <h3 className="text-xl font-medium">{category.category}</h3>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="text-gray-300 hover:text-primary-400 transition-colors">
                      {skill.name}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>
        
        <section>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <span className="text-primary-400 text-sm font-medium uppercase tracking-wider">My Background</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">Work Experience</h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex items-center mb-8">
              <Briefcase size={24} className="text-primary-400 mr-3" />
              <h3 className="text-2xl font-medium">Professional Journey</h3>
            </div>
            
            <div className="relative border-l-2 border-dark-700 pl-8 space-y-8">
              {experience.map((item, index) => (
                <div key={index} className="relative">
                  <div className="absolute -left-10 w-5 h-5 rounded-full bg-primary-600 border-4 border-dark-950"></div>
                  <span className="text-sm text-primary-400 font-medium">{item.period}</span>
                  <h4 className="text-xl font-medium mt-1">{item.title}</h4>
                  <p className="text-gray-400 mb-1">{item.company}</p>
                  <p className="text-gray-300">{item.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
};

export default About;
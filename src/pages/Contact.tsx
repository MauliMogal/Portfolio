import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';
import ContactForm from '../components/ui/ContactForm';

const contactInfo = [
  {
    icon: <Mail size={24} />,
    title: 'Email',
    value: 'john.doe@example.com',
    link: 'mailto:john.doe@example.com'
  },
  {
    icon: <Phone size={24} />,
    title: 'Phone',
    value: '+1 (555) 123-4567',
    link: 'tel:+15551234567'
  },
  {
    icon: <MapPin size={24} />,
    title: 'Location',
    value: 'San Francisco, CA',
    link: null
  }
];

const socialLinks = [
  {
    icon: <Github size={24} />,
    title: 'GitHub',
    username: 'johndoe',
    link: 'https://github.com/yourusername'
  },
  {
    icon: <Linkedin size={24} />,
    title: 'LinkedIn',
    username: 'johndoe',
    link: 'https://linkedin.com/in/yourusername'
  },
  {
    icon: <Twitter size={24} />,
    title: 'Twitter',
    username: '@johndoe',
    link: 'https://twitter.com/yourusername'
  }
];

const Contact: React.FC = () => {
  return (
    <div className="pt-24 pb-16">
      <div className="container-custom mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-primary-400 text-sm font-medium uppercase tracking-wider">Contact</span>
          <h1 className="text-3xl md:text-4xl font-bold mt-2">Get In Touch</h1>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <ContactForm />
          </div>
          
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-8"
            >
              <div className="glass-effect rounded-xl p-6">
                <h2 className="text-xl font-medium mb-6">Contact Information</h2>
                
                <div className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-10 h-10 bg-primary-900/30 rounded-lg flex items-center justify-center text-primary-400 shrink-0">
                        {item.icon}
                      </div>
                      
                      <div className="ml-4">
                        <h3 className="text-sm text-gray-400 mb-1">{item.title}</h3>
                        {item.link ? (
                          <a
                            href={item.link}
                            className="text-gray-200 hover:text-primary-400 transition-colors"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-gray-200">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="glass-effect rounded-xl p-6">
                <h2 className="text-xl font-medium mb-6">Connect With Me</h2>
                
                <div className="space-y-6">
                  {socialLinks.map((item, index) => (
                    <a
                      key={index}
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start hover:bg-dark-800 p-3 rounded-lg transition-colors"
                    >
                      <div className="w-10 h-10 bg-primary-900/30 rounded-lg flex items-center justify-center text-primary-400 shrink-0">
                        {item.icon}
                      </div>
                      
                      <div className="ml-4">
                        <h3 className="text-sm text-gray-400 mb-1">{item.title}</h3>
                        <p className="text-gray-200">{item.username}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
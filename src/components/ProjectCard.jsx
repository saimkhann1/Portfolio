// src/components/ProjectCard.jsx
import React from 'react';
import { motion } from 'framer-motion';

const ProjectCard = ({ project }) => {
  return (
    <motion.div 
      whileHover={{ y: -10 }} // High-end hover effect: card thoda upar uthega
      className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-100"
    >
      {/* Project Image */}
      <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
      
      <div className="p-6">
        {/* Title & Description */}
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>
        
        {/* Dynamic Tech Stack Badges */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((skill, index) => (
            <span key={index} className="px-3 py-1 bg-blue-50 text-blue-600 text-sm font-semibold rounded-full">
              {skill}
            </span>
          ))}
        </div>
        
        {/* Links */}
        <div className="flex space-x-4">
          <a href={project.github} className="text-gray-900 font-medium hover:text-blue-600 transition-colors">
            GitHub Code &rarr;
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
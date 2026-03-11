// src/components/ProjectCard.jsx
import React from 'react';
import { motion } from 'framer-motion';

const ProjectCard = ({ project }) => {
  return (
    <motion.div 
      whileHover={{ y: -10 }} 
      className="bg-[#242729] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-800"
    >
      <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
      
      <div className="p-6">
        <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-gray-400 mb-4 line-clamp-3">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((skill, index) => (
            <span key={index} className="px-3 py-1 bg-blue-900/30 text-blue-400 text-sm font-semibold rounded-full">
              {skill}
            </span>
          ))}
        </div>
        
        <div className="flex space-x-4">
          <a href={project.github} className="text-gray-300 font-medium hover:text-blue-400 transition-colors">
            GitHub Code &rarr;
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
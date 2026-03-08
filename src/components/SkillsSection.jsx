// src/components/SkillsSection.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { skillsData } from '../data/skills';

// Parent Container ki Animation (Yeh control karega ke bachay kaise aayenge)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15 // Har skill 0.15 seconds ke gap se aayega
    }
  }
};

// Har Single Skill ki Animation
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <h2 className="text-4xl font-extrabold text-gray-900 mb-12">My Tech Stack</h2>

        {/* CSS Grid + Framer Motion Container */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible" // Jab user yahan scroll karega tab animation chalegi
          viewport={{ once: true, amount: 0.2 }} // Ek dafa chalegi, jab 20% section screen par hoga
        >
          
          {/* Mapping Skills */}
          {skillsData.map((skill) => (
            <motion.div 
              key={skill.id} 
              variants={itemVariants}
              className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:border-blue-200 transition-all duration-300 flex flex-col items-center justify-center"
            >
              <span className="text-lg font-bold text-gray-800">{skill.name}</span>
              <span className="text-sm text-blue-500 mt-1 font-medium">{skill.category}</span>
            </motion.div>
          ))}

        </motion.div>

      </div>
    </section>
  );
};

export default SkillsSection;
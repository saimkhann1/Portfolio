// src/components/SkillsSection.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { skillsData } from '../data/skills';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15 
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 bg-[#181a1b]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <h2 className="text-4xl font-extrabold text-white mb-12">My Tech Stack</h2>

        <motion.div 
          className="grid grid-cols-2 md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {skillsData.map((skill) => (
            <motion.div 
              key={skill.id} 
              variants={itemVariants}
              className="bg-[#242729] p-6 rounded-2xl shadow-sm border border-gray-800 hover:shadow-md hover:border-blue-500 transition-all duration-300 flex flex-col items-center justify-center"
            >
              <span className="text-lg font-bold text-gray-100">{skill.name}</span>
              <span className="text-sm text-blue-400 mt-1 font-medium">{skill.category}</span>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default SkillsSection;
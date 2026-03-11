// src/components/ProjectsSection.jsx
import React from 'react';
import ProjectCard from './ProjectCard';
import { projectsData } from '../data/projects.js';

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 bg-[#181a1b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-white mb-4">Featured Work</h2>
          <p className="text-xl text-gray-400">Some of the real-world applications I have built.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
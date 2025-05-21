import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import { projects } from '../../data/projects';
import { Project } from '../../types';

const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Map project IDs to demo video URLs
  const demoVideos: Record<string, string> = {
    'ecosystem-simulation': '/videos/ECOsystemISLA.mp4',
    'caesar-cipher': '/videos/Encryptor.mp4',
  };

  const launchDemo = (path: string) => {
    const videoUrl = demoVideos[path];
    if (videoUrl) {
      window.open(videoUrl, '_blank');
    } else {
      alert('Demo video not available');
    }
  };

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-indigo-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            My Projects
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explore my portfolio of Java and Python based applications, demonstrating clean architecture, 
            robust functionality, and intuitive user interfaces.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              onClick={() => openModal(project)} 
            />
          ))}
        </div>
      </div>

      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          isOpen={isModalOpen} 
          onClose={closeModal} 
          onLaunchDemo={launchDemo}
        />
      )}
    </section>
  );
};

export default ProjectsSection;
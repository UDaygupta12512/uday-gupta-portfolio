
import React, { useState, useEffect } from 'react';
import SectionHeading from '../components/SectionHeading';
import ProjectCard from '../components/Projects/ProjectCard';
import ProjectsThreeScene from '../components/Projects/ProjectsThreeScene';
import { projects } from '../data/projectsData';
import AnimatedElement from '../components/AnimatedElement';

const Projects: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [visible, setVisible] = useState(false);
  const [canvasError, setCanvasError] = useState(false);
  
  useEffect(() => {
    // Show components when mounted with a small delay for a nicer effect
    const timer = setTimeout(() => setVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);
  
  const handleCanvasError = () => {
    console.error("Canvas error detected - falling back to 2D view");
    setCanvasError(true);
  };

  return (
    <section id="projects" className="section-padding pt-28 md:pt-36 pb-20">
      <div className="container">
        <SectionHeading 
          title="My Projects"
          subtitle="Explore some of my recent work and personal projects"
        />
        
        {!canvasError ? (
          <div 
            className="h-[450px] w-full mb-20 transition-all duration-700 scale-y-100 opacity-100"
            style={{ 
              transform: visible ? 'translateY(0) scale(1)' : 'translateY(50px) scale(0.95)',
              opacity: visible ? 1 : 0,
            }}
          >
            <ProjectsThreeScene 
              projects={projects}
              hoveredIndex={hoveredIndex}
              onProjectSelect={setSelectedProject}
              onError={handleCanvasError}
            />
          </div>
        ) : (
          <div className="h-[100px] mb-16 flex items-center justify-center">
            <p className="text-muted-foreground">3D view unavailable - showing projects below</p>
          </div>
        )}
        
        <AnimatedElement animation="fade-up" className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                project={project}
                index={index}
                visible={visible}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              />
            ))}
          </div>
        </AnimatedElement>
      </div>
    </section>
  );
};

export default Projects;

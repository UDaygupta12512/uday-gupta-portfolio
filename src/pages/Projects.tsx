
import React, { useState, useEffect } from 'react';
import SectionHeading from '../components/SectionHeading';
import ProjectCard from '../components/Projects/ProjectCard';
import { projects } from '../data/projectsData';
import AnimatedElement from '../components/AnimatedElement';

const Projects: React.FC = () => {
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    // Show components when mounted with a small delay for a nicer effect
    const timer = setTimeout(() => setVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="projects" className="section-padding pt-28 md:pt-36 pb-20">
      <div className="container">
        <SectionHeading 
          title="My Projects"
          subtitle="Explore some of my recent work and personal projects"
        />
        
        <AnimatedElement animation="fade-up" className="w-full mt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                project={project}
                index={index}
                visible={visible}
                onMouseEnter={() => {}}
                onMouseLeave={() => {}}
              />
            ))}
          </div>
        </AnimatedElement>
      </div>
    </section>
  );
};

export default Projects;


import React, { useState, useEffect } from 'react';
import SectionHeading from '../components/SectionHeading';
import ProjectCard from '../components/Projects/ProjectCard';
import { projects } from '../data/projectsData';
import AnimatedElement from '../components/AnimatedElement';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="bg-muted/50 backdrop-blur-md">
                <TabsTrigger value="all" className="text-sm md:text-base">All Projects</TabsTrigger>
                <TabsTrigger value="web" className="text-sm md:text-base">Web Dev</TabsTrigger>
                <TabsTrigger value="ai" className="text-sm md:text-base">AI/ML</TabsTrigger>
                <TabsTrigger value="mobile" className="text-sm md:text-base">Mobile</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="all" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                  <ProjectCard
                    key={index}
                    project={project}
                    index={index}
                    visible={visible}
                  />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="web" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects
                  .filter(project => project.categories?.includes('web'))
                  .map((project, index) => (
                    <ProjectCard
                      key={index}
                      project={project}
                      index={index}
                      visible={visible}
                    />
                  ))}
              </div>
            </TabsContent>
            
            <TabsContent value="ai" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects
                  .filter(project => project.categories?.includes('ai'))
                  .map((project, index) => (
                    <ProjectCard
                      key={index}
                      project={project}
                      index={index}
                      visible={visible}
                    />
                  ))}
              </div>
            </TabsContent>
            
            <TabsContent value="mobile" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects
                  .filter(project => project.categories?.includes('mobile'))
                  .map((project, index) => (
                    <ProjectCard
                      key={index}
                      project={project}
                      index={index}
                      visible={visible}
                    />
                  ))}
              </div>
            </TabsContent>
          </Tabs>
        </AnimatedElement>
      </div>
    </section>
  );
};

export default Projects;

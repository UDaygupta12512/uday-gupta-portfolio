
import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "@/components/ui/tooltip";

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubLink: string;
  liveLink?: string;
  color: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
  visible: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  project, 
  index, 
  visible 
}) => {
  return (
    <Card 
      key={index} 
      className="glass-card overflow-hidden rounded-xl transition-all duration-500 hover:translate-y-[-12px] hover:shadow-2xl border-white/5 bg-white/5 backdrop-blur-sm fade-in group"
      style={{ 
        animationDelay: `${index * 150}ms`, 
        boxShadow: `0 10px 30px -15px ${project.color}80`,
        transform: visible ? 'translateY(0)' : 'translateY(50px)',
        opacity: visible ? 1 : 0,
        transition: `all 0.7s ease-out ${index * 150}ms`
      }}
    >
      <div 
        className="h-2 w-full" 
        style={{ backgroundColor: project.color }}
      />
      
      <div className="p-4 flex justify-between">
        <div className="bg-portfolio-blue/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-white">
          Project
        </div>
        <div className="flex gap-2">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <a 
                  href={project.githubLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-portfolio-blue p-2 rounded-full hover:bg-portfolio-light-blue transition-all transform hover:scale-110 active:scale-95"
                  aria-label={`GitHub repository for ${project.title}`}
                >
                  <Github className="h-4 w-4 text-white" />
                </a>
              </TooltipTrigger>
              <TooltipContent className="bg-portfolio-dark-blue/90 backdrop-blur-md border-white/10 text-white">
                View GitHub Repository
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          
          {project.liveLink && (
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <a 
                    href={project.liveLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-portfolio-blue p-2 rounded-full hover:bg-portfolio-light-blue transition-all transform hover:scale-110 active:scale-95"
                    aria-label={`Live demo for ${project.title}`}
                  >
                    <ExternalLink className="h-4 w-4 text-white" />
                  </a>
                </TooltipTrigger>
                <TooltipContent className="bg-portfolio-dark-blue/90 backdrop-blur-md border-white/10 text-white">
                  View Live Demo
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          )}
        </div>
      </div>
      
      <CardContent className="p-6 space-y-4 relative group">
        <h3 className="text-2xl font-bold gradient-text group-hover:bg-gradient-to-r group-hover:from-portfolio-light-blue group-hover:to-white transition-all duration-500">
          <span className="inline-block transform transition-transform duration-500 group-hover:translate-x-1">
            {project.title}
          </span>
        </h3>
        
        <p className="text-muted-foreground transition-opacity duration-500 group-hover:text-white/90">
          {project.description}
        </p>
        
        <div className="pt-2">
          <h4 className="text-xs uppercase tracking-wider text-muted-foreground mb-2">Technologies</h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, i) => (
              <Badge 
                key={i}
                variant="secondary"
                className="bg-white/10 hover:bg-portfolio-blue/50 text-white border-none transition-all duration-300 transform hover:scale-105 hover:-translate-y-0.5"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;

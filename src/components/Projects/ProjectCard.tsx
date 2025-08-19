
import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "@/components/ui/tooltip";
import { motion } from 'framer-motion';

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubLink: string;
  liveLink?: string;
  color: string;
  image?: string;
  categories?: string[];
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
    <motion.div
      initial={{ 
        opacity: 0, 
        y: 50,
        scale: 0.9,
      }}
      animate={visible ? { 
        opacity: 1, 
        y: 0,
        scale: 1,
        transition: {
          type: 'spring',
          stiffness: 100,
          damping: 15,
          delay: index * 0.1
        }
      } : {}}
      whileHover={{ 
        y: -12,
        transition: {
          type: 'spring',
          stiffness: 300,
        }
      }}
    >
      <Card 
        className="frost-card overflow-hidden rounded-xl border-white/5 h-full flex flex-col"
      >
        <div className="relative w-full h-48 overflow-hidden">
          {project.image ? (
            <div className="relative w-full h-full">
              <div 
                className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"
                style={{ backdropFilter: 'blur(0px)' }}
              ></div>
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 w-full h-1" style={{ backgroundColor: project.color }}></div>
            </div>
          ) : (
            <div 
              className="w-full h-full flex items-center justify-center"
              style={{ 
                background: `linear-gradient(135deg, ${project.color}30, ${project.color}90)`
              }}
            >
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                className="relative"
              >
                <div className="absolute inset-0 rounded-full blur-xl opacity-50" style={{ backgroundColor: project.color }}></div>
                <div className="relative z-10 h-20 w-20 rounded-full flex items-center justify-center bg-white/10 backdrop-blur-sm border border-white/20">
                  <span className="text-3xl font-bold text-white">{project.title.charAt(0)}</span>
                </div>
              </motion.div>
              <div className="absolute bottom-0 left-0 w-full h-1" style={{ backgroundColor: project.color }}></div>
            </div>
          )}
          
          <div className="absolute top-3 left-3 flex gap-2 z-20">
            <div className="bg-portfolio-blue/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-white shadow-lg">
              Project
            </div>
          </div>
        </div>
        
        <CardContent className="p-6 space-y-4 relative flex-grow flex flex-col">
          <h3 className="text-2xl font-bold font-montserrat">
            <div className="inline-block relative">
              <span className="gradient-text bg-clip-text text-transparent bg-gradient-to-r from-white to-portfolio-light-blue">
                {project.title}
              </span>
              <div className="absolute -bottom-1 left-0 w-0 h-[2px] bg-portfolio-blue transition-all duration-500 group-hover:w-full"></div>
            </div>
          </h3>
          
          <p className="text-muted-foreground transition-opacity duration-500 group-hover:text-white/90 line-clamp-3">
            {project.description}
          </p>
          
          <div className="pt-2 mt-auto">
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
          
          <div className="flex justify-end gap-2 pt-4">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <motion.a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-portfolio-blue/70 backdrop-blur-sm p-2 rounded-full hover:bg-portfolio-blue transition-all"
                    aria-label={`GitHub repository for ${project.title}`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={(e) => {
                      console.log('GitHub link clicked:', project.githubLink);
                      window.open(project.githubLink, '_blank', 'noopener,noreferrer');
                    }}
                  >
                    <Github className="h-4 w-4 text-white" />
                  </motion.a>
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
                    <motion.a 
                      href={project.liveLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-portfolio-blue/70 backdrop-blur-sm p-2 rounded-full hover:bg-portfolio-blue transition-all"
                      aria-label={`Live demo for ${project.title}`}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={(e) => {
                        console.log('Live link clicked:', project.liveLink);
                        window.open(project.liveLink, '_blank', 'noopener,noreferrer');
                      }}
                    >
                      <ExternalLink className="h-4 w-4 text-white" />
                    </motion.a>
                  </TooltipTrigger>
                  <TooltipContent className="bg-portfolio-dark-blue/90 backdrop-blur-md border-white/10 text-white">
                    View Live Demo
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;

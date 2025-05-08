
import SectionHeading from '../components/SectionHeading';
import { Github, ExternalLink, Code } from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubLink: string;
  liveLink?: string;
  image: string;
}

const Projects = () => {
  const projects: Project[] = [
    {
      title: "Sorting Visualizer",
      description: "An interactive tool that visualizes various sorting algorithms in action, helping users understand how different sorting methods work and compare their performance.",
      technologies: ["Python", "Pygame", "Tkinter"],
      githubLink: "https://github.com/UDaygupta12512/sorting-visualizer",
      image: "/lovable-uploads/45012b50-f341-44fe-a3a7-73ebcf916cd5.png"
    },
    {
      title: "Weather App",
      description: "A responsive web application that provides real-time weather information with automatic location detection. Users can search for weather conditions in different locations globally.",
      technologies: ["ReactJS", "NodeJS", "Weather API"],
      githubLink: "https://github.com/UDaygupta12512/weather-app",
      liveLink: "#",
      image: "/lovable-uploads/748a85d5-a7bd-421e-87e8-9fea482245a7.png"
    },
    {
      title: "News App",
      description: "A dynamic news aggregation platform that delivers the latest updates across various categories. Features include live news updates, content filtering, and article search functionality.",
      technologies: ["ReactJS", "API Integration", "JavaScript"],
      githubLink: "https://github.com/UDaygupta12512/news-app",
      image: "/placeholder.svg"
    }
  ];

  return (
    <section id="projects" className="section-padding pt-28 md:pt-36">
      <div className="container">
        <SectionHeading 
          title="My Projects"
          subtitle="Explore some of my recent work and personal projects"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="glass-card overflow-hidden rounded-xl transition-all duration-300 hover:translate-y-[-12px] hover:shadow-2xl border-white/5 bg-white/5 backdrop-blur-sm fade-in group"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="aspect-video relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-portfolio-dark-blue/95 via-portfolio-dark-blue/60 to-transparent flex items-end transition-opacity">
                  <div className="p-4 w-full flex justify-between">
                    <div className="flex gap-3">
                      <HoverCard>
                        <HoverCardTrigger asChild>
                          <a 
                            href={project.githubLink} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="bg-portfolio-blue p-2 rounded-full hover:bg-portfolio-light-blue transition-all transform hover:scale-110 flex items-center justify-center"
                            aria-label={`GitHub repository for ${project.title}`}
                          >
                            <Github className="h-5 w-5 text-white" />
                          </a>
                        </HoverCardTrigger>
                        <HoverCardContent className="bg-portfolio-dark-blue/90 backdrop-blur-md border-white/10 text-white">
                          View GitHub Repository
                        </HoverCardContent>
                      </HoverCard>
                      
                      {project.liveLink && (
                        <HoverCard>
                          <HoverCardTrigger asChild>
                            <a 
                              href={project.liveLink} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="bg-portfolio-blue p-2 rounded-full hover:bg-portfolio-light-blue transition-all transform hover:scale-110 flex items-center justify-center"
                              aria-label={`Live demo for ${project.title}`}
                            >
                              <ExternalLink className="h-5 w-5 text-white" />
                            </a>
                          </HoverCardTrigger>
                          <HoverCardContent className="bg-portfolio-dark-blue/90 backdrop-blur-md border-white/10 text-white">
                            View Live Demo
                          </HoverCardContent>
                        </HoverCard>
                      )}
                    </div>
                    <div className="bg-portfolio-blue/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-white">
                      Project
                    </div>
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6 space-y-4 relative group">
                <h3 className="text-2xl font-bold gradient-text group-hover:bg-gradient-to-r group-hover:from-portfolio-light-blue group-hover:to-white transition-all duration-300">{project.title}</h3>
                <p className="text-muted-foreground">{project.description}</p>
                <div className="pt-2">
                  <h4 className="text-xs uppercase tracking-wider text-muted-foreground mb-2">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <Badge 
                        key={i}
                        variant="secondary"
                        className="bg-white/10 hover:bg-portfolio-blue/50 text-white border-none transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

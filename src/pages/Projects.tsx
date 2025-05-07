
import SectionHeading from '../components/SectionHeading';
import { Github, ExternalLink, Code } from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

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
      image: "/placeholder.svg"
    },
    {
      title: "Weather App",
      description: "A responsive web application that provides real-time weather information with automatic location detection. Users can search for weather conditions in different locations globally.",
      technologies: ["ReactJS", "NodeJS", "Weather API"],
      githubLink: "https://github.com/UDaygupta12512/weather-app",
      liveLink: "#",
      image: "/placeholder.svg"
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
              className="glass-card overflow-hidden rounded-xl transition-all duration-300 hover:translate-y-[-8px] hover:shadow-xl border-white/5 bg-white/5 backdrop-blur-sm fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="aspect-video bg-gradient-to-br from-portfolio-dark-blue/90 to-portfolio-blue/20 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Code className="h-16 w-16 text-portfolio-light-blue/30" />
                </div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover opacity-60 hover:opacity-80 transition-opacity"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-portfolio-dark-blue/90 to-transparent flex items-end">
                  <div className="p-4 w-full flex justify-between">
                    <div className="flex gap-3">
                      <a 
                        href={project.githubLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-portfolio-blue p-2 rounded-full hover:bg-portfolio-light-blue transition-all transform hover:scale-110"
                        aria-label={`GitHub repository for ${project.title}`}
                      >
                        <Github className="h-5 w-5 text-white" />
                      </a>
                      {project.liveLink && (
                        <a 
                          href={project.liveLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="bg-portfolio-blue p-2 rounded-full hover:bg-portfolio-light-blue transition-all transform hover:scale-110"
                          aria-label={`Live demo for ${project.title}`}
                        >
                          <ExternalLink className="h-5 w-5 text-white" />
                        </a>
                      )}
                    </div>
                    <div className="bg-portfolio-blue/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium">
                      Project
                    </div>
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6 space-y-4">
                <h3 className="text-2xl font-bold gradient-text">{project.title}</h3>
                <p className="text-muted-foreground">{project.description}</p>
                <div className="pt-2">
                  <h4 className="text-xs uppercase tracking-wider text-muted-foreground mb-2">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <Badge 
                        key={i}
                        variant="secondary"
                        className="bg-white/10 hover:bg-white/20 text-white border-none"
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

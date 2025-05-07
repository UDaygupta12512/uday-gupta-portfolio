
import SectionHeading from '../components/SectionHeading';
import { Github, ExternalLink } from 'lucide-react';

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
            <div 
              key={index} 
              className="glass-card overflow-hidden rounded-xl transition-all hover:translate-y-[-5px] hover:shadow-xl fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="aspect-video bg-muted/50 relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-portfolio-dark-blue to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end">
                  <div className="p-4 flex gap-3">
                    <a 
                      href={project.githubLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-portfolio-blue p-2 rounded-full hover:bg-portfolio-light-blue transition-colors"
                    >
                      <Github className="h-5 w-5 text-white" />
                    </a>
                    {project.liveLink && (
                      <a 
                        href={project.liveLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-portfolio-blue p-2 rounded-full hover:bg-portfolio-light-blue transition-colors"
                      >
                        <ExternalLink className="h-5 w-5 text-white" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 gradient-text">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span 
                      key={i}
                      className="text-xs bg-muted px-2 py-1 rounded-full text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

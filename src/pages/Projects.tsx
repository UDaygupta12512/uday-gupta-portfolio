
import { useRef, useState, useEffect } from 'react';
import SectionHeading from '../components/SectionHeading';
import { Github, ExternalLink } from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "@/components/ui/tooltip";
import { Canvas, useFrame } from '@react-three/fiber';
import { useSpring, animated } from '@react-spring/three';
import { Float, Environment, PresentationControls, Text3D, Center } from '@react-three/drei';
import * as THREE from 'three';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubLink: string;
  liveLink?: string;
  color: string;
}

interface ProjectShapeProps {
  position: [number, number, number];
  color: string;
  hover: boolean;
  onClick: () => void;
  index: number;
}

const ProjectShape = ({ position, color, hover, onClick, index }: ProjectShapeProps) => {
  const mesh = useRef<THREE.Mesh>(null);
  
  const props = useSpring({
    scale: hover ? [1.2, 1.2, 1.2] : [1, 1, 1],
    position,
    rotation: hover ? [0, Math.PI / 3, 0] : [0, 0, 0],
    config: { mass: 1, tension: 280, friction: 60 }
  });
  
  useFrame((state) => {
    if (!hover && mesh.current) {
      // Create different animation patterns based on index
      const time = state.clock.getElapsedTime();
      mesh.current.rotation.x = Math.sin(time * 0.2 + index * 0.5) * 0.2;
      mesh.current.rotation.y += 0.01 + (index * 0.002);
      mesh.current.rotation.z = Math.cos(time * 0.3 + index * 0.2) * 0.1;
      
      // Subtle position animation
      mesh.current.position.y = Math.sin(time * 0.5 + index) * 0.2;
    }
  });

  // Choose geometry based on index to create variety
  const renderGeometry = () => {
    switch(index % 3) {
      case 0:
        return <boxGeometry args={[2, 2, 2]} />;
      case 1:
        return <dodecahedronGeometry args={[1.3, 0]} />;
      case 2:
        return <octahedronGeometry args={[1.5, 0]} />;
      default:
        return <boxGeometry args={[2, 2, 2]} />;
    }
  };

  return (
    <animated.mesh 
      ref={mesh}
      position={props.position as any}
      scale={props.scale as any}
      rotation={props.rotation as any}
      onClick={onClick}
    >
      {renderGeometry()}
      <meshStandardMaterial 
        color={color} 
        roughness={0.5} 
        metalness={0.8}
        toneMapped={true}
      />
    </animated.mesh>
  );
};

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    // Show components when mounted with a small delay for a nicer effect
    const timer = setTimeout(() => setVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);
  
  const projects: Project[] = [
    {
      title: "Sorting Visualizer",
      description: "An interactive tool that visualizes various sorting algorithms in action, helping users understand how different sorting methods work and compare their performance.",
      technologies: ["Python", "Pygame", "Tkinter"],
      githubLink: "https://github.com/UDaygupta12512/sorting-visualizer",
      color: "#60a5fa"
    },
    {
      title: "Weather App",
      description: "A responsive web application that provides real-time weather information with automatic location detection. Users can search for weather conditions in different locations globally.",
      technologies: ["ReactJS", "NodeJS", "Weather API"],
      githubLink: "https://github.com/UDaygupta12512/weather-app",
      liveLink: "#",
      color: "#3b82f6"
    },
    {
      title: "News App",
      description: "A dynamic news aggregation platform that delivers the latest updates across various categories. Features include live news updates, content filtering, and article search functionality.",
      technologies: ["ReactJS", "API Integration", "JavaScript"],
      githubLink: "https://github.com/UDaygupta12512/news-app",
      color: "#0f172a"
    }
  ];

  return (
    <section id="projects" className="section-padding pt-28 md:pt-36">
      <div className="container">
        <SectionHeading 
          title="My Projects"
          subtitle="Explore some of my recent work and personal projects"
        />
        
        <div className="h-[400px] w-full mb-16 transition-all duration-700 scale-y-100 opacity-100"
             style={{ 
               transform: visible ? 'translateY(0) scale(1)' : 'translateY(50px) scale(0.95)',
               opacity: visible ? 1 : 0,
             }}>
          <Canvas camera={{ position: [0, 0, 15], fov: 40 }}>
            <ambientLight intensity={0.6} />
            <pointLight position={[10, 10, 10]} intensity={1.2} />
            <directionalLight position={[-5, 5, 5]} intensity={0.8} color="#ffffff" />
            <fog attach="fog" args={['#101020', 10, 30]} />
            <PresentationControls
              global
              rotation={[0, 0, 0]}
              polar={[-Math.PI / 4, Math.PI / 4]}
              azimuth={[-Math.PI / 4, Math.PI / 4]}
              config={{ mass: 2, tension: 400 }}
              snap={{ mass: 4, tension: 300 }}
            >
              <Float rotationIntensity={0.4} speed={3} floatIntensity={1.5}>
                {projects.map((project, index) => (
                  <ProjectShape
                    key={index}
                    position={[(index - 1) * 4.5, 0, 0]}
                    color={project.color}
                    hover={hoveredIndex === index}
                    onClick={() => setSelectedProject(index)}
                    index={index}
                  />
                ))}
              </Float>
            </PresentationControls>
            <Environment preset="city" />
          </Canvas>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
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
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="p-4 flex justify-end">
                <div className="bg-portfolio-blue/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-white">
                  Project
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
                
                <div className="pt-4 flex gap-3">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <a 
                          href={project.githubLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="bg-portfolio-blue p-2 rounded-full hover:bg-portfolio-light-blue transition-all transform hover:scale-125 hover:rotate-6 hover:shadow-xl active:scale-95"
                          aria-label={`GitHub repository for ${project.title}`}
                        >
                          <Github className="h-5 w-5 text-white" />
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
                            className="bg-portfolio-blue p-2 rounded-full hover:bg-portfolio-light-blue transition-all transform hover:scale-125 hover:rotate-6 hover:shadow-xl active:scale-95"
                            aria-label={`Live demo for ${project.title}`}
                          >
                            <ExternalLink className="h-5 w-5 text-white" />
                          </a>
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

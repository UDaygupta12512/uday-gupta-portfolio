
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Float, Environment, PresentationControls, Text } from '@react-three/drei';
import ErrorBoundary from '../ErrorBoundary';
import ProjectShape from './ProjectShape';
import { Project } from '../../data/projectsData';

interface ProjectsThreeSceneProps {
  projects: Project[];
  hoveredIndex: number | null;
  onProjectSelect: (index: number) => void;
  onError: () => void;
}

const ProjectsThreeScene: React.FC<ProjectsThreeSceneProps> = ({
  projects,
  hoveredIndex,
  onProjectSelect,
  onError
}) => {
  // Calculate spacing based on number of projects
  const getPosition = (index: number, total: number): [number, number, number] => {
    // For fewer projects, center them
    if (total <= 3) {
      return [(index - Math.floor(total/2)) * 4.5, 0, 0];
    }
    
    // For more projects, arrange in a semi-circle
    const radius = 8;
    const angle = (Math.PI * 0.8) * (index / (total - 1)) - Math.PI * 0.4;
    return [
      Math.sin(angle) * radius,
      0,
      -Math.cos(angle) * radius + radius - 2
    ];
  };

  return (
    <ErrorBoundary onError={onError}>
      <Canvas 
        camera={{ position: [0, 2, 15], fov: 50 }}
        dpr={[1, 2]} // Control pixel ratio for performance
        gl={{ antialias: true, alpha: true }}
      >
        <color attach="background" args={['#050a18']} />
        <fog attach="fog" args={['#070b1a', 15, 25]} />
        
        <ambientLight intensity={0.6} />
        <pointLight position={[10, 10, 10]} intensity={1.2} />
        <directionalLight position={[-5, 5, 5]} intensity={0.8} color="#ffffff" />
        
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
                position={getPosition(index, projects.length)}
                color={project.color}
                hover={hoveredIndex === index}
                onClick={() => onProjectSelect(index)}
                index={index}
              />
            ))}
          </Float>
        </PresentationControls>
        <Environment preset="city" />
      </Canvas>
    </ErrorBoundary>
  );
};

export default ProjectsThreeScene;

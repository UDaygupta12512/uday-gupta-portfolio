
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Float, Environment, PresentationControls } from '@react-three/drei';
import ErrorBoundary from '../ErrorBoundary';
import ProjectShape from './ProjectShape';
import { Project } from './ProjectCard';

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
  return (
    <ErrorBoundary onError={onError}>
      <Canvas 
        camera={{ position: [0, 0, 15], fov: 40 }}
        dpr={[1, 2]} // Control pixel ratio for performance
        gl={{ antialias: true, alpha: true }}
      >
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

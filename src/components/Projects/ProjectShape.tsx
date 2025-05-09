
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

interface ProjectShapeProps {
  position: [number, number, number];
  color: string;
  hover: boolean;
  onClick: () => void;
  index: number;
}

const ProjectShape: React.FC<ProjectShapeProps> = ({ position, color, hover, onClick, index }) => {
  const mesh = useRef<THREE.Mesh>(null);
  
  // Use useEffect instead of useFrame for basic animations
  useEffect(() => {
    if (!hover && mesh.current) {
      const animate = () => {
        if (mesh.current) {
          // Create different animation patterns based on index
          const time = performance.now() * 0.001; // Convert to seconds
          mesh.current.rotation.x = Math.sin(time * 0.2 + index * 0.5) * 0.2;
          mesh.current.rotation.y += 0.005 + (index * 0.001);
          mesh.current.rotation.z = Math.cos(time * 0.3 + index * 0.2) * 0.1;
          
          // Subtle position animation
          mesh.current.position.y = position[1] + Math.sin(time * 0.5 + index) * 0.2;
        }
      };
      
      const animationFrame = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(animationFrame);
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
    <mesh
      ref={mesh}
      position={position}
      scale={hover ? 1.2 : 1}
      onClick={onClick}
    >
      {renderGeometry()}
      <meshStandardMaterial 
        color={color} 
        roughness={0.5} 
        metalness={0.8}
      />
    </mesh>
  );
};

export default ProjectShape;

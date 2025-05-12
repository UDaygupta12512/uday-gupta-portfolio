
import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedElementProps {
  children: React.ReactNode;
  animation?: 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'zoom-in' | 'zoom-out' | 'bounce' | 'rotate';
  delay?: number;
  duration?: number;
  threshold?: number;
  className?: string;
  once?: boolean;
}

const getAnimationVariants = (animation: string) => {
  const baseVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  switch (animation) {
    case 'fade-up':
      return {
        hidden: { ...baseVariants.hidden, y: 40 },
        visible: { 
          ...baseVariants.visible, 
          y: 0,
          transition: { type: 'spring', stiffness: 100 }
        }
      };
    case 'fade-down':
      return {
        hidden: { ...baseVariants.hidden, y: -40 },
        visible: { 
          ...baseVariants.visible, 
          y: 0,
          transition: { type: 'spring', stiffness: 100 }
        }
      };
    case 'fade-left':
      return {
        hidden: { ...baseVariants.hidden, x: -60 },
        visible: { 
          ...baseVariants.visible, 
          x: 0,
          transition: { type: 'spring', stiffness: 100 }
        }
      };
    case 'fade-right':
      return {
        hidden: { ...baseVariants.hidden, x: 60 },
        visible: { 
          ...baseVariants.visible, 
          x: 0,
          transition: { type: 'spring', stiffness: 100 }
        }
      };
    case 'zoom-in':
      return {
        hidden: { ...baseVariants.hidden, scale: 0.8 },
        visible: { 
          ...baseVariants.visible, 
          scale: 1,
          transition: { type: 'spring', stiffness: 100 }
        }
      };
    case 'zoom-out':
      return {
        hidden: { ...baseVariants.hidden, scale: 1.2 },
        visible: { 
          ...baseVariants.visible, 
          scale: 1,
          transition: { type: 'spring', stiffness: 100 }
        }
      };
    case 'bounce':
      return {
        hidden: { y: 50, opacity: 0 },
        visible: { 
          y: 0, 
          opacity: 1,
          transition: { 
            type: 'spring', 
            stiffness: 400,
            damping: 10
          }
        }
      };
    case 'rotate':
      return {
        hidden: { rotate: 15, opacity: 0, scale: 0.9 },
        visible: { 
          rotate: 0, 
          opacity: 1, 
          scale: 1,
          transition: { type: 'spring', stiffness: 200 }
        }
      };
    default:
      return baseVariants;
  }
};

const AnimatedElement: React.FC<AnimatedElementProps> = ({
  children,
  animation = 'fade-up',
  delay = 0,
  duration = 0.7,
  className = '',
  once = true,
}) => {
  const variants = getAnimationVariants(animation);

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-50px" }}
      variants={variants}
      transition={{ 
        duration,
        delay: delay / 1000,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedElement;

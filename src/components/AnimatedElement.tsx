
import React from 'react';
import { motion, Variant, Variants } from 'framer-motion';

interface AnimatedElementProps {
  children: React.ReactNode;
  animation?: 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'zoom-in' | 'zoom-out' | 'bounce' | 'rotate' | 'slide' | 'none' | 'flip';
  delay?: number;
  duration?: number;
  threshold?: number;
  className?: string;
  once?: boolean;
  staggerChildren?: boolean;
  staggerDelay?: number;
  hover?: 'lift' | 'glow' | 'scale' | 'rotate' | 'none';
  custom?: Variants;
}

const getAnimationVariants = (animation: string): Variants => {
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
    case 'slide':
      return {
        hidden: { 
          x: -100, 
          opacity: 0,
          skewX: '20deg'
        },
        visible: { 
          x: 0, 
          opacity: 1,
          skewX: '0deg',
          transition: { type: 'spring', stiffness: 150, damping: 15 }
        }
      };
    case 'flip':
      return {
        hidden: { 
          opacity: 0,
          rotateX: 90,
          perspective: 500
        },
        visible: { 
          opacity: 1,
          rotateX: 0,
          perspective: 500,
          transition: { type: 'spring', stiffness: 100, damping: 15 }
        }
      };
    case 'none':
      return {
        hidden: { opacity: 1 },
        visible: { opacity: 1 }
      };
    default:
      return baseVariants;
  }
};

const getHoverAnimation = (hover: string) => {
  switch (hover) {
    case 'lift':
      return {
        scale: 1,
        y: 0,
        transition: { duration: 0.2 },
        hover: { 
          y: -8,
          transition: { duration: 0.3, ease: 'easeOut' }
        }
      };
    case 'glow':
      return {
        boxShadow: '0 0 0 rgba(96, 165, 250, 0)',
        transition: { duration: 0.2 },
        hover: { 
          boxShadow: '0 0 20px rgba(96, 165, 250, 0.5)',
          transition: { duration: 0.3 }
        }
      };
    case 'scale':
      return {
        scale: 1,
        transition: { duration: 0.2 },
        hover: { 
          scale: 1.05,
          transition: { duration: 0.3, ease: 'easeOut' }
        }
      };
    case 'rotate':
      return {
        rotate: 0,
        transition: { duration: 0.2 },
        hover: { 
          rotate: 3,
          transition: { duration: 0.3, ease: 'easeOut' }
        }
      };
    default:
      return {};
  }
};

const AnimatedElement: React.FC<AnimatedElementProps> = ({
  children,
  animation = 'fade-up',
  delay = 0,
  duration = 0.7,
  className = '',
  once = true,
  staggerChildren = false,
  staggerDelay = 0.1,
  hover = 'none',
  custom
}) => {
  const variants = custom || getAnimationVariants(animation);
  const hoverAnimation = getHoverAnimation(hover);
  
  const containerVariants = staggerChildren ? {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren,
        delayChildren: delay / 1000,
        staggerDelay
      }
    }
  } : variants;

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-50px" }}
      variants={containerVariants}
      transition={{ 
        duration,
        delay: delay / 1000,
      }}
      className={className}
      whileHover={hover !== 'none' ? "hover" : undefined}
      animate={hover !== 'none' ? hoverAnimation : undefined}
      whileTap={hover !== 'none' ? { scale: 0.98 } : undefined}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedElement;


import React from 'react';
import { motion } from 'framer-motion';
import AnimatedElement from './AnimatedElement';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  animate?: boolean;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  centered = true,
  animate = true
}) => {
  const headingVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100
      }
    }
  };

  const underlineVariants = {
    hidden: { scaleX: 0 },
    visible: { 
      scaleX: 0.5,
      transition: {
        delay: 0.4,
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className={`mb-16 ${centered ? 'text-center' : ''}`}>
      {animate ? (
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2 
            variants={headingVariants}
            className="text-3xl md:text-4xl font-bold mb-3 relative inline-block"
          >
            <span className="gradient-text">{title}</span>
            <motion.span 
              variants={underlineVariants}
              className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-portfolio-blue to-portfolio-light-blue origin-left"
            />
          </motion.h2>
          {subtitle && (
            <motion.p 
              variants={headingVariants}
              className="text-muted-foreground text-lg max-w-2xl mx-auto mt-4"
              transition={{ delay: 0.2 }}
            >
              {subtitle}
            </motion.p>
          )}
        </motion.div>
      ) : (
        <>
          <h2 className="text-3xl md:text-4xl font-bold mb-3 relative inline-block">
            <span className="gradient-text">{title}</span>
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-portfolio-blue to-portfolio-light-blue transform scale-x-50 origin-left"></span>
          </h2>
          {subtitle && (
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mt-4">
              {subtitle}
            </p>
          )}
        </>
      )}
    </div>
  );
};

export default SectionHeading;

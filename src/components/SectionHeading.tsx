
import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  animate?: boolean;
  className?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  centered = true,
  animate = true,
  className = ''
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

  const subtitleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        delay: 0.3,
        type: 'spring',
        stiffness: 80
      }
    }
  };

  const glowVariants = {
    initial: { opacity: 0.5, scale: 0.9 },
    animate: {
      opacity: [0.5, 0.8, 0.5],
      scale: [0.9, 1.1, 0.9],
      transition: {
        duration: 3,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className={`mb-16 ${centered ? 'text-center' : ''} ${className}`}>
      {animate ? (
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative"
        >
          <motion.div 
            className="absolute -inset-1 rounded-lg bg-gradient-to-r from-portfolio-blue/20 to-portfolio-light-blue/20 blur-xl opacity-70"
            variants={glowVariants}
            initial="initial"
            animate="animate"
          />
          
          <motion.h2 
            variants={headingVariants}
            className="text-3xl md:text-4xl font-bold mb-3 relative inline-block font-montserrat"
          >
            <span className="gradient-text">{title}</span>
            <motion.span 
              variants={underlineVariants}
              className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-portfolio-blue to-portfolio-light-blue origin-left"
            />
          </motion.h2>
          {subtitle && (
            <motion.p 
              variants={subtitleVariants}
              className="text-muted-foreground text-lg max-w-2xl mx-auto mt-4 leading-relaxed font-raleway"
            >
              {subtitle}
            </motion.p>
          )}
          
          {/* Decorative elements */}
          <motion.div
            className="absolute -top-6 -left-20 w-2 h-2 bg-portfolio-light-blue rounded-full hidden md:block"
            animate={{
              y: [0, -8, 0],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
          <motion.div
            className="absolute -bottom-4 -right-16 w-2 h-2 bg-portfolio-accent-purple rounded-full hidden md:block"
            animate={{
              y: [0, 8, 0],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse",
              delay: 1
            }}
          />
          <motion.div
            className="absolute top-1/2 -right-10 w-1 h-1 bg-portfolio-accent-green rounded-full hidden md:block"
            animate={{
              x: [0, 5, 0],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
              delay: 0.5
            }}
          />
        </motion.div>
      ) : (
        <div className="relative">
          <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-portfolio-blue/20 to-portfolio-light-blue/20 blur-xl opacity-70"></div>
          <h2 className="text-3xl md:text-4xl font-bold mb-3 relative inline-block font-montserrat">
            <span className="gradient-text">{title}</span>
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-portfolio-blue to-portfolio-light-blue transform scale-x-50 origin-left"></span>
          </h2>
          {subtitle && (
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mt-4 leading-relaxed font-raleway">
              {subtitle}
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default SectionHeading;

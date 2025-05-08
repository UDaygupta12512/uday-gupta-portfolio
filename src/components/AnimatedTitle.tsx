
import React, { useState, useEffect } from 'react';

interface AnimatedTitleProps {
  text: string;
  className?: string;
  elementType?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'; 
  letterDelay?: number;
  initialDelay?: number;
}

const AnimatedTitle: React.FC<AnimatedTitleProps> = ({
  text,
  className = '',
  elementType = 'h2',
  letterDelay = 50,
  initialDelay = 0,
}) => {
  const [visibleLetters, setVisibleLetters] = useState(0);
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        setVisibleLetters(prev => {
          if (prev < text.length) {
            return prev + 1;
          }
          clearInterval(interval);
          return prev;
        });
      }, letterDelay);
      
      return () => clearInterval(interval);
    }, initialDelay);
    
    return () => clearTimeout(timeout);
  }, [text, letterDelay, initialDelay]);
  
  const Element = elementType;
  
  return (
    <Element className={className}>
      {Array.from(text).map((letter, index) => (
        <span
          key={index}
          style={{
            opacity: index < visibleLetters ? 1 : 0,
            transform: index < visibleLetters ? 'translateY(0)' : 'translateY(20px)',
            transition: `opacity 0.2s ease, transform 0.3s ease`,
            transitionDelay: `${index * 30}ms`,
            display: 'inline-block'
          }}
        >
          {letter === ' ' ? '\u00A0' : letter}
        </span>
      ))}
    </Element>
  );
};

export default AnimatedTitle;

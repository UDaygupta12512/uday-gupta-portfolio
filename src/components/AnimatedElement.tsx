
import React, { useEffect, useRef, useState, ReactNode } from 'react';

interface AnimatedElementProps {
  children: ReactNode;
  animation?: 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'zoom-in' | 'zoom-out';
  delay?: number;
  duration?: number;
  threshold?: number;
  className?: string;
  once?: boolean;
}

const AnimatedElement: React.FC<AnimatedElementProps> = ({
  children,
  animation = 'fade-up',
  delay = 0,
  duration = 700,
  threshold = 0.1,
  className = '',
  once = true,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) {
            observer.unobserve(entry.target);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin: '0px',
      }
    );

    observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [once, threshold]);

  const getAnimationStyles = () => {
    let baseStyles = {
      opacity: isVisible ? 1 : 0,
      transition: `all ${duration}ms ease-out ${delay}ms`,
    };
    
    let transformFrom;
    
    switch (animation) {
      case 'fade-up':
        transformFrom = 'translateY(40px)';
        break;
      case 'fade-down':
        transformFrom = 'translateY(-40px)';
        break;
      case 'fade-left':
        transformFrom = 'translateX(40px)';
        break;
      case 'fade-right':
        transformFrom = 'translateX(-40px)';
        break;
      case 'zoom-in':
        transformFrom = 'scale(0.9)';
        break;
      case 'zoom-out':
        transformFrom = 'scale(1.1)';
        break;
      default:
        transformFrom = 'translateY(0)';
    }
    
    return {
      ...baseStyles,
      transform: isVisible ? 'translateY(0) scale(1)' : transformFrom,
    };
  };

  return (
    <div
      ref={elementRef}
      className={className}
      style={getAnimationStyles()}
    >
      {children}
    </div>
  );
};

export default AnimatedElement;

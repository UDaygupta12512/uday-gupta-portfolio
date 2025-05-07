
import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  centered = true
}) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      <h2 className="text-3xl md:text-4xl font-bold mb-3 relative inline-block">
        <span className="gradient-text">{title}</span>
        <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-portfolio-blue to-portfolio-light-blue transform scale-x-50 origin-left"></span>
      </h2>
      {subtitle && (
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto mt-4">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;

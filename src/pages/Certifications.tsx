
import React from 'react';
import SectionHeading from '../components/SectionHeading';
import AnimatedElement from '../components/AnimatedElement';
import { Badge } from '@/components/ui/badge';
import { Certificate } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface Certification {
  provider: string;
  name: string;
  logoColor: string;
  year?: string;
  verificationLink?: string;
}

const certifications: Certification[] = [
  {
    provider: "Salesforce",
    name: "Certified AI Associate",
    logoColor: "#00A1E0",
    year: "2023",
  },
  {
    provider: "Cisco",
    name: "Introduction to Data Science",
    logoColor: "#1BA0D7",
    year: "2023",
  },
  {
    provider: "HackerRank",
    name: "Problem-Solving Basics",
    logoColor: "#2EC866",
    year: "2022"
  },
  {
    provider: "Google",
    name: "Analytics Certification, Cloud Fundamentals",
    logoColor: "#4285F4",
    year: "2022"
  },
  {
    provider: "Internshala",
    name: "Cloud Computing with AWS",
    logoColor: "#FF8C00",
    year: "2021"
  },
  {
    provider: "Microsoft",
    name: "Azure for AI and Machine Learning",
    logoColor: "#00A4EF",
    year: "2023"
  }
];

const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="section-padding pt-28 md:pt-36 pb-20">
      <div className="container">
        <SectionHeading 
          title="My Certifications"
          subtitle="Professional certifications and achievements that validate my skills"
        />
        
        <AnimatedElement animation="fade-up" className="w-full mt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Card 
                key={index} 
                className="glass-card overflow-hidden rounded-xl transition-all duration-500 hover:translate-y-[-12px] hover:shadow-2xl border-white/5 bg-white/5 backdrop-blur-sm fade-in group"
                style={{ 
                  animationDelay: `${index * 150}ms`, 
                  boxShadow: `0 10px 30px -15px ${cert.logoColor}40`,
                }}
              >
                <div 
                  className="h-2 w-full" 
                  style={{ backgroundColor: cert.logoColor }}
                />
                
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div 
                      className="p-2 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: `${cert.logoColor}20` }}
                    >
                      <Certificate 
                        className="h-5 w-5" 
                        style={{ color: cert.logoColor }} 
                      />
                    </div>
                    <h3 className="text-lg font-bold">{cert.provider}</h3>
                    {cert.year && (
                      <Badge 
                        variant="secondary" 
                        className="ml-auto bg-white/10 text-white border-none"
                      >
                        {cert.year}
                      </Badge>
                    )}
                  </div>
                  
                  <p className="text-muted-foreground mt-2">
                    {cert.name}
                  </p>
                  
                  {cert.verificationLink && (
                    <div className="mt-4">
                      <a 
                        href={cert.verificationLink} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-sm text-portfolio-light-blue hover:text-white transition-colors"
                      >
                        Verify Certificate →
                      </a>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </AnimatedElement>
      </div>
    </section>
  );
};

export default Certifications;

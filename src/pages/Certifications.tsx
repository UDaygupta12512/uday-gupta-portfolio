
import React from 'react';
import SectionHeading from '../components/SectionHeading';
import AnimatedElement from '../components/AnimatedElement';
import { Badge } from '@/components/ui/badge';
import { BadgeCheck, ExternalLink } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface Certification {
  provider: string;
  name: string;
  logoColor: string;
  year?: string;
  verificationLink?: string;
  description?: string;
  skills?: string[];
}

const certifications: Certification[] = [
  {
    provider: "Salesforce",
    name: "Certified AI Associate",
    logoColor: "#00A1E0",
    year: "2023",
    description: "Mastered Salesforce Einstein AI capabilities and implementation strategies",
    skills: ["AI Integration", "Predictive Analytics", "Automated Insights"]
  },
  {
    provider: "Cisco",
    name: "Introduction to Data Science",
    logoColor: "#1BA0D7",
    year: "2023",
    description: "Comprehensive understanding of data analysis, visualization, and modeling techniques",
    skills: ["Data Analysis", "Python", "Pandas", "Statistical Modeling"]
  },
  {
    provider: "HackerRank",
    name: "Problem-Solving Basics",
    logoColor: "#2EC866",
    year: "2022",
    description: "Demonstrated proficiency in algorithms and data structures through practical challenges",
    skills: ["Algorithms", "Data Structures", "Optimization", "Logic"]
  },
  {
    provider: "Google",
    name: "Analytics Certification",
    logoColor: "#4285F4",
    year: "2022",
    description: "Expertise in implementing and analyzing marketing data using Google Analytics",
    skills: ["Data Analysis", "Traffic Metrics", "Conversion Tracking", "Reporting"]
  },
  {
    provider: "Internshala",
    name: "Cloud Computing with AWS",
    logoColor: "#FF8C00",
    year: "2021",
    description: "Understanding of AWS services and cloud infrastructure management",
    skills: ["EC2", "S3", "Lambda", "CloudFormation", "IAM"]
  },
  {
    provider: "Coursera",
    name: "Google Cloud Fundamentals",
    logoColor: "#0056D2", 
    year: "2022",
    description: "Core knowledge of Google Cloud Platform services and architecture",
    skills: ["GCP", "Cloud Storage", "Compute Engine", "App Engine"]
  },
  {
    provider: "Microsoft",
    name: "Azure for AI and Machine Learning",
    logoColor: "#00A4EF",
    year: "2023",
    description: "Applied machine learning and AI solutions using Microsoft Azure services",
    skills: ["Azure ML", "Cognitive Services", "AI Models", "Data Processing"]
  }
];

const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="section-padding pt-28 md:pt-36 pb-20">
      <div className="container">
        <SectionHeading 
          title="My Certifications"
          subtitle="Professional certifications and achievements that validate my expertise"
        />
        
        <AnimatedElement animation="fade-up" className="w-full mt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <AnimatedElement 
                key={index} 
                delay={index * 150}
                className="h-full"
              >
                <Card 
                  className="glass-card h-full overflow-hidden rounded-xl transition-all duration-500 hover:translate-y-[-12px] hover:shadow-2xl border-white/5 bg-white/5 backdrop-blur-sm fade-in group"
                  style={{ 
                    boxShadow: `0 10px 30px -15px ${cert.logoColor}40`,
                  }}
                >
                  <div 
                    className="h-2 w-full transition-all duration-300 group-hover:h-3" 
                    style={{ backgroundColor: cert.logoColor }}
                  />
                  
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div 
                        className="p-3 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                        style={{ backgroundColor: `${cert.logoColor}20` }}
                      >
                        <BadgeCheck 
                          className="h-6 w-6" 
                          style={{ color: cert.logoColor }} 
                        />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold font-montserrat">{cert.provider}</h3>
                        <p className="text-muted-foreground text-sm">{cert.name}</p>
                      </div>
                      {cert.year && (
                        <Badge 
                          variant="secondary" 
                          className="ml-auto bg-white/10 text-white border-none"
                        >
                          {cert.year}
                        </Badge>
                      )}
                    </div>
                    
                    {cert.description && (
                      <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
                        {cert.description}
                      </p>
                    )}
                    
                    {cert.skills && (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {cert.skills.map((skill, idx) => (
                          <Badge 
                            key={idx} 
                            className="bg-white/10 text-white hover:bg-white/20"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    )}
                    
                    {cert.verificationLink && (
                      <div className="mt-5 pt-3 border-t border-white/10">
                        <a 
                          href={cert.verificationLink} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-sm inline-flex items-center gap-1 text-portfolio-light-blue hover:text-white transition-colors group-hover:translate-x-1 transform transition-transform"
                        >
                          Verify Certificate <ExternalLink size={14} className="ml-1" />
                        </a>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </AnimatedElement>
            ))}
          </div>
        </AnimatedElement>
      </div>
    </section>
  );
};

export default Certifications;

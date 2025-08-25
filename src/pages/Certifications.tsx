
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
    year: "2025",
    verificationLink: "https://github.com/UDaygupta12512/Certifications-/blob/main/Salesforce%20ai%20Associate.jpeg",
    description: "Mastered Salesforce Einstein AI capabilities and implementation strategies",
    skills: ["AI Integration", "Predictive Analytics", "Automated Insights"]
  },
  {
    provider: "Salesforce",
    name: "Agentforce Specialist",
    logoColor: "#00A1E0",
    year: "2025",
    verificationLink: "https://github.com/UDaygupta12512/Certifications-/blob/main/Salesforce%20Agentforce%20Specialist.pdf",
    description: "Specialized in Salesforce Agentforce automation and implementation",
    skills: ["Agent Automation", "Salesforce Platform", "Process Automation"]
  },
  {
    provider: "HackerRank",
    name: "Problem-Solving Basics",
    logoColor: "#2EC866",
    year: "2024",
    verificationLink: "https://github.com/UDaygupta12512/Certifications-/blob/main/problem_solving_basic%20certificate.pdf",
    description: "Demonstrated proficiency in algorithms and data structures through practical challenges",
    skills: ["Algorithms", "Data Structures", "Optimization", "Logic"]
  },
  {
    provider: "Microsoft",
    name: "Azure Fundamentals",
    logoColor: "#00A4EF",
    year: "2024",
    verificationLink: "https://media.licdn.com/dms/image/v2/D5622AQFI0h3GwGct6w/feedshare-shrink_800/B56ZhAgyZQG0Ak-/0/1753428995217?e=1758758400&v=beta&t=sj9nUlqBqYEgraaFcHDrhMVqPCaadYXHyS5ibH9IW3A",
    description: "Core knowledge of Microsoft Azure cloud platform and services",
    skills: ["Azure Services", "Cloud Computing", "Virtual Machines", "Storage"]
  },
  {
    provider: "AWS",
    name: "Certified Cloud Practitioner",
    logoColor: "#FF9900",
    year: "2024",
    verificationLink: "https://github.com/UDaygupta12512/Certifications-/blob/main/AWS%20Certified%20Cloud%20Practitioner%20certificate.pdf",
    description: "Foundation-level understanding of AWS cloud services and architecture",
    skills: ["EC2", "S3", "Lambda", "CloudFormation", "IAM"]
  },
  {
    provider: "Oracle",
    name: "Foundations Associate",
    logoColor: "#F80000",
    year: "2025",
    verificationLink: "https://github.com/UDaygupta12512/Certifications-/blob/main/Oracle%20certified.pdf",
    description: "Fundamental knowledge of Oracle database and cloud technologies",
    skills: ["Oracle Database", "SQL", "Cloud Infrastructure", "Data Management"]
  },
  {
    provider: "GeeksforGeeks",
    name: "160-Day DSA Challenge",
    logoColor: "#2F8D46",
    year: "2025",
    verificationLink: "https://github.com/UDaygupta12512/Certifications-/blob/main/GFG%20160.pdf",
    description: "Completed comprehensive 160-day Data Structures and Algorithms challenge",
    skills: ["Data Structures", "Algorithms", "Problem Solving", "Competitive Programming"]
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

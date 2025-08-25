
import { useState, useEffect } from 'react';
import SectionHeading from '../components/SectionHeading';
import { Progress } from '@/components/ui/progress';
import AnimatedElement from '../components/AnimatedElement';

interface Skill {
  name: string;
  level: number;
}

interface SkillCategory {
  category: string;
  skills: Skill[];
}

const Skills = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [visibleSkills, setVisibleSkills] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleSkills(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  const skillCategories: SkillCategory[] = [
    {
      category: "Programming Languages",
      skills: [
        { name: "Python", level: 92 },
        { name: "Java", level: 88 },
        { name: "JavaScript/TypeScript", level: 90 },
        { name: "C/C++", level: 85 },
        { name: "SQL", level: 82 },
        { name: "HTML5/CSS3", level: 95 }
      ]
    },
    {
      category: "Frontend Development",
      skills: [
        { name: "React.js", level: 90 },
        { name: "Next.js", level: 78 },
        { name: "Redux/Zustand", level: 82 },
        { name: "Tailwind CSS", level: 88 },
        { name: "Material-UI", level: 80 },
        { name: "Framer Motion", level: 75 }
      ]
    },
    {
      category: "Backend Development",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express.js", level: 80 },
        { name: "Flask/Django", level: 78 },
        { name: "REST APIs", level: 88 },
        { name: "GraphQL", level: 70 },
        { name: "Microservices", level: 72 }
      ]
    },
    {
      category: "AI & Machine Learning",
      skills: [
        { name: "GPT Integration", level: 85 },
        { name: "Machine Learning", level: 78 },
        { name: "Data Analysis", level: 82 },
        { name: "Neural Networks", level: 75 },
        { name: "TensorFlow/PyTorch", level: 70 },
        { name: "Data Visualization", level: 80 }
      ]
    },
    {
      category: "Cloud & DevOps",
      skills: [
        { name: "AWS (EC2, S3, Lambda)", level: 80 },
        { name: "Microsoft Azure", level: 75 },
        { name: "Google Cloud Platform", level: 72 },
        { name: "Docker", level: 70 },
        { name: "CI/CD Pipelines", level: 68 },
        { name: "Firebase", level: 85 }
      ]
    },
    {
      category: "Databases",
      skills: [
        { name: "MySQL/PostgreSQL", level: 85 },
        { name: "MongoDB", level: 80 },
        { name: "Firebase Firestore", level: 82 },
        { name: "Redis", level: 65 },
        { name: "Oracle Database", level: 70 },
        { name: "Database Design", level: 78 }
      ]
    },
    {
      category: "Mobile Development",
      skills: [
        { name: "React Native", level: 75 },
        { name: "Android Studio", level: 78 },
        { name: "Progressive Web Apps", level: 80 },
        { name: "Mobile UI/UX", level: 72 },
        { name: "Cross-platform Dev", level: 75 }
      ]
    },
    {
      category: "Salesforce",
      skills: [
        { name: "Salesforce AI Associate", level: 85 },
        { name: "Agentforce Specialist", level: 80 },
        { name: "Einstein AI", level: 78 },
        { name: "Apex Programming", level: 70 },
        { name: "Lightning Components", level: 72 },
        { name: "Salesforce Integration", level: 75 }
      ]
    },
    {
      category: "Development Tools",
      skills: [
        { name: "Git/GitHub", level: 90 },
        { name: "VS Code", level: 95 },
        { name: "IntelliJ IDEA", level: 85 },
        { name: "Postman", level: 88 },
        { name: "Figma", level: 70 },
        { name: "Linux/Unix", level: 80 }
      ]
    },
    {
      category: "Problem Solving & Algorithms",
      skills: [
        { name: "Data Structures", level: 88 },
        { name: "Algorithm Design", level: 85 },
        { name: "Competitive Programming", level: 82 },
        { name: "System Design", level: 75 },
        { name: "Code Optimization", level: 80 },
        { name: "Debugging", level: 90 }
      ]
    }
  ];

  const tabs = ["all", ...skillCategories.map(cat => cat.category.toLowerCase())];
  
  const filteredSkills = activeTab === "all" 
    ? skillCategories 
    : skillCategories.filter(cat => cat.category.toLowerCase() === activeTab);

  return (
    <section id="skills" className="section-padding pt-28 md:pt-36">
      <div className="container">
        <SectionHeading 
          title="My Skills"
          subtitle="A comprehensive overview of my technical expertise and proficiencies"
        />
        
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-full text-sm ${
                activeTab === tab
                  ? "bg-portfolio-blue text-white"
                  : "bg-muted text-muted-foreground hover:bg-portfolio-blue/20 dark:bg-muted/60"
              } transition-colors`}
            >
              {tab === "all" ? "All Skills" : tab.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredSkills.map((category, categoryIndex) => (
            <AnimatedElement 
              key={category.category} 
              animation="fade-up" 
              delay={categoryIndex * 100} 
              className="glass-card p-6"
            >
              <h3 className="text-xl font-bold mb-4 gradient-text">{category.category}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, index) => (
                  <div key={skill.name} className="mb-4">
                    <div className="flex justify-between mb-1">
                      <span>{skill.name}</span>
                      <span className="text-portfolio-blue">{skill.level}%</span>
                    </div>
                    <div className="h-2.5 w-full bg-muted rounded-full overflow-hidden">
                      {visibleSkills && (
                        <div 
                          className="h-full rounded-full bg-gradient-to-r from-portfolio-blue to-portfolio-light-blue animated-progress-bar"
                          style={{ 
                            '--progress-width': `${skill.level}%`,
                            animationDelay: `${categoryIndex * 100 + index * 100}ms` 
                          } as React.CSSProperties}
                        />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedElement>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

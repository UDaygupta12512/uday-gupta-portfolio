
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
        { name: "Python", level: 90 },
        { name: "Java", level: 85 },
        { name: "C", level: 80 },
        { name: "C++", level: 85 },
        { name: "JavaScript", level: 85 }
      ]
    },
    {
      category: "Web Development",
      skills: [
        { name: "React.js", level: 85 },
        { name: "Redux", level: 75 },
        { name: "Next.js", level: 70 },
        { name: "Node.js", level: 75 },
        { name: "CSS", level: 80 },
        { name: "HTML", level: 90 }
      ]
    },
    {
      category: "Android Development",
      skills: [
        { name: "Android Studio", level: 75 }
      ]
    },
    {
      category: "AI & ML",
      skills: [
        { name: "Machine Learning", level: 70 },
        { name: "Data Analysis", level: 75 },
        { name: "Neural Networks", level: 65 }
      ]
    },
    {
      category: "Cloud Computing",
      skills: [
        { name: "AWS", level: 70 },
        { name: "GCP", level: 65 },
        { name: "Azure", level: 60 }
      ]
    },
    {
      category: "Database",
      skills: [
        { name: "SQL", level: 80 },
        { name: "MongoDB", level: 70 }
      ]
    },
    {
      category: "Tools",
      skills: [
        { name: "GitHub", level: 85 },
        { name: "VS Code", level: 90 },
        { name: "IntelliJ IDEA", level: 80 },
        { name: "Linux", level: 75 }
      ]
    },
    {
      category: "Additional",
      skills: [
        { name: "Data Structures", level: 85 },
        { name: "Algorithms", level: 80 },
        { name: "Network Security", level: 70 },
        { name: "OS Knowledge", level: 75 }
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

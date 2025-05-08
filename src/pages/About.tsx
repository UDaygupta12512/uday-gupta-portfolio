
import SectionHeading from '../components/SectionHeading';
import { FileText, GraduationCap, Award, Briefcase } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const About = () => {
  return (
    <section id="about" className="section-padding pt-28 md:pt-36">
      <div className="container">
        <SectionHeading 
          title="About Me"
          subtitle="Learn more about my background, education, and passion for technology"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="fade-in space-y-6">
            <div className="glass-card p-6 border border-white/10 rounded-xl">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-portfolio-blue/20 p-3 rounded-full">
                  <GraduationCap className="h-6 w-6 text-portfolio-light-blue" />
                </div>
                <h3 className="text-xl font-semibold">Education</h3>
              </div>
              <p className="text-muted-foreground">B.Tech in Computer Science at Meerut Institute of Engineering and Technology with minor in AI from IIT Ropar.</p>
              <Badge className="mt-2 bg-portfolio-blue/20 text-portfolio-light-blue hover:bg-portfolio-blue/30 border-none">CGPA: 8.5</Badge>
            </div>
            
            <div className="glass-card p-6 border border-white/10 rounded-xl">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-portfolio-blue/20 p-3 rounded-full">
                  <Award className="h-6 w-6 text-portfolio-light-blue" />
                </div>
                <h3 className="text-xl font-semibold">Achievements</h3>
              </div>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Participated in national-level hackathons</li>
                <li>Won 2nd place in college coding competition</li>
                <li>Completed multiple certification courses</li>
              </ul>
            </div>
            
            <div className="glass-card p-6 border border-white/10 rounded-xl">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-portfolio-blue/20 p-3 rounded-full">
                  <Briefcase className="h-6 w-6 text-portfolio-light-blue" />
                </div>
                <h3 className="text-xl font-semibold">Experience</h3>
              </div>
              <p className="text-muted-foreground">Eager to apply my knowledge and skills in a challenging professional environment.</p>
            </div>
          </div>
          
          <div className="fade-in">
            <h3 className="text-2xl font-bold mb-4 gradient-text">
              Highly Motivated Computer Science Student
            </h3>
            
            <div className="space-y-4 text-muted-foreground">
              <p>
                I am a Computer Science undergraduate at Meerut Institute of Engineering and Technology, with a minor in Artificial Intelligence from IIT Ropar. My academic journey has equipped me with a strong foundation in software development, data analytics, AI, and cloud computing.
              </p>
              
              <p>
                What drives me is the opportunity to solve complex problems with innovative solutions. I believe in continuous learning and staying updated with the latest technological advancements.
              </p>
              
              <p>
                Throughout my education, I have maintained a CGPA of 8.5 while actively participating in coding competitions, hackathons, and collaborative projects to enhance my practical skills.
              </p>
              
              <p>
                As a fresher in the industry, I am eager to apply my knowledge and skills in a challenging environment where I can grow professionally while contributing to meaningful projects.
              </p>
            </div>
            
            <div className="mt-8">
              <a 
                href="#" 
                className="inline-flex items-center gap-2 bg-portfolio-blue hover:bg-portfolio-light-blue text-white px-6 py-3 rounded-md transition-colors"
              >
                <FileText size={18} />
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

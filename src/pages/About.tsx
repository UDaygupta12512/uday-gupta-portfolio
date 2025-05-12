
import SectionHeading from '../components/SectionHeading';
import { FileText, GraduationCap, Award, Briefcase, Code, Book, Target } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import AnimatedElement from '../components/AnimatedElement';

const About = () => {
  return (
    <section id="about" className="section-padding pt-28 md:pt-36">
      <div className="container">
        <SectionHeading 
          title="About Me"
          subtitle="Passionate about creating innovative solutions through code and technology"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <AnimatedElement animation="fade-left" className="space-y-6">
            <div className="glass-card p-6 border border-white/10 rounded-xl hover:shadow-lg hover:shadow-portfolio-blue/10 transition duration-300 transform hover:-translate-y-1">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-portfolio-blue/20 p-3 rounded-full">
                  <GraduationCap className="h-6 w-6 text-portfolio-light-blue" />
                </div>
                <h3 className="text-xl font-semibold font-montserrat">Education</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">B.Tech in Computer Science at Meerut Institute of Engineering and Technology with minor in AI from IIT Ropar. Focused on machine learning, data structures, and software engineering.</p>
              <Badge className="mt-3 bg-portfolio-blue/20 text-portfolio-light-blue hover:bg-portfolio-blue/30 border-none">CGPA: 8.5</Badge>
            </div>
            
            <AnimatedElement delay={300} className="glass-card p-6 border border-white/10 rounded-xl hover:shadow-lg hover:shadow-portfolio-accent-purple/10 transition duration-300 transform hover:-translate-y-1">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-portfolio-accent-purple/20 p-3 rounded-full">
                  <Award className="h-6 w-6 text-portfolio-accent-purple" />
                </div>
                <h3 className="text-xl font-semibold font-montserrat">Achievements</h3>
              </div>
              <ul className="list-none text-muted-foreground space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-portfolio-accent-purple">•</span> 
                  <span>Participated in national-level hackathons and secured top positions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-portfolio-accent-purple">•</span> 
                  <span>Won 2nd place in college coding competition with innovative solution</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-portfolio-accent-purple">•</span> 
                  <span>Completed multiple industry-recognized certification courses</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-portfolio-accent-purple">•</span> 
                  <span>Active contributor to open source projects</span>
                </li>
              </ul>
            </AnimatedElement>
            
            <AnimatedElement delay={600} className="glass-card p-6 border border-white/10 rounded-xl hover:shadow-lg hover:shadow-portfolio-accent-green/10 transition duration-300 transform hover:-translate-y-1">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-portfolio-accent-green/20 p-3 rounded-full">
                  <Target className="h-6 w-6 text-portfolio-accent-green" />
                </div>
                <h3 className="text-xl font-semibold font-montserrat">Goals</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">Aspiring to become a solution architect who can design and implement complex systems that leverage AI and cloud technologies to solve real-world problems.</p>
            </AnimatedElement>
          </AnimatedElement>
          
          <AnimatedElement animation="fade-right" delay={300}>
            <h3 className="text-2xl font-bold mb-6 gradient-text font-montserrat">
              Passionate Computer Science Student & Developer
            </h3>
            
            <div className="space-y-4 text-muted-foreground">
              <p className="leading-relaxed">
                As a Computer Science undergraduate at Meerut Institute of Engineering and Technology with a minor in Artificial Intelligence from IIT Ropar, I've developed a comprehensive understanding of software development fundamentals, data analytics, AI algorithms, and cloud infrastructure.
              </p>
              
              <p className="leading-relaxed">
                My academic journey has equipped me with both theoretical knowledge and practical expertise in developing solutions across various domains. I thrive on solving complex problems and continuously expanding my technical horizons.
              </p>
              
              <p className="leading-relaxed">
                Beyond maintaining a strong academic record with an 8.5 CGPA, I actively participate in coding competitions, hackathons, and collaborative projects that challenge me to apply my skills in real-world scenarios while fostering teamwork and innovation.
              </p>
              
              <p className="leading-relaxed">
                I am particularly passionate about the intersection of artificial intelligence and practical applications, where cutting-edge technology can be harnessed to create solutions that positively impact people's lives and businesses.
              </p>
            </div>
            
            <div className="mt-8 flex flex-wrap gap-4">
              <a 
                href="#" 
                className="inline-flex items-center gap-2 bg-portfolio-blue hover:bg-portfolio-light-blue text-white px-6 py-3 rounded-md transition-colors group"
              >
                <FileText size={18} className="group-hover:rotate-12 transition-transform" />
                <span>Download Resume</span>
              </a>
              
              <a 
                href="#skills" 
                className="inline-flex items-center gap-2 bg-transparent border border-portfolio-blue text-portfolio-blue hover:bg-portfolio-blue/10 px-6 py-3 rounded-md transition-colors group"
              >
                <Code size={18} className="group-hover:rotate-12 transition-transform" />
                <span>View My Skills</span>
              </a>
            </div>
          </AnimatedElement>
        </div>
      </div>
    </section>
  );
};

export default About;


import SectionHeading from '../components/SectionHeading';
import { FileText, GraduationCap, Award, Briefcase, Code, Book, Target } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import AnimatedElement from '../components/AnimatedElement';
import { motion } from 'framer-motion';

const About = () => {
  const floatAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      repeatType: "reverse" as const,
      ease: "easeInOut"
    }
  };

  return (
    <section id="about" className="section-padding pt-28 md:pt-36">
      <div className="container">
        <SectionHeading 
          title="About Me"
          subtitle="Passionate about creating innovative solutions through code and technology"
        />
        
        {/* Abstract Graphics */}
        <div className="relative">
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-portfolio-blue/5 rounded-full blur-3xl -z-10"></div>
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-portfolio-accent-purple/5 rounded-full blur-3xl -z-10"></div>
          
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
                <div className="flex gap-2 flex-wrap mt-3">
                  <Badge className="bg-portfolio-blue/20 text-portfolio-light-blue hover:bg-portfolio-blue/30 border-none">CGPA: 8.2</Badge>
                  <Badge className="bg-portfolio-accent-purple/20 text-portfolio-accent-purple hover:bg-portfolio-accent-purple/30 border-none">AI Minor</Badge>
                  <Badge className="bg-portfolio-accent-green/20 text-portfolio-accent-green hover:bg-portfolio-accent-green/30 border-none">2019-2023</Badge>
                </div>
              </div>
              
              <AnimatedElement delay={300} className="glass-card p-6 border border-white/10 rounded-xl hover:shadow-lg hover:shadow-portfolio-accent-purple/10 transition duration-300 transform hover:-translate-y-1">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-portfolio-accent-purple/20 p-3 rounded-full">
                    <Award className="h-6 w-6 text-portfolio-accent-purple" />
                  </div>
                  <h3 className="text-xl font-semibold font-montserrat">Achievements</h3>
                </div>
                <ul className="list-none text-muted-foreground space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="bg-portfolio-accent-purple/10 p-1 rounded-full flex items-center justify-center">
                      <span className="text-portfolio-accent-purple text-lg">•</span>
                    </span>
                    <span>Participated in national-level hackathons and secured top positions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="bg-portfolio-accent-purple/10 p-1 rounded-full flex items-center justify-center">
                      <span className="text-portfolio-accent-purple text-lg">•</span>
                    </span>
                    <span>Won 2nd place in college coding competition with innovative solution</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="bg-portfolio-accent-purple/10 p-1 rounded-full flex items-center justify-center">
                      <span className="text-portfolio-accent-purple text-lg">•</span>
                    </span>
                    <span>Completed multiple industry-recognized certification courses</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="bg-portfolio-accent-purple/10 p-1 rounded-full flex items-center justify-center">
                      <span className="text-portfolio-accent-purple text-lg">•</span>
                    </span>
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
                
                {/* Added visual goals representation */}
                <div className="mt-4 grid grid-cols-3 gap-2">
                  <div className="text-center">
                    <div className="w-full h-1.5 bg-gray-700 rounded-full overflow-hidden">
                      <div className="bg-gradient-to-r from-portfolio-blue to-portfolio-light-blue h-full rounded-full" style={{width: '85%'}}></div>
                    </div>
                    <p className="text-xs mt-1 text-muted-foreground">AI</p>
                  </div>
                  <div className="text-center">
                    <div className="w-full h-1.5 bg-gray-700 rounded-full overflow-hidden">
                      <div className="bg-gradient-to-r from-portfolio-blue to-portfolio-light-blue h-full rounded-full" style={{width: '75%'}}></div>
                    </div>
                    <p className="text-xs mt-1 text-muted-foreground">Cloud</p>
                  </div>
                  <div className="text-center">
                    <div className="w-full h-1.5 bg-gray-700 rounded-full overflow-hidden">
                      <div className="bg-gradient-to-r from-portfolio-blue to-portfolio-light-blue h-full rounded-full" style={{width: '90%'}}></div>
                    </div>
                    <p className="text-xs mt-1 text-muted-foreground">Dev</p>
                  </div>
                </div>
              </AnimatedElement>
            </AnimatedElement>
            
            <AnimatedElement animation="fade-right" delay={300}>
              <div className="relative">
                {/* Decorative elements */}
                <motion.div 
                  className="absolute -top-5 -right-5 w-20 h-20 bg-portfolio-blue/10 rounded-full blur-xl"
                  animate={floatAnimation}
                ></motion.div>
                <motion.div 
                  className="absolute -bottom-5 -left-5 w-16 h-16 bg-portfolio-accent-purple/10 rounded-full blur-xl"
                  animate={{
                    ...floatAnimation,
                    transition: { ...floatAnimation.transition, delay: 0.5 }
                  }}
                ></motion.div>
                
                {/* Content */}
                <div className="glass-card p-8 border border-white/10 rounded-xl">
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
                    
                    <div className="my-6 relative">
                      <div className="relative w-full h-0.5 bg-gray-700/30">
                        <motion.div 
                          className="absolute left-0 top-0 h-full bg-gradient-to-r from-portfolio-blue via-portfolio-light-blue to-portfolio-accent-purple"
                          initial={{ width: 0 }}
                          whileInView={{ width: '100%' }}
                          transition={{ duration: 1.5, ease: "easeOut" }}
                          viewport={{ once: true }}
                        ></motion.div>
                      </div>
                    </div>
                    
                    <p className="leading-relaxed">
                      Beyond maintaining a strong academic record with an 8.2 CGPA, I actively participate in coding competitions, hackathons, and collaborative projects that challenge me to apply my skills in real-world scenarios while fostering teamwork and innovation.
                    </p>
                    
                    <p className="leading-relaxed">
                      I am particularly passionate about the intersection of artificial intelligence and practical applications, where cutting-edge technology can be harnessed to create solutions that positively impact people's lives and businesses.
                    </p>
                  </div>
                  
                  <div className="mt-8 flex flex-wrap gap-4">
                    <a 
                      href="/UDAY-GUPTA-RESUME-CSE.pdf" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-portfolio-blue hover:bg-portfolio-light-blue text-white px-6 py-3 rounded-md transition-colors group"
                      onClick={() => {
                        window.open('/UDAY-GUPTA-RESUME-CSE.pdf', '_blank', 'noopener,noreferrer');
                      }}
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
                </div>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

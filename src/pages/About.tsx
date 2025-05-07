
import SectionHeading from '../components/SectionHeading';
import { FileText } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section-padding pt-28 md:pt-36">
      <div className="container">
        <SectionHeading 
          title="About Me"
          subtitle="Learn more about my background, education, and passion for technology"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="fade-in glass-card p-6">
            <img 
              src="/public/lovable-uploads/748a85d5-a7bd-421e-87e8-9fea482245a7.png" 
              alt="Portfolio Template" 
              className="w-full rounded-lg"
            />
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

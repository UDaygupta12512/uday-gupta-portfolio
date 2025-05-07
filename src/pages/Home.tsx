
import { Link } from 'react-router-dom';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Home = () => {
  return (
    <section className="min-h-screen flex items-center justify-center section-padding pt-28 md:pt-36">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="fade-in">
            <p className="text-portfolio-blue mb-3">Hello, I'm</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Uday Gupta
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium mb-6 gradient-text">
              Aspiring Software Developer | AI Enthusiast
            </h2>
            <p className="text-muted-foreground mb-8 text-lg max-w-lg">
              Passionate about building intelligent and scalable digital solutions. Currently pursuing Computer Science with a minor in AI.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/projects"
                className="bg-portfolio-blue hover:bg-portfolio-light-blue text-white px-6 py-3 rounded-md transition-colors"
              >
                View Projects
              </Link>
              <Link 
                to="/contact"
                className="bg-transparent border border-portfolio-blue text-portfolio-blue hover:bg-portfolio-blue hover:text-white px-6 py-3 rounded-md transition-all"
              >
                Contact Me
              </Link>
            </div>
          </div>
          
          <div className="flex justify-center md:justify-end fade-in delay-200">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-portfolio-blue shadow-xl">
                <Avatar className="w-full h-full">
                  <AvatarImage 
                    src="/lovable-uploads/45012b50-f341-44fe-a3a7-73ebcf916cd5.png" 
                    alt="Uday Gupta" 
                    className="object-cover w-full h-full"
                  />
                  <AvatarFallback className="text-5xl font-bold">UG</AvatarFallback>
                </Avatar>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-portfolio-dark-blue p-4 rounded-lg shadow-lg">
                <div className="text-xl font-bold">Computer Science</div>
                <div className="text-muted-foreground">CGPA 8.5</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;

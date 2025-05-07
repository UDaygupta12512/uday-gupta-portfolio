
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-portfolio-dark-blue/50 backdrop-blur-sm py-8 border-t border-muted">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 gradient-text">Uday Gupta</h3>
            <p className="text-muted-foreground mb-4">
              Passionate about building intelligent and scalable digital solutions.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/UDaygupta12512" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-portfolio-blue transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://linkedin.com/in/uday-gupta-7b0887295" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-portfolio-blue transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:udayapril22@gmail.com" 
                className="text-white hover:text-portfolio-blue transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
              <a 
                href="tel:+917668161626" 
                className="text-white hover:text-portfolio-blue transition-colors"
                aria-label="Phone"
              >
                <Phone size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-muted-foreground hover:text-portfolio-blue transition-colors">Home</a>
              </li>
              <li>
                <a href="/about" className="text-muted-foreground hover:text-portfolio-blue transition-colors">About</a>
              </li>
              <li>
                <a href="/skills" className="text-muted-foreground hover:text-portfolio-blue transition-colors">Skills</a>
              </li>
              <li>
                <a href="/projects" className="text-muted-foreground hover:text-portfolio-blue transition-colors">Projects</a>
              </li>
              <li>
                <a href="/contact" className="text-muted-foreground hover:text-portfolio-blue transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail size={16} />
                <a href="mailto:udayapril22@gmail.com" className="hover:text-portfolio-blue transition-colors">
                  udayapril22@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone size={16} />
                <a href="tel:+917668161626" className="hover:text-portfolio-blue transition-colors">
                  +91 7668161626
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-muted pt-6 text-center text-muted-foreground">
          <p>&copy; {currentYear} Uday Gupta. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

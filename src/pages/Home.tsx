
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { ExternalLink } from 'lucide-react';
import AnimatedTitle from '@/components/AnimatedTitle';

const Home = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 }
    }
  };

  const buttonVariants = {
    rest: { scale: 1 },
    hover: { 
      scale: 1.05,
      transition: { 
        type: 'spring', 
        stiffness: 400, 
        damping: 10 
      }
    },
    tap: { scale: 0.95 }
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { 
        type: 'spring', 
        stiffness: 100, 
        delay: 0.5 
      }
    }
  };

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
    <section className="min-h-screen flex items-center justify-center section-padding pt-28 md:pt-36">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.p 
              className="text-portfolio-blue mb-3"
              variants={itemVariants}
            >
              Hello, I'm
            </motion.p>
            <motion.div variants={itemVariants}>
              <AnimatedTitle 
                text="Uday Gupta" 
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
                letterDelay={40}
              />
            </motion.div>
            <motion.h2 
              className="text-2xl md:text-3xl font-medium mb-6 gradient-text"
              variants={itemVariants}
            >
              Aspiring Software Developer | AI Enthusiast
            </motion.h2>
            <motion.p 
              className="text-muted-foreground mb-8 text-lg max-w-lg"
              variants={itemVariants}
            >
              Passionate about building intelligent and scalable digital solutions. Computer Science undergraduate at Meerut Institute of Engineering and Technology and minor in AI Degree from IIT Ropar.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-4 mb-4"
              variants={itemVariants}
            >
              <motion.div
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <Link 
                  to="/projects"
                  className="bg-portfolio-blue hover:bg-portfolio-light-blue text-white px-6 py-3 rounded-md transition-colors inline-block"
                >
                  View Projects
                </Link>
              </motion.div>

              <motion.div
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <Link 
                  to="/contact"
                  className="bg-transparent border border-portfolio-blue text-portfolio-blue hover:bg-portfolio-blue hover:text-white px-6 py-3 rounded-md transition-all inline-block"
                >
                  Contact Me
                </Link>
              </motion.div>
            </motion.div>
            
            <motion.a 
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
              href="https://codolio.com/profile/Udaygupta12"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-portfolio-blue hover:text-portfolio-light-blue transition-colors"
            >
              <ExternalLink size={16} />
              <span>View my coding portfolio on Codolio</span>
            </motion.a>
          </motion.div>
          
          <motion.div 
            className="flex justify-center md:justify-end"
            initial="hidden"
            animate="visible"
            variants={imageVariants}
          >
            <motion.div 
              className="relative"
              animate={floatAnimation}
            >
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-portfolio-blue shadow-xl">
                <motion.div
                  initial={{ opacity: 0, rotate: -10 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                >
                  <Avatar className="w-full h-full">
                    <AvatarImage 
                      src="/lovable-uploads/45012b50-f341-44fe-a3a7-73ebcf916cd5.png" 
                      alt="Uday Gupta" 
                      className="object-cover w-full h-full"
                    />
                    <AvatarFallback className="text-5xl font-bold">UG</AvatarFallback>
                  </Avatar>
                </motion.div>
              </div>
              <motion.div 
                className="absolute -bottom-6 -right-6 bg-portfolio-dark-blue p-4 rounded-lg shadow-lg"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1.2 }}
              >
                <div className="text-xl font-bold">Computer Science</div>
                <div className="text-muted-foreground">CGPA 8.5</div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Home;

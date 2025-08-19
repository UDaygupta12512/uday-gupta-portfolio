
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { ExternalLink, Code, Briefcase, BookOpen } from 'lucide-react';
import AnimatedTitle from '@/components/AnimatedTitle';
import AnimatedElement from '@/components/AnimatedElement';

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
    <section className="min-h-screen flex items-center justify-center section-padding pt-28 md:pt-36 overflow-hidden">
      <div className="container relative">
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10">
          {/* Animated circles */}
          <motion.div 
            className="absolute top-20 right-10 w-60 h-60 rounded-full bg-portfolio-blue/5 blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.2, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
          <motion.div 
            className="absolute bottom-10 left-0 w-80 h-80 rounded-full bg-portfolio-accent-purple/5 blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.3, 0.2],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: "reverse",
              delay: 1
            }}
          />
          
          {/* Decorative elements */}
          <motion.div
            className="absolute top-1/2 left-[10%] w-2 h-2 bg-portfolio-blue rounded-full"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.7, 1, 0.7]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
          <motion.div
            className="absolute top-[30%] right-[20%] w-3 h-3 bg-portfolio-accent-purple rounded-full"
            animate={{
              scale: [1, 1.8, 1],
              opacity: [0.7, 1, 0.7]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse",
              delay: 1
            }}
          />
          <motion.div
            className="absolute bottom-[20%] left-[30%] w-2 h-2 bg-portfolio-accent-green rounded-full"
            animate={{
              scale: [1, 2, 1],
              opacity: [0.7, 1, 0.7]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatType: "reverse",
              delay: 2
            }}
          />
        </div>
      
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="max-w-xl"
          >
            <motion.div 
              className="inline-block bg-gradient-to-r from-portfolio-blue/20 to-portfolio-light-blue/20 px-4 py-1 rounded-full mb-4"
              variants={itemVariants}
            >
              <span className="text-portfolio-light-blue font-semibold tracking-wide">Hello, I'm</span>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <AnimatedTitle 
                text="Uday Gupta" 
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 font-montserrat"
                letterDelay={40}
              />
            </motion.div>
            
            <motion.h2 
              className="text-2xl md:text-3xl font-medium mb-6 gradient-text font-raleway"
              variants={itemVariants}
            >
              Aspiring Software Developer | AI Enthusiast
            </motion.h2>
            
            <motion.p 
              className="text-muted-foreground mb-8 text-lg max-w-lg leading-relaxed"
              variants={itemVariants}
            >
              Passionate about building intelligent and scalable digital solutions 
              that solve real-world problems. Combining creativity with technical expertise 
              to develop the next generation of software applications.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-4 mb-8"
              variants={itemVariants}
            >
              <motion.div
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                className="relative overflow-hidden group"
              >
                <Link 
                  to="/projects"
                  className="bg-portfolio-blue hover:bg-portfolio-light-blue text-white px-6 py-3 rounded-md transition-colors inline-flex items-center gap-2 z-10 relative"
                >
                  <Briefcase size={18} />
                  <span>View Projects</span>
                </Link>
                <span className="absolute inset-0 bg-white/10 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
              </motion.div>

              <motion.div
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                className="relative overflow-hidden group"
              >
                <Link 
                  to="/contact"
                  className="bg-transparent border border-portfolio-blue text-portfolio-blue hover:bg-portfolio-blue/10 px-6 py-3 rounded-md transition-all inline-flex items-center gap-2 z-10 relative"
                >
                  <Code size={18} />
                  <span>Contact Me</span>
                </Link>
                <span className="absolute inset-0 bg-portfolio-blue/5 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
              </motion.div>
            </motion.div>
            
            <motion.div className="flex gap-6 mt-8" variants={itemVariants}>
              <motion.a 
                whileHover={{ scale: 1.05 }}
                href="https://codolio.com/profile/Udaygupta12"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-portfolio-blue hover:text-portfolio-light-blue transition-colors group"
              >
                <ExternalLink size={18} className="group-hover:rotate-12 transition-transform" />
                <span>Coding Portfolio</span>
              </motion.a>
              
              <motion.a 
                whileHover={{ scale: 1.05 }}
                href="#"
                className="inline-flex items-center gap-2 text-portfolio-blue hover:text-portfolio-light-blue transition-colors group"
              >
                <BookOpen size={18} className="group-hover:rotate-12 transition-transform" />
                <span>Resume</span>
              </motion.a>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="flex justify-center md:justify-end relative"
            initial="hidden"
            animate="visible"
            variants={imageVariants}
          >
            <motion.div 
              className="relative"
              animate={floatAnimation}
            >
              {/* Decorative elements around avatar */}
              <motion.div 
                className="absolute -z-10 inset-0 bg-gradient-to-br from-portfolio-blue/30 to-portfolio-accent-purple/30 rounded-full blur-xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
              
              {/* Code particles floating around the avatar */}
              <motion.div 
                className="absolute -top-8 -right-4 text-portfolio-blue/40 text-xs font-mono"
                animate={{
                  y: [0, -15, 0],
                  opacity: [0.4, 0.8, 0.4]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                &lt;code&gt;
              </motion.div>
              <motion.div 
                className="absolute -bottom-4 left-0 text-portfolio-accent-purple/40 text-xs font-mono"
                animate={{
                  y: [0, 15, 0],
                  opacity: [0.4, 0.7, 0.4]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: 1
                }}
              >
                &lt;/&gt;
              </motion.div>
              
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-gradient-to-r from-portfolio-blue to-portfolio-light-blue shadow-2xl shadow-portfolio-blue/20 relative">
                <motion.div
                  initial={{ opacity: 0, rotate: -10 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                >
                  <Avatar className="w-full h-full">
                    <AvatarImage 
                      src="/lovable-uploads/45012b50-f341-44fe-a3a7-73ebcf916cd5.png" 
                      alt="Uday Gupta" 
                      className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-500"
                    />
                    <AvatarFallback className="text-5xl font-bold">UG</AvatarFallback>
                  </Avatar>
                </motion.div>
                
                {/* Glowing borders */}
                <motion.div 
                  className="absolute -inset-1 rounded-full opacity-40 bg-gradient-to-r from-portfolio-blue via-portfolio-light-blue to-portfolio-accent-purple blur-sm z-0" 
                  animate={{
                    opacity: [0.4, 0.7, 0.4],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                />
              </div>
              
              <motion.div 
                className="absolute -bottom-6 -right-6 bg-background p-5 rounded-lg shadow-2xl shadow-portfolio-blue/10 border border-white/10 glass-card"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1.2 }}
                whileHover={{
                  y: -5,
                  boxShadow: "0 15px 30px rgba(59, 130, 246, 0.2)",
                  transition: { duration: 0.3 }
                }}
              >
                <div className="text-xl font-bold font-montserrat">Computer Science</div>
                <div className="text-portfolio-blue font-medium">CGPA 8.5</div>
              </motion.div>
              
              <motion.div 
                className="absolute -top-3 -left-3 bg-background p-3 rounded-lg shadow-2xl shadow-portfolio-blue/10 border border-white/10 glass-card"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.4 }}
                whileHover={{
                  y: -5,
                  boxShadow: "0 15px 30px rgba(96, 165, 250, 0.2)",
                  transition: { duration: 0.3 }
                }}
              >
                <div className="text-sm font-medium text-portfolio-light-blue">AI Enthusiast</div>
              </motion.div>
              
              {/* New tech badge */}
              <motion.div 
                className="absolute top-1/2 -left-16 bg-background p-3 rounded-lg shadow-xl shadow-portfolio-accent-purple/10 border border-white/10 glass-card"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.6 }}
                whileHover={{
                  y: -5,
                  boxShadow: "0 15px 30px rgba(139, 92, 246, 0.2)",
                  transition: { duration: 0.3 }
                }}
              >
                <div className="text-sm font-medium text-portfolio-accent-purple">Tech Explorer</div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Home;


import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Layout = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Add Google Fonts
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&family=Poppins:wght@300;400;500;600;700&family=Raleway:wght@300;400;500;600&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen flex flex-col font-poppins relative">
      {/* Enhanced background with animated particles - only in dark mode */}
      <div className="fixed inset-0 pointer-events-none z-[-1] dark:block hidden">
        {/* Base texture layer */}
        <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
        
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-portfolio-dark-blue/90 to-portfolio-dark-blue"></div>
        
        {/* Animated particles */}
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                width: Math.random() * 5 + 1 + 'px',
                height: Math.random() * 5 + 1 + 'px',
                left: Math.random() * 100 + '%',
                top: Math.random() * 100 + '%',
                background: `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.3)`,
                boxShadow: '0 0 10px rgba(255, 255, 255, 0.3)'
              }}
              animate={{
                y: [0, Math.random() * 100 - 50],
                opacity: [0.3, 0.7, 0.3]
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'easeInOut',
                delay: Math.random() * 5
              }}
            />
          ))}
        </div>
        
        {/* Glow effects */}
        <div className="absolute top-1/4 left-1/4 w-1/3 h-1/3 bg-portfolio-blue/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-1/3 h-1/3 bg-portfolio-accent-purple/10 rounded-full blur-[100px]"></div>
      </div>
      
      {/* Light mode background */}
      <div className="fixed inset-0 pointer-events-none z-[-1] dark:hidden block bg-gradient-to-br from-slate-50 to-slate-100"></div>
      
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      
      <AnimatePresence>
        {showBackToTop && (
          <motion.div 
            className="fixed bottom-8 right-8 z-50"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.3 }}
          >
            <motion.button 
              onClick={scrollToTop}
              className="bg-portfolio-blue/80 backdrop-blur-md p-3 rounded-full shadow-lg hover:bg-portfolio-light-blue transition-colors border border-white/10 relative overflow-hidden group"
              aria-label="Back to top"
              whileHover={{ scale: 1.1, boxShadow: "0 0 12px rgba(59, 130, 246, 0.5)" }}
              whileTap={{ scale: 0.9 }}
            >
              <ArrowUp className="h-5 w-5 text-white relative z-10" />
              <span className="absolute inset-0 bg-white/10 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Layout;

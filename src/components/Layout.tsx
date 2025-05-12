
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
      {/* Subtle background texture */}
      <div className="fixed inset-0 pointer-events-none z-[-1] opacity-40">
        <div className="absolute inset-0 bg-grid-pattern"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-portfolio-dark-blue/80 to-portfolio-dark-blue"></div>
      </div>
      
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
              className="bg-portfolio-blue/80 backdrop-blur-md p-3 rounded-full shadow-lg hover:bg-portfolio-light-blue transition-colors border border-white/10"
              aria-label="Back to top"
              whileHover={{ scale: 1.1, boxShadow: "0 0 12px rgba(59, 130, 246, 0.5)" }}
              whileTap={{ scale: 0.9 }}
            >
              <ArrowUp className="h-5 w-5 text-white" />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Layout;

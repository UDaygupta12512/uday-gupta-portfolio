
import { Link } from 'react-router-dom';
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { MoveLeft } from 'lucide-react';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center section-padding glass-card m-8 fade-in">
      <div className="text-center">
        <h1 className="text-9xl font-bold mb-4 gradient-text">404</h1>
        <div className="h-2 w-24 bg-gradient-to-r from-portfolio-blue to-portfolio-light-blue mx-auto rounded-full mb-8"></div>
        <p className="text-xl text-muted-foreground mb-8">The page you're looking for doesn't exist or has been moved</p>
        <Link 
          to="/" 
          className="group bg-portfolio-blue hover:bg-portfolio-light-blue text-white px-6 py-3 rounded-md transition-all flex items-center gap-2 mx-auto w-fit"
        >
          <MoveLeft className="h-5 w-5 transform transition-transform group-hover:-translate-x-1" />
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;

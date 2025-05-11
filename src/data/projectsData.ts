
export interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubLink: string;
  liveLink?: string;
  color: string;
  image?: string;
  categories?: string[];
}

export const projects: Project[] = [
  {
    title: "Sorting Visualizer",
    description: "An interactive tool that visualizes various sorting algorithms in action, helping users understand how different sorting methods work and compare their performance.",
    technologies: ["Python", "Pygame", "Tkinter"],
    githubLink: "https://github.com/UDaygupta12512/sorting-visualizer",
    color: "#60a5fa",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&h=500",
    categories: ["ai", "web"]
  },
  {
    title: "Weather App",
    description: "A responsive web application that provides real-time weather information with automatic location detection. Users can search for weather conditions in different locations globally.",
    technologies: ["ReactJS", "NodeJS", "Weather API"],
    githubLink: "https://github.com/UDaygupta12512/weather-app",
    liveLink: "#",
    color: "#3b82f6",
    image: "https://images.unsplash.com/photo-1561484930-998b6a7b22e8?auto=format&fit=crop&w=800&h=500",
    categories: ["web"]
  },
  {
    title: "News App",
    description: "A dynamic news aggregation platform that delivers the latest updates across various categories. Features include live news updates, content filtering, and article search functionality.",
    technologies: ["ReactJS", "API Integration", "JavaScript"],
    githubLink: "https://github.com/UDaygupta12512/news-app",
    color: "#0f172a",
    image: "https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&w=800&h=500",
    categories: ["web", "mobile"]
  },
  {
    title: "Task Manager",
    description: "A feature-rich task management application with drag-and-drop functionality, priority levels, and deadline reminders. Helps users organize their work efficiently.",
    technologies: ["React", "TypeScript", "Firebase"],
    githubLink: "https://github.com/UDaygupta12512/task-manager",
    liveLink: "#",
    color: "#8b5cf6",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&h=500",
    categories: ["web", "mobile"]
  },
  {
    title: "E-commerce Platform",
    description: "A full-stack e-commerce solution with product catalog, shopping cart, user authentication, and payment processing. Features responsive design for all devices.",
    technologies: ["Next.js", "MongoDB", "Stripe API"],
    githubLink: "https://github.com/UDaygupta12512/ecommerce-platform",
    color: "#10b981",
    image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=800&h=500",
    categories: ["web"]
  },
  {
    title: "Portfolio Website",
    description: "A modern, responsive portfolio website showcasing professional skills and projects with interactive elements and smooth animations.",
    technologies: ["React", "Three.js", "Tailwind CSS"],
    githubLink: "https://github.com/UDaygupta12512/portfolio",
    liveLink: "#",
    color: "#f97316",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&h=500",
    categories: ["web"]
  }
];

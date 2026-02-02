
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
    title: "AI Podcast Creation",
    description: "Developed an AI-driven podcast generator that creates full-length podcast episodes using GPT-4.5 for content scripting and ElevenLabs for lifelike voice synthesis. Integrated Firebase for real-time episode storage, user libraries, and content personalization based on listening history.",
    technologies: ["HTML", "JavaScript", "ReactJS", "Tailwind CSS", "Firebase", "ElevenLabs"],
    githubLink: "https://github.com/UDaygupta12512/Podcast-Generation",
    color: "#10b981",
    image: "https://images.unsplash.com/photo-1589903308904-1010c2294adc?auto=format&fit=crop&w=800&h=500",
    categories: ["ai", "web"]
  },
  {
    title: "Magical AI Stories",
    description: "Developed an AI-powered storytelling web app that generates personalized, interactive children's stories using GPT-based language models. Deployed Flask backend with MongoDB to store user preferences and story history for repeatable experiences. Integrated user input (character, theme, tone) with dynamic story branching to enhance engagement and imagination.",
    technologies: ["React JS", "Python", "DALL·E", "React", "Tailwind CSS"],
    githubLink: "https://github.com/UDaygupta12512/Kids-Story",
    color: "#f59e0b",
    image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=800&h=500",
    categories: ["ai", "web"]
  },
  {
    title: "Sorting Visualizer",
    description: "An interactive tool that visualizes various sorting algorithms in action, helping users understand how different sorting methods work and compare their performance.",
    technologies: ["Python", "Pygame", "Tkinter"],
    githubLink: "https://github.com/UDaygupta12512/sorting-visualizer",
    liveLink: "https://github.com/UDaygupta12512/sorting-visualizer",
    color: "#60a5fa",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=800&h=500",
    categories: ["ai", "web"]
  },
  {
    title: "Weather App",
    description: "A responsive web application that provides real-time weather information with automatic location detection. Users can search for weather conditions in different locations globally.",
    technologies: ["ReactJS", "NodeJS", "Weather API"],
    githubLink: "https://github.com/UDaygupta12512/weather-app",
    liveLink: "https://github.com/UDaygupta12512/weather-app",
    color: "#3b82f6",
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&w=800&h=500",
    categories: ["web"]
  },
  {
    title: "Course Alchemy",
    description: "Built an AI-powered course generation platform that transforms raw educational content into structured, interactive learning modules. Features intelligent content organization, quiz generation, and progress tracking for personalized learning experiences.",
    technologies: ["ReactJS", "API Integration", "JavaScript"],
    githubLink: "https://github.com/UDaygupta12512/course-alchemy-ai-web",
    color: "#0f172a",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=800&h=500",
    categories: ["web", "mobile"]
  },
  {
    title: "Meta World",
    description: "Developed an immersive metaverse learning platform that combines virtual reality concepts with educational content. Features 3D interactive environments, collaborative learning spaces, and gamified progression systems for enhanced engagement.",
    technologies: ["React", "TypeScript", "Firebase"],
    githubLink: "https://github.com/UDaygupta12512/meta-learn-worlds-ai",
    color: "#8b5cf6",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&h=500",
    categories: ["web", "mobile"]
  },
  {
    title: "Mindsphere AI",
    description: "Built an AI-powered platform that converts YouTube videos and PDFs into complete micro-courses, improving content creation speed by 60% through automated notes, quizzes, and flashcards. Designed a clean React dashboard that enabled iterative refinement, reducing manual editing workload by 45%, through exportable course formats and an integrated intelligent assistant.",
    technologies: ["MERN Stack", "Tailwind CSS", "TypeScript"],
    githubLink: "https://github.com/UDaygupta12512/Mindsphere--AI",
    color: "#10b981",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&h=500",
    categories: ["ai", "web"]
  },
  {
    title: "Portfolio Website",
    description: "A modern, responsive portfolio website showcasing professional skills and projects with interactive elements and smooth animations.",
    technologies: ["React", "Three.js", "Tailwind CSS"],
    githubLink: "https://github.com/UDaygupta12512/uday-gupta-portfolio",
    color: "#f97316",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&h=500",
    categories: ["web"]
  }
];

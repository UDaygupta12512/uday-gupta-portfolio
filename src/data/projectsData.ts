
export interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubLink: string;
  liveLink?: string;
  color: string;
}

export const projects: Project[] = [
  {
    title: "Sorting Visualizer",
    description: "An interactive tool that visualizes various sorting algorithms in action, helping users understand how different sorting methods work and compare their performance.",
    technologies: ["Python", "Pygame", "Tkinter"],
    githubLink: "https://github.com/UDaygupta12512/sorting-visualizer",
    color: "#60a5fa"
  },
  {
    title: "Weather App",
    description: "A responsive web application that provides real-time weather information with automatic location detection. Users can search for weather conditions in different locations globally.",
    technologies: ["ReactJS", "NodeJS", "Weather API"],
    githubLink: "https://github.com/UDaygupta12512/weather-app",
    liveLink: "#",
    color: "#3b82f6"
  },
  {
    title: "News App",
    description: "A dynamic news aggregation platform that delivers the latest updates across various categories. Features include live news updates, content filtering, and article search functionality.",
    technologies: ["ReactJS", "API Integration", "JavaScript"],
    githubLink: "https://github.com/UDaygupta12512/news-app",
    color: "#0f172a"
  }
];

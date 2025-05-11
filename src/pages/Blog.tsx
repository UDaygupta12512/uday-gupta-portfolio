
import React, { useState } from 'react';
import SectionHeading from '../components/SectionHeading';
import AnimatedElement from '../components/AnimatedElement';
import { Article } from 'lucide-react';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
  readTime: string;
  image: string;
}

const Blog = () => {
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "Getting Started with React and TypeScript",
      excerpt: "Learn how to set up a React project with TypeScript and understand the fundamentals of strongly typed components.",
      date: "May 10, 2025",
      tags: ["React", "TypeScript", "Frontend"],
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    {
      id: 2,
      title: "Machine Learning Fundamentals Every Developer Should Know",
      excerpt: "Explore the basic concepts of machine learning and how they can be applied in everyday development projects.",
      date: "April 25, 2025",
      tags: ["Machine Learning", "AI", "Data Science"],
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    {
      id: 3,
      title: "Cloud Computing: AWS vs. Azure vs. GCP",
      excerpt: "A comparative analysis of the leading cloud platforms to help you choose the right one for your projects.",
      date: "March 15, 2025",
      tags: ["Cloud", "AWS", "Azure", "GCP"],
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    {
      id: 4,
      title: "The Future of Web Development: What to Learn in 2025",
      excerpt: "Stay ahead of the curve by focusing on these emerging technologies and skills in web development.",
      date: "February 28, 2025",
      tags: ["Web Development", "Trends", "Career"],
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    }
  ];

  // Get all unique tags
  const allTags = Array.from(new Set(blogPosts.flatMap(post => post.tags)));

  // Filter posts by active tag
  const filteredPosts = activeTag 
    ? blogPosts.filter(post => post.tags.includes(activeTag))
    : blogPosts;

  return (
    <section className="section-padding pt-28 md:pt-36">
      <div className="container">
        <SectionHeading 
          title="Blog & Articles"
          subtitle="Insights, tutorials, and thoughts on technology and development"
        />

        <div className="mb-10 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => setActiveTag(null)}
            className={`px-4 py-2 rounded-full text-sm transition-colors ${
              activeTag === null 
                ? "bg-portfolio-blue text-white" 
                : "bg-muted text-muted-foreground hover:bg-portfolio-blue/20 dark:bg-muted/60"
            }`}
          >
            All Posts
          </button>
          {allTags.map(tag => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={`px-4 py-2 rounded-full text-sm transition-colors ${
                activeTag === tag
                  ? "bg-portfolio-blue text-white"
                  : "bg-muted text-muted-foreground hover:bg-portfolio-blue/20 dark:bg-muted/60"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <AnimatedElement 
              key={post.id} 
              animation="fade-up" 
              delay={index * 100}
              className="blog-card"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="blog-card-image"
                />
                <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs flex items-center gap-1">
                  <Article className="w-3 h-3" />
                  <span>{post.readTime}</span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {post.tags.map(tag => (
                    <span 
                      key={tag} 
                      className="blog-card-badge"
                      onClick={(e) => {
                        e.preventDefault();
                        setActiveTag(tag);
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h3 className="blog-card-title">{post.title}</h3>
                <p className="text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>
                
                <div className="flex justify-between items-center">
                  <span className="text-xs text-muted-foreground">{post.date}</span>
                  <a 
                    href={`#article-${post.id}`} 
                    className="text-portfolio-blue hover:text-portfolio-light-blue text-sm font-medium transition-colors"
                  >
                    Read More →
                  </a>
                </div>
              </div>
            </AnimatedElement>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SectionHeading from '../components/SectionHeading';
import AnimatedElement from '../components/AnimatedElement';
import { FileText, ArrowRight } from 'lucide-react';

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
      title: "Building Scalable AI Applications with GPT-4 and React",
      excerpt: "Deep dive into creating production-ready AI applications using GPT-4 API integration, React components, and best practices for handling async operations and error boundaries.",
      date: "January 15, 2025",
      tags: ["AI", "React", "GPT-4", "Full Stack"],
      readTime: "12 min read",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
    },
    {
      id: 2,
      title: "Mastering Salesforce AI: From Basics to Enterprise Solutions",
      excerpt: "Complete guide to Salesforce Einstein AI capabilities, implementation strategies, and real-world use cases for automating business processes and enhancing customer experiences.",
      date: "December 20, 2024",
      tags: ["Salesforce", "AI", "CRM", "Enterprise"],
      readTime: "15 min read",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
    },
    {
      id: 3,
      title: "Cloud Architecture Patterns: AWS vs Azure vs GCP",
      excerpt: "Comprehensive comparison of cloud platforms with practical examples, cost analysis, and architecture patterns for different use cases including serverless, microservices, and data pipelines.",
      date: "November 30, 2024",
      tags: ["Cloud", "AWS", "Azure", "GCP", "Architecture"],
      readTime: "18 min read",
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
    },
    {
      id: 4,
      title: "Modern React Patterns: Hooks, Context, and Performance Optimization",
      excerpt: "Advanced React techniques including custom hooks, context optimization, memo patterns, and performance monitoring for building lightning-fast user interfaces.",
      date: "October 25, 2024",
      tags: ["React", "Performance", "Hooks", "Frontend"],
      readTime: "14 min read",
      image: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
    },
    {
      id: 5,
      title: "Data Structures & Algorithms: Problem-Solving Strategies",
      excerpt: "Essential DSA concepts with practical coding examples, time complexity analysis, and proven strategies for tackling technical interviews and competitive programming challenges.",
      date: "September 18, 2024",
      tags: ["DSA", "Algorithms", "Problem Solving", "Interview"],
      readTime: "20 min read",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
    },
    {
      id: 6,
      title: "Machine Learning in Production: MLOps Best Practices",
      excerpt: "End-to-end guide for deploying ML models in production environments, including model versioning, monitoring, A/B testing, and continuous integration pipelines.",
      date: "August 22, 2024",
      tags: ["Machine Learning", "MLOps", "Production", "DevOps"],
      readTime: "16 min read",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
    },
    {
      id: 7,
      title: "Full Stack Development with Firebase and React",
      excerpt: "Complete tutorial on building scalable web applications using Firebase services including Authentication, Firestore, Cloud Functions, and real-time features.",
      date: "July 10, 2024",
      tags: ["Firebase", "Full Stack", "React", "Real-time"],
      readTime: "22 min read",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
    },
    {
      id: 8,
      title: "Competitive Programming: Advanced Techniques and Strategies",
      excerpt: "Master competitive programming with advanced algorithms, optimization techniques, and proven strategies for solving complex problems efficiently under time constraints.",
      date: "June 15, 2024",
      tags: ["Competitive Programming", "Algorithms", "Optimization", "Problem Solving"],
      readTime: "17 min read",
      image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
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
                  <FileText className="w-3 h-3" />
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
                  <Link 
                    to={`/blog/${post.id}`}
                    className="text-portfolio-blue hover:text-portfolio-light-blue text-sm font-medium flex items-center gap-1 transition-colors"
                  >
                    Read Article
                    <ArrowRight size={14} />
                  </Link>
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

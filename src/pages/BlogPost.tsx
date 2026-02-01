
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, Tag } from 'lucide-react';
import AnimatedElement from '../components/AnimatedElement';

interface BlogPostData {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  tags: string[];
  readTime: string;
  image: string;
}

const blogPostsData: BlogPostData[] = [
  {
    id: 1,
    title: "Building Scalable AI Applications with GPT-4 and React",
    excerpt: "Deep dive into creating production-ready AI applications using GPT-4 API integration, React components, and best practices for handling async operations and error boundaries.",
    content: `
## Introduction

Building AI-powered applications has become increasingly accessible with the advent of powerful language models like GPT-4. In this comprehensive guide, we'll explore how to create production-ready AI applications using React and the OpenAI API.

## Setting Up Your Development Environment

First, you'll need to set up your React project with the necessary dependencies:

\`\`\`bash
npx create-react-app my-ai-app --template typescript
npm install openai axios
\`\`\`

## Integrating GPT-4 API

The key to a successful integration is handling the API calls efficiently while providing a smooth user experience.

### Creating the API Service

\`\`\`typescript
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.REACT_APP_OPENAI_API_KEY,
});

export async function generateResponse(prompt: string) {
  const response = await openai.chat.completions.create({
    model: "gpt-4",
    messages: [{ role: "user", content: prompt }],
  });
  return response.choices[0].message.content;
}
\`\`\`

## Best Practices

1. **Error Handling**: Always implement robust error boundaries
2. **Rate Limiting**: Implement client-side rate limiting
3. **Caching**: Cache responses when appropriate
4. **Streaming**: Use streaming for better UX with long responses

## Conclusion

Building AI applications with GPT-4 and React opens up endless possibilities for creating intelligent, user-friendly applications.
    `,
    date: "January 15, 2025",
    tags: ["AI", "React", "GPT-4", "Full Stack"],
    readTime: "12 min read",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
  },
  {
    id: 2,
    title: "Mastering Salesforce AI: From Basics to Enterprise Solutions",
    excerpt: "Complete guide to Salesforce Einstein AI capabilities, implementation strategies, and real-world use cases for automating business processes and enhancing customer experiences.",
    content: `
## Introduction to Salesforce Einstein AI

Salesforce Einstein is an integrated set of AI technologies that makes Salesforce the world's smartest CRM.

## Key Features

### Einstein Prediction Builder
Create custom AI models without writing code to predict business outcomes.

### Einstein Discovery
Automatically discover patterns in your data and get actionable recommendations.

### Einstein Bots
Build intelligent chatbots that can handle customer inquiries 24/7.

## Implementation Strategies

1. **Start Small**: Begin with one use case and expand
2. **Data Quality**: Ensure your data is clean and well-organized
3. **User Training**: Invest in training your team
4. **Iterate**: Continuously improve your models

## Real-World Use Cases

- Lead scoring and prioritization
- Opportunity insights and forecasting
- Customer service automation
- Personalized marketing campaigns

## Conclusion

Salesforce Einstein AI transforms how businesses interact with customers and make data-driven decisions.
    `,
    date: "December 20, 2024",
    tags: ["Salesforce", "AI", "CRM", "Enterprise"],
    readTime: "15 min read",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
  },
  {
    id: 3,
    title: "Cloud Architecture Patterns: AWS vs Azure vs GCP",
    excerpt: "Comprehensive comparison of cloud platforms with practical examples, cost analysis, and architecture patterns for different use cases.",
    content: `
## Overview of Major Cloud Providers

Each cloud provider has unique strengths and ideal use cases.

## AWS (Amazon Web Services)

### Strengths
- Largest market share and most mature ecosystem
- Widest range of services
- Strong enterprise adoption

### Key Services
- EC2, Lambda, S3, RDS, DynamoDB

## Microsoft Azure

### Strengths
- Seamless integration with Microsoft products
- Strong hybrid cloud capabilities
- Enterprise-focused security

### Key Services
- Virtual Machines, Azure Functions, Blob Storage, Cosmos DB

## Google Cloud Platform (GCP)

### Strengths
- Best-in-class data analytics and ML
- Kubernetes expertise (created by Google)
- Competitive pricing

### Key Services
- Compute Engine, Cloud Functions, BigQuery, Cloud Spanner

## Choosing the Right Provider

Consider these factors:
1. Existing infrastructure
2. Team expertise
3. Specific service requirements
4. Cost considerations
5. Geographic presence
    `,
    date: "November 30, 2024",
    tags: ["Cloud", "AWS", "Azure", "GCP", "Architecture"],
    readTime: "18 min read",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
  },
  {
    id: 4,
    title: "Modern React Patterns: Hooks, Context, and Performance Optimization",
    excerpt: "Advanced React techniques including custom hooks, context optimization, memo patterns, and performance monitoring.",
    content: `
## Modern React Development

React has evolved significantly, and understanding modern patterns is essential for building performant applications.

## Custom Hooks

Custom hooks allow you to extract component logic into reusable functions.

\`\`\`typescript
function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(() => {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  });

  const setValue = (value: T) => {
    setStoredValue(value);
    localStorage.setItem(key, JSON.stringify(value));
  };

  return [storedValue, setValue] as const;
}
\`\`\`

## Context Optimization

Avoid unnecessary re-renders by splitting contexts and using useMemo.

## Performance Patterns

1. **React.memo**: Prevent unnecessary re-renders
2. **useMemo/useCallback**: Memoize expensive computations
3. **Code Splitting**: Load components on demand
4. **Virtual Lists**: Render only visible items

## Conclusion

Mastering these patterns will help you build faster, more maintainable React applications.
    `,
    date: "October 25, 2024",
    tags: ["React", "Performance", "Hooks", "Frontend"],
    readTime: "14 min read",
    image: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
  },
  {
    id: 5,
    title: "Data Structures & Algorithms: Problem-Solving Strategies",
    excerpt: "Essential DSA concepts with practical coding examples, time complexity analysis, and proven strategies for technical interviews.",
    content: `
## Why DSA Matters

Strong DSA skills are fundamental for writing efficient code and acing technical interviews.

## Core Data Structures

### Arrays and Strings
- Two-pointer technique
- Sliding window
- Prefix sums

### Trees and Graphs
- BFS and DFS traversal
- Binary search trees
- Graph algorithms (Dijkstra, Floyd-Warshall)

### Hash Tables
- O(1) lookups
- Collision handling
- Applications in caching

## Algorithm Patterns

1. **Divide and Conquer**: Break problems into smaller subproblems
2. **Dynamic Programming**: Optimize by storing intermediate results
3. **Greedy Algorithms**: Make locally optimal choices
4. **Backtracking**: Explore all possibilities systematically

## Interview Tips

- Clarify the problem before coding
- Think out loud
- Start with brute force, then optimize
- Test your solution with examples
    `,
    date: "September 18, 2024",
    tags: ["DSA", "Algorithms", "Problem Solving", "Interview"],
    readTime: "20 min read",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
  },
  {
    id: 6,
    title: "Machine Learning in Production: MLOps Best Practices",
    excerpt: "End-to-end guide for deploying ML models in production environments.",
    content: `
## Introduction to MLOps

MLOps bridges the gap between machine learning development and production deployment.

## Key Components

### Model Versioning
Track model versions, hyperparameters, and training data using tools like MLflow or DVC.

### CI/CD for ML
- Automated testing for data quality
- Model validation pipelines
- Canary deployments

### Monitoring

Monitor your models for:
- Data drift
- Concept drift
- Performance degradation
- Resource utilization

## Best Practices

1. **Reproducibility**: Version everything - code, data, and models
2. **Automation**: Automate training, testing, and deployment
3. **Monitoring**: Set up alerts for model performance
4. **Documentation**: Document your pipelines thoroughly

## Tools and Frameworks

- Kubeflow for orchestration
- MLflow for experiment tracking
- Seldon for model serving
- Prometheus/Grafana for monitoring
    `,
    date: "August 22, 2024",
    tags: ["Machine Learning", "MLOps", "Production", "DevOps"],
    readTime: "16 min read",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
  },
  {
    id: 7,
    title: "Full Stack Development with Firebase and React",
    excerpt: "Complete tutorial on building scalable web applications using Firebase services.",
    content: `
## Why Firebase?

Firebase provides a complete backend solution with minimal setup, perfect for rapid development.

## Core Services

### Authentication
\`\`\`typescript
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

const provider = new GoogleAuthProvider();
const result = await signInWithPopup(auth, provider);
\`\`\`

### Firestore Database
- Real-time synchronization
- Offline support
- Powerful querying

### Cloud Functions
Run backend code in response to events without managing servers.

### Storage
Store and serve user-generated content like images and videos.

## Building a Real-Time App

1. Set up Firebase project
2. Initialize in React app
3. Implement authentication
4. Create Firestore collections
5. Add real-time listeners
6. Deploy with Firebase Hosting

## Security Rules

Always secure your data with proper Firestore and Storage rules.
    `,
    date: "July 10, 2024",
    tags: ["Firebase", "Full Stack", "React", "Real-time"],
    readTime: "22 min read",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
  },
  {
    id: 8,
    title: "Competitive Programming: Advanced Techniques and Strategies",
    excerpt: "Master competitive programming with advanced algorithms and optimization techniques.",
    content: `
## Getting Started

Competitive programming improves problem-solving skills and algorithmic thinking.

## Essential Techniques

### Segment Trees
Efficient range queries and updates in O(log n) time.

### Binary Indexed Trees (Fenwick Trees)
Simpler alternative for certain range query problems.

### String Algorithms
- KMP pattern matching
- Z-algorithm
- Suffix arrays and trees

### Number Theory
- Modular arithmetic
- Prime factorization
- Extended Euclidean algorithm

## Contest Strategies

1. **Read All Problems First**: Identify easy wins
2. **Time Management**: Don't spend too long on one problem
3. **Test Thoroughly**: Use edge cases
4. **Practice Regularly**: Solve problems daily

## Recommended Platforms

- Codeforces
- LeetCode
- AtCoder
- USACO

## Conclusion

Consistent practice and learning from solutions are key to improvement.
    `,
    date: "June 15, 2024",
    tags: ["Competitive Programming", "Algorithms", "Optimization", "Problem Solving"],
    readTime: "17 min read",
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
  }
];

const BlogPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const post = blogPostsData.find(p => p.id === Number(id));

  if (!post) {
    return (
      <section className="section-padding pt-28 md:pt-36">
        <div className="container text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Post Not Found</h1>
          <Link to="/blog" className="text-portfolio-blue hover:underline">
            ← Back to Blog
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="section-padding pt-28 md:pt-36">
      <div className="container max-w-4xl">
        <AnimatedElement animation="fade-up">
          <Link 
            to="/blog" 
            className="inline-flex items-center gap-2 text-portfolio-blue hover:text-portfolio-light-blue transition-colors mb-8"
          >
            <ArrowLeft size={18} />
            <span>Back to Blog</span>
          </Link>

          <div className="relative overflow-hidden rounded-xl mb-8">
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-64 md:h-96 object-cover"
            />
          </div>

          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map(tag => (
              <span 
                key={tag}
                className="bg-portfolio-blue/20 dark:bg-portfolio-blue/30 text-portfolio-blue dark:text-portfolio-light-blue px-3 py-1 rounded-full text-sm font-medium"
              >
                <Tag size={12} className="inline mr-1" />
                {tag}
              </span>
            ))}
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-montserrat">
            {post.title}
          </h1>

          <div className="flex items-center gap-4 text-muted-foreground mb-8">
            <span className="flex items-center gap-1">
              <Calendar size={16} />
              {post.date}
            </span>
            <span className="flex items-center gap-1">
              <Clock size={16} />
              {post.readTime}
            </span>
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <div className="text-foreground leading-relaxed whitespace-pre-line">
              {post.content.split('\n').map((line, index) => {
                if (line.startsWith('## ')) {
                  return <h2 key={index} className="text-2xl font-bold mt-8 mb-4 text-foreground">{line.replace('## ', '')}</h2>;
                }
                if (line.startsWith('### ')) {
                  return <h3 key={index} className="text-xl font-semibold mt-6 mb-3 text-foreground">{line.replace('### ', '')}</h3>;
                }
                if (line.startsWith('```')) {
                  return null; // Skip code fence markers for simplicity
                }
                if (line.startsWith('- ')) {
                  return <li key={index} className="ml-4 text-muted-foreground">{line.replace('- ', '')}</li>;
                }
                if (line.match(/^\d+\./)) {
                  return <li key={index} className="ml-4 list-decimal text-muted-foreground">{line.replace(/^\d+\.\s*/, '')}</li>;
                }
                if (line.trim() === '') {
                  return <br key={index} />;
                }
                return <p key={index} className="text-muted-foreground mb-4">{line}</p>;
              })}
            </div>
          </div>
        </AnimatedElement>
      </div>
    </section>
  );
};

export default BlogPost;

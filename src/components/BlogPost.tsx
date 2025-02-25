
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import Header from './Header';
import { Badge } from './ui/badge';
import { Clock, Tag } from 'lucide-react';

interface BlogMetadata {
  title: string;
  date: string;
  tags: string[];
  content: string;
}

const blogData: Record<string, BlogMetadata> = {
  'future-of-ml': {
    title: 'The Future of Machine Learning in Web Development',
    date: 'March 15, 2024',
    tags: ['Machine Learning', 'Web Development', 'AI'],
    content: ''
  },
  'building-scalable-apps': {
    title: 'Building Scalable Full-Stack Applications',
    date: 'February 28, 2024',
    tags: ['Architecture', 'Full-Stack', 'Scalability'],
    content: ''
  },
  'optimizing-neural-networks': {
    title: 'Optimizing Neural Networks for Production',
    date: 'January 20, 2024',
    tags: ['Neural Networks', 'MLOps', 'Performance'],
    content: ''
  }
};

const BlogGraphic = () => (
  <div className="w-full h-64 bg-gradient-to-br from-secondary to-secondary/30 rounded-lg flex items-center justify-center mb-8">
    <svg width="120" height="120" viewBox="0 0 120 120" className="text-primary/80">
      <g transform="translate(60,60)">
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <g key={i} transform={`rotate(${i * 60})`}>
            <circle cx="0" cy="-30" r="5" fill="currentColor" />
            <line
              x1="0"
              y1="-25"
              x2="0"
              y2="0"
              stroke="currentColor"
              strokeWidth="2"
            />
          </g>
        ))}
        <circle cx="0" cy="0" r="8" fill="currentColor" />
      </g>
    </svg>
  </div>
);

export default function BlogPost() {
  const { slug } = useParams();
  const [content, setContent] = useState('');
  
  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await import(`../content/blog/${slug}.md`);
        const text = await fetch(response.default).then(res => res.text());
        setContent(text);
        
        if (slug && blogData[slug]) {
          blogData[slug].content = text;
        }
      } catch (error) {
        console.error('Failed to load blog post:', error);
        setContent('# Blog post not found');
      }
    };

    fetchContent();
  }, [slug]);

  if (!slug || !blogData[slug]) {
    return <div>Post not found</div>;
  }

  const { title, date, tags } = blogData[slug];

  return (
    <>
      <Header />
      <div className="min-h-screen pt-24">
        <div className="container max-w-3xl mx-auto px-6">
          <div className="mb-8">
            <div className="flex gap-2 mb-4">
              {tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="text-sm">
                  {tag}
                </Badge>
              ))}
            </div>
            <h1 className="text-4xl font-bold mb-4 playfair">{title}</h1>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Clock className="w-4 h-4" />
              <time>{date}</time>
            </div>
          </div>
          
          <BlogGraphic />

          <article className="prose prose-lg max-w-none">
            <ReactMarkdown>{content}</ReactMarkdown>
          </article>
        </div>
      </div>
    </>
  );
}

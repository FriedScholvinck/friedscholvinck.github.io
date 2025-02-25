import { glob } from 'glob';
import fs from 'fs';
import path from 'path';

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  content: string;
  preview: string;
}

// function to generate a preview from the content
function generatePreview(content: string, length = 150): string {
  // Remove markdown headings and formatting
  const plainText = content
    .replace(/#+\s+(.*)/g, '$1') // Remove headings
    .replace(/\*\*(.*?)\*\*/g, '$1') // Remove bold
    .replace(/\*(.*?)\*/g, '$1') // Remove italic
    .replace(/\[(.*?)\]\(.*?\)/g, '$1') // Remove links
    .replace(/!\[(.*?)\]\(.*?\)/g, '$1') // Remove images
    .replace(/```[\s\S]*?```/g, '') // Remove code blocks
    .replace(/`(.*?)`/g, '$1') // Remove inline code
    .trim();

  // Get the first paragraph that's not empty
  const firstParagraph = plainText.split('\n\n').find(p => p.trim().length > 0) || '';
  
  // Truncate to the specified length
  if (firstParagraph.length <= length) {
    return firstParagraph;
  }
  
  // Find the last space before the length limit
  const lastSpace = firstParagraph.substring(0, length).lastIndexOf(' ');
  return `${firstParagraph.substring(0, lastSpace)}...`;
}

interface MarkdownParseResult {
  data: {
    title?: string;
    date?: string;
    tags?: string[];
    [key: string]: unknown;
  };
  content: string;
}

// Parse the custom markdown format where title is the first line and metadata follows
function parseMarkdownWithCustomFormat(fileContent: string): MarkdownParseResult {
  const lines = fileContent.split('\n');
  const result: MarkdownParseResult = {
    data: {},
    content: ''
  };
  
  // Extract title from the first line if it starts with #
  if (lines[0].startsWith('# ')) {
    result.data.title = lines[0].substring(2).trim();
    
    // Process metadata lines
    let i = 1;
    while (i < lines.length) {
      const line = lines[i].trim();
      
      // Skip empty lines
      if (!line) {
        i++;
        continue;
      }
      
      // Check if line contains metadata (key: value format)
      const metadataMatch = line.match(/^(\w+):\s*(.+)$/);
      if (metadataMatch) {
        const [, key, value] = metadataMatch;
        
        // Handle tags specially
        if (key === 'tags') {
          try {
            result.data.tags = JSON.parse(value) as string[];
          } catch (e) {
            result.data.tags = [value]; // Fallback if parsing fails
          }
        } else {
          // Remove quotes from string values
          result.data[key] = value.replace(/^"(.*)"$/, '$1');
        }
        i++;
      } else {
        // If we hit a non-metadata line, we've reached the content
        break;
      }
    }
    
    // The rest is content
    result.content = lines.slice(i).join('\n');
  } else {
    // If no title found, treat the whole file as content
    result.content = fileContent;
  }
  
  return result;
}

// Load all blog posts at build time
export async function getAllPosts(): Promise<BlogPost[]> {
  const contentDir = path.join(process.cwd(), 'src/content/blog');
  const files = await glob('*.md', { cwd: contentDir });
  
  const posts = files.map(filename => {
    const filePath = path.join(contentDir, filename);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { data, content } = parseMarkdownWithCustomFormat(fileContent);
    const slug = filename.replace('.md', '');
    
    return {
      slug,
      title: data.title || 'Untitled',
      date: data.date?.toString() || new Date().toISOString(),
      tags: data.tags || [],
      content,
      preview: generatePreview(content)
    };
  });
  
  // Sort posts by date (newest first)
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

// Get a single post by slug
export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const contentDir = path.join(process.cwd(), 'src/content/blog');
  const filePath = path.join(contentDir, `${slug}.md`);
  
  try {
    if (!fs.existsSync(filePath)) {
      return null;
    }
    
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { data, content } = parseMarkdownWithCustomFormat(fileContent);
    
    return {
      slug,
      title: data.title || 'Untitled',
      date: data.date?.toString() || new Date().toISOString(),
      tags: data.tags || [],
      content,
      preview: generatePreview(content)
    };
  } catch (error) {
    console.error(`Error loading post ${slug}:`, error);
    return null;
  }
} 
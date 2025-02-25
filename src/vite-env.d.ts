/// <reference types="vite/client" />

declare module 'virtual:blog-posts' {
  import { BlogPost } from './utils/blogUtils';
  
  export const allPosts: BlogPost[];
  export const postsBySlug: Record<string, BlogPost>;
}

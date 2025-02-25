import { Plugin } from 'vite';
import { getAllPosts } from './src/utils/blogUtils';

export function blogPostsPlugin(): Plugin {
  const virtualModuleId = 'virtual:blog-posts';
  const resolvedVirtualModuleId = '\0' + virtualModuleId;

  return {
    name: 'vite-plugin-blog-posts',
    async resolveId(id) {
      if (id === virtualModuleId) {
        return resolvedVirtualModuleId;
      }
    },
    async load(id) {
      if (id === resolvedVirtualModuleId) {
        const posts = await getAllPosts();
        
        // Create a map of posts by slug for easy lookup
        const postsBySlug = posts.reduce((acc, post) => {
          acc[post.slug] = post;
          return acc;
        }, {} as Record<string, typeof posts[0]>);
        
        return `
          export const allPosts = ${JSON.stringify(posts)};
          export const postsBySlug = ${JSON.stringify(postsBySlug)};
        `;
      }
    }
  };
} 
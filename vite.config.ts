import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { blogPostsPlugin } from "./vite-blog-plugin";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: "/",
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    blogPostsPlugin(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  assetsInclude: ["**/*.md"],
}));

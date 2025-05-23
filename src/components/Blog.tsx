import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { allPosts } from "virtual:blog-posts";

export default function Blog() {
  return (
    <section id="blog" className="section-padding">
      <div className="container">
        <div className="animate-on-scroll">
          <h2 className="heading">🖋️ Blog</h2>
          <p className="subheading">Thoughts and technology, software development and AI.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {allPosts.map(post => (
            <Link to={`/blog/${post.slug}`} key={post.slug}>
              <Card className="p-6 card-hover animate-on-scroll">
                <p className="text-sm text-muted-foreground mb-2">{post.date}</p>
                <h3 className="font-medium text-lg mb-2">{post.title}</h3>
                <p className="text-muted-foreground text-sm">{post.preview}</p>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

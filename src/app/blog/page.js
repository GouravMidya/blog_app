import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export default async function Blog() {
  // Fetch blog posts from the API
  const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10");
  const posts = await res.json();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Blog Posts</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Link key={post.id} href={`/blog/${post.id}`}>
            <Card className="h-full transition-shadow hover:shadow-lg">
              <CardHeader>
                <CardTitle className="line-clamp-2">{post.title}</CardTitle>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}


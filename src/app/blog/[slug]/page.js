import { ArrowLeft } from 'lucide-react';
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default async function BlogPost({ params }) {
  const { slug } = params;

  // Fetch the blog post from the API
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);
  const post = await res.json();

  if (!post.id) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-3xl font-bold mb-4">Post not found!</h1>
        <Link href="/blog">
          <Button>
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/blog">
        <Button variant="ghost" className="mb-4">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
        </Button>
      </Link>
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl font-bold">{post.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg leading-relaxed">{post.body}</p>
        </CardContent>
      </Card>
    </div>
  );
}


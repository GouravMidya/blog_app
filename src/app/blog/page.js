import Link from "next/link";

const mockPosts = [
  { id: 1, title: "Post 1", slug: "post-1" },
  { id: 2, title: "Post 2", slug: "post-2" },
];

export default function Blog() {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-6">Blog Posts</h1>
      <ul className="space-y-4">
        {mockPosts.map((post) => (
          <li key={post.id}>
            <Link href={`/blog/${post.slug}`}>
              <p className="text-blue-500 hover:underline">{post.title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
